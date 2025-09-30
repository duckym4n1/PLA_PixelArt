var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointSpring' )
  var i1429 = data
  i1428.spring = i1429[0]
  i1428.damper = i1429[1]
  i1428.targetPosition = i1429[2]
  return i1428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointMotor' )
  var i1431 = data
  i1430.m_TargetVelocity = i1431[0]
  i1430.m_Force = i1431[1]
  i1430.m_FreeSpin = i1431[2]
  return i1430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.JointLimits' )
  var i1433 = data
  i1432.m_Min = i1433[0]
  i1432.m_Max = i1433[1]
  i1432.m_Bounciness = i1433[2]
  i1432.m_BounceMinVelocity = i1433[3]
  i1432.m_ContactDistance = i1433[4]
  i1432.minBounce = i1433[5]
  i1432.maxBounce = i1433[6]
  return i1432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointDrive' )
  var i1435 = data
  i1434.m_PositionSpring = i1435[0]
  i1434.m_PositionDamper = i1435[1]
  i1434.m_MaximumForce = i1435[2]
  return i1434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1437 = data
  i1436.m_Spring = i1437[0]
  i1436.m_Damper = i1437[1]
  return i1436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1439 = data
  i1438.m_Limit = i1439[0]
  i1438.m_Bounciness = i1439[1]
  i1438.m_ContactDistance = i1439[2]
  return i1438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1441 = data
  i1440.m_ExtremumSlip = i1441[0]
  i1440.m_ExtremumValue = i1441[1]
  i1440.m_AsymptoteSlip = i1441[2]
  i1440.m_AsymptoteValue = i1441[3]
  i1440.m_Stiffness = i1441[4]
  return i1440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1443 = data
  i1442.m_LowerAngle = i1443[0]
  i1442.m_UpperAngle = i1443[1]
  return i1442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1445 = data
  i1444.m_MotorSpeed = i1445[0]
  i1444.m_MaximumMotorTorque = i1445[1]
  return i1444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1447 = data
  i1446.m_DampingRatio = i1447[0]
  i1446.m_Frequency = i1447[1]
  i1446.m_Angle = i1447[2]
  return i1446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1449 = data
  i1448.m_LowerTranslation = i1449[0]
  i1448.m_UpperTranslation = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1451 = data
  i1450.name = i1451[0]
  i1450.width = i1451[1]
  i1450.height = i1451[2]
  i1450.mipmapCount = i1451[3]
  i1450.anisoLevel = i1451[4]
  i1450.filterMode = i1451[5]
  i1450.hdr = !!i1451[6]
  i1450.format = i1451[7]
  i1450.wrapMode = i1451[8]
  i1450.alphaIsTransparency = !!i1451[9]
  i1450.alphaSource = i1451[10]
  i1450.graphicsFormat = i1451[11]
  i1450.sRGBTexture = !!i1451[12]
  i1450.desiredColorSpace = i1451[13]
  i1450.wrapU = i1451[14]
  i1450.wrapV = i1451[15]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1452 = root || new pc.UnityMaterial()
  var i1453 = data
  i1452.name = i1453[0]
  request.r(i1453[1], i1453[2], 0, i1452, 'shader')
  i1452.renderQueue = i1453[3]
  i1452.enableInstancing = !!i1453[4]
  var i1455 = i1453[5]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1455[i + 0]) );
  }
  i1452.floatParameters = i1454
  var i1457 = i1453[6]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1457[i + 0]) );
  }
  i1452.colorParameters = i1456
  var i1459 = i1453[7]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1459[i + 0]) );
  }
  i1452.vectorParameters = i1458
  var i1461 = i1453[8]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1461[i + 0]) );
  }
  i1452.textureParameters = i1460
  var i1463 = i1453[9]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1463[i + 0]) );
  }
  i1452.materialFlags = i1462
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.value = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = new pc.Color(i1471[1], i1471[2], i1471[3], i1471[4])
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.value = new pc.Vec4( i1475[1], i1475[2], i1475[3], i1475[4] )
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1479 = data
  i1478.name = i1479[0]
  request.r(i1479[1], i1479[2], 0, i1478, 'value')
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.enabled = !!i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1485 = data
  i1484.pivot = new pc.Vec2( i1485[0], i1485[1] )
  i1484.anchorMin = new pc.Vec2( i1485[2], i1485[3] )
  i1484.anchorMax = new pc.Vec2( i1485[4], i1485[5] )
  i1484.sizeDelta = new pc.Vec2( i1485[6], i1485[7] )
  i1484.anchoredPosition3D = new pc.Vec3( i1485[8], i1485[9], i1485[10] )
  i1484.rotation = new pc.Quat(i1485[11], i1485[12], i1485[13], i1485[14])
  i1484.scale = new pc.Vec3( i1485[15], i1485[16], i1485[17] )
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1487 = data
  i1486.cullTransparentMesh = !!i1487[0]
  return i1486
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.Image' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'm_Sprite')
  i1488.m_Type = i1489[2]
  i1488.m_PreserveAspect = !!i1489[3]
  i1488.m_FillCenter = !!i1489[4]
  i1488.m_FillMethod = i1489[5]
  i1488.m_FillAmount = i1489[6]
  i1488.m_FillClockwise = !!i1489[7]
  i1488.m_FillOrigin = i1489[8]
  i1488.m_UseSpriteMesh = !!i1489[9]
  i1488.m_PixelsPerUnitMultiplier = i1489[10]
  i1488.m_Maskable = !!i1489[11]
  request.r(i1489[12], i1489[13], 0, i1488, 'm_Material')
  i1488.m_Color = new pc.Color(i1489[14], i1489[15], i1489[16], i1489[17])
  i1488.m_RaycastTarget = !!i1489[18]
  i1488.m_RaycastPadding = new pc.Vec4( i1489[19], i1489[20], i1489[21], i1489[22] )
  return i1488
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.Button' )
  var i1491 = data
  i1490.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1491[0], i1490.m_OnClick)
  i1490.m_Navigation = request.d('UnityEngine.UI.Navigation', i1491[1], i1490.m_Navigation)
  i1490.m_Transition = i1491[2]
  i1490.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1491[3], i1490.m_Colors)
  i1490.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1491[4], i1490.m_SpriteState)
  i1490.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1491[5], i1490.m_AnimationTriggers)
  i1490.m_Interactable = !!i1491[6]
  request.r(i1491[7], i1491[8], 0, i1490, 'm_TargetGraphic')
  return i1490
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1493 = data
  i1492.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1493[0], i1492.m_PersistentCalls)
  return i1492
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('UnityEngine.Events.PersistentCall', i1497[i + 0]));
  }
  i1494.m_Calls = i1496
  return i1494
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'm_Target')
  i1500.m_TargetAssemblyTypeName = i1501[2]
  i1500.m_MethodName = i1501[3]
  i1500.m_Mode = i1501[4]
  i1500.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1501[5], i1500.m_Arguments)
  i1500.m_CallState = i1501[6]
  return i1500
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'm_ObjectArgument')
  i1502.m_ObjectArgumentAssemblyTypeName = i1503[2]
  i1502.m_IntArgument = i1503[3]
  i1502.m_FloatArgument = i1503[4]
  i1502.m_StringArgument = i1503[5]
  i1502.m_BoolArgument = !!i1503[6]
  return i1502
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1505 = data
  i1504.m_Mode = i1505[0]
  i1504.m_WrapAround = !!i1505[1]
  request.r(i1505[2], i1505[3], 0, i1504, 'm_SelectOnUp')
  request.r(i1505[4], i1505[5], 0, i1504, 'm_SelectOnDown')
  request.r(i1505[6], i1505[7], 0, i1504, 'm_SelectOnLeft')
  request.r(i1505[8], i1505[9], 0, i1504, 'm_SelectOnRight')
  return i1504
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1507 = data
  i1506.m_NormalColor = new pc.Color(i1507[0], i1507[1], i1507[2], i1507[3])
  i1506.m_HighlightedColor = new pc.Color(i1507[4], i1507[5], i1507[6], i1507[7])
  i1506.m_PressedColor = new pc.Color(i1507[8], i1507[9], i1507[10], i1507[11])
  i1506.m_SelectedColor = new pc.Color(i1507[12], i1507[13], i1507[14], i1507[15])
  i1506.m_DisabledColor = new pc.Color(i1507[16], i1507[17], i1507[18], i1507[19])
  i1506.m_ColorMultiplier = i1507[20]
  i1506.m_FadeDuration = i1507[21]
  return i1506
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'm_HighlightedSprite')
  request.r(i1509[2], i1509[3], 0, i1508, 'm_PressedSprite')
  request.r(i1509[4], i1509[5], 0, i1508, 'm_SelectedSprite')
  request.r(i1509[6], i1509[7], 0, i1508, 'm_DisabledSprite')
  return i1508
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1511 = data
  i1510.m_NormalTrigger = i1511[0]
  i1510.m_HighlightedTrigger = i1511[1]
  i1510.m_PressedTrigger = i1511[2]
  i1510.m_SelectedTrigger = i1511[3]
  i1510.m_DisabledTrigger = i1511[4]
  return i1510
}

