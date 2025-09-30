using UnityEngine;

public class BoardManager : MonoBehaviour
{
    public GameObject boardPort;
    public GameObject boardLand;
    public GameObject boardPortShadow;
    public GameObject boardLandShadow;
    public Palette palettePort;
    public Palette paletteLand;
    private int boardPortIndex;
    private int boardLandIndex;
    private bool isPortrait;
    private bool currentIsPortrait = false;
    // Start is called before the first frame update
    private void Show()
    {
        isPortrait = Screen.width < Screen.height;
        if(isPortrait == currentIsPortrait)
            return;
        if(isPortrait)
        {
            palettePort.ApplyCellSize();
        }
        else
        {
            paletteLand.ApplyCellSize();
        }
        currentIsPortrait = isPortrait;
        SetOrderBetweenTwo(boardPort, boardLand, isPortrait);
        boardPortShadow.SetActive(!isPortrait);
        boardLandShadow.SetActive(isPortrait);
    }

    void Start()
    {
        boardPortIndex = boardPort.transform.GetSiblingIndex();
        boardLandIndex = boardLand.transform.GetSiblingIndex();
        SetOrderBetweenTwo(boardPort, boardLand, isPortrait);
        boardPortShadow.SetActive(!isPortrait);
        boardLandShadow.SetActive(isPortrait);
        Show();
    }   

    // Update is called once per frame
    void Update()
    {
        Show();
    }

    public void SetOrderBetweenTwo(GameObject btn1, GameObject btn2, bool conditionA)
    {

        if (conditionA)
        {
            btn2.transform.SetSiblingIndex(boardPortIndex);
            btn1.transform.SetSiblingIndex(boardLandIndex);
        }
        else
        {
            btn1.transform.SetSiblingIndex(boardPortIndex);
            btn2.transform.SetSiblingIndex(boardLandIndex);
        }
    }
}
