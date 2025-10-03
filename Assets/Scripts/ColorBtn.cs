using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class ColorBtn : MonoBehaviour
{
    private int colorIndex;
    [SerializeField] 
    private Color32 color;
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

    public void Setup(int index, Color32 col)
    {
        colorIndex = index;
        color = col;
        GetComponent<Image>().color = color;
        txt.text = colorIndex.ToString();
        txt.color = GetReadableTextColor(color);
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
        Sequence seq = DOTween.Sequence();

        seq.Append(transform.DOScale(2f, 0.15f).SetEase(Ease.OutBack));

        seq.Join(transform.DOShakeScale(
            duration: 0.4f,   
            strength: 0.25f, 
            vibrato: 20,      
            randomness: 90,
            fadeOut: true
        ));


        seq.Append(transform.DOScale(1f, 0.15f).SetEase(Ease.InBack));
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

    private Color GetReadableTextColor(Color32 backgroundColor)
    {
        float brightness = (0.299f * backgroundColor.r +
                            0.587f * backgroundColor.g +
                            0.114f * backgroundColor.b) / 255f;

        return brightness > 0.5f ? Color.black : Color.white;
    }
}