Deserializers["Cell"] = function (request, data, root) {
  var i1512 = root || request.c( 'Cell' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'text')
  request.r(i1513[2], i1513[3], 0, i1512, 'txt')
  i1512.row = i1513[4]
  i1512.col = i1513[5]
  request.r(i1513[6], i1513[7], 0, i1512, 'afterPaint')
  return i1512
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.Text' )
  var i1515 = data
  i1514.m_FontData = request.d('UnityEngine.UI.FontData', i1515[0], i1514.m_FontData)
  i1514.m_Text = i1515[1]
  i1514.m_Maskable = !!i1515[2]
  request.r(i1515[3], i1515[4], 0, i1514, 'm_Material')
  i1514.m_Color = new pc.Color(i1515[5], i1515[6], i1515[7], i1515[8])
  i1514.m_RaycastTarget = !!i1515[9]
  i1514.m_RaycastPadding = new pc.Vec4( i1515[10], i1515[11], i1515[12], i1515[13] )
  return i1514
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'm_Font')
  i1516.m_FontSize = i1517[2]
  i1516.m_FontStyle = i1517[3]
  i1516.m_BestFit = !!i1517[4]
  i1516.m_MinSize = i1517[5]
  i1516.m_MaxSize = i1517[6]
  i1516.m_Alignment = i1517[7]
  i1516.m_AlignByGeometry = !!i1517[8]
  i1516.m_RichText = !!i1517[9]
  i1516.m_HorizontalOverflow = i1517[10]
  i1516.m_VerticalOverflow = i1517[11]
  i1516.m_LineSpacing = i1517[12]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.tagId = i1519[1]
  i1518.enabled = !!i1519[2]
  i1518.isStatic = !!i1519[3]
  i1518.layer = i1519[4]
  return i1518
}

