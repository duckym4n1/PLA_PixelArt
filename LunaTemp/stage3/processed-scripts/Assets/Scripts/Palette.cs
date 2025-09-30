using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class Palette : MonoBehaviour
{
    private GridLayoutGroup grid;
    private RectTransform board;
    private List<ColorBtn> colorButtons = new List<ColorBtn>();
    [SerializeField]
    private GameObject colorButtonPrefab;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Awake()
    {

        grid = GetComponent<GridLayoutGroup>();
        board = GetComponent<RectTransform>();
    }

    private void OnEnable()
    {
        ConvertImage.Instance.RenderPixelMatrix += HandleRenderPalette;
    }
    public void HandleRenderPalette()
    {
        ApplyCellSize();
        for (int i = 0; i < ConvertImage.Instance.GetColorCount(); i++)
        {
            GameObject btn = Instantiate(colorButtonPrefab, transform);
            btn.GetComponent<ColorBtn>().Setup(i + 1, ConvertImage.Instance.GetColorByIndex(i + 1));
            btn.SetActive(true);
            colorButtons.Add(btn.GetComponent<ColorBtn>());
        }
    }

    public void ApplyCellSize()
    {
        if (ConvertImage.Instance.GetColorDictionary() == null)
            return;

        int colorCount = ConvertImage.Instance.GetColorCount();
        if (colorCount <= 0) return;

        float width = board.rect.width;
        float height = board.rect.height;

        //float totalSpacing = grid.spacing.x * (colorCount - 1);
        //float totalPadding = grid.padding.left + grid.padding.right;

        //float cellWidth = (width - totalSpacing - totalPadding) / colorCount;
        float cellWidth = (width) / colorCount;
        float cellHeight = height - (grid.padding.top + grid.padding.bottom);

        grid.constraint = GridLayoutGroup.Constraint.FixedRowCount;
        grid.constraintCount = 1; 
        grid.cellSize = new Vector2(cellWidth, cellHeight);
    }


    private void OnDestroy()
    {
        ConvertImage.Instance.RenderPixelMatrix -= HandleRenderPalette;
    }
}
