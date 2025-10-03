var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointSpring' )
  var i495 = data
  i494.spring = i495[0]
  i494.damper = i495[1]
  i494.targetPosition = i495[2]
  return i494
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointMotor' )
  var i497 = data
  i496.m_TargetVelocity = i497[0]
  i496.m_Force = i497[1]
  i496.m_FreeSpin = i497[2]
  return i496
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointLimits' )
  var i499 = data
  i498.m_Min = i499[0]
  i498.m_Max = i499[1]
  i498.m_Bounciness = i499[2]
  i498.m_BounceMinVelocity = i499[3]
  i498.m_ContactDistance = i499[4]
  i498.minBounce = i499[5]
  i498.maxBounce = i499[6]
  return i498
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointDrive' )
  var i501 = data
  i500.m_PositionSpring = i501[0]
  i500.m_PositionDamper = i501[1]
  i500.m_MaximumForce = i501[2]
  return i500
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i503 = data
  i502.m_Spring = i503[0]
  i502.m_Damper = i503[1]
  return i502
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i505 = data
  i504.m_Limit = i505[0]
  i504.m_Bounciness = i505[1]
  i504.m_ContactDistance = i505[2]
  return i504
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i507 = data
  i506.m_ExtremumSlip = i507[0]
  i506.m_ExtremumValue = i507[1]
  i506.m_AsymptoteSlip = i507[2]
  i506.m_AsymptoteValue = i507[3]
  i506.m_Stiffness = i507[4]
  return i506
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i509 = data
  i508.m_LowerAngle = i509[0]
  i508.m_UpperAngle = i509[1]
  return i508
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i511 = data
  i510.m_MotorSpeed = i511[0]
  i510.m_MaximumMotorTorque = i511[1]
  return i510
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i513 = data
  i512.m_DampingRatio = i513[0]
  i512.m_Frequency = i513[1]
  i512.m_Angle = i513[2]
  return i512
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i515 = data
  i514.m_LowerTranslation = i515[0]
  i514.m_UpperTranslation = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i517 = data
  i516.name = i517[0]
  i516.width = i517[1]
  i516.height = i517[2]
  i516.mipmapCount = i517[3]
  i516.anisoLevel = i517[4]
  i516.filterMode = i517[5]
  i516.hdr = !!i517[6]
  i516.format = i517[7]
  i516.wrapMode = i517[8]
  i516.alphaIsTransparency = !!i517[9]
  i516.alphaSource = i517[10]
  i516.graphicsFormat = i517[11]
  i516.sRGBTexture = !!i517[12]
  i516.desiredColorSpace = i517[13]
  i516.wrapU = i517[14]
  i516.wrapV = i517[15]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i518 = root || new pc.UnityMaterial()
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'shader')
  i518.renderQueue = i519[3]
  i518.enableInstancing = !!i519[4]
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i521[i + 0]) );
  }
  i518.floatParameters = i520
  var i523 = i519[6]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i523[i + 0]) );
  }
  i518.colorParameters = i522
  var i525 = i519[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i525[i + 0]) );
  }
  i518.vectorParameters = i524
  var i527 = i519[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i527[i + 0]) );
  }
  i518.textureParameters = i526
  var i529 = i519[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i529[i + 0]) );
  }
  i518.materialFlags = i528
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Color(i537[1], i537[2], i537[3], i537[4])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = new pc.Vec4( i541[1], i541[2], i541[3], i541[4] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'value')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i549 = data
  i548.name = i549[0]
  i548.enabled = !!i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i551 = data
  i550.pivot = new pc.Vec2( i551[0], i551[1] )
  i550.anchorMin = new pc.Vec2( i551[2], i551[3] )
  i550.anchorMax = new pc.Vec2( i551[4], i551[5] )
  i550.sizeDelta = new pc.Vec2( i551[6], i551[7] )
  i550.anchoredPosition3D = new pc.Vec3( i551[8], i551[9], i551[10] )
  i550.rotation = new pc.Quat(i551[11], i551[12], i551[13], i551[14])
  i550.scale = new pc.Vec3( i551[15], i551[16], i551[17] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i553 = data
  i552.cullTransparentMesh = !!i553[0]
  return i552
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.Image' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'm_Sprite')
  i554.m_Type = i555[2]
  i554.m_PreserveAspect = !!i555[3]
  i554.m_FillCenter = !!i555[4]
  i554.m_FillMethod = i555[5]
  i554.m_FillAmount = i555[6]
  i554.m_FillClockwise = !!i555[7]
  i554.m_FillOrigin = i555[8]
  i554.m_UseSpriteMesh = !!i555[9]
  i554.m_PixelsPerUnitMultiplier = i555[10]
  i554.m_Maskable = !!i555[11]
  request.r(i555[12], i555[13], 0, i554, 'm_Material')
  i554.m_Color = new pc.Color(i555[14], i555[15], i555[16], i555[17])
  i554.m_RaycastTarget = !!i555[18]
  i554.m_RaycastPadding = new pc.Vec4( i555[19], i555[20], i555[21], i555[22] )
  return i554
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.Button' )
  var i557 = data
  i556.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i557[0], i556.m_OnClick)
  i556.m_Navigation = request.d('UnityEngine.UI.Navigation', i557[1], i556.m_Navigation)
  i556.m_Transition = i557[2]
  i556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i557[3], i556.m_Colors)
  i556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i557[4], i556.m_SpriteState)
  i556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i557[5], i556.m_AnimationTriggers)
  i556.m_Interactable = !!i557[6]
  request.r(i557[7], i557[8], 0, i556, 'm_TargetGraphic')
  return i556
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i559 = data
  i558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i559[0], i558.m_PersistentCalls)
  return i558
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i561 = data
  var i563 = i561[0]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i563.length; i += 1) {
    i562.add(request.d('UnityEngine.Events.PersistentCall', i563[i + 0]));
  }
  i560.m_Calls = i562
  return i560
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Target')
  i566.m_TargetAssemblyTypeName = i567[2]
  i566.m_MethodName = i567[3]
  i566.m_Mode = i567[4]
  i566.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i567[5], i566.m_Arguments)
  i566.m_CallState = i567[6]
  return i566
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_ObjectArgument')
  i568.m_ObjectArgumentAssemblyTypeName = i569[2]
  i568.m_IntArgument = i569[3]
  i568.m_FloatArgument = i569[4]
  i568.m_StringArgument = i569[5]
  i568.m_BoolArgument = !!i569[6]
  return i568
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i571 = data
  i570.m_Mode = i571[0]
  i570.m_WrapAround = !!i571[1]
  request.r(i571[2], i571[3], 0, i570, 'm_SelectOnUp')
  request.r(i571[4], i571[5], 0, i570, 'm_SelectOnDown')
  request.r(i571[6], i571[7], 0, i570, 'm_SelectOnLeft')
  request.r(i571[8], i571[9], 0, i570, 'm_SelectOnRight')
  return i570
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i573 = data
  i572.m_NormalColor = new pc.Color(i573[0], i573[1], i573[2], i573[3])
  i572.m_HighlightedColor = new pc.Color(i573[4], i573[5], i573[6], i573[7])
  i572.m_PressedColor = new pc.Color(i573[8], i573[9], i573[10], i573[11])
  i572.m_SelectedColor = new pc.Color(i573[12], i573[13], i573[14], i573[15])
  i572.m_DisabledColor = new pc.Color(i573[16], i573[17], i573[18], i573[19])
  i572.m_ColorMultiplier = i573[20]
  i572.m_FadeDuration = i573[21]
  return i572
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_HighlightedSprite')
  request.r(i575[2], i575[3], 0, i574, 'm_PressedSprite')
  request.r(i575[4], i575[5], 0, i574, 'm_SelectedSprite')
  request.r(i575[6], i575[7], 0, i574, 'm_DisabledSprite')
  return i574
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i577 = data
  i576.m_NormalTrigger = i577[0]
  i576.m_HighlightedTrigger = i577[1]
  i576.m_PressedTrigger = i577[2]
  i576.m_SelectedTrigger = i577[3]
  i576.m_DisabledTrigger = i577[4]
  return i576
}

