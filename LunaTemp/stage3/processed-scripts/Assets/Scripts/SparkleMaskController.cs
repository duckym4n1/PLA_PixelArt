using UnityEngine;
using UnityEngine.UI;

public class SparkleMaskController : MonoBehaviour
{
    public static SparkleMaskController Instance;

    public Material sparkleMat;
    public int pixelsPerCell = 32;

    private int texWidth;
    private int texHeight;
    private Texture2D maskTex;
    private Color32[] maskPixels;
    [SerializeField]
    private Board board;

    [SerializeField] private RectTransform boardRT;           
    [SerializeField] private GridLayoutGroup boardGrid;
    [SerializeField] private GameObject particles;

    void Awake()
    {
        Instance = this;
    }

    public void Init(int rows, int cols)
    {
        particles.SetActive(true);
        RectTransform rt = board.GetComponent<RectTransform>();
        float boardWidth = rt.rect.width;
        float boardHeight = rt.rect.height;

        float cellSize = Mathf.Min(boardWidth / cols, boardHeight / rows);

        texWidth = cols;
        texHeight = rows;

        if (texWidth <= 0 || texHeight <= 0)
        {
            Debug.LogError("Invalid mask size!");
            return;
        }

        maskTex = new Texture2D(texWidth, texHeight, TextureFormat.RGBA32, false);
        maskTex.wrapMode = TextureWrapMode.Clamp;

        maskPixels = new Color32[texWidth * texHeight];
        for (int i = 0; i < maskPixels.Length; i++)
            maskPixels[i] = Color.black;

        maskTex.SetPixels32(maskPixels);
        maskTex.Apply();

        sparkleMat.SetTexture("_MaskTex", maskTex);
        UpdateBoardBounds();

    }
    void LateUpdate()
    {
        if (boardRT && boardGrid) UpdateBoardBounds();
    }

    void UpdateBoardBounds()
    {
        if (!boardRT || !boardGrid || board == null) return;

        int rows = board.RowCount;
        int cols = board.ColCount;
        if (rows <= 0 || cols <= 0) return;

        var cell = boardGrid.cellSize;         
        var sp = boardGrid.spacing;         
        var pad = boardGrid.padding;         

        float contentW = cols * cell.x + (cols - 1) * sp.x;
        float contentH = rows * cell.y + (rows - 1) * sp.y;

        var rect = boardRT.rect;

        float leftLocal = rect.xMin + pad.left + (rect.width - pad.left - pad.right - contentW) * 0.5f;
        float bottomLocal = rect.yMin + pad.bottom + (rect.height - pad.top - pad.bottom - contentH) * 0.5f;
        float rightLocal = leftLocal + contentW;
        float topLocal = bottomLocal + contentH;

        Vector3 worldBL = boardRT.TransformPoint(new Vector3(leftLocal, bottomLocal, 0));
        Vector3 worldTR = boardRT.TransformPoint(new Vector3(rightLocal, topLocal, 0));

     
        var mat = sparkleMat; 
        mat.SetVector("_BoardMin", worldBL);
        mat.SetVector("_BoardMax", worldTR);
    }

    public void ClearMask()
    {
        if (maskTex == null || maskPixels == null) return;

        for (int i = 0; i < maskPixels.Length; i++)
            maskPixels[i] = Color.black;

        maskTex.SetPixels32(maskPixels);
        maskTex.Apply();
    }

    public void RevealCell(int r, int c)
    {
        int idx = r * texWidth + c;
        if (idx >= 0 && idx < maskPixels.Length)
            maskPixels[idx] = Color.white;

        maskTex.SetPixels32(maskPixels);
        maskTex.Apply();
    }

#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        if (maskTex == null) return;
        if (board == null) return;

        RectTransform rt = board.GetComponent<RectTransform>();
        Vector3[] corners = new Vector3[4];
        rt.GetWorldCorners(corners);

        Vector3 bottomLeft = corners[0];
        Vector3 topRight = corners[2];

        float boardW = topRight.x - bottomLeft.x;
        float boardH = topRight.y - bottomLeft.y;

        float pixelW = boardW / texWidth;
        float pixelH = boardH / texHeight;

        Gizmos.color = Color.green;

        Gizmos.DrawWireCube(
            (bottomLeft + topRight) * 0.5f,
            new Vector3(boardW, boardH, 0)
        );

        int step = Mathf.Max(1, texWidth / 32); // giảm số line để không lag Scene

        for (int x = 0; x <= texWidth; x += step)
        {
            float wx = bottomLeft.x + x * pixelW;
            Gizmos.DrawLine(new Vector3(wx, bottomLeft.y, 0), new Vector3(wx, topRight.y, 0));
        }

        for (int y = 0; y <= texHeight; y += step)
        {
            float wy = bottomLeft.y + y * pixelH;
            Gizmos.DrawLine(new Vector3(bottomLeft.x, wy, 0), new Vector3(topRight.x, wy, 0));
        }
    }

#endif
}
