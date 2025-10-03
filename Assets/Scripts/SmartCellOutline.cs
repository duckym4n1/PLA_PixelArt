using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
public class SmartCellOutline : Graphic
{
    public float lineWidth = 2f;
    public Color lineColor = Color.black;

    [HideInInspector] public bool drawTop = true;
    [HideInInspector] public bool drawBottom = true;
    [HideInInspector] public bool drawLeft = true;
    [HideInInspector] public bool drawRight = true;

    protected override void OnPopulateMesh(VertexHelper vh)
    {
        vh.Clear();

        if (!drawTop && !drawBottom && !drawLeft && !drawRight) return;

        float w = rectTransform.rect.width;
        float h = rectTransform.rect.height;
        Vector2 pivotOffset = new Vector2(-w * rectTransform.pivot.x, -h * rectTransform.pivot.y);

        Vector2 bottomLeft = new Vector2(pivotOffset.x, pivotOffset.y);
        Vector2 bottomRight = new Vector2(pivotOffset.x + w, pivotOffset.y);
        Vector2 topLeft = new Vector2(pivotOffset.x, pivotOffset.y + h);
        Vector2 topRight = new Vector2(pivotOffset.x + w, pivotOffset.y + h);

        if (drawTop) DrawLine(vh, topLeft, topRight);
        if (drawBottom) DrawLine(vh, bottomLeft, bottomRight);
        if (drawLeft) DrawLine(vh, bottomLeft, topLeft);
        if (drawRight) DrawLine(vh, bottomRight, topRight);
    }

    void DrawLine(VertexHelper vh, Vector2 start, Vector2 end)
    {
        Vector2 dir = (end - start).normalized;
        Vector2 normal = new Vector2(-dir.y, dir.x) * lineWidth * 0.5f;

        int idx = vh.currentVertCount;

        UIVertex v0 = UIVertex.simpleVert;
        UIVertex v1 = UIVertex.simpleVert;
        UIVertex v2 = UIVertex.simpleVert;
        UIVertex v3 = UIVertex.simpleVert;

        v0.color = v1.color = v2.color = v3.color = lineColor;

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
