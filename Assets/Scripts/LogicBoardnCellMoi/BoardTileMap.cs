using DG.Tweening;
using UnityEngine;
using UnityEngine.Tilemaps;

public class BoardTilemap : MonoBehaviour
{
    [Header("Refs")]
    public Tilemap tilemap;
    public TileBase baseTile;
    public RectTransform boardRt;
    public float targetScale = 1f;

    private CellData[,] cells;
    private int[,] pixelMatrix;

    private void OnEnable()
    {
        ConvertImage.Instance.RenderPixelMatrix += HandleRenderPixelMatrix;
    }

    private void OnDestroy()
    {
        ConvertImage.Instance.RenderPixelMatrix -= HandleRenderPixelMatrix;
    }

    public void HandleRenderPixelMatrix()
    {
        pixelMatrix = ConvertImage.Instance.GetPixelMatrix();
        if (pixelMatrix == null)
        {
            Debug.LogError("Pixel matrix is null. Cannot render.");
            return;
        }

        int rows = pixelMatrix.GetLength(0);
        int cols = pixelMatrix.GetLength(1);

        cells = new CellData[rows, cols];
        tilemap.ClearAllTiles();

        for (int y = 0; y < rows; y++)
        {
            for (int x = 0; x < cols; x++)
            {
                int val = pixelMatrix[y, x];
                Color32 color = ConvertImage.Instance.GetColorByIndex(val);
                cells[y, x] = new CellData(y, x, val, color);

                if (val != 0)
                {
                    Vector3Int pos = new Vector3Int(x, -y, 0);
                    tilemap.SetTile(pos, baseTile);
                    tilemap.SetTileFlags(pos, TileFlags.None);

                    tilemap.SetColor(pos, Color.white);
                }
            }
        }

        boardRt.DOScale(Vector3.one * targetScale, 0.6f).SetEase(Ease.OutQuad);
        boardRt.DOAnchorPos(Vector2.zero, 0.6f).SetEase(Ease.OutQuad);
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 worldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            HandleClick(worldPos);
        }
    }

    public void HandleClick(Vector3 worldPos)
    {
        Vector3Int pos = tilemap.WorldToCell(worldPos);
        int r = -pos.y, c = pos.x;

        if (!IsInside(r, c)) return;
        var cell = cells[r, c];
        if (cell == null || cell.value == 0) return;
        if (cell.isColored) return;

        if (cell.value == ConvertImage.Instance.GetCurrentUnColor())
        {
            cell.Paint(tilemap);
            PaintNeighbors(r, c);
        }
    }

    public void HighlightCellsForCurrentColor()
    {
        int current = ConvertImage.Instance.GetCurrentUnColor();
        int rows = cells.GetLength(0);
        int cols = cells.GetLength(1);

        for (int r = 0; r < rows; r++)
        {
            for (int c = 0; c < cols; c++)
            {
                var cell = cells[r, c];
                if (cell == null || cell.value == 0) continue;

                if (!cell.isColored)
                {
                    if (cell.value == current)
                        cell.Highlight(tilemap);
                    else
                        cell.ResetHighlight(tilemap);
                }
            }
        }
    }

    private void PaintNeighbors(int r, int c)
    {
        for (int dr = -1; dr <= 1; dr++)
        {
            for (int dc = -1; dc <= 1; dc++)
            {
                if (dr == 0 && dc == 0) continue;

                int nr = r + dr, nc = c + dc;
                if (!IsInside(nr, nc)) continue;

                var neighbor = cells[nr, nc];
                if (!neighbor.isColored &&
                    neighbor.value == ConvertImage.Instance.GetCurrentUnColor())
                {
                    neighbor.Paint(tilemap);
                }
            }
        }
    }

    private bool IsInside(int r, int c)
    {
        return r >= 0 && r < cells.GetLength(0) && c >= 0 && c < cells.GetLength(1);
    }

    public CellData[,] GetCells() => cells;
    public int RowCount => cells?.GetLength(0) ?? 0;
    public int ColCount => cells?.GetLength(1) ?? 0;
}
