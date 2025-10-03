using DG.Tweening;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Board : MonoBehaviour
{
    private GridLayoutGroup grid;
    private Cell[,] cells;
    public Cell cellPrefab;
    public RectTransform boardRt;
    public float targetScale;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    private void OnEnable()
    {
        grid = GetComponent<GridLayoutGroup>();
        ConvertImage.Instance.RenderPixelMatrix += HandleRenderPixelMatrix;
    }

    public void HandleRenderPixelMatrix()
    {
        var pixelMatrix = ConvertImage.Instance.GetPixelMatrix();
        if (pixelMatrix == null)
        {
            return;
        }

        int rows = pixelMatrix.GetLength(0);
        int cols = pixelMatrix.GetLength(1);
        if (SparkleMaskController.Instance != null)
            SparkleMaskController.Instance.Init(rows, cols);

        SetBoard(rows, cols);

        for (int y = 0; y < rows; y++)
        {
            for (int x = 0; x < cols; x++)
            {
                Cell cell = Instantiate(cellPrefab, this.transform);
                cell.SetValue(y, x, ConvertImage.Instance.GetColorByIndex(pixelMatrix[y, x]));
                //cell.gameObject.SetActive(true);
                cell.EffectedNeighbor += HandleCellPainted;

                AddToCells(cell, y, x);
                if(cell.GetValue() != 0)
                {
                    bool top = (y == 0 || pixelMatrix[y - 1, x] == 0);
                    bool bot = (y == rows - 1 || pixelMatrix[y + 1, x] == 0);
                    bool left = (x == 0 || pixelMatrix[y, x - 1] == 0);
                    bool right = (x == cols - 1 || pixelMatrix[y, x + 1] == 0);

                    cell.SetBorders(top, bot, left, right);
                }
            }
        }
        FitCellsToBoard();
        //ZoomToColor(ConvertImage.Instance.GetCurrentUnColor());
        boardRt.DOScale(Vector3.one * targetScale, 0.6f).SetEase(Ease.OutQuad);
        boardRt.DOAnchorPos(Vector2.zero, 0.6f).SetEase(Ease.OutQuad);
    }
    public void ZoomToColor(int targetColor)
    {
        List<Vector2> positions = new List<Vector2>();

        int rows = cells.GetLength(0);
        int cols = cells.GetLength(1);

        for (int y = 0; y < rows; y++)
        {
            for (int x = 0; x < cols; x++)
            {
                if (ConvertImage.Instance.GetMatrix()[y, x] == targetColor)
                {
                    RectTransform rt = cells[y, x].GetComponent<RectTransform>();
                    positions.Add(rt.anchoredPosition);
                }
            }
        }

        if (positions.Count == 0) return;

        Vector2 center = Vector2.zero;
        foreach (var p in positions) center += p;
        center /= positions.Count;

        float zoomScale = targetScale;
        boardRt.DOScale(Vector3.one * zoomScale, 0.6f).SetEase(Ease.OutQuad);

        Vector2 targetPos = -center * zoomScale;
        boardRt.DOAnchorPos(targetPos, 0.6f).SetEase(Ease.OutQuad);
    }


    public int[,] ResizeMatrixTo25(int[,] original)
    {
        int h = original.GetLength(0);
        int w = original.GetLength(1);

        int targetH = 25;
        int targetW = 25;

        int[,] resized = new int[targetH, targetW];

        for (int y = 0; y < targetH; y++)
        {
            for (int x = 0; x < targetW; x++)
            {
                int srcY = (int)((float)y / targetH * h);
                int srcX = (int)((float)x / targetW * w);

                resized[y, x] = original[srcY, srcX];
            }
        }

        return resized;
    }

    private void FitCellsToBoard()
    {
        if (GetCells() == null)
            return;

        Cell[,] cells = GetCells();
        int rows = cells.GetLength(0);
        int cols = cells.GetLength(1);

        if (rows <= 0 || cols <= 0) return;

        RectTransform rt = grid.GetComponent<RectTransform>();
        float boardWidth = rt.rect.width;
        float boardHeight = rt.rect.height;

        float sizeW = boardWidth / cols;
        float sizeH = boardHeight / rows;
        float cellSize = Mathf.Min(sizeW, sizeH);

        grid.constraint = GridLayoutGroup.Constraint.FixedColumnCount;
        grid.constraintCount = cols;
        grid.cellSize = new Vector2(cellSize, cellSize);

        grid.childAlignment = TextAnchor.MiddleCenter;
    }
    public void SetBoard(int rows, int cols)
    {
        if (grid == null) grid = GetComponent<GridLayoutGroup>();
        grid.constraintCount = cols;
        cells = new Cell[rows, cols];
    }

    public void AddToCells(Cell cell, int r, int c)
    {
        if (cells == null)
        {
            return;
        }
        cells[r, c] = cell;
    }

    private void HandleCellPainted(Cell source)
    {
        if (cells == null)
        {
            return;
        }
        if (source == null)
        {
            return;
        }
        if (ConvertImage.Instance == null)
        {
            return;
        }
        int r = source.row;
        int c = source.col;

        for (int dr = -1; dr <= 1; dr++)
        {
            for (int dc = -1; dc <= 1; dc++)
            {
                if (dr == 0 && dc == 0) continue;

                int nr = r + dr;
                int nc = c + dc;

                if (nr >= 0 && nr < cells.GetLength(0) && nc >= 0 && nc < cells.GetLength(1))
                {
                    Cell neighbor = cells[nr, nc];

                    if (ConvertImage.Instance.GetMatrix()[nr, nc] == ConvertImage.Instance.GetCurrentUnColor())
                    {
                        neighbor.Paint();
                    }
                }
            }
        }
    }
    void OnDestroy()
    {
        ConvertImage.Instance.RenderPixelMatrix -= HandleRenderPixelMatrix;
        if (cells == null)
            return;
        foreach (var cell in cells)
        {
            if (cell != null)
                cell.EffectedNeighbor -= HandleCellPainted;
        }

    }

    public Cell[,] GetCells() => cells;
    public int RowCount => cells?.GetLength(0) ?? 0;
    public int ColCount => cells?.GetLength(1) ?? 0;
}