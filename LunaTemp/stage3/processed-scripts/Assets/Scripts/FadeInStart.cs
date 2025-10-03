using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FadeInStart : MonoBehaviour
{
    public float duration = 1f;

    void Start()
    {
        Invoke("FadeIn", 0.5f);
    }

    public void FadeIn()
    {
        CanvasGroup cg = GetComponent<CanvasGroup>();
        if (cg == null) cg = gameObject.AddComponent<CanvasGroup>();

        cg.alpha = 0f;
        cg.DOFade(1f, duration);
    }
}
