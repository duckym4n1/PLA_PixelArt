Shader "Particles/SparkleMask"
{
    Properties
    {
        _MainTex ("Particle Texture", 2D) = "white" {}
        _MaskTex ("Mask Texture", 2D) = "white" {}
        _TintColor ("Tint", Color) = (1,1,1,1)
        _BoardMin ("Board Min (World)", Vector) = (0,0,0,0)
        _BoardMax ("Board Max (World)", Vector) = (1,1,0,0)
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;
                float2 uv     : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                float2 uv     : TEXCOORD0;
                float3 worldPos : TEXCOORD1;
            };

            sampler2D _MainTex;
            sampler2D _MaskTex;
            float4 _TintColor;
            float4 _BoardMin;
            float4 _BoardMax;

            v2f vert(appdata_t v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                return o;
            }

fixed4 frag(v2f i) : SV_Target
{
    fixed4 col = tex2D(_MainTex, i.uv) * _TintColor;

    float2 maskUV = (i.worldPos.xy - _BoardMin.xy) / (_BoardMax.xy - _BoardMin.xy);

    if (maskUV.x < 0 || maskUV.x > 1 || maskUV.y < 0 || maskUV.y > 1)
        discard;

    fixed4 mask = tex2D(_MaskTex, saturate(maskUV)); 

    col.a *= mask.r;
    return col;
}
            ENDCG
        }
    }
}