Deserializers["ColorBtn"] = function (request, data, root) {
  var i1520 = root || request.c( 'ColorBtn' )
  var i1521 = data
  i1520.color = UnityEngine.Color32.ConstructColor(i1521[0], i1521[1], i1521[2], i1521[3])
  request.r(i1521[4], i1521[5], 0, i1520, 'text')
  request.r(i1521[6], i1521[7], 0, i1520, 'txt')
  request.r(i1521[8], i1521[9], 0, i1520, 'img')
  return i1520
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1522 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1523 = data
  i1522.m_hasFontAssetChanged = !!i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'm_baseMaterial')
  i1522.m_maskOffset = new pc.Vec4( i1523[3], i1523[4], i1523[5], i1523[6] )
  i1522.m_text = i1523[7]
  i1522.m_isRightToLeft = !!i1523[8]
  request.r(i1523[9], i1523[10], 0, i1522, 'm_fontAsset')
  request.r(i1523[11], i1523[12], 0, i1522, 'm_sharedMaterial')
  var i1525 = i1523[13]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 2, i1524, '')
  }
  i1522.m_fontSharedMaterials = i1524
  request.r(i1523[14], i1523[15], 0, i1522, 'm_fontMaterial')
  var i1527 = i1523[16]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1522.m_fontMaterials = i1526
  i1522.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1523[17], i1523[18], i1523[19], i1523[20])
  i1522.m_fontColor = new pc.Color(i1523[21], i1523[22], i1523[23], i1523[24])
  i1522.m_enableVertexGradient = !!i1523[25]
  i1522.m_colorMode = i1523[26]
  i1522.m_fontColorGradient = request.d('TMPro.VertexGradient', i1523[27], i1522.m_fontColorGradient)
  request.r(i1523[28], i1523[29], 0, i1522, 'm_fontColorGradientPreset')
  request.r(i1523[30], i1523[31], 0, i1522, 'm_spriteAsset')
  i1522.m_tintAllSprites = !!i1523[32]
  request.r(i1523[33], i1523[34], 0, i1522, 'm_StyleSheet')
  i1522.m_TextStyleHashCode = i1523[35]
  i1522.m_overrideHtmlColors = !!i1523[36]
  i1522.m_faceColor = UnityEngine.Color32.ConstructColor(i1523[37], i1523[38], i1523[39], i1523[40])
  i1522.m_fontSize = i1523[41]
  i1522.m_fontSizeBase = i1523[42]
  i1522.m_fontWeight = i1523[43]
  i1522.m_enableAutoSizing = !!i1523[44]
  i1522.m_fontSizeMin = i1523[45]
  i1522.m_fontSizeMax = i1523[46]
  i1522.m_fontStyle = i1523[47]
  i1522.m_HorizontalAlignment = i1523[48]
  i1522.m_VerticalAlignment = i1523[49]
  i1522.m_textAlignment = i1523[50]
  i1522.m_characterSpacing = i1523[51]
  i1522.m_wordSpacing = i1523[52]
  i1522.m_lineSpacing = i1523[53]
  i1522.m_lineSpacingMax = i1523[54]
  i1522.m_paragraphSpacing = i1523[55]
  i1522.m_charWidthMaxAdj = i1523[56]
  i1522.m_enableWordWrapping = !!i1523[57]
  i1522.m_wordWrappingRatios = i1523[58]
  i1522.m_overflowMode = i1523[59]
  request.r(i1523[60], i1523[61], 0, i1522, 'm_linkedTextComponent')
  request.r(i1523[62], i1523[63], 0, i1522, 'parentLinkedComponent')
  i1522.m_enableKerning = !!i1523[64]
  i1522.m_enableExtraPadding = !!i1523[65]
  i1522.checkPaddingRequired = !!i1523[66]
  i1522.m_isRichText = !!i1523[67]
  i1522.m_parseCtrlCharacters = !!i1523[68]
  i1522.m_isOrthographic = !!i1523[69]
  i1522.m_isCullingEnabled = !!i1523[70]
  i1522.m_horizontalMapping = i1523[71]
  i1522.m_verticalMapping = i1523[72]
  i1522.m_uvLineOffset = i1523[73]
  i1522.m_geometrySortingOrder = i1523[74]
  i1522.m_IsTextObjectScaleStatic = !!i1523[75]
  i1522.m_VertexBufferAutoSizeReduction = !!i1523[76]
  i1522.m_useMaxVisibleDescender = !!i1523[77]
  i1522.m_pageToDisplay = i1523[78]
  i1522.m_margin = new pc.Vec4( i1523[79], i1523[80], i1523[81], i1523[82] )
  i1522.m_isUsingLegacyAnimationComponent = !!i1523[83]
  i1522.m_isVolumetricText = !!i1523[84]
  i1522.m_Maskable = !!i1523[85]
  request.r(i1523[86], i1523[87], 0, i1522, 'm_Material')
  i1522.m_Color = new pc.Color(i1523[88], i1523[89], i1523[90], i1523[91])
  i1522.m_RaycastTarget = !!i1523[92]
  i1522.m_RaycastPadding = new pc.Vec4( i1523[93], i1523[94], i1523[95], i1523[96] )
  return i1522
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.VertexGradient' )
  var i1531 = data
  i1530.topLeft = new pc.Color(i1531[0], i1531[1], i1531[2], i1531[3])
  i1530.topRight = new pc.Color(i1531[4], i1531[5], i1531[6], i1531[7])
  i1530.bottomLeft = new pc.Color(i1531[8], i1531[9], i1531[10], i1531[11])
  i1530.bottomRight = new pc.Color(i1531[12], i1531[13], i1531[14], i1531[15])
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1533 = data
  i1532.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1533[0], i1532.main)
  i1532.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1533[1], i1532.colorBySpeed)
  i1532.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1533[2], i1532.colorOverLifetime)
  i1532.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1533[3], i1532.emission)
  i1532.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1533[4], i1532.rotationBySpeed)
  i1532.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1533[5], i1532.rotationOverLifetime)
  i1532.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1533[6], i1532.shape)
  i1532.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1533[7], i1532.sizeBySpeed)
  i1532.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1533[8], i1532.sizeOverLifetime)
  i1532.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1533[9], i1532.textureSheetAnimation)
  i1532.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1533[10], i1532.velocityOverLifetime)
  i1532.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1533[11], i1532.noise)
  i1532.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1533[12], i1532.inheritVelocity)
  i1532.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1533[13], i1532.forceOverLifetime)
  i1532.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1533[14], i1532.limitVelocityOverLifetime)
  i1532.useAutoRandomSeed = !!i1533[15]
  i1532.randomSeed = i1533[16]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1534 = root || new pc.ParticleSystemMain()
  var i1535 = data
  i1534.duration = i1535[0]
  i1534.loop = !!i1535[1]
  i1534.prewarm = !!i1535[2]
  i1534.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[3], i1534.startDelay)
  i1534.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[4], i1534.startLifetime)
  i1534.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[5], i1534.startSpeed)
  i1534.startSize3D = !!i1535[6]
  i1534.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[7], i1534.startSizeX)
  i1534.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[8], i1534.startSizeY)
  i1534.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[9], i1534.startSizeZ)
  i1534.startRotation3D = !!i1535[10]
  i1534.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[11], i1534.startRotationX)
  i1534.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[12], i1534.startRotationY)
  i1534.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[13], i1534.startRotationZ)
  i1534.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1535[14], i1534.startColor)
  i1534.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[15], i1534.gravityModifier)
  i1534.simulationSpace = i1535[16]
  request.r(i1535[17], i1535[18], 0, i1534, 'customSimulationSpace')
  i1534.simulationSpeed = i1535[19]
  i1534.useUnscaledTime = !!i1535[20]
  i1534.scalingMode = i1535[21]
  i1534.playOnAwake = !!i1535[22]
  i1534.maxParticles = i1535[23]
  i1534.emitterVelocityMode = i1535[24]
  i1534.stopAction = i1535[25]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1536 = root || new pc.MinMaxCurve()
  var i1537 = data
  i1536.mode = i1537[0]
  i1536.curveMin = new pc.AnimationCurve( { keys_flow: i1537[1] } )
  i1536.curveMax = new pc.AnimationCurve( { keys_flow: i1537[2] } )
  i1536.curveMultiplier = i1537[3]
  i1536.constantMin = i1537[4]
  i1536.constantMax = i1537[5]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1538 = root || new pc.MinMaxGradient()
  var i1539 = data
  i1538.mode = i1539[0]
  i1538.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1539[1], i1538.gradientMin)
  i1538.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1539[2], i1538.gradientMax)
  i1538.colorMin = new pc.Color(i1539[3], i1539[4], i1539[5], i1539[6])
  i1538.colorMax = new pc.Color(i1539[7], i1539[8], i1539[9], i1539[10])
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1541 = data
  i1540.mode = i1541[0]
  var i1543 = i1541[1]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1543[i + 0]) );
  }
  i1540.colorKeys = i1542
  var i1545 = i1541[2]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1545[i + 0]) );
  }
  i1540.alphaKeys = i1544
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemColorBySpeed()
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1547[1], i1546.color)
  i1546.range = new pc.Vec2( i1547[2], i1547[3] )
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1551 = data
  i1550.color = new pc.Color(i1551[0], i1551[1], i1551[2], i1551[3])
  i1550.time = i1551[4]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1555 = data
  i1554.alpha = i1555[0]
  i1554.time = i1555[1]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1556 = root || new pc.ParticleSystemColorOverLifetime()
  var i1557 = data
  i1556.enabled = !!i1557[0]
  i1556.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1557[1], i1556.color)
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1558 = root || new pc.ParticleSystemEmitter()
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[1], i1558.rateOverTime)
  i1558.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[2], i1558.rateOverDistance)
  var i1561 = i1559[3]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1561[i + 0]) );
  }
  i1558.bursts = i1560
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1564 = root || new pc.ParticleSystemBurst()
  var i1565 = data
  i1564.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[0], i1564.count)
  i1564.cycleCount = i1565[1]
  i1564.minCount = i1565[2]
  i1564.maxCount = i1565[3]
  i1564.repeatInterval = i1565[4]
  i1564.time = i1565[5]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1566 = root || new pc.ParticleSystemRotationBySpeed()
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[1], i1566.x)
  i1566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[2], i1566.y)
  i1566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[3], i1566.z)
  i1566.separateAxes = !!i1567[4]
  i1566.range = new pc.Vec2( i1567[5], i1567[6] )
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[1], i1568.x)
  i1568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[2], i1568.y)
  i1568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[3], i1568.z)
  i1568.separateAxes = !!i1569[4]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemShape()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.shapeType = i1571[1]
  i1570.randomDirectionAmount = i1571[2]
  i1570.sphericalDirectionAmount = i1571[3]
  i1570.randomPositionAmount = i1571[4]
  i1570.alignToDirection = !!i1571[5]
  i1570.radius = i1571[6]
  i1570.radiusMode = i1571[7]
  i1570.radiusSpread = i1571[8]
  i1570.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[9], i1570.radiusSpeed)
  i1570.radiusThickness = i1571[10]
  i1570.angle = i1571[11]
  i1570.length = i1571[12]
  i1570.boxThickness = new pc.Vec3( i1571[13], i1571[14], i1571[15] )
  i1570.meshShapeType = i1571[16]
  request.r(i1571[17], i1571[18], 0, i1570, 'mesh')
  request.r(i1571[19], i1571[20], 0, i1570, 'meshRenderer')
  request.r(i1571[21], i1571[22], 0, i1570, 'skinnedMeshRenderer')
  i1570.useMeshMaterialIndex = !!i1571[23]
  i1570.meshMaterialIndex = i1571[24]
  i1570.useMeshColors = !!i1571[25]
  i1570.normalOffset = i1571[26]
  i1570.arc = i1571[27]
  i1570.arcMode = i1571[28]
  i1570.arcSpread = i1571[29]
  i1570.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[30], i1570.arcSpeed)
  i1570.donutRadius = i1571[31]
  i1570.position = new pc.Vec3( i1571[32], i1571[33], i1571[34] )
  i1570.rotation = new pc.Vec3( i1571[35], i1571[36], i1571[37] )
  i1570.scale = new pc.Vec3( i1571[38], i1571[39], i1571[40] )
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemSizeBySpeed()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[1], i1572.x)
  i1572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[2], i1572.y)
  i1572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[3], i1572.z)
  i1572.separateAxes = !!i1573[4]
  i1572.range = new pc.Vec2( i1573[5], i1573[6] )
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[1], i1574.x)
  i1574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[2], i1574.y)
  i1574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[3], i1574.z)
  i1574.separateAxes = !!i1575[4]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1576 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1577 = data
  i1576.enabled = !!i1577[0]
  i1576.mode = i1577[1]
  i1576.animation = i1577[2]
  i1576.numTilesX = i1577[3]
  i1576.numTilesY = i1577[4]
  i1576.useRandomRow = !!i1577[5]
  i1576.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[6], i1576.frameOverTime)
  i1576.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[7], i1576.startFrame)
  i1576.cycleCount = i1577[8]
  i1576.rowIndex = i1577[9]
  i1576.flipU = i1577[10]
  i1576.flipV = i1577[11]
  i1576.spriteCount = i1577[12]
  var i1579 = i1577[13]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.sprites = i1578
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[1], i1582.x)
  i1582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[2], i1582.y)
  i1582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[3], i1582.z)
  i1582.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[4], i1582.radial)
  i1582.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[5], i1582.speedModifier)
  i1582.space = i1583[6]
  i1582.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[7], i1582.orbitalX)
  i1582.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[8], i1582.orbitalY)
  i1582.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[9], i1582.orbitalZ)
  i1582.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[10], i1582.orbitalOffsetX)
  i1582.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[11], i1582.orbitalOffsetY)
  i1582.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[12], i1582.orbitalOffsetZ)
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemNoise()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.separateAxes = !!i1585[1]
  i1584.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.strengthX)
  i1584.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.strengthY)
  i1584.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[4], i1584.strengthZ)
  i1584.frequency = i1585[5]
  i1584.damping = !!i1585[6]
  i1584.octaveCount = i1585[7]
  i1584.octaveMultiplier = i1585[8]
  i1584.octaveScale = i1585[9]
  i1584.quality = i1585[10]
  i1584.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[11], i1584.scrollSpeed)
  i1584.scrollSpeedMultiplier = i1585[12]
  i1584.remapEnabled = !!i1585[13]
  i1584.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[14], i1584.remapX)
  i1584.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[15], i1584.remapY)
  i1584.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[16], i1584.remapZ)
  i1584.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[17], i1584.positionAmount)
  i1584.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[18], i1584.rotationAmount)
  i1584.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[19], i1584.sizeAmount)
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemInheritVelocity()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.mode = i1587[1]
  i1586.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[2], i1586.curve)
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemForceOverLifetime()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[1], i1588.x)
  i1588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[2], i1588.y)
  i1588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[3], i1588.z)
  i1588.space = i1589[4]
  i1588.randomized = !!i1589[5]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1590 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[1], i1590.limit)
  i1590.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[2], i1590.limitX)
  i1590.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[3], i1590.limitY)
  i1590.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[4], i1590.limitZ)
  i1590.dampen = i1591[5]
  i1590.separateAxes = !!i1591[6]
  i1590.space = i1591[7]
  i1590.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[8], i1590.drag)
  i1590.multiplyDragByParticleSize = !!i1591[9]
  i1590.multiplyDragByParticleVelocity = !!i1591[10]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'mesh')
  i1592.meshCount = i1593[2]
  i1592.activeVertexStreamsCount = i1593[3]
  i1592.alignment = i1593[4]
  i1592.renderMode = i1593[5]
  i1592.sortMode = i1593[6]
  i1592.lengthScale = i1593[7]
  i1592.velocityScale = i1593[8]
  i1592.cameraVelocityScale = i1593[9]
  i1592.normalDirection = i1593[10]
  i1592.sortingFudge = i1593[11]
  i1592.minParticleSize = i1593[12]
  i1592.maxParticleSize = i1593[13]
  i1592.pivot = new pc.Vec3( i1593[14], i1593[15], i1593[16] )
  request.r(i1593[17], i1593[18], 0, i1592, 'trailMaterial')
  i1592.applyActiveColorSpace = !!i1593[19]
  i1592.enabled = !!i1593[20]
  request.r(i1593[21], i1593[22], 0, i1592, 'sharedMaterial')
  var i1595 = i1593[23]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 2) {
  request.r(i1595[i + 0], i1595[i + 1], 2, i1594, '')
  }
  i1592.sharedMaterials = i1594
  i1592.receiveShadows = !!i1593[24]
  i1592.shadowCastingMode = i1593[25]
  i1592.sortingLayerID = i1593[26]
  i1592.sortingOrder = i1593[27]
  i1592.lightmapIndex = i1593[28]
  i1592.lightmapSceneIndex = i1593[29]
  i1592.lightmapScaleOffset = new pc.Vec4( i1593[30], i1593[31], i1593[32], i1593[33] )
  i1592.lightProbeUsage = i1593[34]
  i1592.reflectionProbeUsage = i1593[35]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.index = i1597[1]
  i1596.startup = !!i1597[2]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1599 = data
  i1598.position = new pc.Vec3( i1599[0], i1599[1], i1599[2] )
  i1598.scale = new pc.Vec3( i1599[3], i1599[4], i1599[5] )
  i1598.rotation = new pc.Quat(i1599[6], i1599[7], i1599[8], i1599[9])
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1601 = data
  i1600.aspect = i1601[0]
  i1600.orthographic = !!i1601[1]
  i1600.orthographicSize = i1601[2]
  i1600.backgroundColor = new pc.Color(i1601[3], i1601[4], i1601[5], i1601[6])
  i1600.nearClipPlane = i1601[7]
  i1600.farClipPlane = i1601[8]
  i1600.fieldOfView = i1601[9]
  i1600.depth = i1601[10]
  i1600.clearFlags = i1601[11]
  i1600.cullingMask = i1601[12]
  i1600.rect = i1601[13]
  request.r(i1601[14], i1601[15], 0, i1600, 'targetTexture')
  i1600.usePhysicalProperties = !!i1601[16]
  i1600.focalLength = i1601[17]
  i1600.sensorSize = new pc.Vec2( i1601[18], i1601[19] )
  i1600.lensShift = new pc.Vec2( i1601[20], i1601[21] )
  i1600.gateFit = i1601[22]
  i1600.commandBufferCount = i1601[23]
  i1600.cameraType = i1601[24]
  i1600.enabled = !!i1601[25]
  return i1600
}

