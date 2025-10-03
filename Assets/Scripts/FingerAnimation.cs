using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FingerAnimation : MonoBehaviour
{
    public RectTransform finger;

    void Start()
    {
        PlayTapAnim();
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
