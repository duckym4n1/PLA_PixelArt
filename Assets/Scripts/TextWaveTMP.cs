using UnityEngine;
using TMPro;
using DG.Tweening;

public class TextWaveTMP : MonoBehaviour
{
    private TextMeshProUGUI tmpText;

    [SerializeField] private float waveHeight = 20f;  
    [SerializeField] private float duration = 0.3f;   
    [SerializeField] private float delay = 0.1f;      

    void Awake()
    {
        tmpText = GetComponent<TextMeshProUGUI>();
    }

    void Start()
    {
        AnimateWave();
    }

    void AnimateWave()
    {
        tmpText.ForceMeshUpdate();
        TMP_TextInfo textInfo = tmpText.textInfo;

        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < textInfo.characterCount; i++)
        {
            if (!textInfo.characterInfo[i].isVisible) continue;
            int index = i;

            seq.AppendCallback(() =>
            {
                tmpText.ForceMeshUpdate();
                var charInfo = textInfo.characterInfo[index];
                if (!charInfo.isVisible) return;

                int vertexIndex = charInfo.vertexIndex;
                int matIndex = charInfo.materialReferenceIndex;
                var vertices = textInfo.meshInfo[matIndex].vertices;

                Vector3 offset = new Vector3(0, waveHeight, 0);

                vertices[vertexIndex + 0] += offset;
                vertices[vertexIndex + 1] += offset;
                vertices[vertexIndex + 2] += offset;
                vertices[vertexIndex + 3] += offset;

                tmpText.UpdateVertexData(TMP_VertexDataUpdateFlags.Vertices);

                DOTween.To(
                    () => 0f,
                    x =>
                    {
                        tmpText.ForceMeshUpdate();
                        var verts = textInfo.meshInfo[matIndex].vertices;
                        Vector3 down = new Vector3(0, -x * waveHeight, 0);

                        verts[vertexIndex + 0] += down;
                        verts[vertexIndex + 1] += down;
                        verts[vertexIndex + 2] += down;
                        verts[vertexIndex + 3] += down;

                        tmpText.UpdateVertexData(TMP_VertexDataUpdateFlags.Vertices);
                    },
                    1f,
                    duration
                ).SetEase(Ease.OutQuad);
            });

            seq.AppendInterval(delay);
        }

        seq.SetLoops(-1, LoopType.Restart);
    }
}
