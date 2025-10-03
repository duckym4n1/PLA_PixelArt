using UnityEngine;

public class ZoomManager : MonoBehaviour
{
    public RectTransform boardPort;
    public RectTransform boardLand;
    public RectTransform viewportPort;
    public RectTransform viewportLand;

    public float zoomSpeed = 0.1f;
    public float minScale = 0.5f;
    public float maxScale = 10f;

    private RectTransform board;
    private RectTransform viewport;

    private bool isDragging;
    private Vector2 lastMousePos;

    void Update()
    {
        board = Screen.width > Screen.height ? boardLand : boardPort;
        viewport = (board == boardLand) ? viewportLand : viewportPort;

        if (board == null || viewport == null) return;

        HandleMouseZoom();
        HandleMousePan();
        ClampBoardInView();
    }

    void HandleMouseZoom()
    {
        float scroll = Input.mouseScrollDelta.y;
        if (Mathf.Abs(scroll) > 0.01f)
            ApplyZoom(scroll * zoomSpeed);
    }

    void ApplyZoom(float delta)
    {
        Vector3 scale = board.localScale;
        scale += Vector3.one * delta;
        scale.x = Mathf.Clamp(scale.x, minScale, maxScale);
        scale.y = Mathf.Clamp(scale.y, minScale, maxScale);
        board.localScale = scale;
    }

    void HandleMousePan()
    {
        if (Input.GetMouseButton(0))
        {
            Vector2 mousePos = Input.mousePosition;
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
    }

    void ClampBoardInView()
    {
        Vector2 boardSize = board.rect.size * board.localScale;
        Vector2 viewportSize = viewport.rect.size;
        Vector2 pos = board.anchoredPosition;

        if (boardSize.x <= viewportSize.x)
            pos.x = 0;
        else
        {
            float half = (boardSize.x - viewportSize.x) / 2f;
            pos.x = Mathf.Clamp(pos.x, -half, half);
        }

        if (boardSize.y <= viewportSize.y)
            pos.y = 0;
        else
        {
            float half = (boardSize.y - viewportSize.y) / 2f;
            pos.y = Mathf.Clamp(pos.y, -half, half);
        }

        board.anchoredPosition = pos;
    }
}
