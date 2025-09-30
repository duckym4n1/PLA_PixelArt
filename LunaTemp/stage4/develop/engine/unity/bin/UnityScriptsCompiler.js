if ( TRACE ) { TRACE( JSON.parse( '["Board#OnEnable","Board#HandleRenderPixelMatrix","Board#ResizeMatrixTo25","Board#FitCellsToBoard","Board#SetBoard","Board#AddToCells","Board#HandleCellPainted","Board#OnDestroy","Board#GetCells","BoardManager#init","BoardManager#Show","BoardManager#Start","BoardManager#Update","BoardManager#SetOrderBetweenTwo","Cell#init","Cell#init","Cell#Awake","Cell#Start","Cell#SetValue","Cell#Paint","Cell#SyncPaint","Cell#Activate","Cell#Effected","Cell#OnPointerDown","Cell#OnPointerEnter","Cell#OnPointerUp","Cell#GetSprite","Cell#OnDestroy","Cell#SetNumberVisible","Cell#syncProcess","ChooseBtn#OnClick","ColorBtn#init","ColorBtn#Awake","ColorBtn#Start","ColorBtn#Setup","ColorBtn#ClickChangeColor","ColorBtn#CheckDone","ColorBtn#OnDestroy","ColorBtn#UpdateProgress","ColorBtn#HideProgress","ConvertImage#RGBKey","ConvertImage#init","ConvertImage#Awake","ConvertImage#Start","ConvertImage#LoadData","ConvertImage#FindClosestColorValue","ConvertImage#MapImageToMatrix","ConvertImage#SetUpCountColor","ConvertImage#CountUnColor","ConvertImage#CheckColorComplete","ConvertImage#CheckFullComplete","ConvertImage#ChangePaintColor","ConvertImage#GetColorByIndex","ConvertImage#GetMatrix","ConvertImage#GetColorDictionary","ConvertImage#GetCurrentUnColor","ConvertImage#GetColorCount","ConvertImage#GetPixelMatrix","ConvertImage#GetCompletionPercent","Data#init","Palette#init","Palette#Awake","Palette#OnEnable","Palette#HandleRenderPalette","Palette#ApplyCellSize","Palette#OnDestroy","ZoomManager#init","ZoomManager#Start","ZoomManager#Update","ZoomManager#HandleMouseZoom","ZoomManager#HandleMousePan","ZoomManager#HandleTouchZoom","ZoomManager#ApplyZoom","ZoomManager#IsPointerInsideViewport","ZoomManager#ClampBoardInView","ZoomManager#UpdateCellNumbers"]' ) ); }
/**
 * @version 1.0.9403.31378
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
            cellPrefab: null
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
                    UnityEngine.Debug.LogError$2("Pixel matrix is null. Cannot render.");
                    return;
                }

                var rows = System.Array.getLength(pixelMatrix, 0);
                var cols = System.Array.getLength(pixelMatrix, 1);
                this.FitCellsToBoard();
                UnityEngine.Debug.Log$1(rows + " " + cols);

                this.SetBoard(rows, cols);

                for (var y = 0; y < rows; y = (y + 1) | 0) {
                    for (var x = 0; x < cols; x = (x + 1) | 0) {
                        var cell = UnityEngine.Object.Instantiate(Cell, this.cellPrefab, this.transform);
                        cell.SetValue(y, x, ConvertImage.Instance.GetColorByIndex(pixelMatrix.get([y, x])));
                        cell.gameObject.SetActive(true);
                        cell.EffectedNeighbor = Bridge.fn.combine(cell.EffectedNeighbor, Bridge.fn.cacheBind(this, this.HandleCellPainted));

                        this.AddToCells(cell, y, x);
                    }
                }
            },
            /*Board.HandleRenderPixelMatrix end.*/

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

                var cellWidth = boardWidth / cols;
                var cellHeight = boardHeight / rows;
                var size = UnityEngine.Mathf.Min(cellWidth, cellHeight);

                this.grid.constraint = UnityEngine.UI.GridLayoutGroup.Constraint.FixedColumnCount;
                this.grid.constraintCount = cols;
                this.grid.cellSize = new pc.Vec2( size, size );
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
                    UnityEngine.Debug.LogError$2("cells array is null!");
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(source, null)) {
                    UnityEngine.Debug.LogError$2("source cell is null!");
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(ConvertImage.Instance, null)) {
                    UnityEngine.Debug.LogError$2("ConvertImage.Instance is null!");
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
            text: null,
            txt: null,
            sprite: null,
            row: 0,
            col: 0,
            value: 0,
            cellColor: null,
            isColored: false,
            afterPaint: null,
            EffectedNeighbor: null
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
                if (UnityEngine.MonoBehaviour.op_Equality(this.sprite, null)) {
                    UnityEngine.Debug.LogError$2("Sprite is null");
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
                this.txt.text = Bridge.toString(ConvertImage.Instance.GetMatrix().get([r, c]));
                this.cellColor = cl.$clone();
            },
            /*Cell.SetValue end.*/

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
                //sparkle.SetActive(true);
                this.sprite.color = UnityEngine.Color32.op_Implicit(this.cellColor.$clone());
                this.txt.text = "";
                this.isColored = true;
                this.sprite.sprite = this.afterPaint;
                !Bridge.staticEquals(($t = ConvertImage.Instance.SyncProcesses), null) ? $t(this.row, this.col, this.gameObject) : null;
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


        }
    });
    /*Cell end.*/

    /*ChooseBtn start.*/
    Bridge.define("ChooseBtn", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            data: null,
            chooseScene: null
        },
        methods: {
            /*ChooseBtn.OnClick start.*/
            OnClick: function () {
if ( TRACE ) { TRACE( "ChooseBtn#OnClick", this ); }

                UnityEngine.Debug.Log$1("ChooseBtn Clicked");
                ConvertImage.Instance.LoadData(this.data);
                this.chooseScene.SetActive(false);
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
            text: null,
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
                UnityEngine.Debug.Log$1(System.String.format("Matrix complete. Total unique colors = {0}", [Bridge.box(this.colorDict.Count, System.Int32)]));
                !Bridge.staticEquals(this.RenderPixelMatrix, null) ? this.RenderPixelMatrix() : null;
                this.currentUnColor = 1;
                this.SetUpCountColor();
                !Bridge.staticEquals(this.ActivateCell, null) ? this.ActivateCell() : null;
            },
            /*ConvertImage.LoadData end.*/

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
                            result.set([y, x], 0);
                            continue;
                        }

                        var key = new UnityEngine.Color32.$ctor1(p.r, p.g, p.b, 255);
                        var val = { };

                        if (!this.colorDict.tryGetValue(key.$clone(), val)) {
                            val.v = Bridge.identity(this.nextIndex, ((this.nextIndex = (this.nextIndex + 1) | 0)));
                            this.colorDict.setItem(key, val.v);
                        }

                        result.set([y, x], val.v);
                    }
                }

                return result;
            },
            /*ConvertImage.MapImageToMatrix end.*/

            /*ConvertImage.SetUpCountColor start.*/
            SetUpCountColor: function () {
if ( TRACE ) { TRACE( "ConvertImage#SetUpCountColor", this ); }

                for (var i = 0; i < this.colorDict.Count; i = (i + 1) | 0) {
                    this.colorAmount.add(0);
                    this.colorTotal.add(0);
                }
                for (var y = 0; y < System.Array.getLength(this.pixelMatrix, 0); y = (y + 1) | 0) {
                    for (var x = 0; x < System.Array.getLength(this.pixelMatrix, 1); x = (x + 1) | 0) {
                        var val = this.pixelMatrix.get([y, x]);
                        if (val === 0) {
                            continue;
                        }
                        this.colorAmount.setItem(((val - 1) | 0), (this.colorAmount.getItem(((val - 1) | 0)) + 1) | 0);
                        this.colorTotal.setItem(((val - 1) | 0), (this.colorTotal.getItem(((val - 1) | 0)) + 1) | 0);
                    }
                }
            },
            /*ConvertImage.SetUpCountColor end.*/

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
                    UnityEngine.Debug.Log$1(System.String.format("Current uncolored: {0}", [Bridge.box(this.currentUnColor, System.Int32)]));
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

    /*ZoomManager start.*/
    Bridge.define("ZoomManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            boardPort: null,
            boardLand: null,
            currentBoard: null,
            currentBoardLand: null,
            currentBoardScript: null,
            board: null,
            viewportPort: null,
            viewportLand: null,
            viewport: null,
            zoomSpeed: 0,
            minScale: 0,
            maxScale: 0,
            snapThreshold: 0,
            snapSpeed: 0,
            threshold: 0,
            isDragging: false,
            lastMousePos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ZoomManager#init", this ); }

                this.lastMousePos = new UnityEngine.Vector2();
                this.zoomSpeed = 0.1;
                this.minScale = 0.5;
                this.maxScale = 4.0;
                this.snapThreshold = 200.0;
                this.snapSpeed = 5.0;
                this.threshold = 1.5;
                this.isDragging = false;
            }
        },
        methods: {
            /*ZoomManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ZoomManager#Start", this ); }

                this.currentBoardLand = this.boardLand;
            },
            /*ZoomManager.Start end.*/

            /*ZoomManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ZoomManager#Update", this ); }

                this.currentBoard = UnityEngine.Screen.width > UnityEngine.Screen.height ? this.boardLand : this.boardPort;
                this.board = this.currentBoard.GetComponent(UnityEngine.RectTransform);
                if (UnityEngine.GameObject.op_Equality(this.currentBoard, this.boardLand)) {
                    if (!this.IsPointerInsideViewport(this.viewportLand)) {
                        return;
                    }
                } else {
                    if (!this.IsPointerInsideViewport(this.viewportPort)) {
                        return;
                    }
                }
                this.HandleMouseZoom();
                this.HandleMousePan();
                this.HandleTouchZoom();
                this.UpdateCellNumbers();
                this.ClampBoardInView();
                if (!this.isDragging && this.board.localScale.x <= 1.5) {
                    if (this.board.anchoredPosition.$clone().sub( pc.Vec2.ZERO.clone() ).length() > 0.01) {
                        this.board.anchoredPosition = new pc.Vec2().lerp( this.board.anchoredPosition, pc.Vec2.ZERO.clone(), UnityEngine.Time.deltaTime * this.snapSpeed );
                    }
                }
            },
            /*ZoomManager.Update end.*/

            /*ZoomManager.HandleMouseZoom start.*/
            HandleMouseZoom: function () {
if ( TRACE ) { TRACE( "ZoomManager#HandleMouseZoom", this ); }
 },
            /*ZoomManager.HandleMouseZoom end.*/

            /*ZoomManager.HandleMousePan start.*/
            HandleMousePan: function () {
if ( TRACE ) { TRACE( "ZoomManager#HandleMousePan", this ); }
 },
            /*ZoomManager.HandleMousePan end.*/

            /*ZoomManager.HandleTouchZoom start.*/
            HandleTouchZoom: function () {
if ( TRACE ) { TRACE( "ZoomManager#HandleTouchZoom", this ); }
 },
            /*ZoomManager.HandleTouchZoom end.*/

            /*ZoomManager.ApplyZoom start.*/
            ApplyZoom: function (delta) {
if ( TRACE ) { TRACE( "ZoomManager#ApplyZoom", this ); }

                var scale = this.board.localScale.$clone();
                scale = scale.$clone().add( new pc.Vec3( 1, 1, 1 ).clone().scale( delta ) );
                scale.x = Math.max(this.minScale, Math.min(scale.x, this.maxScale));
                scale.y = Math.max(this.minScale, Math.min(scale.y, this.maxScale));
                this.board.localScale = scale.$clone();

                if (scale.x <= 1.01) {
                    this.board.anchoredPosition = pc.Vec2.ZERO.clone();
                }
            },
            /*ZoomManager.ApplyZoom end.*/

            /*ZoomManager.IsPointerInsideViewport start.*/
            IsPointerInsideViewport: function (viewport) {
if ( TRACE ) { TRACE( "ZoomManager#IsPointerInsideViewport", this ); }

                var localMousePos = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(viewport, UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition), null, localMousePos);

                return viewport.rect.Contains(localMousePos.v);
            },
            /*ZoomManager.IsPointerInsideViewport end.*/

            /*ZoomManager.ClampBoardInView start.*/
            ClampBoardInView: function () {
if ( TRACE ) { TRACE( "ZoomManager#ClampBoardInView", this ); }

                if (UnityEngine.Component.op_Equality(this.viewport, null)) {
                    return;
                }

                var boardSize = this.board.rect.size.$clone().mul( UnityEngine.Vector2.FromVector3(this.board.localScale) );
                var viewportSize = this.viewport.rect.size.$clone();

                var minPos = (viewportSize.$clone().sub( boardSize )).scale( 0.5 );
                var maxPos = minPos.$clone().scale( -1 );

                var pos = this.board.anchoredPosition.$clone();
                pos.x = Math.max(minPos.x, Math.min(pos.x, maxPos.x));
                pos.y = Math.max(minPos.y, Math.min(pos.y, maxPos.y));

                this.board.anchoredPosition = pos.$clone();
            },
            /*ZoomManager.ClampBoardInView end.*/

            /*ZoomManager.UpdateCellNumbers start.*/
            UpdateCellNumbers: function () {
if ( TRACE ) { TRACE( "ZoomManager#UpdateCellNumbers", this ); }

                var $t;
                this.currentBoardScript = this.currentBoard.GetComponent(Board);
                if (UnityEngine.MonoBehaviour.op_Equality(this.currentBoardScript, null) || this.currentBoardScript.GetCells() == null) {
                    return;
                }

                var showNumbers = this.board.localScale.x > this.threshold;
                $t = Bridge.getEnumerator(this.currentBoardScript.GetCells());
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(cell, null)) {
                            cell.SetNumberVisible(showNumbers);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ZoomManager.UpdateCellNumbers end.*/


        }
    });
    /*ZoomManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine","UnityEngine.EventSystems","TMPro","System.Collections.Generic"];

    /*Board start.*/
    $m("Board", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddToCells","t":8,"pi":[{"n":"cell","pt":Cell,"ps":0},{"n":"r","pt":$n[0].Int32,"ps":1},{"n":"c","pt":$n[0].Int32,"ps":2}],"sn":"AddToCells","rt":$n[0].Void,"p":[Cell,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"FitCellsToBoard","t":8,"sn":"FitCellsToBoard","rt":$n[0].Void},{"a":2,"n":"GetCells","t":8,"sn":"GetCells","rt":System.Array.type(Cell, 2)},{"a":1,"n":"HandleCellPainted","t":8,"pi":[{"n":"source","pt":Cell,"ps":0}],"sn":"HandleCellPainted","rt":$n[0].Void,"p":[Cell]},{"a":2,"n":"HandleRenderPixelMatrix","t":8,"sn":"HandleRenderPixelMatrix","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"ResizeMatrixTo25","t":8,"pi":[{"n":"original","pt":$n[0].Array.type(System.Int32, 2),"ps":0}],"sn":"ResizeMatrixTo25","rt":$n[0].Array.type(System.Int32, 2),"p":[$n[0].Array.type(System.Int32, 2)]},{"a":2,"n":"SetBoard","t":8,"pi":[{"n":"rows","pt":$n[0].Int32,"ps":0},{"n":"cols","pt":$n[0].Int32,"ps":1}],"sn":"SetBoard","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"cellPrefab","t":4,"rt":Cell,"sn":"cellPrefab"},{"a":1,"n":"cells","t":4,"rt":System.Array.type(Cell, 2),"sn":"cells"},{"a":1,"n":"grid","t":4,"rt":$n[1].GridLayoutGroup,"sn":"grid"}]}; }, $n);
    /*Board end.*/

    /*BoardManager start.*/
    $m("BoardManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetOrderBetweenTwo","t":8,"pi":[{"n":"btn1","pt":$n[2].GameObject,"ps":0},{"n":"btn2","pt":$n[2].GameObject,"ps":1},{"n":"conditionA","pt":$n[0].Boolean,"ps":2}],"sn":"SetOrderBetweenTwo","rt":$n[0].Void,"p":[$n[2].GameObject,$n[2].GameObject,$n[0].Boolean]},{"a":1,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"boardLand","t":4,"rt":$n[2].GameObject,"sn":"boardLand"},{"a":1,"n":"boardLandIndex","t":4,"rt":$n[0].Int32,"sn":"boardLandIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"boardLandShadow","t":4,"rt":$n[2].GameObject,"sn":"boardLandShadow"},{"a":2,"n":"boardPort","t":4,"rt":$n[2].GameObject,"sn":"boardPort"},{"a":1,"n":"boardPortIndex","t":4,"rt":$n[0].Int32,"sn":"boardPortIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"boardPortShadow","t":4,"rt":$n[2].GameObject,"sn":"boardPortShadow"},{"a":1,"n":"currentIsPortrait","t":4,"rt":$n[0].Boolean,"sn":"currentIsPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPortrait","t":4,"rt":$n[0].Boolean,"sn":"isPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"paletteLand","t":4,"rt":Palette,"sn":"paletteLand"},{"a":2,"n":"palettePort","t":4,"rt":Palette,"sn":"palettePort"}]}; }, $n);
    /*BoardManager end.*/

    /*Cell start.*/
    $m("Cell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"sn":"Activate","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Effected","t":8,"sn":"Effected","rt":$n[0].Void},{"a":2,"n":"GetSprite","t":8,"sn":"GetSprite","rt":$n[1].Image},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"Paint","t":8,"sn":"Paint","rt":$n[0].Void},{"a":2,"n":"SetNumberVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetNumberVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetValue","t":8,"pi":[{"n":"r","pt":$n[0].Int32,"ps":0},{"n":"c","pt":$n[0].Int32,"ps":1},{"n":"cl","pt":$n[2].Color32,"ps":2}],"sn":"SetValue","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[2].Color32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SyncPaint","t":8,"sn":"SyncPaint","rt":$n[0].Void},{"a":2,"n":"syncProcess","t":8,"pi":[{"n":"row","pt":$n[0].Int32,"ps":0},{"n":"col","pt":$n[0].Int32,"ps":1},{"n":"caller","pt":$n[2].GameObject,"ps":2}],"sn":"syncProcess","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[2].GameObject]},{"a":2,"n":"EffectedNeighbor","t":4,"rt":Function,"sn":"EffectedNeighbor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"afterPaint","t":4,"rt":$n[2].Sprite,"sn":"afterPaint"},{"a":1,"n":"cellColor","t":4,"rt":$n[2].Color32,"sn":"cellColor"},{"a":2,"n":"col","t":4,"rt":$n[0].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isColored","t":4,"rt":$n[0].Boolean,"sn":"isColored","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHolding","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"row","t":4,"rt":$n[0].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"sprite","t":4,"rt":$n[1].Image,"sn":"sprite"},{"a":2,"n":"text","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"text"},{"a":2,"n":"txt","t":4,"rt":$n[1].Text,"sn":"txt"},{"a":1,"n":"value","t":4,"rt":$n[0].Int32,"sn":"value","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Cell end.*/

    /*ChooseBtn start.*/
    $m("ChooseBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnClick","t":8,"sn":"OnClick","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chooseScene","t":4,"rt":$n[2].GameObject,"sn":"chooseScene"},{"a":2,"n":"data","t":4,"rt":Data,"sn":"data"}]}; }, $n);
    /*ChooseBtn end.*/

    /*ColorBtn start.*/
    $m("ColorBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckDone","t":8,"sn":"CheckDone","rt":$n[0].Void},{"a":2,"n":"ClickChangeColor","t":8,"sn":"ClickChangeColor","rt":$n[0].Void},{"a":2,"n":"HideProgress","t":8,"sn":"HideProgress","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Setup","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0},{"n":"col","pt":$n[2].Color32,"ps":1}],"sn":"Setup","rt":$n[0].Void,"p":[$n[0].Int32,$n[2].Color32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateProgress","t":8,"sn":"UpdateProgress","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"color","t":4,"rt":$n[2].Color32,"sn":"color"},{"a":1,"n":"colorIndex","t":4,"rt":$n[0].Int32,"sn":"colorIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"img","t":4,"rt":$n[1].Image,"sn":"img"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"text","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"text"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"txt","t":4,"rt":$n[1].Text,"sn":"txt"}]}; }, $n);
    /*ColorBtn end.*/

    /*ConvertImage start.*/
    $m("ConvertImage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangePaintColor","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ChangePaintColor","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"CheckColorComplete","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CheckColorComplete","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CheckFullComplete","t":8,"sn":"CheckFullComplete","rt":$n[0].Void},{"a":2,"n":"CountUnColor","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"CountUnColor","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"FindClosestColorValue","t":8,"pi":[{"n":"dict","pt":$n[5].Dictionary$2(UnityEngine.Color32,System.Int32),"ps":0},{"n":"target","pt":$n[2].Color32,"ps":1}],"sn":"FindClosestColorValue","rt":$n[0].Int32,"p":[$n[5].Dictionary$2(UnityEngine.Color32,System.Int32),$n[2].Color32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetColorByIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetColorByIndex","rt":$n[2].Color32,"p":[$n[0].Int32]},{"a":2,"n":"GetColorCount","t":8,"sn":"GetColorCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetColorDictionary","t":8,"sn":"GetColorDictionary","rt":$n[5].Dictionary$2(UnityEngine.Color32,System.Int32)},{"a":2,"n":"GetCompletionPercent","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetCompletionPercent","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetCurrentUnColor","t":8,"sn":"GetCurrentUnColor","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetMatrix","t":8,"sn":"GetMatrix","rt":$n[0].Array.type(System.Int32, 2)},{"a":2,"n":"GetPixelMatrix","t":8,"sn":"GetPixelMatrix","rt":$n[0].Array.type(System.Int32, 2)},{"a":2,"n":"LoadData","t":8,"pi":[{"n":"dt","pt":Data,"ps":0}],"sn":"LoadData","rt":$n[0].Void,"p":[Data]},{"a":2,"n":"MapImageToMatrix","t":8,"pi":[{"n":"sprite","pt":$n[2].Sprite,"ps":0}],"sn":"MapImageToMatrix","rt":$n[0].Array.type(System.Int32, 2),"p":[$n[2].Sprite]},{"a":1,"n":"RGBKey","is":true,"t":8,"pi":[{"n":"c","pt":$n[2].Color32,"ps":0}],"sn":"RGBKey","rt":$n[2].Color32,"p":[$n[2].Color32]},{"a":1,"n":"SetUpCountColor","t":8,"sn":"SetUpCountColor","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":ConvertImage,"g":{"a":2,"n":"get_Instance","t":8,"rt":ConvertImage,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ConvertImage],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"ActivateCell","t":4,"rt":Function,"sn":"ActivateCell"},{"a":2,"n":"CheckingDoneColor","t":4,"rt":Function,"sn":"CheckingDoneColor"},{"a":2,"n":"HideShowProgressBar","t":4,"rt":Function,"sn":"HideShowProgressBar"},{"a":2,"n":"RenderPixelMatrix","t":4,"rt":Function,"sn":"RenderPixelMatrix"},{"a":2,"n":"SyncProcesses","t":4,"rt":Function,"sn":"SyncProcesses"},{"a":2,"n":"UpdateColorProgress","t":4,"rt":Function,"sn":"UpdateColorProgress"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 255.0)],"a":1,"n":"alphaThreshold","t":4,"rt":$n[0].Byte,"sn":"alphaThreshold","box":function ($v) { return Bridge.box($v, System.Byte);}},{"a":1,"n":"colorAmount","t":4,"rt":$n[5].List$1(System.Int32),"sn":"colorAmount"},{"a":2,"n":"colorDict","t":4,"rt":$n[5].Dictionary$2(UnityEngine.Color32,System.Int32),"sn":"colorDict"},{"a":1,"n":"colorTotal","t":4,"rt":$n[5].List$1(System.Int32),"sn":"colorTotal"},{"a":1,"n":"completeMatrix","t":4,"rt":$n[0].Array.type(System.Int32, 2),"sn":"completeMatrix"},{"a":1,"n":"currentUnColor","t":4,"rt":$n[0].Int32,"sn":"currentUnColor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"img","t":4,"rt":$n[2].Sprite,"sn":"img"},{"a":1,"n":"nextIndex","t":4,"rt":$n[0].Int32,"sn":"nextIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pixelMatrix","t":4,"rt":$n[0].Array.type(System.Int32, 2),"sn":"pixelMatrix"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"victory","t":4,"rt":$n[2].GameObject,"sn":"victory"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ConvertImage,"sn":"Instance"}]}; }, $n);
    /*ConvertImage end.*/

    /*Palette start.*/
    $m("Palette", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyCellSize","t":8,"sn":"ApplyCellSize","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"HandleRenderPalette","t":8,"sn":"HandleRenderPalette","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"board","t":4,"rt":$n[2].RectTransform,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"colorButtonPrefab","t":4,"rt":$n[2].GameObject,"sn":"colorButtonPrefab"},{"a":1,"n":"colorButtons","t":4,"rt":$n[5].List$1(ColorBtn),"sn":"colorButtons"},{"a":1,"n":"grid","t":4,"rt":$n[1].GridLayoutGroup,"sn":"grid"}]}; }, $n);
    /*Palette end.*/

    /*Data start.*/
    $m("Data", function () { return {"nested":[Data.IntColor32Pair],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "ColorDictionary", menuName: "Data/Color Dictionary"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"colorList","t":4,"rt":$n[5].List$1(Data.IntColor32Pair),"sn":"colorList"},{"a":2,"n":"img","t":4,"rt":$n[2].Sprite,"sn":"img"}]}; }, $n);
    /*Data end.*/

    /*Data+IntColor32Pair start.*/
    $m("Data.IntColor32Pair", function () { return {"td":Data,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"b","t":4,"rt":$n[0].Int32,"sn":"b","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"g","t":4,"rt":$n[0].Int32,"sn":"g","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"key","t":4,"rt":$n[0].Int32,"sn":"key","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"r","t":4,"rt":$n[0].Int32,"sn":"r","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Data+IntColor32Pair end.*/

    /*ZoomManager start.*/
    $m("ZoomManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyZoom","t":8,"pi":[{"n":"delta","pt":$n[0].Single,"ps":0}],"sn":"ApplyZoom","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ClampBoardInView","t":8,"sn":"ClampBoardInView","rt":$n[0].Void},{"a":1,"n":"HandleMousePan","t":8,"sn":"HandleMousePan","rt":$n[0].Void},{"a":1,"n":"HandleMouseZoom","t":8,"sn":"HandleMouseZoom","rt":$n[0].Void},{"a":1,"n":"HandleTouchZoom","t":8,"sn":"HandleTouchZoom","rt":$n[0].Void},{"a":1,"n":"IsPointerInsideViewport","t":8,"pi":[{"n":"viewport","pt":$n[2].RectTransform,"ps":0}],"sn":"IsPointerInsideViewport","rt":$n[0].Boolean,"p":[$n[2].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateCellNumbers","t":8,"sn":"UpdateCellNumbers","rt":$n[0].Void},{"a":1,"n":"board","t":4,"rt":$n[2].RectTransform,"sn":"board"},{"a":2,"n":"boardLand","t":4,"rt":$n[2].GameObject,"sn":"boardLand"},{"at":[new UnityEngine.HeaderAttribute("Board Settings")],"a":2,"n":"boardPort","t":4,"rt":$n[2].GameObject,"sn":"boardPort"},{"a":1,"n":"currentBoard","t":4,"rt":$n[2].GameObject,"sn":"currentBoard"},{"a":1,"n":"currentBoardLand","t":4,"rt":$n[2].GameObject,"sn":"currentBoardLand"},{"a":1,"n":"currentBoardScript","t":4,"rt":Board,"sn":"currentBoardScript"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMousePos","t":4,"rt":$n[2].Vector2,"sn":"lastMousePos"},{"a":2,"n":"maxScale","t":4,"rt":$n[0].Single,"sn":"maxScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minScale","t":4,"rt":$n[0].Single,"sn":"minScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"snapSpeed","t":4,"rt":$n[0].Single,"sn":"snapSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"snapThreshold","t":4,"rt":$n[0].Single,"sn":"snapThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Numbers")],"a":2,"n":"threshold","t":4,"rt":$n[0].Single,"sn":"threshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"viewport","t":4,"rt":$n[2].RectTransform,"sn":"viewport"},{"a":2,"n":"viewportLand","t":4,"rt":$n[2].RectTransform,"sn":"viewportLand"},{"a":2,"n":"viewportPort","t":4,"rt":$n[2].RectTransform,"sn":"viewportPort"},{"a":2,"n":"zoomSpeed","t":4,"rt":$n[0].Single,"sn":"zoomSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ZoomManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
