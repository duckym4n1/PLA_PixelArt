using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class Palette : MonoBehaviour
{
    private GridLayoutGroup grid;
    [SerializeField]
    private GameObject colorButtonPrefab;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Awake()
    {
        ConvertImage.Instance.RenderPixelMatrix += RenderPalette;
    }

    public void RenderPalette()
    {
        for (int i = 0; i < ConvertImage.Instance.GetColorCount(); i++)
        {
            GameObject btn = Instantiate(colorButtonPrefab, transform);
            btn.GetComponent<ColorBtn>().Setup(i + 1, ConvertImage.Instance.GetColorByIndex(i + 1));
            btn.SetActive(true);
        }
    }    
    private void OnDestroy()
    {
        ConvertImage.Instance.RenderPixelMatrix -= RenderPalette;
    }
}