Deserializers["ZoomManager"] = function (request, data, root) {
  var i1602 = root || request.c( 'ZoomManager' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'boardPort')
  request.r(i1603[2], i1603[3], 0, i1602, 'boardLand')
  request.r(i1603[4], i1603[5], 0, i1602, 'viewportPort')
  request.r(i1603[6], i1603[7], 0, i1602, 'viewportLand')
  i1602.zoomSpeed = i1603[8]
  i1602.minScale = i1603[9]
  i1602.maxScale = i1603[10]
  i1602.snapThreshold = i1603[11]
  i1602.snapSpeed = i1603[12]
  i1602.threshold = i1603[13]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1605 = data
  i1604.planeDistance = i1605[0]
  i1604.referencePixelsPerUnit = i1605[1]
  i1604.isFallbackOverlay = !!i1605[2]
  i1604.renderMode = i1605[3]
  i1604.renderOrder = i1605[4]
  i1604.sortingLayerName = i1605[5]
  i1604.sortingOrder = i1605[6]
  i1604.scaleFactor = i1605[7]
  request.r(i1605[8], i1605[9], 0, i1604, 'worldCamera')
  i1604.overrideSorting = !!i1605[10]
  i1604.pixelPerfect = !!i1605[11]
  i1604.targetDisplay = i1605[12]
  i1604.overridePixelPerfect = !!i1605[13]
  i1604.enabled = !!i1605[14]
  return i1604
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1607 = data
  i1606.m_UiScaleMode = i1607[0]
  i1606.m_ReferencePixelsPerUnit = i1607[1]
  i1606.m_ScaleFactor = i1607[2]
  i1606.m_ReferenceResolution = new pc.Vec2( i1607[3], i1607[4] )
  i1606.m_ScreenMatchMode = i1607[5]
  i1606.m_MatchWidthOrHeight = i1607[6]
  i1606.m_PhysicalUnit = i1607[7]
  i1606.m_FallbackScreenDPI = i1607[8]
  i1606.m_DefaultSpriteDPI = i1607[9]
  i1606.m_DynamicPixelsPerUnit = i1607[10]
  i1606.m_PresetInfoIsWorld = !!i1607[11]
  return i1606
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1609 = data
  i1608.m_IgnoreReversedGraphics = !!i1609[0]
  i1608.m_BlockingObjects = i1609[1]
  i1608.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1609[2] )
  return i1608
}

Deserializers["ChooseBtn"] = function (request, data, root) {
  var i1610 = root || request.c( 'ChooseBtn' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'data')
  request.r(i1611[2], i1611[3], 0, i1610, 'chooseScene')
  return i1610
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1613 = data
  i1612.m_ShowMaskGraphic = !!i1613[0]
  return i1612
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1615 = data
  i1614.m_StartCorner = i1615[0]
  i1614.m_StartAxis = i1615[1]
  i1614.m_CellSize = new pc.Vec2( i1615[2], i1615[3] )
  i1614.m_Spacing = new pc.Vec2( i1615[4], i1615[5] )
  i1614.m_Constraint = i1615[6]
  i1614.m_ConstraintCount = i1615[7]
  i1614.m_Padding = UnityEngine.RectOffset.FromPaddings(i1615[8], i1615[9], i1615[10], i1615[11])
  i1614.m_ChildAlignment = i1615[12]
  return i1614
}

Deserializers["Board"] = function (request, data, root) {
  var i1616 = root || request.c( 'Board' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'cellPrefab')
  return i1616
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1619 = data
  i1618.m_Spacing = i1619[0]
  i1618.m_ChildForceExpandWidth = !!i1619[1]
  i1618.m_ChildForceExpandHeight = !!i1619[2]
  i1618.m_ChildControlWidth = !!i1619[3]
  i1618.m_ChildControlHeight = !!i1619[4]
  i1618.m_ChildScaleWidth = !!i1619[5]
  i1618.m_ChildScaleHeight = !!i1619[6]
  i1618.m_ReverseArrangement = !!i1619[7]
  i1618.m_Padding = UnityEngine.RectOffset.FromPaddings(i1619[8], i1619[9], i1619[10], i1619[11])
  i1618.m_ChildAlignment = i1619[12]
  return i1618
}

Deserializers["Palette"] = function (request, data, root) {
  var i1620 = root || request.c( 'Palette' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'colorButtonPrefab')
  return i1620
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1623 = data
  i1622.m_Spacing = i1623[0]
  i1622.m_ChildForceExpandWidth = !!i1623[1]
  i1622.m_ChildForceExpandHeight = !!i1623[2]
  i1622.m_ChildControlWidth = !!i1623[3]
  i1622.m_ChildControlHeight = !!i1623[4]
  i1622.m_ChildScaleWidth = !!i1623[5]
  i1622.m_ChildScaleHeight = !!i1623[6]
  i1622.m_ReverseArrangement = !!i1623[7]
  i1622.m_Padding = UnityEngine.RectOffset.FromPaddings(i1623[8], i1623[9], i1623[10], i1623[11])
  i1622.m_ChildAlignment = i1623[12]
  return i1622
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'm_FirstSelected')
  i1624.m_sendNavigationEvents = !!i1625[2]
  i1624.m_DragThreshold = i1625[3]
  return i1624
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1627 = data
  i1626.m_HorizontalAxis = i1627[0]
  i1626.m_VerticalAxis = i1627[1]
  i1626.m_SubmitButton = i1627[2]
  i1626.m_CancelButton = i1627[3]
  i1626.m_InputActionsPerSecond = i1627[4]
  i1626.m_RepeatDelay = i1627[5]
  i1626.m_ForceModuleActive = !!i1627[6]
  i1626.m_SendPointerHoverToParent = !!i1627[7]
  return i1626
}

