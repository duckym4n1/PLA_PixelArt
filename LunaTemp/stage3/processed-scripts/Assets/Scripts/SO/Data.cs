using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "ColorDictionary", menuName = "Data/Color Dictionary")]
public class Data : ScriptableObject
{
    public Sprite img;
    [SerializeField]
    public List<IntColor32Pair> colorList = new List<IntColor32Pair>();
    [System.Serializable]
    public class IntColor32Pair
    {
        public int key;
        public int r;
        public int g;
        public int b;
    }
}


