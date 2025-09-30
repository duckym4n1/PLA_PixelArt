using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ConvertImage : MonoBehaviour
{
    public static ConvertImage Instance { get; private set; }
    [SerializeField] private Sprite img;
    [SerializeField, Range(0, 255)] private byte alphaThreshold = 1;
    public Dictionary<Color32, int> colorDict = new Dictionary<Color32, int>();
    private List<int> colorAmount = new List<int>();
    private List<int> colorTotal = new List<int>();
    private int currentUnColor;
    private int[,] pixelMatrix;
    private int[,] completeMatrix;
    private int nextIndex = 1;
    public UnityAction RenderPixelMatrix;
    public UnityAction ActivateCell;
    public UnityAction CheckingDoneColor;
    public UnityAction HideShowProgressBar;
    public UnityAction UpdateColorProgress;
    public UnityAction<int,int,GameObject> SyncProcesses;

    [SerializeField]
    private GameObject victory;
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        
    }
    void Start()
    {
        //LoadData();
/*        currentUnColor = 1;
        //RenderPixelMatrix();
        SetUpCountColor();
        ActivateCell?.Invoke();*/
    }
    private static Color32 RGBKey(Color32 c) => new Color32(c.r, c.g, c.b, 255);

    public void LoadData(Data dt)
    {
        if (dt == null || dt.img == null)
        {
            Debug.LogError("Data or image is null");
            return;
        }
        img = dt.img;
        colorDict.Clear();
/*        foreach (var pair in dt.colorList)
        {
            Color32 color = new Color32((byte)pair.r, (byte)pair.g, (byte)pair.b, 255);
            if (!colorDict.ContainsKey(color))
            {
                colorDict[color] = pair.key;
            }
        }*/
        pixelMatrix = MapImageToMatrix(img);
        for(int i = 0; i < pixelMatrix.GetLength(0); i++)
        {
            for(int j = 0; j < pixelMatrix.GetLength(1); j++)
            {
                if (pixelMatrix[i, j] != 0)
                    continue;
                //completeMatrix[i, j] = 1;
            }
        }
        Debug.Log($"Matrix complete. Total unique colors = {colorDict.Count}");
        RenderPixelMatrix?.Invoke();
        currentUnColor = 1;
        SetUpCountColor();
        ActivateCell?.Invoke();
    }
    public int FindClosestColorValue(Dictionary<Color32, int> dict, Color32 target)
    {
        int closestValue = -1;
        int minDist = int.MaxValue;

        foreach (var kv in dict)
        {
            Color32 c = kv.Key;

            int dr = target.r - c.r;
            int dg = target.g - c.g;
            int db = target.b - c.b;

            int dist = dr * dr + dg * dg + db * db;

            if (dist < minDist)
            {
                minDist = dist;
                closestValue = kv.Value;
            }
        }

        return closestValue;
    }

    public int[,] MapImageToMatrix(Sprite sprite)
    {
        Texture2D tex = sprite.texture;
        Rect rect = sprite.rect;

        int w = (int)rect.width;
        int h = (int)rect.height;

        Color32[] pixels = tex.GetPixels32();
        int[,] result = new int[h, w];

        for (int y = 0; y < h; y++)
        {
            for (int x = 0; x < w; x++) 
            {
                int realY = (h - 1 - y) + (int)rect.y;
                int realX = x + (int)rect.x;

                int idx = realY * tex.width + realX;
                Color32 p = pixels[idx];

                if (p.a <= alphaThreshold)
                {
                    result[y, x] = 0;
                    continue;
                }

                Color32 key = new Color32(p.r, p.g, p.b, 255);

                if (!colorDict.TryGetValue(key, out int val))
                {
                    val = nextIndex++;
                    colorDict[key] = val;
                }

                result[y, x] = val;
            }
        }

        return result;
    }  
   private void SetUpCountColor()
   {
        for(int i = 0; i < colorDict.Count; i++)
        {
            colorAmount.Add(0);
            colorTotal.Add(0);
        }
        for (int y = 0; y < pixelMatrix.GetLength(0); y++)
        {
            for (int x = 0; x < pixelMatrix.GetLength(1); x++)
            {
                int val = pixelMatrix[y, x];
                if (val == 0)
                    continue;
                colorAmount[val - 1]++;
                colorTotal[val - 1]++;
            }
        }
    }
    public bool CountUnColor(int value)
    {
        if (value != currentUnColor)
            return false;
        colorAmount[currentUnColor - 1]--;
        UpdateColorProgress?.Invoke();
        if (colorAmount[currentUnColor - 1] == 0)
        {
            CheckingDoneColor?.Invoke();
            for (int i = 0; i < colorAmount.Count; i++)
            {
                if(colorAmount[i] > 0)
                {
                    currentUnColor = i + 1;
                    break;
                }
            }
            CheckFullComplete();
            Debug.Log($"Current uncolored: {currentUnColor}");
            ActivateCell?.Invoke();
            HideShowProgressBar?.Invoke();
        }
        return true;
    }    

    public bool CheckColorComplete(int index)
    {
        if (colorAmount[index] == 0)
            return true;
        return false;
    }

    public void CheckFullComplete()
    {
        for(int i =0; i< colorAmount.Count;i++)
        {
            if (colorAmount[i] != 0)
                return;
        }
        victory.SetActive(true);
        return;
    }    
    public void ChangePaintColor(int index)
    {
        currentUnColor = index;
        ActivateCell?.Invoke();
    }
    public Color32 GetColorByIndex(int index)
    {
        foreach (var kvp in colorDict)
        {
            if (kvp.Value == index)
                return kvp.Key;
        }
        return new Color32(0, 0, 0, 0);
    }
    public int[,] GetMatrix() => pixelMatrix;

    public Dictionary<Color32, int> GetColorDictionary() => colorDict;
    public int GetCurrentUnColor() => currentUnColor;

    public int GetColorCount() => colorDict.Count;
    public int[,] GetPixelMatrix() => pixelMatrix;

    public float GetCompletionPercent(int index)
    {
        return (float)(colorTotal[index-1]-colorAmount[index-1])/colorTotal[index-1];
    }
}