Deserializers["Cell"] = function (request, data, root) {
  var i578 = root || request.c( 'Cell' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'txt')
  i578.row = i579[2]
  i578.col = i579[3]
  request.r(i579[4], i579[5], 0, i578, 'afterPaint')
  request.r(i579[6], i579[7], 0, i578, 'borderDrawer')
  return i578
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Text' )
  var i581 = data
  i580.m_FontData = request.d('UnityEngine.UI.FontData', i581[0], i580.m_FontData)
  i580.m_Text = i581[1]
  i580.m_Maskable = !!i581[2]
  request.r(i581[3], i581[4], 0, i580, 'm_Material')
  i580.m_Color = new pc.Color(i581[5], i581[6], i581[7], i581[8])
  i580.m_RaycastTarget = !!i581[9]
  i580.m_RaycastPadding = new pc.Vec4( i581[10], i581[11], i581[12], i581[13] )
  return i580
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.FontData' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Font')
  i582.m_FontSize = i583[2]
  i582.m_FontStyle = i583[3]
  i582.m_BestFit = !!i583[4]
  i582.m_MinSize = i583[5]
  i582.m_MaxSize = i583[6]
  i582.m_Alignment = i583[7]
  i582.m_AlignByGeometry = !!i583[8]
  i582.m_RichText = !!i583[9]
  i582.m_HorizontalOverflow = i583[10]
  i582.m_VerticalOverflow = i583[11]
  i582.m_LineSpacing = i583[12]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i585 = data
  i584.name = i585[0]
  i584.tagId = i585[1]
  i584.enabled = !!i585[2]
  i584.isStatic = !!i585[3]
  i584.layer = i585[4]
  return i584
}

Deserializers["CellBorderDrawer"] = function (request, data, root) {
  var i586 = root || request.c( 'CellBorderDrawer' )
  var i587 = data
  i586.top = !!i587[0]
  i586.bottom = !!i587[1]
  i586.left = !!i587[2]
  i586.right = !!i587[3]
  i586.borderThickness = i587[4]
  request.r(i587[5], i587[6], 0, i586, 'm_Material')
  i586.m_Color = new pc.Color(i587[7], i587[8], i587[9], i587[10])
  i586.m_RaycastTarget = !!i587[11]
  i586.m_RaycastPadding = new pc.Vec4( i587[12], i587[13], i587[14], i587[15] )
  return i586
}

