using UnityEngine;

public static class ColorReducerFast
{
    public static Color32[] palette32 = new Color32[]
    {
        new Color32(0,0,0,255), new Color32(255,255,255,255), new Color32(255,0,0,255),
        new Color32(0,255,0,255), new Color32(0,0,255,255), new Color32(255,255,0,255),
        new Color32(0,255,255,255), new Color32(255,0,255,255), new Color32(128,128,128,255),
        new Color32(191,191,191,255), new Color32(255,128,0,255), new Color32(128,64,0,255),
        new Color32(0,128,64,255), new Color32(64,0,128,255), new Color32(179,77,77,255),
        new Color32(77,179,77,255)
    };

    public static Texture2D ReduceColorsFast(Texture2D src)
    {
        if (!src.isReadable) Debug.LogWarning("Texture phải bật Read/Write trong Import Settings.");
        Texture2D dst = new Texture2D(src.width, src.height, TextureFormat.RGBA32, false);

        Color32[] pixels = src.GetPixels32();
        Color32[] outPixels = new Color32[pixels.Length];

        for (int i = 0; i < pixels.Length; i++)
        {
            outPixels[i] = GetNearest32(pixels[i]);
        }

        dst.SetPixels32(outPixels);
        dst.Apply();
        return dst;
    }

    private static Color32 GetNearest32(Color32 c)
    {
        int bestIndex = 0;
        int minDist = int.MaxValue;

        for (int i = 0; i < palette32.Length; i++)
        {
            int dr = c.r - palette32[i].r;
            int dg = c.g - palette32[i].g;
            int db = c.b - palette32[i].b;
            int d = dr * dr + dg * dg + db * db;
            if (d < minDist)
            {
                minDist = d;
                bestIndex = i;
            }
        }

        Color32 res = palette32[bestIndex];
        res.a = c.a;
        return res;
    }
}
