using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(GridLayoutGroup))]
public class ResponsiveGrid : MonoBehaviour
{
    private GridLayoutGroup grid;
    private RectTransform rt;

    void Awake()
    {
        grid = GetComponent<GridLayoutGroup>();
        rt = GetComponent<RectTransform>();

        ApplyLayout();
    }
    
    private void ApplyLayout()
    {
        bool isLandscape = Screen.width > Screen.height;

        if (isLandscape)
        {
            grid.startAxis = GridLayoutGroup.Axis.Horizontal;
            grid.cellSize = new Vector2(rt.rect.width / 2f, grid.cellSize.y);
        }
        else
        {
            grid.startAxis = GridLayoutGroup.Axis.Vertical;
            grid.cellSize = new Vector2(grid.cellSize.x, rt.rect.height / 2f);
        }
    }
    public void TestApplyLayout() => ApplyLayout();
}