Deserializers["ColorBtn"] = function (request, data, root) {
  var i588 = root || request.c( 'ColorBtn' )
  var i589 = data
  i588.color = UnityEngine.Color32.ConstructColor(i589[0], i589[1], i589[2], i589[3])
  request.r(i589[4], i589[5], 0, i588, 'txt')
  request.r(i589[6], i589[7], 0, i588, 'img')
  return i588
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i590 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i591 = data
  i590.m_hasFontAssetChanged = !!i591[0]
  request.r(i591[1], i591[2], 0, i590, 'm_baseMaterial')
  i590.m_maskOffset = new pc.Vec4( i591[3], i591[4], i591[5], i591[6] )
  i590.m_text = i591[7]
  i590.m_isRightToLeft = !!i591[8]
  request.r(i591[9], i591[10], 0, i590, 'm_fontAsset')
  request.r(i591[11], i591[12], 0, i590, 'm_sharedMaterial')
  var i593 = i591[13]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.m_fontSharedMaterials = i592
  request.r(i591[14], i591[15], 0, i590, 'm_fontMaterial')
  var i595 = i591[16]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.m_fontMaterials = i594
  i590.m_fontColor32 = UnityEngine.Color32.ConstructColor(i591[17], i591[18], i591[19], i591[20])
  i590.m_fontColor = new pc.Color(i591[21], i591[22], i591[23], i591[24])
  i590.m_enableVertexGradient = !!i591[25]
  i590.m_colorMode = i591[26]
  i590.m_fontColorGradient = request.d('TMPro.VertexGradient', i591[27], i590.m_fontColorGradient)
  request.r(i591[28], i591[29], 0, i590, 'm_fontColorGradientPreset')
  request.r(i591[30], i591[31], 0, i590, 'm_spriteAsset')
  i590.m_tintAllSprites = !!i591[32]
  request.r(i591[33], i591[34], 0, i590, 'm_StyleSheet')
  i590.m_TextStyleHashCode = i591[35]
  i590.m_overrideHtmlColors = !!i591[36]
  i590.m_faceColor = UnityEngine.Color32.ConstructColor(i591[37], i591[38], i591[39], i591[40])
  i590.m_fontSize = i591[41]
  i590.m_fontSizeBase = i591[42]
  i590.m_fontWeight = i591[43]
  i590.m_enableAutoSizing = !!i591[44]
  i590.m_fontSizeMin = i591[45]
  i590.m_fontSizeMax = i591[46]
  i590.m_fontStyle = i591[47]
  i590.m_HorizontalAlignment = i591[48]
  i590.m_VerticalAlignment = i591[49]
  i590.m_textAlignment = i591[50]
  i590.m_characterSpacing = i591[51]
  i590.m_wordSpacing = i591[52]
  i590.m_lineSpacing = i591[53]
  i590.m_lineSpacingMax = i591[54]
  i590.m_paragraphSpacing = i591[55]
  i590.m_charWidthMaxAdj = i591[56]
  i590.m_enableWordWrapping = !!i591[57]
  i590.m_wordWrappingRatios = i591[58]
  i590.m_overflowMode = i591[59]
  request.r(i591[60], i591[61], 0, i590, 'm_linkedTextComponent')
  request.r(i591[62], i591[63], 0, i590, 'parentLinkedComponent')
  i590.m_enableKerning = !!i591[64]
  i590.m_enableExtraPadding = !!i591[65]
  i590.checkPaddingRequired = !!i591[66]
  i590.m_isRichText = !!i591[67]
  i590.m_parseCtrlCharacters = !!i591[68]
  i590.m_isOrthographic = !!i591[69]
  i590.m_isCullingEnabled = !!i591[70]
  i590.m_horizontalMapping = i591[71]
  i590.m_verticalMapping = i591[72]
  i590.m_uvLineOffset = i591[73]
  i590.m_geometrySortingOrder = i591[74]
  i590.m_IsTextObjectScaleStatic = !!i591[75]
  i590.m_VertexBufferAutoSizeReduction = !!i591[76]
  i590.m_useMaxVisibleDescender = !!i591[77]
  i590.m_pageToDisplay = i591[78]
  i590.m_margin = new pc.Vec4( i591[79], i591[80], i591[81], i591[82] )
  i590.m_isUsingLegacyAnimationComponent = !!i591[83]
  i590.m_isVolumetricText = !!i591[84]
  i590.m_Maskable = !!i591[85]
  request.r(i591[86], i591[87], 0, i590, 'm_Material')
  i590.m_Color = new pc.Color(i591[88], i591[89], i591[90], i591[91])
  i590.m_RaycastTarget = !!i591[92]
  i590.m_RaycastPadding = new pc.Vec4( i591[93], i591[94], i591[95], i591[96] )
  return i590
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i598 = root || request.c( 'TMPro.VertexGradient' )
  var i599 = data
  i598.topLeft = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  i598.topRight = new pc.Color(i599[4], i599[5], i599[6], i599[7])
  i598.bottomLeft = new pc.Color(i599[8], i599[9], i599[10], i599[11])
  i598.bottomRight = new pc.Color(i599[12], i599[13], i599[14], i599[15])
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i601 = data
  i600.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i601[0], i600.main)
  i600.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i601[1], i600.colorBySpeed)
  i600.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i601[2], i600.colorOverLifetime)
  i600.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i601[3], i600.emission)
  i600.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i601[4], i600.rotationBySpeed)
  i600.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i601[5], i600.rotationOverLifetime)
  i600.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i601[6], i600.shape)
  i600.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i601[7], i600.sizeBySpeed)
  i600.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i601[8], i600.sizeOverLifetime)
  i600.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i601[9], i600.textureSheetAnimation)
  i600.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i601[10], i600.velocityOverLifetime)
  i600.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i601[11], i600.noise)
  i600.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i601[12], i600.inheritVelocity)
  i600.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i601[13], i600.forceOverLifetime)
  i600.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i601[14], i600.limitVelocityOverLifetime)
  i600.useAutoRandomSeed = !!i601[15]
  i600.randomSeed = i601[16]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemMain()
  var i603 = data
  i602.duration = i603[0]
  i602.loop = !!i603[1]
  i602.prewarm = !!i603[2]
  i602.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.startDelay)
  i602.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.startLifetime)
  i602.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[5], i602.startSpeed)
  i602.startSize3D = !!i603[6]
  i602.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[7], i602.startSizeX)
  i602.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.startSizeY)
  i602.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.startSizeZ)
  i602.startRotation3D = !!i603[10]
  i602.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.startRotationX)
  i602.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[12], i602.startRotationY)
  i602.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[13], i602.startRotationZ)
  i602.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i603[14], i602.startColor)
  i602.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[15], i602.gravityModifier)
  i602.simulationSpace = i603[16]
  request.r(i603[17], i603[18], 0, i602, 'customSimulationSpace')
  i602.simulationSpeed = i603[19]
  i602.useUnscaledTime = !!i603[20]
  i602.scalingMode = i603[21]
  i602.playOnAwake = !!i603[22]
  i602.maxParticles = i603[23]
  i602.emitterVelocityMode = i603[24]
  i602.stopAction = i603[25]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i604 = root || new pc.MinMaxCurve()
  var i605 = data
  i604.mode = i605[0]
  i604.curveMin = new pc.AnimationCurve( { keys_flow: i605[1] } )
  i604.curveMax = new pc.AnimationCurve( { keys_flow: i605[2] } )
  i604.curveMultiplier = i605[3]
  i604.constantMin = i605[4]
  i604.constantMax = i605[5]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i606 = root || new pc.MinMaxGradient()
  var i607 = data
  i606.mode = i607[0]
  i606.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i607[1], i606.gradientMin)
  i606.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i607[2], i606.gradientMax)
  i606.colorMin = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.colorMax = new pc.Color(i607[7], i607[8], i607[9], i607[10])
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i609 = data
  i608.mode = i609[0]
  var i611 = i609[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i611[i + 0]) );
  }
  i608.colorKeys = i610
  var i613 = i609[2]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i613[i + 0]) );
  }
  i608.alphaKeys = i612
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemColorBySpeed()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i615[1], i614.color)
  i614.range = new pc.Vec2( i615[2], i615[3] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i619 = data
  i618.color = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.time = i619[4]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i623 = data
  i622.alpha = i623[0]
  i622.time = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemColorOverLifetime()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[1], i624.color)
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemEmitter()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[1], i626.rateOverTime)
  i626.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.rateOverDistance)
  var i629 = i627[3]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i629[i + 0]) );
  }
  i626.bursts = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemBurst()
  var i633 = data
  i632.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[0], i632.count)
  i632.cycleCount = i633[1]
  i632.minCount = i633[2]
  i632.maxCount = i633[3]
  i632.repeatInterval = i633[4]
  i632.time = i633[5]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemRotationBySpeed()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  i634.range = new pc.Vec2( i635[5], i635[6] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemRotationOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.separateAxes = !!i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemShape()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.shapeType = i639[1]
  i638.randomDirectionAmount = i639[2]
  i638.sphericalDirectionAmount = i639[3]
  i638.randomPositionAmount = i639[4]
  i638.alignToDirection = !!i639[5]
  i638.radius = i639[6]
  i638.radiusMode = i639[7]
  i638.radiusSpread = i639[8]
  i638.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.radiusSpeed)
  i638.radiusThickness = i639[10]
  i638.angle = i639[11]
  i638.length = i639[12]
  i638.boxThickness = new pc.Vec3( i639[13], i639[14], i639[15] )
  i638.meshShapeType = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'mesh')
  request.r(i639[19], i639[20], 0, i638, 'meshRenderer')
  request.r(i639[21], i639[22], 0, i638, 'skinnedMeshRenderer')
  i638.useMeshMaterialIndex = !!i639[23]
  i638.meshMaterialIndex = i639[24]
  i638.useMeshColors = !!i639[25]
  i638.normalOffset = i639[26]
  i638.arc = i639[27]
  i638.arcMode = i639[28]
  i638.arcSpread = i639[29]
  i638.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[30], i638.arcSpeed)
  i638.donutRadius = i639[31]
  i638.position = new pc.Vec3( i639[32], i639[33], i639[34] )
  i638.rotation = new pc.Vec3( i639[35], i639[36], i639[37] )
  i638.scale = new pc.Vec3( i639[38], i639[39], i639[40] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemSizeBySpeed()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  i640.range = new pc.Vec2( i641[5], i641[6] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemSizeOverLifetime()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.separateAxes = !!i643[4]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.mode = i645[1]
  i644.animation = i645[2]
  i644.numTilesX = i645[3]
  i644.numTilesY = i645[4]
  i644.useRandomRow = !!i645[5]
  i644.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[6], i644.frameOverTime)
  i644.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[7], i644.startFrame)
  i644.cycleCount = i645[8]
  i644.rowIndex = i645[9]
  i644.flipU = i645[10]
  i644.flipV = i645[11]
  i644.spriteCount = i645[12]
  var i647 = i645[13]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.sprites = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[4], i650.radial)
  i650.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[5], i650.speedModifier)
  i650.space = i651[6]
  i650.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[7], i650.orbitalX)
  i650.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[8], i650.orbitalY)
  i650.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[9], i650.orbitalZ)
  i650.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[10], i650.orbitalOffsetX)
  i650.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[11], i650.orbitalOffsetY)
  i650.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[12], i650.orbitalOffsetZ)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemNoise()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.separateAxes = !!i653[1]
  i652.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.strengthX)
  i652.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.strengthY)
  i652.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[4], i652.strengthZ)
  i652.frequency = i653[5]
  i652.damping = !!i653[6]
  i652.octaveCount = i653[7]
  i652.octaveMultiplier = i653[8]
  i652.octaveScale = i653[9]
  i652.quality = i653[10]
  i652.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[11], i652.scrollSpeed)
  i652.scrollSpeedMultiplier = i653[12]
  i652.remapEnabled = !!i653[13]
  i652.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[14], i652.remapX)
  i652.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[15], i652.remapY)
  i652.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[16], i652.remapZ)
  i652.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[17], i652.positionAmount)
  i652.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[18], i652.rotationAmount)
  i652.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[19], i652.sizeAmount)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemInheritVelocity()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.mode = i655[1]
  i654.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.curve)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemForceOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.space = i657[4]
  i656.randomized = !!i657[5]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.limit)
  i658.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.limitX)
  i658.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.limitY)
  i658.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.limitZ)
  i658.dampen = i659[5]
  i658.separateAxes = !!i659[6]
  i658.space = i659[7]
  i658.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.drag)
  i658.multiplyDragByParticleSize = !!i659[9]
  i658.multiplyDragByParticleVelocity = !!i659[10]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'mesh')
  i660.meshCount = i661[2]
  i660.activeVertexStreamsCount = i661[3]
  i660.alignment = i661[4]
  i660.renderMode = i661[5]
  i660.sortMode = i661[6]
  i660.lengthScale = i661[7]
  i660.velocityScale = i661[8]
  i660.cameraVelocityScale = i661[9]
  i660.normalDirection = i661[10]
  i660.sortingFudge = i661[11]
  i660.minParticleSize = i661[12]
  i660.maxParticleSize = i661[13]
  i660.pivot = new pc.Vec3( i661[14], i661[15], i661[16] )
  request.r(i661[17], i661[18], 0, i660, 'trailMaterial')
  i660.applyActiveColorSpace = !!i661[19]
  i660.enabled = !!i661[20]
  request.r(i661[21], i661[22], 0, i660, 'sharedMaterial')
  var i663 = i661[23]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sharedMaterials = i662
  i660.receiveShadows = !!i661[24]
  i660.shadowCastingMode = i661[25]
  i660.sortingLayerID = i661[26]
  i660.sortingOrder = i661[27]
  i660.lightmapIndex = i661[28]
  i660.lightmapSceneIndex = i661[29]
  i660.lightmapScaleOffset = new pc.Vec4( i661[30], i661[31], i661[32], i661[33] )
  i660.lightProbeUsage = i661[34]
  i660.reflectionProbeUsage = i661[35]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i665 = data
  i664.name = i665[0]
  i664.index = i665[1]
  i664.startup = !!i665[2]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i667 = data
  i666.position = new pc.Vec3( i667[0], i667[1], i667[2] )
  i666.scale = new pc.Vec3( i667[3], i667[4], i667[5] )
  i666.rotation = new pc.Quat(i667[6], i667[7], i667[8], i667[9])
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i669 = data
  i668.aspect = i669[0]
  i668.orthographic = !!i669[1]
  i668.orthographicSize = i669[2]
  i668.backgroundColor = new pc.Color(i669[3], i669[4], i669[5], i669[6])
  i668.nearClipPlane = i669[7]
  i668.farClipPlane = i669[8]
  i668.fieldOfView = i669[9]
  i668.depth = i669[10]
  i668.clearFlags = i669[11]
  i668.cullingMask = i669[12]
  i668.rect = i669[13]
  request.r(i669[14], i669[15], 0, i668, 'targetTexture')
  i668.usePhysicalProperties = !!i669[16]
  i668.focalLength = i669[17]
  i668.sensorSize = new pc.Vec2( i669[18], i669[19] )
  i668.lensShift = new pc.Vec2( i669[20], i669[21] )
  i668.gateFit = i669[22]
  i668.commandBufferCount = i669[23]
  i668.cameraType = i669[24]
  i668.enabled = !!i669[25]
  return i668
}

