using UnityEngine;
using UnityEngine.InputSystem;

public class ZoomManager : MonoBehaviour
{
    [Header("Board Settings")]
    public RectTransform board;         
    public RectTransform viewport;     
    public float zoomSpeed = 0.1f;
    public float minScale = 0.5f;
    public float maxScale = 4f;

    [Header("Numbers")]
    public float threshold = 1.5f;      

    private bool isDragging = false;
    private Vector2 lastMousePos;

    void Update()
    {
        HandleMouseZoom();
        HandleMousePan();
        HandleTouchZoom();
        UpdateCellNumbers();
        ClampBoardInView();
    }

    void HandleMouseZoom()
    {
#if UNITY_STANDALONE || UNITY_EDITOR
        if (Mouse.current == null) return;

        float scroll = Mouse.current.scroll.ReadValue().y;
        if (Mathf.Abs(scroll) > 0.01f)
        {
            ApplyZoom(scroll * zoomSpeed);
        }
#endif
    }

    void HandleMousePan()
    {
#if UNITY_STANDALONE || UNITY_EDITOR
        if (Mouse.current == null) return;
        bool showNumbers = board.localScale.x > threshold;
        if (!showNumbers)
            return;
        if (Mouse.current.leftButton.isPressed)
        {
            Vector2 mousePos = Mouse.current.position.ReadValue();
            if (!isDragging)
            {
                lastMousePos = mousePos;
                isDragging = true;
            }
            else
            {
                Vector2 delta = mousePos - lastMousePos;
                board.anchoredPosition += delta;
                lastMousePos = mousePos;
            }
        }
        else
        {
            isDragging = false;
        }
#endif
    }

    void HandleTouchZoom()
    {
#if UNITY_ANDROID || UNITY_IOS
        if (Touchscreen.current != null && Touchscreen.current.touches.Count >= 2)
        {
            var t0 = Touchscreen.current.touches[0];
            var t1 = Touchscreen.current.touches[1];

            if (t0.isInProgress && t1.isInProgress)
            {
                Vector2 p0 = t0.position.ReadValue();
                Vector2 p1 = t1.position.ReadValue();
                Vector2 prev0 = p0 - t0.delta.ReadValue();
                Vector2 prev1 = p1 - t1.delta.ReadValue();

                float prevDist = Vector2.Distance(prev0, prev1);
                float currDist = Vector2.Distance(p0, p1);
                float delta = currDist - prevDist;

                ApplyZoom(delta * 0.001f);
            }
        }
#endif
    }

    void ApplyZoom(float delta)
    {
        Vector3 scale = board.localScale;
        scale += Vector3.one * delta;
        scale.x = Mathf.Clamp(scale.x, minScale, maxScale);
        scale.y = Mathf.Clamp(scale.y, minScale, maxScale);
        board.localScale = scale;

        board.anchoredPosition = Vector2.zero;
    }

    void ClampBoardInView()
    {
        if (viewport == null) return;

        Vector2 boardSize = board.rect.size * board.localScale;
        Vector2 viewportSize = viewport.rect.size;

        Vector2 minPos = (viewportSize - boardSize) * 0.5f;
        Vector2 maxPos = -minPos;

        Vector2 pos = board.anchoredPosition;
        pos.x = Mathf.Clamp(pos.x, minPos.x, maxPos.x);
        pos.y = Mathf.Clamp(pos.y, minPos.y, maxPos.y);

        board.anchoredPosition = pos;
    }

    void UpdateCellNumbers()
    {
        if (Board.Instance.GetCells() == null)
            return;
        bool showNumbers = board.localScale.x > threshold;
        foreach (var cell in Board.Instance.GetCells())
        {
            if (cell != null) cell.SetNumberVisible(showNumbers);
        }
    }
}