Deserializers["ConvertImage"] = function (request, data, root) {
  var i1628 = root || request.c( 'ConvertImage' )
  var i1629 = data
  i1628.RenderPixelMatrix = request.d('UnityEngine.Events.UnityAction', i1629[0], i1628.RenderPixelMatrix)
  i1628.ActivateCell = request.d('UnityEngine.Events.UnityAction', i1629[1], i1628.ActivateCell)
  i1628.CheckingDoneColor = request.d('UnityEngine.Events.UnityAction', i1629[2], i1628.CheckingDoneColor)
  i1628.HideShowProgressBar = request.d('UnityEngine.Events.UnityAction', i1629[3], i1628.HideShowProgressBar)
  i1628.UpdateColorProgress = request.d('UnityEngine.Events.UnityAction', i1629[4], i1628.UpdateColorProgress)
  request.r(i1629[5], i1629[6], 0, i1628, 'img')
  i1628.alphaThreshold = i1629[7]
  request.r(i1629[8], i1629[9], 0, i1628, 'victory')
  return i1628
}

Deserializers["UnityEngine.Events.UnityAction"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.Events.UnityAction' )
  var i1631 = data
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1633 = data
  i1632.color = new pc.Color(i1633[0], i1633[1], i1633[2], i1633[3])
  request.r(i1633[4], i1633[5], 0, i1632, 'sprite')
  i1632.flipX = !!i1633[6]
  i1632.flipY = !!i1633[7]
  i1632.drawMode = i1633[8]
  i1632.size = new pc.Vec2( i1633[9], i1633[10] )
  i1632.tileMode = i1633[11]
  i1632.adaptiveModeThreshold = i1633[12]
  i1632.maskInteraction = i1633[13]
  i1632.spriteSortPoint = i1633[14]
  i1632.enabled = !!i1633[15]
  request.r(i1633[16], i1633[17], 0, i1632, 'sharedMaterial')
  var i1635 = i1633[18]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 2, i1634, '')
  }
  i1632.sharedMaterials = i1634
  i1632.receiveShadows = !!i1633[19]
  i1632.shadowCastingMode = i1633[20]
  i1632.sortingLayerID = i1633[21]
  i1632.sortingOrder = i1633[22]
  i1632.lightmapIndex = i1633[23]
  i1632.lightmapSceneIndex = i1633[24]
  i1632.lightmapScaleOffset = new pc.Vec4( i1633[25], i1633[26], i1633[27], i1633[28] )
  i1632.lightProbeUsage = i1633[29]
  i1632.reflectionProbeUsage = i1633[30]
  return i1632
}

Deserializers["BoardManager"] = function (request, data, root) {
  var i1636 = root || request.c( 'BoardManager' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'boardPort')
  request.r(i1637[2], i1637[3], 0, i1636, 'boardLand')
  request.r(i1637[4], i1637[5], 0, i1636, 'boardPortShadow')
  request.r(i1637[6], i1637[7], 0, i1636, 'boardLandShadow')
  request.r(i1637[8], i1637[9], 0, i1636, 'palettePort')
  request.r(i1637[10], i1637[11], 0, i1636, 'paletteLand')
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1639 = data
  i1638.ambientIntensity = i1639[0]
  i1638.reflectionIntensity = i1639[1]
  i1638.ambientMode = i1639[2]
  i1638.ambientLight = new pc.Color(i1639[3], i1639[4], i1639[5], i1639[6])
  i1638.ambientSkyColor = new pc.Color(i1639[7], i1639[8], i1639[9], i1639[10])
  i1638.ambientGroundColor = new pc.Color(i1639[11], i1639[12], i1639[13], i1639[14])
  i1638.ambientEquatorColor = new pc.Color(i1639[15], i1639[16], i1639[17], i1639[18])
  i1638.fogColor = new pc.Color(i1639[19], i1639[20], i1639[21], i1639[22])
  i1638.fogEndDistance = i1639[23]
  i1638.fogStartDistance = i1639[24]
  i1638.fogDensity = i1639[25]
  i1638.fog = !!i1639[26]
  request.r(i1639[27], i1639[28], 0, i1638, 'skybox')
  i1638.fogMode = i1639[29]
  var i1641 = i1639[30]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1641[i + 0]) );
  }
  i1638.lightmaps = i1640
  i1638.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1639[31], i1638.lightProbes)
  i1638.lightmapsMode = i1639[32]
  i1638.mixedBakeMode = i1639[33]
  i1638.environmentLightingMode = i1639[34]
  i1638.ambientProbe = new pc.SphericalHarmonicsL2(i1639[35])
  i1638.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1639[36])
  i1638.useReferenceAmbientProbe = !!i1639[37]
  request.r(i1639[38], i1639[39], 0, i1638, 'customReflection')
  request.r(i1639[40], i1639[41], 0, i1638, 'defaultReflection')
  i1638.defaultReflectionMode = i1639[42]
  i1638.defaultReflectionResolution = i1639[43]
  i1638.sunLightObjectId = i1639[44]
  i1638.pixelLightCount = i1639[45]
  i1638.defaultReflectionHDR = !!i1639[46]
  i1638.hasLightDataAsset = !!i1639[47]
  i1638.hasManualGenerate = !!i1639[48]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'lightmapColor')
  request.r(i1645[2], i1645[3], 0, i1644, 'lightmapDirection')
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1646 = root || new UnityEngine.LightProbes()
  var i1647 = data
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1655 = data
  var i1657 = i1655[0]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1657[i + 0]));
  }
  i1654.ShaderCompilationErrors = i1656
  i1654.name = i1655[1]
  i1654.guid = i1655[2]
  var i1659 = i1655[3]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( i1659[i + 0] );
  }
  i1654.shaderDefinedKeywords = i1658
  var i1661 = i1655[4]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1661[i + 0]) );
  }
  i1654.passes = i1660
  var i1663 = i1655[5]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1663[i + 0]) );
  }
  i1654.usePasses = i1662
  var i1665 = i1655[6]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1665[i + 0]) );
  }
  i1654.defaultParameterValues = i1664
  request.r(i1655[7], i1655[8], 0, i1654, 'unityFallbackShader')
  i1654.readDepth = !!i1655[9]
  i1654.isCreatedByShaderGraph = !!i1655[10]
  i1654.disableBatching = !!i1655[11]
  i1654.compiled = !!i1655[12]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1669 = data
  i1668.shaderName = i1669[0]
  i1668.errorMessage = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1674 = root || new pc.UnityShaderPass()
  var i1675 = data
  i1674.id = i1675[0]
  i1674.subShaderIndex = i1675[1]
  i1674.name = i1675[2]
  i1674.passType = i1675[3]
  i1674.grabPassTextureName = i1675[4]
  i1674.usePass = !!i1675[5]
  i1674.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[6], i1674.zTest)
  i1674.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[7], i1674.zWrite)
  i1674.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[8], i1674.culling)
  i1674.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1675[9], i1674.blending)
  i1674.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1675[10], i1674.alphaBlending)
  i1674.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[11], i1674.colorWriteMask)
  i1674.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[12], i1674.offsetUnits)
  i1674.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[13], i1674.offsetFactor)
  i1674.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[14], i1674.stencilRef)
  i1674.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[15], i1674.stencilReadMask)
  i1674.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[16], i1674.stencilWriteMask)
  i1674.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1675[17], i1674.stencilOp)
  i1674.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1675[18], i1674.stencilOpFront)
  i1674.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1675[19], i1674.stencilOpBack)
  var i1677 = i1675[20]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1677[i + 0]) );
  }
  i1674.tags = i1676
  var i1679 = i1675[21]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1674.passDefinedKeywords = i1678
  var i1681 = i1675[22]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1681[i + 0]) );
  }
  i1674.passDefinedKeywordGroups = i1680
  var i1683 = i1675[23]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1683[i + 0]) );
  }
  i1674.variants = i1682
  var i1685 = i1675[24]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1685[i + 0]) );
  }
  i1674.excludedVariants = i1684
  i1674.hasDepthReader = !!i1675[25]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1687 = data
  i1686.val = i1687[0]
  i1686.name = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1689 = data
  i1688.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1689[0], i1688.src)
  i1688.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1689[1], i1688.dst)
  i1688.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1689[2], i1688.op)
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1691 = data
  i1690.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[0], i1690.pass)
  i1690.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[1], i1690.fail)
  i1690.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[2], i1690.zFail)
  i1690.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[3], i1690.comp)
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.value = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1699 = data
  var i1701 = i1699[0]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1698.keywords = i1700
  i1698.hasDiscard = !!i1699[1]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1705 = data
  i1704.passId = i1705[0]
  i1704.subShaderIndex = i1705[1]
  var i1707 = i1705[2]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( i1707[i + 0] );
  }
  i1704.keywords = i1706
  i1704.vertexProgram = i1705[3]
  i1704.fragmentProgram = i1705[4]
  i1704.exportedForWebGl2 = !!i1705[5]
  i1704.readDepth = !!i1705[6]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'shader')
  i1710.pass = i1711[2]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1715 = data
  i1714.name = i1715[0]
  i1714.type = i1715[1]
  i1714.value = new pc.Vec4( i1715[2], i1715[3], i1715[4], i1715[5] )
  i1714.textureValue = i1715[6]
  i1714.shaderPropertyFlag = i1715[7]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1717 = data
  i1716.name = i1717[0]
  request.r(i1717[1], i1717[2], 0, i1716, 'texture')
  i1716.aabb = i1717[3]
  i1716.vertices = i1717[4]
  i1716.triangles = i1717[5]
  i1716.textureRect = UnityEngine.Rect.MinMaxRect(i1717[6], i1717[7], i1717[8], i1717[9])
  i1716.packedRect = UnityEngine.Rect.MinMaxRect(i1717[10], i1717[11], i1717[12], i1717[13])
  i1716.border = new pc.Vec4( i1717[14], i1717[15], i1717[16], i1717[17] )
  i1716.transparency = i1717[18]
  i1716.bounds = i1717[19]
  i1716.pixelsPerUnit = i1717[20]
  i1716.textureWidth = i1717[21]
  i1716.textureHeight = i1717[22]
  i1716.nativeSize = new pc.Vec2( i1717[23], i1717[24] )
  i1716.pivot = new pc.Vec2( i1717[25], i1717[26] )
  i1716.textureRectOffset = new pc.Vec2( i1717[27], i1717[28] )
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1719 = data
  i1718.name = i1719[0]
  i1718.ascent = i1719[1]
  i1718.originalLineHeight = i1719[2]
  i1718.fontSize = i1719[3]
  var i1721 = i1719[4]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1721[i + 0]) );
  }
  i1718.characterInfo = i1720
  request.r(i1719[5], i1719[6], 0, i1718, 'texture')
  i1718.originalFontSize = i1719[7]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1725 = data
  i1724.index = i1725[0]
  i1724.advance = i1725[1]
  i1724.bearing = i1725[2]
  i1724.glyphWidth = i1725[3]
  i1724.glyphHeight = i1725[4]
  i1724.minX = i1725[5]
  i1724.maxX = i1725[6]
  i1724.minY = i1725[7]
  i1724.maxY = i1725[8]
  i1724.uvBottomLeftX = i1725[9]
  i1724.uvBottomLeftY = i1725[10]
  i1724.uvBottomRightX = i1725[11]
  i1724.uvBottomRightY = i1725[12]
  i1724.uvTopLeftX = i1725[13]
  i1724.uvTopLeftY = i1725[14]
  i1724.uvTopRightX = i1725[15]
  i1724.uvTopRightY = i1725[16]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1727 = data
  i1726.name = i1727[0]
  i1726.bytes64 = i1727[1]
  i1726.data = i1727[2]
  return i1726
}