Deserializers["ZoomManager"] = function (request, data, root) {
  var i670 = root || request.c( 'ZoomManager' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'boardPort')
  request.r(i671[2], i671[3], 0, i670, 'boardLand')
  request.r(i671[4], i671[5], 0, i670, 'viewportPort')
  request.r(i671[6], i671[7], 0, i670, 'viewportLand')
  i670.zoomSpeed = i671[8]
  i670.minScale = i671[9]
  i670.maxScale = i671[10]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i673 = data
  i672.planeDistance = i673[0]
  i672.referencePixelsPerUnit = i673[1]
  i672.isFallbackOverlay = !!i673[2]
  i672.renderMode = i673[3]
  i672.renderOrder = i673[4]
  i672.sortingLayerName = i673[5]
  i672.sortingOrder = i673[6]
  i672.scaleFactor = i673[7]
  request.r(i673[8], i673[9], 0, i672, 'worldCamera')
  i672.overrideSorting = !!i673[10]
  i672.pixelPerfect = !!i673[11]
  i672.targetDisplay = i673[12]
  i672.overridePixelPerfect = !!i673[13]
  i672.enabled = !!i673[14]
  return i672
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i675 = data
  i674.m_UiScaleMode = i675[0]
  i674.m_ReferencePixelsPerUnit = i675[1]
  i674.m_ScaleFactor = i675[2]
  i674.m_ReferenceResolution = new pc.Vec2( i675[3], i675[4] )
  i674.m_ScreenMatchMode = i675[5]
  i674.m_MatchWidthOrHeight = i675[6]
  i674.m_PhysicalUnit = i675[7]
  i674.m_FallbackScreenDPI = i675[8]
  i674.m_DefaultSpriteDPI = i675[9]
  i674.m_DynamicPixelsPerUnit = i675[10]
  i674.m_PresetInfoIsWorld = !!i675[11]
  return i674
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i677 = data
  i676.m_IgnoreReversedGraphics = !!i677[0]
  i676.m_BlockingObjects = i677[1]
  i676.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i677[2] )
  return i676
}

Deserializers["ChooseBtn"] = function (request, data, root) {
  var i678 = root || request.c( 'ChooseBtn' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'data')
  request.r(i679[2], i679[3], 0, i678, 'chooseScene')
  request.r(i679[4], i679[5], 0, i678, 'tutorial')
  return i678
}

Deserializers["TextWaveTMP"] = function (request, data, root) {
  var i680 = root || request.c( 'TextWaveTMP' )
  var i681 = data
  i680.waveHeight = i681[0]
  i680.duration = i681[1]
  i680.delay = i681[2]
  return i680
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Mask' )
  var i683 = data
  i682.m_ShowMaskGraphic = !!i683[0]
  return i682
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i685 = data
  i684.m_StartCorner = i685[0]
  i684.m_StartAxis = i685[1]
  i684.m_CellSize = new pc.Vec2( i685[2], i685[3] )
  i684.m_Spacing = new pc.Vec2( i685[4], i685[5] )
  i684.m_Constraint = i685[6]
  i684.m_ConstraintCount = i685[7]
  i684.m_Padding = UnityEngine.RectOffset.FromPaddings(i685[8], i685[9], i685[10], i685[11])
  i684.m_ChildAlignment = i685[12]
  return i684
}

Deserializers["Board"] = function (request, data, root) {
  var i686 = root || request.c( 'Board' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'cellPrefab')
  request.r(i687[2], i687[3], 0, i686, 'boardRt')
  i686.targetScale = i687[4]
  return i686
}

Deserializers["SparkleMaskController"] = function (request, data, root) {
  var i688 = root || request.c( 'SparkleMaskController' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'sparkleMat')
  i688.pixelsPerCell = i689[2]
  request.r(i689[3], i689[4], 0, i688, 'board')
  request.r(i689[5], i689[6], 0, i688, 'boardRT')
  request.r(i689[7], i689[8], 0, i688, 'boardGrid')
  request.r(i689[9], i689[10], 0, i688, 'particles')
  return i688
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i691 = data
  i690.m_Spacing = i691[0]
  i690.m_ChildForceExpandWidth = !!i691[1]
  i690.m_ChildForceExpandHeight = !!i691[2]
  i690.m_ChildControlWidth = !!i691[3]
  i690.m_ChildControlHeight = !!i691[4]
  i690.m_ChildScaleWidth = !!i691[5]
  i690.m_ChildScaleHeight = !!i691[6]
  i690.m_ReverseArrangement = !!i691[7]
  i690.m_Padding = UnityEngine.RectOffset.FromPaddings(i691[8], i691[9], i691[10], i691[11])
  i690.m_ChildAlignment = i691[12]
  return i690
}

Deserializers["Palette"] = function (request, data, root) {
  var i692 = root || request.c( 'Palette' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'colorButtonPrefab')
  return i692
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i695 = data
  i694.m_Spacing = i695[0]
  i694.m_ChildForceExpandWidth = !!i695[1]
  i694.m_ChildForceExpandHeight = !!i695[2]
  i694.m_ChildControlWidth = !!i695[3]
  i694.m_ChildControlHeight = !!i695[4]
  i694.m_ChildScaleWidth = !!i695[5]
  i694.m_ChildScaleHeight = !!i695[6]
  i694.m_ReverseArrangement = !!i695[7]
  i694.m_Padding = UnityEngine.RectOffset.FromPaddings(i695[8], i695[9], i695[10], i695[11])
  i694.m_ChildAlignment = i695[12]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i697 = data
  i696.m_Alpha = i697[0]
  i696.m_Interactable = !!i697[1]
  i696.m_BlocksRaycasts = !!i697[2]
  i696.m_IgnoreParentGroups = !!i697[3]
  i696.enabled = !!i697[4]
  return i696
}

Deserializers["FadeInStart"] = function (request, data, root) {
  var i698 = root || request.c( 'FadeInStart' )
  var i699 = data
  i698.duration = i699[0]
  return i698
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_FirstSelected')
  i700.m_sendNavigationEvents = !!i701[2]
  i700.m_DragThreshold = i701[3]
  return i700
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i703 = data
  i702.m_HorizontalAxis = i703[0]
  i702.m_VerticalAxis = i703[1]
  i702.m_SubmitButton = i703[2]
  i702.m_CancelButton = i703[3]
  i702.m_InputActionsPerSecond = i703[4]
  i702.m_RepeatDelay = i703[5]
  i702.m_ForceModuleActive = !!i703[6]
  i702.m_SendPointerHoverToParent = !!i703[7]
  return i702
}

