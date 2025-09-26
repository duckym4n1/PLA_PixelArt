using UnityEngine;

public class ChooseBtn : MonoBehaviour
{
    public Data data;
    [SerializeField] private GameObject chooseScene;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    
    public void OnClick()
    {
        ConvertImage.Instance.LoadData(data);
        chooseScene.SetActive(false);
    }
}
