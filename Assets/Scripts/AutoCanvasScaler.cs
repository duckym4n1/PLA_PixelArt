using UnityEngine;
using UnityEngine.UI;

public class AutoCanvasScaler : MonoBehaviour
{
    private CanvasScaler scaler;
    private void Awake()
    {
        scaler = GetComponent<CanvasScaler>();
        ApplyScaler();
    }

    private void ApplyScaler()
    {
        bool isLandscape = Screen.width > Screen.height;
        if (isLandscape)
        {
            scaler.matchWidthOrHeight = 1; // Match height
        }
        else
        {
            scaler.matchWidthOrHeight = 0; // Match width
        }
    }
}
