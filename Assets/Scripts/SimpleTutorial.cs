using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class SimpleTutorial : MonoBehaviour
{
    public RectTransform finger; 
    public GameObject overlay;   

    private bool isShowing = false;

    void Start()
    {
        /*overlay.SetActive(false);
        finger.gameObject.SetActive(false);*/
        //ShowTutorial();
    }
    public void ShowTutorial()
    {
        isShowing = true;
        overlay.SetActive(true);

        finger.gameObject.SetActive(true);
        finger.anchoredPosition = Vector2.zero;

        PlayTapAnim();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (!isShowing) return;
        HideTutorial();
    }

    void HideTutorial()
    {
        isShowing = false;
        overlay.SetActive(false);
        finger.gameObject.SetActive(false);
        finger.DOKill();
    }

    void PlayTapAnim()
    {
        finger.DOKill();
        finger.localScale = Vector3.one;
        finger.DOScale(0.9f, 0.25f)
              .SetLoops(-1, LoopType.Yoyo)
              .SetEase(Ease.InOutSine);
    }
}