Deserializers["ConvertImage"] = function (request, data, root) {
  var i704 = root || request.c( 'ConvertImage' )
  var i705 = data
  i704.RenderPixelMatrix = request.d('UnityEngine.Events.UnityAction', i705[0], i704.RenderPixelMatrix)
  i704.ActivateCell = request.d('UnityEngine.Events.UnityAction', i705[1], i704.ActivateCell)
  i704.CheckingDoneColor = request.d('UnityEngine.Events.UnityAction', i705[2], i704.CheckingDoneColor)
  i704.HideShowProgressBar = request.d('UnityEngine.Events.UnityAction', i705[3], i704.HideShowProgressBar)
  i704.UpdateColorProgress = request.d('UnityEngine.Events.UnityAction', i705[4], i704.UpdateColorProgress)
  request.r(i705[5], i705[6], 0, i704, 'img')
  i704.alphaThreshold = i705[7]
  request.r(i705[8], i705[9], 0, i704, 'victory')
  return i704
}

Deserializers["UnityEngine.Events.UnityAction"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Events.UnityAction' )
  var i707 = data
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i709 = data
  i708.color = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  request.r(i709[4], i709[5], 0, i708, 'sprite')
  i708.flipX = !!i709[6]
  i708.flipY = !!i709[7]
  i708.drawMode = i709[8]
  i708.size = new pc.Vec2( i709[9], i709[10] )
  i708.tileMode = i709[11]
  i708.adaptiveModeThreshold = i709[12]
  i708.maskInteraction = i709[13]
  i708.spriteSortPoint = i709[14]
  i708.enabled = !!i709[15]
  request.r(i709[16], i709[17], 0, i708, 'sharedMaterial')
  var i711 = i709[18]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.sharedMaterials = i710
  i708.receiveShadows = !!i709[19]
  i708.shadowCastingMode = i709[20]
  i708.sortingLayerID = i709[21]
  i708.sortingOrder = i709[22]
  i708.lightmapIndex = i709[23]
  i708.lightmapSceneIndex = i709[24]
  i708.lightmapScaleOffset = new pc.Vec4( i709[25], i709[26], i709[27], i709[28] )
  i708.lightProbeUsage = i709[29]
  i708.reflectionProbeUsage = i709[30]
  return i708
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i712 = root || request.c( 'BoardManager' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'boardPort')
  request.r(i713[2], i713[3], 0, i712, 'boardLand')
  request.r(i713[4], i713[5], 0, i712, 'boardPortShadow')
  request.r(i713[6], i713[7], 0, i712, 'boardLandShadow')
  request.r(i713[8], i713[9], 0, i712, 'palettePort')
  request.r(i713[10], i713[11], 0, i712, 'paletteLand')
  return i712
}

Deserializers["SimpleTutorial"] = function (request, data, root) {
  var i714 = root || request.c( 'SimpleTutorial' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'finger')
  request.r(i715[2], i715[3], 0, i714, 'overlay')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i717 = data
  i716.ambientIntensity = i717[0]
  i716.reflectionIntensity = i717[1]
  i716.ambientMode = i717[2]
  i716.ambientLight = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.ambientSkyColor = new pc.Color(i717[7], i717[8], i717[9], i717[10])
  i716.ambientGroundColor = new pc.Color(i717[11], i717[12], i717[13], i717[14])
  i716.ambientEquatorColor = new pc.Color(i717[15], i717[16], i717[17], i717[18])
  i716.fogColor = new pc.Color(i717[19], i717[20], i717[21], i717[22])
  i716.fogEndDistance = i717[23]
  i716.fogStartDistance = i717[24]
  i716.fogDensity = i717[25]
  i716.fog = !!i717[26]
  request.r(i717[27], i717[28], 0, i716, 'skybox')
  i716.fogMode = i717[29]
  var i719 = i717[30]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i719[i + 0]) );
  }
  i716.lightmaps = i718
  i716.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i717[31], i716.lightProbes)
  i716.lightmapsMode = i717[32]
  i716.mixedBakeMode = i717[33]
  i716.environmentLightingMode = i717[34]
  i716.ambientProbe = new pc.SphericalHarmonicsL2(i717[35])
  i716.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i717[36])
  i716.useReferenceAmbientProbe = !!i717[37]
  request.r(i717[38], i717[39], 0, i716, 'customReflection')
  request.r(i717[40], i717[41], 0, i716, 'defaultReflection')
  i716.defaultReflectionMode = i717[42]
  i716.defaultReflectionResolution = i717[43]
  i716.sunLightObjectId = i717[44]
  i716.pixelLightCount = i717[45]
  i716.defaultReflectionHDR = !!i717[46]
  i716.hasLightDataAsset = !!i717[47]
  i716.hasManualGenerate = !!i717[48]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'lightmapColor')
  request.r(i723[2], i723[3], 0, i722, 'lightmapDirection')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i724 = root || new UnityEngine.LightProbes()
  var i725 = data
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i735[i + 0]));
  }
  i732.ShaderCompilationErrors = i734
  i732.name = i733[1]
  i732.guid = i733[2]
  var i737 = i733[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.shaderDefinedKeywords = i736
  var i739 = i733[4]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i739[i + 0]) );
  }
  i732.passes = i738
  var i741 = i733[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i741[i + 0]) );
  }
  i732.usePasses = i740
  var i743 = i733[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i743[i + 0]) );
  }
  i732.defaultParameterValues = i742
  request.r(i733[7], i733[8], 0, i732, 'unityFallbackShader')
  i732.readDepth = !!i733[9]
  i732.isCreatedByShaderGraph = !!i733[10]
  i732.disableBatching = !!i733[11]
  i732.compiled = !!i733[12]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i747 = data
  i746.shaderName = i747[0]
  i746.errorMessage = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i752 = root || new pc.UnityShaderPass()
  var i753 = data
  i752.id = i753[0]
  i752.subShaderIndex = i753[1]
  i752.name = i753[2]
  i752.passType = i753[3]
  i752.grabPassTextureName = i753[4]
  i752.usePass = !!i753[5]
  i752.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[6], i752.zTest)
  i752.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[7], i752.zWrite)
  i752.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[8], i752.culling)
  i752.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[9], i752.blending)
  i752.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[10], i752.alphaBlending)
  i752.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[11], i752.colorWriteMask)
  i752.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[12], i752.offsetUnits)
  i752.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[13], i752.offsetFactor)
  i752.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[14], i752.stencilRef)
  i752.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[15], i752.stencilReadMask)
  i752.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[16], i752.stencilWriteMask)
  i752.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[17], i752.stencilOp)
  i752.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[18], i752.stencilOpFront)
  i752.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[19], i752.stencilOpBack)
  var i755 = i753[20]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i755[i + 0]) );
  }
  i752.tags = i754
  var i757 = i753[21]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i752.passDefinedKeywords = i756
  var i759 = i753[22]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i759[i + 0]) );
  }
  i752.passDefinedKeywordGroups = i758
  var i761 = i753[23]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i761[i + 0]) );
  }
  i752.variants = i760
  var i763 = i753[24]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i763[i + 0]) );
  }
  i752.excludedVariants = i762
  i752.hasDepthReader = !!i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i765 = data
  i764.val = i765[0]
  i764.name = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i767 = data
  i766.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[0], i766.src)
  i766.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[1], i766.dst)
  i766.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[2], i766.op)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i769 = data
  i768.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[0], i768.pass)
  i768.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[1], i768.fail)
  i768.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[2], i768.zFail)
  i768.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[3], i768.comp)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.hasDiscard = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i783 = data
  i782.passId = i783[0]
  i782.subShaderIndex = i783[1]
  var i785 = i783[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i782.keywords = i784
  i782.vertexProgram = i783[3]
  i782.fragmentProgram = i783[4]
  i782.exportedForWebGl2 = !!i783[5]
  i782.readDepth = !!i783[6]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'shader')
  i788.pass = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i793 = data
  i792.name = i793[0]
  i792.type = i793[1]
  i792.value = new pc.Vec4( i793[2], i793[3], i793[4], i793[5] )
  i792.textureValue = i793[6]
  i792.shaderPropertyFlag = i793[7]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i795 = data
  i794.name = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'texture')
  i794.aabb = i795[3]
  i794.vertices = i795[4]
  i794.triangles = i795[5]
  i794.textureRect = UnityEngine.Rect.MinMaxRect(i795[6], i795[7], i795[8], i795[9])
  i794.packedRect = UnityEngine.Rect.MinMaxRect(i795[10], i795[11], i795[12], i795[13])
  i794.border = new pc.Vec4( i795[14], i795[15], i795[16], i795[17] )
  i794.transparency = i795[18]
  i794.bounds = i795[19]
  i794.pixelsPerUnit = i795[20]
  i794.textureWidth = i795[21]
  i794.textureHeight = i795[22]
  i794.nativeSize = new pc.Vec2( i795[23], i795[24] )
  i794.pivot = new pc.Vec2( i795[25], i795[26] )
  i794.textureRectOffset = new pc.Vec2( i795[27], i795[28] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i797 = data
  i796.name = i797[0]
  i796.ascent = i797[1]
  i796.originalLineHeight = i797[2]
  i796.fontSize = i797[3]
  var i799 = i797[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i799[i + 0]) );
  }
  i796.characterInfo = i798
  request.r(i797[5], i797[6], 0, i796, 'texture')
  i796.originalFontSize = i797[7]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i803 = data
  i802.index = i803[0]
  i802.advance = i803[1]
  i802.bearing = i803[2]
  i802.glyphWidth = i803[3]
  i802.glyphHeight = i803[4]
  i802.minX = i803[5]
  i802.maxX = i803[6]
  i802.minY = i803[7]
  i802.maxY = i803[8]
  i802.uvBottomLeftX = i803[9]
  i802.uvBottomLeftY = i803[10]
  i802.uvBottomRightX = i803[11]
  i802.uvBottomRightY = i803[12]
  i802.uvTopLeftX = i803[13]
  i802.uvTopLeftY = i803[14]
  i802.uvTopRightX = i803[15]
  i802.uvTopRightY = i803[16]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i805 = data
  i804.name = i805[0]
  i804.bytes64 = i805[1]
  i804.data = i805[2]
  return i804
}

