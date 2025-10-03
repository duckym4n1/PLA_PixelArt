using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(CanvasRenderer))]
public class GridDrawer : Graphic
{
    private bool[,] activeCells;
    private int rows, cols;

    public float lineWidth = 2f;
    public Color lineColor = Color.black;

    [HideInInspector] public RectTransform boardTransform; // gán từ Board/ZoomManager

    public void SetMatrix(bool[,] matrix)
    {
        activeCells = matrix;
        rows = matrix.GetLength(0);
        cols = matrix.GetLength(1);
        SetVerticesDirty();
    }

    protected override void OnPopulateMesh(VertexHelper vh)
    {
        vh.Clear();
        color = lineColor;

        if (activeCells == null) return;

        float w = rectTransform.rect.width;
        float h = rectTransform.rect.height;

        float cellW = w / cols;
        float cellH = h / rows;

        // offset theo pivot
        Vector2 pivotOffset = new Vector2(-w * rectTransform.pivot.x, -h * rectTransform.pivot.y);

        // scale zoom từ board
        float zoomScale = (boardTransform != null) ? boardTransform.localScale.x : 1f;
        float effectiveLineWidth = lineWidth * zoomScale;

        for (int r = 0; r < rows; r++)
        {
            for (int c = 0; c < cols; c++)
            {
                if (!activeCells[r, c]) continue;

                float x = c * cellW + pivotOffset.x;
                float y = r * cellH + pivotOffset.y;

                Vector2 bottomLeft = new Vector2(x, y);
                Vector2 bottomRight = new Vector2(x + cellW, y);
                Vector2 topLeft = new Vector2(x, y + cellH);
                Vector2 topRight = new Vector2(x + cellW, y + cellH);

                // check neighbor -> chỉ vẽ cạnh hở
                if (r == 0 || !activeCells[r - 1, c]) // cạnh dưới
                    DrawLine(vh, bottomLeft, bottomRight, effectiveLineWidth);

                if (r == rows - 1 || !activeCells[r + 1, c]) // cạnh trên
                    DrawLine(vh, topLeft, topRight, effectiveLineWidth);

                if (c == 0 || !activeCells[r, c - 1]) // cạnh trái
                    DrawLine(vh, bottomLeft, topLeft, effectiveLineWidth);

                if (c == cols - 1 || !activeCells[r, c + 1]) // cạnh phải
                    DrawLine(vh, bottomRight, topRight, effectiveLineWidth);
            }
        }
    }

    void DrawLine(VertexHelper vh, Vector2 start, Vector2 end, float width)
    {
        Vector2 dir = (end - start).normalized;
        Vector2 normal = new Vector2(-dir.y, dir.x) * width * 0.5f;

        int idx = vh.currentVertCount;

        UIVertex v0 = UIVertex.simpleVert;
        UIVertex v1 = UIVertex.simpleVert;
        UIVertex v2 = UIVertex.simpleVert;
        UIVertex v3 = UIVertex.simpleVert;

        v0.color = v1.color = v2.color = v3.color = color;

        // line = quad (song song đường start-end)
        v0.position = start - normal;
        v1.position = start + normal;
        v2.position = end + normal;
        v3.position = end - normal;

        vh.AddVert(v0);
        vh.AddVert(v1);
        vh.AddVert(v2);
        vh.AddVert(v3);

        vh.AddTriangle(idx, idx + 1, idx + 2);
        vh.AddTriangle(idx, idx + 2, idx + 3);
    }
}
