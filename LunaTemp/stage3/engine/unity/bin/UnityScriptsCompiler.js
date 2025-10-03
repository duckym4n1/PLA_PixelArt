if ( TRACE ) { TRACE( JSON.parse( '["Board#RowCount#get","Board#ColCount#get","Board#OnEnable","Board#HandleRenderPixelMatrix","Board#ZoomToColor","Board#ResizeMatrixTo25","Board#FitCellsToBoard","Board#SetBoard","Board#AddToCells","Board#HandleCellPainted","Board#OnDestroy","Board#GetCells","BoardManager#init","BoardManager#Show","BoardManager#Start","BoardManager#Update","BoardManager#SetOrderBetweenTwo","BoardTilemap#RowCount#get","BoardTilemap#ColCount#get","BoardTilemap#init","BoardTilemap#OnEnable","BoardTilemap#OnDestroy","BoardTilemap#HandleRenderPixelMatrix","BoardTilemap#Update","BoardTilemap#HandleClick","BoardTilemap#HighlightCellsForCurrentColor","BoardTilemap#PaintNeighbors","BoardTilemap#IsInside","BoardTilemap#GetCells","Cell#init","Cell#init","Cell#Awake","Cell#Start","Cell#SetValue","Cell#SetBorders","Cell#Paint","Cell#SyncPaint","Cell#Activate","Cell#Effected","Cell#OnPointerDown","Cell#OnPointerEnter","Cell#OnPointerUp","Cell#GetSprite","Cell#OnDestroy","Cell#SetNumberVisible","Cell#syncProcess","Cell#GetValue","CellBorderDrawer#init","CellBorderDrawer#OnPopulateMesh","CellBorderDrawer#DrawLine","CellData#init","CellData#ctor","CellData#Highlight","CellData#ResetHighlight","CellData#Paint","ChooseBtn#OnClick","ColorBtn#init","ColorBtn#Awake","ColorBtn#Start","ColorBtn#Setup","ColorBtn#ClickChangeColor","ColorBtn#CheckDone","ColorBtn#OnDestroy","ColorBtn#UpdateProgress","ColorBtn#HideProgress","ColorBtn#GetReadableTextColor","ConvertImage#RGBKey","ConvertImage#init","ConvertImage#Awake","ConvertImage#Start","ConvertImage#LoadData","ConvertImage#mostColorIndex","ConvertImage#FindClosestColorValue","ConvertImage#MapImageToMatrix","ConvertImage#ReducePalette","ConvertImage#SetUpCountColor","ConvertImage#ColorSorter","ConvertImage#CountUnColor","ConvertImage#CheckColorComplete","ConvertImage#CheckFullComplete","ConvertImage#ChangePaintColor","ConvertImage#GetColorByIndex","ConvertImage#GetMatrix","ConvertImage#GetColorDictionary","ConvertImage#GetCurrentUnColor","ConvertImage#GetColorCount","ConvertImage#GetPixelMatrix","ConvertImage#GetCompletionPercent","Data#init","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","FadeInStart#init","FadeInStart#Start","FadeInStart#FadeIn","Palette#init","Palette#Awake","Palette#OnEnable","Palette#HandleRenderPalette","Palette#ApplyCellSize","Palette#OnDestroy","SimpleTutorial#init","SimpleTutorial#Start","SimpleTutorial#ShowTutorial","SimpleTutorial#OnPointerClick","SimpleTutorial#HideTutorial","SimpleTutorial#PlayTapAnim","SparkleMaskController#init","SparkleMaskController#Awake","SparkleMaskController#Init","SparkleMaskController#LateUpdate","SparkleMaskController#UpdateBoardBounds","SparkleMaskController#ClearMask","SparkleMaskController#RevealCell","TextWaveTMP#init","TextWaveTMP#Awake","TextWaveTMP#Start","TextWaveTMP#AnimateWave","ZoomManager#init","ZoomManager#Update","ZoomManager#HandleMouseZoom","ZoomManager#ApplyZoom","ZoomManager#HandleMousePan","ZoomManager#ClampBoardInView"]' ) ); }
/**
 * @version 1.0.9407.19100
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Board start.*/
    Bridge.define("Board", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            grid: null,
            cells: null,
            cellPrefab: null,
            boardRt: null,
            targetScale: 0
        },
        props: {
            RowCount: {
                get: function () {
if ( TRACE ) { TRACE( "Board#RowCount#get", this ); }

                    var $t;
                    return ($t = (this.cells != null ? System.Array.getLength(this.cells, 0) : null), $t != null ? $t : 0);
                }
            },
            ColCount: {
                get: function () {
if ( TRACE ) { TRACE( "Board#ColCount#get", this ); }

                    var $t;
                    return ($t = (this.cells != null ? System.Array.getLength(this.cells, 1) : null), $t != null ? $t : 0);
                }
            }
        },
        methods: {
            /*Board.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Board#OnEnable", this ); }

                this.grid = this.GetComponent(UnityEngine.UI.GridLayoutGroup);
                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.combine(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPixelMatrix));
            },
            /*Board.OnEnable end.*/

            /*Board.HandleRenderPixelMatrix start.*/
            HandleRenderPixelMatrix: function () {
if ( TRACE ) { TRACE( "Board#HandleRenderPixelMatrix", this ); }

                var pixelMatrix = ConvertImage.Instance.GetPixelMatrix();
                if (pixelMatrix == null) {
                    return;
                }

                var rows = System.Array.getLength(pixelMatrix, 0);
                var cols = System.Array.getLength(pixelMatrix, 1);
                if (UnityEngine.MonoBehaviour.op_Inequality(SparkleMaskController.Instance, null)) {
                    SparkleMaskController.Instance.Init(rows, cols);
                }

                this.SetBoard(rows, cols);

                for (var y = 0; y < rows; y = (y + 1) | 0) {
                    for (var x = 0; x < cols; x = (x + 1) | 0) {
                        var cell = UnityEngine.Object.Instantiate(Cell, this.cellPrefab, this.transform);
                        cell.SetValue(y, x, ConvertImage.Instance.GetColorByIndex(pixelMatrix.get([y, x])));
                        //cell.gameObject.SetActive(true);
                        cell.EffectedNeighbor = Bridge.fn.combine(cell.EffectedNeighbor, Bridge.fn.cacheBind(this, this.HandleCellPainted));

                        this.AddToCells(cell, y, x);
                        if (cell.GetValue() !== 0) {
                            var top = (y === 0 || pixelMatrix.get([((y - 1) | 0), x]) === 0);
                            var bot = (y === ((rows - 1) | 0) || pixelMatrix.get([((y + 1) | 0), x]) === 0);
                            var left = (x === 0 || pixelMatrix.get([y, ((x - 1) | 0)]) === 0);
                            var right = (x === ((cols - 1) | 0) || pixelMatrix.get([y, ((x + 1) | 0)]) === 0);

                            cell.SetBorders(top, bot, left, right);
                        }
                    }
                }
                this.FitCellsToBoard();
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.boardRt, new pc.Vec3( 1, 1, 1 ).clone().scale( this.targetScale ), 0.6), DG.Tweening.Ease.OutQuad);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.boardRt, pc.Vec2.ZERO.clone(), 0.6), DG.Tweening.Ease.OutQuad);
            },
            /*Board.HandleRenderPixelMatrix end.*/

            /*Board.ZoomToColor start.*/
            ZoomToColor: function (targetColor) {
if ( TRACE ) { TRACE( "Board#ZoomToColor", this ); }

                var $t;
                var positions = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();

                var rows = System.Array.getLength(this.cells, 0);
                var cols = System.Array.getLength(this.cells, 1);

                for (var y = 0; y < rows; y = (y + 1) | 0) {
                    for (var x = 0; x < cols; x = (x + 1) | 0) {
                        if (ConvertImage.Instance.GetMatrix().get([y, x]) === targetColor) {
                            var rt = this.cells.get([y, x]).GetComponent(UnityEngine.RectTransform);
                            positions.add(rt.anchoredPosition.$clone());
                        }
                    }
                }

                if (positions.Count === 0) {
                    return;
                }

                var center = pc.Vec2.ZERO.clone();
                $t = Bridge.getEnumerator(positions);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        center = center.$clone().add( p.$clone() );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                center = center.$clone().scale( 1.0 / ( positions.Count ) );

                var zoomScale = this.targetScale;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.boardRt, new pc.Vec3( 1, 1, 1 ).clone().scale( zoomScale ), 0.6), DG.Tweening.Ease.OutQuad);

                var targetPos = center.$clone().scale( -1 ).scale( zoomScale );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.boardRt, targetPos.$clone(), 0.6), DG.Tweening.Ease.OutQuad);
            },
            /*Board.ZoomToColor end.*/

            /*Board.ResizeMatrixTo25 start.*/
            ResizeMatrixTo25: function (original) {
if ( TRACE ) { TRACE( "Board#ResizeMatrixTo25", this ); }

                var h = System.Array.getLength(original, 0);
                var w = System.Array.getLength(original, 1);

                var targetH = 25;
                var targetW = 25;

                var resized = System.Array.create(0, null, System.Int32, targetH, targetW);

                for (var y = 0; y < targetH; y = (y + 1) | 0) {
                    for (var x = 0; x < targetW; x = (x + 1) | 0) {
                        var srcY = Bridge.Int.clip32(y / targetH * h);
                        var srcX = Bridge.Int.clip32(x / targetW * w);

                        resized.set([y, x], original.get([srcY, srcX]));
                    }
                }

                return resized;
            },
            /*Board.ResizeMatrixTo25 end.*/

            /*Board.FitCellsToBoard start.*/
            FitCellsToBoard: function () {
if ( TRACE ) { TRACE( "Board#FitCellsToBoard", this ); }

                if (this.GetCells() == null) {
                    return;
                }

                var cells = this.GetCells();
                var rows = System.Array.getLength(cells, 0);
                var cols = System.Array.getLength(cells, 1);

                if (rows <= 0 || cols <= 0) {
                    return;
                }

                var rt = this.grid.GetComponent(UnityEngine.RectTransform);
                var boardWidth = rt.rect.width;
                var boardHeight = rt.rect.height;

                var sizeW = boardWidth / cols;
                var sizeH = boardHeight / rows;
                var cellSize = UnityEngine.Mathf.Min(sizeW, sizeH);

                this.grid.constraint = UnityEngine.UI.GridLayoutGroup.Constraint.FixedColumnCount;
                this.grid.constraintCount = cols;
                this.grid.cellSize = new pc.Vec2( cellSize, cellSize );

                this.grid.childAlignment = UnityEngine.TextAnchor.MiddleCenter;
            },
            /*Board.FitCellsToBoard end.*/

            /*Board.SetBoard start.*/
            SetBoard: function (rows, cols) {
if ( TRACE ) { TRACE( "Board#SetBoard", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.grid, null)) {
                    this.grid = this.GetComponent(UnityEngine.UI.GridLayoutGroup);
                }
                this.grid.constraintCount = cols;
                this.cells = System.Array.create(null, null, Cell, rows, cols);
            },
            /*Board.SetBoard end.*/

            /*Board.AddToCells start.*/
            AddToCells: function (cell, r, c) {
if ( TRACE ) { TRACE( "Board#AddToCells", this ); }

                if (this.cells == null) {
                    return;
                }
                this.cells.set([r, c], cell);
            },
            /*Board.AddToCells end.*/

            /*Board.HandleCellPainted start.*/
            HandleCellPainted: function (source) {
if ( TRACE ) { TRACE( "Board#HandleCellPainted", this ); }

                if (this.cells == null) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(source, null)) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(ConvertImage.Instance, null)) {
                    return;
                }
                var r = source.row;
                var c = source.col;

                for (var dr = -1; dr <= 1; dr = (dr + 1) | 0) {
                    for (var dc = -1; dc <= 1; dc = (dc + 1) | 0) {
                        if (dr === 0 && dc === 0) {
                            continue;
                        }

                        var nr = (r + dr) | 0;
                        var nc = (c + dc) | 0;

                        if (nr >= 0 && nr < System.Array.getLength(this.cells, 0) && nc >= 0 && nc < System.Array.getLength(this.cells, 1)) {
                            var neighbor = this.cells.get([nr, nc]);

                            if (ConvertImage.Instance.GetMatrix().get([nr, nc]) === ConvertImage.Instance.GetCurrentUnColor()) {
                                neighbor.Paint();
                            }
                        }
                    }
                }
            },
            /*Board.HandleCellPainted end.*/

            /*Board.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Board#OnDestroy", this ); }

                var $t;
                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.remove(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPixelMatrix));
                if (this.cells == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(cell, null)) {
                            cell.EffectedNeighbor = Bridge.fn.remove(cell.EffectedNeighbor, Bridge.fn.cacheBind(this, this.HandleCellPainted));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

            },
            /*Board.OnDestroy end.*/

            /*Board.GetCells start.*/
            GetCells: function () {
if ( TRACE ) { TRACE( "Board#GetCells", this ); }

                return this.cells;
            },
            /*Board.GetCells end.*/


        }
    });
    /*Board end.*/

    /*BoardManager start.*/
    Bridge.define("BoardManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            boardPort: null,
            boardLand: null,
            boardPortShadow: null,
            boardLandShadow: null,
            palettePort: null,
            paletteLand: null,
            boardPortIndex: 0,
            boardLandIndex: 0,
            isPortrait: false,
            currentIsPortrait: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardManager#init", this ); }

                this.currentIsPortrait = false;
            }
        },
        methods: {
            /*BoardManager.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "BoardManager#Show", this ); }

                this.isPortrait = UnityEngine.Screen.width < UnityEngine.Screen.height;
                if (this.isPortrait === this.currentIsPortrait) {
                    return;
                }
                if (this.isPortrait) {
                    this.palettePort.ApplyCellSize();
                } else {
                    this.paletteLand.ApplyCellSize();
                }
                this.currentIsPortrait = this.isPortrait;
                this.SetOrderBetweenTwo(this.boardPort, this.boardLand, this.isPortrait);
                this.boardPortShadow.SetActive(!this.isPortrait);
                this.boardLandShadow.SetActive(this.isPortrait);
            },
            /*BoardManager.Show end.*/

            /*BoardManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BoardManager#Start", this ); }

                this.boardPortIndex = this.boardPort.transform.GetSiblingIndex();
                this.boardLandIndex = this.boardLand.transform.GetSiblingIndex();
                this.SetOrderBetweenTwo(this.boardPort, this.boardLand, this.isPortrait);
                this.boardPortShadow.SetActive(!this.isPortrait);
                this.boardLandShadow.SetActive(this.isPortrait);
                this.Show();
            },
            /*BoardManager.Start end.*/

            /*BoardManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BoardManager#Update", this ); }

                this.Show();
            },
            /*BoardManager.Update end.*/

            /*BoardManager.SetOrderBetweenTwo start.*/
            SetOrderBetweenTwo: function (btn1, btn2, conditionA) {
if ( TRACE ) { TRACE( "BoardManager#SetOrderBetweenTwo", this ); }


                if (conditionA) {
                    btn2.transform.SetSiblingIndex(this.boardPortIndex);
                    btn1.transform.SetSiblingIndex(this.boardLandIndex);
                } else {
                    btn1.transform.SetSiblingIndex(this.boardPortIndex);
                    btn2.transform.SetSiblingIndex(this.boardLandIndex);
                }
            },
            /*BoardManager.SetOrderBetweenTwo end.*/


        }
    });
    /*BoardManager end.*/

    /*BoardTilemap start.*/
    Bridge.define("BoardTilemap", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tilemap: null,
            baseTile: null,
            boardRt: null,
            targetScale: 0,
            cells: null,
            pixelMatrix: null
        },
        props: {
            RowCount: {
                get: function () {
if ( TRACE ) { TRACE( "BoardTilemap#RowCount#get", this ); }

                    var $t;
                    return ($t = (this.cells != null ? System.Array.getLength(this.cells, 0) : null), $t != null ? $t : 0);
                }
            },
            ColCount: {
                get: function () {
if ( TRACE ) { TRACE( "BoardTilemap#ColCount#get", this ); }

                    var $t;
                    return ($t = (this.cells != null ? System.Array.getLength(this.cells, 1) : null), $t != null ? $t : 0);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardTilemap#init", this ); }

                this.targetScale = 1.0;
            }
        },
        methods: {
            /*BoardTilemap.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BoardTilemap#OnEnable", this ); }

                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.combine(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPixelMatrix));
            },
            /*BoardTilemap.OnEnable end.*/

            /*BoardTilemap.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "BoardTilemap#OnDestroy", this ); }

                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.remove(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPixelMatrix));
            },
            /*BoardTilemap.OnDestroy end.*/

            /*BoardTilemap.HandleRenderPixelMatrix start.*/
            HandleRenderPixelMatrix: function () {
if ( TRACE ) { TRACE( "BoardTilemap#HandleRenderPixelMatrix", this ); }

                this.pixelMatrix = ConvertImage.Instance.GetPixelMatrix();
                if (this.pixelMatrix == null) {
                    UnityEngine.Debug.LogError$2("Pixel matrix is null. Cannot render.");
                    return;
                }

                var rows = System.Array.getLength(this.pixelMatrix, 0);
                var cols = System.Array.getLength(this.pixelMatrix, 1);

                this.cells = System.Array.create(null, null, CellData, rows, cols);
                this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.ClearAllTiles', null );

                for (var y = 0; y < rows; y = (y + 1) | 0) {
                    for (var x = 0; x < cols; x = (x + 1) | 0) {
                        var val = this.pixelMatrix.get([y, x]);
                        var color = ConvertImage.Instance.GetColorByIndex(val);
                        this.cells.set([y, x], new CellData(y, x, val, color.$clone()));

                        if (val !== 0) {
                            var pos = new UnityEngine.Vector3Int.$ctor1(x, ((-y) | 0), 0);
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTileFlags', null );

                            this.tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetColor', null );
                        }
                    }
                }
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.boardRt, new pc.Vec3( 1, 1, 1 ).clone().scale( this.targetScale ), 0.6), DG.Tweening.Ease.OutQuad);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.boardRt, pc.Vec2.ZERO.clone(), 0.6), DG.Tweening.Ease.OutQuad);
            },
            /*BoardTilemap.HandleRenderPixelMatrix end.*/

            /*BoardTilemap.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BoardTilemap#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var worldPos = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.HandleClick(worldPos);
                }
            },
            /*BoardTilemap.Update end.*/

            /*BoardTilemap.HandleClick start.*/
            HandleClick: function (worldPos) {
if ( TRACE ) { TRACE( "BoardTilemap#HandleClick", this ); }

                var pos = this.tilemap.reportMethod( 'UnityEngine.GridLayout.WorldToCell', null );
                var r = (-pos.y) | 0, c = pos.x;

                if (!this.IsInside(r, c)) {
                    return;
                }
                var cell = this.cells.get([r, c]);
                if (cell == null || cell.value === 0) {
                    return;
                }
                if (cell.isColored) {
                    return;
                }

                if (cell.value === ConvertImage.Instance.GetCurrentUnColor()) {
                    cell.Paint(this.tilemap);
                    this.PaintNeighbors(r, c);
                }
            },
            /*BoardTilemap.HandleClick end.*/

            /*BoardTilemap.HighlightCellsForCurrentColor start.*/
            HighlightCellsForCurrentColor: function () {
if ( TRACE ) { TRACE( "BoardTilemap#HighlightCellsForCurrentColor", this ); }

                var current = ConvertImage.Instance.GetCurrentUnColor();
                var rows = System.Array.getLength(this.cells, 0);
                var cols = System.Array.getLength(this.cells, 1);

                for (var r = 0; r < rows; r = (r + 1) | 0) {
                    for (var c = 0; c < cols; c = (c + 1) | 0) {
                        var cell = this.cells.get([r, c]);
                        if (cell == null || cell.value === 0) {
                            continue;
                        }

                        if (!cell.isColored) {
                            if (cell.value === current) {
                                cell.Highlight(this.tilemap);
                            } else {
                                cell.ResetHighlight(this.tilemap);
                            }
                        }
                    }
                }
            },
            /*BoardTilemap.HighlightCellsForCurrentColor end.*/

            /*BoardTilemap.PaintNeighbors start.*/
            PaintNeighbors: function (r, c) {
if ( TRACE ) { TRACE( "BoardTilemap#PaintNeighbors", this ); }

                for (var dr = -1; dr <= 1; dr = (dr + 1) | 0) {
                    for (var dc = -1; dc <= 1; dc = (dc + 1) | 0) {
                        if (dr === 0 && dc === 0) {
                            continue;
                        }

                        var nr = (r + dr) | 0, nc = (c + dc) | 0;
                        if (!this.IsInside(nr, nc)) {
                            continue;
                        }

                        var neighbor = this.cells.get([nr, nc]);
                        if (!neighbor.isColored && neighbor.value === ConvertImage.Instance.GetCurrentUnColor()) {
                            neighbor.Paint(this.tilemap);
                        }
                    }
                }
            },
            /*BoardTilemap.PaintNeighbors end.*/

            /*BoardTilemap.IsInside start.*/
            IsInside: function (r, c) {
if ( TRACE ) { TRACE( "BoardTilemap#IsInside", this ); }

                return r >= 0 && r < System.Array.getLength(this.cells, 0) && c >= 0 && c < System.Array.getLength(this.cells, 1);
            },
            /*BoardTilemap.IsInside end.*/

            /*BoardTilemap.GetCells start.*/
            GetCells: function () {
if ( TRACE ) { TRACE( "BoardTilemap#GetCells", this ); }

                return this.cells;
            },
            /*BoardTilemap.GetCells end.*/


        }
    });
    /*BoardTilemap end.*/

    /*Cell start.*/
    Bridge.define("Cell", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerEnterHandler,UnityEngine.EventSystems.IPointerUpHandler],
        statics: {
            fields: {
                isHolding: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Cell#init", this ); }

                    this.isHolding = false;
                }
            }
        },
        fields: {
            txt: null,
            sprite: null,
            row: 0,
            col: 0,
            value: 0,
            cellColor: null,
            isColored: false,
            afterPaint: null,
            EffectedNeighbor: null,
            borderDrawer: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerEnter", "UnityEngine$EventSystems$IPointerEnterHandler$OnPointerEnter",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Cell#init", this ); }

                this.cellColor = new UnityEngine.Color32();
                this.isColored = false;
            }
        },
        methods: {
            /*Cell.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Cell#Awake", this ); }

                this.sprite = this.GetComponent(UnityEngine.UI.Image);
                //borderDrawer = GetComponent<CellBorderDrawer>();
                if (UnityEngine.MonoBehaviour.op_Equality(this.sprite, null)) {
                    UnityEngine.Debug.LogError$2("Sprite is null");
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.borderDrawer, null)) {
                    UnityEngine.Debug.LogError$2("CellBorderDrawer missing on Cell prefab!");
                }

                ConvertImage.Instance.ActivateCell = Bridge.fn.combine(ConvertImage.Instance.ActivateCell, Bridge.fn.cacheBind(this, this.Activate));
                ConvertImage.Instance.SyncProcesses = Bridge.fn.combine(ConvertImage.Instance.SyncProcesses, Bridge.fn.cacheBind(this, this.syncProcess));
            },
            /*Cell.Awake end.*/

            /*Cell.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Cell#Start", this ); }

                if (this.value === 0) {
                    var color = this.sprite.color.$clone();
                    color.a = 0.0;
                    this.sprite.color = color.$clone();
                    this.txt.text = "";
                }
            },
            /*Cell.Start end.*/

            /*Cell.SetValue start.*/
            SetValue: function (r, c, cl) {
if ( TRACE ) { TRACE( "Cell#SetValue", this ); }

                this.row = r;
                this.col = c;
                this.value = ConvertImage.Instance.GetMatrix().get([r, c]);
                this.txt.text = Bridge.toString(this.value);
                this.cellColor = cl.$clone();
                if (this.value === 0) {
                    this.sprite.enabled = false;
                    var btn = this.GetComponent(UnityEngine.UI.Button);
                    if (UnityEngine.MonoBehaviour.op_Inequality(btn, null)) {
                        btn.enabled = false;
                    }
                    this.txt.gameObject.SetActive(false);
                    this.borderDrawer.gameObject.SetActive(false);
                }
            },
            /*Cell.SetValue end.*/

            /*Cell.SetBorders start.*/
            SetBorders: function (top, bot, left, right) {
if ( TRACE ) { TRACE( "Cell#SetBorders", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.borderDrawer, null)) {
                    return;
                }
                /*        if(value == 0)
                       {

                           return;
                       }*/
                this.borderDrawer.top = top;
                this.borderDrawer.bottom = bot;
                this.borderDrawer.left = left;
                this.borderDrawer.right = right;
                this.borderDrawer.SetVerticesDirty();
            },
            /*Cell.SetBorders end.*/

            /*Cell.Paint start.*/
            Paint: function () {
if ( TRACE ) { TRACE( "Cell#Paint", this ); }

                var $t;
                if (ConvertImage.Instance.GetMatrix().get([this.row, this.col]) === 0) {
                    return;
                }
                if (this.isColored) {
                    return;
                }
                if (!ConvertImage.Instance.CountUnColor(this.value)) {
                    return;
                }

                this.sprite.color = UnityEngine.Color32.op_Implicit(this.cellColor.$clone());
                this.txt.text = "";
                this.isColored = true;
                this.sprite.sprite = this.afterPaint;
                !Bridge.staticEquals(($t = ConvertImage.Instance.SyncProcesses), null) ? $t(this.row, this.col, this.gameObject) : null;
                //SparkleMaskController.Instance.RevealCell(row, col);
            },
            /*Cell.Paint end.*/

            /*Cell.SyncPaint start.*/
            SyncPaint: function () {
if ( TRACE ) { TRACE( "Cell#SyncPaint", this ); }

                if (this.isColored) {
                    return;
                }
                this.sprite.color = UnityEngine.Color32.op_Implicit(this.cellColor.$clone());
                this.txt.text = "";
                this.isColored = true;
                this.sprite.sprite = this.afterPaint;
            },
            /*Cell.SyncPaint end.*/

            /*Cell.Activate start.*/
            Activate: function () {
if ( TRACE ) { TRACE( "Cell#Activate", this ); }

                if (this.isColored || this.value === 0) {
                    return;
                }
                if (this.value !== ConvertImage.Instance.GetCurrentUnColor()) {
                    this.sprite.color = new pc.Color( 1, 1, 1, 1 );
                    return;
                }
                this.sprite.color = new pc.Color( 0.5, 0.5, 0.5, 1 );
            },
            /*Cell.Activate end.*/

            /*Cell.Effected start.*/
            Effected: function () {
if ( TRACE ) { TRACE( "Cell#Effected", this ); }

                this.Paint();
                !Bridge.staticEquals(this.EffectedNeighbor, null) ? this.EffectedNeighbor(this) : null;
            },
            /*Cell.Effected end.*/

            /*Cell.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Cell#OnPointerDown", this ); }

                if (this.isColored) {
                    return;
                }
                Cell.isHolding = true;
                this.Effected();
            },
            /*Cell.OnPointerDown end.*/

            /*Cell.OnPointerEnter start.*/
            OnPointerEnter: function (eventData) {
if ( TRACE ) { TRACE( "Cell#OnPointerEnter", this ); }

                if (this.isColored) {
                    return;
                }
                if (Cell.isHolding) {
                    this.Effected();
                }
            },
            /*Cell.OnPointerEnter end.*/

            /*Cell.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Cell#OnPointerUp", this ); }

                Cell.isHolding = false;
            },
            /*Cell.OnPointerUp end.*/

            /*Cell.GetSprite start.*/
            GetSprite: function () {
if ( TRACE ) { TRACE( "Cell#GetSprite", this ); }

                return this.sprite;
            },
            /*Cell.GetSprite end.*/

            /*Cell.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Cell#OnDestroy", this ); }

                ConvertImage.Instance.ActivateCell = Bridge.fn.remove(ConvertImage.Instance.ActivateCell, Bridge.fn.cacheBind(this, this.Activate));
            },
            /*Cell.OnDestroy end.*/

            /*Cell.SetNumberVisible start.*/
            SetNumberVisible: function (visible) {
if ( TRACE ) { TRACE( "Cell#SetNumberVisible", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.txt, null)) {
                    this.txt.enabled = visible;
                }
            },
            /*Cell.SetNumberVisible end.*/

            /*Cell.syncProcess start.*/
            syncProcess: function (row, col, caller) {
if ( TRACE ) { TRACE( "Cell#syncProcess", this ); }

                if (UnityEngine.GameObject.op_Equality(caller, this.gameObject)) {
                    return;
                }
                if (this.row === row && this.col === col) {
                    this.SyncPaint();
                }
            },
            /*Cell.syncProcess end.*/

            /*Cell.GetValue start.*/
            GetValue: function () {
if ( TRACE ) { TRACE( "Cell#GetValue", this ); }

                return this.value;
            },
            /*Cell.GetValue end.*/


        }
    });
    /*Cell end.*/

    /*CellBorderDrawer start.*/
    Bridge.define("CellBorderDrawer", {
        inherits: [UnityEngine.UI.Graphic],
        fields: {
            top: false,
            bottom: false,
            left: false,
            right: false,
            borderThickness: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CellBorderDrawer#init", this ); }

                this.top = true;
                this.bottom = true;
                this.left = true;
                this.right = true;
                this.borderThickness = 2.0;
            }
        },
        methods: {
            /*CellBorderDrawer.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
if ( TRACE ) { TRACE( "CellBorderDrawer#OnPopulateMesh", this ); }

                vh.Clear();

                var r = this.rectTransform.rect.$clone();
                var xMin = r.xMin;
                var xMax = r.xMax;
                var yMin = r.yMin;
                var yMax = r.yMax;
                if (this.top) {
                    this.DrawLine(vh, new pc.Vec2( xMin, yMax ), new pc.Vec2( xMax, yMax ));
                }
                if (this.bottom) {
                    this.DrawLine(vh, new pc.Vec2( xMin, yMin ), new pc.Vec2( xMax, yMin ));
                }
                if (this.left) {
                    this.DrawLine(vh, new pc.Vec2( xMin, yMin ), new pc.Vec2( xMin, yMax ));
                }
                if (this.right) {
                    this.DrawLine(vh, new pc.Vec2( xMax, yMin ), new pc.Vec2( xMax, yMax ));
                }
            },
            /*CellBorderDrawer.OnPopulateMesh end.*/

            /*CellBorderDrawer.DrawLine start.*/
            DrawLine: function (vh, start, end) {
if ( TRACE ) { TRACE( "CellBorderDrawer#DrawLine", this ); }

                var half = this.borderThickness / 2.0;
                var dir = (end.$clone().sub( start )).clone().normalize().$clone();
                var normal = new pc.Vec2( -dir.y, dir.x ).scale( half );

                var index = vh.currentVertCount;

                var v = UnityEngine.UIVertex.simpleVert.$clone();
                v.color = UnityEngine.Color32.op_Implicit$1(this.color.$clone());

                v.position = UnityEngine.Vector3.FromVector2(start.$clone().sub( normal ));
                vh.AddVert(v.$clone());
                v.position = UnityEngine.Vector3.FromVector2(start.$clone().add( normal ));
                vh.AddVert(v.$clone());
                v.position = UnityEngine.Vector3.FromVector2(end.$clone().add( normal ));
                vh.AddVert(v.$clone());
                v.position = UnityEngine.Vector3.FromVector2(end.$clone().sub( normal ));
                vh.AddVert(v.$clone());

                vh.AddTriangle(((index + 0) | 0), ((index + 1) | 0), ((index + 2) | 0));
                vh.AddTriangle(((index + 2) | 0), ((index + 3) | 0), ((index + 0) | 0));
            },
            /*CellBorderDrawer.DrawLine end.*/


        }
    });
    /*CellBorderDrawer end.*/

    /*CellData start.*/
    Bridge.define("CellData", {
        fields: {
            row: 0,
            col: 0,
            value: 0,
            isColored: false,
            color: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CellData#init", this ); }

                this.color = new UnityEngine.Color32();
            },
            ctor: function (r, c, v, cl) {
if ( TRACE ) { TRACE( "CellData#ctor", this ); }

                this.$initialize();
                this.row = r;
                this.col = c;
                this.value = v;
                this.color = cl.$clone();
                this.isColored = false;
            }
        },
        methods: {
            /*CellData.Highlight start.*/
            Highlight: function (tilemap) {
if ( TRACE ) { TRACE( "CellData#Highlight", this ); }

                if (this.isColored || this.value === 0) {
                    return;
                }
                var pos = new UnityEngine.Vector3Int.$ctor1(this.col, ((-this.row) | 0), 0);
                tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetColor', null );
            },
            /*CellData.Highlight end.*/

            /*CellData.ResetHighlight start.*/
            ResetHighlight: function (tilemap) {
if ( TRACE ) { TRACE( "CellData#ResetHighlight", this ); }

                if (this.isColored || this.value === 0) {
                    return;
                }
                var pos = new UnityEngine.Vector3Int.$ctor1(this.col, ((-this.row) | 0), 0);
                tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetColor', null );
            },
            /*CellData.ResetHighlight end.*/

            /*CellData.Paint start.*/
            Paint: function (tilemap) {
if ( TRACE ) { TRACE( "CellData#Paint", this ); }

                var $t;
                if (this.value === 0 || this.isColored) {
                    return;
                }
                if (this.value !== ConvertImage.Instance.GetCurrentUnColor()) {
                    return;
                }

                this.isColored = true;
                var pos = new UnityEngine.Vector3Int.$ctor1(this.col, ((-this.row) | 0), 0);
                tilemap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetColor', null );

                !Bridge.staticEquals(($t = ConvertImage.Instance.SyncProcesses), null) ? $t(this.row, this.col, null) : null;
                UnityEngine.MonoBehaviour.op_Inequality(SparkleMaskController.Instance, null) ? SparkleMaskController.Instance.RevealCell(this.row, this.col) : null;
            },
            /*CellData.Paint end.*/


        }
    });
    /*CellData end.*/

    /*ChooseBtn start.*/
    Bridge.define("ChooseBtn", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            data: null,
            chooseScene: null,
            tutorial: null
        },
        methods: {
            /*ChooseBtn.OnClick start.*/
            OnClick: function () {
if ( TRACE ) { TRACE( "ChooseBtn#OnClick", this ); }

                ConvertImage.Instance.LoadData(this.data);
                this.chooseScene.SetActive(false);
                //tutorial.SetActive(true);
            },
            /*ChooseBtn.OnClick end.*/


        }
    });
    /*ChooseBtn end.*/

    /*ColorBtn start.*/
    Bridge.define("ColorBtn", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            colorIndex: 0,
            color: null,
            txt: null,
            img: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ColorBtn#init", this ); }

                this.color = new UnityEngine.Color32();
            }
        },
        methods: {
            /*ColorBtn.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ColorBtn#Awake", this ); }

                ConvertImage.Instance.HideShowProgressBar = Bridge.fn.combine(ConvertImage.Instance.HideShowProgressBar, Bridge.fn.cacheBind(this, this.HideProgress));
                ConvertImage.Instance.UpdateColorProgress = Bridge.fn.combine(ConvertImage.Instance.UpdateColorProgress, Bridge.fn.cacheBind(this, this.UpdateProgress));
            },
            /*ColorBtn.Awake end.*/

            /*ColorBtn.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ColorBtn#Start", this ); }

                ConvertImage.Instance.CheckingDoneColor = Bridge.fn.combine(ConvertImage.Instance.CheckingDoneColor, Bridge.fn.cacheBind(this, this.CheckDone));

            },
            /*ColorBtn.Start end.*/

            /*ColorBtn.Setup start.*/
            Setup: function (index, col) {
if ( TRACE ) { TRACE( "ColorBtn#Setup", this ); }

                this.colorIndex = index;
                this.color = col.$clone();
                this.GetComponent(UnityEngine.UI.Image).color = UnityEngine.Color32.op_Implicit(this.color.$clone());
                this.txt.text = Bridge.toString(this.colorIndex);
                this.txt.color = this.GetReadableTextColor(this.color);
            },
            /*ColorBtn.Setup end.*/

            /*ColorBtn.ClickChangeColor start.*/
            ClickChangeColor: function () {
if ( TRACE ) { TRACE( "ColorBtn#ClickChangeColor", this ); }

                var $t, $t1;
                if (ConvertImage.Instance.CheckColorComplete(((this.colorIndex - 1) | 0))) {
                    return;
                }
                ConvertImage.Instance.ChangePaintColor(this.colorIndex);
                !Bridge.staticEquals(($t = ConvertImage.Instance.HideShowProgressBar), null) ? $t() : null;
                !Bridge.staticEquals(($t1 = ConvertImage.Instance.UpdateColorProgress), null) ? $t1() : null;
            },
            /*ColorBtn.ClickChangeColor end.*/

            /*ColorBtn.CheckDone start.*/
            CheckDone: function () {
if ( TRACE ) { TRACE( "ColorBtn#CheckDone", this ); }

                if (this.colorIndex !== ConvertImage.Instance.GetCurrentUnColor()) {
                    return;
                }
                this.txt.text = "V";
                var seq = DG.Tweening.DOTween.Sequence();

                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 2.0, 0.15), DG.Tweening.Ease.OutBack));

                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.ShortcutExtensions.DOShakeScale(this.transform, 0.4, 0.25, 20, 90, true, 0));


                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.0, 0.15), DG.Tweening.Ease.InBack));
            },
            /*ColorBtn.CheckDone end.*/

            /*ColorBtn.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "ColorBtn#OnDestroy", this ); }

                ConvertImage.Instance.CheckingDoneColor = Bridge.fn.remove(ConvertImage.Instance.CheckingDoneColor, Bridge.fn.cacheBind(this, this.CheckDone));
                ConvertImage.Instance.HideShowProgressBar = Bridge.fn.remove(ConvertImage.Instance.HideShowProgressBar, Bridge.fn.cacheBind(this, this.HideProgress));
                ConvertImage.Instance.UpdateColorProgress = Bridge.fn.remove(ConvertImage.Instance.UpdateColorProgress, Bridge.fn.cacheBind(this, this.UpdateProgress));
            },
            /*ColorBtn.OnDestroy end.*/

            /*ColorBtn.UpdateProgress start.*/
            UpdateProgress: function () {
if ( TRACE ) { TRACE( "ColorBtn#UpdateProgress", this ); }

                if (this.colorIndex !== ConvertImage.Instance.GetCurrentUnColor()) {
                    return;
                }
                this.img.fillAmount = ConvertImage.Instance.GetCompletionPercent(this.colorIndex);
            },
            /*ColorBtn.UpdateProgress end.*/

            /*ColorBtn.HideProgress start.*/
            HideProgress: function () {
if ( TRACE ) { TRACE( "ColorBtn#HideProgress", this ); }

                if (this.colorIndex === ConvertImage.Instance.GetCurrentUnColor()) {
                    this.img.gameObject.SetActive(true);
                    this.UpdateProgress();
                    return;
                }
                this.img.gameObject.SetActive(false);
            },
            /*ColorBtn.HideProgress end.*/

            /*ColorBtn.GetReadableTextColor start.*/
            GetReadableTextColor: function (backgroundColor) {
if ( TRACE ) { TRACE( "ColorBtn#GetReadableTextColor", this ); }

                var brightness = (0.299 * backgroundColor.r + 0.587 * backgroundColor.g + 0.114 * backgroundColor.b) / 255.0;

                return brightness > 0.5 ? new pc.Color( 0, 0, 0, 1 ) : new pc.Color( 1, 1, 1, 1 );
            },
            /*ColorBtn.GetReadableTextColor end.*/


        }
    });
    /*ColorBtn end.*/

    /*ConvertImage start.*/
    Bridge.define("ConvertImage", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            },
            methods: {
                /*ConvertImage.RGBKey:static start.*/
                RGBKey: function (c) {
if ( TRACE ) { TRACE( "ConvertImage#RGBKey", this ); }

                    return new UnityEngine.Color32.$ctor1(c.r, c.g, c.b, 255);
                },
                /*ConvertImage.RGBKey:static end.*/


            }
        },
        fields: {
            img: null,
            alphaThreshold: 0,
            colorDict: null,
            colorAmount: null,
            colorTotal: null,
            currentUnColor: 0,
            pixelMatrix: null,
            completeMatrix: null,
            nextIndex: 0,
            RenderPixelMatrix: null,
            ActivateCell: null,
            CheckingDoneColor: null,
            HideShowProgressBar: null,
            UpdateColorProgress: null,
            SyncProcesses: null,
            victory: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ConvertImage#init", this ); }

                this.alphaThreshold = 1;
                this.colorDict = new (System.Collections.Generic.Dictionary$2(UnityEngine.Color32,System.Int32)).ctor();
                this.colorAmount = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.colorTotal = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.nextIndex = 1;
            }
        },
        methods: {
            /*ConvertImage.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ConvertImage#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(ConvertImage.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(ConvertImage.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                ConvertImage.Instance = this;

            },
            /*ConvertImage.Awake end.*/

            /*ConvertImage.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ConvertImage#Start", this ); }

                //LoadData();
                /*        currentUnColor = 1;
                       //RenderPixelMatrix();
                       SetUpCountColor();
                       ActivateCell?.Invoke();*/
            },
            /*ConvertImage.Start end.*/

            /*ConvertImage.LoadData start.*/
            LoadData: function (dt) {
if ( TRACE ) { TRACE( "ConvertImage#LoadData", this ); }

                if (dt == null || dt.img == null) {
                    UnityEngine.Debug.LogError$2("Data or image is null");
                    return;
                }
                this.img = dt.img;
                this.colorDict.clear();
                /*        foreach (var pair in dt.colorList)
                       {
                           Color32 color = new Color32((byte)pair.r, (byte)pair.g, (byte)pair.b, 255);
                           if (!colorDict.ContainsKey(color))
                           {
                               colorDict[color] = pair.key;
                           }
                       }*/
                this.pixelMatrix = this.MapImageToMatrix(this.img);
                for (var i = 0; i < System.Array.getLength(this.pixelMatrix, 0); i = (i + 1) | 0) {
                    for (var j = 0; j < System.Array.getLength(this.pixelMatrix, 1); j = (j + 1) | 0) {
                        if (this.pixelMatrix.get([i, j]) !== 0) {
                            continue;
                        }
                        //completeMatrix[i, j] = 1;
                    }
                }
                //Debug.Log($"Matrix complete. Total unique colors = {colorDict.Count}");
                !Bridge.staticEquals(this.RenderPixelMatrix, null) ? this.RenderPixelMatrix() : null;
                this.SetUpCountColor();
                //ColorSorter();
                this.currentUnColor = this.mostColorIndex();
                !Bridge.staticEquals(this.ActivateCell, null) ? this.ActivateCell() : null;
            },
            /*ConvertImage.LoadData end.*/

            /*ConvertImage.mostColorIndex start.*/
            mostColorIndex: function () {
if ( TRACE ) { TRACE( "ConvertImage#mostColorIndex", this ); }

                var result = 0;
                var max = -1;
                for (var i = 0; i < this.colorAmount.Count; i = (i + 1) | 0) {
                    if (this.colorAmount.getItem(i) > max) {
                        max = this.colorAmount.getItem(i);
                        result = (i + 1) | 0;
                    }
                }
                return result;
            },
            /*ConvertImage.mostColorIndex end.*/

            /*ConvertImage.FindClosestColorValue start.*/
            FindClosestColorValue: function (dict, target) {
if ( TRACE ) { TRACE( "ConvertImage#FindClosestColorValue", this ); }

                var $t;
                var closestValue = -1;
                var minDist = 2147483647;

                $t = Bridge.getEnumerator(dict);
                try {
                    while ($t.moveNext()) {
                        var kv = $t.Current;
                        var c = kv.key.$clone();

                        var dr = (target.r - c.r) | 0;
                        var dg = (target.g - c.g) | 0;
                        var db = (target.b - c.b) | 0;

                        var dist = (((Bridge.Int.mul(dr, dr) + Bridge.Int.mul(dg, dg)) | 0) + Bridge.Int.mul(db, db)) | 0;

                        if (dist < minDist) {
                            minDist = dist;
                            closestValue = kv.value;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return closestValue;
            },
            /*ConvertImage.FindClosestColorValue end.*/

            /*ConvertImage.MapImageToMatrix start.*/
            MapImageToMatrix: function (sprite) {
if ( TRACE ) { TRACE( "ConvertImage#MapImageToMatrix", this ); }

                var tex = sprite.texture;
                var rect = sprite.rect.$clone();

                var w = Bridge.Int.clip32(rect.width);
                var h = Bridge.Int.clip32(rect.height);

                var pixels = tex.GetPixels32();
                var result = System.Array.create(0, null, System.Int32, h, w);

                for (var y = 0; y < h; y = (y + 1) | 0) {
                    for (var x = 0; x < w; x = (x + 1) | 0) {
                        var realY = ((((((h - 1) | 0) - y) | 0)) + Bridge.Int.clip32(rect.y)) | 0;
                        var realX = (x + Bridge.Int.clip32(rect.x)) | 0;

                        var idx = (Bridge.Int.mul(realY, tex.width) + realX) | 0;
                        var p = pixels[idx].$clone();
                        if (p.a <= this.alphaThreshold) {
                            continue;
                        }
                        var key = new UnityEngine.Color32.$ctor1(p.r, p.g, p.b, 255);
                        var val = { };

                        if (!this.colorDict.tryGetValue(key.$clone(), val)) {
                            val.v = Bridge.identity(this.nextIndex, ((this.nextIndex = (this.nextIndex + 1) | 0)));
                            this.colorDict.setItem(key, val.v);
                        }
                    }
                }
                this.colorDict = this.ReducePalette(this.colorDict, 0.1);

                for (var y1 = 0; y1 < h; y1 = (y1 + 1) | 0) {
                    for (var x1 = 0; x1 < w; x1 = (x1 + 1) | 0) {
                        var realY1 = ((((((h - 1) | 0) - y1) | 0)) + Bridge.Int.clip32(rect.y)) | 0;
                        var realX1 = (x1 + Bridge.Int.clip32(rect.x)) | 0;

                        var idx1 = (Bridge.Int.mul(realY1, tex.width) + realX1) | 0;
                        var p1 = pixels[idx1].$clone();

                        if (p1.a <= this.alphaThreshold) {
                            result.set([y1, x1], 0);
                            continue;
                        }

                        var key1 = new UnityEngine.Color32.$ctor1(p1.r, p1.g, p1.b, 255);
                        result.set([y1, x1], this.FindClosestColorValue(this.colorDict, key1));
                        //Debug.Log($"Mapping pixel at ({x}, {y}) with color {key} to value {result[y, x]}");
                        /* if (colorDict.TryGetValue(key, out int val))
                                       {
                                           result[y, x] = val;
                                       }*/
                    }
                }

                return result;
            },
            /*ConvertImage.MapImageToMatrix end.*/

            /*ConvertImage.ReducePalette start.*/
            ReducePalette: function (originalDict, tolerance) {
if ( TRACE ) { TRACE( "ConvertImage#ReducePalette", this ); }

                var $t, $t1, $t2, $t3;
                if (tolerance === void 0) { tolerance = 0.1; }
                var result = new (System.Collections.Generic.Dictionary$2(UnityEngine.Color32,System.Int32)).ctor();
                $t = Bridge.getEnumerator(originalDict);
                try {
                    while ($t.moveNext()) {
                        var kvp = $t.Current;
                        var c = kvp.key.$clone();
                        var index = kvp.value;

                        var merged = false;

                        $t1 = Bridge.getEnumerator(result.Keys);
                        try {
                            while ($t1.moveNext()) {
                                var r = $t1.Current.$clone();
                                var d = (((Bridge.Int.mul((((c.r - r.r) | 0)), (((c.r - r.r) | 0))) + Bridge.Int.mul((((c.g - r.g) | 0)), (((c.g - r.g) | 0)))) | 0) + Bridge.Int.mul((((c.b - r.b) | 0)), (((c.b - r.b) | 0)))) | 0;

                                if (d < tolerance * 255.0 * tolerance * 255.0) {
                                    merged = true;
                                    break;
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        if (!merged) {
                            result.setItem(c, index);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var val = 1;
                var keys = ($t2 = UnityEngine.Color32, System.Linq.Enumerable.from(result.Keys, $t2).toList($t2));
                $t3 = Bridge.getEnumerator(keys);
                try {
                    while ($t3.moveNext()) {
                        var key = $t3.Current.$clone();
                        result.setItem(key, val);
                        val = (val + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t3, System.IDisposable)) {
                        $t3.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*ConvertImage.ReducePalette end.*/

            /*ConvertImage.SetUpCountColor start.*/
            SetUpCountColor: function () {
if ( TRACE ) { TRACE( "ConvertImage#SetUpCountColor", this ); }

                for (var i = 0; i < this.colorDict.Count; i = (i + 1) | 0) {
                    this.colorAmount.add(0);
                    this.colorTotal.add(0);
                }
                //Debug.Log($"Color amount list initialized with {colorAmount.Count} colors.");
                for (var y = 0; y < System.Array.getLength(this.pixelMatrix, 0); y = (y + 1) | 0) {
                    for (var x = 0; x < System.Array.getLength(this.pixelMatrix, 1); x = (x + 1) | 0) {
                        var val = this.pixelMatrix.get([y, x]);
                        if (val === 0) {
                            continue;
                        }
                        //Debug.Log($"Incrementing count for color value {val}");
                        this.colorAmount.setItem(((val - 1) | 0), (this.colorAmount.getItem(((val - 1) | 0)) + 1) | 0);
                        this.colorTotal.setItem(((val - 1) | 0), (this.colorTotal.getItem(((val - 1) | 0)) + 1) | 0);
                    }
                }
                //ColorSorter();
            },
            /*ConvertImage.SetUpCountColor end.*/

            /*ConvertImage.ColorSorter start.*/
            ColorSorter: function () {
if ( TRACE ) { TRACE( "ConvertImage#ColorSorter", this ); }

                var $t;
                var sorted = System.Linq.Enumerable.from(this.colorDict, System.Collections.Generic.KeyValuePair$2(UnityEngine.Color32,System.Int32)).orderByDescending(Bridge.fn.bind(this, function (kv) {
                        return this.colorAmount.getItem(kv.value);
                    }));

                $t = Bridge.getEnumerator(sorted);
                try {
                    while ($t.moveNext()) {
                        var kv = $t.Current;
                        var count = this.colorAmount.getItem(kv.value);
                        UnityEngine.Debug.Log$1(System.String.format("Color {0} xu\u1ea5t hi\u1ec7n {1} l\u1ea7n (index {2})", kv.key.$clone(), Bridge.box(count, System.Int32), Bridge.box(kv.value, System.Int32)));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ConvertImage.ColorSorter end.*/

            /*ConvertImage.CountUnColor start.*/
            CountUnColor: function (value) {
if ( TRACE ) { TRACE( "ConvertImage#CountUnColor", this ); }

                if (value !== this.currentUnColor) {
                    return false;
                }
                this.colorAmount.setItem(((this.currentUnColor - 1) | 0), (this.colorAmount.getItem(((this.currentUnColor - 1) | 0)) - 1) | 0);
                !Bridge.staticEquals(this.UpdateColorProgress, null) ? this.UpdateColorProgress() : null;
                if (this.colorAmount.getItem(((this.currentUnColor - 1) | 0)) === 0) {
                    !Bridge.staticEquals(this.CheckingDoneColor, null) ? this.CheckingDoneColor() : null;
                    for (var i = 0; i < this.colorAmount.Count; i = (i + 1) | 0) {
                        if (this.colorAmount.getItem(i) > 0) {
                            this.currentUnColor = (i + 1) | 0;
                            break;
                        }
                    }
                    this.CheckFullComplete();
                    !Bridge.staticEquals(this.ActivateCell, null) ? this.ActivateCell() : null;
                    !Bridge.staticEquals(this.HideShowProgressBar, null) ? this.HideShowProgressBar() : null;
                }
                return true;
            },
            /*ConvertImage.CountUnColor end.*/

            /*ConvertImage.CheckColorComplete start.*/
            CheckColorComplete: function (index) {
if ( TRACE ) { TRACE( "ConvertImage#CheckColorComplete", this ); }

                if (this.colorAmount.getItem(index) === 0) {
                    return true;
                }
                return false;
            },
            /*ConvertImage.CheckColorComplete end.*/

            /*ConvertImage.CheckFullComplete start.*/
            CheckFullComplete: function () {
if ( TRACE ) { TRACE( "ConvertImage#CheckFullComplete", this ); }

                for (var i = 0; i < this.colorAmount.Count; i = (i + 1) | 0) {
                    if (this.colorAmount.getItem(i) !== 0) {
                        return;
                    }
                }
                this.victory.SetActive(true);
                return;
            },
            /*ConvertImage.CheckFullComplete end.*/

            /*ConvertImage.ChangePaintColor start.*/
            ChangePaintColor: function (index) {
if ( TRACE ) { TRACE( "ConvertImage#ChangePaintColor", this ); }

                this.currentUnColor = index;
                !Bridge.staticEquals(this.ActivateCell, null) ? this.ActivateCell() : null;
            },
            /*ConvertImage.ChangePaintColor end.*/

            /*ConvertImage.GetColorByIndex start.*/
            GetColorByIndex: function (index) {
if ( TRACE ) { TRACE( "ConvertImage#GetColorByIndex", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.colorDict);
                try {
                    while ($t.moveNext()) {
                        var kvp = $t.Current;
                        if (kvp.value === index) {
                            return kvp.key.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return new UnityEngine.Color32.$ctor1(0, 0, 0, 0);
            },
            /*ConvertImage.GetColorByIndex end.*/

            /*ConvertImage.GetMatrix start.*/
            GetMatrix: function () {
if ( TRACE ) { TRACE( "ConvertImage#GetMatrix", this ); }

                return this.pixelMatrix;
            },
            /*ConvertImage.GetMatrix end.*/

            /*ConvertImage.GetColorDictionary start.*/
            GetColorDictionary: function () {
if ( TRACE ) { TRACE( "ConvertImage#GetColorDictionary", this ); }

                return this.colorDict;
            },
            /*ConvertImage.GetColorDictionary end.*/

            /*ConvertImage.GetCurrentUnColor start.*/
            GetCurrentUnColor: function () {
if ( TRACE ) { TRACE( "ConvertImage#GetCurrentUnColor", this ); }

                return this.currentUnColor;
            },
            /*ConvertImage.GetCurrentUnColor end.*/

            /*ConvertImage.GetColorCount start.*/
            GetColorCount: function () {
if ( TRACE ) { TRACE( "ConvertImage#GetColorCount", this ); }

                return this.colorDict.Count;
            },
            /*ConvertImage.GetColorCount end.*/

            /*ConvertImage.GetPixelMatrix start.*/
            GetPixelMatrix: function () {
if ( TRACE ) { TRACE( "ConvertImage#GetPixelMatrix", this ); }

                return this.pixelMatrix;
            },
            /*ConvertImage.GetPixelMatrix end.*/

            /*ConvertImage.GetCompletionPercent start.*/
            GetCompletionPercent: function (index) {
if ( TRACE ) { TRACE( "ConvertImage#GetCompletionPercent", this ); }

                return (((this.colorTotal.getItem(((index - 1) | 0)) - this.colorAmount.getItem(((index - 1) | 0))) | 0)) / this.colorTotal.getItem(((index - 1) | 0));
            },
            /*ConvertImage.GetCompletionPercent end.*/


        }
    });
    /*ConvertImage end.*/

    /*Data start.*/
    Bridge.define("Data", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            img: null,
            colorList: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Data#init", this ); }

                this.colorList = new (System.Collections.Generic.List$1(Data.IntColor32Pair)).ctor();
            }
        }
    });
    /*Data end.*/

    /*Data+IntColor32Pair start.*/
    Bridge.define("Data.IntColor32Pair", {
        $kind: 1002,
        fields: {
            key: 0,
            r: 0,
            g: 0,
            b: 0
        }
    });
    /*Data+IntColor32Pair end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*FadeInStart start.*/
    Bridge.define("FadeInStart", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FadeInStart#init", this ); }

                this.duration = 1.0;
            }
        },
        methods: {
            /*FadeInStart.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FadeInStart#Start", this ); }

                this.Invoke("FadeIn", 0.5);
            },
            /*FadeInStart.Start end.*/

            /*FadeInStart.FadeIn start.*/
            FadeIn: function () {
if ( TRACE ) { TRACE( "FadeInStart#FadeIn", this ); }

                var cg = this.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Equality(cg, null)) {
                    cg = this.gameObject.AddComponent(UnityEngine.CanvasGroup);
                }

                cg.alpha = 0.0;
                DG.Tweening.DOTweenModuleUI.DOFade(cg, 1.0, this.duration);
            },
            /*FadeInStart.FadeIn end.*/


        }
    });
    /*FadeInStart end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Palette start.*/
    Bridge.define("Palette", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            grid: null,
            board: null,
            colorButtons: null,
            colorButtonPrefab: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Palette#init", this ); }

                this.colorButtons = new (System.Collections.Generic.List$1(ColorBtn)).ctor();
            }
        },
        methods: {
            /*Palette.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Palette#Awake", this ); }


                this.grid = this.GetComponent(UnityEngine.UI.GridLayoutGroup);
                this.board = this.GetComponent(UnityEngine.RectTransform);
            },
            /*Palette.Awake end.*/

            /*Palette.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Palette#OnEnable", this ); }

                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.combine(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPalette));
            },
            /*Palette.OnEnable end.*/

            /*Palette.HandleRenderPalette start.*/
            HandleRenderPalette: function () {
if ( TRACE ) { TRACE( "Palette#HandleRenderPalette", this ); }

                this.ApplyCellSize();
                for (var i = 0; i < ConvertImage.Instance.GetColorCount(); i = (i + 1) | 0) {
                    var btn = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.colorButtonPrefab, this.transform);
                    btn.GetComponent(ColorBtn).Setup(((i + 1) | 0), ConvertImage.Instance.GetColorByIndex(((i + 1) | 0)));
                    btn.SetActive(true);
                    this.colorButtons.add(btn.GetComponent(ColorBtn));
                }
            },
            /*Palette.HandleRenderPalette end.*/

            /*Palette.ApplyCellSize start.*/
            ApplyCellSize: function () {
if ( TRACE ) { TRACE( "Palette#ApplyCellSize", this ); }

                if (ConvertImage.Instance.GetColorDictionary() == null) {
                    return;
                }

                var colorCount = ConvertImage.Instance.GetColorCount();
                if (colorCount <= 0) {
                    return;
                }

                var width = this.board.rect.width;
                var height = this.board.rect.height;

                //float totalSpacing = grid.spacing.x * (colorCount - 1);
                //float totalPadding = grid.padding.left + grid.padding.right;

                //float cellWidth = (width - totalSpacing - totalPadding) / colorCount;
                var cellWidth = (width) / colorCount;
                var cellHeight = height - (((this.grid.padding.top + this.grid.padding.bottom) | 0));

                this.grid.constraint = UnityEngine.UI.GridLayoutGroup.Constraint.FixedRowCount;
                this.grid.constraintCount = 1;
                this.grid.cellSize = new pc.Vec2( cellWidth, cellHeight );
            },
            /*Palette.ApplyCellSize end.*/

            /*Palette.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Palette#OnDestroy", this ); }

                ConvertImage.Instance.RenderPixelMatrix = Bridge.fn.remove(ConvertImage.Instance.RenderPixelMatrix, Bridge.fn.cacheBind(this, this.HandleRenderPalette));
            },
            /*Palette.OnDestroy end.*/


        }
    });
    /*Palette end.*/

    /*SimpleTutorial start.*/
    Bridge.define("SimpleTutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            finger: null,
            overlay: null,
            isShowing: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleTutorial#init", this ); }

                this.isShowing = false;
            }
        },
        methods: {
            /*SimpleTutorial.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SimpleTutorial#Start", this ); }

                /* overlay.SetActive(false);
                finger.gameObject.SetActive(false);*/
                //ShowTutorial();
            },
            /*SimpleTutorial.Start end.*/

            /*SimpleTutorial.ShowTutorial start.*/
            ShowTutorial: function () {
if ( TRACE ) { TRACE( "SimpleTutorial#ShowTutorial", this ); }

                this.isShowing = true;
                this.overlay.SetActive(true);

                this.finger.gameObject.SetActive(true);
                this.finger.anchoredPosition = pc.Vec2.ZERO.clone();

                this.PlayTapAnim();
            },
            /*SimpleTutorial.ShowTutorial end.*/

            /*SimpleTutorial.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "SimpleTutorial#OnPointerClick", this ); }

                if (!this.isShowing) {
                    return;
                }
                this.HideTutorial();
            },
            /*SimpleTutorial.OnPointerClick end.*/

            /*SimpleTutorial.HideTutorial start.*/
            HideTutorial: function () {
if ( TRACE ) { TRACE( "SimpleTutorial#HideTutorial", this ); }

                this.isShowing = false;
                this.overlay.SetActive(false);
                this.finger.gameObject.SetActive(false);
                DG.Tweening.ShortcutExtensions.DOKill(this.finger);
            },
            /*SimpleTutorial.HideTutorial end.*/

            /*SimpleTutorial.PlayTapAnim start.*/
            PlayTapAnim: function () {
if ( TRACE ) { TRACE( "SimpleTutorial#PlayTapAnim", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.finger);
                this.finger.localScale = new pc.Vec3( 1, 1, 1 );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.finger, 0.9, 0.25), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine);
            },
            /*SimpleTutorial.PlayTapAnim end.*/


        }
    });
    /*SimpleTutorial end.*/

    /*SparkleMaskController start.*/
    Bridge.define("SparkleMaskController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            sparkleMat: null,
            pixelsPerCell: 0,
            texWidth: 0,
            texHeight: 0,
            maskTex: null,
            maskPixels: null,
            board: null,
            boardRT: null,
            boardGrid: null,
            particles: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SparkleMaskController#init", this ); }

                this.pixelsPerCell = 32;
            }
        },
        methods: {
            /*SparkleMaskController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SparkleMaskController#Awake", this ); }

                SparkleMaskController.Instance = this;
            },
            /*SparkleMaskController.Awake end.*/

            /*SparkleMaskController.Init start.*/
            Init: function (rows, cols) {
if ( TRACE ) { TRACE( "SparkleMaskController#Init", this ); }

                this.particles.SetActive(true);
                var rt = this.board.GetComponent(UnityEngine.RectTransform);
                var boardWidth = rt.rect.width;
                var boardHeight = rt.rect.height;

                var cellSize = UnityEngine.Mathf.Min(boardWidth / cols, boardHeight / rows);

                this.texWidth = cols;
                this.texHeight = rows;

                if (this.texWidth <= 0 || this.texHeight <= 0) {
                    UnityEngine.Debug.LogError$2("Invalid mask size!");
                    return;
                }

                this.maskTex = new UnityEngine.Texture2D.$ctor11(this.texWidth, this.texHeight, UnityEngine.TextureFormat.RGBA32, false);
                this.maskTex.wrapMode = UnityEngine.TextureWrapMode.Clamp;

                this.maskPixels = System.Array.init(Bridge.Int.mul(this.texWidth, this.texHeight), function (){
                    return new UnityEngine.Color32();
                }, UnityEngine.Color32);
                for (var i = 0; i < this.maskPixels.length; i = (i + 1) | 0) {
                    this.maskPixels[i] = UnityEngine.Color32.op_Implicit$1(new pc.Color( 0, 0, 0, 1 ));
                }

                this.maskTex.SetPixels32$1(this.maskPixels);
                this.maskTex.Apply();

                this.sparkleMat.SetTexture$1("_MaskTex", this.maskTex);
                this.UpdateBoardBounds();

            },
            /*SparkleMaskController.Init end.*/

            /*SparkleMaskController.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "SparkleMaskController#LateUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(this.boardRT) && UnityEngine.Object.op_Implicit(this.boardGrid)) {
                    this.UpdateBoardBounds();
                }
            },
            /*SparkleMaskController.LateUpdate end.*/

            /*SparkleMaskController.UpdateBoardBounds start.*/
            UpdateBoardBounds: function () {
if ( TRACE ) { TRACE( "SparkleMaskController#UpdateBoardBounds", this ); }

                if (!UnityEngine.Object.op_Implicit(this.boardRT) || !UnityEngine.Object.op_Implicit(this.boardGrid) || UnityEngine.MonoBehaviour.op_Equality(this.board, null)) {
                    return;
                }

                var rows = this.board.RowCount;
                var cols = this.board.ColCount;
                if (rows <= 0 || cols <= 0) {
                    return;
                }

                var cell = this.boardGrid.cellSize.$clone();
                var sp = this.boardGrid.spacing.$clone();
                var pad = this.boardGrid.padding;

                var contentW = cols * cell.x + (((cols - 1) | 0)) * sp.x;
                var contentH = rows * cell.y + (((rows - 1) | 0)) * sp.y;

                var rect = this.boardRT.rect.$clone();

                var leftLocal = rect.xMin + pad.left + (rect.width - pad.left - pad.right - contentW) * 0.5;
                var bottomLocal = rect.yMin + pad.bottom + (rect.height - pad.top - pad.bottom - contentH) * 0.5;
                var rightLocal = leftLocal + contentW;
                var topLocal = bottomLocal + contentH;

                var worldBL = this.boardRT.TransformPoint$1(new pc.Vec3( leftLocal, bottomLocal, 0 ));
                var worldTR = this.boardRT.TransformPoint$1(new pc.Vec3( rightLocal, topLocal, 0 ));


                var mat = this.sparkleMat;
                mat.SetVector$1("_BoardMin", UnityEngine.Vector4.FromVector3(worldBL));
                mat.SetVector$1("_BoardMax", UnityEngine.Vector4.FromVector3(worldTR));
            },
            /*SparkleMaskController.UpdateBoardBounds end.*/

            /*SparkleMaskController.ClearMask start.*/
            ClearMask: function () {
if ( TRACE ) { TRACE( "SparkleMaskController#ClearMask", this ); }

                if (this.maskTex == null || this.maskPixels == null) {
                    return;
                }

                for (var i = 0; i < this.maskPixels.length; i = (i + 1) | 0) {
                    this.maskPixels[i] = UnityEngine.Color32.op_Implicit$1(new pc.Color( 0, 0, 0, 1 ));
                }

                this.maskTex.SetPixels32$1(this.maskPixels);
                this.maskTex.Apply();
            },
            /*SparkleMaskController.ClearMask end.*/

            /*SparkleMaskController.RevealCell start.*/
            RevealCell: function (r, c) {
if ( TRACE ) { TRACE( "SparkleMaskController#RevealCell", this ); }

                var idx = (Bridge.Int.mul(r, this.texWidth) + c) | 0;
                if (idx >= 0 && idx < this.maskPixels.length) {
                    this.maskPixels[idx] = UnityEngine.Color32.op_Implicit$1(new pc.Color( 1, 1, 1, 1 ));
                }

                this.maskTex.SetPixels32$1(this.maskPixels);
                this.maskTex.Apply();
            },
            /*SparkleMaskController.RevealCell end.*/


        }
    });
    /*SparkleMaskController end.*/

    /*TextWaveTMP start.*/
    Bridge.define("TextWaveTMP", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tmpText: null,
            waveHeight: 0,
            duration: 0,
            delay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TextWaveTMP#init", this ); }

                this.waveHeight = 20.0;
                this.duration = 0.3;
                this.delay = 0.1;
            }
        },
        methods: {
            /*TextWaveTMP.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TextWaveTMP#Awake", this ); }

                this.tmpText = this.GetComponent(TMPro.TextMeshProUGUI);
            },
            /*TextWaveTMP.Awake end.*/

            /*TextWaveTMP.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TextWaveTMP#Start", this ); }

                this.AnimateWave();
            },
            /*TextWaveTMP.Start end.*/

            /*TextWaveTMP.AnimateWave start.*/
            AnimateWave: function () {
if ( TRACE ) { TRACE( "TextWaveTMP#AnimateWave", this ); }

                this.tmpText.ForceMeshUpdate();
                var textInfo = this.tmpText.textInfo;

                var seq = DG.Tweening.DOTween.Sequence();

                for (var i = 0; i < textInfo.characterCount; i = (i + 1) | 0) {
                    if (!textInfo.characterInfo[i].isVisible) {
                        continue;
                    }
                    var index = { v : i };

                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, (function ($me, index) {
                        return Bridge.fn.bind($me, function () {
                            this.tmpText.ForceMeshUpdate();
                            var charInfo = textInfo.characterInfo[index.v].$clone();
                            if (!charInfo.isVisible) {
                                return;
                            }

                            var vertexIndex = charInfo.vertexIndex;
                            var matIndex = charInfo.materialReferenceIndex;
                            var vertices = textInfo.meshInfo[matIndex].vertices;

                            var offset = new pc.Vec3( 0, this.waveHeight, 0 );

                            vertices[((vertexIndex + 0) | 0)] = vertices[((vertexIndex + 0) | 0)].$clone().add( offset.$clone() );
                            vertices[((vertexIndex + 1) | 0)] = vertices[((vertexIndex + 1) | 0)].$clone().add( offset.$clone() );
                            vertices[((vertexIndex + 2) | 0)] = vertices[((vertexIndex + 2) | 0)].$clone().add( offset.$clone() );
                            vertices[((vertexIndex + 3) | 0)] = vertices[((vertexIndex + 3) | 0)].$clone().add( offset.$clone() );

                            this.tmpText.UpdateVertexData$1(TMPro.TMP_VertexDataUpdateFlags.Vertices);
                            DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(function () {
                                return 0.0;
                            }, Bridge.fn.bind(this, function (x) {
                                this.tmpText.ForceMeshUpdate();
                                var verts = textInfo.meshInfo[matIndex].vertices;
                                var down = new pc.Vec3( 0, -x * this.waveHeight, 0 );

                                verts[((vertexIndex + 0) | 0)] = verts[((vertexIndex + 0) | 0)].$clone().add( down.$clone() );
                                verts[((vertexIndex + 1) | 0)] = verts[((vertexIndex + 1) | 0)].$clone().add( down.$clone() );
                                verts[((vertexIndex + 2) | 0)] = verts[((vertexIndex + 2) | 0)].$clone().add( down.$clone() );
                                verts[((vertexIndex + 3) | 0)] = verts[((vertexIndex + 3) | 0)].$clone().add( down.$clone() );

                                this.tmpText.UpdateVertexData$1(TMPro.TMP_VertexDataUpdateFlags.Vertices);
                            }), 1.0, this.duration), DG.Tweening.Ease.OutQuad);
                        });
                    })(this, index));

                    DG.Tweening.TweenSettingsExtensions.AppendInterval(seq, this.delay);
                }
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Sequence, seq, -1, DG.Tweening.LoopType.Restart);
            },
            /*TextWaveTMP.AnimateWave end.*/


        }
    });
    /*TextWaveTMP end.*/

    /*ZoomManager start.*/
    Bridge.define("ZoomManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            boardPort: null,
            boardLand: null,
            viewportPort: null,
            viewportLand: null,
            zoomSpeed: 0,
            minScale: 0,
            maxScale: 0,
            board: null,
            viewport: null,
            isDragging: false,
            lastMousePos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ZoomManager#init", this ); }

                this.lastMousePos = new UnityEngine.Vector2();
                this.zoomSpeed = 0.1;
                this.minScale = 0.5;
                this.maxScale = 10.0;
            }
        },
        methods: {
            /*ZoomManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ZoomManager#Update", this ); }

                this.board = UnityEngine.Screen.width > UnityEngine.Screen.height ? this.boardLand : this.boardPort;
                this.viewport = (UnityEngine.Component.op_Equality(this.board, this.boardLand)) ? this.viewportLand : this.viewportPort;

                if (UnityEngine.Component.op_Equality(this.board, null) || UnityEngine.Component.op_Equality(this.viewport, null)) {
                    return;
                }

                this.HandleMouseZoom();
                this.HandleMousePan();
                this.ClampBoardInView();
            },
            /*ZoomManager.Update end.*/

            /*ZoomManager.HandleMouseZoom start.*/
            HandleMouseZoom: function () {
if ( TRACE ) { TRACE( "ZoomManager#HandleMouseZoom", this ); }

                var scroll = UnityEngine.Input.mouseScrollDelta.y;
                if (Math.abs(scroll) > 0.01) {
                    this.ApplyZoom(scroll * this.zoomSpeed);
                }
            },
            /*ZoomManager.HandleMouseZoom end.*/

            /*ZoomManager.ApplyZoom start.*/
            ApplyZoom: function (delta) {
if ( TRACE ) { TRACE( "ZoomManager#ApplyZoom", this ); }

                var scale = this.board.localScale.$clone();
                scale = scale.$clone().add( new pc.Vec3( 1, 1, 1 ).clone().scale( delta ) );
                scale.x = Math.max(this.minScale, Math.min(scale.x, this.maxScale));
                scale.y = Math.max(this.minScale, Math.min(scale.y, this.maxScale));
                this.board.localScale = scale.$clone();
            },
            /*ZoomManager.ApplyZoom end.*/

            /*ZoomManager.HandleMousePan start.*/
            HandleMousePan: function () {
if ( TRACE ) { TRACE( "ZoomManager#HandleMousePan", this ); }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    var mousePos = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    if (!this.isDragging) {
                        this.lastMousePos = mousePos.$clone();
                        this.isDragging = true;
                    } else {
                        var delta = mousePos.$clone().sub( this.lastMousePos );
                        this.board.anchoredPosition = this.board.anchoredPosition.$clone().add( delta.$clone() );
                        this.lastMousePos = mousePos.$clone();
                    }
                } else {
                    this.isDragging = false;
                }
            },
            /*ZoomManager.HandleMousePan end.*/

            /*ZoomManager.ClampBoardInView start.*/
            ClampBoardInView: function () {
if ( TRACE ) { TRACE( "ZoomManager#ClampBoardInView", this ); }

                var boardSize = this.board.rect.size.$clone().mul( UnityEngine.Vector2.FromVector3(this.board.localScale) );
                var viewportSize = this.viewport.rect.size.$clone();
                var pos = this.board.anchoredPosition.$clone();

                if (boardSize.x <= viewportSize.x) {
                    pos.x = 0;
                } else {
                    var half = (boardSize.x - viewportSize.x) / 2.0;
                    pos.x = Math.max(-half, Math.min(pos.x, half));
                }

                if (boardSize.y <= viewportSize.y) {
                    pos.y = 0;
                } else {
                    var half1 = (boardSize.y - viewportSize.y) / 2.0;
                    pos.y = Math.max(-half1, Math.min(pos.y, half1));
                }

                this.board.anchoredPosition = pos.$clone();
            },
            /*ZoomManager.ClampBoardInView end.*/


        }
    });
    /*ZoomManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems","System.Collections.Generic","TMPro","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*Board start.*/
    $m("Board", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddToCells","t":8,"pi":[{"n":"cell","pt":Cell,"ps":0},{"n":"r","pt":$n[0].Int32,"ps":1},{"n":"c","pt":$n[0].Int32,"ps":2}],"sn":"AddToCells","rt":$n[0].Void,"p":[Cell,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"FitCellsToBoard","t":8,"sn":"FitCellsToBoard","rt":$n[0].Void},{"a":2,"n":"GetCells","t":8,"sn":"GetCells","rt":System.Array.type(Cell, 2)},{"a":1,"n":"HandleCellPainted","t":8,"pi":[{"n":"source","pt":Cell,"ps":0}],"sn":"HandleCellPainted","rt":$n[0].Void,"p":[Cell]},{"a":2,"n":"HandleRenderPixelMatrix","t":8,"sn":"HandleRenderPixelMatrix","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"ResizeMatrixTo25","t":8,"pi":[{"n":"original","pt":$n[0].Array.type(System.Int32, 2),"ps":0}],"sn":"ResizeMatrixTo25","rt":$n[0].Array.type(System.Int32, 2),"p":[$n[0].Array.type(System.Int32, 2)]},{"a":2,"n":"SetBoard","t":8,"pi":[{"n":"rows","pt":$n[0].Int32,"ps":0},{"n":"cols","pt":$n[0].Int32,"ps":1}],"sn":"SetBoard","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"ZoomToColor","t":8,"pi":[{"n":"targetColor","pt":$n[0].Int32,"ps":0}],"sn":"ZoomToColor","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ColCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_ColCount","t":8,"rt":$n[0].Int32,"fg":"ColCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ColCount"},{"a":2,"n":"RowCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RowCount","t":8,"rt":$n[0].Int32,"fg":"RowCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RowCount"},{"a":2,"n":"boardRt","t":4,"rt":$n[1].RectTransform,"sn":"boardRt"},{"a":2,"n":"cellPrefab","t":4,"rt":Cell,"sn":"cellPrefab"},{"a":1,"n":"cells","t":4,"rt":System.Array.type(Cell, 2),"sn":"cells"},{"a":1,"n":"grid","t":4,"rt":$n[2].GridLayoutGroup,"sn":"grid"},{"a":2,"n":"targetScale","t":4,"rt":$n[0].Single,"sn":"targetScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Board end.*/

    /*BoardManager start.*/
    $m("BoardManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetOrderBetweenTwo","t":8,"pi":[{"n":"btn1","pt":$n[1].GameObject,"ps":0},{"n":"btn2","pt":$n[1].GameObject,"ps":1},{"n":"conditionA","pt":$n[0].Boolean,"ps":2}],"sn":"SetOrderBetweenTwo","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].GameObject,$n[0].Boolean]},{"a":1,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"boardLand","t":4,"rt":$n[1].GameObject,"sn":"boardLand"},{"a":1,"n":"boardLandIndex","t":4,"rt":$n[0].Int32,"sn":"boardLandIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"boardLandShadow","t":4,"rt":$n[1].GameObject,"sn":"boardLandShadow"},{"a":2,"n":"boardPort","t":4,"rt":$n[1].GameObject,"sn":"boardPort"},{"a":1,"n":"boardPortIndex","t":4,"rt":$n[0].Int32,"sn":"boardPortIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"boardPortShadow","t":4,"rt":$n[1].GameObject,"sn":"boardPortShadow"},{"a":1,"n":"currentIsPortrait","t":4,"rt":$n[0].Boolean,"sn":"currentIsPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPortrait","t":4,"rt":$n[0].Boolean,"sn":"isPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"paletteLand","t":4,"rt":Palette,"sn":"paletteLand"},{"a":2,"n":"palettePort","t":4,"rt":Palette,"sn":"palettePort"}]}; }, $n);
    /*BoardManager end.*/

    /*Cell start.*/
    $m("Cell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"sn":"Activate","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Effected","t":8,"sn":"Effected","rt":$n[0].Void},{"a":2,"n":"GetSprite","t":8,"sn":"GetSprite","rt":$n[2].Image},{"a":2,"n":"GetValue","t":8,"sn":"GetValue","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"Paint","t":8,"sn":"Paint","rt":$n[0].Void},{"a":2,"n":"SetBorders","t":8,"pi":[{"n":"top","pt":$n[0].Boolean,"ps":0},{"n":"bot","pt":$n[0].Boolean,"ps":1},{"n":"left","pt":$n[0].Boolean,"ps":2},{"n":"right","pt":$n[0].Boolean,"ps":3}],"sn":"SetBorders","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"SetNumberVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetNumberVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetValue","t":8,"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1},{"n":"cl","pt":$n[1].Color32,"ps":2}],"sn":"SetValue","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[1].Color32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SyncPaint","t":8,"sn":"SyncPaint","rt":$n[0].Void},{"a":2,"n":"syncProcess","t":8,"pi":[{"n":"row","pt":$n[0].Int32,"ps":0},{"n":"col","pt":$n[0].Int32,"ps":1},{"n":"caller","pt":$n[1].GameObject,"ps":2}],"sn":"syncProcess","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[1].GameObject]},{"a":2,"n":"EffectedNeighbor","t":4,"rt":Function,"sn":"EffectedNeighbor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"afterPaint","t":4,"rt":$n[1].Sprite,"sn":"afterPaint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"borderDrawer","t":4,"rt":CellBorderDrawer,"sn":"borderDrawer"},{"a":1,"n":"cellColor","t":4,"rt":$n[1].Color32,"sn":"cellColor"},{"a":2,"n":"col","t":4,"rt":$n[0].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isColored","t":4,"rt":$n[0].Boolean,"sn":"isColored","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHolding","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"row","t":4,"rt":$n[0].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"sprite","t":4,"rt":$n[2].Image,"sn":"sprite"},{"a":2,"n":"txt","t":4,"rt":$n[2].Text,"sn":"txt"},{"a":1,"n":"value","t":4,"rt":$n[0].Int32,"sn":"value","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Cell end.*/

    /*CellBorderDrawer start.*/
    $m("CellBorderDrawer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Image)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DrawLine","t":8,"pi":[{"n":"vh","pt":$n[2].VertexHelper,"ps":0},{"n":"start","pt":$n[1].Vector2,"ps":1},{"n":"end","pt":$n[1].Vector2,"ps":2}],"sn":"DrawLine","rt":$n[0].Void,"p":[$n[2].VertexHelper,$n[1].Vector2,$n[1].Vector2]},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[2].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[0].Void,"p":[$n[2].VertexHelper]},{"a":2,"n":"borderThickness","t":4,"rt":$n[0].Single,"sn":"borderThickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bottom","t":4,"rt":$n[0].Boolean,"sn":"bottom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"left","t":4,"rt":$n[0].Boolean,"sn":"left","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"right","t":4,"rt":$n[0].Boolean,"sn":"right","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"top","t":4,"rt":$n[0].Boolean,"sn":"top","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CellBorderDrawer end.*/

    /*ChooseBtn start.*/
    $m("ChooseBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnClick","t":8,"sn":"OnClick","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chooseScene","t":4,"rt":$n[1].GameObject,"sn":"chooseScene"},{"a":2,"n":"data","t":4,"rt":Data,"sn":"data"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorial","t":4,"rt":$n[1].GameObject,"sn":"tutorial"}]}; }, $n);
    /*ChooseBtn end.*/

    /*ColorBtn start.*/
    $m("ColorBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckDone","t":8,"sn":"CheckDone","rt":$n[0].Void},{"a":2,"n":"ClickChangeColor","t":8,"sn":"ClickChangeColor","rt":$n[0].Void},{"a":1,"n":"GetReadableTextColor","t":8,"pi":[{"n":"backgroundColor","pt":$n[1].Color32,"ps":0}],"sn":"GetReadableTextColor","rt":$n[1].Color,"p":[$n[1].Color32]},{"a":2,"n":"HideProgress","t":8,"sn":"HideProgress","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Setup","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"col","pt":$n[1].Color32,"ps":1}],"sn":"Setup","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Color32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateProgress","t":8,"sn":"UpdateProgress","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"color","t":4,"rt":$n[1].Color32,"sn":"color"},{"a":1,"n":"colorIndex","t":4,"rt":$n[0].Int32,"sn":"colorIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"img","t":4,"rt":$n[2].Image,"sn":"img"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"txt","t":4,"rt":$n[2].Text,"sn":"txt"}]}; }, $n);
    /*ColorBtn end.*/

    /*ConvertImage start.*/
    $m("ConvertImage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangePaintColor","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ChangePaintColor","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"CheckColorComplete","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CheckColorComplete","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CheckFullComplete","t":8,"sn":"CheckFullComplete","rt":$n[0].Void},{"a":1,"n":"ColorSorter","t":8,"sn":"ColorSorter","rt":$n[0].Void},{"a":2,"n":"CountUnColor","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"CountUnColor","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"FindClosestColorValue","t":8,"pi":[{"n":"dict","pt":$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),"ps":0},{"n":"target","pt":$n[1].Color32,"ps":1}],"sn":"FindClosestColorValue","rt":$n[0].Int32,"p":[$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),$n[1].Color32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetColorByIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetColorByIndex","rt":$n[1].Color32,"p":[$n[0].Int32]},{"a":2,"n":"GetColorCount","t":8,"sn":"GetColorCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetColorDictionary","t":8,"sn":"GetColorDictionary","rt":$n[4].Dictionary$2(UnityEngine.Color32,System.Int32)},{"a":2,"n":"GetCompletionPercent","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetCompletionPercent","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetCurrentUnColor","t":8,"sn":"GetCurrentUnColor","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetMatrix","t":8,"sn":"GetMatrix","rt":$n[0].Array.type(System.Int32, 2)},{"a":2,"n":"GetPixelMatrix","t":8,"sn":"GetPixelMatrix","rt":$n[0].Array.type(System.Int32, 2)},{"a":2,"n":"LoadData","t":8,"pi":[{"n":"dt","pt":Data,"ps":0}],"sn":"LoadData","rt":$n[0].Void,"p":[Data]},{"a":2,"n":"MapImageToMatrix","t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0}],"sn":"MapImageToMatrix","rt":$n[0].Array.type(System.Int32, 2),"p":[$n[1].Sprite]},{"a":1,"n":"RGBKey","is":true,"t":8,"pi":[{"n":"c","pt":$n[1].Color32,"ps":0}],"sn":"RGBKey","rt":$n[1].Color32,"p":[$n[1].Color32]},{"a":2,"n":"ReducePalette","t":8,"pi":[{"n":"originalDict","pt":$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),"ps":0},{"n":"tolerance","dv":0.1,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ReducePalette","rt":$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),"p":[$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),$n[0].Single]},{"a":1,"n":"SetUpCountColor","t":8,"sn":"SetUpCountColor","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"mostColorIndex","t":8,"sn":"mostColorIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Instance","is":true,"t":16,"rt":ConvertImage,"g":{"a":2,"n":"get_Instance","t":8,"rt":ConvertImage,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ConvertImage],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"ActivateCell","t":4,"rt":Function,"sn":"ActivateCell"},{"a":2,"n":"CheckingDoneColor","t":4,"rt":Function,"sn":"CheckingDoneColor"},{"a":2,"n":"HideShowProgressBar","t":4,"rt":Function,"sn":"HideShowProgressBar"},{"a":2,"n":"RenderPixelMatrix","t":4,"rt":Function,"sn":"RenderPixelMatrix"},{"a":2,"n":"SyncProcesses","t":4,"rt":Function,"sn":"SyncProcesses"},{"a":2,"n":"UpdateColorProgress","t":4,"rt":Function,"sn":"UpdateColorProgress"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 255.0)],"a":1,"n":"alphaThreshold","t":4,"rt":$n[0].Byte,"sn":"alphaThreshold","box":function ($v) { return Bridge.box($v, System.Byte);}},{"a":1,"n":"colorAmount","t":4,"rt":$n[4].List$1(System.Int32),"sn":"colorAmount"},{"a":2,"n":"colorDict","t":4,"rt":$n[4].Dictionary$2(UnityEngine.Color32,System.Int32),"sn":"colorDict"},{"a":1,"n":"colorTotal","t":4,"rt":$n[4].List$1(System.Int32),"sn":"colorTotal"},{"a":1,"n":"completeMatrix","t":4,"rt":$n[0].Array.type(System.Int32, 2),"sn":"completeMatrix"},{"a":1,"n":"currentUnColor","t":4,"rt":$n[0].Int32,"sn":"currentUnColor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"img","t":4,"rt":$n[1].Sprite,"sn":"img"},{"a":1,"n":"nextIndex","t":4,"rt":$n[0].Int32,"sn":"nextIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pixelMatrix","t":4,"rt":$n[0].Array.type(System.Int32, 2),"sn":"pixelMatrix"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"victory","t":4,"rt":$n[1].GameObject,"sn":"victory"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ConvertImage,"sn":"Instance"}]}; }, $n);
    /*ConvertImage end.*/

    /*FadeInStart start.*/
    $m("FadeInStart", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FadeIn","t":8,"sn":"FadeIn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FadeInStart end.*/

    /*BoardTilemap start.*/
    $m("BoardTilemap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCells","t":8,"sn":"GetCells","rt":System.Array.type(CellData, 2)},{"a":2,"n":"HandleClick","t":8,"pi":[{"n":"worldPos","pt":$n[1].Vector3,"ps":0}],"sn":"HandleClick","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"HandleRenderPixelMatrix","t":8,"sn":"HandleRenderPixelMatrix","rt":$n[0].Void},{"a":2,"n":"HighlightCellsForCurrentColor","t":8,"sn":"HighlightCellsForCurrentColor","rt":$n[0].Void},{"a":1,"n":"IsInside","t":8,"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1}],"sn":"IsInside","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"PaintNeighbors","t":8,"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1}],"sn":"PaintNeighbors","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ColCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_ColCount","t":8,"rt":$n[0].Int32,"fg":"ColCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ColCount"},{"a":2,"n":"RowCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RowCount","t":8,"rt":$n[0].Int32,"fg":"RowCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RowCount"},{"a":2,"n":"baseTile","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.TileBase' ) ),"sn":"baseTile"},{"a":2,"n":"boardRt","t":4,"rt":$n[1].RectTransform,"sn":"boardRt"},{"a":1,"n":"cells","t":4,"rt":System.Array.type(CellData, 2),"sn":"cells"},{"a":1,"n":"pixelMatrix","t":4,"rt":$n[0].Array.type(System.Int32, 2),"sn":"pixelMatrix"},{"a":2,"n":"targetScale","t":4,"rt":$n[0].Single,"sn":"targetScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Refs")],"a":2,"n":"tilemap","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"sn":"tilemap"}]}; }, $n);
    /*BoardTilemap end.*/

    /*CellData start.*/
    $m("CellData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[1].Color32],"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1},{"n":"v","pt":$n[0].Int32,"ps":2},{"n":"cl","pt":$n[1].Color32,"ps":3}],"sn":"ctor"},{"a":2,"n":"Highlight","t":8,"pi":[{"n":"tilemap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":0}],"sn":"Highlight","rt":$n[0].Void,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) )]},{"a":2,"n":"Paint","t":8,"pi":[{"n":"tilemap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":0}],"sn":"Paint","rt":$n[0].Void,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) )]},{"a":2,"n":"ResetHighlight","t":8,"pi":[{"n":"tilemap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":0}],"sn":"ResetHighlight","rt":$n[0].Void,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) )]},{"a":2,"n":"col","t":4,"rt":$n[0].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"color","t":4,"rt":$n[1].Color32,"sn":"color"},{"a":2,"n":"isColored","t":4,"rt":$n[0].Boolean,"sn":"isColored","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"row","t":4,"rt":$n[0].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"value","t":4,"rt":$n[0].Int32,"sn":"value","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*CellData end.*/

    /*Palette start.*/
    $m("Palette", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyCellSize","t":8,"sn":"ApplyCellSize","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"HandleRenderPalette","t":8,"sn":"HandleRenderPalette","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"board","t":4,"rt":$n[1].RectTransform,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"colorButtonPrefab","t":4,"rt":$n[1].GameObject,"sn":"colorButtonPrefab"},{"a":1,"n":"colorButtons","t":4,"rt":$n[4].List$1(ColorBtn),"sn":"colorButtons"},{"a":1,"n":"grid","t":4,"rt":$n[2].GridLayoutGroup,"sn":"grid"}]}; }, $n);
    /*Palette end.*/

    /*SimpleTutorial start.*/
    $m("SimpleTutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HideTutorial","t":8,"sn":"HideTutorial","rt":$n[0].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"PlayTapAnim","t":8,"sn":"PlayTapAnim","rt":$n[0].Void},{"a":2,"n":"ShowTutorial","t":8,"sn":"ShowTutorial","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"finger","t":4,"rt":$n[1].RectTransform,"sn":"finger"},{"a":1,"n":"isShowing","t":4,"rt":$n[0].Boolean,"sn":"isShowing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"overlay","t":4,"rt":$n[1].GameObject,"sn":"overlay"}]}; }, $n);
    /*SimpleTutorial end.*/

    /*Data start.*/
    $m("Data", function () { return {"nested":[Data.IntColor32Pair],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "ColorDictionary", menuName: "Data/Color Dictionary"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"colorList","t":4,"rt":$n[4].List$1(Data.IntColor32Pair),"sn":"colorList"},{"a":2,"n":"img","t":4,"rt":$n[1].Sprite,"sn":"img"}]}; }, $n);
    /*Data end.*/

    /*Data+IntColor32Pair start.*/
    $m("Data.IntColor32Pair", function () { return {"td":Data,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"b","t":4,"rt":$n[0].Int32,"sn":"b","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"g","t":4,"rt":$n[0].Int32,"sn":"g","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"key","t":4,"rt":$n[0].Int32,"sn":"key","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"r","t":4,"rt":$n[0].Int32,"sn":"r","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Data+IntColor32Pair end.*/

    /*SparkleMaskController start.*/
    $m("SparkleMaskController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearMask","t":8,"sn":"ClearMask","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"rows","pt":$n[0].Int32,"ps":0},{"n":"cols","pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"RevealCell","t":8,"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1}],"sn":"RevealCell","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"UpdateBoardBounds","t":8,"sn":"UpdateBoardBounds","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":SparkleMaskController,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":Board,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardGrid","t":4,"rt":$n[2].GridLayoutGroup,"sn":"boardGrid"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardRT","t":4,"rt":$n[1].RectTransform,"sn":"boardRT"},{"a":1,"n":"maskPixels","t":4,"rt":System.Array.type(UnityEngine.Color32),"sn":"maskPixels"},{"a":1,"n":"maskTex","t":4,"rt":$n[1].Texture2D,"sn":"maskTex"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"particles","t":4,"rt":$n[1].GameObject,"sn":"particles"},{"a":2,"n":"pixelsPerCell","t":4,"rt":$n[0].Int32,"sn":"pixelsPerCell","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sparkleMat","t":4,"rt":$n[1].Material,"sn":"sparkleMat"},{"a":1,"n":"texHeight","t":4,"rt":$n[0].Int32,"sn":"texHeight","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"texWidth","t":4,"rt":$n[0].Int32,"sn":"texWidth","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SparkleMaskController end.*/

    /*TextWaveTMP start.*/
    $m("TextWaveTMP", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateWave","t":8,"sn":"AnimateWave","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tmpText","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"tmpText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"waveHeight","t":4,"rt":$n[0].Single,"sn":"waveHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TextWaveTMP end.*/

    /*ZoomManager start.*/
    $m("ZoomManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyZoom","t":8,"pi":[{"n":"delta","pt":$n[0].Single,"ps":0}],"sn":"ApplyZoom","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ClampBoardInView","t":8,"sn":"ClampBoardInView","rt":$n[0].Void},{"a":1,"n":"HandleMousePan","t":8,"sn":"HandleMousePan","rt":$n[0].Void},{"a":1,"n":"HandleMouseZoom","t":8,"sn":"HandleMouseZoom","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"board","t":4,"rt":$n[1].RectTransform,"sn":"board"},{"a":2,"n":"boardLand","t":4,"rt":$n[1].RectTransform,"sn":"boardLand"},{"a":2,"n":"boardPort","t":4,"rt":$n[1].RectTransform,"sn":"boardPort"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMousePos","t":4,"rt":$n[1].Vector2,"sn":"lastMousePos"},{"a":2,"n":"maxScale","t":4,"rt":$n[0].Single,"sn":"maxScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minScale","t":4,"rt":$n[0].Single,"sn":"minScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"viewport","t":4,"rt":$n[1].RectTransform,"sn":"viewport"},{"a":2,"n":"viewportLand","t":4,"rt":$n[1].RectTransform,"sn":"viewportLand"},{"a":2,"n":"viewportPort","t":4,"rt":$n[1].RectTransform,"sn":"viewportPort"},{"a":2,"n":"zoomSpeed","t":4,"rt":$n[0].Single,"sn":"zoomSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ZoomManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[8].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[8].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[8].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[8].Tweener,"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[8].Tweener,"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[2].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[2].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[8].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[8].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[2].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[8].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[8].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[8].DOTweenCYInstruction.WaitForCompletion,$n[8].DOTweenCYInstruction.WaitForRewind,$n[8].DOTweenCYInstruction.WaitForKill,$n[8].DOTweenCYInstruction.WaitForElapsedLoops,$n[8].DOTweenCYInstruction.WaitForPosition,$n[8].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[8].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[8].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[8].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[8].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[8].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