Deserializers["Data"] = function (request, data, root) {
  var i806 = root || request.c( 'Data' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'img')
  var i809 = i807[2]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Data+IntColor32Pair')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('Data+IntColor32Pair', i809[i + 0]));
  }
  i806.colorList = i808
  return i806
}

Deserializers["Data+IntColor32Pair"] = function (request, data, root) {
  var i812 = root || request.c( 'Data+IntColor32Pair' )
  var i813 = data
  i812.key = i813[0]
  i812.r = i813[1]
  i812.g = i813[2]
  i812.b = i813[3]
  return i812
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'atlas')
  i814.normalStyle = i815[2]
  i814.normalSpacingOffset = i815[3]
  i814.boldStyle = i815[4]
  i814.boldSpacing = i815[5]
  i814.italicStyle = i815[6]
  i814.tabSize = i815[7]
  i814.hashCode = i815[8]
  request.r(i815[9], i815[10], 0, i814, 'material')
  i814.materialHashCode = i815[11]
  i814.m_Version = i815[12]
  i814.m_SourceFontFileGUID = i815[13]
  request.r(i815[14], i815[15], 0, i814, 'm_SourceFontFile_EditorRef')
  request.r(i815[16], i815[17], 0, i814, 'm_SourceFontFile')
  i814.m_AtlasPopulationMode = i815[18]
  i814.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i815[19], i814.m_FaceInfo)
  var i817 = i815[20]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('UnityEngine.TextCore.Glyph', i817[i + 0]));
  }
  i814.m_GlyphTable = i816
  var i819 = i815[21]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.TMP_Character', i819[i + 0]));
  }
  i814.m_CharacterTable = i818
  var i821 = i815[22]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i814.m_AtlasTextures = i820
  i814.m_AtlasTextureIndex = i815[23]
  i814.m_IsMultiAtlasTexturesEnabled = !!i815[24]
  i814.m_ClearDynamicDataOnBuild = !!i815[25]
  var i823 = i815[26]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('UnityEngine.TextCore.GlyphRect', i823[i + 0]));
  }
  i814.m_UsedGlyphRects = i822
  var i825 = i815[27]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('UnityEngine.TextCore.GlyphRect', i825[i + 0]));
  }
  i814.m_FreeGlyphRects = i824
  i814.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i815[28], i814.m_fontInfo)
  i814.m_AtlasWidth = i815[29]
  i814.m_AtlasHeight = i815[30]
  i814.m_AtlasPadding = i815[31]
  i814.m_AtlasRenderMode = i815[32]
  var i827 = i815[33]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.TMP_Glyph', i827[i + 0]));
  }
  i814.m_glyphInfoList = i826
  i814.m_KerningTable = request.d('TMPro.KerningTable', i815[34], i814.m_KerningTable)
  i814.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i815[35], i814.m_FontFeatureTable)
  var i829 = i815[36]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 1, i828, '')
  }
  i814.fallbackFontAssets = i828
  var i831 = i815[37]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i814.m_FallbackFontAssetTable = i830
  i814.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i815[38], i814.m_CreationSettings)
  var i833 = i815[39]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('TMPro.TMP_FontWeightPair', i833[i + 0]) );
  }
  i814.m_FontWeightTable = i832
  var i835 = i815[40]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('TMPro.TMP_FontWeightPair', i835[i + 0]) );
  }
  i814.fontWeights = i834
  return i814
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i837 = data
  i836.m_FaceIndex = i837[0]
  i836.m_FamilyName = i837[1]
  i836.m_StyleName = i837[2]
  i836.m_PointSize = i837[3]
  i836.m_Scale = i837[4]
  i836.m_UnitsPerEM = i837[5]
  i836.m_LineHeight = i837[6]
  i836.m_AscentLine = i837[7]
  i836.m_CapLine = i837[8]
  i836.m_MeanLine = i837[9]
  i836.m_Baseline = i837[10]
  i836.m_DescentLine = i837[11]
  i836.m_SuperscriptOffset = i837[12]
  i836.m_SuperscriptSize = i837[13]
  i836.m_SubscriptOffset = i837[14]
  i836.m_SubscriptSize = i837[15]
  i836.m_UnderlineOffset = i837[16]
  i836.m_UnderlineThickness = i837[17]
  i836.m_StrikethroughOffset = i837[18]
  i836.m_StrikethroughThickness = i837[19]
  i836.m_TabWidth = i837[20]
  return i836
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i841 = data
  i840.m_Index = i841[0]
  i840.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i841[1], i840.m_Metrics)
  i840.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i841[2], i840.m_GlyphRect)
  i840.m_Scale = i841[3]
  i840.m_AtlasIndex = i841[4]
  i840.m_ClassDefinitionType = i841[5]
  return i840
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i843 = data
  i842.m_Width = i843[0]
  i842.m_Height = i843[1]
  i842.m_HorizontalBearingX = i843[2]
  i842.m_HorizontalBearingY = i843[3]
  i842.m_HorizontalAdvance = i843[4]
  return i842
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i845 = data
  i844.m_X = i845[0]
  i844.m_Y = i845[1]
  i844.m_Width = i845[2]
  i844.m_Height = i845[3]
  return i844
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_Character' )
  var i849 = data
  i848.m_ElementType = i849[0]
  i848.m_Unicode = i849[1]
  i848.m_GlyphIndex = i849[2]
  i848.m_Scale = i849[3]
  return i848
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i855 = data
  i854.Name = i855[0]
  i854.PointSize = i855[1]
  i854.Scale = i855[2]
  i854.CharacterCount = i855[3]
  i854.LineHeight = i855[4]
  i854.Baseline = i855[5]
  i854.Ascender = i855[6]
  i854.CapHeight = i855[7]
  i854.Descender = i855[8]
  i854.CenterLine = i855[9]
  i854.SuperscriptOffset = i855[10]
  i854.SubscriptOffset = i855[11]
  i854.SubSize = i855[12]
  i854.Underline = i855[13]
  i854.UnderlineThickness = i855[14]
  i854.strikethrough = i855[15]
  i854.strikethroughThickness = i855[16]
  i854.TabWidth = i855[17]
  i854.Padding = i855[18]
  i854.AtlasWidth = i855[19]
  i854.AtlasHeight = i855[20]
  return i854
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_Glyph' )
  var i859 = data
  i858.id = i859[0]
  i858.x = i859[1]
  i858.y = i859[2]
  i858.width = i859[3]
  i858.height = i859[4]
  i858.xOffset = i859[5]
  i858.yOffset = i859[6]
  i858.xAdvance = i859[7]
  i858.scale = i859[8]
  return i858
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.KerningTable' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.KerningPair', i863[i + 0]));
  }
  i860.kerningPairs = i862
  return i860
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.KerningPair' )
  var i867 = data
  i866.xOffset = i867[0]
  i866.m_FirstGlyph = i867[1]
  i866.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i867[2], i866.m_FirstGlyphAdjustments)
  i866.m_SecondGlyph = i867[3]
  i866.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i867[4], i866.m_SecondGlyphAdjustments)
  i866.m_IgnoreSpacingAdjustments = !!i867[5]
  return i866
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i871[i + 0]));
  }
  i868.m_GlyphPairAdjustmentRecords = i870
  return i868
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i875 = data
  i874.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i875[0], i874.m_FirstAdjustmentRecord)
  i874.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i875[1], i874.m_SecondAdjustmentRecord)
  i874.m_FeatureLookupFlags = i875[2]
  return i874
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i877 = data
  i876.m_GlyphIndex = i877[0]
  i876.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i877[1], i876.m_GlyphValueRecord)
  return i876
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i879 = data
  i878.m_XPlacement = i879[0]
  i878.m_YPlacement = i879[1]
  i878.m_XAdvance = i879[2]
  i878.m_YAdvance = i879[3]
  return i878
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i883 = data
  i882.sourceFontFileName = i883[0]
  i882.sourceFontFileGUID = i883[1]
  i882.pointSizeSamplingMode = i883[2]
  i882.pointSize = i883[3]
  i882.padding = i883[4]
  i882.packingMode = i883[5]
  i882.atlasWidth = i883[6]
  i882.atlasHeight = i883[7]
  i882.characterSetSelectionMode = i883[8]
  i882.characterSequence = i883[9]
  i882.referencedFontAssetGUID = i883[10]
  i882.referencedTextAssetGUID = i883[11]
  i882.fontStyle = i883[12]
  i882.fontStyleModifier = i883[13]
  i882.renderMode = i883[14]
  i882.includeFontFeatures = !!i883[15]
  return i882
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'regularTypeface')
  request.r(i887[2], i887[3], 0, i886, 'italicTypeface')
  return i886
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i889 = data
  i888.useSafeMode = !!i889[0]
  i888.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i889[1], i888.safeModeOptions)
  i888.timeScale = i889[2]
  i888.unscaledTimeScale = i889[3]
  i888.useSmoothDeltaTime = !!i889[4]
  i888.maxSmoothUnscaledTime = i889[5]
  i888.rewindCallbackMode = i889[6]
  i888.showUnityEditorReport = !!i889[7]
  i888.logBehaviour = i889[8]
  i888.drawGizmos = !!i889[9]
  i888.defaultRecyclable = !!i889[10]
  i888.defaultAutoPlay = i889[11]
  i888.defaultUpdateType = i889[12]
  i888.defaultTimeScaleIndependent = !!i889[13]
  i888.defaultEaseType = i889[14]
  i888.defaultEaseOvershootOrAmplitude = i889[15]
  i888.defaultEasePeriod = i889[16]
  i888.defaultAutoKill = !!i889[17]
  i888.defaultLoopType = i889[18]
  i888.debugMode = !!i889[19]
  i888.debugStoreTargetId = !!i889[20]
  i888.showPreviewPanel = !!i889[21]
  i888.storeSettingsLocation = i889[22]
  i888.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i889[23], i888.modules)
  i888.createASMDEF = !!i889[24]
  i888.showPlayingTweens = !!i889[25]
  i888.showPausedTweens = !!i889[26]
  return i888
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i890 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i891 = data
  i890.logBehaviour = i891[0]
  i890.nestedTweenFailureBehaviour = i891[1]
  return i890
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i892 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i893 = data
  i892.showPanel = !!i893[0]
  i892.audioEnabled = !!i893[1]
  i892.physicsEnabled = !!i893[2]
  i892.physics2DEnabled = !!i893[3]
  i892.spriteEnabled = !!i893[4]
  i892.uiEnabled = !!i893[5]
  i892.textMeshProEnabled = !!i893[6]
  i892.tk2DEnabled = !!i893[7]
  i892.deAudioEnabled = !!i893[8]
  i892.deUnityExtendedEnabled = !!i893[9]
  i892.epoOutlineEnabled = !!i893[10]
  return i892
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_Settings' )
  var i895 = data
  i894.m_enableWordWrapping = !!i895[0]
  i894.m_enableKerning = !!i895[1]
  i894.m_enableExtraPadding = !!i895[2]
  i894.m_enableTintAllSprites = !!i895[3]
  i894.m_enableParseEscapeCharacters = !!i895[4]
  i894.m_EnableRaycastTarget = !!i895[5]
  i894.m_GetFontFeaturesAtRuntime = !!i895[6]
  i894.m_missingGlyphCharacter = i895[7]
  i894.m_warningsDisabled = !!i895[8]
  request.r(i895[9], i895[10], 0, i894, 'm_defaultFontAsset')
  i894.m_defaultFontAssetPath = i895[11]
  i894.m_defaultFontSize = i895[12]
  i894.m_defaultAutoSizeMinRatio = i895[13]
  i894.m_defaultAutoSizeMaxRatio = i895[14]
  i894.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i895[15], i895[16] )
  i894.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i895[17], i895[18] )
  i894.m_autoSizeTextContainer = !!i895[19]
  i894.m_IsTextObjectScaleStatic = !!i895[20]
  var i897 = i895[21]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i894.m_fallbackFontAssets = i896
  i894.m_matchMaterialPreset = !!i895[22]
  request.r(i895[23], i895[24], 0, i894, 'm_defaultSpriteAsset')
  i894.m_defaultSpriteAssetPath = i895[25]
  i894.m_enableEmojiSupport = !!i895[26]
  i894.m_MissingCharacterSpriteUnicode = i895[27]
  i894.m_defaultColorGradientPresetsPath = i895[28]
  request.r(i895[29], i895[30], 0, i894, 'm_defaultStyleSheet')
  i894.m_StyleSheetsResourcePath = i895[31]
  request.r(i895[32], i895[33], 0, i894, 'm_leadingCharacters')
  request.r(i895[34], i895[35], 0, i894, 'm_followingCharacters')
  i894.m_UseModernHangulLineBreakingRules = !!i895[36]
  return i894
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'spriteSheet')
  var i901 = i899[2]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Sprite', i901[i + 0]));
  }
  i898.spriteInfoList = i900
  var i903 = i899[3]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i898.fallbackSpriteAssets = i902
  i898.hashCode = i899[4]
  request.r(i899[5], i899[6], 0, i898, 'material')
  i898.materialHashCode = i899[7]
  i898.m_Version = i899[8]
  i898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i899[9], i898.m_FaceInfo)
  var i905 = i899[10]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_SpriteCharacter', i905[i + 0]));
  }
  i898.m_SpriteCharacterTable = i904
  var i907 = i899[11]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_SpriteGlyph', i907[i + 0]));
  }
  i898.m_SpriteGlyphTable = i906
  return i898
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_Sprite' )
  var i911 = data
  i910.name = i911[0]
  i910.hashCode = i911[1]
  i910.unicode = i911[2]
  i910.pivot = new pc.Vec2( i911[3], i911[4] )
  request.r(i911[5], i911[6], 0, i910, 'sprite')
  i910.id = i911[7]
  i910.x = i911[8]
  i910.y = i911[9]
  i910.width = i911[10]
  i910.height = i911[11]
  i910.xOffset = i911[12]
  i910.yOffset = i911[13]
  i910.xAdvance = i911[14]
  i910.scale = i911[15]
  return i910
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i917 = data
  i916.m_Name = i917[0]
  i916.m_HashCode = i917[1]
  i916.m_ElementType = i917[2]
  i916.m_Unicode = i917[3]
  i916.m_GlyphIndex = i917[4]
  i916.m_Scale = i917[5]
  return i916
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'sprite')
  i920.m_Index = i921[2]
  i920.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i921[3], i920.m_Metrics)
  i920.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i921[4], i920.m_GlyphRect)
  i920.m_Scale = i921[5]
  i920.m_AtlasIndex = i921[6]
  i920.m_ClassDefinitionType = i921[7]
  return i920
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('TMPro.TMP_Style', i925[i + 0]));
  }
  i922.m_StyleList = i924
  return i922
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_Style' )
  var i929 = data
  i928.m_Name = i929[0]
  i928.m_HashCode = i929[1]
  i928.m_OpeningDefinition = i929[2]
  i928.m_ClosingDefinition = i929[3]
  i928.m_OpeningTagArray = i929[4]
  i928.m_ClosingTagArray = i929[5]
  i928.m_OpeningTagUnicodeArray = i929[6]
  i928.m_ClosingTagUnicodeArray = i929[7]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i933[i + 0]) );
  }
  i930.files = i932
  i930.componentToPrefabIds = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i937 = data
  i936.path = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'unityObject')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i941[i + 0]) );
  }
  i938.scriptsExecutionOrder = i940
  var i943 = i939[1]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i943[i + 0]) );
  }
  i938.sortingLayers = i942
  var i945 = i939[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i945[i + 0]) );
  }
  i938.cullingLayers = i944
  i938.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i939[3], i938.timeSettings)
  i938.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i939[4], i938.physicsSettings)
  i938.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i939[5], i938.physics2DSettings)
  i938.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i939[6], i938.qualitySettings)
  i938.enableRealtimeShadows = !!i939[7]
  i938.enableAutoInstancing = !!i939[8]
  i938.enableStaticBatching = !!i939[9]
  i938.enableDynamicBatching = !!i939[10]
  i938.lightmapEncodingQuality = i939[11]
  i938.desiredColorSpace = i939[12]
  var i947 = i939[13]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i938.allTags = i946
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i951 = data
  i950.name = i951[0]
  i950.value = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i955 = data
  i954.id = i955[0]
  i954.name = i955[1]
  i954.value = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i961 = data
  i960.fixedDeltaTime = i961[0]
  i960.maximumDeltaTime = i961[1]
  i960.timeScale = i961[2]
  i960.maximumParticleTimestep = i961[3]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i963 = data
  i962.gravity = new pc.Vec3( i963[0], i963[1], i963[2] )
  i962.defaultSolverIterations = i963[3]
  i962.bounceThreshold = i963[4]
  i962.autoSyncTransforms = !!i963[5]
  i962.autoSimulation = !!i963[6]
  var i965 = i963[7]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i965[i + 0]) );
  }
  i962.collisionMatrix = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.layerId = i969[1]
  i968.otherLayerId = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'material')
  i970.gravity = new pc.Vec2( i971[2], i971[3] )
  i970.positionIterations = i971[4]
  i970.velocityIterations = i971[5]
  i970.velocityThreshold = i971[6]
  i970.maxLinearCorrection = i971[7]
  i970.maxAngularCorrection = i971[8]
  i970.maxTranslationSpeed = i971[9]
  i970.maxRotationSpeed = i971[10]
  i970.baumgarteScale = i971[11]
  i970.baumgarteTOIScale = i971[12]
  i970.timeToSleep = i971[13]
  i970.linearSleepTolerance = i971[14]
  i970.angularSleepTolerance = i971[15]
  i970.defaultContactOffset = i971[16]
  i970.autoSimulation = !!i971[17]
  i970.queriesHitTriggers = !!i971[18]
  i970.queriesStartInColliders = !!i971[19]
  i970.callbacksOnDisable = !!i971[20]
  i970.reuseCollisionCallbacks = !!i971[21]
  i970.autoSyncTransforms = !!i971[22]
  var i973 = i971[23]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i973[i + 0]) );
  }
  i970.collisionMatrix = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.layerId = i977[1]
  i976.otherLayerId = i977[2]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i981[i + 0]) );
  }
  i978.qualityLevels = i980
  var i983 = i979[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i978.names = i982
  i978.shadows = i979[2]
  i978.anisotropicFiltering = i979[3]
  i978.antiAliasing = i979[4]
  i978.lodBias = i979[5]
  i978.shadowCascades = i979[6]
  i978.shadowDistance = i979[7]
  i978.shadowmaskMode = i979[8]
  i978.shadowProjection = i979[9]
  i978.shadowResolution = i979[10]
  i978.softParticles = !!i979[11]
  i978.softVegetation = !!i979[12]
  i978.activeColorSpace = i979[13]
  i978.desiredColorSpace = i979[14]
  i978.masterTextureLimit = i979[15]
  i978.maxQueuedFrames = i979[16]
  i978.particleRaycastBudget = i979[17]
  i978.pixelLightCount = i979[18]
  i978.realtimeReflectionProbes = !!i979[19]
  i978.shadowCascade2Split = i979[20]
  i978.shadowCascade4Split = new pc.Vec3( i979[21], i979[22], i979[23] )
  i978.streamingMipmapsActive = !!i979[24]
  i978.vSyncCount = i979[25]
  i978.asyncUploadBufferSize = i979[26]
  i978.asyncUploadTimeSlice = i979[27]
  i978.billboardsFaceCameraPosition = !!i979[28]
  i978.shadowNearPlaneOffset = i979[29]
  i978.streamingMipmapsMemoryBudget = i979[30]
  i978.maximumLODLevel = i979[31]
  i978.streamingMipmapsAddAllCameras = !!i979[32]
  i978.streamingMipmapsMaxLevelReduction = i979[33]
  i978.streamingMipmapsRenderersPerFrame = i979[34]
  i978.resolutionScalingFixedDPIFactor = i979[35]
  i978.streamingMipmapsMaxFileIORequests = i979[36]
  i978.currentQualityLevel = i979[37]
  return i978
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i987 = data
  i986.xPlacement = i987[0]
  i986.yPlacement = i987[1]
  i986.xAdvance = i987[2]
  i986.yAdvance = i987[3]
  return i986
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[20],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[20],"83":[84],"85":[86],"87":[86],"23":[2],"11":[5,2],"88":[3,2],"89":[31],"90":[2],"91":[20],"92":[2],"93":[84,2],"14":[2,3],"94":[2],"95":[3,2],"96":[84],"97":[3,2],"98":[2],"99":[100],"101":[2],"102":[2],"25":[23],"5":[3,2],"103":[2],"24":[23],"104":[2],"31":[2],"36":[2],"105":[2],"106":[2],"107":[2],"34":[2],"30":[2],"108":[2],"109":[3,2],"110":[2],"111":[2],"112":[2],"113":[2],"10":[3,2],"114":[2],"115":[39],"116":[39],"40":[39],"117":[39],"118":[20],"119":[20],"120":[100],"121":[42],"122":[123],"124":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","Cell","UnityEngine.MonoBehaviour","UnityEngine.UI.Text","CellBorderDrawer","UnityEngine.Font","ColorBtn","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","ZoomManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ChooseBtn","Data","UnityEngine.GameObject","TextWaveTMP","UnityEngine.UI.Mask","UnityEngine.UI.GridLayoutGroup","Board","SparkleMaskController","UnityEngine.UI.VerticalLayoutGroup","Palette","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.CanvasGroup","FadeInStart","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ConvertImage","UnityEngine.SpriteRenderer","BoardManager","SimpleTutorial","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","GridDrawer","ResponsiveGrid","SmartCellOutline","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PLA_PixelArt";

Deserializers.lunaInitializationTime = "09/29/2025 10:01:18";

Deserializers.lunaDaysRunning = "3.7";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "21301";

Deserializers.projectId = "2419795600804d64e9b6023558ee01ba";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1731";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4188";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLA_PixelArt";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "261c5f8f-e382-46b3-86d6-1d81ef5ff051";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

