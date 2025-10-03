using UnityEngine;
using UnityEngine.Tilemaps;

public class CellData
{
    public int row;
    public int col;
    public int value;
    public bool isColored;
    public Color32 color;

    public CellData(int r, int c, int v, Color32 cl)
    {
        row = r;
        col = c;
        value = v;
        color = cl;
        isColored = false;
    }

    public void Highlight(Tilemap tilemap)
    {
        if (isColored || value == 0) return;
        Vector3Int pos = new Vector3Int(col, -row, 0);
        tilemap.SetColor(pos, Color.gray);
    }

    public void ResetHighlight(Tilemap tilemap)
    {
        if (isColored || value == 0) return;
        Vector3Int pos = new Vector3Int(col, -row, 0);
        tilemap.SetColor(pos, Color.white);
    }

    public void Paint(Tilemap tilemap)
    {
        if (value == 0 || isColored) return;
        if (value != ConvertImage.Instance.GetCurrentUnColor()) return;

        isColored = true;
        Vector3Int pos = new Vector3Int(col, -row, 0);
        tilemap.SetColor(pos, color);

        ConvertImage.Instance.SyncProcesses?.Invoke(row, col, null);
        SparkleMaskController.Instance?.RevealCell(row, col);
    }
}
