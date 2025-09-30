using UnityEngine;

public class ZoomManager : MonoBehaviour
{
    [Header("Board Settings")]
    public GameObject boardPort;
    public GameObject boardLand;
    private GameObject currentBoard;
    private GameObject currentBoardLand;
    private Board currentBoardScript;
    private RectTransform board;
    public RectTransform viewportPort;
    public RectTransform viewportLand;
    private RectTransform viewport;
    public float zoomSpeed = 0.1f;
    public float minScale = 0.5f;
    public float maxScale = 4f;
    public float snapThreshold = 200f;  
    public float snapSpeed = 5f;        

    [Header("Numbers")]
    public float threshold = 1.5f;

    private bool isDragging = false;
    private Vector2 lastMousePos;
    private void Start()
    {
        currentBoardLand = boardLand;
    }
    void Update()
    {
        currentBoard = Screen.width > Screen.height ? boardLand : boardPort;
        board = currentBoard.GetComponent<RectTransform>();
        if(currentBoard == boardLand)
        {
            if (!IsPointerInsideViewport(viewportLand))
                return;
        }
        else
        {
            if (!IsPointerInsideViewport(viewportPort))
                return;
        }
        HandleMouseZoom();
        HandleMousePan();
        HandleTouchZoom();
        UpdateCellNumbers();
        ClampBoardInView();
        if (!isDragging && board.localScale.x <= 1.5f)
        {
            if (Vector2.Distance(board.anchoredPosition, Vector2.zero) > 0.01f)
            {
                board.anchoredPosition = Vector2.Lerp(
                    board.anchoredPosition,
                    Vector2.zero,
                    Time.deltaTime * snapSpeed
                );
            }
        }
    }

    void HandleMouseZoom()
    {
#if UNITY_STANDALONE || UNITY_EDITOR
        float scroll = Input.GetAxis("Mouse ScrollWheel");
        if (Mathf.Abs(scroll) > 0.01f)
        {
            ApplyZoom(scroll * zoomSpeed);
        }
#endif
    }

    void HandleMousePan()
    {
#if UNITY_STANDALONE || UNITY_EDITOR
        bool showNumbers = board.localScale.x > threshold;
        if (!showNumbers)
            return;

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
#endif
    }

    void HandleTouchZoom()
    {
#if UNITY_ANDROID || UNITY_IOS
        if (Input.touchCount == 2)
        {
            Touch t0 = Input.GetTouch(0);
            Touch t1 = Input.GetTouch(1);

            Vector2 prev0 = t0.position - t0.deltaPosition;
            Vector2 prev1 = t1.position - t1.deltaPosition;

            float prevDist = Vector2.Distance(prev0, prev1);
            float currDist = Vector2.Distance(t0.position, t1.position);
            float delta = currDist - prevDist;

            ApplyZoom(delta * 0.001f);
        }
        else if (Input.touchCount == 1 && board.localScale.x > threshold)
        {
            Touch t0 = Input.GetTouch(0);
            if (t0.phase == TouchPhase.Moved)
            {
                board.anchoredPosition += t0.deltaPosition;
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

        if (scale.x <= 1.01f)
        {
            board.anchoredPosition = Vector2.zero;
        }
    }
    bool IsPointerInsideViewport(RectTransform viewport)
    {
        Vector2 localMousePos;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            viewport,
            Input.mousePosition,
            null,
            out localMousePos
        );

        return viewport.rect.Contains(localMousePos);
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
        currentBoardScript = currentBoard.GetComponent<Board>();
        if (currentBoardScript == null || currentBoardScript.GetCells() == null)
            return;

        bool showNumbers = board.localScale.x > threshold;
        foreach (var cell in currentBoardScript.GetCells())
        {
            if (cell != null) cell.SetNumberVisible(showNumbers);
        }
    }
}
