using UnityEngine;
using UnityEngine.InputSystem;

public class ScrollTest : MonoBehaviour
{
    void Update()
    {
        if (Mouse.current != null)
        {
            Vector2 scroll = Mouse.current.scroll.ReadValue();
            if (scroll != Vector2.zero)
            {
                Debug.Log("Scroll detected: " + scroll);
            }
        }
    }
}