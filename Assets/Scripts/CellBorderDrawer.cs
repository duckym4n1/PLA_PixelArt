using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Image))]
public class CellBorderDrawer : Graphic
{
    public bool top = true;
    public bool bottom = true;
    public bool left = true;
    public bool right = true;

    public float borderThickness = 2f;

    protected override void OnPopulateMesh(VertexHelper vh)
    {
        vh.Clear();

        Rect r = rectTransform.rect;
        float xMin = r.xMin;
        float xMax = r.xMax;
        float yMin = r.yMin;
        float yMax = r.yMax;
        if (top) DrawLine(vh, new Vector2(xMin, yMax), new Vector2(xMax, yMax));
        if (bottom) DrawLine(vh, new Vector2(xMin, yMin), new Vector2(xMax, yMin));
        if (left) DrawLine(vh, new Vector2(xMin, yMin), new Vector2(xMin, yMax));
        if (right) DrawLine(vh, new Vector2(xMax, yMin), new Vector2(xMax, yMax));
    }

    void DrawLine(VertexHelper vh, Vector2 start, Vector2 end)
    {
        float half = borderThickness / 2f;
        Vector2 dir = (end - start).normalized;
        Vector2 normal = new Vector2(-dir.y, dir.x) * half;

        int index = vh.currentVertCount;

        UIVertex v = UIVertex.simpleVert;
        v.color = color;

        v.position = start - normal;
        vh.AddVert(v);
        v.position = start + normal;
        vh.AddVert(v);
        v.position = end + normal;
        vh.AddVert(v);
        v.position = end - normal;
        vh.AddVert(v);

        vh.AddTriangle(index + 0, index + 1, index + 2);
        vh.AddTriangle(index + 2, index + 3, index + 0);
    }
}