Deserializers["Data"] = function (request, data, root) {
  var i1728 = root || request.c( 'Data' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, 'img')
  var i1731 = i1729[2]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('Data+IntColor32Pair')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('Data+IntColor32Pair', i1731[i + 0]));
  }
  i1728.colorList = i1730
  return i1728
}

Deserializers["Data+IntColor32Pair"] = function (request, data, root) {
  var i1734 = root || request.c( 'Data+IntColor32Pair' )
  var i1735 = data
  i1734.key = i1735[0]
  i1734.r = i1735[1]
  i1734.g = i1735[2]
  i1734.b = i1735[3]
  return i1734
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1736 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'atlas')
  i1736.normalStyle = i1737[2]
  i1736.normalSpacingOffset = i1737[3]
  i1736.boldStyle = i1737[4]
  i1736.boldSpacing = i1737[5]
  i1736.italicStyle = i1737[6]
  i1736.tabSize = i1737[7]
  i1736.hashCode = i1737[8]
  request.r(i1737[9], i1737[10], 0, i1736, 'material')
  i1736.materialHashCode = i1737[11]
  i1736.m_Version = i1737[12]
  i1736.m_SourceFontFileGUID = i1737[13]
  request.r(i1737[14], i1737[15], 0, i1736, 'm_SourceFontFile_EditorRef')
  request.r(i1737[16], i1737[17], 0, i1736, 'm_SourceFontFile')
  i1736.m_AtlasPopulationMode = i1737[18]
  i1736.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1737[19], i1736.m_FaceInfo)
  var i1739 = i1737[20]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('UnityEngine.TextCore.Glyph', i1739[i + 0]));
  }
  i1736.m_GlyphTable = i1738
  var i1741 = i1737[21]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('TMPro.TMP_Character', i1741[i + 0]));
  }
  i1736.m_CharacterTable = i1740
  var i1743 = i1737[22]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1736.m_AtlasTextures = i1742
  i1736.m_AtlasTextureIndex = i1737[23]
  i1736.m_IsMultiAtlasTexturesEnabled = !!i1737[24]
  i1736.m_ClearDynamicDataOnBuild = !!i1737[25]
  var i1745 = i1737[26]
  var i1744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.add(request.d('UnityEngine.TextCore.GlyphRect', i1745[i + 0]));
  }
  i1736.m_UsedGlyphRects = i1744
  var i1747 = i1737[27]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('UnityEngine.TextCore.GlyphRect', i1747[i + 0]));
  }
  i1736.m_FreeGlyphRects = i1746
  i1736.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1737[28], i1736.m_fontInfo)
  i1736.m_AtlasWidth = i1737[29]
  i1736.m_AtlasHeight = i1737[30]
  i1736.m_AtlasPadding = i1737[31]
  i1736.m_AtlasRenderMode = i1737[32]
  var i1749 = i1737[33]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('TMPro.TMP_Glyph', i1749[i + 0]));
  }
  i1736.m_glyphInfoList = i1748
  i1736.m_KerningTable = request.d('TMPro.KerningTable', i1737[34], i1736.m_KerningTable)
  i1736.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1737[35], i1736.m_FontFeatureTable)
  var i1751 = i1737[36]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 1, i1750, '')
  }
  i1736.fallbackFontAssets = i1750
  var i1753 = i1737[37]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 1, i1752, '')
  }
  i1736.m_FallbackFontAssetTable = i1752
  i1736.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1737[38], i1736.m_CreationSettings)
  var i1755 = i1737[39]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('TMPro.TMP_FontWeightPair', i1755[i + 0]) );
  }
  i1736.m_FontWeightTable = i1754
  var i1757 = i1737[40]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('TMPro.TMP_FontWeightPair', i1757[i + 0]) );
  }
  i1736.fontWeights = i1756
  return i1736
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1759 = data
  i1758.m_FaceIndex = i1759[0]
  i1758.m_FamilyName = i1759[1]
  i1758.m_StyleName = i1759[2]
  i1758.m_PointSize = i1759[3]
  i1758.m_Scale = i1759[4]
  i1758.m_UnitsPerEM = i1759[5]
  i1758.m_LineHeight = i1759[6]
  i1758.m_AscentLine = i1759[7]
  i1758.m_CapLine = i1759[8]
  i1758.m_MeanLine = i1759[9]
  i1758.m_Baseline = i1759[10]
  i1758.m_DescentLine = i1759[11]
  i1758.m_SuperscriptOffset = i1759[12]
  i1758.m_SuperscriptSize = i1759[13]
  i1758.m_SubscriptOffset = i1759[14]
  i1758.m_SubscriptSize = i1759[15]
  i1758.m_UnderlineOffset = i1759[16]
  i1758.m_UnderlineThickness = i1759[17]
  i1758.m_StrikethroughOffset = i1759[18]
  i1758.m_StrikethroughThickness = i1759[19]
  i1758.m_TabWidth = i1759[20]
  return i1758
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1763 = data
  i1762.m_Index = i1763[0]
  i1762.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1763[1], i1762.m_Metrics)
  i1762.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1763[2], i1762.m_GlyphRect)
  i1762.m_Scale = i1763[3]
  i1762.m_AtlasIndex = i1763[4]
  i1762.m_ClassDefinitionType = i1763[5]
  return i1762
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1765 = data
  i1764.m_Width = i1765[0]
  i1764.m_Height = i1765[1]
  i1764.m_HorizontalBearingX = i1765[2]
  i1764.m_HorizontalBearingY = i1765[3]
  i1764.m_HorizontalAdvance = i1765[4]
  return i1764
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1767 = data
  i1766.m_X = i1767[0]
  i1766.m_Y = i1767[1]
  i1766.m_Width = i1767[2]
  i1766.m_Height = i1767[3]
  return i1766
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.TMP_Character' )
  var i1771 = data
  i1770.m_ElementType = i1771[0]
  i1770.m_Unicode = i1771[1]
  i1770.m_GlyphIndex = i1771[2]
  i1770.m_Scale = i1771[3]
  return i1770
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1777 = data
  i1776.Name = i1777[0]
  i1776.PointSize = i1777[1]
  i1776.Scale = i1777[2]
  i1776.CharacterCount = i1777[3]
  i1776.LineHeight = i1777[4]
  i1776.Baseline = i1777[5]
  i1776.Ascender = i1777[6]
  i1776.CapHeight = i1777[7]
  i1776.Descender = i1777[8]
  i1776.CenterLine = i1777[9]
  i1776.SuperscriptOffset = i1777[10]
  i1776.SubscriptOffset = i1777[11]
  i1776.SubSize = i1777[12]
  i1776.Underline = i1777[13]
  i1776.UnderlineThickness = i1777[14]
  i1776.strikethrough = i1777[15]
  i1776.strikethroughThickness = i1777[16]
  i1776.TabWidth = i1777[17]
  i1776.Padding = i1777[18]
  i1776.AtlasWidth = i1777[19]
  i1776.AtlasHeight = i1777[20]
  return i1776
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1781 = data
  i1780.id = i1781[0]
  i1780.x = i1781[1]
  i1780.y = i1781[2]
  i1780.width = i1781[3]
  i1780.height = i1781[4]
  i1780.xOffset = i1781[5]
  i1780.yOffset = i1781[6]
  i1780.xAdvance = i1781[7]
  i1780.scale = i1781[8]
  return i1780
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.KerningTable' )
  var i1783 = data
  var i1785 = i1783[0]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.add(request.d('TMPro.KerningPair', i1785[i + 0]));
  }
  i1782.kerningPairs = i1784
  return i1782
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.KerningPair' )
  var i1789 = data
  i1788.xOffset = i1789[0]
  i1788.m_FirstGlyph = i1789[1]
  i1788.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1789[2], i1788.m_FirstGlyphAdjustments)
  i1788.m_SecondGlyph = i1789[3]
  i1788.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1789[4], i1788.m_SecondGlyphAdjustments)
  i1788.m_IgnoreSpacingAdjustments = !!i1789[5]
  return i1788
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1791 = data
  var i1793 = i1791[0]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1793[i + 0]));
  }
  i1790.m_GlyphPairAdjustmentRecords = i1792
  return i1790
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1797 = data
  i1796.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1797[0], i1796.m_FirstAdjustmentRecord)
  i1796.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1797[1], i1796.m_SecondAdjustmentRecord)
  i1796.m_FeatureLookupFlags = i1797[2]
  return i1796
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1799 = data
  i1798.m_GlyphIndex = i1799[0]
  i1798.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1799[1], i1798.m_GlyphValueRecord)
  return i1798
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1801 = data
  i1800.m_XPlacement = i1801[0]
  i1800.m_YPlacement = i1801[1]
  i1800.m_XAdvance = i1801[2]
  i1800.m_YAdvance = i1801[3]
  return i1800
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1804 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1805 = data
  i1804.sourceFontFileName = i1805[0]
  i1804.sourceFontFileGUID = i1805[1]
  i1804.pointSizeSamplingMode = i1805[2]
  i1804.pointSize = i1805[3]
  i1804.padding = i1805[4]
  i1804.packingMode = i1805[5]
  i1804.atlasWidth = i1805[6]
  i1804.atlasHeight = i1805[7]
  i1804.characterSetSelectionMode = i1805[8]
  i1804.characterSequence = i1805[9]
  i1804.referencedFontAssetGUID = i1805[10]
  i1804.referencedTextAssetGUID = i1805[11]
  i1804.fontStyle = i1805[12]
  i1804.fontStyleModifier = i1805[13]
  i1804.renderMode = i1805[14]
  i1804.includeFontFeatures = !!i1805[15]
  return i1804
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'regularTypeface')
  request.r(i1809[2], i1809[3], 0, i1808, 'italicTypeface')
  return i1808
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.TMP_Settings' )
  var i1811 = data
  i1810.m_enableWordWrapping = !!i1811[0]
  i1810.m_enableKerning = !!i1811[1]
  i1810.m_enableExtraPadding = !!i1811[2]
  i1810.m_enableTintAllSprites = !!i1811[3]
  i1810.m_enableParseEscapeCharacters = !!i1811[4]
  i1810.m_EnableRaycastTarget = !!i1811[5]
  i1810.m_GetFontFeaturesAtRuntime = !!i1811[6]
  i1810.m_missingGlyphCharacter = i1811[7]
  i1810.m_warningsDisabled = !!i1811[8]
  request.r(i1811[9], i1811[10], 0, i1810, 'm_defaultFontAsset')
  i1810.m_defaultFontAssetPath = i1811[11]
  i1810.m_defaultFontSize = i1811[12]
  i1810.m_defaultAutoSizeMinRatio = i1811[13]
  i1810.m_defaultAutoSizeMaxRatio = i1811[14]
  i1810.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1811[15], i1811[16] )
  i1810.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1811[17], i1811[18] )
  i1810.m_autoSizeTextContainer = !!i1811[19]
  i1810.m_IsTextObjectScaleStatic = !!i1811[20]
  var i1813 = i1811[21]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 1, i1812, '')
  }
  i1810.m_fallbackFontAssets = i1812
  i1810.m_matchMaterialPreset = !!i1811[22]
  request.r(i1811[23], i1811[24], 0, i1810, 'm_defaultSpriteAsset')
  i1810.m_defaultSpriteAssetPath = i1811[25]
  i1810.m_enableEmojiSupport = !!i1811[26]
  i1810.m_MissingCharacterSpriteUnicode = i1811[27]
  i1810.m_defaultColorGradientPresetsPath = i1811[28]
  request.r(i1811[29], i1811[30], 0, i1810, 'm_defaultStyleSheet')
  i1810.m_StyleSheetsResourcePath = i1811[31]
  request.r(i1811[32], i1811[33], 0, i1810, 'm_leadingCharacters')
  request.r(i1811[34], i1811[35], 0, i1810, 'm_followingCharacters')
  i1810.m_UseModernHangulLineBreakingRules = !!i1811[36]
  return i1810
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'spriteSheet')
  var i1817 = i1815[2]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.add(request.d('TMPro.TMP_Sprite', i1817[i + 0]));
  }
  i1814.spriteInfoList = i1816
  var i1819 = i1815[3]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 1, i1818, '')
  }
  i1814.fallbackSpriteAssets = i1818
  i1814.hashCode = i1815[4]
  request.r(i1815[5], i1815[6], 0, i1814, 'material')
  i1814.materialHashCode = i1815[7]
  i1814.m_Version = i1815[8]
  i1814.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1815[9], i1814.m_FaceInfo)
  var i1821 = i1815[10]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.add(request.d('TMPro.TMP_SpriteCharacter', i1821[i + 0]));
  }
  i1814.m_SpriteCharacterTable = i1820
  var i1823 = i1815[11]
  var i1822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.add(request.d('TMPro.TMP_SpriteGlyph', i1823[i + 0]));
  }
  i1814.m_SpriteGlyphTable = i1822
  return i1814
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.hashCode = i1827[1]
  i1826.unicode = i1827[2]
  i1826.pivot = new pc.Vec2( i1827[3], i1827[4] )
  request.r(i1827[5], i1827[6], 0, i1826, 'sprite')
  i1826.id = i1827[7]
  i1826.x = i1827[8]
  i1826.y = i1827[9]
  i1826.width = i1827[10]
  i1826.height = i1827[11]
  i1826.xOffset = i1827[12]
  i1826.yOffset = i1827[13]
  i1826.xAdvance = i1827[14]
  i1826.scale = i1827[15]
  return i1826
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1833 = data
  i1832.m_Name = i1833[0]
  i1832.m_HashCode = i1833[1]
  i1832.m_ElementType = i1833[2]
  i1832.m_Unicode = i1833[3]
  i1832.m_GlyphIndex = i1833[4]
  i1832.m_Scale = i1833[5]
  return i1832
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1836 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1837 = data
  request.r(i1837[0], i1837[1], 0, i1836, 'sprite')
  i1836.m_Index = i1837[2]
  i1836.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1837[3], i1836.m_Metrics)
  i1836.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1837[4], i1836.m_GlyphRect)
  i1836.m_Scale = i1837[5]
  i1836.m_AtlasIndex = i1837[6]
  i1836.m_ClassDefinitionType = i1837[7]
  return i1836
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1839 = data
  var i1841 = i1839[0]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.add(request.d('TMPro.TMP_Style', i1841[i + 0]));
  }
  i1838.m_StyleList = i1840
  return i1838
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_Style' )
  var i1845 = data
  i1844.m_Name = i1845[0]
  i1844.m_HashCode = i1845[1]
  i1844.m_OpeningDefinition = i1845[2]
  i1844.m_ClosingDefinition = i1845[3]
  i1844.m_OpeningTagArray = i1845[4]
  i1844.m_ClosingTagArray = i1845[5]
  i1844.m_OpeningTagUnicodeArray = i1845[6]
  i1844.m_ClosingTagUnicodeArray = i1845[7]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1847 = data
  var i1849 = i1847[0]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1849[i + 0]) );
  }
  i1846.files = i1848
  i1846.componentToPrefabIds = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1853 = data
  i1852.path = i1853[0]
  request.r(i1853[1], i1853[2], 0, i1852, 'unityObject')
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1857[i + 0]) );
  }
  i1854.scriptsExecutionOrder = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1859[i + 0]) );
  }
  i1854.sortingLayers = i1858
  var i1861 = i1855[2]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1861[i + 0]) );
  }
  i1854.cullingLayers = i1860
  i1854.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1855[3], i1854.timeSettings)
  i1854.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1855[4], i1854.physicsSettings)
  i1854.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1855[5], i1854.physics2DSettings)
  i1854.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1855[6], i1854.qualitySettings)
  i1854.enableRealtimeShadows = !!i1855[7]
  i1854.enableAutoInstancing = !!i1855[8]
  i1854.enableStaticBatching = !!i1855[9]
  i1854.enableDynamicBatching = !!i1855[10]
  i1854.lightmapEncodingQuality = i1855[11]
  i1854.desiredColorSpace = i1855[12]
  var i1863 = i1855[13]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( i1863[i + 0] );
  }
  i1854.allTags = i1862
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.value = i1867[1]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.name = i1871[1]
  i1870.value = i1871[2]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1875 = data
  i1874.id = i1875[0]
  i1874.name = i1875[1]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1877 = data
  i1876.fixedDeltaTime = i1877[0]
  i1876.maximumDeltaTime = i1877[1]
  i1876.timeScale = i1877[2]
  i1876.maximumParticleTimestep = i1877[3]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1879 = data
  i1878.gravity = new pc.Vec3( i1879[0], i1879[1], i1879[2] )
  i1878.defaultSolverIterations = i1879[3]
  i1878.bounceThreshold = i1879[4]
  i1878.autoSyncTransforms = !!i1879[5]
  i1878.autoSimulation = !!i1879[6]
  var i1881 = i1879[7]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1881[i + 0]) );
  }
  i1878.collisionMatrix = i1880
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1885 = data
  i1884.enabled = !!i1885[0]
  i1884.layerId = i1885[1]
  i1884.otherLayerId = i1885[2]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'material')
  i1886.gravity = new pc.Vec2( i1887[2], i1887[3] )
  i1886.positionIterations = i1887[4]
  i1886.velocityIterations = i1887[5]
  i1886.velocityThreshold = i1887[6]
  i1886.maxLinearCorrection = i1887[7]
  i1886.maxAngularCorrection = i1887[8]
  i1886.maxTranslationSpeed = i1887[9]
  i1886.maxRotationSpeed = i1887[10]
  i1886.baumgarteScale = i1887[11]
  i1886.baumgarteTOIScale = i1887[12]
  i1886.timeToSleep = i1887[13]
  i1886.linearSleepTolerance = i1887[14]
  i1886.angularSleepTolerance = i1887[15]
  i1886.defaultContactOffset = i1887[16]
  i1886.autoSimulation = !!i1887[17]
  i1886.queriesHitTriggers = !!i1887[18]
  i1886.queriesStartInColliders = !!i1887[19]
  i1886.callbacksOnDisable = !!i1887[20]
  i1886.reuseCollisionCallbacks = !!i1887[21]
  i1886.autoSyncTransforms = !!i1887[22]
  var i1889 = i1887[23]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1889[i + 0]) );
  }
  i1886.collisionMatrix = i1888
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1893 = data
  i1892.enabled = !!i1893[0]
  i1892.layerId = i1893[1]
  i1892.otherLayerId = i1893[2]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1895 = data
  var i1897 = i1895[0]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1897[i + 0]) );
  }
  i1894.qualityLevels = i1896
  var i1899 = i1895[1]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( i1899[i + 0] );
  }
  i1894.names = i1898
  i1894.shadows = i1895[2]
  i1894.anisotropicFiltering = i1895[3]
  i1894.antiAliasing = i1895[4]
  i1894.lodBias = i1895[5]
  i1894.shadowCascades = i1895[6]
  i1894.shadowDistance = i1895[7]
  i1894.shadowmaskMode = i1895[8]
  i1894.shadowProjection = i1895[9]
  i1894.shadowResolution = i1895[10]
  i1894.softParticles = !!i1895[11]
  i1894.softVegetation = !!i1895[12]
  i1894.activeColorSpace = i1895[13]
  i1894.desiredColorSpace = i1895[14]
  i1894.masterTextureLimit = i1895[15]
  i1894.maxQueuedFrames = i1895[16]
  i1894.particleRaycastBudget = i1895[17]
  i1894.pixelLightCount = i1895[18]
  i1894.realtimeReflectionProbes = !!i1895[19]
  i1894.shadowCascade2Split = i1895[20]
  i1894.shadowCascade4Split = new pc.Vec3( i1895[21], i1895[22], i1895[23] )
  i1894.streamingMipmapsActive = !!i1895[24]
  i1894.vSyncCount = i1895[25]
  i1894.asyncUploadBufferSize = i1895[26]
  i1894.asyncUploadTimeSlice = i1895[27]
  i1894.billboardsFaceCameraPosition = !!i1895[28]
  i1894.shadowNearPlaneOffset = i1895[29]
  i1894.streamingMipmapsMemoryBudget = i1895[30]
  i1894.maximumLODLevel = i1895[31]
  i1894.streamingMipmapsAddAllCameras = !!i1895[32]
  i1894.streamingMipmapsMaxLevelReduction = i1895[33]
  i1894.streamingMipmapsRenderersPerFrame = i1895[34]
  i1894.resolutionScalingFixedDPIFactor = i1895[35]
  i1894.streamingMipmapsMaxFileIORequests = i1895[36]
  i1894.currentQualityLevel = i1895[37]
  return i1894
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1902 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1903 = data
  i1902.xPlacement = i1903[0]
  i1902.yPlacement = i1903[1]
  i1902.xAdvance = i1903[2]
  i1902.yAdvance = i1903[3]
  return i1902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[19],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[19],"76":[77],"78":[79],"80":[79],"23":[2],"81":[29],"82":[19],"83":[2],"84":[77,2],"13":[2,3],"85":[2],"86":[3,2],"87":[77],"88":[3,2],"89":[2],"90":[91],"92":[2],"93":[2],"25":[23],"5":[3,2],"94":[2],"24":[23],"95":[2],"29":[2],"33":[2],"96":[2],"97":[2],"98":[2],"31":[2],"28":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"10":[3,2],"105":[2],"106":[34],"107":[34],"35":[34],"108":[34],"109":[19],"110":[19],"111":[91],"112":[37],"113":[114],"115":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","Cell","UnityEngine.MonoBehaviour","UnityEngine.UI.Text","UnityEngine.Font","ColorBtn","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","ZoomManager","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ChooseBtn","Data","UnityEngine.UI.Mask","UnityEngine.UI.GridLayoutGroup","Board","UnityEngine.UI.VerticalLayoutGroup","Palette","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ConvertImage","UnityEngine.SpriteRenderer","BoardManager","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ResponsiveGrid","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "PLA_PixelArt";

Deserializers.lunaInitializationTime = "09/29/2025 10:01:18";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1676";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3550";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection, mecanim-wasm";

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

Deserializers.buildID = "b4cbc94e-2e56-42cc-b2d9-c373a871c67c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

