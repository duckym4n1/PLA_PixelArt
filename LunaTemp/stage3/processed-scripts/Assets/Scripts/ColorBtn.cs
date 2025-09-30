using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ColorBtn : MonoBehaviour
{
    private int colorIndex;
    [SerializeField] 
    private Color32 color;
    [SerializeField]
    private TextMeshProUGUI text;
    [SerializeField]
    private Text txt;
    [SerializeField]
    private Image img;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    private void Awake()
    {
        ConvertImage.Instance.HideShowProgressBar += HideProgress;
        ConvertImage.Instance.UpdateColorProgress += UpdateProgress;
    }
    void Start()
    {
        ConvertImage.Instance.CheckingDoneColor += CheckDone;
    }

    public void Setup(int index, [Bridge.Ref] Color32 col)
    {
        colorIndex = index;
        color = col;
        GetComponent<Image>().color = color;
        txt.text = colorIndex.ToString();
    }

    public void ClickChangeColor()
    {
        if(ConvertImage.Instance.CheckColorComplete(colorIndex-1))
            return;
        ConvertImage.Instance.ChangePaintColor(colorIndex);
        ConvertImage.Instance.HideShowProgressBar?.Invoke();
        ConvertImage.Instance.UpdateColorProgress?.Invoke();
    }    

    public void CheckDone()
    {
        if (colorIndex != ConvertImage.Instance.GetCurrentUnColor())
            return;
        txt.text = "V";
    }

    private void OnDestroy()
    {
        ConvertImage.Instance.CheckingDoneColor -= CheckDone;
        ConvertImage.Instance.HideShowProgressBar -= HideProgress;
        ConvertImage.Instance.UpdateColorProgress -= UpdateProgress;
    }

    public void UpdateProgress()
    {
        if(colorIndex != ConvertImage.Instance.GetCurrentUnColor())
            return;
        img.fillAmount = ConvertImage.Instance.GetCompletionPercent(colorIndex);
    }    

    public void HideProgress()
    {
        if(colorIndex ==  ConvertImage.Instance.GetCurrentUnColor())
        {
            img.gameObject.SetActive(true);
            UpdateProgress();
            return;
        }    
        img.gameObject.SetActive(false);
    }
}
