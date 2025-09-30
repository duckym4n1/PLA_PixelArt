using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.UI;
public class Cell : MonoBehaviour, IPointerDownHandler, IPointerEnterHandler, IPointerUpHandler
{
    public SpriteMask mask;
    public Text txt;
    private Image sprite;
    public int row;
    public int col;
    private int value;
    private Color32 cellColor;
    private static bool isHolding = false;
    private bool isColored = false;
    [SerializeField]
    private Sprite afterPaint;
    [SerializeField]
    private GameObject sparkles;
    /*[SerializeField]
    private GameObject sparkle;*/

    public UnityAction<Cell> EffectedNeighbor;

    // Start is called once before the first execution of Update after the MonoBehaviour is created

    void Awake()
    {
        sprite = GetComponent<Image>();
        if (sprite == null)
            Debug.LogError("Sprite is null");
        ConvertImage.Instance.ActivateCell += Activate;
        ConvertImage.Instance.SyncProcesses += syncProcess;
    }
    void Start()
    {
        if(value == 0)
        {
            Color color = sprite.color;
            color.a = 0f;           
            sprite.color = color;
            txt.text = "";
        }

    }
    public void SetValue(int r, int c, Color32 cl)
    {
        row = r;
        col = c;
        value = ConvertImage.Instance.GetMatrix()[r, c];
        txt.text = ConvertImage.Instance.GetMatrix()[r, c].ToString();
        cellColor = cl;
    }

    public void Paint()
    {
        if (ConvertImage.Instance.GetMatrix()[row, col] == 0)
            return;
        if(isColored)
            return;
        if (!ConvertImage.Instance.CountUnColor(value)) 
            return;
        //sparkles.SetActive(true);
        sprite.color = cellColor;
        txt.text = "";
        isColored = true;
        sprite.sprite = afterPaint;
        if (mask != null)
            mask.enabled = true;
        ConvertImage.Instance.SyncProcesses?.Invoke(row, col, this.gameObject);
    }

    private void SyncPaint()
    {
        if (isColored)
            return;
        sprite.color = cellColor;
        txt.text = "";
        isColored = true;
        sprite.sprite = afterPaint;
    }    
    
    public void Activate()
    {
        if (isColored || value ==0)
            return;
        if (value != ConvertImage.Instance.GetCurrentUnColor())
        {
            sprite.color = Color.white;
            return;
        }
        sprite.color = Color.gray;
    }    
    public void Effected()
    {
        Paint();
        EffectedNeighbor?.Invoke(this);
    }    
    public void OnPointerDown(PointerEventData eventData)
    {
        if (isColored)
            return;
        isHolding = true;
        Effected();
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (isColored)
            return;
        if (isHolding)
        {
            Effected();
        }
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        isHolding = false;
    }
    public Image GetSprite() => sprite;
    
    void OnDestroy()
    {
        ConvertImage.Instance.ActivateCell -= Activate;
    }

    public void SetNumberVisible(bool visible)
    {
        if (txt != null)
            txt.enabled = visible;
    }

    public void syncProcess(int row, int col , GameObject caller)
    {
        if (caller == this.gameObject)
        {
            return;
        }
        if (this.row == row && this.col == col)
        {
            SyncPaint();
        }
    }
}
