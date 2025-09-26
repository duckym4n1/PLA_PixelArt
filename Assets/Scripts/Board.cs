using UnityEngine;
using UnityEngine.UI;

public class Board : MonoBehaviour
{
    public static Board Instance;
    private GridLayoutGroup grid;
    private Vector2 cellSize;
    private Cell[,] cells;
    public Cell cellPrefab;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(this.gameObject);
        ConvertImage.Instance.RenderPixelMatrix += RenderPixelMatrix;
    }
    void Start()
    {
        grid = GetComponent<GridLayoutGroup>();
        cellSize = grid.cellSize;
        
    }

    public void RenderPixelMatrix()
    {
        var pixelMatrix = ConvertImage.Instance.GetPixelMatrix();
        if (pixelMatrix == null)
        {
            Debug.LogError("Pixel matrix is null. Cannot render.");
            return;
        }

        int rows = pixelMatrix.GetLength(0);
        int cols = pixelMatrix.GetLength(1);
        FitCellToBoard(rows, cols);
        Debug.Log(rows + " " + cols);

        SetBoard(rows, cols);

        for (int y = 0; y < rows; y++)
        {
            for (int x = 0; x < cols; x++)
            {
                Cell cell = Instantiate(cellPrefab, this.transform);
                cell.SetValue(y, x, ConvertImage.Instance.GetColorByIndex(pixelMatrix[y, x]));
                cell.gameObject.SetActive(true);
                cell.EffectedNeighbor += HandleCellPainted;

                AddToCells(cell, y, x);
            }
        }
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

    private void FitCellToBoard(int row, int col)
    {
        RectTransform rt = grid.GetComponent<RectTransform>();
        float boardWidth = rt.rect.width;
        float boardHeight = rt.rect.height;

        float cellWidth = boardWidth / col;
        float cellHeight = boardHeight / row;

        float size = Mathf.Min(cellWidth, cellHeight);

        grid.constraint = GridLayoutGroup.Constraint.FixedColumnCount;
        grid.constraintCount = col;
        grid.cellSize = new Vector2(size, size);
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
            Debug.LogError("cells array is null!");
            return;
        }
        if (source == null)
        {
            Debug.LogError("source cell is null!");
            return;
        }
        if (ConvertImage.Instance == null)
        {
            Debug.LogError("ConvertImage.Instance is null!");
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
        ConvertImage.Instance.RenderPixelMatrix -= RenderPixelMatrix;
        if(cells == null) 
            return;
        foreach (var cell in cells)
        {
            if (cell != null)
                cell.EffectedNeighbor -= HandleCellPainted;
        }
       
    }

    public Cell[,] GetCells() => cells;
    }
