"use strict";
var osui;
(function (osui) {
    function GetVersion() {
        console.warn('osui.GetVersion(), is deprecated. Please use the API `OutSystems.OSUI.GetVersion()`.');
        return OutSystems.OSUI.GetVersion();
    }
    osui.GetVersion = GetVersion;
    function ToggleClass(el, state, className) {
        console.warn('osui.ToggleClass(...), is deprecated. Please use the API `OutSystems.OSUI.Utils.ToggleClass(...)`.');
        OutSystems.OSUI.Utils.ToggleClass(el, state, className);
    }
    osui.ToggleClass = ToggleClass;
    function GetClosest(elem, selector) {
        console.warn('osui.GetClosest(...), is deprecated. Please use the API `OutSystems.OSUI.Utils.GetClosest(...)`.');
        return OutSystems.OSUI.Utils.GetClosest(elem, selector);
    }
    osui.GetClosest = GetClosest;
    function FixInputs() {
        console.warn('osui.FixInputs(...), is deprecated. Please use the API `OutSystems.OSUI.Utils.FixInputs(...)`.');
        OutSystems.OSUI.Utils.FixInputs();
    }
    osui.FixInputs = FixInputs;
    function HasMasterDetail() {
        console.warn('osui.HasMasterDetail(), is deprecated. Please use the API `OutSystems.OSUI.Utils.HasMasterDetail()`.');
        return OutSystems.OSUI.Utils.HasMasterDetail();
    }
    osui.HasMasterDetail = HasMasterDetail;
    function HideOnScroll() {
        console.warn('osui.HideOnScroll(), is deprecated. Please use the API `OutSystems.OSUI.Utils.HideOnScroll.Init()`.');
        return {
            init: () => {
                OutSystems.OSUI.Utils.HideOnScroll.Init();
            },
        };
    }
    osui.HideOnScroll = HideOnScroll;
})(osui || (osui = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Constants;
    (function (Constants) {
        Constants.A11YAttributes = {
            Aria: {
                Atomic: 'atomic',
                Controls: 'aria-controls',
                Describedby: 'describedby',
                Disabled: 'aria-disabled',
                Expanded: 'aria-expanded',
                Haspopup: 'aria-haspopup',
                Hidden: 'aria-hidden',
                Label: 'aria-label',
                Labelledby: 'labelledby',
                Multiselectable: 'aria-multiselectable',
                Selected: 'aria-selected',
                ValueMax: 'valuemax',
                ValueMin: 'valuemin',
            },
            AriaLive: {
                AttrName: 'aria-live',
                Assertive: 'assertive',
                Polite: 'polite',
                Off: 'off',
            },
            Role: {
                Alert: 'alert',
                AttrName: 'role',
                Button: 'button',
                Complementary: 'complementary',
                Listbox: 'listbox',
                MenuItem: 'menuitem',
                Option: 'option',
                Progressbar: 'progressbar',
                Search: 'search',
                Tab: 'tab',
                TabList: 'tablist',
                TabPanel: 'tabpanel',
                Tooltip: 'tooltip',
            },
            TabIndex: 'tabindex',
            States: {
                Empty: '',
                False: 'false',
                TabIndexHidden: '-1',
                TabIndexShow: '0',
                True: 'true',
            },
        };
        Constants.Dot = '.';
        Constants.EnableLogMessages = false;
        Constants.FocusableElems = 'a[href]:not([disabled]),[tabindex="0"], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]),input[type="submit"]:not([disabled]), select:not([disabled])';
        Constants.HasAccessibilityClass = 'has-accessible-features';
        Constants.AccessibilityHideElementClass = 'wcag-hide-text';
        Constants.IsRTLClass = 'is-rtl';
        Constants.NoTransition = 'no-transition';
        Constants.OSUIVersion = '2.8.3';
        Constants.LayoutClass = 'layout';
        Constants.HeaderClass = 'header';
        Constants.Placeholder = 'ph';
        Constants.ZeroValue = 0;
    })(Constants = OSUIFramework.Constants || (OSUIFramework.Constants = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var ErrorCodes;
    (function (ErrorCodes) {
        ErrorCodes.AbstractChild = {
            ParentNotFound: 'OSUI-GEN-01001',
        };
        ErrorCodes.Dropdown = {
            FailOptionItemClicked: 'OSUI-GEN-02001',
            FailOptionItemKeyPressed: 'OSUI-GEN-02002',
            FailRegisterCallback: 'OSUI-GEN-02003',
            FailSetNewOptionItem: 'OSUI-GEN-02004',
            FailToSetOptionItemAction: 'OSUI-GEN-02005',
            FailUnsetNewOptionItem: 'OSUI-GEN-02006',
            HasNoImplementation: {
                code: 'OSUI-GEN-02007',
                message: 'This method has no implementation on this Dropdow Type.',
            },
        };
        ErrorCodes.Notification = {
            FailRegisterCallback: 'OSUI-GEN-03001',
        };
        ErrorCodes.RangeSlider = {
            FailRegisterCallback: 'OSUI-GEN-04001',
        };
        ErrorCodes.SectionIndex = {
            FailChildItemClicked: 'OSUI-GEN-05001',
            FailSetNewChildItem: 'OSUI-GEN-05002',
            FailToSetChildItemAction: 'OSUI-GEN-05003',
            FailUnsetNewChildItem: 'OSUI-GEN-05004',
        };
        ErrorCodes.SectionIndexItem = {
            FailToSetTargetElement: 'OSUI-GEN-06001',
        };
    })(ErrorCodes = OSUIFramework.ErrorCodes || (OSUIFramework.ErrorCodes = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var GlobalEnum;
    (function (GlobalEnum) {
        let CommonPatternsProperties;
        (function (CommonPatternsProperties) {
            CommonPatternsProperties["ExtendedClass"] = "ExtendedClass";
        })(CommonPatternsProperties = GlobalEnum.CommonPatternsProperties || (GlobalEnum.CommonPatternsProperties = {}));
        let CssClassElements;
        (function (CssClassElements) {
            CssClassElements["Header"] = "header";
            CssClassElements["List"] = "list";
            CssClassElements["MainContent"] = "main-content";
        })(CssClassElements = GlobalEnum.CssClassElements || (GlobalEnum.CssClassElements = {}));
        let Position;
        (function (Position) {
            Position["Bottom"] = "bottom";
            Position["BottomLeft"] = "bottom-left";
            Position["BottomRight"] = "bottom-right";
            Position["Center"] = "center";
            Position["Left"] = "left";
            Position["Right"] = "right";
            Position["Top"] = "top";
            Position["TopLeft"] = "top-left";
            Position["TopRight"] = "top-right";
        })(Position = GlobalEnum.Position || (GlobalEnum.Position = {}));
        let CssProperties;
        (function (CssProperties) {
            CssProperties["None"] = "none";
            CssProperties["PaddingTop"] = "padding-top";
        })(CssProperties = GlobalEnum.CssProperties || (GlobalEnum.CssProperties = {}));
        let DataBlocksTag;
        (function (DataBlocksTag) {
            DataBlocksTag["DataBlock"] = "[data-block]";
            DataBlocksTag["Input"] = "[data-input]";
            DataBlocksTag["Label"] = "[data-label]";
            DataBlocksTag["TextArea"] = "[data-textarea]";
        })(DataBlocksTag = GlobalEnum.DataBlocksTag || (GlobalEnum.DataBlocksTag = {}));
        let Direction;
        (function (Direction) {
            Direction["Left"] = "left";
            Direction["LTR"] = "ltr";
            Direction["Right"] = "right";
            Direction["RTL"] = "rtl";
        })(Direction = GlobalEnum.Direction || (GlobalEnum.Direction = {}));
        let ScrollBehavior;
        (function (ScrollBehavior) {
            ScrollBehavior["Auto"] = "auto";
            ScrollBehavior["Smooth"] = "smooth";
        })(ScrollBehavior = GlobalEnum.ScrollBehavior || (GlobalEnum.ScrollBehavior = {}));
        let HTMLAttributes;
        (function (HTMLAttributes) {
            HTMLAttributes["DataInput"] = "data-input";
            HTMLAttributes["Disabled"] = "disabled";
            HTMLAttributes["Id"] = "id";
            HTMLAttributes["Name"] = "name";
            HTMLAttributes["Style"] = "style";
        })(HTMLAttributes = GlobalEnum.HTMLAttributes || (GlobalEnum.HTMLAttributes = {}));
        let HTMLElement;
        (function (HTMLElement) {
            HTMLElement["Div"] = "div";
            HTMLElement["FieldSet"] = "fieldset";
            HTMLElement["Input"] = "input";
            HTMLElement["Link"] = "a";
            HTMLElement["Span"] = "span";
        })(HTMLElement = GlobalEnum.HTMLElement || (GlobalEnum.HTMLElement = {}));
        let HTMLEvent;
        (function (HTMLEvent) {
            HTMLEvent["AnimationEnd"] = "animationend";
            HTMLEvent["AnimationStart"] = "animationstart";
            HTMLEvent["Blur"] = "blur";
            HTMLEvent["Click"] = "click";
            HTMLEvent["Focus"] = "focus";
            HTMLEvent["keyDown"] = "keydown";
            HTMLEvent["MouseEnter"] = "mouseenter";
            HTMLEvent["MouseLeave"] = "mouseleave";
            HTMLEvent["Resize"] = "resize";
            HTMLEvent["Scroll"] = "scroll";
            HTMLEvent["TouchEnd"] = "touchend";
            HTMLEvent["TouchMove"] = "touchmove";
            HTMLEvent["TouchStart"] = "touchstart";
            HTMLEvent["TransitionEnd"] = "transitionend";
        })(HTMLEvent = GlobalEnum.HTMLEvent || (GlobalEnum.HTMLEvent = {}));
        let InlineStyle;
        (function (InlineStyle) {
            InlineStyle["Display"] = "display";
            InlineStyle["Height"] = "height";
            InlineStyle["Left"] = "left";
            InlineStyle["Opacity"] = "opacity";
            InlineStyle["PointerEvents"] = "pointerEvents";
            InlineStyle["Top"] = "top";
            InlineStyle["Transform"] = "transform";
            InlineStyle["Width"] = "width";
        })(InlineStyle = GlobalEnum.InlineStyle || (GlobalEnum.InlineStyle = {}));
        GlobalEnum.InlineStyleValue = {
            Display: {
                block: 'block',
                inline: 'inline',
                none: 'none',
                unset: '',
            },
        };
        let Keycodes;
        (function (Keycodes) {
            Keycodes["ArrowDown"] = "ArrowDown";
            Keycodes["ArrowLeft"] = "ArrowLeft";
            Keycodes["ArrowRight"] = "ArrowRight";
            Keycodes["ArrowUp"] = "ArrowUp";
            Keycodes["Enter"] = "Enter";
            Keycodes["Escape"] = "Escape";
            Keycodes["Shift"] = "Shift";
            Keycodes["ShiftTab"] = "ShiftTab";
            Keycodes["Space"] = " ";
            Keycodes["Tab"] = "Tab";
        })(Keycodes = GlobalEnum.Keycodes || (GlobalEnum.Keycodes = {}));
        let MobileOS;
        (function (MobileOS) {
            MobileOS["Android"] = "android";
            MobileOS["IOS"] = "ios";
            MobileOS["MacOS"] = "osx";
            MobileOS["Unknown"] = "unknown";
            MobileOS["Windows"] = "windows";
        })(MobileOS = GlobalEnum.MobileOS || (GlobalEnum.MobileOS = {}));
        let Orientation;
        (function (Orientation) {
            Orientation["Horizontal"] = "horizontal";
            Orientation["Vertical"] = "vertical";
        })(Orientation = GlobalEnum.Orientation || (GlobalEnum.Orientation = {}));
        let PatternsNames;
        (function (PatternsNames) {
            PatternsNames["Accordion"] = "Accordion";
            PatternsNames["AccordionItem"] = "Accordion Item";
            PatternsNames["AnimatedLabel"] = "Animated Label";
            PatternsNames["ButtonLoading"] = "ButtonLoading";
            PatternsNames["Carousel"] = "Carousel";
            PatternsNames["Datepicker"] = "Datepicker";
            PatternsNames["Dropdown"] = "Dropdown";
            PatternsNames["DropdownServerSideItem"] = "DropdownServerSideItem";
            PatternsNames["FlipContent"] = "Flip Content";
            PatternsNames["FloatingActions"] = "Floating Actions";
            PatternsNames["FloatingActionsItem"] = "Floating Actions Item";
            PatternsNames["Gallery"] = "Gallery";
            PatternsNames["Notification"] = "Notification";
            PatternsNames["ProgressBar"] = "Progress Bar";
            PatternsNames["ProgressCircle"] = "Progress Circle";
            PatternsNames["RangeSlider"] = "Range Slider";
            PatternsNames["RangeSliderInterval"] = "Range Slider Interval";
            PatternsNames["Rating"] = "Rating";
            PatternsNames["Search"] = "Search";
            PatternsNames["SectionIndex"] = "Section Index";
            PatternsNames["SectionIndexItem"] = "Section Index Item";
            PatternsNames["Sidebar"] = "Sidebar";
            PatternsNames["Submenu"] = "Submenu";
            PatternsNames["SwipeEvents"] = "SwipeEvents";
            PatternsNames["Tabs"] = "Tabs";
            PatternsNames["TabsHeaderItem"] = "TabsHeaderItem";
            PatternsNames["TabsContentItem"] = "TabsContentItem";
            PatternsNames["Tooltip"] = "Tooltip";
            PatternsNames["TouchEvents"] = "TouchEvents";
        })(PatternsNames = GlobalEnum.PatternsNames || (GlobalEnum.PatternsNames = {}));
        let Screen;
        (function (Screen) {
            Screen["Active"] = "active-screen";
            Screen["Container"] = "screen-container";
        })(Screen = GlobalEnum.Screen || (GlobalEnum.Screen = {}));
        let ShapeTypes;
        (function (ShapeTypes) {
            ShapeTypes["Rounded"] = "rounded";
            ShapeTypes["Sharp"] = "none";
            ShapeTypes["SoftRounded"] = "soft";
        })(ShapeTypes = GlobalEnum.ShapeTypes || (GlobalEnum.ShapeTypes = {}));
        let Units;
        (function (Units) {
            Units["Percentage"] = "%";
            Units["Pixel"] = "px";
        })(Units = GlobalEnum.Units || (GlobalEnum.Units = {}));
        let Browser;
        (function (Browser) {
            Browser["chrome"] = "chrome";
            Browser["edge"] = "edge";
            Browser["firefox"] = "firefox";
            Browser["ie"] = "ie";
            Browser["kindle"] = "kindle";
            Browser["miui"] = "miui";
            Browser["opera"] = "opera";
            Browser["safari"] = "safari";
            Browser["samsung"] = "samsung";
            Browser["uc"] = "uc";
            Browser["unknown"] = "unknown";
            Browser["yandex"] = "yandex";
        })(Browser = GlobalEnum.Browser || (GlobalEnum.Browser = {}));
        let DeviceOrientation;
        (function (DeviceOrientation) {
            DeviceOrientation["landscape"] = "landscape";
            DeviceOrientation["portrait"] = "portrait";
            DeviceOrientation["unknown"] = "unknown";
        })(DeviceOrientation = GlobalEnum.DeviceOrientation || (GlobalEnum.DeviceOrientation = {}));
        let DeviceType;
        (function (DeviceType) {
            DeviceType["desktop"] = "desktop";
            DeviceType["phone"] = "phone";
            DeviceType["tablet"] = "tablet";
        })(DeviceType = GlobalEnum.DeviceType || (GlobalEnum.DeviceType = {}));
    })(GlobalEnum = OSUIFramework.GlobalEnum || (OSUIFramework.GlobalEnum = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Event;
    (function (Event) {
        class AbstractEvent {
            constructor() {
                this._handlers = [];
            }
            get handlers() {
                return this._handlers;
            }
            addHandler(handler) {
                this._handlers.push(handler);
            }
            hasHandlers() {
                return this._handlers.length > 0;
            }
            removeHandler(handler) {
                const index = this._handlers.findIndex((hd) => {
                    return hd === handler;
                });
                if (index !== -1) {
                    this._handlers.splice(index, 1);
                }
            }
            trigger(data, ...args) {
                this._handlers.slice(0).forEach((h) => OSUIFramework.Helper.AsyncInvocation(h, data, ...args));
            }
        }
        Event.AbstractEvent = AbstractEvent;
    })(Event = OSUIFramework.Event || (OSUIFramework.Event = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Event;
    (function (Event) {
        class AbstractEventsManager {
            constructor() {
                this._events = new Map();
            }
            get events() {
                return this._events;
            }
            addHandler(eventType, handler) {
                if (this._events && this._events.has(eventType)) {
                    this._events.get(eventType).addHandler(handler);
                }
                else {
                    const ev = this.getInstanceOfEventType(eventType);
                    if (ev !== undefined) {
                        ev.addHandler(handler);
                        this._events.set(eventType, ev);
                    }
                }
            }
            hasHandlers(eventType) {
                let returnValue = false;
                if (this._events.has(eventType)) {
                    const event = this._events.get(eventType);
                    returnValue = event.hasHandlers();
                }
                return returnValue;
            }
            removeHandler(eventType, handler) {
                if (this._events.has(eventType)) {
                    const event = this._events.get(eventType);
                    event.removeHandler(handler);
                }
            }
            trigger(eventType, data, ...args) {
                if (this._events.has(eventType)) {
                    this._events.get(eventType).trigger(data, args);
                }
            }
        }
        Event.AbstractEventsManager = AbstractEventsManager;
    })(Event = OSUIFramework.Event || (OSUIFramework.Event = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Event;
    (function (Event) {
        let Type;
        (function (Type) {
            Type["BodyOnClick"] = "body.onclick";
            Type["BodyOnScroll"] = "body.onscroll";
            Type["SubmenuOpen"] = "submenu.open";
            Type["WindowResize"] = "window.onresize";
        })(Type = Event.Type || (Event.Type = {}));
    })(Event = OSUIFramework.Event || (OSUIFramework.Event = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Event;
    (function (Event) {
        class EventManager extends Event.AbstractEventsManager {
            getInstanceOfEventType(eventType) {
                switch (eventType) {
                    case Event.Type.BodyOnClick:
                        return new Event.BodyOnClick();
                    case Event.Type.BodyOnScroll:
                        return new Event.BodyOnScroll();
                    case Event.Type.SubmenuOpen:
                        return new OSUIFramework.Patterns.Submenu.Open();
                    case Event.Type.WindowResize:
                        return new Event.WindowResize();
                    default:
                        throw new Error(`The event ${eventType} is not supported.`);
                }
            }
        }
        Event.EventManager = EventManager;
        class GlobalEventManager {
            static get Instance() {
                return GlobalEventManager._eventManager;
            }
        }
        GlobalEventManager._eventManager = new EventManager();
        Event.GlobalEventManager = GlobalEventManager;
    })(Event = OSUIFramework.Event || (OSUIFramework.Event = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Event;
    (function (Event) {
        class BodyOnClick extends Event.AbstractEvent {
            constructor() {
                super();
                document.body.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._bodyTrigger.bind(this));
            }
            _bodyTrigger(evt) {
                super.trigger('click', evt);
            }
            trigger(data, ...args) {
                return;
            }
        }
        Event.BodyOnClick = BodyOnClick;
        class BodyOnScroll extends Event.AbstractEvent {
            constructor() {
                super();
                document.body.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Scroll, this._bodyTrigger.bind(this), true);
            }
            _bodyTrigger(evt) {
                super.trigger('scroll', evt);
            }
            trigger(data, ...args) {
                return;
            }
        }
        Event.BodyOnScroll = BodyOnScroll;
        class WindowResize extends Event.AbstractEvent {
            constructor() {
                super();
                window.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Resize, this._windowTrigger.bind(this), true);
            }
            _windowTrigger(evt) {
                super.trigger(OSUIFramework.GlobalEnum.HTMLEvent.Resize, evt);
            }
            trigger(data, ...args) {
                return;
            }
        }
        Event.WindowResize = WindowResize;
    })(Event = OSUIFramework.Event || (OSUIFramework.Event = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        function AsyncInvocation(callback, ...args) {
            if (callback)
                setTimeout(() => callback(...args), 0);
        }
        Helper.AsyncInvocation = AsyncInvocation;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class BoundPosition {
            static _checkIsOutBounds(elementBounds, testAgainstElementBounds) {
                return {
                    top: elementBounds.top < testAgainstElementBounds.top,
                    right: elementBounds.right > testAgainstElementBounds.right,
                    bottom: elementBounds.bottom > testAgainstElementBounds.bottom,
                    left: elementBounds.left < testAgainstElementBounds.left,
                };
            }
            static GetRecomendedPosition(element, testAgainstElement = document.body, elementOffset = { top: 0, right: 0, bottom: 0, left: 0 }) {
                const checkOutOfBounds = this.IsOutBounds(element, testAgainstElement, elementOffset);
                if (Object.values(checkOutOfBounds).filter((val) => val).length === 0) {
                    return undefined;
                }
                return this.GetRecomendedPositionByBounds(element.getBoundingClientRect(), testAgainstElement.getBoundingClientRect());
            }
            static GetRecomendedPositionByBounds(elementBounds, testAgainstElementBounds) {
                let recomendedPosition = undefined;
                if (elementBounds.height > testAgainstElementBounds.height ||
                    elementBounds.width > testAgainstElementBounds.width) {
                    return recomendedPosition;
                }
                const isOut = this._checkIsOutBounds(elementBounds, testAgainstElementBounds);
                if (isOut.left) {
                    recomendedPosition = OSUIFramework.GlobalEnum.Position.Right;
                }
                if (isOut.right) {
                    recomendedPosition = OSUIFramework.GlobalEnum.Position.Left;
                }
                if (isOut.top) {
                    recomendedPosition = OSUIFramework.GlobalEnum.Position.Bottom;
                    if (isOut.left) {
                        recomendedPosition = OSUIFramework.GlobalEnum.Position.BottomRight;
                    }
                    else if (isOut.right) {
                        recomendedPosition = OSUIFramework.GlobalEnum.Position.BottomLeft;
                    }
                }
                if (isOut.bottom) {
                    recomendedPosition = OSUIFramework.GlobalEnum.Position.Top;
                    if (isOut.left) {
                        recomendedPosition = OSUIFramework.GlobalEnum.Position.TopRight;
                    }
                    else if (isOut.right) {
                        recomendedPosition = OSUIFramework.GlobalEnum.Position.TopLeft;
                    }
                }
                return recomendedPosition;
            }
            static IsOutBounds(element, testAgainstElement = document.body, elementOffset = { top: 0, right: 0, bottom: 0, left: 0 }) {
                const elementBounds = element.getBoundingClientRect();
                const offSetValues = {
                    top: typeof elementOffset === 'number' ? elementOffset : elementOffset.top,
                    right: typeof elementOffset === 'number' ? elementOffset : elementOffset.right,
                    bottom: typeof elementOffset === 'number' ? elementOffset : elementOffset.bottom,
                    left: typeof elementOffset === 'number' ? elementOffset : elementOffset.left,
                };
                const offSetValuesUpdated = {
                    bottom: elementBounds.bottom - offSetValues.bottom,
                    height: elementBounds.height,
                    left: elementBounds.left + offSetValues.left,
                    right: elementBounds.right - offSetValues.right,
                    top: elementBounds.top + offSetValues.top,
                    width: elementBounds.width,
                    x: elementBounds.x,
                    y: elementBounds.y,
                };
                return this._checkIsOutBounds(offSetValuesUpdated, testAgainstElement.getBoundingClientRect());
            }
        }
        Helper.BoundPosition = BoundPosition;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class Dates {
            static Compare(date1, date2) {
                date1 = date1.indexOf('T') !== 10 ? date1.replace(' ', 'T') : date1;
                date2 = date2.indexOf('T') !== 10 ? date2.replace(' ', 'T') : date2;
                return Date.parse(date1) < Date.parse(date2);
            }
            static get ServerFormat() {
                return Dates._serverFormat;
            }
            static IsNull(date) {
                let _date;
                if (typeof date === 'string') {
                    date = date.indexOf('T') !== 10 ? date.replace(' ', 'T') : date;
                    if (isNaN(Date.parse(date))) {
                        throw new Error(`The given date '${date}' it's not a valid date.`);
                    }
                    else if (Date.parse(date) < 0) {
                        return true;
                    }
                    _date = new Date(Date.parse(date));
                }
                else if (date instanceof Date) {
                    _date = date;
                }
                else {
                    return true;
                }
                if (_date.getFullYear() === 1900 && _date.getMonth() === 0 && _date.getDate() === 1) {
                    return true;
                }
                return false;
            }
            static SetServerDateFormat(date) {
                Dates._serverFormat = date.replace('13', 'DD').replace('10', 'MM').replace('1900', 'YYYY');
            }
        }
        Dates._serverFormat = '';
        Helper.Dates = Dates;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        let UAKeyword;
        (function (UAKeyword) {
            UAKeyword["chrome"] = "chrome";
            UAKeyword["crios"] = "crios";
            UAKeyword["edge"] = "edge";
            UAKeyword["edgios"] = "edgios";
            UAKeyword["edga"] = "edga";
            UAKeyword["edg"] = "edg/";
            UAKeyword["firefox"] = "firefox";
            UAKeyword["fxios"] = "fxios";
            UAKeyword["kindle"] = "kindle";
            UAKeyword["silk"] = "silk";
            UAKeyword["kfapwa"] = "kfapwa";
            UAKeyword["kfapwi"] = "kfapwi";
            UAKeyword["kfjwa"] = "kfjwa";
            UAKeyword["kfjwi"] = "kfjwi";
            UAKeyword["kfsowi"] = "kfsowi";
            UAKeyword["kftt"] = "kftt";
            UAKeyword["kfot"] = "kfot";
            UAKeyword["kfthwa"] = "kfthwa";
            UAKeyword["kfthwi"] = "kfthwi";
            UAKeyword["miuibrowser"] = "miuibrowser";
            UAKeyword["msie"] = "msie";
            UAKeyword["opera"] = "opera";
            UAKeyword["opr"] = "opr";
            UAKeyword["opios"] = "opios";
            UAKeyword["safari"] = "safari";
            UAKeyword["samsungbrowser"] = "samsungbrowser";
            UAKeyword["trident"] = "trident";
            UAKeyword["ucbrowser"] = "ucbrowser";
            UAKeyword["yabrowser"] = "yabrowser";
        })(UAKeyword || (UAKeyword = {}));
        let OperatingSystemKeyword;
        (function (OperatingSystemKeyword) {
            OperatingSystemKeyword["Android"] = "android";
            OperatingSystemKeyword["Ipad"] = "ipad";
            OperatingSystemKeyword["Iphone"] = "iphone";
            OperatingSystemKeyword["MacOS"] = "mac";
            OperatingSystemKeyword["Windows"] = "windows";
        })(OperatingSystemKeyword || (OperatingSystemKeyword = {}));
        const iphoneDevices = [
            { width: 1125, height: 2436, description: 'iphone x/xs' },
            { width: 828, height: 1792, description: 'iphone xr' },
            { width: 750, height: 1624, description: 'iphone xr scaled' },
            { width: 1242, height: 2688, description: 'iphone xs max' },
            { width: 1170, height: 2532, description: 'iphone 12' },
            { width: 1284, height: 2778, description: 'iphone 12 pro max' },
            { width: 1170, height: 2532, description: 'iphone 13' },
            { width: 1125, height: 2436, description: 'iphone 13 mini' },
            { width: 1170, height: 2532, description: 'iphone 13 pro' },
            { width: 1284, height: 2778, description: 'iphone 13 pro max' },
        ];
        class DeviceInfo {
            static _getOperatingSystem(userAgent = '') {
                const userAgentLocal = DeviceInfo._getUserAgent(userAgent);
                let localOs = OSUIFramework.GlobalEnum.MobileOS.Unknown;
                if (userAgentLocal.includes(OperatingSystemKeyword.Android)) {
                    localOs = OSUIFramework.GlobalEnum.MobileOS.Android;
                }
                else if (userAgentLocal.includes(OperatingSystemKeyword.Windows)) {
                    localOs = OSUIFramework.GlobalEnum.MobileOS.Windows;
                }
                else if (userAgentLocal.includes(OperatingSystemKeyword.MacOS)) {
                    localOs = OSUIFramework.GlobalEnum.MobileOS.MacOS;
                }
                else if (userAgentLocal.includes(OperatingSystemKeyword.Ipad) ||
                    userAgentLocal.includes(OperatingSystemKeyword.Iphone)) {
                    localOs = OSUIFramework.GlobalEnum.MobileOS.IOS;
                }
                return localOs;
            }
            static _getUserAgent(userAgent = '') {
                return userAgent.replace(' ', '') === ''
                    ? window.navigator.userAgent.toLowerCase()
                    : userAgent.toLowerCase();
            }
            static _isChrome(ua) {
                return ua.includes(UAKeyword.chrome) || ua.includes(UAKeyword.crios);
            }
            static _isEdge(ua) {
                return (ua.includes(UAKeyword.edge) ||
                    ua.includes(UAKeyword.edgios) ||
                    ua.includes(UAKeyword.edga) ||
                    ua.includes(UAKeyword.edg));
            }
            static _isFirefox(ua) {
                return ua.includes(UAKeyword.firefox) || ua.includes(UAKeyword.fxios);
            }
            static _isIE(ua) {
                return ua.includes(UAKeyword.trident) || ua.includes(UAKeyword.msie);
            }
            static _isKindle(ua) {
                return (ua.includes(UAKeyword.kindle) ||
                    ua.includes(UAKeyword.silk) ||
                    ua.includes(UAKeyword.kftt) ||
                    ua.includes(UAKeyword.kfot) ||
                    ua.includes(UAKeyword.kfjwa) ||
                    ua.includes(UAKeyword.kfjwi) ||
                    ua.includes(UAKeyword.kfsowi) ||
                    ua.includes(UAKeyword.kfthwa) ||
                    ua.includes(UAKeyword.kfthwi) ||
                    ua.includes(UAKeyword.kfapwa) ||
                    ua.includes(UAKeyword.kfapwi));
            }
            static _isMiui(ua) {
                return ua.includes(UAKeyword.miuibrowser);
            }
            static _isOpera(ua) {
                return ua.includes(UAKeyword.opr) || ua.includes(UAKeyword.opera) || ua.includes(UAKeyword.opios);
            }
            static _isSamsung(ua) {
                return ua.includes(UAKeyword.samsungbrowser);
            }
            static _isUC(ua) {
                return ua.includes(UAKeyword.ucbrowser);
            }
            static _isYandex(ua) {
                return ua.includes(UAKeyword.yabrowser);
            }
            static get HasAccessibilityEnabled() {
                return Helper.Dom.ClassSelector(document.body, OSUIFramework.Constants.HasAccessibilityClass) !== undefined;
            }
            static get IsDesktop() {
                return DeviceInfo.GetDeviceType() === OSUIFramework.GlobalEnum.DeviceType.desktop;
            }
            static get IsPhone() {
                return DeviceInfo.GetDeviceType() === OSUIFramework.GlobalEnum.DeviceType.phone;
            }
            static get IsIphoneWithNotch() {
                if (DeviceInfo._isIphoneWithNotch === undefined) {
                    const ratio = window.devicePixelRatio || 1;
                    const currScreen = {
                        width: window.screen.width * ratio,
                        height: window.screen.height * ratio,
                        description: '',
                    };
                    DeviceInfo._iphoneDetails = iphoneDevices.find((device) => {
                        return device.height === currScreen.height && device.width === currScreen.width;
                    });
                    DeviceInfo._isIphoneWithNotch = DeviceInfo._iphoneDetails !== undefined;
                }
                return DeviceInfo._isIphoneWithNotch;
            }
            static get IsTablet() {
                return DeviceInfo.GetDeviceType() === OSUIFramework.GlobalEnum.DeviceType.tablet;
            }
            static get IsPwa() {
                if (DeviceInfo._isPwa === undefined) {
                    DeviceInfo._isPwa =
                        (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
                            window.navigator.standalone === true;
                }
                return DeviceInfo._isPwa;
            }
            static get IsNative() {
                if (DeviceInfo._isNativeApp === undefined) {
                    DeviceInfo._isNativeApp = window.cordova !== undefined && !DeviceInfo.IsPwa;
                }
                return DeviceInfo._isNativeApp;
            }
            static get IsAndroid() {
                if (DeviceInfo._isAndroid === undefined) {
                    DeviceInfo._isAndroid = Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.MobileOS.Android);
                }
                return DeviceInfo._isAndroid;
            }
            static get IsIos() {
                if (DeviceInfo._isIos === undefined) {
                    DeviceInfo._isIos = Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.MobileOS.IOS);
                }
                return DeviceInfo._isIos;
            }
            static get IsTouch() {
                if (DeviceInfo._isTouch === undefined) {
                    if (window.PointerEvent && 'maxTouchPoints' in navigator) {
                        DeviceInfo._isTouch = navigator.maxTouchPoints > 0;
                    }
                    else {
                        DeviceInfo._isTouch = window.matchMedia && window.matchMedia('(any-pointer:coarse)').matches;
                        if (!DeviceInfo._isTouch) {
                            DeviceInfo._isTouch = !!(window.TouchEvent || 'ontouchstart' in window);
                        }
                    }
                }
                return DeviceInfo._isTouch;
            }
            static GetBrowser(userAgent = '') {
                let browser = OSUIFramework.GlobalEnum.Browser.unknown;
                if (userAgent.trim() !== '') {
                    const userAgentLocal = DeviceInfo._getUserAgent(userAgent);
                    if (DeviceInfo._isKindle(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.kindle;
                    else if (DeviceInfo._isOpera(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.opera;
                    else if (DeviceInfo._isEdge(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.edge;
                    else if (DeviceInfo._isSamsung(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.samsung;
                    else if (DeviceInfo._isYandex(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.yandex;
                    else if (DeviceInfo._isMiui(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.miui;
                    else if (DeviceInfo._isChrome(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.chrome;
                    else if (DeviceInfo._isFirefox(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.firefox;
                    else if (DeviceInfo._isIE(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.ie;
                    else if (DeviceInfo._isUC(userAgentLocal))
                        browser = OSUIFramework.GlobalEnum.Browser.uc;
                }
                else {
                    if (DeviceInfo._browser === OSUIFramework.GlobalEnum.Browser.unknown) {
                        DeviceInfo._browser = DeviceInfo.GetBrowser(DeviceInfo._getUserAgent());
                    }
                    browser = DeviceInfo._browser;
                }
                return browser;
            }
            static GetDeviceOrientation() {
                let orientation = OSUIFramework.GlobalEnum.DeviceOrientation.unknown;
                if (Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.DeviceOrientation.landscape))
                    orientation = OSUIFramework.GlobalEnum.DeviceOrientation.landscape;
                else if (Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.DeviceOrientation.portrait))
                    orientation = OSUIFramework.GlobalEnum.DeviceOrientation.portrait;
                return orientation;
            }
            static GetDeviceType() {
                let device = OSUIFramework.GlobalEnum.DeviceType.desktop;
                if (Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.DeviceType.phone))
                    device = OSUIFramework.GlobalEnum.DeviceType.phone;
                else if (Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.GlobalEnum.DeviceType.tablet))
                    device = OSUIFramework.GlobalEnum.DeviceType.tablet;
                return device;
            }
            static GetOperatingSystem(userAgent = '') {
                let localOs = OSUIFramework.GlobalEnum.MobileOS.Unknown;
                if (userAgent.trim() !== '') {
                    localOs = DeviceInfo._getOperatingSystem();
                }
                else {
                    if (DeviceInfo._operatingSystem === OSUIFramework.GlobalEnum.MobileOS.Unknown) {
                        DeviceInfo._operatingSystem = DeviceInfo.GetOperatingSystem(DeviceInfo._getUserAgent());
                    }
                    localOs = DeviceInfo._operatingSystem;
                }
                return localOs;
            }
        }
        DeviceInfo._browser = OSUIFramework.GlobalEnum.Browser.unknown;
        DeviceInfo._iphoneDetails = undefined;
        DeviceInfo._isAndroid = undefined;
        DeviceInfo._isIos = undefined;
        DeviceInfo._isIphoneWithNotch = undefined;
        DeviceInfo._isNativeApp = undefined;
        DeviceInfo._isPwa = undefined;
        DeviceInfo._isTouch = undefined;
        DeviceInfo._operatingSystem = OSUIFramework.GlobalEnum.MobileOS.Unknown;
        Helper.DeviceInfo = DeviceInfo;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class AttributeManipulation {
            static Get(element, attrName) {
                if (element) {
                    const value = element.getAttribute(attrName);
                    return value ? value : undefined;
                }
                else {
                    throw Error(`The element does not exist, when trying to get the attribute '${attrName}'.`);
                }
            }
            static Has(element, attrName) {
                if (element) {
                    return element.hasAttribute(attrName);
                }
                else {
                    throw Error(`The element does not exist, when trying to check the attribute '${attrName}'.`);
                }
            }
            static Id(element) {
                return AttributeManipulation.Get(element, 'Id');
            }
            static Remove(element, attrName) {
                if (element) {
                    element.removeAttribute(attrName);
                }
                else {
                    throw Error(`The element does not exist, when trying to remove the attribute '${attrName}'.`);
                }
            }
            static Set(element, attrName, attrValue) {
                if (element) {
                    element.setAttribute(attrName, attrValue.toString());
                }
                else {
                    throw Error(`The element does not exist, when trying to set the attribute '${attrName}'.`);
                }
            }
        }
        class StyleManipulation {
            static AddClass(element, cssClass) {
                if (element) {
                    if (cssClass !== '') {
                        element.classList.add(cssClass);
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to add the class '${cssClass}'.`);
                }
            }
            static ContainsClass(element, cssClass) {
                if (element) {
                    if (cssClass !== '') {
                        return element.classList.contains(cssClass);
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to check if it has the class '${cssClass}'.`);
                }
            }
            static ExtendedClass(element, currentCssClasses, newCssClass) {
                if (element) {
                    const currentClassesList = currentCssClasses.split(' ');
                    const newClassesList = newCssClass.split(' ');
                    let classesToRemove = [];
                    let classesToAdd = [];
                    if (currentCssClasses !== '') {
                        classesToRemove = currentClassesList.filter((currClass) => newClassesList.indexOf(currClass) === -1);
                    }
                    if (newCssClass !== '') {
                        classesToAdd = newClassesList.filter((newClass) => currentClassesList.indexOf(newClass) === -1);
                    }
                    if (classesToRemove.length > 0) {
                        classesToRemove.forEach((classToRemove) => {
                            Helper.Dom.Styles.RemoveClass(element, classToRemove);
                        });
                    }
                    if (classesToAdd.length > 0) {
                        classesToAdd.forEach((classToAdd) => {
                            Helper.Dom.Styles.AddClass(element, classToAdd);
                        });
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to update EntendedClass '${newCssClass}'.`);
                }
            }
            static GetBorderRadiusValueFromShapeType(shapeName) {
                return getComputedStyle(document.documentElement).getPropertyValue('--border-radius-' + shapeName);
            }
            static GetColorValueFromColorType(colorName) {
                return getComputedStyle(document.documentElement).getPropertyValue('--color-' + colorName);
            }
            static GetCssClasses(element) {
                if (element) {
                    return new Set([...element.classList]);
                }
                else {
                    throw Error('The element does not exist, when trying to get the classes.');
                }
            }
            static RemoveClass(element, cssClass) {
                if (element) {
                    if (cssClass !== '') {
                        element.classList.remove(cssClass);
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to remove the class '${cssClass}'.`);
                }
            }
            static RemoveStyleAttribute(element, cssProperty) {
                if (element) {
                    if (cssProperty !== '') {
                        element.style.removeProperty(cssProperty);
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to remove the rule '${cssProperty}'.`);
                }
            }
            static SetStyleAttribute(element, cssProperty, ruleValue) {
                if (element) {
                    if (cssProperty !== '' && ruleValue !== undefined) {
                        element.style.setProperty(cssProperty, ruleValue.toString());
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to apply the rule '${cssProperty}'.`);
                }
            }
            static ToggleClass(element, cssClass) {
                if (element) {
                    if (cssClass !== '') {
                        element.classList.toggle(cssClass);
                    }
                }
                else {
                    throw Error(`The element does not exist, when trying to toggle the class '${cssClass}'.`);
                }
            }
        }
        class Dom {
            static get Attribute() {
                return AttributeManipulation;
            }
            static get Styles() {
                return StyleManipulation;
            }
            static ClassSelector(element, cssClass) {
                let elementFound = undefined;
                if (element) {
                    if (cssClass !== '') {
                        elementFound = element.querySelector(OSUIFramework.Constants.Dot + cssClass);
                    }
                    elementFound = elementFound ? elementFound : undefined;
                }
                else {
                    console.error(`The element doesnot exist.`);
                }
                return elementFound;
            }
            static Disable(element) {
                if (element) {
                    if (Dom.Attribute.Has(element, 'disabled') === false) {
                        Dom.Attribute.Set(element, 'disabled', true);
                    }
                }
            }
            static Enable(element) {
                if (element) {
                    if (Dom.Attribute.Has(element, 'disabled')) {
                        Dom.Attribute.Remove(element, 'disabled');
                    }
                }
            }
            static GenerateUniqueId() {
                return Math.random().toString(36);
            }
            static GetElementById(id) {
                const obj = document.getElementById(id);
                if (obj) {
                    return obj;
                }
                else {
                    throw new Error(`Object with Id '${id}' not found.`);
                }
            }
            static GetElementByUniqueId(uniqueId) {
                const obj = document.getElementsByName(uniqueId);
                if (obj.length && uniqueId !== '') {
                    return obj[0];
                }
                else {
                    throw new Error(`Object with name '${uniqueId}' not found.`);
                }
            }
            static Move(element, target) {
                if (element && target) {
                    target.appendChild(element);
                }
            }
            static TagSelector(element, htmlTag) {
                let elementFound = undefined;
                if (element) {
                    if (htmlTag !== '') {
                        elementFound = element.querySelector(htmlTag);
                    }
                    elementFound = elementFound ? elementFound : undefined;
                }
                else {
                    console.error(`The element doesnot exist.`);
                }
                return elementFound;
            }
            static TagSelectorAll(element, htmlTag) {
                let elementFound;
                if (element) {
                    if (htmlTag !== '') {
                        elementFound = Array.from(element.querySelectorAll(htmlTag));
                    }
                    elementFound = elementFound ? elementFound : undefined;
                }
                else {
                    console.error(`The element doesnot exist.`);
                }
                return elementFound;
            }
        }
        Helper.Dom = Dom;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class Language {
            static get Lang() {
                return Language._lang;
            }
            static get ShortLang() {
                return Language._lang.substring(0, 2);
            }
            static SetLanguage(language) {
                Language._lang = language;
            }
        }
        Language._lang = 'en-US';
        Helper.Language = Language;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        function LogMessage(message) {
            if (OSUIFramework.Constants.EnableLogMessages) {
                return message;
            }
        }
        Helper.LogMessage = LogMessage;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class A11Y {
            static AriaAtomicFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Atomic, OSUIFramework.Constants.A11YAttributes.States.False);
            }
            static AriaAtomicTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Atomic, OSUIFramework.Constants.A11YAttributes.States.True);
            }
            static AriaControls(element, targetId) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Controls, targetId);
            }
            static AriaDescribedBy(element, targetId) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Describedby, targetId);
            }
            static AriaDisabled(element, isDisabled) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Disabled, isDisabled);
            }
            static AriaDisabledFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Disabled, false);
            }
            static AriaDisabledTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Disabled, true);
            }
            static AriaExpanded(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Expanded, value);
            }
            static AriaExpandedFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Expanded, OSUIFramework.Constants.A11YAttributes.States.False);
            }
            static AriaExpandedTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Expanded, OSUIFramework.Constants.A11YAttributes.States.True);
            }
            static AriaHasPopup(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Haspopup, value);
            }
            static AriaHasPopupFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Haspopup, OSUIFramework.Constants.A11YAttributes.States.False);
            }
            static AriaHasPopupTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Haspopup, OSUIFramework.Constants.A11YAttributes.States.True);
            }
            static AriaHidden(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Hidden, value);
            }
            static AriaHiddenFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Hidden, OSUIFramework.Constants.A11YAttributes.States.False);
            }
            static AriaHiddenTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Hidden, OSUIFramework.Constants.A11YAttributes.States.True);
            }
            static AriaLabel(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Label, value);
            }
            static AriaLabelledBy(element, targetId) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Labelledby, targetId);
            }
            static AriaLiveAssertive(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.AriaLive.AttrName, OSUIFramework.Constants.A11YAttributes.AriaLive.Assertive);
            }
            static AriaLiveOff(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.AriaLive.AttrName, OSUIFramework.Constants.A11YAttributes.AriaLive.Off);
            }
            static AriaLivePolite(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.AriaLive.AttrName, OSUIFramework.Constants.A11YAttributes.AriaLive.Polite);
            }
            static AriaSelectedFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Selected, false);
            }
            static AriaSelectedTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Selected, true);
            }
            static AriaValueMax(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.ValueMax, value);
            }
            static AriaValueMin(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.ValueMin, value);
            }
            static MultiselectableFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Multiselectable, OSUIFramework.Constants.A11YAttributes.States.False);
            }
            static MultiselectableTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Aria.Multiselectable, OSUIFramework.Constants.A11YAttributes.States.True);
            }
            static RoleAlert(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Alert);
            }
            static RoleButton(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Button);
            }
            static RoleComplementary(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Complementary);
            }
            static RoleListox(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Listbox);
            }
            static RoleMenuItem(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.MenuItem);
            }
            static RoleOption(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Option);
            }
            static RoleProgressBar(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Progressbar);
            }
            static RoleSearch(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Search);
            }
            static RoleTab(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Tab);
            }
            static RoleTabList(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.TabList);
            }
            static RoleTabPanel(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.TabPanel);
            }
            static RoleTooltip(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Tooltip);
            }
            static TabIndex(element, value) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.TabIndex, value);
            }
            static TabIndexFalse(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.TabIndex, OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden);
            }
            static TabIndexTrue(element) {
                Helper.Dom.Attribute.Set(element, OSUIFramework.Constants.A11YAttributes.TabIndex, OSUIFramework.Constants.A11YAttributes.States.TabIndexShow);
            }
        }
        Helper.A11Y = A11Y;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        var MapOperation;
        (function (MapOperation) {
            function FindInMap(pattternName, patternId, map) {
                let pattern;
                if (map.has(patternId)) {
                    pattern = map.get(patternId);
                }
                else {
                    for (const p of map.values()) {
                        if (p.equalsToID(patternId)) {
                            pattern = p;
                            break;
                        }
                    }
                }
                if (pattern === undefined) {
                    throw new Error(`The ${pattternName} with id:'${patternId}' was not found`);
                }
                return pattern;
            }
            MapOperation.FindInMap = FindInMap;
            function ExportKeys(map) {
                return [...map.keys()];
            }
            MapOperation.ExportKeys = ExportKeys;
        })(MapOperation = Helper.MapOperation || (Helper.MapOperation = {}));
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        function Sanitize(value) {
            if (typeof value === 'string') {
                if (value !== undefined && value !== null && value !== '') {
                    return value.replace(/</g, '‹').replace(/>/g, '›');
                }
            }
            return value;
        }
        Helper.Sanitize = Sanitize;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        function Scroll(element, offSet, isSmooth = true) {
            if (element) {
                const scrollOpts = Object.assign(Object.assign({}, offSet), { behavior: isSmooth ? OSUIFramework.GlobalEnum.ScrollBehavior.Smooth : OSUIFramework.GlobalEnum.ScrollBehavior.Auto });
                element.scroll(scrollOpts);
            }
        }
        Helper.Scroll = Scroll;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Helper;
    (function (Helper) {
        class URL {
            static IsImage(url) {
                return url.match(/\/?(\.\w\.)*\.(jpeg|jpg|gif|png|svg)($|(\?))/) !== null;
            }
            static IsValid(url) {
                const pattern = new RegExp('^(https?:\\/\\/)?' +
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                    '((\\d{1,3}\\.){3}\\d{1,3}))' +
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                    '(\\?[;&a-z\\d%_.~+=-]*)?' +
                    '(\\#[-a-z\\d_]*)?$', 'i');
                return pattern.test(url) || pattern.test(window.location.host + url);
            }
        }
        Helper.URL = URL;
    })(Helper = OSUIFramework.Helper || (OSUIFramework.Helper = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractPattern {
            constructor(uniqueId, configs) {
                this._isBuilt = false;
                this._uniqueId = uniqueId;
                this._configs = configs;
            }
            _setCommonHtmlElements() {
                this._selfElem = OSUIFramework.Helper.Dom.GetElementByUniqueId(this._uniqueId);
                this._widgetId = this._selfElem.closest(OSUIFramework.GlobalEnum.DataBlocksTag.DataBlock).id;
                if (this._configs.ExtendedClass !== '') {
                    OSUIFramework.Helper.Dom.Styles.ExtendedClass(this._selfElem, '', this._configs.ExtendedClass);
                }
            }
            _unsetCommonHtmlElements() {
                this._selfElem = undefined;
            }
            get _enableAccessibility() {
                return OSUIFramework.Helper.DeviceInfo.HasAccessibilityEnabled;
            }
            get selfElement() {
                return this._selfElem;
            }
            get isBuilt() {
                return this._isBuilt;
            }
            get configs() {
                return this._configs;
            }
            get uniqueId() {
                return this._uniqueId;
            }
            get widgetId() {
                return this._widgetId;
            }
            finishBuild() {
                this._isBuilt = true;
            }
            build() {
                this._setCommonHtmlElements();
            }
            changeProperty(propertyName, propertyValue) {
                if (this._configs.hasOwnProperty(propertyName)) {
                    if (this._isBuilt) {
                        switch (propertyName) {
                            case OSUIFramework.GlobalEnum.CommonPatternsProperties.ExtendedClass:
                                OSUIFramework.Helper.Dom.Styles.ExtendedClass(this._selfElem, this._configs.ExtendedClass, propertyValue);
                                break;
                        }
                    }
                    if (this._configs.validateCanChange(this._isBuilt, propertyName)) {
                        this._configs[propertyName] = this._configs.validateDefault(propertyName, propertyValue);
                    }
                }
                else {
                    throw new Error(`changeProperty - Property '${propertyName}' can't be changed.`);
                }
            }
            dispose() {
                this._isBuilt = false;
                this._unsetCommonHtmlElements();
                this._configs = undefined;
            }
            equalsToID(patternId) {
                return patternId === this._uniqueId || patternId === this._widgetId;
            }
        }
        Patterns.AbstractPattern = AbstractPattern;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractChild extends Patterns.AbstractPattern {
            notifyParent(actionType) {
                this._parentObject.beNotifiedByChild(this.uniqueId, actionType);
            }
            setParentInfo(parentSelector, getPatternByIdAPI) {
                try {
                    const findedElement = this._selfElem.closest(parentSelector);
                    this._parentId = OSUIFramework.Helper.Dom.Attribute.Get(findedElement, 'name') || findedElement.dataset.uniqueid;
                    this._parentObject = getPatternByIdAPI(this._parentId);
                }
                catch (e) {
                    throw new Error(`${OSUIFramework.ErrorCodes.AbstractChild.ParentNotFound}: Parent of Child with Id: '${this.widgetId}' was not found!`);
                }
            }
            get parentId() {
                return this._parentId;
            }
            get parentObject() {
                return this._parentObject;
            }
        }
        Patterns.AbstractChild = AbstractChild;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractConfiguration {
            constructor(config) {
                for (const key in config) {
                    if (config[key] !== undefined) {
                        this[key] = this.validateDefault(key, config[key]);
                    }
                }
            }
            validateBoolean(value, defaultValue) {
                return value !== undefined ? value : defaultValue;
            }
            validateDate(value, defaultValue) {
                return OSUIFramework.Helper.Dates.IsNull(value) === false ? value : defaultValue;
            }
            validateInRange(value, defaultValue, ...args) {
                if (value) {
                    if (args.length > 0) {
                        const allowedValues = args.length > 1 ? args : args[0];
                        if (allowedValues.includes(value)) {
                            return value;
                        }
                    }
                }
                return defaultValue;
            }
            validateNumber(value, defaultValue) {
                return typeof value === 'number' ? value : defaultValue;
            }
            validateString(value, defaultValue) {
                return value && value.trim() ? value : defaultValue;
            }
            validateCanChange(isBuilt, key) {
                return true;
            }
            validateDefault(key, value) {
                return value;
            }
        }
        Patterns.AbstractConfiguration = AbstractConfiguration;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractParent extends Patterns.AbstractPattern {
            constructor() {
                super(...arguments);
                this._childItems = new Map();
            }
            getChild(childId) {
                return this._childItems.get(childId);
            }
            getChildByIndex(index) {
                return this.getChild(OSUIFramework.Helper.MapOperation.ExportKeys(this._childItems)[index]);
            }
            getChildIndex(childId) {
                return OSUIFramework.Helper.MapOperation.ExportKeys(this._childItems).indexOf(childId);
            }
            setChild(childId, optionItem) {
                this._childItems.set(childId, optionItem);
            }
            unsetChild(childId) {
                this._childItems.delete(childId);
            }
            get childItems() {
                return [...this._childItems.values()];
            }
        }
        Patterns.AbstractParent = AbstractParent;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractProviderConfiguration extends Patterns.AbstractConfiguration {
        }
        Patterns.AbstractProviderConfiguration = AbstractProviderConfiguration;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        class AbstractProviderPattern extends Patterns.AbstractPattern {
            set provider(p) {
                this._provider = p;
            }
            get provider() {
                return this._provider;
            }
        }
        Patterns.AbstractProviderPattern = AbstractProviderPattern;
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Accordion;
        (function (Accordion_1) {
            class Accordion extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Accordion_1.AccordionConfig(configs));
                    this._accordionItems = new Map();
                }
                _prepareAccordion() {
                    this._hasList = OutSystems.OSUI.Utils.GetHasListInside(this._selfElem);
                    if (this._hasList === false) {
                        this.setHTMLElements();
                        this._updateFirstAndLastItems();
                    }
                    this.setA11YProperties();
                }
                _removeInitialCssClasses() {
                    if (this._accordionFirstItem) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionFirstItem, Accordion_1.Enum.CssClass.PatternFirstItem);
                    }
                    if (this._accordionLastItem) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionLastItem, Accordion_1.Enum.CssClass.PatternLastItem);
                    }
                }
                _setInitialCssClasses() {
                    if (this._accordionFirstItem) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionFirstItem, Accordion_1.Enum.CssClass.PatternFirstItem);
                    }
                    if (this._accordionLastItem) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionLastItem, Accordion_1.Enum.CssClass.PatternLastItem);
                    }
                }
                _updateFirstAndLastItems() {
                    if (this._accordionItems.size > 0) {
                        this._removeInitialCssClasses();
                        this.unsetHTMLElements();
                    }
                    this.setHTMLElements();
                    this._setInitialCssClasses();
                }
                setA11YProperties() {
                    OSUIFramework.Helper.A11Y.RoleTabList(this._selfElem);
                }
                setHTMLElements() {
                    const targetElem = this._hasList ? this._selfElem.firstChild : this._selfElem;
                    this._accordionFirstItem = targetElem.firstChild.firstChild;
                    this._accordionLastItem = targetElem.lastChild.firstChild;
                }
                unsetHTMLElements() {
                    this._accordionFirstItem = undefined;
                    this._accordionLastItem = undefined;
                }
                addAccordionItem(uniqueId, accordionItem) {
                    this._accordionItems.set(uniqueId, accordionItem);
                    if (accordionItem.isOpen) {
                        this.triggerAccordionItemClose(accordionItem.uniqueId);
                    }
                    if (this.isBuilt) {
                        this._updateFirstAndLastItems();
                    }
                }
                build() {
                    super.build();
                    this._prepareAccordion();
                    super.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Accordion_1.Enum.Properties.MultipleItems:
                                if (!this.configs.MultipleItems)
                                    this.collapseAllItems();
                                break;
                        }
                    }
                }
                collapseAllItems() {
                    this._accordionItems.forEach((item) => {
                        if (item.isOpen && !item.isDisabled) {
                            item.close();
                        }
                    });
                }
                dispose() {
                    this.unsetHTMLElements();
                    super.dispose();
                }
                expandAllItems() {
                    if (this.configs.MultipleItems) {
                        this._accordionItems.forEach((item) => {
                            if (!item.isOpen && !item.isDisabled) {
                                item.open();
                            }
                        });
                    }
                    else {
                        console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.Accordion} (${this.widgetId}): if ${Accordion_1.Enum.Properties.MultipleItems} parameter is set to false, this action doesn't work. Set the ${Accordion_1.Enum.Properties.MultipleItems} parameter to true.`);
                    }
                }
                removeAccordionItem(accordionItemId) {
                    this._accordionItems.delete(accordionItemId);
                }
                triggerAccordionItemClose(accordionItemId) {
                    if (this.configs.MultipleItems) {
                        return;
                    }
                    this._accordionItems.forEach((item) => {
                        if (item.uniqueId !== accordionItemId) {
                            if (item.isOpen) {
                                item.close();
                            }
                        }
                    });
                }
            }
            Accordion_1.Accordion = Accordion;
        })(Accordion = Patterns.Accordion || (Patterns.Accordion = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Accordion;
        (function (Accordion) {
            class AccordionConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Accordion.Enum.Properties.MultipleItems:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Accordion.AccordionConfig = AccordionConfig;
        })(Accordion = Patterns.Accordion || (Patterns.Accordion = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Accordion;
        (function (Accordion) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["Pattern"] = "osui-accordion";
                    CssClass["PatternItem"] = "osui-accordion-item";
                    CssClass["PatternFirstItem"] = "osui-accordion-item--is-first-item";
                    CssClass["PatternLastItem"] = "osui-accordion-item--is-last-item";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Properties;
                (function (Properties) {
                    Properties["MultipleItems"] = "MultipleItems";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = Accordion.Enum || (Accordion.Enum = {}));
        })(Accordion = Patterns.Accordion || (Patterns.Accordion = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AccordionItem;
        (function (AccordionItem_1) {
            class AccordionItem extends Patterns.AbstractPattern {
                constructor(uniqueId, configs, accordion) {
                    super(uniqueId, new AccordionItem_1.AccordionItemConfig(configs));
                    this._accordionParentElem = accordion;
                    this._isOpen = this.configs.StartsExpanded;
                    this._collapsedHeight = 0;
                }
                _accordionOnClickHandler(event) {
                    if ((event === null || event === void 0 ? void 0 : event.target) !== this._accordionItemTitleElem &&
                        (event === null || event === void 0 ? void 0 : event.target) !== this._accordionItemIconElem &&
                        (event === null || event === void 0 ? void 0 : event.target) !== this._accordionItemTitleElem.firstChild) {
                        return;
                    }
                    if (this._isOpen) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                }
                _addEvents() {
                    this._accordionItemTitleElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._accordionItemTitleElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyPress);
                }
                _animationAsync(isExpand) {
                    const finalHeight = isExpand ? this._expandedHeight : this._collapsedHeight;
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternAnimating);
                    if (!isExpand) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemContentElem, OSUIFramework.GlobalEnum.InlineStyle.Height, finalHeight + OSUIFramework.GlobalEnum.Units.Pixel);
                    this._accordionItemContentElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventOnTransitionEnd);
                    if (isExpand) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                        this._isOpen = true;
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternCollapsed);
                        this._isOpen = false;
                    }
                    this.setA11yProperties();
                    this._onToggleCallback();
                }
                _handleTabIndex() {
                    const titleTabindexValue = this.configs.IsDisabled
                        ? OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden
                        : OSUIFramework.Constants.A11YAttributes.States.TabIndexShow;
                    const contentTabindexValue = !this.configs.IsDisabled && this._isOpen
                        ? OSUIFramework.Constants.A11YAttributes.States.TabIndexShow
                        : OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden;
                    OSUIFramework.Helper.A11Y.TabIndex(this._accordionItemTitleElem, titleTabindexValue);
                    OSUIFramework.Helper.A11Y.TabIndex(this._accordionItemContentElem, contentTabindexValue);
                }
                _onKeyboardPress(event) {
                    const isEscapedKey = event.key === OSUIFramework.GlobalEnum.Keycodes.Escape;
                    const isEnterOrSpaceKey = event.key === OSUIFramework.GlobalEnum.Keycodes.Enter || event.key === OSUIFramework.GlobalEnum.Keycodes.Space;
                    if (isEscapedKey || isEnterOrSpaceKey) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    else {
                        return;
                    }
                    if (this._isOpen) {
                        this.close();
                    }
                    else if (isEnterOrSpaceKey && !this._isOpen) {
                        this.open();
                    }
                }
                _onToggleCallback() {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventOnToggle, this.widgetId, this._isOpen);
                }
                _removeEvents() {
                    this._accordionItemTitleElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._accordionItemTitleElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyPress);
                }
                _setIconPosition() {
                    if (this.configs.IconPosition === OSUIFramework.GlobalEnum.Direction.Right) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemTitleElem, AccordionItem_1.Enum.CssClass.PatternIconPositionIsLeft);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemTitleElem, AccordionItem_1.Enum.CssClass.PatternIconPositionIsRight);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemTitleElem, AccordionItem_1.Enum.CssClass.PatternIconPositionIsRight);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemTitleElem, AccordionItem_1.Enum.CssClass.PatternIconPositionIsLeft);
                    }
                }
                _setIconType() {
                    switch (this.configs.Icon) {
                        case AccordionItem_1.Enum.IconType.PlusMinus:
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconCaret);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconCustom);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconPlusMinus);
                            break;
                        case AccordionItem_1.Enum.IconType.Custom:
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconPlusMinus);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconCaret);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconCustom);
                            break;
                        default:
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconPlusMinus);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconCustom);
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconCustomElem, AccordionItem_1.Enum.CssClass.PatternIconHidden);
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemIconElem, AccordionItem_1.Enum.CssClass.PatternIconCaret);
                            break;
                    }
                }
                _setIsDisabledState() {
                    if (this.configs.IsDisabled) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternDisabled);
                        OSUIFramework.Helper.A11Y.AriaDisabledTrue(this._selfElem);
                        this.unsetCallbacks();
                        this._removeEvents();
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternDisabled);
                        OSUIFramework.Helper.A11Y.AriaDisabledFalse(this._selfElem);
                        this.setCallbacks();
                        this._addEvents();
                    }
                    this._handleTabIndex();
                }
                _transitionEndHandler() {
                    if (this._accordionItemContentElem) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternAnimating);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemContentElem, OSUIFramework.GlobalEnum.InlineStyle.Height, '');
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemTitleElem, OSUIFramework.GlobalEnum.InlineStyle.PointerEvents, '');
                        if (this._accordionItemContentElem.style.cssText.length === 0) {
                            OSUIFramework.Helper.Dom.Attribute.Remove(this._accordionItemContentElem, OSUIFramework.GlobalEnum.HTMLAttributes.Style);
                        }
                        this._accordionItemContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._transitionEndHandler, false);
                    }
                }
                setA11yProperties(isUpdate = true) {
                    if (!isUpdate) {
                        OSUIFramework.Helper.A11Y.AriaControls(this._selfElem, this._accordionItemPlaceholder.id);
                        OSUIFramework.Helper.A11Y.AriaLabelledBy(this._accordionItemContentElem, this._accordionItemTitleElem.id);
                        OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._accordionItemIconElem);
                        OSUIFramework.Helper.A11Y.AriaDisabled(this._selfElem, this.configs.IsDisabled);
                        OSUIFramework.Helper.A11Y.RoleTab(this._selfElem);
                        OSUIFramework.Helper.A11Y.RoleButton(this._accordionItemTitleElem);
                        OSUIFramework.Helper.A11Y.RoleTabPanel(this._accordionItemPlaceholder);
                    }
                    this._handleTabIndex();
                    OSUIFramework.Helper.A11Y.AriaExpanded(this._selfElem, this._isOpen.toString());
                    OSUIFramework.Helper.A11Y.AriaExpanded(this._accordionItemTitleElem, this._isOpen.toString());
                    OSUIFramework.Helper.A11Y.AriaHidden(this._accordionItemContentElem, (!this._isOpen).toString());
                }
                setCallbacks() {
                    this._eventOnClick = this._accordionOnClickHandler.bind(this);
                    this._eventOnTransitionEnd = this._transitionEndHandler.bind(this);
                    this._eventOnkeyPress = this._onKeyboardPress.bind(this);
                }
                setHtmlElements() {
                    this._accordionItemTitleElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AccordionItem_1.Enum.CssClass.PatternTitle);
                    this._accordionItemContentElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AccordionItem_1.Enum.CssClass.PatternContent);
                    this._accordionItemIconElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AccordionItem_1.Enum.CssClass.PatternIcon);
                    this._accordionItemIconCustomElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AccordionItem_1.Enum.CssClass.PatternIcon + '.' + OSUIFramework.Constants.Placeholder);
                    this._accordionItemPlaceholder = this._accordionItemContentElem.firstChild;
                }
                setInitialCssClasses() {
                    if (this._isOpen) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternOpen);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternClosed);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternCollapsed);
                    }
                    this._setIconType();
                    this._setIconPosition();
                }
                unsetCallbacks() {
                    this._eventOnClick = undefined;
                    this._eventOnTransitionEnd = undefined;
                    this._eventOnkeyPress = undefined;
                }
                unsetHtmlElements() {
                    this._accordionItemTitleElem = undefined;
                    this._accordionItemContentElem = undefined;
                    this._accordionItemIconElem = undefined;
                    this._accordionItemPlaceholder = undefined;
                }
                get isDisabled() {
                    return this.configs.IsDisabled;
                }
                get isOpen() {
                    return this._isOpen;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setInitialCssClasses();
                    this._setIsDisabledState();
                    this.setA11yProperties(false);
                    super.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case AccordionItem_1.Enum.Properties.IsDisabled:
                                this._setIsDisabledState();
                                break;
                            case AccordionItem_1.Enum.Properties.StartsExpanded:
                                console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.AccordionItem} (${this.widgetId}): changes to ${AccordionItem_1.Enum.Properties.StartsExpanded} parameter do not affect the ${OSUIFramework.GlobalEnum.PatternsNames.AccordionItem}. Use the client actions 'AccordionItemExpand' and 'AccordionItemCollapse' to affect the ${OSUIFramework.GlobalEnum.PatternsNames.AccordionItem}.`);
                                break;
                            case AccordionItem_1.Enum.Properties.IconPosition:
                                this._setIconPosition();
                                break;
                            case AccordionItem_1.Enum.Properties.Icon:
                                this._setIconType();
                        }
                    }
                }
                close() {
                    if (!this._isOpen) {
                        return;
                    }
                    OSUIFramework.Helper.Dom.Attribute.Remove(this._accordionItemContentElem, OSUIFramework.GlobalEnum.HTMLAttributes.Style);
                    this._expandedHeight = this._accordionItemContentElem.getBoundingClientRect().height;
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternClosed);
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternOpen);
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemContentElem, OSUIFramework.GlobalEnum.InlineStyle.Height, this._expandedHeight + OSUIFramework.GlobalEnum.Units.Pixel);
                    OSUIFramework.Helper.AsyncInvocation(() => {
                        this._animationAsync(false);
                    });
                }
                dispose() {
                    var _a;
                    this.unsetCallbacks();
                    this._removeEvents();
                    (_a = this._accordionParentElem) === null || _a === void 0 ? void 0 : _a.removeAccordionItem(this.uniqueId);
                    this.unsetHtmlElements();
                    super.dispose();
                }
                open() {
                    if (this._isOpen) {
                        return;
                    }
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternClosed);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AccordionItem_1.Enum.CssClass.PatternOpen);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemTitleElem, OSUIFramework.GlobalEnum.InlineStyle.PointerEvents, OSUIFramework.GlobalEnum.CssProperties.None);
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternCollapsed);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                    OSUIFramework.Helper.Dom.Attribute.Remove(this._accordionItemTitleElem, OSUIFramework.GlobalEnum.HTMLAttributes.Style);
                    this._expandedHeight = this._accordionItemContentElem.getBoundingClientRect().height;
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._accordionItemContentElem, AccordionItem_1.Enum.CssClass.PatternExpanded);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._accordionItemContentElem, OSUIFramework.GlobalEnum.InlineStyle.Height, this._collapsedHeight);
                    OSUIFramework.Helper.AsyncInvocation(() => {
                        this._animationAsync(true);
                    });
                    if (this._accordionParentElem)
                        this._accordionParentElem.triggerAccordionItemClose(this.uniqueId);
                }
                registerCallback(callback) {
                    if (this._platformEventOnToggle === undefined) {
                        this._platformEventOnToggle = callback;
                    }
                    else {
                        console.warn(`The ${OSUIFramework.GlobalEnum.PatternsNames.AccordionItem} already has the toggle callback set.`);
                    }
                }
            }
            AccordionItem_1.AccordionItem = AccordionItem;
        })(AccordionItem = Patterns.AccordionItem || (Patterns.AccordionItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AccordionItem;
        (function (AccordionItem) {
            class AccordionItemConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== AccordionItem.Enum.Properties.StartsExpanded;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case AccordionItem.Enum.Properties.IsDisabled:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case AccordionItem.Enum.Properties.Icon:
                            validatedValue = this.validateString(value, AccordionItem.Enum.IconType.Caret);
                            break;
                        case AccordionItem.Enum.Properties.IconPosition:
                            validatedValue = this.validateString(value, OSUIFramework.GlobalEnum.Direction.Right);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            AccordionItem.AccordionItemConfig = AccordionItemConfig;
        })(AccordionItem = Patterns.AccordionItem || (Patterns.AccordionItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AccordionItem;
        (function (AccordionItem) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["IconPosition"] = "IconPosition";
                    Properties["IsDisabled"] = "IsDisabled";
                    Properties["Icon"] = "Icon";
                    Properties["StartsExpanded"] = "StartsExpanded";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["PatternAnimating"] = "osui-accordion-item__content--is-animating";
                    CssClass["PatternClosed"] = "osui-accordion-item--is-closed";
                    CssClass["PatternCollapsed"] = "osui-accordion-item__content--is-collapsed";
                    CssClass["PatternDisabled"] = "osui-accordion-item--is-disabled";
                    CssClass["PatternExpanded"] = "osui-accordion-item__content--is-expanded";
                    CssClass["PatternContent"] = "osui-accordion-item__content";
                    CssClass["PatternFirstItem"] = "osui-accordion-item--is-first-item";
                    CssClass["PatternIcon"] = "osui-accordion-item__icon";
                    CssClass["PatternIconCaret"] = "osui-accordion-item__icon--caret";
                    CssClass["PatternIconCustom"] = "osui-accordion-item__icon--custom";
                    CssClass["PatternIconHidden"] = "osui-accordion-item__icon--hidden";
                    CssClass["PatternIconPlusMinus"] = "osui-accordion-item__icon--plus-minus";
                    CssClass["PatternIconPositionIsLeft"] = "osui-accordion-item__title--is-left";
                    CssClass["PatternIconPositionIsRight"] = "osui-accordion-item__title--is-right";
                    CssClass["PatternLastItem"] = "osui-accordion-item--is-last-item";
                    CssClass["PatternOpen"] = "osui-accordion-item--is-open";
                    CssClass["PatternTitle"] = "osui-accordion-item__title";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let IconType;
                (function (IconType) {
                    IconType["Caret"] = "Caret";
                    IconType["Custom"] = "Custom";
                    IconType["PlusMinus"] = "PlusMinus";
                })(IconType = Enum.IconType || (Enum.IconType = {}));
            })(Enum = AccordionItem.Enum || (AccordionItem.Enum = {}));
        })(AccordionItem = Patterns.AccordionItem || (Patterns.AccordionItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AnimatedLabel;
        (function (AnimatedLabel_1) {
            class AnimatedLabel extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new AnimatedLabel_1.AnimatedLabelConfig(configs));
                    this._isLabelFocus = false;
                }
                _inputAnimationStartCallback(e) {
                    if (e.animationName === AnimatedLabel_1.Enum.AnimationEvent.OnAutoFillStart) {
                        this._inputStateToggle(true);
                    }
                }
                _inputBlurCallback(evt) {
                    if (evt.type === OSUIFramework.GlobalEnum.HTMLEvent.Blur) {
                        this._inputStateToggle(false);
                    }
                }
                _inputFocusCallback(evt) {
                    if (evt.type === OSUIFramework.GlobalEnum.HTMLEvent.Focus) {
                        this._inputStateToggle(true);
                    }
                }
                _inputStateToggle(isFocus) {
                    const inputHasText = this._inputElement && this._inputElement.value !== '';
                    if (this.isBuilt || inputHasText) {
                        if ((inputHasText || isFocus) && this._isLabelFocus === false) {
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, AnimatedLabel_1.Enum.CssClasses.IsActive);
                            this._isLabelFocus = true;
                        }
                        else if (inputHasText === false && this._isLabelFocus && isFocus === false) {
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, AnimatedLabel_1.Enum.CssClasses.IsActive);
                            this._isLabelFocus = false;
                        }
                    }
                }
                setCallbacks() {
                    this._eventBlur = this._inputBlurCallback.bind(this);
                    this._eventFocus = this._inputFocusCallback.bind(this);
                    this._eventAnimationStart = this._inputAnimationStartCallback.bind(this);
                    this._inputElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                    this._inputElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventFocus);
                    this._inputElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.AnimationStart, this._eventAnimationStart);
                }
                setHtmlElements() {
                    this._labelPhElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AnimatedLabel_1.Enum.CssClasses.LabelPlaceholder);
                    this._inputPhElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, AnimatedLabel_1.Enum.CssClasses.InputPlaceholder);
                    this._inputElement =
                        OSUIFramework.Helper.Dom.TagSelector(this._inputPhElement, OSUIFramework.GlobalEnum.DataBlocksTag.Input) ||
                            OSUIFramework.Helper.Dom.TagSelector(this._inputPhElement, OSUIFramework.GlobalEnum.DataBlocksTag.TextArea);
                    if (this._inputElement) {
                        this._inputElement.placeholder = '';
                        this._inputStateToggle(undefined);
                    }
                    else {
                        throw new Error(AnimatedLabel_1.Enum.Messages.InputNotFound);
                    }
                    if (OSUIFramework.Helper.Dom.TagSelector(this._labelPhElement, OSUIFramework.GlobalEnum.DataBlocksTag.Label) === undefined) {
                        console.warn(AnimatedLabel_1.Enum.Messages.LabelNotFound);
                    }
                }
                unsetCallbacks() {
                    this._inputElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                    this._inputElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventFocus);
                    this._inputElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.AnimationStart, this._eventAnimationStart);
                    this._eventBlur = undefined;
                    this._eventFocus = undefined;
                    this._eventAnimationStart = undefined;
                }
                unsetHtmlElements() {
                    this._labelPhElement = undefined;
                    this._inputPhElement = undefined;
                    this._inputElement = undefined;
                }
                build() {
                    OSUIFramework.Helper.AsyncInvocation(() => {
                        super.build();
                        this.setHtmlElements();
                        this.setCallbacks();
                        this.finishBuild();
                    });
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                updateOnRender() {
                    if (this.isBuilt) {
                        this._inputStateToggle(undefined);
                    }
                }
            }
            AnimatedLabel_1.AnimatedLabel = AnimatedLabel;
        })(AnimatedLabel = Patterns.AnimatedLabel || (Patterns.AnimatedLabel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AnimatedLabel;
        (function (AnimatedLabel) {
            class AnimatedLabelConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            AnimatedLabel.AnimatedLabelConfig = AnimatedLabelConfig;
        })(AnimatedLabel = Patterns.AnimatedLabel || (Patterns.AnimatedLabel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var AnimatedLabel;
        (function (AnimatedLabel) {
            var Enum;
            (function (Enum) {
                let AnimationEvent;
                (function (AnimationEvent) {
                    AnimationEvent["OnAutoFillStart"] = "onAutoFillStart";
                })(AnimationEvent = Enum.AnimationEvent || (Enum.AnimationEvent = {}));
                let CssClasses;
                (function (CssClasses) {
                    CssClasses["InputPlaceholder"] = "animated-label-input";
                    CssClasses["IsActive"] = "active";
                    CssClasses["LabelPlaceholder"] = "animated-label-text";
                    CssClasses["Pattern"] = "animated-label";
                })(CssClasses = Enum.CssClasses || (Enum.CssClasses = {}));
                let Messages;
                (function (Messages) {
                    Messages["InputNotFound"] = "Missing input or textarea.";
                    Messages["LabelNotFound"] = "We notice that a label is missing inside the Label Placeholder. In order to grant accessibility add it and assign the Input Widget accordingly.";
                })(Messages = Enum.Messages || (Enum.Messages = {}));
            })(Enum = AnimatedLabel.Enum || (AnimatedLabel.Enum = {}));
        })(AnimatedLabel = Patterns.AnimatedLabel || (Patterns.AnimatedLabel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var ButtonLoading;
        (function (ButtonLoading_1) {
            class ButtonLoading extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new ButtonLoading_1.ButtonLoadingConfig(configs));
                }
                _setInitialButtonState() {
                    this._setIsLoading(this.configs.IsLoading);
                    this._setLoadingLabel(this.configs.ShowLoadingAndLabel);
                }
                _setIsLoading(isLoading) {
                    if (isLoading) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, ButtonLoading_1.Enum.CssClass.IsLoading);
                        this.isBuilt && OSUIFramework.Helper.A11Y.TabIndexFalse(this._buttonElement);
                        this._buttonElement.blur();
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, ButtonLoading_1.Enum.CssClass.IsLoading);
                        this.isBuilt && OSUIFramework.Helper.A11Y.TabIndexTrue(this._buttonElement);
                    }
                }
                _setLoadingLabel(showSpinnerOnly) {
                    if (showSpinnerOnly && this.isBuilt) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, ButtonLoading_1.Enum.CssClass.ShowSpinnerOnly);
                    }
                    else if (showSpinnerOnly === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, ButtonLoading_1.Enum.CssClass.ShowSpinnerOnly);
                    }
                }
                setA11yProperties() {
                    OSUIFramework.Helper.A11Y.AriaLivePolite(this._selfElem);
                    OSUIFramework.Helper.A11Y.AriaAtomicTrue(this._selfElem);
                    OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._spinnerElement);
                }
                setHtmlElements() {
                    this._buttonElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, ButtonLoading_1.Enum.CssClass.Button);
                    if (this._buttonElement === undefined) {
                        throw new Error(`There are no '${OSUIFramework.Constants.Dot + ButtonLoading_1.Enum.CssClass.Button}' element as a  ${OSUIFramework.GlobalEnum.PatternsNames.ButtonLoading}  placeholder child.`);
                    }
                    this._spinnerElement = OSUIFramework.Helper.Dom.ClassSelector(this._buttonElement, ButtonLoading_1.Enum.CssClass.Spinner);
                    if (this._spinnerElement === undefined) {
                        throw new Error(`There are no '${OSUIFramework.Constants.Dot + ButtonLoading_1.Enum.CssClass.Spinner}' element as a '${OSUIFramework.Constants.Dot + ButtonLoading_1.Enum.CssClass.Button}' element child.`);
                    }
                }
                unsetHtmlElements() {
                    this._buttonElement = undefined;
                    this._spinnerElement = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this._setInitialButtonState();
                    this.setA11yProperties();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case ButtonLoading_1.Enum.Properties.IsLoading:
                                this._setIsLoading(propertyValue);
                                break;
                            case ButtonLoading_1.Enum.Properties.ShowLoadingAndLabel:
                                this._setLoadingLabel(propertyValue);
                                break;
                        }
                    }
                }
                dispose() {
                    this.unsetHtmlElements();
                    super.dispose();
                }
            }
            ButtonLoading_1.ButtonLoading = ButtonLoading;
        })(ButtonLoading = Patterns.ButtonLoading || (Patterns.ButtonLoading = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var ButtonLoading;
        (function (ButtonLoading) {
            class ButtonLoadingConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            ButtonLoading.ButtonLoadingConfig = ButtonLoadingConfig;
        })(ButtonLoading = Patterns.ButtonLoading || (Patterns.ButtonLoading = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var ButtonLoading;
        (function (ButtonLoading) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["IsLoading"] = "IsLoading";
                    Properties["ShowLoadingAndLabel"] = "ShowLoadingAndLabel";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["Button"] = "btn";
                    CssClass["IsLoading"] = "osui-btn-loading--is-loading";
                    CssClass["ShowSpinnerOnly"] = "osui-btn-loading-show-spinner";
                    CssClass["Spinner"] = "osui-btn-loading__spinner-animation";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
            })(Enum = ButtonLoading.Enum || (ButtonLoading.Enum = {}));
        })(ButtonLoading = Patterns.ButtonLoading || (Patterns.ButtonLoading = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Carousel;
        (function (Carousel) {
            class AbstractCarousel extends Patterns.AbstractProviderPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
                build() {
                    super.build();
                }
                get provider() {
                    return this._provider;
                }
                set provider(p) {
                    this._provider = p;
                }
            }
            Carousel.AbstractCarousel = AbstractCarousel;
        })(Carousel = Patterns.Carousel || (Patterns.Carousel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Carousel;
        (function (Carousel) {
            class AbstractCarouselConfig extends Patterns.AbstractProviderConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== Carousel.Enum.Properties.StartingPosition;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Carousel.Enum.Properties.Navigation:
                            validatedValue = this.validateInRange(value, Carousel.Enum.Navigation.Both, Carousel.Enum.Navigation.Arrows, Carousel.Enum.Navigation.Dots, Carousel.Enum.Navigation.None);
                            break;
                        case Carousel.Enum.Properties.ItemsDesktop:
                        case Carousel.Enum.Properties.ItemsTablet:
                        case Carousel.Enum.Properties.ItemsPhone:
                            validatedValue = this.validateNumber(value, 1);
                            break;
                        case Carousel.Enum.Properties.Height:
                            validatedValue = this.validateString(value, 'auto');
                            break;
                        case Carousel.Enum.Properties.AutoPlay:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case Carousel.Enum.Properties.ItemsGap:
                            validatedValue = this.validateString(value, '0px');
                            break;
                        case Carousel.Enum.Properties.Loop:
                            validatedValue = this.validateBoolean(value, true);
                            break;
                        case Carousel.Enum.Properties.Padding:
                            validatedValue = this.validateString(value, '0px');
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Carousel.AbstractCarouselConfig = AbstractCarouselConfig;
        })(Carousel = Patterns.Carousel || (Patterns.Carousel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Carousel;
        (function (Carousel) {
            var Factory;
            (function (Factory) {
                function NewCarousel(carouselId, configs, provider) {
                    let _carouselItem = null;
                    if (provider === Carousel.Enum.Provider.Splide) {
                        _carouselItem = new Providers.Splide.OSUISplide(carouselId, JSON.parse(configs));
                    }
                    else {
                        throw new Error(`There is no  ${OSUIFramework.GlobalEnum.PatternsNames.Carousel}  of the ${provider} provider`);
                    }
                    return _carouselItem;
                }
                Factory.NewCarousel = NewCarousel;
            })(Factory = Carousel.Factory || (Carousel.Factory = {}));
        })(Carousel = Patterns.Carousel || (Patterns.Carousel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Carousel;
        (function (Carousel) {
            var Enum;
            (function (Enum) {
                let CarouselEvents;
                (function (CarouselEvents) {
                    CarouselEvents["Initialized"] = "Initialized";
                    CarouselEvents["OnSlideMoved"] = "OnSlideMoved";
                })(CarouselEvents = Enum.CarouselEvents || (Enum.CarouselEvents = {}));
                let CssVariables;
                (function (CssVariables) {
                    CssVariables["CarouselWidth"] = "--osui-carousel-track-width";
                })(CssVariables = Enum.CssVariables || (Enum.CssVariables = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["CarouselWrapper"] = "osui-carousel";
                    CssClass["Content"] = "osui-carousel__content";
                    CssClass["HasPagination"] = "osui-carousel--has-pagination";
                    CssClass["Track"] = "osui-carousel__track";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Properties;
                (function (Properties) {
                    Properties["AutoPlay"] = "AutoPlay";
                    Properties["Height"] = "Height";
                    Properties["ItemsDesktop"] = "ItemsDesktop";
                    Properties["ItemsGap"] = "ItemsGap";
                    Properties["ItemsPhone"] = "ItemsPhone";
                    Properties["ItemsTablet"] = "ItemsTablet";
                    Properties["Loop"] = "Loop";
                    Properties["Navigation"] = "Navigation";
                    Properties["Padding"] = "Padding";
                    Properties["StartingPosition"] = "StartingPosition";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let Provider;
                (function (Provider) {
                    Provider["Splide"] = "Splide";
                })(Provider = Enum.Provider || (Enum.Provider = {}));
                let Navigation;
                (function (Navigation) {
                    Navigation["Arrows"] = "arrows";
                    Navigation["Both"] = "both";
                    Navigation["Dots"] = "dots";
                    Navigation["None"] = "none";
                })(Navigation = Enum.Navigation || (Enum.Navigation = {}));
            })(Enum = Carousel.Enum || (Carousel.Enum = {}));
        })(Carousel = Patterns.Carousel || (Patterns.Carousel = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DatePicker;
        (function (DatePicker) {
            class AbstractDatePicker extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
                get provider() {
                    return this._provider;
                }
                set provider(p) {
                    this._provider = p;
                }
            }
            DatePicker.AbstractDatePicker = AbstractDatePicker;
        })(DatePicker = Patterns.DatePicker || (Patterns.DatePicker = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DatePicker;
        (function (DatePicker) {
            class AbstractDatePickerConfig extends Patterns.AbstractProviderConfiguration {
                constructor(config) {
                    super(config);
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case DatePicker.Enum.Properties.DateFormat:
                            validatedValue = this.validateString(value, OSUIFramework.Helper.Dates.ServerFormat);
                            break;
                        case DatePicker.Enum.Properties.FirstWeekDay:
                            validatedValue = this.validateNumber(value, 0);
                            break;
                        case DatePicker.Enum.Properties.MaxDate:
                            validatedValue = this.validateDate(value, undefined);
                            break;
                        case DatePicker.Enum.Properties.MinDate:
                            validatedValue = this.validateDate(value, undefined);
                            break;
                        case DatePicker.Enum.Properties.ShowTodayButton:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case DatePicker.Enum.Properties.TimeFormat:
                            validatedValue = this.validateString(value, DatePicker.Enum.TimeFormatMode.Disable);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            DatePicker.AbstractDatePickerConfig = AbstractDatePickerConfig;
        })(DatePicker = Patterns.DatePicker || (Patterns.DatePicker = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DatePicker;
        (function (DatePicker) {
            var Factory;
            (function (Factory) {
                function NewDatePicker(datePickerId, configs, mode, provider) {
                    let _datePickerItem = null;
                    switch (provider) {
                        case DatePicker.Enum.Provider.FlatPicker:
                            _datePickerItem = Providers.Datepicker.Flatpickr.Factory.NewFlatpickr(datePickerId, mode, configs);
                            break;
                        default:
                            throw new Error(`There is no ${OSUIFramework.GlobalEnum.PatternsNames.Datepicker} of the ${provider} provider`);
                    }
                    return _datePickerItem;
                }
                Factory.NewDatePicker = NewDatePicker;
            })(Factory = DatePicker.Factory || (DatePicker.Factory = {}));
        })(DatePicker = Patterns.DatePicker || (Patterns.DatePicker = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DatePicker;
        (function (DatePicker) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["Calendar"] = "osui-datepicker-calendar";
                    CssClass["Pattern"] = "osui-datepicker";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let DatePickerEvents;
                (function (DatePickerEvents) {
                    DatePickerEvents["OnChange"] = "OnChange";
                    DatePickerEvents["OnInitialize"] = "OnInitialize";
                })(DatePickerEvents = Enum.DatePickerEvents || (Enum.DatePickerEvents = {}));
                let Mode;
                (function (Mode) {
                    Mode["Range"] = "range";
                    Mode["Single"] = "single";
                })(Mode = Enum.Mode || (Enum.Mode = {}));
                let Properties;
                (function (Properties) {
                    Properties["DateFormat"] = "DateFormat";
                    Properties["FirstWeekDay"] = "FirstWeekDay";
                    Properties["MaxDate"] = "MaxDate";
                    Properties["MinDate"] = "MinDate";
                    Properties["ShowTodayButton"] = "ShowTodayButton";
                    Properties["TimeFormat"] = "TimeFormat";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let Provider;
                (function (Provider) {
                    Provider["FlatPicker"] = "flatpickr";
                })(Provider = Enum.Provider || (Enum.Provider = {}));
                let TimeFormatMode;
                (function (TimeFormatMode) {
                    TimeFormatMode["Disable"] = "disabled";
                    TimeFormatMode["Time12hFormat"] = "12";
                    TimeFormatMode["Time24hFormat"] = "24";
                })(TimeFormatMode = Enum.TimeFormatMode || (Enum.TimeFormatMode = {}));
            })(Enum = DatePicker.Enum || (DatePicker.Enum = {}));
        })(DatePicker = Patterns.DatePicker || (Patterns.DatePicker = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Dropdown;
        (function (Dropdown) {
            class AbstractDropdown extends Patterns.AbstractProviderPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
            }
            Dropdown.AbstractDropdown = AbstractDropdown;
        })(Dropdown = Patterns.Dropdown || (Patterns.Dropdown = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Dropdown;
        (function (Dropdown) {
            class AbstractDropdownConfig extends Patterns.AbstractProviderConfiguration {
                constructor(config) {
                    super(config);
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Dropdown.Enum.Properties.IsDisabled:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Dropdown.AbstractDropdownConfig = AbstractDropdownConfig;
        })(Dropdown = Patterns.Dropdown || (Patterns.Dropdown = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Dropdown;
        (function (Dropdown) {
            var Factory;
            (function (Factory) {
                function NewDropdown(dropdownId, mode, provider, configs) {
                    let _dropdownItem = null;
                    switch (provider) {
                        case Dropdown.Enum.Provider.VirtualSelect:
                            _dropdownItem = Providers.Dropdown.VirtualSelect.Factory.NewVirtualSelect(dropdownId, mode, JSON.parse(configs));
                            break;
                        case Dropdown.Enum.Provider.OSUIComponents:
                            _dropdownItem = new Providers.Dropdown.OSUIComponents.OSUIDropdownServerSide(dropdownId, JSON.parse(configs));
                            break;
                        default:
                            throw new Error(`There is no Dropdown of the ${provider} provider`);
                    }
                    return _dropdownItem;
                }
                Factory.NewDropdown = NewDropdown;
            })(Factory = Dropdown.Factory || (Dropdown.Factory = {}));
        })(Dropdown = Patterns.Dropdown || (Patterns.Dropdown = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Dropdown;
        (function (Dropdown) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Events;
                (function (Events) {
                    Events["Initialized"] = "Initialized";
                })(Events = Enum.Events || (Enum.Events = {}));
                let Mode;
                (function (Mode) {
                    Mode["Search"] = "search";
                    Mode["ServerSide"] = "server-side";
                    Mode["Tags"] = "tags";
                })(Mode = Enum.Mode || (Enum.Mode = {}));
                let Properties;
                (function (Properties) {
                    Properties["IsDisabled"] = "IsDisabled";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let Provider;
                (function (Provider) {
                    Provider["OSUIComponents"] = "osui-components";
                    Provider["VirtualSelect"] = "virtual-select";
                })(Provider = Enum.Provider || (Enum.Provider = {}));
            })(Enum = Dropdown.Enum || (Dropdown.Enum = {}));
        })(Dropdown = Patterns.Dropdown || (Patterns.Dropdown = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DropdownServerSideItem;
        (function (DropdownServerSideItem_1) {
            class DropdownServerSideItem extends Patterns.AbstractChild {
                constructor(uniqueId, configs) {
                    super(uniqueId, new DropdownServerSideItem_1.DropdownServerSideItemConfig(configs));
                }
                _onKeyboardPressed(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.keyboardTriggeredKey = event.key;
                    switch (event.key) {
                        case OSUIFramework.GlobalEnum.Keycodes.Enter:
                        case OSUIFramework.GlobalEnum.Keycodes.Space:
                            this._onSelected(event);
                            break;
                        case OSUIFramework.GlobalEnum.Keycodes.ArrowUp:
                        case OSUIFramework.GlobalEnum.Keycodes.ArrowDown:
                        case OSUIFramework.GlobalEnum.Keycodes.Escape:
                            this.notifyParent(Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.KeyPressed);
                            break;
                        case OSUIFramework.GlobalEnum.Keycodes.Tab:
                            if (event.shiftKey) {
                                this.keyboardTriggeredKey = OSUIFramework.GlobalEnum.Keycodes.ShiftTab;
                            }
                            else {
                                this.keyboardTriggeredKey = OSUIFramework.GlobalEnum.Keycodes.Tab;
                            }
                            this.notifyParent(Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.KeyPressed);
                            break;
                    }
                }
                _onSelected(event) {
                    event.stopPropagation();
                    this.notifyParent(event.type === OSUIFramework.GlobalEnum.HTMLEvent.Click
                        ? Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.Click
                        : Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.KeyPressed);
                }
                _removeEvents() {
                    this.selfElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this.selfElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                }
                _setUpEvents() {
                    this.selfElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this.selfElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                }
                _updateSelectedStatus(status) {
                    this.configs.IsSelected = status;
                    if (this.configs.IsSelected) {
                        OSUIFramework.Helper.A11Y.AriaSelectedTrue(this.selfElement);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this.selfElement, DropdownServerSideItem_1.Enum.CssClass.IsSelected);
                    }
                    else {
                        OSUIFramework.Helper.A11Y.AriaSelectedFalse(this.selfElement);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this.selfElement, DropdownServerSideItem_1.Enum.CssClass.IsSelected);
                    }
                }
                setA11yProperties() {
                    OSUIFramework.Helper.A11Y.TabIndexFalse(this.selfElement);
                    OSUIFramework.Helper.A11Y.RoleOption(this.selfElement);
                    OSUIFramework.Helper.A11Y.AriaSelectedFalse(this.selfElement);
                }
                setCallbacks() {
                    this._eventOnClick = this._onSelected.bind(this);
                    this._eventOnkeyboardPress = this._onKeyboardPressed.bind(this);
                }
                unsetCallbacks() {
                    this._platformEventOnClickCallback = null;
                }
                build() {
                    super.build();
                    this.setParentInfo(OSUIFramework.Constants.Dot + DropdownServerSideItem_1.Enum.CssClass.DropdownParentBalloon, OutSystems.OSUI.Patterns.DropdownAPI.GetDropdownById);
                    this.notifyParent(Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.Add);
                    this.setCallbacks();
                    this._setUpEvents();
                    this.setA11yProperties();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case DropdownServerSideItem_1.Enum.Properties.IsSelected:
                                this._updateSelectedStatus(propertyValue);
                                break;
                        }
                    }
                }
                dispose() {
                    if (this.isBuilt) {
                        this.unsetCallbacks();
                        this._removeEvents();
                        this.notifyParent(Providers.Dropdown.OSUIComponents.Enum.ChildNotifyActionType.Removed);
                    }
                    super.dispose();
                }
                registerCallback(eventName, callback) {
                    switch (eventName) {
                        case DropdownServerSideItem_1.Enum.Events.OnSelected:
                            if (this._platformEventOnClickCallback === undefined) {
                                this._platformEventOnClickCallback = callback;
                            }
                            break;
                        default:
                            throw new Error(`The given '${eventName}' event name it's not defined.`);
                    }
                }
                setBlur() {
                    this.selfElement.blur();
                }
                setFocus() {
                    this.selfElement.focus();
                }
                setTabindex() {
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this.selfElement);
                }
                toggleSelected() {
                    this._updateSelectedStatus(!this.configs.IsSelected);
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventOnClickCallback, this.parentObject.widgetId, this.configs.ItemId);
                }
                unsetTabindex() {
                    OSUIFramework.Helper.A11Y.TabIndexFalse(this.selfElement);
                }
                get IsSelected() {
                    return this.configs.IsSelected;
                }
                get ItemId() {
                    return this.configs.ItemId;
                }
            }
            DropdownServerSideItem_1.DropdownServerSideItem = DropdownServerSideItem;
        })(DropdownServerSideItem = Patterns.DropdownServerSideItem || (Patterns.DropdownServerSideItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DropdownServerSideItem;
        (function (DropdownServerSideItem) {
            class DropdownServerSideItemConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case DropdownServerSideItem.Enum.Properties.IsSelected:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case DropdownServerSideItem.Enum.Properties.ItemId:
                            validatedValue = this.validateString(value, undefined);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            DropdownServerSideItem.DropdownServerSideItemConfig = DropdownServerSideItemConfig;
        })(DropdownServerSideItem = Patterns.DropdownServerSideItem || (Patterns.DropdownServerSideItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var DropdownServerSideItem;
        (function (DropdownServerSideItem) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["DropdownParentBalloon"] = "osui-dropdown-serverside__balloon-wrapper";
                    CssClass["IsSelected"] = "osui-dropdown-serverside-item--is-selected";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Events;
                (function (Events) {
                    Events["OnSelected"] = "OnSelected";
                })(Events = Enum.Events || (Enum.Events = {}));
                let Properties;
                (function (Properties) {
                    Properties["IsSelected"] = "IsSelected";
                    Properties["ItemId"] = "ItemId";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = DropdownServerSideItem.Enum || (DropdownServerSideItem.Enum = {}));
        })(DropdownServerSideItem = Patterns.DropdownServerSideItem || (Patterns.DropdownServerSideItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FlipContent;
        (function (FlipContent) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["FlipSelf"] = "FlipSelf";
                    Properties["IsFlipped"] = "IsFlipped";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["PatternBack"] = "osui-flip-content__container__back";
                    CssClass["PatternContainer"] = "osui-flip-content__container";
                    CssClass["PatternDataFlipped"] = "data-flipped";
                    CssClass["PatternFlipSelf"] = "osui-flip-content--flip-self";
                    CssClass["PatternFront"] = "osui-flip-content__container__front";
                    CssClass["PatternIsFlipped"] = "osui-flip-content--flipped";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
            })(Enum = FlipContent.Enum || (FlipContent.Enum = {}));
        })(FlipContent = Patterns.FlipContent || (Patterns.FlipContent = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FlipContent;
        (function (FlipContent_1) {
            class FlipContent extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new FlipContent_1.FlipContentConfig(configs));
                }
                _keydownCallback(e) {
                    if (e.key === OSUIFramework.GlobalEnum.Keycodes.Enter ||
                        e.key === OSUIFramework.GlobalEnum.Keycodes.Space ||
                        (e.key === OSUIFramework.GlobalEnum.Keycodes.Escape && this.configs.IsFlipped)) {
                        this.toggleFlipContent();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
                _removeEvents() {
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventKeydown);
                    this._flipWrapperElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                }
                _setEventHandlers() {
                    if (this.configs.FlipSelf) {
                        this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventKeydown);
                        this._flipWrapperElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._flipWrapperElement, FlipContent_1.Enum.CssClass.PatternFlipSelf);
                    }
                    else {
                        this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventKeydown);
                        this._flipWrapperElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._flipWrapperElement, FlipContent_1.Enum.CssClass.PatternFlipSelf);
                    }
                }
                _setStartsFlipped() {
                    if (this.isBuilt === false) {
                        this._toggleClasses();
                    }
                }
                _toggleClasses() {
                    if (this.configs.IsFlipped) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, FlipContent_1.Enum.CssClass.PatternIsFlipped);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, FlipContent_1.Enum.CssClass.PatternIsFlipped);
                    }
                }
                _triggerPlatformEvent() {
                    if (this._plataformEventFlip) {
                        OSUIFramework.Helper.AsyncInvocation(this._plataformEventFlip.bind(this), this.widgetId, this.configs.IsFlipped);
                    }
                }
                _updateA11yProperties() {
                    if (this.configs.FlipSelf) {
                        OSUIFramework.Helper.A11Y.AriaAtomicTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                    }
                    else {
                        OSUIFramework.Helper.A11Y.AriaAtomicFalse(this._selfElem);
                        OSUIFramework.Helper.A11Y.TabIndexFalse(this._selfElem);
                    }
                }
                setA11yProperties() {
                    if (this.configs.FlipSelf) {
                        OSUIFramework.Helper.A11Y.AriaAtomicTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.RoleButton(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaLivePolite(this._selfElem);
                    }
                }
                setCallbacks() {
                    this._eventKeydown = this._keydownCallback.bind(this);
                    this._eventClick = this.toggleFlipContent.bind(this);
                    this._setEventHandlers();
                }
                setHtmlElements() {
                    this._flipWrapperElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, FlipContent_1.Enum.CssClass.PatternContainer);
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventKeydown = undefined;
                    this._eventClick = undefined;
                }
                unsetHtmlElements() {
                    this._flipWrapperElement = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setCallbacks();
                    this._toggleClasses();
                    this.setA11yProperties();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case FlipContent_1.Enum.Properties.IsFlipped:
                                this._setStartsFlipped();
                                break;
                            case FlipContent_1.Enum.Properties.FlipSelf:
                                this._updateA11yProperties();
                                this._setEventHandlers();
                                break;
                        }
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                registerCallback(callback) {
                    if (this._plataformEventFlip === undefined) {
                        this._plataformEventFlip = callback;
                    }
                }
                showBackContent() {
                    if (this.configs.IsFlipped === false) {
                        this.toggleFlipContent();
                    }
                }
                showFrontContent() {
                    if (this.configs.IsFlipped) {
                        this.toggleFlipContent();
                    }
                }
                toggleFlipContent() {
                    this.configs.IsFlipped = !this.configs.IsFlipped;
                    OSUIFramework.Helper.AsyncInvocation(this._toggleClasses.bind(this));
                    this._triggerPlatformEvent();
                }
            }
            FlipContent_1.FlipContent = FlipContent;
        })(FlipContent = Patterns.FlipContent || (Patterns.FlipContent = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FlipContent;
        (function (FlipContent) {
            class FlipContentConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== FlipContent.Enum.Properties.IsFlipped;
                    }
                    return true;
                }
            }
            FlipContent.FlipContentConfig = FlipContentConfig;
        })(FlipContent = Patterns.FlipContent || (Patterns.FlipContent = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FloatingActions;
        (function (FloatingActions) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["IsHover"] = "IsHover";
                    Properties["IsExpanded"] = "IsExpanded";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClasses;
                (function (CssClasses) {
                    CssClasses["ActiveScreen"] = "active-screen";
                    CssClasses["BottomBar"] = "bottom-bar";
                    CssClasses["BottomBarExists"] = "bottom-bar-exists";
                    CssClasses["FloatingActionsButton"] = "floating-button";
                    CssClasses["FloatingActionsItems"] = "floating-items";
                    CssClasses["FloatingActionItem"] = "floating-actions-item";
                    CssClasses["FloatingOverlay"] = "floating-overlay";
                    CssClasses["FloatingActionWrapper"] = ".floating-actions-wrapper";
                    CssClasses["Open"] = "is--open";
                })(CssClasses = Enum.CssClasses || (Enum.CssClasses = {}));
            })(Enum = FloatingActions.Enum || (FloatingActions.Enum = {}));
        })(FloatingActions = Patterns.FloatingActions || (Patterns.FloatingActions = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FloatingActions;
        (function (FloatingActions_1) {
            class FloatingActions extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new FloatingActions_1.FloatingActionsConfig(configs));
                    this._floatingItems = new Map();
                    this._eventToggleClick = this._toggleClick.bind(this);
                    this._eventkeyboard = this._onButtonKeypress.bind(this);
                    this._escException = this._handleEscException.bind(this);
                    this._openMethod = this.open.bind(this);
                    this._closeMethod = this.close.bind(this);
                    this._isOpen = configs.IsExpanded;
                    this._iOSStopPropagation = (e) => {
                        e.stopPropagation();
                    };
                }
                _checkIfInsideBottomBar() {
                    const bottomBar = this._floatingActions.closest(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.ActiveScreen + ' ' + OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.BottomBar);
                    this._bottomBar = document.querySelector(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.ActiveScreen + ' ' + OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.BottomBar);
                    if (this._bottomBar && this._floatingActions) {
                        this._insideBottomBar = bottomBar === undefined;
                    }
                    if (!this._insideBottomBar && this._floatingActions) {
                        if (this._bottomBar) {
                            this._insideBottomBar = true;
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._floatingActions, FloatingActions_1.Enum.CssClasses.BottomBarExists);
                        }
                    }
                }
                _handleEscException(e) {
                    if (e.key === OSUIFramework.GlobalEnum.Keycodes.Escape) {
                        if (this.configs.IsHover) {
                            this._floatingActionsButton.removeEventListener('focus', this._eventToggleClick);
                        }
                        this._toggleClick();
                        if (this.configs.IsHover) {
                            this._floatingActionsButton.addEventListener('focus', this._eventToggleClick);
                        }
                    }
                    this._setFocusTrap(e);
                }
                _onButtonKeypress(e) {
                    if (e.key === OSUIFramework.GlobalEnum.Keycodes.Escape &&
                        OSUIFramework.Helper.Dom.Styles.ContainsClass(this._floatingActions, FloatingActions_1.Enum.CssClasses.Open)) {
                        this._toggleClick();
                    }
                    if (e.key === OSUIFramework.GlobalEnum.Keycodes.Enter || e.key === OSUIFramework.GlobalEnum.Keycodes.Space) {
                        this._toggleClick();
                    }
                    this._setFocusTrap(e);
                }
                _refreshFloatingActionItems() {
                    let floatingItemIds = [];
                    this._floatingActionsItems.forEach((item) => {
                        if (this._floatingItems.has(item.getAttribute('name')))
                            floatingItemIds.push(item.getAttribute('name'));
                    });
                    floatingItemIds.reverse();
                    floatingItemIds.forEach((name, index) => {
                        const floatingActionItem = this._floatingItems.get(name);
                        if (floatingActionItem)
                            floatingActionItem.setAnimationDelay(index + 1);
                    });
                }
                _setAccessibility() {
                    if (this._floatingActionsItem)
                        OSUIFramework.Helper.Dom.Attribute.Set(this._floatingActionsItem, OSUIFramework.Constants.A11YAttributes.Aria.Hidden, (!this._isOpen).toString());
                    OSUIFramework.Helper.Dom.Attribute.Set(this._floatingActionsButton, OSUIFramework.Constants.A11YAttributes.Aria.Expanded, this._isOpen.toString());
                    this._floatingAllLinks = [...this._floatingActions.querySelectorAll(OSUIFramework.GlobalEnum.HTMLElement.Link)];
                    if (this._floatingAllLinks.length > 0) {
                        this._floatingAllLinks.forEach((item) => {
                            OSUIFramework.Helper.Dom.Attribute.Set(item, OSUIFramework.Constants.A11YAttributes.TabIndex, this._isOpen
                                ? OSUIFramework.Constants.A11YAttributes.States.TabIndexShow
                                : OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden);
                        });
                    }
                }
                _setClasses() {
                    const floatingOverlay = document.querySelector(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.FloatingOverlay);
                    if (this._isOpen) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._floatingActions, FloatingActions_1.Enum.CssClasses.Open);
                        OSUIFramework.Helper.Dom.Styles.AddClass(floatingOverlay, FloatingActions_1.Enum.CssClasses.Open);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._floatingActions, FloatingActions_1.Enum.CssClasses.Open);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(floatingOverlay, FloatingActions_1.Enum.CssClasses.Open);
                    }
                }
                _setFocusTrap(e) {
                    const isShiftKey = e.shiftKey;
                    const isTabKey = e.key === OSUIFramework.GlobalEnum.Keycodes.Tab;
                    if (isShiftKey && isTabKey) {
                        if (document.activeElement === this._floatingActionsButton) {
                            const link = this._lastButton.querySelector('a');
                            if (link) {
                                link.focus();
                            }
                            else {
                                this._lastButton.focus();
                            }
                            e.preventDefault();
                        }
                        else if (document.activeElement === this._firstButton) {
                            this._floatingActionsButton.focus();
                            e.preventDefault();
                        }
                    }
                    else if (isTabKey) {
                        if (document.activeElement === this._floatingActionsButton) {
                            this._firstButton.focus();
                            e.preventDefault();
                        }
                    }
                }
                _setIsExpanded(IsExpanded) {
                    this.configs.IsExpanded = IsExpanded;
                    this._isOpen = IsExpanded;
                    this._setClasses();
                    this._setUpEvents();
                }
                _setIsHover(IsHover) {
                    this.configs.IsHover = IsHover;
                    this._setUpEvents();
                }
                _setTabIndex(value) {
                    this._floatingItems.forEach((item) => {
                        item.setTabindex(value);
                    });
                }
                _setUpEvents() {
                    if (this.configs.IsHover) {
                        if (this.configs.IsExpanded) {
                            this._floatingActions.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                        }
                        else {
                            this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventToggleClick);
                        }
                        this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventToggleClick);
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventToggleClick);
                    }
                    else {
                        this._isIOS = !!document.querySelector(OSUIFramework.Constants.Dot + OSUIFramework.GlobalEnum.MobileOS.IOS);
                        if (this._isIOS) {
                            this._floatingActionsItem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._iOSStopPropagation);
                        }
                        this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventToggleClick);
                        this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventkeyboard);
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventToggleClick);
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventToggleClick);
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                    }
                    this._floatingActionsItem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._escException);
                }
                _setUpFloatingActions() {
                    this._floatingActionsButton = this._floatingActions.querySelector(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.FloatingActionsButton);
                    this._floatingActionsItem = this._floatingActions.querySelector(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.FloatingActionsItems);
                    this._floatingActionsItems = [
                        ...this._floatingActions.querySelectorAll(OSUIFramework.Constants.Dot + FloatingActions_1.Enum.CssClasses.FloatingActionItem),
                    ];
                    this._firstButton = this._floatingActionsItems[0];
                    this._lastButton = this._floatingActionsItems[this._floatingActionsItems.length - 1];
                    if (this._isOpen) {
                        this._setTabIndex('0');
                    }
                    this._refreshFloatingActionItems();
                }
                _toggleClick() {
                    this._isOpen ? this.close() : this.open();
                }
                _triggerOnClickEvent() {
                    if (this._onClick !== undefined) {
                        setTimeout(() => {
                            this._onClick(this.widgetId);
                        }, 0);
                    }
                }
                addFloatingActionItem(uniqueId, floatingActionItem) {
                    this._floatingItems.set(uniqueId, floatingActionItem);
                    if (this.isBuilt) {
                        this._setUpFloatingActions();
                    }
                }
                build() {
                    super.build();
                    this._floatingActions = this._selfElem;
                    this._setUpFloatingActions();
                    this._setClasses();
                    this._checkIfInsideBottomBar();
                    this._setAccessibility();
                    this._setUpEvents();
                    super.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    switch (propertyName) {
                        case FloatingActions_1.Enum.Properties.IsHover:
                            this._setIsHover(propertyValue.toLowerCase() === 'true');
                            break;
                        case FloatingActions_1.Enum.Properties.IsExpanded:
                            this._setIsExpanded(propertyValue.toLowerCase() === 'true');
                            break;
                        default:
                            super.changeProperty(propertyName, propertyValue);
                            break;
                    }
                }
                close() {
                    this._isOpen = false;
                    this._floatingActionsButton.focus();
                    this._setTabIndex(OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden);
                    if (this.configs.IsHover) {
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventToggleClick);
                        this._floatingActions.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                        this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventToggleClick);
                        this._floatingActionsButton.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventToggleClick);
                    }
                    this._setAccessibility();
                    this._setClasses();
                    this._triggerOnClickEvent();
                }
                dispose() {
                    if (this.configs.IsHover) {
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                        this._floatingActions.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                    }
                    else {
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventToggleClick);
                    }
                    this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventkeyboard);
                    this._floatingActionsItem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._escException);
                    if (this._isIOS) {
                        this._floatingActionsItem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._iOSStopPropagation);
                    }
                    super.dispose();
                }
                open() {
                    const firstItem = this._firstButton;
                    this._isOpen = true;
                    this._setTabIndex(OSUIFramework.Constants.A11YAttributes.States.TabIndexShow);
                    if (firstItem) {
                        firstItem.focus();
                    }
                    if (this.configs.IsHover) {
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventToggleClick);
                        this._floatingActions.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventToggleClick);
                        this._floatingActionsButton.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventToggleClick);
                    }
                    this._setAccessibility();
                    this._setClasses();
                    this._triggerOnClickEvent();
                }
                registerCallback(callback) {
                    this._onClick = callback;
                }
                removeFloatingActionItem(floatingActionItemId) {
                    this._floatingItems.delete(floatingActionItemId);
                    this._refreshFloatingActionItems();
                }
                get floatingActionItems() {
                    return this._floatingItems;
                }
            }
            FloatingActions_1.FloatingActions = FloatingActions;
        })(FloatingActions = Patterns.FloatingActions || (Patterns.FloatingActions = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FloatingActions;
        (function (FloatingActions) {
            class FloatingActionsConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            FloatingActions.FloatingActionsConfig = FloatingActionsConfig;
        })(FloatingActions = Patterns.FloatingActions || (Patterns.FloatingActions = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FloatingActionsItem;
        (function (FloatingActionsItem_1) {
            class FloatingActionsItem extends Patterns.AbstractPattern {
                constructor(uniqueId, configs, floatingParent) {
                    super(uniqueId, new FloatingActionsItem_1.FloatingActionsItemConfig(configs));
                    this._floatingParent = floatingParent;
                }
                build() {
                    super.build();
                    super.finishBuild();
                }
                dispose() {
                    var _a;
                    (_a = this._floatingParent) === null || _a === void 0 ? void 0 : _a.removeFloatingActionItem(this.uniqueId);
                    super.dispose();
                }
                setAnimationDelay(value) {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, 'style', '--delay: ' + value.toString());
                }
                setTabindex(value) {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.TabIndex, value);
                }
            }
            FloatingActionsItem_1.FloatingActionsItem = FloatingActionsItem;
        })(FloatingActionsItem = Patterns.FloatingActionsItem || (Patterns.FloatingActionsItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var FloatingActionsItem;
        (function (FloatingActionsItem) {
            class FloatingActionsItemConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            FloatingActionsItem.FloatingActionsItemConfig = FloatingActionsItemConfig;
        })(FloatingActionsItem = Patterns.FloatingActionsItem || (Patterns.FloatingActionsItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Gallery;
        (function (Gallery) {
            var Enum;
            (function (Enum) {
                let CssVariables;
                (function (CssVariables) {
                    CssVariables["PatternItemsDesktop"] = "--gallery-desktop-items";
                    CssVariables["PatternItemsTablet"] = "--gallery-tablet-items";
                    CssVariables["PatternItemsPhone"] = "--gallery-phone-items";
                    CssVariables["PatternItemsGap"] = "--gallery-gap";
                    CssVariables["PatternListItemsDesktop"] = "--gallery-list-desktop-items";
                    CssVariables["PatternListItemsTablet"] = "--gallery-list-tablet-items";
                    CssVariables["PatternListItemsPhone"] = "--gallery-list-phone-items";
                })(CssVariables = Enum.CssVariables || (Enum.CssVariables = {}));
                let Properties;
                (function (Properties) {
                    Properties["ItemsGap"] = "ItemsGap";
                    Properties["RowItemsDesktop"] = "RowItemsDesktop";
                    Properties["RowItemsPhone"] = "RowItemsPhone";
                    Properties["RowItemsTablet"] = "RowItemsTablet";
                    Properties[Properties["MinRowItemsAllowed"] = 1] = "MinRowItemsAllowed";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = Gallery.Enum || (Gallery.Enum = {}));
        })(Gallery = Patterns.Gallery || (Patterns.Gallery = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Gallery;
        (function (Gallery_1) {
            class Gallery extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Gallery_1.GalleryConfig(configs));
                }
                _setItemsGap() {
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternItemsGap, `var(--space-${this.configs.ItemsGap})`);
                }
                _setRowItemsDesktop() {
                    if (this.configs.RowItemsDesktop < Gallery_1.Enum.Properties.MinRowItemsAllowed) {
                        this.configs.RowItemsDesktop = Gallery_1.Enum.Properties.MinRowItemsAllowed;
                        console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.Gallery} (${this.widgetId}): The value of the ${Gallery_1.Enum.Properties.RowItemsDesktop} property is less than supported (${Gallery_1.Enum.Properties.MinRowItemsAllowed}). To ensure the correct behaviour, set a value greater than ${OSUIFramework.Constants.ZeroValue}.`);
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternItemsDesktop, this.configs.RowItemsDesktop);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternListItemsDesktop, this.configs.RowItemsDesktop);
                }
                _setRowItemsPhone() {
                    if (this.configs.RowItemsPhone < Gallery_1.Enum.Properties.MinRowItemsAllowed) {
                        this.configs.RowItemsPhone = Gallery_1.Enum.Properties.MinRowItemsAllowed;
                        console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.Gallery} (${this.widgetId}): The value of the ${Gallery_1.Enum.Properties.RowItemsPhone} property is less than supported (${Gallery_1.Enum.Properties.MinRowItemsAllowed}). To ensure the correct behaviour, set a value greater than ${OSUIFramework.Constants.ZeroValue}.`);
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternItemsPhone, this.configs.RowItemsPhone);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternListItemsPhone, this.configs.RowItemsPhone);
                }
                _setRowItemsTablet() {
                    if (this.configs.RowItemsTablet < Gallery_1.Enum.Properties.MinRowItemsAllowed) {
                        this.configs.RowItemsTablet = Gallery_1.Enum.Properties.MinRowItemsAllowed;
                        console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.Gallery} (${this.widgetId}): The value of the ${Gallery_1.Enum.Properties.RowItemsTablet} property is less than supported (${Gallery_1.Enum.Properties.MinRowItemsAllowed}). To ensure the correct behaviour, set a value greater than ${OSUIFramework.Constants.ZeroValue}.`);
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternItemsTablet, this.configs.RowItemsTablet);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Gallery_1.Enum.CssVariables.PatternListItemsTablet, this.configs.RowItemsTablet);
                }
                build() {
                    super.build();
                    this._setRowItemsDesktop();
                    this._setRowItemsTablet();
                    this._setRowItemsPhone();
                    this._setItemsGap();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Gallery_1.Enum.Properties.RowItemsDesktop:
                                this._setRowItemsDesktop();
                                break;
                            case Gallery_1.Enum.Properties.RowItemsTablet:
                                this._setRowItemsTablet();
                                break;
                            case Gallery_1.Enum.Properties.RowItemsPhone:
                                this._setRowItemsPhone();
                                break;
                            case Gallery_1.Enum.Properties.ItemsGap:
                                this._setItemsGap();
                                break;
                        }
                    }
                }
            }
            Gallery_1.Gallery = Gallery;
        })(Gallery = Patterns.Gallery || (Patterns.Gallery = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Gallery;
        (function (Gallery) {
            class GalleryConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            Gallery.GalleryConfig = GalleryConfig;
        })(Gallery = Patterns.Gallery || (Patterns.Gallery = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Notification;
        (function (Notification) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["Pattern"] = "osui-notification";
                    CssClass["PatternIsOpen"] = "osui-notification--is-open";
                    CssClass["PatternPosition"] = "osui-notification--is-";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let CssProperty;
                (function (CssProperty) {
                    CssProperty["Width"] = "--notification-width";
                })(CssProperty = Enum.CssProperty || (Enum.CssProperty = {}));
                let Defaults;
                (function (Defaults) {
                    Defaults["DefaultPosition"] = "top";
                    Defaults["DefaultWidth"] = "370px";
                })(Defaults = Enum.Defaults || (Enum.Defaults = {}));
                let Events;
                (function (Events) {
                    Events["OnInitialize"] = "Initialized";
                    Events["OnToggle"] = "OnToggle";
                })(Events = Enum.Events || (Enum.Events = {}));
                let Properties;
                (function (Properties) {
                    Properties["CloseAfterTime"] = "CloseAfterTime";
                    Properties["InteractToClose"] = "InteractToClose";
                    Properties["NeedsSwipes"] = "NeedsSwipes";
                    Properties["Position"] = "Position";
                    Properties["StartsOpen"] = "StartsOpen";
                    Properties["Width"] = "Width";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = Notification.Enum || (Notification.Enum = {}));
        })(Notification = Patterns.Notification || (Patterns.Notification = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Notification;
        (function (Notification) {
            class Open extends OSUIFramework.Event.AbstractEvent {
            }
            Notification.Open = Open;
        })(Notification = Patterns.Notification || (Patterns.Notification = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Notification;
        (function (Notification_1) {
            class Notification extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Notification_1.NotificationConfig(configs));
                    this.configs.Width = this.configs.Width !== '' ? this.configs.Width : Notification_1.Enum.Defaults.DefaultWidth;
                    this.configs.Position =
                        this.configs.Position !== '' ? this.configs.Position : Notification_1.Enum.Defaults.DefaultPosition;
                    this._isOpen = this.configs.StartsOpen;
                }
                _autoCloseNotification() {
                    setTimeout(() => {
                        if (this._isOpen) {
                            this.hide();
                        }
                    }, this.configs.CloseAfterTime);
                }
                _clickCallback(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    this.hide();
                }
                _hideNotification() {
                    this._isOpen = false;
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Notification_1.Enum.CssClass.PatternIsOpen);
                    this._triggerOnToggleEvent(this._isOpen);
                    this._updateA11yProperties();
                    this._selfElem.blur();
                    this._focusableActiveElement.focus();
                    if (OSUIFramework.Helper.DeviceInfo.IsNative === false && this.configs.InteractToClose) {
                        this._selfElem.removeEventListener(this._eventType, this._eventOnClick);
                        this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnKeypress);
                    }
                }
                _keypressCallback(e) {
                    const isEscapedPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Escape;
                    const isShiftPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Shift;
                    const isTabPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Tab;
                    if (!isTabPressed && !isShiftPressed && !isEscapedPressed) {
                        return;
                    }
                    if (document.activeElement === this._selfElem) {
                        if (!this._lastFocusableElement) {
                            this._selfElem.focus();
                        }
                        else {
                            this._lastFocusableElement.focus();
                        }
                        e.preventDefault();
                    }
                    if (isEscapedPressed && this._isOpen) {
                        this.hide();
                    }
                    if (isShiftPressed) {
                        if (document.activeElement === this._firstFocusableElement) {
                            this._lastFocusableElement.focus();
                            e.preventDefault();
                        }
                    }
                    else if (document.activeElement === this._lastFocusableElement) {
                        this._firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
                _removeEvents() {
                    this._selfElem.removeEventListener(this._eventType, this._eventOnClick);
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnKeypress);
                }
                _showNotification() {
                    this._focusableActiveElement = document.activeElement;
                    this._isOpen = true;
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Notification_1.Enum.CssClass.PatternIsOpen);
                    this._triggerOnToggleEvent(this._isOpen);
                    this._updateA11yProperties();
                    if (OSUIFramework.Helper.DeviceInfo.IsNative === false && this.configs.InteractToClose) {
                        this._selfElem.addEventListener(this._eventType, this._eventOnClick);
                    }
                    this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnKeypress);
                    this._selfElem.focus();
                    if (this.configs.CloseAfterTime > 0) {
                        this._autoCloseNotification();
                    }
                }
                _triggerOnToggleEvent(isOpen) {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventOnToggle, this.widgetId, isOpen);
                }
                _updateA11yProperties() {
                    const setA11YtabIndex = this._isOpen ? OSUIFramework.Helper.A11Y.TabIndexTrue : OSUIFramework.Helper.A11Y.TabIndexFalse;
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Aria.Hidden, (!this._isOpen).toString());
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.TabIndex, this._isOpen
                        ? OSUIFramework.Constants.A11YAttributes.States.TabIndexShow
                        : OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden);
                    for (const item of this._focusableElements) {
                        setA11YtabIndex(item);
                    }
                }
                _updateCloseAfterTime(value) {
                    this.configs.CloseAfterTime = value;
                    if (this._isOpen) {
                        this._autoCloseNotification();
                    }
                }
                _updateInteractToClose(value) {
                    if (this.configs.InteractToClose !== value) {
                        this.configs.InteractToClose = value;
                        if (OSUIFramework.Helper.DeviceInfo.IsNative === false) {
                            if (this.configs.InteractToClose) {
                                this._selfElem.addEventListener(this._eventType, this._eventOnClick);
                            }
                            else {
                                this._selfElem.removeEventListener(this._eventType, this._eventOnClick);
                            }
                        }
                    }
                }
                _updatePosition(position) {
                    if (this.configs.Position !== position) {
                        if (this.configs.Position !== '') {
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Notification_1.Enum.CssClass.PatternPosition + position);
                        }
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Notification_1.Enum.CssClass.PatternPosition + this.configs.Position);
                    }
                }
                _updateWidth(width) {
                    this.configs.Width = width;
                    if (width !== '') {
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Notification_1.Enum.CssProperty.Width, width);
                        this.configs.Width = width;
                    }
                }
                setA11YProperties() {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Alert);
                    this._updateA11yProperties();
                }
                setCallbacks() {
                    this._eventOnClick = this._clickCallback.bind(this);
                    this._eventOnKeypress = this._keypressCallback.bind(this);
                }
                setHtmlElements() {
                    this._focusableElements = [...this._selfElem.querySelectorAll(OSUIFramework.Constants.FocusableElems)];
                    this._firstFocusableElement = this._focusableElements[0];
                    this._lastFocusableElement = this._focusableElements[this._focusableElements.length - 1];
                    this.setA11YProperties();
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventOnInitialize, this.widgetId);
                }
                setInitialStates() {
                    if (OSUIFramework.Helper.DeviceInfo.IsTouch) {
                        this._eventType = OSUIFramework.GlobalEnum.HTMLEvent.TouchStart;
                    }
                    else {
                        this._eventType = OSUIFramework.GlobalEnum.HTMLEvent.Click;
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Notification_1.Enum.CssProperty.Width, this.configs.Width);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Notification_1.Enum.CssClass.PatternPosition + this.configs.Position);
                    if (this._isOpen) {
                        this._showNotification();
                    }
                    if (this.configs.CloseAfterTime > 0 && this._isOpen) {
                        this._autoCloseNotification();
                    }
                }
                unsetCallbacks() {
                    if (OSUIFramework.Helper.DeviceInfo.IsNative === false && this.configs.InteractToClose) {
                        this._removeEvents();
                        this._eventOnClick = undefined;
                        this._eventOnKeypress = undefined;
                    }
                }
                unsetHtmlElements() {
                    this._firstFocusableElement = undefined;
                    this._focusableElements = undefined;
                    this._lastFocusableElement = undefined;
                    this._platformEventOnInitialize = undefined;
                    this._platformEventOnToggle = undefined;
                }
                build() {
                    super.build();
                    OSUIFramework.Helper.AsyncInvocation(this.setInitialStates.bind(this));
                    this.setCallbacks();
                    this.setHtmlElements();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    const _oldNotificationPosition = this.configs.Position;
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Notification_1.Enum.Properties.InteractToClose:
                                this._updateInteractToClose(propertyValue);
                                break;
                            case Notification_1.Enum.Properties.CloseAfterTime:
                                this._updateCloseAfterTime(propertyValue);
                                break;
                            case Notification_1.Enum.Properties.StartsOpen:
                                console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.Notification} (${this.widgetId}): changes to ${Notification_1.Enum.Properties.StartsOpen} parameter do not affect the ${OSUIFramework.GlobalEnum.PatternsNames.Notification}. Use the client actions 'NotificationShow' and 'NotificationHide' to affect the ${OSUIFramework.GlobalEnum.PatternsNames.Notification}.`);
                                break;
                            case Notification_1.Enum.Properties.Position:
                                this._updatePosition(_oldNotificationPosition);
                                break;
                            case Notification_1.Enum.Properties.Width:
                                this._updateWidth(propertyValue);
                                break;
                            case OSUIFramework.GlobalEnum.CommonPatternsProperties.ExtendedClass:
                                OSUIFramework.Helper.Dom.Styles.ExtendedClass(this._selfElem, this.configs.ExtendedClass, propertyValue);
                                break;
                        }
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                hide() {
                    if (this._isOpen) {
                        this._hideNotification();
                    }
                }
                onSwipeBottom() {
                    if (this.configs.Position === OSUIFramework.GlobalEnum.Position.Bottom ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.BottomLeft ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.BottomRight ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.Center) {
                        this.hide();
                    }
                }
                onSwipeLeft() {
                    if (this.configs.Position === OSUIFramework.GlobalEnum.Position.Left ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.BottomLeft ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.TopLeft) {
                        this.hide();
                    }
                }
                onSwipeRight() {
                    if (this.configs.Position === OSUIFramework.GlobalEnum.Position.Right ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.BottomRight ||
                        this.configs.Position === OSUIFramework.GlobalEnum.Position.TopRight) {
                        this.hide();
                    }
                }
                onSwipeTop() {
                    this.hide();
                }
                registerProviderCallback(eventName, callback) {
                    switch (eventName) {
                        case Patterns.Notification.Enum.Events.OnInitialize:
                            if (this._platformEventOnInitialize === undefined) {
                                this._platformEventOnInitialize = callback;
                            }
                            break;
                        case Patterns.Notification.Enum.Events.OnToggle:
                            if (this._platformEventOnToggle === undefined) {
                                this._platformEventOnToggle = callback;
                            }
                            break;
                        default:
                            throw new Error(`${OSUIFramework.ErrorCodes.Notification.FailRegisterCallback}:	The given '${eventName}' event name is not defined.`);
                    }
                }
                show() {
                    if (this._isOpen === false) {
                        this._showNotification();
                    }
                }
            }
            Notification_1.Notification = Notification;
        })(Notification = Patterns.Notification || (Patterns.Notification = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Notification;
        (function (Notification) {
            class NotificationConfig extends Patterns.AbstractConfiguration {
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== Notification.Enum.Properties.StartsOpen;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Notification.Enum.Properties.InteractToClose:
                            validatedValue = this.validateBoolean(value, true);
                            break;
                        case Notification.Enum.Properties.NeedsSwipes:
                        case Notification.Enum.Properties.StartsOpen:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case Notification.Enum.Properties.Position:
                            validatedValue = this.validateString(value, Notification.Enum.Defaults.DefaultPosition);
                            break;
                        case Notification.Enum.Properties.Width:
                            validatedValue = this.validateString(value, Notification.Enum.Defaults.DefaultWidth);
                            break;
                        case Notification.Enum.Properties.CloseAfterTime:
                            validatedValue = this.validateNumber(value, undefined);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Notification.NotificationConfig = NotificationConfig;
        })(Notification = Patterns.Notification || (Patterns.Notification = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            class AbstractProgress extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
                _setAccessibilityProps() {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.TabIndex, '0');
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Progressbar);
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Aria.Label, 'progress');
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Aria.ValueMin, Progress.ProgressEnum.Properties.MinProgressValue);
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Aria.ValueMax, Progress.ProgressEnum.Properties.MaxProgressValue);
                }
                updateValueNow(progressValue) {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, 'aria-valuenow', progressValue);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.ProgressValue, progressValue + OSUIFramework.GlobalEnum.Units.Percentage);
                }
                build() {
                    super.build();
                    this._setAccessibilityProps();
                }
                setProgressValue(value) {
                    this.setElementProgressValue(value);
                }
            }
            Progress.AbstractProgress = AbstractProgress;
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            class ProgressConfiguration extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            Progress.ProgressConfiguration = ProgressConfiguration;
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var ProgressEnum;
            (function (ProgressEnum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["AddInitialAnimation"] = "animate-entrance";
                    CssClass["AnimateProgressChange"] = "animate-progress-change";
                    CssClass["Container"] = "osui-progress-bar__container";
                })(CssClass = ProgressEnum.CssClass || (ProgressEnum.CssClass = {}));
                let InlineStyleProp;
                (function (InlineStyleProp) {
                    InlineStyleProp["ProgressColor"] = "--progress-color";
                    InlineStyleProp["ProgressValue"] = "--progress-value";
                    InlineStyleProp["Shape"] = "--shape";
                    InlineStyleProp["Thickness"] = "--thickness";
                    InlineStyleProp["TrailColor"] = "--trail-color";
                })(InlineStyleProp = ProgressEnum.InlineStyleProp || (ProgressEnum.InlineStyleProp = {}));
                let Properties;
                (function (Properties) {
                    Properties["ExtendedClass"] = "ExtendedClass";
                    Properties[Properties["MaxProgressValue"] = 100] = "MaxProgressValue";
                    Properties[Properties["MinProgressValue"] = 0] = "MinProgressValue";
                    Properties["Progress"] = "Progress";
                    Properties["ProgressColor"] = "ProgressColor";
                    Properties["Shape"] = "Shape";
                    Properties["Thickness"] = "Thickness";
                    Properties["TrailColor"] = "TrailColor";
                })(Properties = ProgressEnum.Properties || (ProgressEnum.Properties = {}));
                let ProgressTypes;
                (function (ProgressTypes) {
                    ProgressTypes["Bar"] = "Bar";
                    ProgressTypes["Circle"] = "Circle";
                })(ProgressTypes = ProgressEnum.ProgressTypes || (ProgressEnum.ProgressTypes = {}));
                let ShapeTypes;
                (function (ShapeTypes) {
                    ShapeTypes["Round"] = "round";
                    ShapeTypes["Rounded"] = "rounded";
                    ShapeTypes["Soft"] = "soft";
                    ShapeTypes["Sharp"] = "sharp";
                })(ShapeTypes = ProgressEnum.ShapeTypes || (ProgressEnum.ShapeTypes = {}));
            })(ProgressEnum = Progress.ProgressEnum || (Progress.ProgressEnum = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Factory;
            (function (Factory) {
                function NewProgress(progressId, type, configs) {
                    let _progressItem = null;
                    switch (type) {
                        case Progress.ProgressEnum.ProgressTypes.Circle:
                            _progressItem = new OSUIFramework.Patterns.Progress.Circle.Circle(progressId, JSON.parse(configs));
                            break;
                        case Progress.ProgressEnum.ProgressTypes.Bar:
                            _progressItem = new OSUIFramework.Patterns.Progress.Bar.Bar(progressId, JSON.parse(configs));
                            break;
                        default:
                            throw new Error(`There is any Progress of ${type} type`);
                            break;
                    }
                    return _progressItem;
                }
                Factory.NewProgress = NewProgress;
            })(Factory = Progress.Factory || (Progress.Factory = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Bar;
            (function (Bar_1) {
                class Bar extends Progress.AbstractProgress {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new Bar_1.ProgressBarConfig(configs));
                    }
                    _animateEntranceEnd() {
                        this._progressElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventAnimateEntranceEnd);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._progressElem, Progress.ProgressEnum.CssClass.AddInitialAnimation);
                    }
                    _setCssVariables() {
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Thickness, this.configs.Thickness + OSUIFramework.GlobalEnum.Units.Pixel);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.ProgressColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.ProgressColor));
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Shape, OSUIFramework.Helper.Dom.Styles.GetBorderRadiusValueFromShapeType(this.configs.Shape));
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.TrailColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.TrailColor));
                    }
                    _updateProgressColor(value) {
                        this.configs.ProgressColor = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.ProgressColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.ProgressColor));
                    }
                    _updateProgressValue() {
                        this.updateValueNow(this.configs.Progress.toString());
                    }
                    _updateShape(value) {
                        this.configs.Shape = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Shape, OSUIFramework.Helper.Dom.Styles.GetBorderRadiusValueFromShapeType(this.configs.Shape));
                    }
                    _updateThickness(value) {
                        this.configs.Thickness = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Thickness, value + OSUIFramework.GlobalEnum.Units.Pixel);
                    }
                    _updateTrailColor(value) {
                        this.configs.TrailColor = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.TrailColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.TrailColor));
                    }
                    addInitialAnimation() {
                        if (this.configs.AnimateInitialProgress) {
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._progressElem, Progress.ProgressEnum.CssClass.AddInitialAnimation);
                            this._progressElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventAnimateEntranceEnd);
                        }
                        this.setElementProgressValue(this.configs.Progress);
                    }
                    setCallbacks() {
                        this._eventAnimateEntranceEnd = this._animateEntranceEnd.bind(this);
                    }
                    setElementProgressValue(value) {
                        if (value < Progress.ProgressEnum.Properties.MinProgressValue) {
                            this.configs.Progress = Progress.ProgressEnum.Properties.MinProgressValue;
                            console.warn(`The value of the Progress property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.ProgressBar} can't be smaller than '${Progress.ProgressEnum.Properties.MinProgressValue}'.`);
                        }
                        else if (value > Progress.ProgressEnum.Properties.MaxProgressValue) {
                            this.configs.Progress = Progress.ProgressEnum.Properties.MaxProgressValue;
                            console.warn(`The value of the Progress property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.ProgressBar} is higher than supported (${Progress.ProgressEnum.Properties.MaxProgressValue}).`);
                        }
                        else {
                            this.configs.Progress = value;
                        }
                        this._updateProgressValue();
                    }
                    setHtmlElements() {
                        this._progressElem = this._selfElem.querySelector(OSUIFramework.Constants.Dot + Progress.ProgressEnum.CssClass.Container);
                    }
                    unsetCallbacks() {
                        this._eventAnimateEntranceEnd = undefined;
                    }
                    unsetHtmlElements() {
                        this._progressElem = undefined;
                    }
                    build() {
                        super.build();
                        this.setHtmlElements();
                        this._setCssVariables();
                        this.setCallbacks();
                        OSUIFramework.Helper.AsyncInvocation(this.addInitialAnimation.bind(this));
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        switch (propertyName) {
                            case Progress.ProgressEnum.Properties.Thickness:
                                this._updateThickness(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.Progress:
                                this.setElementProgressValue(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.ProgressColor:
                                this._updateProgressColor(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.Shape:
                                this._updateShape(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.TrailColor:
                                this._updateTrailColor(propertyValue);
                                break;
                        }
                    }
                    dispose() {
                        this.unsetHtmlElements();
                        this.unsetCallbacks();
                        super.dispose();
                    }
                }
                Bar_1.Bar = Bar;
            })(Bar = Progress.Bar || (Progress.Bar = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Bar;
            (function (Bar) {
                class ProgressBarConfig extends Progress.ProgressConfiguration {
                    constructor(config) {
                        super(config);
                    }
                }
                Bar.ProgressBarConfig = ProgressBarConfig;
            })(Bar = Progress.Bar || (Progress.Bar = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Circle;
            (function (Circle) {
                var Enum;
                (function (Enum) {
                    let CssClass;
                    (function (CssClass) {
                        CssClass["Progress"] = "osui-progress-circle__container__progress-path";
                        CssClass["Trail"] = "osui-progress-circle__container__trail-path";
                    })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                    let InlineStyleProp;
                    (function (InlineStyleProp) {
                        InlineStyleProp["CircleRadius"] = "--radius";
                        InlineStyleProp["CircleSize"] = "--circle-size";
                        InlineStyleProp["StrokeDasharray"] = "--stroke-dasharray";
                        InlineStyleProp["StrokeDashoffset"] = "--stroke-dashoffset";
                    })(InlineStyleProp = Enum.InlineStyleProp || (Enum.InlineStyleProp = {}));
                })(Enum = Circle.Enum || (Circle.Enum = {}));
            })(Circle = Progress.Circle || (Progress.Circle = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Circle;
            (function (Circle_1) {
                class Circle extends Progress.AbstractProgress {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new Circle_1.ProgressCircleConfig(configs));
                        this._circletSize = 0;
                    }
                    _addResizeOberser() {
                        this._resizeObserver = new ResizeObserver((entries) => {
                            requestAnimationFrame(() => {
                                if (!Array.isArray(entries) || !entries.length) {
                                    return;
                                }
                                this._updateCircleProps();
                            });
                        });
                        this._resizeObserver.observe(this._selfElem);
                    }
                    _animateEntranceEnd() {
                        this._progressSvgElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._animateEntranceEnd);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._progressSvgElem, Progress.ProgressEnum.CssClass.AddInitialAnimation);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._progressSvgElem, Progress.ProgressEnum.CssClass.AnimateProgressChange);
                        if (!this._resizeObserver) {
                            this._addResizeOberser();
                        }
                    }
                    _progressToOffset() {
                        const _elementSize = this._selfElem.parentElement.clientHeight < this._selfElem.parentElement.clientWidth
                            ? this._selfElem.parentElement.clientHeight
                            : this._selfElem.parentElement.clientWidth;
                        if (this._selfElem.clientHeight < this._selfElem.parentElement.clientWidth) {
                            this._circletSize = this._selfElem.parentElement.clientWidth;
                        }
                        else {
                            this._circletSize = _elementSize;
                        }
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Circle_1.Enum.InlineStyleProp.CircleSize, this._circletSize + OSUIFramework.GlobalEnum.Units.Pixel);
                        const _radius = Math.floor(this._circletSize / 2 - this.configs.Thickness / 2);
                        this._circleCircumference = _radius * 2 * Math.PI;
                        this._strokeDashoffset = this._strokeDasharray = this._circleCircumference;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Circle_1.Enum.InlineStyleProp.CircleRadius, _radius + OSUIFramework.GlobalEnum.Units.Pixel);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Circle_1.Enum.InlineStyleProp.StrokeDasharray, this._strokeDasharray);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Circle_1.Enum.InlineStyleProp.StrokeDashoffset, this._strokeDashoffset);
                        if (!this.isBuilt) {
                            OSUIFramework.Helper.AsyncInvocation(this.addInitialAnimation.bind(this));
                        }
                    }
                    _setCssVariables() {
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Thickness, this.configs.Thickness + OSUIFramework.GlobalEnum.Units.Pixel);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.ProgressColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.ProgressColor));
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Shape, this.configs.Shape === OSUIFramework.GlobalEnum.ShapeTypes.Sharp
                            ? Progress.ProgressEnum.ShapeTypes.Sharp
                            : Progress.ProgressEnum.ShapeTypes.Round);
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.TrailColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.TrailColor));
                    }
                    _updateCircleProps() {
                        this._progressToOffset();
                        this._updateProgressValue();
                    }
                    _updateProgressValue() {
                        if (this.configs.Progress < Progress.ProgressEnum.Properties.MinProgressValue) {
                            this.configs.Progress = Progress.ProgressEnum.Properties.MinProgressValue;
                            console.warn(`The value of the Progress property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.ProgressCircle} can't be smaller than '${Progress.ProgressEnum.Properties.MinProgressValue}'.`);
                        }
                        if (this.configs.Progress > Progress.ProgressEnum.Properties.MaxProgressValue) {
                            this.configs.Progress = Progress.ProgressEnum.Properties.MaxProgressValue;
                            console.warn(`The value of the Progress property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.ProgressCircle} is higher than supported (${Progress.ProgressEnum.Properties.MaxProgressValue}).`);
                        }
                        this.updateValueNow(this.configs.Progress.toString());
                        this._strokeDashoffset =
                            this._circleCircumference - (this.configs.Progress / 100) * this._circleCircumference;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Circle_1.Enum.InlineStyleProp.StrokeDashoffset, this._strokeDashoffset);
                    }
                    addInitialAnimation() {
                        if (this.configs.AnimateInitialProgress) {
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._progressSvgElem, Progress.ProgressEnum.CssClass.AddInitialAnimation);
                            this._progressSvgElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventAnimateEntranceEnd);
                            this._updateProgressValue();
                        }
                        else {
                            this._addResizeOberser();
                        }
                    }
                    setCallbacks() {
                        this._eventAnimateEntranceEnd = this._animateEntranceEnd.bind(this);
                    }
                    setElementProgressValue(value) {
                        this.configs.Progress = value;
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._progressSvgElem, Progress.ProgressEnum.CssClass.AnimateProgressChange);
                        this._progressSvgElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventAnimateEntranceEnd);
                        this._updateProgressValue();
                    }
                    setHtmlElements() {
                        this._progressSvgElem = this._selfElem.querySelector(OSUIFramework.Constants.Dot + Circle_1.Enum.CssClass.Progress);
                    }
                    unsetCallbacks() {
                        this._eventAnimateEntranceEnd = undefined;
                    }
                    unsetHtmlElements() {
                        this._progressSvgElem = undefined;
                    }
                    updateProgressColor(value) {
                        this.configs.ProgressColor = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.ProgressColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.ProgressColor));
                    }
                    updateShape(value) {
                        this.configs.Shape = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Shape, this.configs.Shape === OSUIFramework.GlobalEnum.ShapeTypes.Sharp
                            ? Progress.ProgressEnum.ShapeTypes.Sharp
                            : Progress.ProgressEnum.ShapeTypes.Round);
                    }
                    updateThickness(value) {
                        this.configs.Thickness = value;
                        this._updateCircleProps();
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.Thickness, this.configs.Thickness + OSUIFramework.GlobalEnum.Units.Pixel);
                    }
                    updateTrailColor(value) {
                        this.configs.TrailColor = value;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Progress.ProgressEnum.InlineStyleProp.TrailColor, OSUIFramework.Helper.Dom.Styles.GetColorValueFromColorType(this.configs.TrailColor));
                    }
                    build() {
                        super.build();
                        this.setHtmlElements();
                        this._setCssVariables();
                        this._progressToOffset();
                        this.setCallbacks();
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        switch (propertyName) {
                            case Progress.ProgressEnum.Properties.Thickness:
                                this.updateThickness(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.Progress:
                                this.setProgressValue(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.ProgressColor:
                                this.updateProgressColor(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.Shape:
                                this.updateShape(propertyValue);
                                break;
                            case Progress.ProgressEnum.Properties.TrailColor:
                                this.updateTrailColor(propertyValue);
                                break;
                            default:
                                super.changeProperty(propertyName, propertyValue);
                                break;
                        }
                    }
                    dispose() {
                        super.dispose();
                        this.unsetHtmlElements();
                        this.unsetCallbacks();
                        if (this._resizeObserver) {
                            this._resizeObserver.disconnect();
                        }
                    }
                }
                Circle_1.Circle = Circle;
            })(Circle = Progress.Circle || (Progress.Circle = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Progress;
        (function (Progress) {
            var Circle;
            (function (Circle) {
                class ProgressCircleConfig extends Progress.ProgressConfiguration {
                    constructor(config) {
                        super(config);
                    }
                }
                Circle.ProgressCircleConfig = ProgressCircleConfig;
            })(Circle = Progress.Circle || (Progress.Circle = {}));
        })(Progress = Patterns.Progress || (Patterns.Progress = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var RangeSlider;
        (function (RangeSlider) {
            class AbstractRangeSlider extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
                get provider() {
                    return this._provider;
                }
                set provider(p) {
                    this._provider = p;
                }
            }
            RangeSlider.AbstractRangeSlider = AbstractRangeSlider;
        })(RangeSlider = Patterns.RangeSlider || (Patterns.RangeSlider = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var RangeSlider;
        (function (RangeSlider) {
            class AbstractRangeSliderConfig extends Patterns.AbstractProviderConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        switch (key) {
                            case RangeSlider.Enum.Properties.StartingValueFrom:
                            case RangeSlider.Enum.Properties.StartingValueTo:
                            case RangeSlider.Enum.Properties.Orientation:
                                return false;
                        }
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case RangeSlider.Enum.Properties.Orientation:
                            validatedValue = this.validateInRange(value, OSUIFramework.GlobalEnum.Orientation.Horizontal, OSUIFramework.GlobalEnum.Orientation.Vertical);
                            break;
                        case RangeSlider.Enum.Properties.IsDisabled:
                        case RangeSlider.Enum.Properties.ShowFloatingLabel:
                        case RangeSlider.Enum.Properties.ShowTickMarks:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case RangeSlider.Enum.Properties.Size:
                            validatedValue = this.validateString(value, this.Orientation === OSUIFramework.GlobalEnum.Orientation.Horizontal
                                ? RangeSlider.Enum.DefaultValues.PercentualSize
                                : RangeSlider.Enum.DefaultValues.PixelSize);
                            break;
                        case RangeSlider.Enum.Properties.Step:
                            validatedValue = this.validateNumber(value, 1);
                            break;
                        case RangeSlider.Enum.Properties.TickMarksInterval:
                            validatedValue = this.validateNumber(value, 0);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            RangeSlider.AbstractRangeSliderConfig = AbstractRangeSliderConfig;
        })(RangeSlider = Patterns.RangeSlider || (Patterns.RangeSlider = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var RangeSlider;
        (function (RangeSlider) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["ClassModifier"] = "osui-range-slider--is-";
                    CssClass["IsInterval"] = "osui-range-slider--is-interval";
                    CssClass["RangeSlider"] = "osui-range-slider";
                    CssClass["RangeSliderProviderElem"] = "osui-range-slider__provider";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let CssProperties;
                (function (CssProperties) {
                    CssProperties["Size"] = "--range-slider-size";
                })(CssProperties = Enum.CssProperties || (Enum.CssProperties = {}));
                let DefaultValues;
                (function (DefaultValues) {
                    DefaultValues["PercentualSize"] = "100%";
                    DefaultValues["PixelSize"] = "100px";
                })(DefaultValues = Enum.DefaultValues || (Enum.DefaultValues = {}));
                let Mode;
                (function (Mode) {
                    Mode["Single"] = "single";
                    Mode["Interval"] = "interval";
                })(Mode = Enum.Mode || (Enum.Mode = {}));
                let Properties;
                (function (Properties) {
                    Properties["IsDisabled"] = "IsDisabled";
                    Properties["MaxValue"] = "MaxValue";
                    Properties["MinValue"] = "MinValue";
                    Properties["Orientation"] = "Orientation";
                    Properties["ShowTickMarks"] = "ShowTickMarks";
                    Properties["ShowFloatingLabel"] = "ShowFloatingLabel";
                    Properties["Size"] = "Size";
                    Properties["StartingValueTo"] = "StartingValueTo";
                    Properties["StartingValueFrom"] = "StartingValueFrom";
                    Properties["Step"] = "Step";
                    Properties["TickMarksInterval"] = "TickMarksInterval";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let Provider;
                (function (Provider) {
                    Provider["NoUiSlider"] = "noUiSlider";
                })(Provider = Enum.Provider || (Enum.Provider = {}));
                let RangeSliderEvents;
                (function (RangeSliderEvents) {
                    RangeSliderEvents["OnInitialize"] = "OnInitialize";
                    RangeSliderEvents["OnValueChange"] = "OnValueChange";
                })(RangeSliderEvents = Enum.RangeSliderEvents || (Enum.RangeSliderEvents = {}));
                let RangeSliderTypes;
                (function (RangeSliderTypes) {
                    RangeSliderTypes["Slider"] = "slider";
                    RangeSliderTypes["Interval"] = "interval";
                })(RangeSliderTypes = Enum.RangeSliderTypes || (Enum.RangeSliderTypes = {}));
            })(Enum = RangeSlider.Enum || (RangeSlider.Enum = {}));
        })(RangeSlider = Patterns.RangeSlider || (Patterns.RangeSlider = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var RangeSlider;
        (function (RangeSlider) {
            var Factory;
            (function (Factory) {
                function NewRangeSlider(rangeSliderId, configs, mode, provider) {
                    let _rangeSliderItem = null;
                    switch (provider) {
                        case RangeSlider.Enum.Provider.NoUiSlider:
                            _rangeSliderItem = Providers.RangeSlider.NoUiSlider.Factory.NewNoUiSlider(rangeSliderId, configs, mode);
                            break;
                        default:
                            throw new Error(`There is no ${OSUIFramework.GlobalEnum.PatternsNames.RangeSlider} of the ${provider} provider`);
                    }
                    return _rangeSliderItem;
                }
                Factory.NewRangeSlider = NewRangeSlider;
            })(Factory = RangeSlider.Factory || (RangeSlider.Factory = {}));
        })(RangeSlider = Patterns.RangeSlider || (Patterns.RangeSlider = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Rating;
        (function (Rating) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["IconStates"] = "icon-states";
                    CssClass["IsEdit"] = "is-edit";
                    CssClass["IsHalf"] = "is-half";
                    CssClass["RatingInput"] = "rating-input";
                    CssClass["RatingItem"] = "rating-item";
                    CssClass["Size"] = "rating-";
                    CssClass["WCAGHideText"] = "wcag-hide-text";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Properties;
                (function (Properties) {
                    Properties["IsEdit"] = "IsEdit";
                    Properties[Properties["MaxRatingScale"] = 100] = "MaxRatingScale";
                    Properties[Properties["MinRatingScale"] = 0] = "MinRatingScale";
                    Properties["RatingScale"] = "RatingScale";
                    Properties["RatingValue"] = "RatingValue";
                    Properties["Size"] = "Size";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = Rating.Enum || (Rating.Enum = {}));
        })(Rating = Patterns.Rating || (Patterns.Rating = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Rating;
        (function (Rating_1) {
            class Rating extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Rating_1.RatingConfig(configs));
                }
                _createItems() {
                    if (this.configs.RatingScale > Rating_1.Enum.Properties.MaxRatingScale) {
                        this.configs.RatingScale = Rating_1.Enum.Properties.MaxRatingScale;
                        console.warn(`The value of the RatingScale property on the '${this.widgetId}' Rating is higher than supported (${Rating_1.Enum.Properties.MaxRatingScale}).`);
                    }
                    for (let i = 0; i <= this.configs.RatingScale; i++) {
                        this._renderItem(i);
                    }
                }
                _getDecimalValue(value) {
                    return Math.round((value - Math.floor(value)) * 100) / 100;
                }
                _getIsHalfValue(value) {
                    const decimalValue = this._getDecimalValue(value);
                    return !!(decimalValue >= 0.3 && decimalValue <= 0.7);
                }
                _getValue() {
                    const inputChecked = OSUIFramework.Helper.Dom.TagSelector(this._selfElem, 'input:checked');
                    return parseInt(inputChecked.value);
                }
                _handlePlaceholders() {
                    this._clonedPlaceholders = this._ratingIconStatesElem.innerHTML;
                    this._ratingIconStatesElem.remove();
                }
                _manageRatingEvent() {
                    if (this._ratingHasEventAdded) {
                        this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnRatingClick);
                        this._ratingHasEventAdded = false;
                    }
                    else if (this.configs.IsEdit) {
                        this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnRatingClick);
                        this._ratingHasEventAdded = true;
                    }
                }
                _ratingOnClick(e) {
                    const currentTarget = e.target;
                    this._isHalfValue = false;
                    const isInput = OSUIFramework.Helper.Dom.Styles.ContainsClass(currentTarget, Rating_1.Enum.CssClass.RatingInput);
                    if (isInput) {
                        this.configs.RatingValue = this._getValue();
                        this._setValue(true);
                    }
                }
                _removeEvents() {
                    if (this._selfElem && this._ratingHasEventAdded) {
                        this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnRatingClick);
                    }
                }
                _renderItem(index) {
                    const hideLabelClass = index === 0 ? Rating_1.Enum.CssClass.WCAGHideText : '';
                    const labelHTML = index !== 0 ? this._clonedPlaceholders : '';
                    const ratingInputId = this.uniqueId + '-rating-' + index;
                    const input = `<input type="radio" class="${Rating_1.Enum.CssClass.RatingInput} ${Rating_1.Enum.CssClass.WCAGHideText}" id=${ratingInputId} name=${this._ratingInputName} value=${index}/>`;
                    const label = `<label class='${Rating_1.Enum.CssClass.RatingItem} ${hideLabelClass}' for=${ratingInputId}><span class="${Rating_1.Enum.CssClass.WCAGHideText}">Rating ${index}</span>${labelHTML}</label>`;
                    this._ratingFieldsetElem.innerHTML += input + label;
                }
                _setFieldsetDisabledStatus(isDisabled) {
                    const isFieldsetDisabled = OSUIFramework.Helper.Dom.Attribute.Get(this._ratingFieldsetElem, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled);
                    if (isDisabled) {
                        OSUIFramework.Helper.Dom.Attribute.Set(this._ratingFieldsetElem, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled, 'true');
                    }
                    else if (!isDisabled && isFieldsetDisabled) {
                        OSUIFramework.Helper.Dom.Attribute.Remove(this._ratingFieldsetElem, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled);
                    }
                }
                _setInitialCssClasses() {
                    if (this._isHalfValue) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.IsHalf);
                    }
                    if (this.configs.IsEdit) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.IsEdit);
                    }
                    if (this.configs.Size !== '') {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.Size + this.configs.Size);
                    }
                }
                _setInitialPropertiesValues() {
                    this._disabled = !this.configs.IsEdit;
                    this._ratingInputName = 'rating-' + this.uniqueId;
                    this._ratingHasEventAdded = false;
                }
                _setIsDisabled(isDisabled) {
                    this._setFieldsetDisabledStatus(isDisabled);
                    this._disabled = isDisabled;
                }
                _setIsEdit() {
                    this._setIsDisabled(!this.configs.IsEdit);
                    this.configs.IsEdit
                        ? OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.IsEdit)
                        : OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Rating_1.Enum.CssClass.IsEdit);
                    this._manageRatingEvent();
                }
                _setScale() {
                    this._ratingFieldsetElem.innerHTML = '';
                    this._createItems();
                    this._setValue();
                }
                _setSize(oldSize) {
                    if (oldSize !== '') {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Rating_1.Enum.CssClass.Size + oldSize);
                    }
                    if (this.configs.Size !== '') {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.Size + this.configs.Size);
                    }
                }
                _setValue(triggerEvent = false) {
                    this._decimalValue = this._getDecimalValue(this.configs.RatingValue);
                    this._isHalfValue = this._getIsHalfValue(this.configs.RatingValue);
                    const ratingItems = this._selfElem.querySelectorAll(OSUIFramework.GlobalEnum.HTMLElement.Input);
                    if (OSUIFramework.Helper.Dom.Styles.ContainsClass(this._selfElem, Rating_1.Enum.CssClass.IsHalf)) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Rating_1.Enum.CssClass.IsHalf);
                    }
                    if (this.configs.RatingScale === 1) {
                        ratingItems[1].checked = true;
                        return;
                    }
                    let newValue = this._isHalfValue || this._decimalValue > 0.7
                        ? Math.floor(this.configs.RatingValue) + 1
                        : Math.floor(this.configs.RatingValue);
                    if (newValue < Rating_1.Enum.Properties.MinRatingScale) {
                        newValue = Rating_1.Enum.Properties.MinRatingScale;
                        console.warn(`The value of RatingValue property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.Rating} can't be smaller than '${Rating_1.Enum.Properties.MinRatingScale}'.`);
                    }
                    else if (newValue > this.configs.RatingScale) {
                        newValue = this.configs.RatingScale;
                        console.warn(`The value of the RatingValue property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.Rating} exceeds the scale boundaries. To ensure its correct behaviour, set a value smaller or equal to '${this.configs.RatingScale}'.`);
                    }
                    ratingItems[newValue].checked = true;
                    if (this._isHalfValue) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Rating_1.Enum.CssClass.IsHalf);
                    }
                    this.configs.RatingValue = this._isHalfValue ? this.configs.RatingValue : newValue;
                    if (triggerEvent) {
                        this._triggerOnSelectEvent(this.configs.RatingValue);
                    }
                }
                _triggerOnSelectEvent(value) {
                    if (this._platformEventOnSelect !== undefined) {
                        OSUIFramework.Helper.AsyncInvocation(this._platformEventOnSelect, this.widgetId, value);
                    }
                }
                setCallbacks() {
                    this._eventOnRatingClick = this._ratingOnClick.bind(this);
                }
                setHtmlElements() {
                    this._ratingIconStatesElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Rating_1.Enum.CssClass.IconStates);
                    this._ratingFieldsetElem = OSUIFramework.Helper.Dom.TagSelector(this._selfElem, OSUIFramework.GlobalEnum.HTMLElement.FieldSet);
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventOnRatingClick = undefined;
                }
                unsetHtmlElements() {
                    this._ratingFieldsetElem.innerHTML = '';
                    this._ratingIconStatesElem = undefined;
                    this._ratingFieldsetElem = undefined;
                }
                build() {
                    super.build();
                    this._setInitialPropertiesValues();
                    this.setCallbacks();
                    this.setHtmlElements();
                    this._setInitialCssClasses();
                    this._handlePlaceholders();
                    this._setFieldsetDisabledStatus(!this.configs.IsEdit);
                    this._createItems();
                    this._manageRatingEvent();
                    this._setValue();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    const oldSize = this.configs.Size;
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Rating_1.Enum.Properties.RatingValue:
                                this._setValue();
                                break;
                            case Rating_1.Enum.Properties.RatingScale:
                                this._setScale();
                                break;
                            case Rating_1.Enum.Properties.IsEdit:
                                this._setIsEdit();
                                break;
                            case Rating_1.Enum.Properties.Size:
                                this._setSize(oldSize);
                                break;
                        }
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                registerCallback(callback) {
                    this._platformEventOnSelect = callback;
                }
            }
            Rating_1.Rating = Rating;
        })(Rating = Patterns.Rating || (Patterns.Rating = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Rating;
        (function (Rating) {
            class RatingConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            Rating.RatingConfig = RatingConfig;
        })(Rating = Patterns.Rating || (Patterns.Rating = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Search;
        (function (Search) {
            var Enum;
            (function (Enum) {
                let CssProperty;
                (function (CssProperty) {
                    CssProperty["InputPlaceholder"] = "search-input";
                    CssProperty["Pattern"] = "search";
                    CssProperty["PatternIsOpen"] = "open";
                    CssProperty["SearchGlass"] = "search-glass";
                })(CssProperty = Enum.CssProperty || (Enum.CssProperty = {}));
            })(Enum = Search.Enum || (Search.Enum = {}));
        })(Search = Patterns.Search || (Patterns.Search = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Search;
        (function (Search_1) {
            class Search extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Search_1.SearchConfig(configs));
                    this._isOpen = false;
                }
                _bodyClickCallback(e) {
                    const _clickedElem = e.target;
                    const _closestElem = _clickedElem.closest(OSUIFramework.Constants.Dot + Search_1.Enum.CssProperty.Pattern);
                    if (_closestElem !== this._selfElem && _closestElem !== this._searchGlass) {
                        this.close();
                        e.stopPropagation();
                    }
                }
                _checkInputValue() {
                    this._inputValue = this._inputElem.value;
                }
                _onToggle(e) {
                    this._checkInputValue();
                    if (this._isOpen) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                    e.stopPropagation();
                }
                _removeEvents() {
                    if (OSUIFramework.Helper.DeviceInfo.IsNative) {
                        this._searchGlass.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventSearchGlassClick);
                        if (this._isOpen) {
                            OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                        }
                    }
                }
                _triggerPlatformEvent() {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventCollapse, this.widgetId);
                }
                setA11yProperties() {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.Constants.A11YAttributes.Role.AttrName, OSUIFramework.Constants.A11YAttributes.Role.Search);
                }
                setCallbacks() {
                    this._eventSearchGlassClick = this._onToggle.bind(this);
                    this._globalEventBody = this._bodyClickCallback.bind(this);
                    if (OSUIFramework.Helper.DeviceInfo.IsNative) {
                        this._searchGlass.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventSearchGlassClick);
                        if (this._isOpen) {
                            OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                        }
                    }
                }
                setHtmlElements() {
                    this._inputElem = OSUIFramework.Helper.Dom.TagSelector(this._selfElem, OSUIFramework.GlobalEnum.HTMLElement.Input);
                    this._searchGlass = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Search_1.Enum.CssProperty.SearchGlass);
                }
                setInitialStates() {
                    if (OSUIFramework.Helper.DeviceInfo.IsNative && this._inputValue !== '') {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Search_1.Enum.CssProperty.PatternIsOpen);
                        this._inputElem.focus();
                        this._isOpen = true;
                    }
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventSearchGlassClick = undefined;
                    this._globalEventBody = undefined;
                }
                unsetHtmlElements() {
                    this._inputElem = undefined;
                    this._searchGlass = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this._checkInputValue();
                    this.setInitialStates();
                    this.setA11yProperties();
                    this.setCallbacks();
                    this.finishBuild();
                }
                close() {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Search_1.Enum.CssProperty.PatternIsOpen);
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                    this._inputElem.blur();
                    this._triggerPlatformEvent();
                    this._isOpen = false;
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                open() {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Search_1.Enum.CssProperty.PatternIsOpen);
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                    this._inputElem.focus();
                    this._isOpen = true;
                }
                registerCallback(callback) {
                    if (this._platformEventCollapse === undefined) {
                        this._platformEventCollapse = callback;
                    }
                }
            }
            Search_1.Search = Search;
        })(Search = Patterns.Search || (Patterns.Search = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Search;
        (function (Search) {
            class SearchConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            Search.SearchConfig = SearchConfig;
        })(Search = Patterns.Search || (Patterns.Search = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndex;
        (function (SectionIndex) {
            var Enum;
            (function (Enum) {
                let ChildNotifyActionType;
                (function (ChildNotifyActionType) {
                    ChildNotifyActionType["Add"] = "add";
                    ChildNotifyActionType["Click"] = "click";
                    ChildNotifyActionType["KeyPressed"] = "keyPressed";
                    ChildNotifyActionType["Removed"] = "removed";
                })(ChildNotifyActionType = Enum.ChildNotifyActionType || (Enum.ChildNotifyActionType = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["IsActiveItem"] = "osui-section-index-item--is-active";
                    CssClass["IsSticky"] = "osui-section-index--is-sticky";
                    CssClass["Pattern"] = "osui-section-index";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let CssVariable;
                (function (CssVariable) {
                    CssVariable["TopPosition"] = "--top-position";
                })(CssVariable = Enum.CssVariable || (Enum.CssVariable = {}));
                let Properties;
                (function (Properties) {
                    Properties["IsFixed"] = "IsFixed";
                    Properties["SmoothScrolling"] = "SmoothScrolling";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = SectionIndex.Enum || (SectionIndex.Enum = {}));
        })(SectionIndex = Patterns.SectionIndex || (Patterns.SectionIndex = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndex;
        (function (SectionIndex_1) {
            class SectionIndex extends Patterns.AbstractParent {
                constructor(uniqueId, configs) {
                    super(uniqueId, new SectionIndex_1.SectionIndexConfig(configs));
                }
                _addSectionIndexItem(childId) {
                    const childItem = OutSystems.OSUI.Patterns.SectionIndexItemAPI.GetSectionIndexItemById(childId);
                    if (this.getChild(childId)) {
                        throw new Error(`${OSUIFramework.ErrorCodes.SectionIndex.FailSetNewChildItem}: There is already a ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndexItem} under Id: '${childItem.widgetId}' added to ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndex} with uniqueId: ${this.uniqueId}.`);
                    }
                    else {
                        this.setChild(childId, childItem);
                    }
                }
                _childItemHasBeenClicked(childId) {
                    const childReference = this.getChild(childId);
                    if (childReference) {
                        this._updateIsActiveChildItem(childReference);
                    }
                    else {
                        throw new Error(`${OSUIFramework.ErrorCodes.SectionIndex.FailChildItemClicked}: The ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndexItem} under uniqueId: '${childId}' does not exist as an SectionIndexItem from ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndex} with Id: ${this.widgetId}.`);
                    }
                }
                _removeSectionIndexItem(childId) {
                    if (this.getChild(childId)) {
                        this.unsetChild(childId);
                    }
                    else {
                        throw new Error(`${OSUIFramework.ErrorCodes.SectionIndex.FailUnsetNewChildItem}: The ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndexItem} under uniqueId: '${childId}' does not exist as an SectionIndexItem from ${OSUIFramework.GlobalEnum.PatternsNames.SectionIndex} with Id: ${this.widgetId}.`);
                    }
                }
                _toggleIsFixed() {
                    if (this.configs.IsFixed) {
                        const headerHeight = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.GlobalEnum.CssClassElements.Header).offsetHeight || 0;
                        const contentPaddingTop = window
                            .getComputedStyle(OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.GlobalEnum.CssClassElements.MainContent))
                            .getPropertyValue(OSUIFramework.GlobalEnum.CssProperties.PaddingTop) || 0;
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, SectionIndex_1.Enum.CssVariable.TopPosition, 'calc(' + headerHeight + 'px + ' + contentPaddingTop + ')');
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, SectionIndex_1.Enum.CssClass.IsSticky);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveStyleAttribute(this._selfElem, SectionIndex_1.Enum.CssVariable.TopPosition);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, SectionIndex_1.Enum.CssClass.IsSticky);
                    }
                }
                _updateIsActiveChildItem(child) {
                    if (this._activeSectionIndexItem) {
                        this._activeSectionIndexItem.unsetIsActive();
                    }
                    child.setIsActive();
                    this._activeSectionIndexItem = child;
                    OSUIFramework.Helper.Scroll(this._mainScrollContainerElement, child.targetElementOffset, this.configs.SmoothScrolling);
                }
                setHtmlElements() {
                    this._mainScrollContainerElement = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.GlobalEnum.Screen.Active);
                }
                unsetHtmlElements() {
                    this._mainScrollContainerElement = undefined;
                }
                beNotifiedByChild(childId, notifiedTo) {
                    switch (notifiedTo) {
                        case SectionIndex_1.Enum.ChildNotifyActionType.Add:
                            this._addSectionIndexItem(childId);
                            break;
                        case SectionIndex_1.Enum.ChildNotifyActionType.Click:
                            this._childItemHasBeenClicked(childId);
                            break;
                        case SectionIndex_1.Enum.ChildNotifyActionType.Removed:
                            this._removeSectionIndexItem(childId);
                            break;
                        default:
                            throw new Error(`${OSUIFramework.ErrorCodes.SectionIndex.FailToSetChildItemAction}: There no exist a '${notifiedTo}' notification type.`);
                    }
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this._toggleIsFixed();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case SectionIndex_1.Enum.Properties.IsFixed:
                                this._toggleIsFixed();
                                break;
                        }
                    }
                }
                dispose() {
                    this.unsetHtmlElements();
                    super.dispose();
                }
            }
            SectionIndex_1.SectionIndex = SectionIndex;
        })(SectionIndex = Patterns.SectionIndex || (Patterns.SectionIndex = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndex;
        (function (SectionIndex) {
            class SectionIndexConfig extends Patterns.AbstractConfiguration {
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case SectionIndex.Enum.Properties.IsFixed:
                        case SectionIndex.Enum.Properties.SmoothScrolling:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            SectionIndex.SectionIndexConfig = SectionIndexConfig;
        })(SectionIndex = Patterns.SectionIndex || (Patterns.SectionIndex = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndexItem;
        (function (SectionIndexItem) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["ScrollToWidgetId"] = "ScrollToWidgetId";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = SectionIndexItem.Enum || (SectionIndexItem.Enum = {}));
        })(SectionIndexItem = Patterns.SectionIndexItem || (Patterns.SectionIndexItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndexItem;
        (function (SectionIndexItem_1) {
            class SectionIndexItem extends Patterns.AbstractChild {
                constructor(uniqueId, configs) {
                    super(uniqueId, new SectionIndexItem_1.SectionIndexItemConfig(configs));
                    this._targetElement = undefined;
                    this._targetElementOffset = {
                        bottom: 0,
                        top: 0,
                    };
                }
                _onKeyboardPressed(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    switch (event.key) {
                        case OSUIFramework.GlobalEnum.Keycodes.Enter:
                        case OSUIFramework.GlobalEnum.Keycodes.Space:
                            this._onSelected(event);
                            break;
                    }
                }
                _onSelected(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._setTargetOffsetInfo();
                    this.notifyParent(Patterns.SectionIndex.Enum.ChildNotifyActionType.Click);
                }
                _removeEvents() {
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyBoardPress);
                }
                _setTargetElement() {
                    if (this._targetElement === undefined) {
                        try {
                            this._targetElement = document.getElementById(this.configs.ScrollToWidgetId);
                        }
                        catch (e) {
                            throw new Error(`${OSUIFramework.ErrorCodes.SectionIndexItem.FailToSetTargetElement}: Target Element with the Id '${this.configs.ScrollToWidgetId}' does not exist!`);
                        }
                    }
                }
                _setTargetOffsetInfo() {
                    this._setTargetElement();
                    this._targetElementOffset.bottom = this._targetElement.offsetTop + this._targetElement.offsetHeight;
                    this._targetElementOffset.top = this._targetElement.offsetTop;
                }
                _setUpEvents() {
                    this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyBoardPress);
                }
                setA11yProperties() {
                    OSUIFramework.Helper.A11Y.RoleButton(this.selfElement);
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this.selfElement);
                }
                setCallbacks() {
                    this._eventOnClick = this._onSelected.bind(this);
                    this._eventOnkeyBoardPress = this._onKeyboardPressed.bind(this);
                }
                build() {
                    super.build();
                    this.setParentInfo(OSUIFramework.Constants.Dot + Patterns.SectionIndex.Enum.CssClass.Pattern, OutSystems.OSUI.Patterns.SectionIndexAPI.GetSectionIndexById);
                    this.notifyParent(Patterns.SectionIndex.Enum.ChildNotifyActionType.Add);
                    this.setCallbacks();
                    this._setUpEvents();
                    this.setA11yProperties();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case SectionIndexItem_1.Enum.Properties.ScrollToWidgetId:
                                console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.SectionIndex} (${this.widgetId}): change to ${SectionIndexItem_1.Enum.Properties.ScrollToWidgetId} on property ${SectionIndexItem_1.Enum.Properties.ScrollToWidgetId} is not editable at OnParametersChange.`);
                                break;
                        }
                    }
                }
                dispose() {
                    this._removeEvents();
                    this.notifyParent(Patterns.SectionIndex.Enum.ChildNotifyActionType.Removed);
                    super.dispose();
                }
                setIsActive() {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Patterns.SectionIndex.Enum.CssClass.IsActiveItem);
                }
                unsetIsActive() {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Patterns.SectionIndex.Enum.CssClass.IsActiveItem);
                }
                get targetElement() {
                    return this._targetElement;
                }
                get targetElementOffset() {
                    return this._targetElementOffset;
                }
            }
            SectionIndexItem_1.SectionIndexItem = SectionIndexItem;
        })(SectionIndexItem = Patterns.SectionIndexItem || (Patterns.SectionIndexItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SectionIndexItem;
        (function (SectionIndexItem) {
            class SectionIndexItemConfig extends Patterns.AbstractConfiguration {
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== SectionIndexItem.Enum.Properties.ScrollToWidgetId;
                    }
                    return true;
                }
            }
            SectionIndexItem.SectionIndexItemConfig = SectionIndexItemConfig;
        })(SectionIndexItem = Patterns.SectionIndexItem || (Patterns.SectionIndexItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Sidebar;
        (function (Sidebar) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["StartsOpen"] = "StartsOpen";
                    Properties["Direction"] = "Direction";
                    Properties["Width"] = "Width";
                    Properties["HasOverlay"] = "HasOverlay";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["Aside"] = "osui-sidebar";
                    CssClass["Content"] = "osui-sidebar__content";
                    CssClass["ClassModifier"] = "osui-sidebar--is-";
                    CssClass["HasOverlay"] = "osui-sidebar--has-overlay";
                    CssClass["Header"] = "osui-sidebar__header";
                    CssClass["IsOpen"] = "osui-sidebar--is-open";
                    CssClass["Overlay"] = "osui-sidebar__overlay";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let CssProperty;
                (function (CssProperty) {
                    CssProperty["Width"] = "--sidebar-width";
                })(CssProperty = Enum.CssProperty || (Enum.CssProperty = {}));
            })(Enum = Sidebar.Enum || (Sidebar.Enum = {}));
        })(Sidebar = Patterns.Sidebar || (Patterns.Sidebar = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Sidebar;
        (function (Sidebar_1) {
            class Sidebar extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Sidebar_1.SidebarConfig(configs));
                    this._nativeGesturesParams = {
                        LastX: 0,
                        LastY: 0,
                        MoveX: 0,
                        InvalidX: false,
                    };
                    this._swipeTriggerSpeed = 0.3;
                    this._isOpen = this.configs.StartsOpen;
                    this._currentDirectionCssClass = Sidebar_1.Enum.CssClass.ClassModifier + this.configs.Direction;
                }
                _checkIsDraggingInsideBounds(x) {
                    const isLeft = this.configs.Direction === OSUIFramework.GlobalEnum.Direction.Left;
                    const baseThreshold = this._nativeGesturesParams.MoveX + (x - this._nativeGesturesParams.LastX);
                    const directionThreshold = isLeft
                        ? baseThreshold > -parseInt(this.configs.Width) &&
                            this._nativeGesturesParams.MoveX + (x - this._nativeGesturesParams.LastX) <= 0
                        : baseThreshold < parseInt(this.configs.Width) &&
                            this._nativeGesturesParams.MoveX + (x - this._nativeGesturesParams.LastX) >= 0;
                    return directionThreshold;
                }
                _closeSidebar() {
                    this._isOpen = false;
                    if (this.isBuilt) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Sidebar_1.Enum.CssClass.IsOpen);
                        OSUIFramework.Helper.A11Y.TabIndexFalse(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._selfElem);
                        this._triggerOnToggleEvent();
                        this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventSidebarKeypress);
                        this._setFocusableElementsTabindex();
                        if (this.configs.HasOverlay) {
                            OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOverlayClick);
                        }
                    }
                }
                _openSidebar() {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Sidebar_1.Enum.CssClass.IsOpen);
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                    OSUIFramework.Helper.A11Y.AriaHiddenFalse(this._selfElem);
                    if (this.isBuilt) {
                        this._isOpen = true;
                        this._triggerOnToggleEvent();
                        if (this.configs.HasOverlay) {
                            OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOverlayClick);
                        }
                    }
                    this._selfElem.focus();
                    this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventSidebarKeypress);
                    this._setFocusableElementsTabindex();
                }
                _overlayClickCallback(args, e) {
                    if (this._selfElem === e.target) {
                        if (this._isOpen) {
                            this.close();
                        }
                    }
                    e.stopPropagation();
                }
                _removeEvents() {
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventSidebarKeypress);
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOverlayClick);
                }
                _setDirection() {
                    if (this._currentDirectionCssClass !== '') {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, this._currentDirectionCssClass);
                    }
                    this._currentDirectionCssClass = Sidebar_1.Enum.CssClass.ClassModifier + this.configs.Direction;
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, this._currentDirectionCssClass);
                }
                _setFocusableElementsTabindex() {
                    const setA11YtabIndex = this._isOpen ? OSUIFramework.Helper.A11Y.TabIndexTrue : OSUIFramework.Helper.A11Y.TabIndexFalse;
                    this._focusableElems.slice().forEach((item) => {
                        setA11YtabIndex(item);
                    });
                }
                _setHasOverlay() {
                    const alreadyHasOverlayClass = OSUIFramework.Helper.Dom.Styles.ContainsClass(this._selfElem, Sidebar_1.Enum.CssClass.HasOverlay);
                    if (this.configs.HasOverlay && alreadyHasOverlayClass === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Sidebar_1.Enum.CssClass.HasOverlay);
                        if (this._isOpen) {
                            OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOverlayClick);
                        }
                    }
                    else if (this.isBuilt) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Sidebar_1.Enum.CssClass.HasOverlay);
                        if (this._isOpen) {
                            OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOverlayClick);
                        }
                    }
                }
                _setInitialCssClasses() {
                    this._setDirection();
                    this._setWidth();
                    this._setHasOverlay();
                    if (this._isOpen) {
                        this._openSidebar();
                    }
                }
                _setOverlayTransition(x) {
                    const isLeft = this.configs.Direction === OSUIFramework.GlobalEnum.Direction.Left;
                    const currentOpacity = parseInt(this._selfElem.style.getPropertyValue('--overlay-opacity'));
                    const percentageBeforeDif = (Math.abs(x) * 100) / parseInt(this.configs.Width);
                    const percentage = isLeft ? 0 + percentageBeforeDif : 100 - percentageBeforeDif;
                    const newOpacity = Math.floor(percentage) / 100;
                    if (currentOpacity !== newOpacity && newOpacity % 1 !== 0) {
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, '--overlay-opacity', newOpacity);
                    }
                }
                _setWidth() {
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Sidebar_1.Enum.CssProperty.Width, this.configs.Width);
                }
                _sidebarKeypressCallback(e) {
                    const isTabPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Tab;
                    const isEscapedPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Escape;
                    const isShiftPressed = e.shiftKey;
                    if (!isTabPressed && !isEscapedPressed) {
                        return;
                    }
                    if (isEscapedPressed) {
                        this.close();
                    }
                    if (isShiftPressed) {
                        if (document.activeElement === this._firstFocusableElem) {
                            this._lastFocusableElem.focus();
                            e.preventDefault();
                        }
                    }
                    else if (document.activeElement === this._lastFocusableElem) {
                        this._firstFocusableElem.focus();
                        e.preventDefault();
                    }
                }
                _triggerOnToggleEvent() {
                    OSUIFramework.Helper.AsyncInvocation(this._onToggle, this.widgetId, this._isOpen);
                }
                _updateLastPositions(x, y) {
                    this._nativeGesturesParams.LastX = x;
                    this._nativeGesturesParams.LastY = y;
                }
                _updateUI() {
                    if (this._isMoving) {
                        this._selfElem.style.transform = `translateX(${this._nativeGesturesParams.MoveX}px)`;
                        requestAnimationFrame(this._updateUI.bind(this));
                    }
                }
                setA11YProperties() {
                    OSUIFramework.Helper.A11Y.RoleComplementary(this._selfElem);
                    OSUIFramework.Helper.A11Y.AriaHasPopupTrue(this._selfElem);
                    if (this._isOpen) {
                        OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaHiddenFalse(this._selfElem);
                    }
                    else {
                        OSUIFramework.Helper.A11Y.TabIndexFalse(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._selfElem);
                    }
                }
                setCallbacks() {
                    this._eventSidebarKeypress = this._sidebarKeypressCallback.bind(this);
                    this._eventOverlayClick = this._overlayClickCallback.bind(this);
                }
                setHtmlElements() {
                    this._focusableElems = [...this._selfElem.querySelectorAll(OSUIFramework.Constants.FocusableElems)];
                    this._firstFocusableElem = this._focusableElems[0];
                    this._lastFocusableElem = this._focusableElems[this._focusableElems.length - 1];
                    this._setWidth();
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventSidebarKeypress = undefined;
                    this._eventOverlayClick = undefined;
                }
                unsetHtmlElements() {
                    this._focusableElems = undefined;
                    this._firstFocusableElem = undefined;
                    this._lastFocusableElem = undefined;
                }
                build() {
                    super.build();
                    this.setCallbacks();
                    this.setHtmlElements();
                    this._setInitialCssClasses();
                    this.setA11YProperties();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Sidebar_1.Enum.Properties.StartsOpen:
                                console.warn(`Sidebar (${this.widgetId}): changes to ${Sidebar_1.Enum.Properties.StartsOpen} parameter do not affect the sidebar. Use the client actions 'SidebarOpen' and 'SidebarClose' to affect the Sidebar.`);
                                break;
                            case Sidebar_1.Enum.Properties.Direction:
                                this._setDirection();
                                break;
                            case Sidebar_1.Enum.Properties.Width:
                                this._setWidth();
                                break;
                            case Sidebar_1.Enum.Properties.HasOverlay:
                                this._setHasOverlay();
                                break;
                        }
                    }
                }
                close() {
                    if (this._isOpen) {
                        this._closeSidebar();
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                onGestureEnd(offsetX, offsetY, timeTaken) {
                    this._isMoving = false;
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, OSUIFramework.Constants.NoTransition);
                    if ((offsetX === 0 && offsetY === 0) || this._nativeGesturesParams.InvalidX) {
                        return;
                    }
                    const checkSwipeSpeed = Math.abs(offsetX) / timeTaken > this._swipeTriggerSpeed;
                    const sizeThreshold = -parseInt(this.configs.Width) / 2;
                    const swipedHalfWidth = this._isOpen
                        ? this._nativeGesturesParams.MoveX < sizeThreshold
                        : this._nativeGesturesParams.MoveX > sizeThreshold;
                    const isReadyToToggle = swipedHalfWidth || checkSwipeSpeed;
                    this._selfElem.style.transform = '';
                    if (isReadyToToggle) {
                        if (this._isOpen) {
                            this.close();
                        }
                        else {
                            this.open();
                        }
                    }
                    if (this.configs.HasOverlay) {
                        OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, '--overlay-opacity', 0);
                    }
                }
                onGestureMove(x, y, offsetX, offsetY, evt) {
                    const _dragDirection = offsetX > 0 ? OSUIFramework.GlobalEnum.Direction.Right : OSUIFramework.GlobalEnum.Direction.Left;
                    this._nativeGesturesParams.InvalidX = this._isOpen && _dragDirection !== this.configs.Direction;
                    if (this._nativeGesturesParams.InvalidX) {
                        this._updateLastPositions(x, y);
                        return;
                    }
                    if (this._dragOrientation === '') {
                        const isHorizontal = Math.abs(offsetX) >= Math.abs(offsetY);
                        this._dragOrientation = isHorizontal
                            ? OSUIFramework.GlobalEnum.Orientation.Horizontal
                            : OSUIFramework.GlobalEnum.Orientation.Vertical;
                        requestAnimationFrame(this._updateUI.bind(this));
                    }
                    if (this._dragOrientation === OSUIFramework.GlobalEnum.Orientation.Vertical) {
                        this._updateLastPositions(x, y);
                        return;
                    }
                    evt.preventDefault();
                    const IsDraggingInsideBounds = this._checkIsDraggingInsideBounds(x);
                    if (IsDraggingInsideBounds) {
                        const updateXaxis = this._nativeGesturesParams.MoveX + (x - this._nativeGesturesParams.LastX);
                        this._nativeGesturesParams.MoveX = updateXaxis;
                    }
                    this._updateLastPositions(x, y);
                    if (this.configs.HasOverlay) {
                        this._setOverlayTransition(x);
                    }
                }
                onGestureStart(x, y) {
                    this._isMoving = true;
                    this._dragOrientation = '';
                    this._nativeGesturesParams.LastX = x;
                    this._nativeGesturesParams.LastY = y;
                    if (this._isOpen) {
                        this._nativeGesturesParams.MoveX = 0;
                    }
                    else if (this.configs.Direction === OSUIFramework.GlobalEnum.Direction.Left) {
                        this._nativeGesturesParams.MoveX = -parseInt(this.configs.Width);
                    }
                    else {
                        this._nativeGesturesParams.MoveX = parseInt(this.configs.Width);
                    }
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, OSUIFramework.Constants.NoTransition);
                }
                open() {
                    if (this._isOpen === false) {
                        this._openSidebar();
                    }
                }
                registerCallback(callback) {
                    if (this._onToggle === undefined) {
                        this._onToggle = callback;
                    }
                    else {
                        console.warn(`The ${OSUIFramework.GlobalEnum.PatternsNames.Sidebar} already has the toggle callback set.`);
                    }
                }
            }
            Sidebar_1.Sidebar = Sidebar;
        })(Sidebar = Patterns.Sidebar || (Patterns.Sidebar = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Sidebar;
        (function (Sidebar) {
            class SidebarConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== Sidebar.Enum.Properties.StartsOpen;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Sidebar.Enum.Properties.Direction:
                            validatedValue = this.validateInRange(value, OSUIFramework.GlobalEnum.Direction.Right, OSUIFramework.GlobalEnum.Direction.Right, OSUIFramework.GlobalEnum.Direction.Left);
                            break;
                        case Sidebar.Enum.Properties.HasOverlay:
                        case Sidebar.Enum.Properties.StartsOpen:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case Sidebar.Enum.Properties.Width:
                            validatedValue = this.validateString(value, '500px');
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Sidebar.SidebarConfig = SidebarConfig;
        })(Sidebar = Patterns.Sidebar || (Patterns.Sidebar = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Submenu;
        (function (Submenu) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["OpenOnHover"] = "OpenOnHover";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["Pattern"] = "osui-submenu";
                    CssClass["PatternActive"] = "active";
                    CssClass["PatternHeader"] = "osui-submenu__header";
                    CssClass["PatternIsDropdown"] = "osui-submenu--is-dropdown";
                    CssClass["PatternIsHidden"] = "osui-submenu--is-hidden";
                    CssClass["PatternIsOpen"] = "osui-submenu--is-open";
                    CssClass["PatternIcon"] = "osui-submenu__header__icon";
                    CssClass["PatternItem"] = "osui-submenu__header__item";
                    CssClass["PatternLinks"] = "osui-submenu__items";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
            })(Enum = Submenu.Enum || (Submenu.Enum = {}));
        })(Submenu = Patterns.Submenu || (Patterns.Submenu = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Submenu;
        (function (Submenu) {
            class Open extends OSUIFramework.Event.AbstractEvent {
            }
            Submenu.Open = Open;
        })(Submenu = Patterns.Submenu || (Patterns.Submenu = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Submenu;
        (function (Submenu_1) {
            class Submenu extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Submenu_1.SubmenuConfig(configs));
                    this._dynamicallyOpening = false;
                    this._hasActiveLinks = false;
                    this._hasElements = false;
                    this._isActive = false;
                    this._isOpen = false;
                }
                _bodyClickCallback(args, e) {
                    if (this.isBuilt && this._isOpen && this._dynamicallyOpening === false) {
                        if (!this._selfElem.contains(e.target)) {
                            this.close();
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (this._dynamicallyOpening) {
                        this._dynamicallyOpening = false;
                    }
                }
                _checkForActiveLinks() {
                    this._submenuActiveLinksElement = OSUIFramework.Helper.Dom.ClassSelector(this._submenuLinksElement, Submenu_1.Enum.CssClass.PatternActive);
                    this._hasActiveLinks = !!this._submenuActiveLinksElement;
                }
                _clickCallback(e) {
                    this._toggleSubmenu();
                    e.stopPropagation();
                }
                _keypressCallback(e) {
                    const _clickedElem = e.target;
                    const _closestElem = _clickedElem.closest(OSUIFramework.Constants.Dot + Submenu_1.Enum.CssClass.Pattern);
                    const _isEscapedPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Escape;
                    const _isEnterPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Enter;
                    const _isTabPressed = e.key === OSUIFramework.GlobalEnum.Keycodes.Tab;
                    const _isShiftPressed = e.shiftKey;
                    if (_isEnterPressed) {
                        this._toggleSubmenu();
                    }
                    if (_isEscapedPressed && this._isOpen) {
                        this.close();
                        this._submenuHeaderElement.focus();
                    }
                    if (_isShiftPressed && _isTabPressed && _clickedElem === this._submenuHeaderElement) {
                        if (_closestElem === this._selfElem && this._isOpen) {
                            this.close();
                        }
                    }
                    e.stopPropagation();
                }
                _onMouseEnterCallback(e) {
                    this._show();
                    e.stopPropagation();
                }
                _onMouseLeaveCallback(e) {
                    if (this._selfElem.querySelector(':hover') === null) {
                        this.close();
                    }
                    e.preventDefault();
                    e.stopPropagation();
                }
                _openCallback(element) {
                    if (element !== this.uniqueId) {
                        if (this._isOpen) {
                            this.close();
                        }
                    }
                }
                _removeActive() {
                    if (this._isActive) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Submenu_1.Enum.CssClass.PatternActive);
                        this._isActive = false;
                    }
                }
                _removeEvents() {
                    if (this._hasElements) {
                        if (this.configs.OpenOnHover === false || OSUIFramework.Helper.DeviceInfo.IsTouch) {
                            this._submenuHeaderElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                            this._submenuHeaderElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventKeypress);
                        }
                        if (this.configs.OpenOnHover && OSUIFramework.Helper.DeviceInfo.IsTouch === false) {
                            this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventOnMouseEnter);
                            this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventOnMouseLeave);
                        }
                    }
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.SubmenuOpen, this._globalEventOpen);
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                }
                _setActive() {
                    if (this._isActive === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Submenu_1.Enum.CssClass.PatternActive);
                        this._isActive = true;
                    }
                }
                _setOpenOnHover() {
                    if (OSUIFramework.Helper.DeviceInfo.IsTouch === false) {
                        if (this._hasElements) {
                            this._submenuHeaderElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                            this._eventClick = undefined;
                            this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseEnter, this._eventOnMouseEnter);
                            this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.MouseLeave, this._eventOnMouseLeave);
                        }
                    }
                }
                _show() {
                    if (this._isOpen === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Submenu_1.Enum.CssClass.PatternIsOpen);
                        this._submenuHeaderElement.focus();
                        this._isOpen = true;
                        this._updateA11yProperties();
                    }
                }
                _toggleSubmenu() {
                    if (this._isOpen) {
                        this.close();
                    }
                    else {
                        OSUIFramework.Event.GlobalEventManager.Instance.trigger(OSUIFramework.Event.Type.SubmenuOpen, this.uniqueId);
                        OSUIFramework.Helper.AsyncInvocation(this._show.bind(this));
                    }
                }
                _updateA11yProperties() {
                    OSUIFramework.Helper.A11Y.AriaExpanded(this._submenuHeaderElement, this._isOpen.toString());
                    OSUIFramework.Helper.A11Y.AriaHidden(this._submenuLinksElement, (!this._isOpen).toString());
                    this._submenuAllLinksElement.forEach((item) => {
                        this._isOpen ? OSUIFramework.Helper.A11Y.TabIndexTrue(item) : OSUIFramework.Helper.A11Y.TabIndexFalse(item);
                    });
                }
                setA11yProperties() {
                    OSUIFramework.Helper.A11Y.AriaHasPopupTrue(this._submenuHeaderElement);
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this._submenuHeaderElement);
                    OSUIFramework.Helper.A11Y.AriaControls(this._submenuHeaderElement, this._submenuLinksElement.id);
                    OSUIFramework.Helper.A11Y.RoleButton(this._submenuHeaderElement);
                    this._submenuAllLinksElement.forEach((item) => {
                        OSUIFramework.Helper.A11Y.RoleMenuItem(item);
                    });
                    this._updateA11yProperties();
                }
                setCallbacks() {
                    this._eventClick = this._clickCallback.bind(this);
                    this._eventKeypress = this._keypressCallback.bind(this);
                    this._globalEventOpen = this._openCallback.bind(this);
                    this._globalEventBody = this._bodyClickCallback.bind(this);
                    this._eventOnMouseEnter = this._onMouseEnterCallback.bind(this);
                    this._eventOnMouseLeave = this._onMouseLeaveCallback.bind(this);
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                    if (this._hasElements) {
                        if (this.configs.OpenOnHover === false || OSUIFramework.Helper.DeviceInfo.IsTouch) {
                            this._submenuHeaderElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                        }
                        this._submenuHeaderElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventKeypress);
                    }
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.SubmenuOpen, this._globalEventOpen);
                }
                setHtmlElements() {
                    this._submenuHeaderElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Submenu_1.Enum.CssClass.PatternHeader);
                    this._submenuLinksElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Submenu_1.Enum.CssClass.PatternLinks);
                    this._submenuAllLinksElement = [...this._submenuLinksElement.querySelectorAll(OSUIFramework.GlobalEnum.HTMLElement.Link)];
                    if (this._submenuLinksElement.children.length > 0) {
                        this._hasElements = true;
                    }
                    OSUIFramework.Helper.AsyncInvocation(this._checkForActiveLinks.bind(this));
                }
                setInitialStates() {
                    if (this._hasActiveLinks) {
                        this._setActive();
                    }
                    if (this._hasElements) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Submenu_1.Enum.CssClass.PatternIsDropdown);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._submenuLinksElement, Submenu_1.Enum.CssClass.PatternIsHidden);
                    }
                    if (OSUIFramework.Helper.Dom.Styles.ContainsClass(this._selfElem, Submenu_1.Enum.CssClass.PatternIsOpen) && !this._isOpen) {
                        this._isOpen = true;
                    }
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventClick = undefined;
                    this._eventKeypress = undefined;
                    this._globalEventOpen = undefined;
                    this._globalEventBody = undefined;
                    this._eventOnMouseEnter = undefined;
                    this._eventOnMouseLeave = undefined;
                }
                unsetHtmlElements() {
                    this._submenuHeaderElement = undefined;
                    this._submenuLinksElement = undefined;
                    this._submenuAllLinksElement = undefined;
                    this._submenuActiveLinksElement = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setInitialStates();
                    this.setA11yProperties();
                    OSUIFramework.Helper.AsyncInvocation(this.setCallbacks.bind(this));
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Submenu_1.Enum.Properties.OpenOnHover:
                                this._setOpenOnHover();
                                break;
                        }
                    }
                }
                close() {
                    if (this._isOpen) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Submenu_1.Enum.CssClass.PatternIsOpen);
                        this._isOpen = false;
                        this._dynamicallyOpening = false;
                        this._updateA11yProperties();
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                open() {
                    this._dynamicallyOpening = true;
                    this._show();
                    setTimeout(function () {
                        if (!this._dynamiclyOpening) {
                            this._dynamiclyOpening = false;
                        }
                    }, 500);
                }
                updateOnRender() {
                    if (this.isBuilt) {
                        this._checkForActiveLinks();
                        if (this._hasActiveLinks && this._isActive === false) {
                            this._setActive();
                        }
                        else if (this._hasActiveLinks === false && this._isActive) {
                            this._removeActive();
                        }
                    }
                }
            }
            Submenu_1.Submenu = Submenu;
        })(Submenu = Patterns.Submenu || (Patterns.Submenu = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Submenu;
        (function (Submenu) {
            class SubmenuConfig extends Patterns.AbstractConfiguration {
                constructor() {
                    super(...arguments);
                    this.OpenOnHover = false;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Submenu.Enum.Properties.OpenOnHover:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Submenu.SubmenuConfig = SubmenuConfig;
        })(Submenu = Patterns.Submenu || (Patterns.Submenu = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SwipeEvents;
        (function (SwipeEvents) {
            var Enum;
            (function (Enum) {
                let Events;
                (function (Events) {
                    Events["SwipeUp"] = "SwipeUp";
                    Events["SwipeDown"] = "SwipeDown";
                    Events["SwipeRight"] = "SwipeRight";
                    Events["SwipeLeft"] = "SwipeLeft";
                })(Events = Enum.Events || (Enum.Events = {}));
                let Properties;
                (function (Properties) {
                    Properties[Properties["Threshold"] = 10] = "Threshold";
                    Properties[Properties["Velocity"] = 0.3] = "Velocity";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
            })(Enum = SwipeEvents.Enum || (SwipeEvents.Enum = {}));
        })(SwipeEvents = Patterns.SwipeEvents || (Patterns.SwipeEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SwipeEvents;
        (function (SwipeEvents_1) {
            class SwipeEvents extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new SwipeEvents_1.SwipeEventsConfig(configs));
                    this._threshold = SwipeEvents_1.Enum.Properties.Threshold;
                    this._velocity = SwipeEvents_1.Enum.Properties.Velocity;
                }
                _removeEventListeners() {
                    if (this._swipableElement) {
                        this._swipableElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._gestureStartEvent);
                        this._swipableElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, this._gestureMoveEvent);
                    }
                }
                _setEventListeners() {
                    if (this._swipableElement) {
                        this._swipableElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._gestureStartEvent);
                        this._swipableElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, this._gestureMoveEvent);
                    }
                }
                _triggerSwipeDown() {
                    if (this._swipeRightCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._swipeDownCallback);
                    }
                }
                _triggerSwipeLeft() {
                    if (this._swipeRightCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._swipeLeftCallback);
                    }
                }
                _triggerSwipeRight() {
                    if (this._swipeRightCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._swipeRightCallback);
                    }
                }
                _triggerSwipeUp() {
                    if (this._swipeRightCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._swipeUpCallback);
                    }
                }
                setCallbacks() {
                    this._gestureStartEvent = this.EventGestureEnd.bind(this);
                    this._gestureMoveEvent = this.EventGestureMove.bind(this);
                    this._setEventListeners();
                }
                setHtmlElements() {
                    this._swipableElement = document.getElementById(this.configs.WidgetId);
                }
                unsetCallbacks() {
                    this._removeEventListeners();
                    this._gestureStartEvent = undefined;
                    this._gestureMoveEvent = undefined;
                }
                unsetHtmlElements() {
                    this._swipableElement = undefined;
                }
                EventGestureEnd(offsetX, offsetY, timeTaken) {
                    if ((Math.abs(offsetX) > this._threshold || Math.abs(offsetY) > this._threshold) &&
                        (Math.abs(offsetX) / timeTaken > this._velocity || Math.abs(offsetY) / timeTaken > this._velocity)) {
                        if (Math.abs(offsetX) > Math.abs(offsetY)) {
                            if (offsetX > 0) {
                                this._triggerSwipeRight();
                            }
                            else {
                                this._triggerSwipeLeft();
                            }
                        }
                        else if (offsetY > 0) {
                            this._triggerSwipeDown();
                        }
                        else {
                            this._triggerSwipeUp();
                        }
                    }
                }
                EventGestureMove(event) {
                    if (event) {
                        event.preventDefault();
                    }
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setCallbacks();
                    super.finishBuild();
                }
                dispose() {
                    super.dispose();
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                }
                registerCallback(eventName, callback) {
                    switch (eventName) {
                        case Patterns.SwipeEvents.Enum.Events.SwipeDown:
                            this._swipeDownCallback = callback;
                            break;
                        case Patterns.SwipeEvents.Enum.Events.SwipeUp:
                            this._swipeUpCallback = callback;
                            break;
                        case Patterns.SwipeEvents.Enum.Events.SwipeRight:
                            this._swipeRightCallback = callback;
                            break;
                        case Patterns.SwipeEvents.Enum.Events.SwipeLeft:
                            this._swipeLeftCallback = callback;
                            break;
                    }
                }
            }
            SwipeEvents_1.SwipeEvents = SwipeEvents;
        })(SwipeEvents = Patterns.SwipeEvents || (Patterns.SwipeEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var SwipeEvents;
        (function (SwipeEvents) {
            class SwipeEventsConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            SwipeEvents.SwipeEventsConfig = SwipeEventsConfig;
        })(SwipeEvents = Patterns.SwipeEvents || (Patterns.SwipeEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tabs;
        (function (Tabs) {
            var Enum;
            (function (Enum) {
                let CssClasses;
                (function (CssClasses) {
                    CssClasses["ActiveTab"] = "osui-tabs--is-active";
                    CssClasses["IsVertical"] = "osui-tabs--is-vertical";
                    CssClasses["IsHorizontal"] = "osui-tabs--is-horizontal";
                    CssClasses["IsJustified"] = "osui-tabs--is-justified";
                    CssClasses["HasDragGestures"] = "osui-tabs--has-drag";
                    CssClasses["Modifier"] = "osui-tabs--is-";
                    CssClasses["TabsWrapper"] = "osui-tabs";
                    CssClasses["TabsHeader"] = "osui-tabs__header";
                    CssClasses["TabsContent"] = "osui-tabs__content";
                    CssClasses["TabsHeaderItem"] = "osui-tabs__header-item";
                    CssClasses["TabsContentItem"] = "osui-tabs__content-item";
                })(CssClasses = Enum.CssClasses || (Enum.CssClasses = {}));
                let Attributes;
                (function (Attributes) {
                    Attributes["DataTab"] = "data-tab";
                })(Attributes = Enum.Attributes || (Enum.Attributes = {}));
                let CssProperty;
                (function (CssProperty) {
                    CssProperty["TabsHeight"] = "--tabs-height";
                    CssProperty["TabsHeaderItems"] = "--tabs-header-items";
                })(CssProperty = Enum.CssProperty || (Enum.CssProperty = {}));
                let Properties;
                (function (Properties) {
                    Properties["Height"] = "Height";
                    Properties["JustifyHeaders"] = "JustifyHeaders";
                    Properties["StartingTab"] = "StartingTab";
                    Properties["TabsOrientation"] = "TabsOrientation";
                    Properties["TabsVerticalPosition"] = "TabsVerticalPosition";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let ObserverOptions;
                (function (ObserverOptions) {
                    ObserverOptions["RootMargin"] = "1px";
                })(ObserverOptions = Enum.ObserverOptions || (Enum.ObserverOptions = {}));
            })(Enum = Tabs.Enum || (Tabs.Enum = {}));
        })(Tabs = Patterns.Tabs || (Patterns.Tabs = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tabs;
        (function (Tabs_1) {
            class Tabs extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Tabs_1.TabsConfig(configs));
                    this._tabsHeaderItemsElementsArray = [];
                    this._tabsContentItemsElementsArray = [];
                    this._addDragGestures = OutSystems.OSUI.Utils.IsRunningAsNativeApp();
                    this._disableObserver = true;
                }
                _disableDragObserver() {
                    this._disableObserver = true;
                }
                _enableDragObserver() {
                    this._disableObserver = false;
                }
                _getTargetIndex(tabIndex) {
                    let newTabIndex;
                    if (this._tabsHeaderItemsElementsArray[tabIndex]) {
                        newTabIndex = tabIndex;
                    }
                    else if (this._tabsHeaderItemsElementsArray[this.configs.StartingTab]) {
                        newTabIndex = this.configs.StartingTab;
                    }
                    else {
                        newTabIndex = 0;
                    }
                    return newTabIndex;
                }
                _handleKeypressEvent(e) {
                    let targetHeaderItemIndex;
                    switch (e.key) {
                        case OSUIFramework.GlobalEnum.Keycodes.ArrowRight:
                            targetHeaderItemIndex = this.configs.StartingTab + 1;
                            if (targetHeaderItemIndex < this._tabsHeaderItemsElementsArray.length) {
                                this.changeTab(targetHeaderItemIndex, undefined, true, true);
                            }
                            break;
                        case OSUIFramework.GlobalEnum.Keycodes.ArrowLeft:
                            targetHeaderItemIndex = this.configs.StartingTab - 1;
                            if (targetHeaderItemIndex >= 0) {
                                this.changeTab(targetHeaderItemIndex, undefined, true, true);
                            }
                            break;
                    }
                    const targetHeaderItem = this._tabsHeaderItemsElementsArray[targetHeaderItemIndex];
                    if (targetHeaderItem) {
                        targetHeaderItem.setFocus();
                    }
                }
                _prepareHeaderAndContentItems() {
                    this._hasSingleContent = this._tabsContentItemsElementsArray.length === 1;
                    this._activeTabHeaderElement = this._tabsHeaderItemsElementsArray[this.configs.StartingTab];
                    this._activeTabContentElement = this._hasSingleContent
                        ? this._tabsContentItemsElementsArray[0]
                        : this._tabsContentItemsElementsArray[this.configs.StartingTab];
                    if (this._hasSingleContent) {
                        this._activeTabContentElement.setActiveElement();
                    }
                    this._updateItemsConnection(false);
                }
                _scrollToTargetContent(newContentItem) {
                    if (newContentItem) {
                        const targetOffeset = newContentItem.getOffsetLeft();
                        this._tabsContentElement.scrollTo({
                            top: 0,
                            left: targetOffeset,
                            behavior: OSUIFramework.GlobalEnum.ScrollBehavior.Auto,
                        });
                    }
                }
                _setDragObserver() {
                    const observerOptions = {
                        root: this._tabsContentElement,
                        rootMargin: Tabs_1.Enum.ObserverOptions.RootMargin,
                        threshold: 1,
                    };
                    this._dragObserver = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && !this._disableObserver) {
                                const targetIndex = parseInt(OSUIFramework.Helper.Dom.Attribute.Get(entry.target, Tabs_1.Enum.Attributes.DataTab));
                                const currentHeaderItem = this._tabsHeaderItemsElementsArray[targetIndex];
                                OSUIFramework.Helper.AsyncInvocation(this.changeTab.bind(this), targetIndex, currentHeaderItem, true, false);
                            }
                        });
                    }, observerOptions);
                    this._tabsContentItemsElementsArray.forEach((item) => {
                        item.setOnDragObserver(this._dragObserver);
                    });
                }
                _setHeaderItemsCustomProperty() {
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Tabs_1.Enum.CssProperty.TabsHeaderItems, this._tabsHeaderItemsElementsArray.length);
                }
                _setHeight(height) {
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, Tabs_1.Enum.CssProperty.TabsHeight, height);
                }
                _setInitialOptions() {
                    this._setOrientation(this.configs.TabsOrientation);
                    this._setPosition(this.configs.TabsVerticalPosition);
                    this._setHeight(this.configs.Height);
                    this._setIsJustified(this.configs.JustifyHeaders);
                    this._setHeaderItemsCustomProperty();
                    this.changeTab(this.configs.StartingTab, undefined, false, true);
                    if (this._addDragGestures) {
                        this.toggleDragGestures(true);
                    }
                }
                _setIsJustified(isJustified) {
                    if (isJustified) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tabs_1.Enum.CssClasses.IsJustified);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tabs_1.Enum.CssClasses.IsJustified);
                    }
                }
                _setOrientation(orientation) {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tabs_1.Enum.CssClasses.Modifier + this._currentOrientation);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tabs_1.Enum.CssClasses.Modifier + orientation);
                    this._currentOrientation = orientation;
                }
                _setPosition(position) {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tabs_1.Enum.CssClasses.Modifier + this._currentVerticalPositon);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tabs_1.Enum.CssClasses.Modifier + position);
                    this._currentVerticalPositon = position;
                }
                _setTouchEvents() {
                    this._tabsContentElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._eventOnTouchstart);
                }
                _triggerOnChangeEvent(activeTab) {
                    if (this._eventTabsChange !== undefined) {
                        OSUIFramework.Helper.AsyncInvocation(this._eventTabsChange, this.widgetId, activeTab);
                    }
                }
                _unsetDragObserver() {
                    this._dragObserver.disconnect();
                }
                _updateItemsConnection(updateDataTab = true) {
                    let currentContentItem = this._tabsContentItemsElementsArray[0];
                    this._tabsHeaderItemsElementsArray.forEach((item, index) => {
                        if (!this._hasSingleContent) {
                            currentContentItem = this._tabsContentItemsElementsArray[index];
                        }
                        item.setAriaControlsAttribute(currentContentItem.widgetId);
                        currentContentItem.setAriaLabelledByAttribute(item.widgetId);
                        if (updateDataTab) {
                            item.setDataTab(index);
                            currentContentItem.setDataTab(index);
                        }
                    });
                }
                setA11YProperties() {
                    OSUIFramework.Helper.A11Y.RoleTabList(this._tabsHeaderElement);
                }
                setCallbacks() {
                    this._eventOnHeaderKeypress = this._handleKeypressEvent.bind(this);
                    this._eventOnTouchstart = this._enableDragObserver.bind(this);
                    this._tabsHeaderElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnHeaderKeypress);
                }
                setHtmlElements() {
                    this._tabsHeaderElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Tabs_1.Enum.CssClasses.TabsHeader);
                    this._tabsContentElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Tabs_1.Enum.CssClasses.TabsContent);
                }
                unsetCallbacks() {
                    this._tabsHeaderElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnHeaderKeypress);
                    this._eventOnHeaderKeypress = undefined;
                    if (this._addDragGestures) {
                        this._tabsContentElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._eventOnTouchstart);
                        this._eventOnTouchstart = undefined;
                        this._unsetDragObserver();
                    }
                }
                unsetHtmlElements() {
                    this._tabsHeaderElement = undefined;
                    this._tabsContentElement = undefined;
                }
                addContentItem(tabsContentItem) {
                    this._tabsContentItemsElementsArray.push(tabsContentItem);
                    if (this.isBuilt) {
                        OSUIFramework.Helper.AsyncInvocation(this._updateItemsConnection.bind(this));
                        if (this._activeTabContentElement === undefined) {
                            this._activeTabContentElement = tabsContentItem;
                        }
                        if (this._addDragGestures) {
                            tabsContentItem.setOnDragObserver(this._dragObserver);
                        }
                    }
                    else {
                        tabsContentItem.setDataTab(this._tabsContentItemsElementsArray.length - 1);
                    }
                }
                addHeaderItem(tabsHeaderItem) {
                    this._tabsHeaderItemsElementsArray.push(tabsHeaderItem);
                    const currentIndex = this._tabsHeaderItemsElementsArray.length - 1;
                    if (this.isBuilt) {
                        OSUIFramework.Helper.AsyncInvocation(this._updateItemsConnection.bind(this));
                        if ((this._activeTabHeaderElement === undefined || this._activeTabHeaderElement === null) &&
                            currentIndex === this.configs.StartingTab) {
                            OSUIFramework.Helper.AsyncInvocation(this.changeTab.bind(this), this.configs.StartingTab, tabsHeaderItem, false, true);
                        }
                        this._setHeaderItemsCustomProperty();
                    }
                    else {
                        tabsHeaderItem.setDataTab(currentIndex);
                    }
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setCallbacks();
                    this.setA11YProperties();
                    this._prepareHeaderAndContentItems();
                    this._setInitialOptions();
                    this.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Tabs_1.Enum.Properties.StartingTab:
                                console.warn(`Tabs (${this.widgetId}): changes to ${Tabs_1.Enum.Properties.StartingTab} parameter do not affect the tabs. Use the client action 'SetActiveTab' to affect the Tabs.`);
                                break;
                            case Tabs_1.Enum.Properties.Height:
                                this._setHeight(propertyValue);
                                break;
                            case Tabs_1.Enum.Properties.TabsOrientation:
                                this._setOrientation(propertyValue);
                                break;
                            case Tabs_1.Enum.Properties.TabsVerticalPosition:
                                this._setPosition(propertyValue);
                                break;
                            case Tabs_1.Enum.Properties.JustifyHeaders:
                                this._setIsJustified(propertyValue);
                                break;
                        }
                    }
                }
                changeTab(tabIndex = this.configs.StartingTab, tabsHeaderItem, triggerEvent, blockObserver) {
                    if (blockObserver) {
                        OSUIFramework.Helper.AsyncInvocation(this._disableDragObserver.bind(this));
                    }
                    if (this._activeTabHeaderElement === tabsHeaderItem ||
                        (tabIndex === this.configs.StartingTab && this.isBuilt && tabsHeaderItem === undefined)) {
                        return;
                    }
                    let newTabIndex;
                    let newHeaderItem;
                    if (tabsHeaderItem === undefined) {
                        newTabIndex = this._getTargetIndex(tabIndex);
                        newHeaderItem = this._tabsHeaderItemsElementsArray[newTabIndex];
                    }
                    else {
                        newTabIndex = tabIndex;
                        newHeaderItem = tabsHeaderItem;
                    }
                    if (!this._hasSingleContent || this._disableObserver) {
                        const newContentItem = this._tabsContentItemsElementsArray[newTabIndex];
                        if (newContentItem) {
                            this._activeTabContentElement.removeActiveElement();
                            newContentItem.setActiveElement();
                            this._activeTabContentElement = newContentItem;
                        }
                        if (this._addDragGestures) {
                            this._scrollToTargetContent(newContentItem);
                        }
                    }
                    if (this._activeTabHeaderElement) {
                        this._activeTabHeaderElement.removeActiveElement();
                    }
                    if (newHeaderItem) {
                        newHeaderItem.setActiveElement();
                        this._activeTabHeaderElement = newHeaderItem;
                    }
                    this.configs.StartingTab = newTabIndex;
                    if (triggerEvent) {
                        this._triggerOnChangeEvent(newTabIndex);
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                registerCallback(callback) {
                    if (this._eventTabsChange === undefined) {
                        this._eventTabsChange = callback;
                    }
                    else {
                        console.warn(`The ${OSUIFramework.GlobalEnum.PatternsNames.Tabs} already has the tabs change callback set.`);
                    }
                }
                removeContentItem(tabsContentItem) {
                    const currentIndex = this._tabsContentItemsElementsArray.indexOf(tabsContentItem);
                    this._tabsContentItemsElementsArray.splice(currentIndex, 1);
                    if (this._addDragGestures) {
                        tabsContentItem.unobserveDragObserver(this._dragObserver);
                    }
                }
                removeHeaderItem(tabsHeaderItem, isActiveItem) {
                    const currentIndex = this._tabsHeaderItemsElementsArray.indexOf(tabsHeaderItem);
                    this._tabsHeaderItemsElementsArray.splice(currentIndex, 1);
                    if (this.isBuilt) {
                        this._setHeaderItemsCustomProperty();
                        if (isActiveItem) {
                            this._activeTabHeaderElement = null;
                            OSUIFramework.Helper.AsyncInvocation(this.changeTab.bind(this), currentIndex - 1, undefined, false, true);
                        }
                    }
                }
                toggleDragGestures(addDragGestures) {
                    if (addDragGestures) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.HasDragGestures);
                        this._addDragGestures = true;
                        this._setTouchEvents();
                        this._setDragObserver();
                        this._scrollToTargetContent(this._activeTabContentElement);
                    }
                    else if (this._addDragGestures) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.HasDragGestures);
                        this._addDragGestures = false;
                        this._tabsContentElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._eventOnTouchstart);
                        this._unsetDragObserver();
                    }
                }
            }
            Tabs_1.Tabs = Tabs;
        })(Tabs = Patterns.Tabs || (Patterns.Tabs = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tabs;
        (function (Tabs) {
            class TabsConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== Tabs.Enum.Properties.StartingTab;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Tabs.Enum.Properties.TabsOrientation:
                            validatedValue = this.validateInRange(value, OSUIFramework.GlobalEnum.Orientation.Horizontal, OSUIFramework.GlobalEnum.Orientation.Vertical);
                            break;
                        case Tabs.Enum.Properties.TabsVerticalPosition:
                            validatedValue = this.validateInRange(value, OSUIFramework.GlobalEnum.Direction.Left, OSUIFramework.GlobalEnum.Direction.Right);
                            break;
                        case Tabs.Enum.Properties.JustifyHeaders:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case Tabs.Enum.Properties.Height:
                            validatedValue = this.validateString(value, 'auto');
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Tabs.TabsConfig = TabsConfig;
        })(Tabs = Patterns.Tabs || (Patterns.Tabs = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TabsContentItem;
        (function (TabsContentItem_1) {
            class TabsContentItem extends Patterns.AbstractPattern {
                constructor(uniqueId, tabsElem, configs) {
                    super(uniqueId, new TabsContentItem_1.TabsContentItemConfig(configs));
                    this._tabsElem = tabsElem;
                }
                _addElementToTabs() {
                    this._tabsElem.addContentItem(this);
                }
                setA11YProperties(isUpdate = true) {
                    if (isUpdate) {
                        OSUIFramework.Helper.A11Y.RoleTabPanel(this._selfElem);
                    }
                    if (this._isActive) {
                        OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaHiddenFalse(this._selfElem);
                    }
                    else {
                        OSUIFramework.Helper.A11Y.TabIndexFalse(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._selfElem);
                    }
                }
                build() {
                    super.build();
                    this._addElementToTabs();
                    this.setA11YProperties(false);
                    super.finishBuild();
                }
                dispose() {
                    this._tabsElem.removeContentItem(this);
                    super.dispose();
                }
                getDataTab() {
                    return this._dataTab;
                }
                getOffsetLeft() {
                    return this._selfElem.offsetLeft;
                }
                removeActiveElement() {
                    if (this._selfElem) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.ActiveTab);
                        this._isActive = false;
                        this.setA11YProperties();
                    }
                }
                setActiveElement() {
                    if (this._selfElem) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.ActiveTab);
                        this._isActive = true;
                        this.setA11YProperties();
                    }
                }
                setAriaLabelledByAttribute(headerItemId) {
                    OSUIFramework.Helper.A11Y.AriaLabelledBy(this._selfElem, headerItemId);
                }
                setDataTab(dataTab) {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, Patterns.Tabs.Enum.Attributes.DataTab, dataTab.toString());
                    this._dataTab = dataTab;
                }
                setOnDragObserver(observer) {
                    observer.observe(this._selfElem);
                }
                unobserveDragObserver(observer) {
                    observer.unobserve(this._selfElem);
                }
            }
            TabsContentItem_1.TabsContentItem = TabsContentItem;
        })(TabsContentItem = Patterns.TabsContentItem || (Patterns.TabsContentItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TabsContentItem;
        (function (TabsContentItem) {
            class TabsContentItemConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            TabsContentItem.TabsContentItemConfig = TabsContentItemConfig;
        })(TabsContentItem = Patterns.TabsContentItem || (Patterns.TabsContentItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TabsHeaderItem;
        (function (TabsHeaderItem_1) {
            class TabsHeaderItem extends Patterns.AbstractPattern {
                constructor(uniqueId, tabsElem, configs) {
                    super(uniqueId, new TabsHeaderItem_1.TabsHeaderItemConfig(configs));
                    this._isActive = false;
                    this._tabsElem = tabsElem;
                }
                _addElementToTabs() {
                    this._tabsElem.addHeaderItem(this);
                }
                _handleClickEvent() {
                    if (this._isActive === false) {
                        this._tabsElem.changeTab(this._dataTab, this, true, true);
                    }
                }
                _removeEvents() {
                    this._selfElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnTabsClick);
                }
                setA11YProperties(isUpdate = true) {
                    if (!isUpdate) {
                        OSUIFramework.Helper.A11Y.RoleTab(this._selfElem);
                    }
                    if (this._isActive) {
                        OSUIFramework.Helper.A11Y.TabIndexTrue(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaSelectedTrue(this._selfElem);
                    }
                    else {
                        OSUIFramework.Helper.A11Y.TabIndexFalse(this._selfElem);
                        OSUIFramework.Helper.A11Y.AriaSelectedFalse(this._selfElem);
                    }
                }
                setCallbacks() {
                    this._eventOnTabsClick = this._handleClickEvent.bind(this);
                    this._selfElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnTabsClick);
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._eventOnTabsClick = undefined;
                }
                build() {
                    super.build();
                    this._addElementToTabs();
                    this.setA11YProperties(false);
                    this.setCallbacks();
                    super.finishBuild();
                }
                dispose() {
                    this._tabsElem.removeHeaderItem(this, this._isActive);
                    this.unsetCallbacks();
                    super.dispose();
                }
                getDataTab() {
                    return this._dataTab;
                }
                removeActiveElement() {
                    if (this._selfElem) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.ActiveTab);
                        this._isActive = false;
                        this.setA11YProperties();
                    }
                }
                setActiveElement() {
                    if (this._selfElem) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Patterns.Tabs.Enum.CssClasses.ActiveTab);
                        this._isActive = true;
                        this.setA11YProperties();
                    }
                }
                setAriaControlsAttribute(contentItemId) {
                    OSUIFramework.Helper.A11Y.AriaControls(this._selfElem, contentItemId);
                }
                setDataTab(dataTab) {
                    OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, Patterns.Tabs.Enum.Attributes.DataTab, dataTab.toString());
                    this._dataTab = dataTab;
                }
                setFocus() {
                    this._selfElem.focus();
                }
            }
            TabsHeaderItem_1.TabsHeaderItem = TabsHeaderItem;
        })(TabsHeaderItem = Patterns.TabsHeaderItem || (Patterns.TabsHeaderItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TabsHeaderItem;
        (function (TabsHeaderItem) {
            class TabsHeaderItemConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            TabsHeaderItem.TabsHeaderItemConfig = TabsHeaderItemConfig;
        })(TabsHeaderItem = Patterns.TabsHeaderItem || (Patterns.TabsHeaderItem = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tooltip;
        (function (Tooltip) {
            class BoundsPosition {
                static get positionMatch() {
                    if (BoundsPosition._positionMatch.size === 0) {
                        const keys = Object.keys(OSUIFramework.GlobalEnum.Position);
                        keys.forEach((key) => BoundsPosition._positionMatch.set(OSUIFramework.GlobalEnum.Position[key], key));
                    }
                    return BoundsPosition._positionMatch;
                }
                static _hasOverflowHiddenProp(elem) {
                    if (elem === document.body || elem.classList.contains('screen-container')) {
                        return null;
                    }
                    else if (window.getComputedStyle(elem).getPropertyValue('overflow').indexOf('hidden') < 0) {
                        if (window.getComputedStyle(elem).getPropertyValue('position').indexOf('fixed') > -1) {
                            return null;
                        }
                        else {
                            return BoundsPosition._hasOverflowHiddenProp(elem.parentElement);
                        }
                    }
                    else {
                        return elem;
                    }
                }
                static _isItemOutOfViewElemBounds(elem, viewElem, activePosition) {
                    const elemBound = elem.getBoundingClientRect();
                    const elemHeight = elemBound.height;
                    const elemWidth = elemBound.width;
                    const viewElemBound = viewElem.getBoundingClientRect();
                    const viewElemHeight = viewElemBound.height;
                    const viewElemWidth = viewElemBound.width;
                    const out = {
                        top: elemBound.top < viewElemBound.top,
                        right: elemBound.right > viewElemBound.right,
                        bottom: elemBound.bottom > viewElemBound.bottom,
                        left: elemBound.left < viewElemBound.left,
                    };
                    if (out.top && elemHeight > viewElemHeight) {
                        out.top = false;
                    }
                    else if (out.top && elemBound.top >= 0 && elemBound.top - viewElemBound.top < elemHeight) {
                        out.top = false;
                    }
                    if (out.right && elemWidth > viewElemWidth) {
                        out.right = false;
                    }
                    else if (out.right && Math.abs(elemBound.left - viewElemBound.left) < elemWidth) {
                        out.right = false;
                    }
                    if (out.bottom && elemHeight > viewElemHeight) {
                        out.bottom = false;
                    }
                    else if (out.bottom && Math.abs(elemBound.bottom - viewElemBound.bottom) < elemHeight) {
                        out.top = false;
                    }
                    if (out.left && elemWidth > viewElemWidth) {
                        out.bottom = false;
                    }
                    else if (out.left && Math.abs(elemBound.right - viewElemBound.right) < elemWidth) {
                        out.right = false;
                    }
                    if (!(out.top || out.left || out.bottom || out.right)) {
                        return undefined;
                    }
                    let openAt = undefined;
                    if (out.top) {
                        switch (activePosition) {
                            case OSUIFramework.GlobalEnum.Position.Center:
                            case OSUIFramework.GlobalEnum.Position.Top:
                                if (out.right) {
                                    openAt = OSUIFramework.GlobalEnum.Position.BottomLeft;
                                }
                                else if (out.left) {
                                    openAt = OSUIFramework.GlobalEnum.Position.BottomRight;
                                }
                                else if (activePosition === OSUIFramework.GlobalEnum.Position.Top) {
                                    openAt = OSUIFramework.GlobalEnum.Position.Bottom;
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Position.TopRight:
                            case OSUIFramework.GlobalEnum.Position.TopLeft:
                                openAt = OSUIFramework.GlobalEnum.Position.BottomLeft;
                                if (out.right) {
                                    openAt = OSUIFramework.GlobalEnum.Position.BottomLeft;
                                }
                                else if (out.left) {
                                    openAt = OSUIFramework.GlobalEnum.Position.BottomRight;
                                }
                                else if (activePosition === OSUIFramework.GlobalEnum.Position.TopRight) {
                                    openAt = OSUIFramework.GlobalEnum.Position.BottomRight;
                                }
                                break;
                        }
                    }
                    else if (out.right) {
                        openAt = OSUIFramework.GlobalEnum.Position.Left;
                        switch (activePosition) {
                            case OSUIFramework.GlobalEnum.Position.Center:
                                if (out.bottom) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                }
                                else if (out.left) {
                                    openAt = OSUIFramework.GlobalEnum.Position.Left;
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Position.Top:
                            case OSUIFramework.GlobalEnum.Position.TopRight:
                                openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                break;
                            case OSUIFramework.GlobalEnum.Position.Bottom:
                            case OSUIFramework.GlobalEnum.Position.BottomRight:
                                if (out.bottom) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                }
                                break;
                        }
                    }
                    else if (out.bottom) {
                        switch (activePosition) {
                            case OSUIFramework.GlobalEnum.Position.Center:
                            case OSUIFramework.GlobalEnum.Position.Bottom:
                                if (out.right) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                }
                                else if (out.left) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopRight;
                                }
                                else if (activePosition === OSUIFramework.GlobalEnum.Position.Bottom) {
                                    openAt = OSUIFramework.GlobalEnum.Position.Top;
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Position.BottomRight:
                            case OSUIFramework.GlobalEnum.Position.BottomLeft:
                                if (out.right) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                }
                                else if (out.left) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopRight;
                                }
                                else if (activePosition === OSUIFramework.GlobalEnum.Position.BottomRight) {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopRight;
                                }
                                else {
                                    openAt = OSUIFramework.GlobalEnum.Position.TopLeft;
                                }
                                break;
                        }
                    }
                    else if (out.left) {
                        openAt = OSUIFramework.GlobalEnum.Position.Right;
                        switch (activePosition) {
                            case OSUIFramework.GlobalEnum.Position.Center:
                                openAt = OSUIFramework.GlobalEnum.Position.Right;
                                break;
                            case OSUIFramework.GlobalEnum.Position.Top:
                                openAt = OSUIFramework.GlobalEnum.Position.TopRight;
                                break;
                            case OSUIFramework.GlobalEnum.Position.TopLeft:
                                openAt = OSUIFramework.GlobalEnum.Position.TopRight;
                                break;
                        }
                    }
                    return openAt;
                }
                static CalcBounds(elem, elemToTest, elemToAddCssClassPos) {
                    const _infoToReturn = {
                        newPositionCssClass: undefined,
                        oldPositionCssClass: undefined,
                    };
                    let _newItemPosition = undefined;
                    const _checkIfElementPosition = BoundsPosition.GetElementPositionClass(elemToAddCssClassPos);
                    const _overflowElem = BoundsPosition._hasOverflowHiddenProp(elem.parentElement);
                    if (_overflowElem) {
                        _newItemPosition = BoundsPosition._isItemOutOfViewElemBounds(elemToTest, _overflowElem, _checkIfElementPosition);
                    }
                    else {
                        _newItemPosition = BoundsPosition._isItemOutOfViewElemBounds(elemToTest, document.querySelector('.screen-container > div'), _checkIfElementPosition);
                    }
                    if (_newItemPosition && _checkIfElementPosition && _newItemPosition !== _checkIfElementPosition) {
                        _infoToReturn.oldPositionCssClass = _checkIfElementPosition;
                    }
                    if (_newItemPosition) {
                        _infoToReturn.newPositionCssClass = _newItemPosition;
                    }
                    return _infoToReturn;
                }
                static GetElementPositionClass(element) {
                    if (element) {
                        const cssClasses = OSUIFramework.Helper.Dom.Styles.GetCssClasses(element);
                        for (const positionClass in OSUIFramework.GlobalEnum.Position) {
                            if (cssClasses.has(OSUIFramework.GlobalEnum.Position[positionClass])) {
                                return OSUIFramework.GlobalEnum.Position[positionClass];
                            }
                        }
                        return undefined;
                    }
                    else {
                        throw Error('The element does not exist, when trying to check for position class.');
                    }
                }
                static GetPositionByClass(cssClass) {
                    return BoundsPosition.positionMatch.get(cssClass);
                }
            }
            BoundsPosition._positionMatch = new Map();
            Tooltip.BoundsPosition = BoundsPosition;
        })(Tooltip = Patterns.Tooltip || (Patterns.Tooltip = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tooltip;
        (function (Tooltip) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                    Properties["IsHover"] = "IsHover";
                    Properties["Position"] = "Position";
                    Properties["StartVisible"] = "StartVisible";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["Pattern"] = "osui-tooltip";
                    CssClass["IsHover"] = "osui-tooltip--is-hover";
                    CssClass["StartVisible"] = "osui-tooltip--is-opened";
                    CssClass["Content"] = "osui-tooltip__content";
                    CssClass["BalloonWrapper"] = "osui-tooltip__balloon-wrapper";
                    CssClass["BalloonContent"] = "osui-tooltip__balloon-wrapper__balloon";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let AriaLabelText;
                (function (AriaLabelText) {
                    AriaLabelText["Content"] = "toggle tooltip";
                })(AriaLabelText = Enum.AriaLabelText || (Enum.AriaLabelText = {}));
            })(Enum = Tooltip.Enum || (Tooltip.Enum = {}));
        })(Tooltip = Patterns.Tooltip || (Patterns.Tooltip = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tooltip;
        (function (Tooltip_1) {
            class Tooltip extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new Tooltip_1.TooltipConfig(configs));
                    this._isOpen = this.configs.StartVisible;
                    this.setCallbacks();
                }
                _addEvents() {
                    if (this.configs.IsHover || this._isOpen) {
                        OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                    }
                    if (this.configs.IsHover === false || OSUIFramework.Helper.DeviceInfo.IsDesktop === false) {
                        this._tooltipContentElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                    }
                }
                _ballonCloseCallback() {
                    this._tooltipBallonContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventBallonContentClose);
                    const hasPosition = Tooltip_1.BoundsPosition.GetElementPositionClass(this._tooltipBallonWrapperElem);
                    if (hasPosition && hasPosition !== this.configs.Position) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._tooltipBallonWrapperElem, hasPosition);
                    }
                    this._managePosition();
                }
                _blurCallback() {
                    OSUIFramework.Helper.AsyncInvocation(() => {
                        if (this._tooltipBallonContentActiveElem) {
                            this._tooltipBallonContentActiveElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                        }
                        const _closestElem = document.activeElement.closest(OSUIFramework.Constants.Dot + Tooltip_1.Enum.CssClass.Pattern);
                        if (_closestElem !== this._selfElem) {
                            this.close();
                        }
                        else {
                            this._tooltipBallonContentActiveElem = document.activeElement;
                            this._tooltipBallonContentActiveElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                        }
                    });
                }
                _bodyClickCallback(eventName, e) {
                    if (this.isBuilt) {
                        const _clickedElem = e.target;
                        const _closestElem = _clickedElem.closest(OSUIFramework.Constants.Dot + Tooltip_1.Enum.CssClass.Pattern);
                        if (_closestElem !== this._selfElem) {
                            OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                            this.close();
                        }
                    }
                }
                _clickCallback(e) {
                    e.stopPropagation();
                    this.open();
                }
                _focusCallback() {
                    this._managePosition();
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tooltip_1.Enum.CssClass.StartVisible);
                    this._isOpen = true;
                }
                _managePosition() {
                    const _newPosition = Tooltip_1.BoundsPosition.CalcBounds(this._selfElem, this._tooltipBallonContentElem, this._tooltipBallonWrapperElem);
                    if (_newPosition.oldPositionCssClass !== undefined) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._tooltipBallonWrapperElem, _newPosition.oldPositionCssClass);
                    }
                    if (_newPosition.newPositionCssClass !== undefined) {
                        this.configs.Position = _newPosition.newPositionCssClass;
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._tooltipBallonWrapperElem, this.configs.Position);
                    }
                }
                _removeEvents() {
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                    this._tooltipContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventClick);
                    this._tooltipBallonContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventBallonContentClose);
                }
                _setA11YEvents() {
                    if (OSUIFramework.Helper.DeviceInfo.HasAccessibilityEnabled) {
                        this._tooltipContentElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                        this._tooltipContentElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventFocus);
                    }
                }
                _setInitialCssClasses() {
                    if (this.configs.IsHover) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tooltip_1.Enum.CssClass.IsHover);
                    }
                    if (this._isOpen) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tooltip_1.Enum.CssClass.StartVisible);
                    }
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._tooltipBallonWrapperElem, this.configs.Position);
                }
                _setIsHover() {
                    if (this.configs.IsHover) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tooltip_1.Enum.CssClass.IsHover);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tooltip_1.Enum.CssClass.IsHover);
                    }
                    this._removeEvents();
                    this._addEvents();
                }
                _setIsVisible() {
                    if (this.isBuilt === false) {
                        if (this.configs.StartVisible) {
                            OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Tooltip_1.Enum.CssClass.StartVisible);
                        }
                        else {
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tooltip_1.Enum.CssClass.StartVisible);
                        }
                        this._isOpen = this.configs.StartVisible;
                        this._removeEvents();
                        this._addEvents();
                    }
                    else {
                        console.warn(`Tooltip (${this.widgetId}): changes to StartOpen parameter do not affect the tooltip. Use the cliend actions 'TooltipOpen' and 'TooltipClose' to affect the Tooltip.`);
                    }
                }
                _setPosition(oldPosition) {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._tooltipBallonWrapperElem, oldPosition);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._tooltipBallonWrapperElem, this.configs.Position);
                    this._managePosition();
                }
                _unsetA11YEvents() {
                    if (OSUIFramework.Helper.DeviceInfo.HasAccessibilityEnabled) {
                        this._tooltipContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Blur, this._eventBlur);
                        this._tooltipContentElem.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventFocus);
                    }
                }
                setA11YProperties() {
                    OSUIFramework.Helper.A11Y.RoleTooltip(this._tooltipContentElem);
                    OSUIFramework.Helper.A11Y.AriaLabel(this._tooltipContentElem, Tooltip_1.Enum.AriaLabelText.Content);
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this._tooltipContentElem);
                    const tooltipBallonWrapperId = OSUIFramework.Helper.Dom.Attribute.Id(this._tooltipBallonWrapperElem);
                    OSUIFramework.Helper.A11Y.AriaDescribedBy(this._tooltipContentElem, tooltipBallonWrapperId);
                    OSUIFramework.Helper.A11Y.AriaLabelledBy(this._tooltipContentElem, tooltipBallonWrapperId);
                }
                setCallbacks() {
                    this._globalEventBody = this._bodyClickCallback.bind(this);
                    this._eventBlur = this._blurCallback.bind(this);
                    this._eventClick = this._clickCallback.bind(this);
                    this._eventFocus = this._focusCallback.bind(this);
                    this._eventBallonContentClose = this._ballonCloseCallback.bind(this);
                }
                setHtmlElements() {
                    this._tooltipContentElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Tooltip_1.Enum.CssClass.Content);
                    this._tooltipBallonContentElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Tooltip_1.Enum.CssClass.BalloonContent);
                    this._tooltipBallonWrapperElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, Tooltip_1.Enum.CssClass.BalloonWrapper);
                }
                unsetCallbacks() {
                    this._removeEvents();
                    this._unsetA11YEvents();
                    this._globalEventBody = undefined;
                    this._eventBlur = undefined;
                    this._eventClick = undefined;
                    this._eventFocus = undefined;
                    this._eventBallonContentClose = undefined;
                }
                unsetHtmlElements() {
                    this._tooltipContentElem = undefined;
                    this._tooltipBallonContentElem = undefined;
                    this._tooltipBallonWrapperElem = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this._setInitialCssClasses();
                    this.setA11YProperties();
                    this._setA11YEvents();
                    this._addEvents();
                    OSUIFramework.Helper.AsyncInvocation(() => {
                        this._managePosition();
                        this.finishBuild();
                    });
                }
                changeProperty(propertyName, propertyValue) {
                    const oldPosition = this.configs.Position;
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case Tooltip_1.Enum.Properties.IsHover:
                                this._setIsHover();
                                break;
                            case Tooltip_1.Enum.Properties.StartVisible:
                                this._setIsVisible();
                                break;
                            case Tooltip_1.Enum.Properties.Position:
                                this._setPosition(oldPosition);
                                break;
                        }
                    }
                }
                close() {
                    if (this._isOpen) {
                        this._tooltipBallonContentElem.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventBallonContentClose);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, Tooltip_1.Enum.CssClass.StartVisible);
                        this._isOpen = false;
                    }
                }
                dispose() {
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                open() {
                    if (this._isOpen === false) {
                        OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._globalEventBody);
                        this._focusCallback();
                    }
                }
            }
            Tooltip_1.Tooltip = Tooltip;
        })(Tooltip = Patterns.Tooltip || (Patterns.Tooltip = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var Tooltip;
        (function (Tooltip) {
            class TooltipConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
                validateCanChange(isBuilt, key) {
                    if (isBuilt) {
                        return key !== Tooltip.Enum.Properties.StartVisible;
                    }
                    return true;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case Tooltip.Enum.Properties.IsHover:
                            validatedValue = this.validateBoolean(value, true);
                            break;
                        case Tooltip.Enum.Properties.StartVisible:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        case Tooltip.Enum.Properties.Position:
                            validatedValue = this.validateInRange(value, OSUIFramework.GlobalEnum.Position.Right, Object.values(OSUIFramework.GlobalEnum.Position));
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            Tooltip.TooltipConfig = TooltipConfig;
        })(Tooltip = Patterns.Tooltip || (Patterns.Tooltip = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TouchEvents;
        (function (TouchEvents) {
            var Enum;
            (function (Enum) {
                let Properties;
                (function (Properties) {
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let Events;
                (function (Events) {
                    Events["End"] = "End";
                    Events["Move"] = "Move";
                    Events["Start"] = "Start";
                })(Events = Enum.Events || (Enum.Events = {}));
            })(Enum = TouchEvents.Enum || (TouchEvents.Enum = {}));
        })(TouchEvents = Patterns.TouchEvents || (Patterns.TouchEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TouchEvents;
        (function (TouchEvents_1) {
            class TouchEvents extends Patterns.AbstractPattern {
                constructor(uniqueId, configs) {
                    super(uniqueId, new TouchEvents_1.TouchEventsConfig(configs));
                    this._startX = 0;
                    this._startY = 0;
                    this._currentX = 0;
                    this._currentY = 0;
                    this._touchingElement = false;
                }
                _eventTouchEnd() {
                    if (this._touchingElement) {
                        this._touchingElement = false;
                        this._translateX = this._currentX - this._startX;
                        this._translateY = this._currentY - this._startY;
                        this._timeTaken = new Date().getTime() - this._startTime;
                        this._triggerTouchEnd();
                    }
                }
                _eventTouchMove(evt) {
                    if (this._touchingElement) {
                        this._currentX = evt.changedTouches[0].pageX;
                        this._currentY = evt.changedTouches[0].pageY;
                        this._translateX = this._currentX - this._startX;
                        this._translateY = this._currentY - this._startY;
                        this._triggerTouchMove(evt);
                    }
                }
                _eventTouchStart(evt) {
                    this._startTime = new Date().getTime();
                    this._startX = evt.changedTouches[0].pageX;
                    this._currentX = this._startX;
                    this._startY = evt.changedTouches[0].pageY;
                    this._currentY = this._startY;
                    this._touchingElement = true;
                    this._triggerTouchStart();
                }
                _removeEventListeners() {
                    if (this._trackableElement) {
                        this._trackableElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._startEvent);
                        this._trackableElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, this._moveEvent);
                        this._trackableElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchEnd, this._endEvent);
                    }
                }
                _setEventListeners() {
                    if (this._trackableElement) {
                        this._trackableElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, this._startEvent);
                        this._trackableElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, this._moveEvent);
                        this._trackableElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchEnd, this._endEvent);
                    }
                }
                _triggerTouchEnd() {
                    if (this._endEventCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._endEventCallback, this._currentX, this._currentY, this._translateX, this._translateY, this._timeTaken);
                    }
                }
                _triggerTouchMove(event) {
                    if (this._eventMoveCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._eventMoveCallback, this._currentX, this._currentY, this._translateX, this._translateY, event);
                    }
                }
                _triggerTouchStart() {
                    if (this._eventStartCallback) {
                        OSUIFramework.Helper.AsyncInvocation(this._eventStartCallback, this._startX, this._startY);
                    }
                }
                setCallbacks() {
                    this._endEvent = this._eventTouchEnd.bind(this);
                    this._moveEvent = this._eventTouchMove.bind(this);
                    this._startEvent = this._eventTouchStart.bind(this);
                    this._setEventListeners();
                }
                setHtmlElements() {
                    this._trackableElement = document.getElementById(this.configs.WidgetId);
                }
                unsetCallbacks() {
                    this._removeEventListeners();
                    this._endEvent = undefined;
                    this._moveEvent = undefined;
                    this._startEvent = undefined;
                }
                unsetHtmlElements() {
                    this._trackableElement = undefined;
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setCallbacks();
                    super.finishBuild();
                }
                dispose() {
                    super.dispose();
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                }
                registerCallback(eventName, callback) {
                    switch (eventName) {
                        case Patterns.TouchEvents.Enum.Events.End:
                            this._endEventCallback = callback;
                            break;
                        case Patterns.TouchEvents.Enum.Events.Move:
                            this._eventMoveCallback = callback;
                            break;
                        case Patterns.TouchEvents.Enum.Events.Start:
                            this._eventStartCallback = callback;
                            break;
                    }
                }
            }
            TouchEvents_1.TouchEvents = TouchEvents;
        })(TouchEvents = Patterns.TouchEvents || (Patterns.TouchEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OSUIFramework;
(function (OSUIFramework) {
    var Patterns;
    (function (Patterns) {
        var TouchEvents;
        (function (TouchEvents) {
            class TouchEventsConfig extends Patterns.AbstractConfiguration {
                constructor(config) {
                    super(config);
                }
            }
            TouchEvents.TouchEventsConfig = TouchEventsConfig;
        })(TouchEvents = Patterns.TouchEvents || (Patterns.TouchEvents = {}));
    })(Patterns = OSUIFramework.Patterns || (OSUIFramework.Patterns = {}));
})(OSUIFramework || (OSUIFramework = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Menu;
        (function (Menu) {
            function Hide() {
                const layout = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.Constants.LayoutClass);
                if (layout) {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(layout, "menu-visible");
                    const menuIcon = OSUIFramework.Helper.Dom.ClassSelector(document, "menu-icon");
                    menuIcon && menuIcon.focus();
                }
            }
            Menu.Hide = Hide;
            function Show() {
                const layout = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.Constants.LayoutClass);
                if (layout) {
                    OSUIFramework.Helper.Dom.Styles.AddClass(layout, "menu-visible");
                    const menu = OSUIFramework.Helper.Dom.ClassSelector(document, "app-menu-content");
                    menu && menu.focus();
                }
            }
            Menu.Show = Show;
            function Toggle() {
                const layout = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.Constants.LayoutClass);
                if (layout) {
                    const isExpanded = OSUIFramework.Helper.Dom.Styles.ContainsClass(layout, "menu-visible");
                    if (isExpanded) {
                        Hide();
                    }
                    else {
                        Show();
                    }
                }
            }
            Menu.Toggle = Toggle;
        })(Menu = OSUI.Menu || (OSUI.Menu = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var ErrorCodes;
        (function (ErrorCodes) {
            ErrorCodes.Success = {
                code: '200',
                message: 'Success',
            };
            ErrorCodes.Dropdown = {
                FailChangeProperty: 'OSUI-API-01001',
                FailClear: 'OSUI-API-01002',
                FailDisable: 'OSUI-API-01003',
                FailDispose: 'OSUI-API-01004',
                FailEnable: 'OSUI-API-01005',
                FailGetSelectedValues: 'OSUI-API-01006',
                FailRegisterCallback: 'OSUI-API-01007',
                FailSetValidation: 'OSUI-API-01008',
            };
            ErrorCodes.Notification = {
                FailChangeProperty: 'OSUI-API-02001',
                FailDispose: 'OSUI-API-02002',
                FailRegisterCallback: 'OSUI-API-02003',
            };
            ErrorCodes.SectionIndex = {
                FailChangeProperty: 'OSUI-API-03001',
                FailDisable: 'OSUI-API-03002',
                FailDispose: 'OSUI-API-03003',
                FailEnable: 'OSUI-API-03004',
                FailRegisterCallback: 'OSUI-API-03005',
            };
        })(ErrorCodes = OSUI.ErrorCodes || (OSUI.ErrorCodes = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        function GetVersion() {
            return OSUIFramework.Constants.OSUIVersion;
        }
        OSUI.GetVersion = GetVersion;
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Network;
        (function (Network) {
            function GetStatus() {
                return navigator.onLine;
            }
            Network.GetStatus = GetStatus;
            function GetType() {
                let typeofConnection = 'webbrowser';
                if (navigator.connection !== undefined && navigator.connection.type !== undefined) {
                    typeofConnection = navigator.connection.type;
                }
                return typeofConnection;
            }
            Network.GetType = GetType;
        })(Network = OSUI.Network || (OSUI.Network = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var AccordionAPI;
            (function (AccordionAPI) {
                const _accordionMap = new Map();
                function ChangeProperty(accordionId, propertyName, propertyValue) {
                    const accordion = GetAccordionById(accordionId);
                    accordion.changeProperty(propertyName, propertyValue);
                }
                AccordionAPI.ChangeProperty = ChangeProperty;
                function CollapseAllItems(accordionId) {
                    const accordion = GetAccordionById(accordionId);
                    accordion.collapseAllItems();
                }
                AccordionAPI.CollapseAllItems = CollapseAllItems;
                function Create(accordionId, configs) {
                    if (_accordionMap.has(accordionId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Accordion} registered under id: ${accordionId}`);
                    }
                    const _newAccordion = new OSUIFramework.Patterns.Accordion.Accordion(accordionId, JSON.parse(configs));
                    _accordionMap.set(accordionId, _newAccordion);
                    return _newAccordion;
                }
                AccordionAPI.Create = Create;
                function Dispose(accordionId) {
                    const accordion = GetAccordionById(accordionId);
                    accordion.dispose();
                    _accordionMap.delete(accordion.uniqueId);
                }
                AccordionAPI.Dispose = Dispose;
                function ExpandAllItems(accordionId) {
                    const accordion = GetAccordionById(accordionId);
                    accordion.expandAllItems();
                }
                AccordionAPI.ExpandAllItems = ExpandAllItems;
                function GetAllAccordions() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_accordionMap);
                }
                AccordionAPI.GetAllAccordions = GetAllAccordions;
                function GetAccordionById(AccordionId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Accordion', AccordionId, _accordionMap);
                }
                AccordionAPI.GetAccordionById = GetAccordionById;
                function Initialize(accordionId) {
                    const accordion = GetAccordionById(accordionId);
                    accordion.build();
                    return accordion;
                }
                AccordionAPI.Initialize = Initialize;
            })(AccordionAPI = Patterns.AccordionAPI || (Patterns.AccordionAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var AccordionItemAPI;
            (function (AccordionItemAPI) {
                const _accordionMap = new Map();
                const _accordionItemMap = new Map();
                function GetAccordionByItem(accordionItemId) {
                    let accordion;
                    if (_accordionMap.has(accordionItemId)) {
                        accordion = Patterns.AccordionAPI.GetAccordionById(_accordionMap.get(accordionItemId));
                    }
                    else {
                        const elem = OSUIFramework.Helper.Dom.GetElementByUniqueId(accordionItemId);
                        const accordionElem = elem.closest(OSUIFramework.Constants.Dot + OSUIFramework.Patterns.Accordion.Enum.CssClass.Pattern);
                        if (accordionElem) {
                            const uniqueId = accordionElem.getAttribute('name');
                            accordion = Patterns.AccordionAPI.GetAccordionById(uniqueId);
                        }
                    }
                    return accordion;
                }
                AccordionItemAPI.GetAccordionByItem = GetAccordionByItem;
                function ChangeProperty(accordionItemId, propertyName, propertyValue) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.changeProperty(propertyName, propertyValue);
                }
                AccordionItemAPI.ChangeProperty = ChangeProperty;
                function Collapse(accordionItemId) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.close();
                }
                AccordionItemAPI.Collapse = Collapse;
                function Create(accordionItemId, configs) {
                    const config = JSON.parse(configs);
                    if (_accordionItemMap.has(accordionItemId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.AccordionItem} registered under id: ${accordionItemId}`);
                    }
                    const accordion = GetAccordionByItem(accordionItemId);
                    const _newAccordionItem = new OSUIFramework.Patterns.AccordionItem.AccordionItem(accordionItemId, config, accordion);
                    _accordionItemMap.set(accordionItemId, _newAccordionItem);
                    _newAccordionItem.build();
                    if (accordion !== undefined) {
                        _accordionMap.set(accordionItemId, accordion.uniqueId);
                        accordion.addAccordionItem(_newAccordionItem.uniqueId, _newAccordionItem);
                    }
                    return _newAccordionItem;
                }
                AccordionItemAPI.Create = Create;
                function Dispose(accordionItemId) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.dispose();
                    _accordionItemMap.delete(accordionItem.uniqueId);
                    _accordionMap.delete(accordionItem.uniqueId);
                }
                AccordionItemAPI.Dispose = Dispose;
                function Expand(accordionItemId) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.open();
                }
                AccordionItemAPI.Expand = Expand;
                function GetAllAccordionItems() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_accordionItemMap);
                }
                AccordionItemAPI.GetAllAccordionItems = GetAllAccordionItems;
                function GetAccordionItemById(accordionItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('AccordionItem', accordionItemId, _accordionItemMap);
                }
                AccordionItemAPI.GetAccordionItemById = GetAccordionItemById;
                function Initialize(accordionItemId) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.build();
                    return accordionItem;
                }
                AccordionItemAPI.Initialize = Initialize;
                function RegisterCallback(accordionItemId, callback) {
                    const accordionItem = GetAccordionItemById(accordionItemId);
                    accordionItem.registerCallback(callback);
                }
                AccordionItemAPI.RegisterCallback = RegisterCallback;
            })(AccordionItemAPI = Patterns.AccordionItemAPI || (Patterns.AccordionItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var AnimatedLabelAPI;
            (function (AnimatedLabelAPI) {
                const _animatedLabelsMap = new Map();
                function ChangeProperty(animatedLabelId, propertyName, propertyValue) {
                    const animatedlabel = GetAnimatedLabelById(animatedLabelId);
                    animatedlabel.changeProperty(propertyName, propertyValue);
                }
                AnimatedLabelAPI.ChangeProperty = ChangeProperty;
                function Create(animatedLabelId, configs) {
                    if (_animatedLabelsMap.has(animatedLabelId)) {
                        throw new Error(`There is already an ${OSUIFramework.GlobalEnum.PatternsNames.AnimatedLabel} registered under id: ${animatedLabelId}`);
                    }
                    const _newAnimatedLabel = new OSUIFramework.Patterns.AnimatedLabel.AnimatedLabel(animatedLabelId, JSON.parse(configs));
                    _animatedLabelsMap.set(animatedLabelId, _newAnimatedLabel);
                    return _newAnimatedLabel;
                }
                AnimatedLabelAPI.Create = Create;
                function Dispose(animatedLabelId) {
                    const animatedlabel = GetAnimatedLabelById(animatedLabelId);
                    animatedlabel.dispose();
                    _animatedLabelsMap.delete(animatedlabel.uniqueId);
                }
                AnimatedLabelAPI.Dispose = Dispose;
                function GetAllAnimatedLabels() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_animatedLabelsMap);
                }
                AnimatedLabelAPI.GetAllAnimatedLabels = GetAllAnimatedLabels;
                function GetAnimatedLabelById(animatedLabelId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.AnimatedLabel, animatedLabelId, _animatedLabelsMap);
                }
                AnimatedLabelAPI.GetAnimatedLabelById = GetAnimatedLabelById;
                function Initialize(animatedLabelId) {
                    const animatedlabel = GetAnimatedLabelById(animatedLabelId);
                    animatedlabel.build();
                    return animatedlabel;
                }
                AnimatedLabelAPI.Initialize = Initialize;
                function UpdateOnRender(animatedLabelId) {
                    const animatedlabel = GetAnimatedLabelById(animatedLabelId);
                    animatedlabel.updateOnRender();
                    return animatedlabel;
                }
                AnimatedLabelAPI.UpdateOnRender = UpdateOnRender;
            })(AnimatedLabelAPI = Patterns.AnimatedLabelAPI || (Patterns.AnimatedLabelAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var ButtonLoadingAPI;
            (function (ButtonLoadingAPI) {
                const _buttonsLoadingMap = new Map();
                function ChangeProperty(buttonLoadingId, propertyName, propertyValue) {
                    const ButtonLoading = GetButtonLoadingById(buttonLoadingId);
                    ButtonLoading.changeProperty(propertyName, propertyValue);
                }
                ButtonLoadingAPI.ChangeProperty = ChangeProperty;
                function Create(buttonLoadingId, configs) {
                    if (_buttonsLoadingMap.has(buttonLoadingId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.ButtonLoading} registered under id: ${buttonLoadingId}`);
                    }
                    const _newButtonLoading = new OSUIFramework.Patterns.ButtonLoading.ButtonLoading(buttonLoadingId, JSON.parse(configs));
                    _buttonsLoadingMap.set(buttonLoadingId, _newButtonLoading);
                    return _newButtonLoading;
                }
                ButtonLoadingAPI.Create = Create;
                function Destroy(buttonLoadingId) {
                    const buttonLoading = GetButtonLoadingById(buttonLoadingId);
                    buttonLoading.dispose();
                    _buttonsLoadingMap.delete(buttonLoading.uniqueId);
                }
                ButtonLoadingAPI.Destroy = Destroy;
                function GetAllButtonsLoading() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_buttonsLoadingMap);
                }
                ButtonLoadingAPI.GetAllButtonsLoading = GetAllButtonsLoading;
                function GetButtonLoadingById(buttonLoadingId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.ButtonLoading, buttonLoadingId, _buttonsLoadingMap);
                }
                ButtonLoadingAPI.GetButtonLoadingById = GetButtonLoadingById;
                function Initialize(buttonLoadingId) {
                    const buttonLoading = GetButtonLoadingById(buttonLoadingId);
                    buttonLoading.build();
                    return buttonLoading;
                }
                ButtonLoadingAPI.Initialize = Initialize;
            })(ButtonLoadingAPI = Patterns.ButtonLoadingAPI || (Patterns.ButtonLoadingAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var CarouselAPI;
            (function (CarouselAPI) {
                const _carouselItemsMap = new Map();
                function ChangeProperty(carouselId, propertyName, propertyValue) {
                    const _carouselItem = GetCarouselItemById(carouselId);
                    _carouselItem.changeProperty(propertyName, propertyValue);
                }
                CarouselAPI.ChangeProperty = ChangeProperty;
                function Create(carouselId, configs, provider) {
                    if (_carouselItemsMap.has(carouselId)) {
                        throw new Error(`There is already an ${OSUIFramework.GlobalEnum.PatternsNames.Carousel} registered under id: ${carouselId}`);
                    }
                    const _carouselItem = OSUIFramework.Patterns.Carousel.Factory.NewCarousel(carouselId, configs, provider);
                    _carouselItemsMap.set(carouselId, _carouselItem);
                    return _carouselItem;
                }
                CarouselAPI.Create = Create;
                function Dispose(carouselId) {
                    const _carouselItem = GetCarouselItemById(carouselId);
                    _carouselItem.dispose();
                    _carouselItemsMap.delete(_carouselItem.uniqueId);
                }
                CarouselAPI.Dispose = Dispose;
                function GetAllCarouselItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_carouselItemsMap);
                }
                CarouselAPI.GetAllCarouselItemsMap = GetAllCarouselItemsMap;
                function GetCarouselItemById(carouselId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Carousel', carouselId, _carouselItemsMap);
                }
                CarouselAPI.GetCarouselItemById = GetCarouselItemById;
                function GoTo(carouselId, index) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.goTo(index);
                }
                CarouselAPI.GoTo = GoTo;
                function Initialize(carouselId) {
                    const _carouselItem = GetCarouselItemById(carouselId);
                    _carouselItem.build();
                    return _carouselItem;
                }
                CarouselAPI.Initialize = Initialize;
                function Next(carouselId) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.next();
                }
                CarouselAPI.Next = Next;
                function Previous(carouselId) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.previous();
                }
                CarouselAPI.Previous = Previous;
                function RegisterProviderCallback(carouselId, eventName, callback) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.registerProviderCallback(eventName, callback);
                }
                CarouselAPI.RegisterProviderCallback = RegisterProviderCallback;
                function ToggleDrag(carouselId, hasDrag) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.toggleDrag(hasDrag);
                }
                CarouselAPI.ToggleDrag = ToggleDrag;
                function UpdateOnRender(carouselId) {
                    const carousel = GetCarouselItemById(carouselId);
                    carousel.updateOnRender();
                    return carousel;
                }
                CarouselAPI.UpdateOnRender = UpdateOnRender;
            })(CarouselAPI = Patterns.CarouselAPI || (Patterns.CarouselAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var DatePickerAPI;
            (function (DatePickerAPI) {
                const _datePickerItemsMap = new Map();
                function ChangeProperty(datePickerId, propertyName, propertyValue) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.changeProperty(propertyName, propertyValue);
                }
                DatePickerAPI.ChangeProperty = ChangeProperty;
                function Clear(datePickerId) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.clear();
                    return _datePickerItem;
                }
                DatePickerAPI.Clear = Clear;
                function Close(datePickerId) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.close();
                    return _datePickerItem;
                }
                DatePickerAPI.Close = Close;
                function Create(datePickerId, configs, mode, provider) {
                    if (_datePickerItemsMap.has(datePickerId)) {
                        throw new Error(`There is already an DatePicker registered under id: ${datePickerId}`);
                    }
                    const _datePickerItem = OSUIFramework.Patterns.DatePicker.Factory.NewDatePicker(datePickerId, configs, mode, provider);
                    _datePickerItemsMap.set(datePickerId, _datePickerItem);
                    return _datePickerItem;
                }
                DatePickerAPI.Create = Create;
                function Dispose(datePickerId) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.dispose();
                    _datePickerItemsMap.delete(_datePickerItem.uniqueId);
                }
                DatePickerAPI.Dispose = Dispose;
                function GetAllDatePickerItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_datePickerItemsMap);
                }
                DatePickerAPI.GetAllDatePickerItemsMap = GetAllDatePickerItemsMap;
                function GetDatePickerItemById(datePickerId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('DatePicker', datePickerId, _datePickerItemsMap);
                }
                DatePickerAPI.GetDatePickerItemById = GetDatePickerItemById;
                function Initialize(datePickerId) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.build();
                    return _datePickerItem;
                }
                DatePickerAPI.Initialize = Initialize;
                function Open(datePickerId) {
                    const _datePickerItem = GetDatePickerItemById(datePickerId);
                    _datePickerItem.open();
                    return _datePickerItem;
                }
                DatePickerAPI.Open = Open;
                function RegisterProviderCallback(datePickerId, eventName, callback) {
                    const _datePicker = this.GetDatePickerItemById(datePickerId);
                    _datePicker.registerProviderCallback(eventName, callback);
                }
                DatePickerAPI.RegisterProviderCallback = RegisterProviderCallback;
                function Redraw(datePickerId) {
                    const _datePicker = this.GetDatePickerItemById(datePickerId);
                    _datePicker.redraw();
                }
                DatePickerAPI.Redraw = Redraw;
            })(DatePickerAPI = Patterns.DatePickerAPI || (Patterns.DatePickerAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var DropdownAPI;
            (function (DropdownAPI) {
                const _dropdownItemsMap = new Map();
                function ChangeProperty(dropdownId, propertyName, propertyValue) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.changeProperty(propertyName, propertyValue);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailChangeProperty;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.ChangeProperty = ChangeProperty;
                function Clear(dropdownId) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.clear();
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailClear;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.Clear = Clear;
                function Create(dropdownId, mode, provider, configs) {
                    if (_dropdownItemsMap.has(dropdownId)) {
                        throw new Error(`There is already an Dropdown registered under id: ${dropdownId}`);
                    }
                    const _dropdownItem = OSUIFramework.Patterns.Dropdown.Factory.NewDropdown(dropdownId, mode, provider, configs);
                    _dropdownItemsMap.set(dropdownId, _dropdownItem);
                    return _dropdownItem;
                }
                DropdownAPI.Create = Create;
                function Disable(dropdownId) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.disable();
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailDisable;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.Disable = Disable;
                function Dispose(dropdownId) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.dispose();
                        _dropdownItemsMap.delete(_dropdownItem.uniqueId);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailDispose;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.Dispose = Dispose;
                function Enable(dropdownId) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.enable();
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailEnable;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.Enable = Enable;
                function GetAllDropDownItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_dropdownItemsMap);
                }
                DropdownAPI.GetAllDropDownItemsMap = GetAllDropDownItemsMap;
                function GetDropdownById(dropdownId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.Dropdown, dropdownId, _dropdownItemsMap);
                }
                DropdownAPI.GetDropdownById = GetDropdownById;
                function GetSelectedValues(dropdownId) {
                    const responseObj = {
                        code: OSUI.ErrorCodes.Success.code,
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        value: '',
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        responseObj.value = _dropdownItem.getSelectedValues();
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailGetSelectedValues;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.GetSelectedValues = GetSelectedValues;
                function Initialize(dropdownId) {
                    const _dropdownItem = GetDropdownById(dropdownId);
                    _dropdownItem.build();
                    return _dropdownItem;
                }
                DropdownAPI.Initialize = Initialize;
                function RegisterProviderCallback(dropdownId, eventName, callback) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = this.GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.registerProviderCallback(eventName, callback);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailRegisterCallback;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.RegisterProviderCallback = RegisterProviderCallback;
                function SetValidation(dropdownId, isValid, validationMessage) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _dropdownItem = GetDropdownById(dropdownId);
                    try {
                        _dropdownItem.validation(isValid, validationMessage);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Dropdown.FailSetValidation;
                    }
                    return JSON.stringify(responseObj);
                }
                DropdownAPI.SetValidation = SetValidation;
            })(DropdownAPI = Patterns.DropdownAPI || (Patterns.DropdownAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var DropdownServerSideItemAPI;
            (function (DropdownServerSideItemAPI) {
                const _dropdownServerSideItemItemsMap = new Map();
                function ChangeProperty(dropdownServerSideItemId, propertyName, propertyValue) {
                    const _dropdownServerSideItemItem = GetDropdownServerSideItemItemById(dropdownServerSideItemId);
                    _dropdownServerSideItemItem.changeProperty(propertyName, propertyValue);
                }
                DropdownServerSideItemAPI.ChangeProperty = ChangeProperty;
                function Create(dropdownServerSideItemId, configs) {
                    if (_dropdownServerSideItemItemsMap.has(dropdownServerSideItemId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.DropdownServerSideItem} registered under id: ${dropdownServerSideItemId}`);
                    }
                    const _dropdownServerSideItemItem = new OSUIFramework.Patterns.DropdownServerSideItem.DropdownServerSideItem(dropdownServerSideItemId, JSON.parse(configs));
                    _dropdownServerSideItemItemsMap.set(dropdownServerSideItemId, _dropdownServerSideItemItem);
                    return _dropdownServerSideItemItem;
                }
                DropdownServerSideItemAPI.Create = Create;
                function Dispose(dropdownServerSideItemId) {
                    const _dropdownServerSideItemItem = GetDropdownServerSideItemItemById(dropdownServerSideItemId);
                    _dropdownServerSideItemItem.dispose();
                    _dropdownServerSideItemItemsMap.delete(_dropdownServerSideItemItem.uniqueId);
                }
                DropdownServerSideItemAPI.Dispose = Dispose;
                function GetAllDropdownServerSideItemItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_dropdownServerSideItemItemsMap);
                }
                DropdownServerSideItemAPI.GetAllDropdownServerSideItemItemsMap = GetAllDropdownServerSideItemItemsMap;
                function GetDropdownServerSideItemItemById(dropdownServerSideItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('DropdownServerSideItem', dropdownServerSideItemId, _dropdownServerSideItemItemsMap);
                }
                DropdownServerSideItemAPI.GetDropdownServerSideItemItemById = GetDropdownServerSideItemItemById;
                function Initialize(dropdownServerSideItemId) {
                    const _dropdownServerSideItemItem = GetDropdownServerSideItemItemById(dropdownServerSideItemId);
                    _dropdownServerSideItemItem.build();
                    return _dropdownServerSideItemItem;
                }
                DropdownServerSideItemAPI.Initialize = Initialize;
                function RegisterCallback(dropdownServerSideItemId, eventName, callback) {
                    const _dropdownServerSideItemItem = this.GetDropdownServerSideItemItemById(dropdownServerSideItemId);
                    _dropdownServerSideItemItem.registerCallback(eventName, callback);
                }
                DropdownServerSideItemAPI.RegisterCallback = RegisterCallback;
            })(DropdownServerSideItemAPI = Patterns.DropdownServerSideItemAPI || (Patterns.DropdownServerSideItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var FlipContentAPI;
            (function (FlipContentAPI) {
                const _flipContentMap = new Map();
                function ChangeProperty(flipId, propertyName, propertyValue) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.changeProperty(propertyName, propertyValue);
                }
                FlipContentAPI.ChangeProperty = ChangeProperty;
                function Create(flipId, configs) {
                    if (_flipContentMap.has(flipId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.FlipContent} registered under id: ${flipId}`);
                    }
                    const _newFlip = new OSUIFramework.Patterns.FlipContent.FlipContent(flipId, JSON.parse(configs));
                    _flipContentMap.set(flipId, _newFlip);
                    return _newFlip;
                }
                FlipContentAPI.Create = Create;
                function Destroy(flipId) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.dispose();
                    _flipContentMap.delete(flipContent.uniqueId);
                }
                FlipContentAPI.Destroy = Destroy;
                function GetAllFlipContent() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_flipContentMap);
                }
                FlipContentAPI.GetAllFlipContent = GetAllFlipContent;
                function GetFlipContentById(flipId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('FlipContent', flipId, _flipContentMap);
                }
                FlipContentAPI.GetFlipContentById = GetFlipContentById;
                function Initialize(flipId) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.build();
                    return flipContent;
                }
                FlipContentAPI.Initialize = Initialize;
                function RegisterCallback(flipId, callback) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.registerCallback(callback);
                }
                FlipContentAPI.RegisterCallback = RegisterCallback;
                function ShowBackContent(flipId) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.showBackContent();
                }
                FlipContentAPI.ShowBackContent = ShowBackContent;
                function ShowFrontContent(flipId) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.showFrontContent();
                }
                FlipContentAPI.ShowFrontContent = ShowFrontContent;
                function ToggleFlipContent(flipId) {
                    const flipContent = GetFlipContentById(flipId);
                    flipContent.toggleFlipContent();
                }
                FlipContentAPI.ToggleFlipContent = ToggleFlipContent;
            })(FlipContentAPI = Patterns.FlipContentAPI || (Patterns.FlipContentAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var FloatingActionsAPI;
            (function (FloatingActionsAPI) {
                const _floatingActionsMap = new Map();
                function ChangeProperty(floatingActionsId, propertyName, propertyValue) {
                    const floatingActions = GetFloatingActionsById(floatingActionsId);
                    floatingActions.changeProperty(propertyName, propertyValue);
                }
                FloatingActionsAPI.ChangeProperty = ChangeProperty;
                function Create(floatingActionsId, configs) {
                    if (_floatingActionsMap.has(floatingActionsId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.FloatingActions} registered under id: ${floatingActionsId}`);
                    }
                    const _newFloatingActions = new OSUIFramework.Patterns.FloatingActions.FloatingActions(floatingActionsId, JSON.parse(configs));
                    _floatingActionsMap.set(floatingActionsId, _newFloatingActions);
                    return _newFloatingActions;
                }
                FloatingActionsAPI.Create = Create;
                function Dispose(floatingActionsId) {
                    const floatingAction = GetFloatingActionsById(floatingActionsId);
                    floatingAction.dispose();
                    _floatingActionsMap.delete(floatingAction.uniqueId);
                }
                FloatingActionsAPI.Dispose = Dispose;
                function GetAllFloatingActions() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_floatingActionsMap);
                }
                FloatingActionsAPI.GetAllFloatingActions = GetAllFloatingActions;
                function GetFloatingActionsById(floatingActionsId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('FloatingAction', floatingActionsId, _floatingActionsMap);
                }
                FloatingActionsAPI.GetFloatingActionsById = GetFloatingActionsById;
                function Initialize(floatingActionId) {
                    const floatingAction = GetFloatingActionsById(floatingActionId);
                    floatingAction.build();
                    return floatingAction;
                }
                FloatingActionsAPI.Initialize = Initialize;
                function RegisterCallback(floatingActionId, callback) {
                    const floatingAction = GetFloatingActionsById(floatingActionId);
                    floatingAction.registerCallback(callback);
                }
                FloatingActionsAPI.RegisterCallback = RegisterCallback;
            })(FloatingActionsAPI = Patterns.FloatingActionsAPI || (Patterns.FloatingActionsAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var FloatingActionsItemAPI;
            (function (FloatingActionsItemAPI) {
                const _floatingActionsMap = new Map();
                const _floatingActionsItemMap = new Map();
                function GetFloatingActionsByItem(floatingActionsItemId) {
                    let floatingActions;
                    if (_floatingActionsMap.has(floatingActionsItemId)) {
                        floatingActions = Patterns.FloatingActionsAPI.GetFloatingActionsById(_floatingActionsMap.get(floatingActionsItemId));
                    }
                    else {
                        const elem = OSUIFramework.Helper.Dom.GetElementByUniqueId(floatingActionsItemId);
                        const floating = elem.closest(OSUIFramework.Patterns.FloatingActions.Enum.CssClasses.FloatingActionWrapper);
                        if (!floating) {
                            throw Error(`This ${OSUIFramework.GlobalEnum.PatternsNames.FloatingActionsItem} does not belong to any ${OSUIFramework.GlobalEnum.PatternsNames.FloatingActions} pattern.`);
                        }
                        const uniqueId = floating.getAttribute('name');
                        floatingActions = Patterns.FloatingActionsAPI.GetFloatingActionsById(uniqueId);
                    }
                    return floatingActions;
                }
                FloatingActionsItemAPI.GetFloatingActionsByItem = GetFloatingActionsByItem;
                function ChangeProperty(floatingActionsItemId, propertyName, propertyValue) {
                    const floatingActionsItem = GetFloatingActionsItemById(floatingActionsItemId);
                    floatingActionsItem.changeProperty(propertyName, propertyValue);
                }
                FloatingActionsItemAPI.ChangeProperty = ChangeProperty;
                function Create(floatingActionsItemId, configs) {
                    if (_floatingActionsItemMap.has(floatingActionsItemId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.FloatingActions} registered under id: ${floatingActionsItemId}`);
                    }
                    const floatingAction = GetFloatingActionsByItem(floatingActionsItemId);
                    const _newFloatingActionsItem = new OSUIFramework.Patterns.FloatingActionsItem.FloatingActionsItem(floatingActionsItemId, JSON.parse(configs), floatingAction);
                    _floatingActionsItemMap.set(floatingActionsItemId, _newFloatingActionsItem);
                    _newFloatingActionsItem.build();
                    if (floatingAction !== undefined) {
                        _floatingActionsMap.set(floatingActionsItemId, floatingAction.uniqueId);
                        floatingAction.addFloatingActionItem(_newFloatingActionsItem.uniqueId, _newFloatingActionsItem);
                    }
                    return _newFloatingActionsItem;
                }
                FloatingActionsItemAPI.Create = Create;
                function Dispose(floatingActionsItemId) {
                    const floatingActionItem = GetFloatingActionsItemById(floatingActionsItemId);
                    floatingActionItem.dispose();
                    _floatingActionsItemMap.delete(floatingActionItem.uniqueId);
                    _floatingActionsMap.delete(floatingActionItem.uniqueId);
                }
                FloatingActionsItemAPI.Dispose = Dispose;
                function GetAllFloatingActionsItems() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_floatingActionsItemMap);
                }
                FloatingActionsItemAPI.GetAllFloatingActionsItems = GetAllFloatingActionsItems;
                function GetFloatingActionsItemById(floatingActionsItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('FloatingActionItem', floatingActionsItemId, _floatingActionsItemMap);
                }
                FloatingActionsItemAPI.GetFloatingActionsItemById = GetFloatingActionsItemById;
            })(FloatingActionsItemAPI = Patterns.FloatingActionsItemAPI || (Patterns.FloatingActionsItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var GalleryAPI;
            (function (GalleryAPI) {
                const _galleryMap = new Map();
                function ChangeProperty(galleryId, propertyName, propertyValue) {
                    const gallery = GetGalleryById(galleryId);
                    gallery.changeProperty(propertyName, propertyValue);
                }
                GalleryAPI.ChangeProperty = ChangeProperty;
                function Create(galleryId, configs) {
                    if (_galleryMap.has(galleryId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Gallery} registered under id: ${galleryId}`);
                    }
                    const _newGallery = new OSUIFramework.Patterns.Gallery.Gallery(galleryId, JSON.parse(configs));
                    _galleryMap.set(galleryId, _newGallery);
                    return _newGallery;
                }
                GalleryAPI.Create = Create;
                function Destroy(galleryId) {
                    const gallery = GetGalleryById(galleryId);
                    gallery.dispose();
                    _galleryMap.delete(galleryId);
                }
                GalleryAPI.Destroy = Destroy;
                function GetAllGalleries() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_galleryMap);
                }
                GalleryAPI.GetAllGalleries = GetAllGalleries;
                function GetGalleryById(galleryId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Gallery', galleryId, _galleryMap);
                }
                GalleryAPI.GetGalleryById = GetGalleryById;
                function Initialize(galleryId) {
                    const gallery = GetGalleryById(galleryId);
                    gallery.build();
                    return gallery;
                }
                GalleryAPI.Initialize = Initialize;
            })(GalleryAPI = Patterns.GalleryAPI || (Patterns.GalleryAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var NotificationAPI;
            (function (NotificationAPI) {
                const _notificationMap = new Map();
                function ChangeProperty(notificationId, propertyName, propertyValue) {
                    const notification = GetNotificationById(notificationId);
                    notification.changeProperty(propertyName, propertyValue);
                }
                NotificationAPI.ChangeProperty = ChangeProperty;
                function Create(notificationId, configs) {
                    if (_notificationMap.has(notificationId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Notification} registered under id: ${notificationId}`);
                    }
                    const _newNotification = new OSUIFramework.Patterns.Notification.Notification(notificationId, JSON.parse(configs));
                    _notificationMap.set(notificationId, _newNotification);
                    return _newNotification;
                }
                NotificationAPI.Create = Create;
                function Destroy(notificationId) {
                    const notification = GetNotificationById(notificationId);
                    notification.dispose();
                    _notificationMap.delete(notificationId);
                }
                NotificationAPI.Destroy = Destroy;
                function GetAllNotifications() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_notificationMap);
                }
                NotificationAPI.GetAllNotifications = GetAllNotifications;
                function GetNotificationById(notificationId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Notification', notificationId, _notificationMap);
                }
                NotificationAPI.GetNotificationById = GetNotificationById;
                function Hide(notificationId) {
                    const notification = GetNotificationById(notificationId);
                    notification.hide();
                }
                NotificationAPI.Hide = Hide;
                function Initialize(notificationId) {
                    const notification = GetNotificationById(notificationId);
                    notification.build();
                    return notification;
                }
                NotificationAPI.Initialize = Initialize;
                function RegisterProviderCallback(notificationId, eventName, callback) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _notificationItem = this.GetNotificationById(notificationId);
                    try {
                        _notificationItem.registerProviderCallback(eventName, callback);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.Notification.FailRegisterCallback;
                    }
                    return JSON.stringify(responseObj);
                }
                NotificationAPI.RegisterProviderCallback = RegisterProviderCallback;
                function Show(notificationId) {
                    const notification = GetNotificationById(notificationId);
                    notification.show();
                }
                NotificationAPI.Show = Show;
            })(NotificationAPI = Patterns.NotificationAPI || (Patterns.NotificationAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var ProgressAPI;
            (function (ProgressAPI) {
                const _progressItemsMap = new Map();
                function ChangeProperty(progressId, propertyName, propertyValue) {
                    const _progressItem = GetProgressItemById(progressId);
                    _progressItem.changeProperty(propertyName, propertyValue);
                }
                ProgressAPI.ChangeProperty = ChangeProperty;
                function Create(progressId, type, configs) {
                    if (_progressItemsMap.has(progressId)) {
                        throw new Error(`There is already an ProgressItem registered under id: ${progressId}`);
                    }
                    const _progressItem = OSUIFramework.Patterns.Progress.Factory.NewProgress(progressId, type, configs);
                    _progressItemsMap.set(progressId, _progressItem);
                    return _progressItem;
                }
                ProgressAPI.Create = Create;
                function Dispose(progressId) {
                    const _progressItem = GetProgressItemById(progressId);
                    _progressItem.dispose();
                    _progressItemsMap.delete(_progressItem.uniqueId);
                }
                ProgressAPI.Dispose = Dispose;
                function GetAllProgressItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_progressItemsMap);
                }
                ProgressAPI.GetAllProgressItemsMap = GetAllProgressItemsMap;
                function GetProgressItemById(progressId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Progress', progressId, _progressItemsMap);
                }
                ProgressAPI.GetProgressItemById = GetProgressItemById;
                function Initialize(progressId) {
                    const _progressItem = GetProgressItemById(progressId);
                    _progressItem.build();
                    return _progressItem;
                }
                ProgressAPI.Initialize = Initialize;
                function SetProgressValue(progressId, progress) {
                    const _progressItem = GetProgressItemById(progressId);
                    _progressItem.setProgressValue(progress);
                }
                ProgressAPI.SetProgressValue = SetProgressValue;
            })(ProgressAPI = Patterns.ProgressAPI || (Patterns.ProgressAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var RangeSliderAPI;
            (function (RangeSliderAPI) {
                const _rangeSliderItemsMap = new Map();
                function ChangeProperty(rangeSliderId, propertyName, propertyValue) {
                    const _rangeSliderItem = GetRangeSliderItemById(rangeSliderId);
                    _rangeSliderItem.changeProperty(propertyName, propertyValue);
                }
                RangeSliderAPI.ChangeProperty = ChangeProperty;
                function Create(rangeSliderId, configs, mode, provider) {
                    if (_rangeSliderItemsMap.has(rangeSliderId)) {
                        throw new Error(`There is already an ${OSUIFramework.GlobalEnum.PatternsNames.RangeSlider} registered under id: ${rangeSliderId}`);
                    }
                    const _rangeSliderItem = OSUIFramework.Patterns.RangeSlider.Factory.NewRangeSlider(rangeSliderId, configs, mode, provider);
                    _rangeSliderItemsMap.set(rangeSliderId, _rangeSliderItem);
                    return _rangeSliderItem;
                }
                RangeSliderAPI.Create = Create;
                function Dispose(rangeSliderId) {
                    const _rangeSliderItem = GetRangeSliderItemById(rangeSliderId);
                    _rangeSliderItem.dispose();
                    _rangeSliderItemsMap.delete(_rangeSliderItem.uniqueId);
                }
                RangeSliderAPI.Dispose = Dispose;
                function GetAllRangeSliderItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_rangeSliderItemsMap);
                }
                RangeSliderAPI.GetAllRangeSliderItemsMap = GetAllRangeSliderItemsMap;
                function GetRangeSliderItemById(rangeSliderId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.RangeSlider, rangeSliderId, _rangeSliderItemsMap);
                }
                RangeSliderAPI.GetRangeSliderItemById = GetRangeSliderItemById;
                function Initialize(rangeSliderId) {
                    const _rangeSliderItem = GetRangeSliderItemById(rangeSliderId);
                    _rangeSliderItem.build();
                    return _rangeSliderItem;
                }
                RangeSliderAPI.Initialize = Initialize;
                function RegisterProviderCallback(rangeSliderId, eventName, callback) {
                    const rangeSlider = this.GetRangeSliderItemById(rangeSliderId);
                    rangeSlider.registerProviderCallback(eventName, callback);
                }
                RangeSliderAPI.RegisterProviderCallback = RegisterProviderCallback;
                function SetRangeIntervalChangeOnDragEnd(rangeSliderId) {
                    const rangeSlider = this.GetRangeSliderItemById(rangeSliderId);
                    rangeSlider.setRangeIntervalChangeOnDragEnd();
                }
                RangeSliderAPI.SetRangeIntervalChangeOnDragEnd = SetRangeIntervalChangeOnDragEnd;
            })(RangeSliderAPI = Patterns.RangeSliderAPI || (Patterns.RangeSliderAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var RatingAPI;
            (function (RatingAPI) {
                const _ratingsMap = new Map();
                function ChangeProperty(ratingId, propertyName, propertyValue) {
                    const rating = GetRatingById(ratingId);
                    rating.changeProperty(propertyName, propertyValue);
                }
                RatingAPI.ChangeProperty = ChangeProperty;
                function Create(ratingId, configs) {
                    if (_ratingsMap.has(ratingId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Rating} registered under id: ${ratingId}`);
                    }
                    const _newRating = new OSUIFramework.Patterns.Rating.Rating(ratingId, JSON.parse(configs));
                    _ratingsMap.set(ratingId, _newRating);
                    return _newRating;
                }
                RatingAPI.Create = Create;
                function Destroy(ratingId) {
                    const rating = GetRatingById(ratingId);
                    rating.dispose();
                    _ratingsMap.delete(ratingId);
                }
                RatingAPI.Destroy = Destroy;
                function GetAllRatings() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_ratingsMap);
                }
                RatingAPI.GetAllRatings = GetAllRatings;
                function GetRatingById(ratingId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Rating', ratingId, _ratingsMap);
                }
                RatingAPI.GetRatingById = GetRatingById;
                function Initialize(ratingId) {
                    const rating = GetRatingById(ratingId);
                    rating.build();
                    return rating;
                }
                RatingAPI.Initialize = Initialize;
                function RegisterCallback(ratingId, callback) {
                    const rating = GetRatingById(ratingId);
                    rating.registerCallback(callback);
                }
                RatingAPI.RegisterCallback = RegisterCallback;
            })(RatingAPI = Patterns.RatingAPI || (Patterns.RatingAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SearchAPI;
            (function (SearchAPI) {
                const _searchsMap = new Map();
                function ChangeProperty(searchId, propertyName, propertyValue) {
                    const search = GetSearchById(searchId);
                    search.changeProperty(propertyName, propertyValue);
                }
                SearchAPI.ChangeProperty = ChangeProperty;
                function Close(searchId) {
                    const search = GetSearchById(searchId);
                    search.close();
                }
                SearchAPI.Close = Close;
                function Create(searchId, configs) {
                    if (_searchsMap.has(searchId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Search} registered under id: ${searchId}`);
                    }
                    const _newSearch = new OSUIFramework.Patterns.Search.Search(searchId, JSON.parse(configs));
                    _searchsMap.set(searchId, _newSearch);
                    return _newSearch;
                }
                SearchAPI.Create = Create;
                function Destroy(searchId) {
                    const search = GetSearchById(searchId);
                    search.dispose();
                    _searchsMap.delete(searchId);
                }
                SearchAPI.Destroy = Destroy;
                function GetAllSearches() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_searchsMap);
                }
                SearchAPI.GetAllSearches = GetAllSearches;
                function GetSearchById(searchId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.Search, searchId, _searchsMap);
                }
                SearchAPI.GetSearchById = GetSearchById;
                function Initialize(searchId) {
                    const search = GetSearchById(searchId);
                    search.build();
                    return search;
                }
                SearchAPI.Initialize = Initialize;
                function Open(searchId) {
                    const search = GetSearchById(searchId);
                    search.open();
                }
                SearchAPI.Open = Open;
                function RegisterCallback(searchId, callback) {
                    const search = GetSearchById(searchId);
                    search.registerCallback(callback);
                }
                SearchAPI.RegisterCallback = RegisterCallback;
            })(SearchAPI = Patterns.SearchAPI || (Patterns.SearchAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SectionIndexAPI;
            (function (SectionIndexAPI) {
                const _sectionIndexItemsMap = new Map();
                function ChangeProperty(sectionIndexId, propertyName, propertyValue) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _sectionIndexItem = GetSectionIndexById(sectionIndexId);
                    try {
                        _sectionIndexItem.changeProperty(propertyName, propertyValue);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.SectionIndex.FailChangeProperty;
                    }
                    return JSON.stringify(responseObj);
                }
                SectionIndexAPI.ChangeProperty = ChangeProperty;
                function Create(sectionIndexId, configs) {
                    if (_sectionIndexItemsMap.has(sectionIndexId)) {
                        throw new Error(`There is already an SectionIndex registered under id: ${sectionIndexId}`);
                    }
                    const _sectionIndexItem = new OSUIFramework.Patterns.SectionIndex.SectionIndex(sectionIndexId, JSON.parse(configs));
                    _sectionIndexItemsMap.set(sectionIndexId, _sectionIndexItem);
                    return _sectionIndexItem;
                }
                SectionIndexAPI.Create = Create;
                function Dispose(sectionIndexId) {
                    const responseObj = {
                        isSuccess: true,
                        message: OSUI.ErrorCodes.Success.message,
                        code: OSUI.ErrorCodes.Success.code,
                    };
                    const _sectionIndexItem = GetSectionIndexById(sectionIndexId);
                    try {
                        _sectionIndexItem.dispose();
                        _sectionIndexItemsMap.delete(_sectionIndexItem.uniqueId);
                    }
                    catch (error) {
                        responseObj.isSuccess = false;
                        responseObj.message = error.message;
                        responseObj.code = OSUI.ErrorCodes.SectionIndex.FailDispose;
                    }
                    return JSON.stringify(responseObj);
                }
                SectionIndexAPI.Dispose = Dispose;
                function GetAllSectionIndexItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_sectionIndexItemsMap);
                }
                SectionIndexAPI.GetAllSectionIndexItemsMap = GetAllSectionIndexItemsMap;
                function GetSectionIndexById(sectionIndexId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.SectionIndex, sectionIndexId, _sectionIndexItemsMap);
                }
                SectionIndexAPI.GetSectionIndexById = GetSectionIndexById;
                function Initialize(sectionIndexId) {
                    const _sectionIndexItem = GetSectionIndexById(sectionIndexId);
                    _sectionIndexItem.build();
                    return _sectionIndexItem;
                }
                SectionIndexAPI.Initialize = Initialize;
            })(SectionIndexAPI = Patterns.SectionIndexAPI || (Patterns.SectionIndexAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SectionIndexItemAPI;
            (function (SectionIndexItemAPI) {
                const _sectionIndexItemMap = new Map();
                function ChangeProperty(sectionIndexItemId, propertyName, propertyValue) {
                    const _sectionIndexItem = GetSectionIndexItemById(sectionIndexItemId);
                    _sectionIndexItem.changeProperty(propertyName, propertyValue);
                }
                SectionIndexItemAPI.ChangeProperty = ChangeProperty;
                function Create(sectionIndexItemId, configs) {
                    if (_sectionIndexItemMap.has(sectionIndexItemId)) {
                        throw new Error(`There is already a SectionIndexItem registered under id: ${sectionIndexItemId}`);
                    }
                    const _sectionIndexItem = new OSUIFramework.Patterns.SectionIndexItem.SectionIndexItem(sectionIndexItemId, JSON.parse(configs));
                    _sectionIndexItemMap.set(sectionIndexItemId, _sectionIndexItem);
                    return _sectionIndexItem;
                }
                SectionIndexItemAPI.Create = Create;
                function Dispose(sectionIndexItemId) {
                    const _sectionIndexItemItem = GetSectionIndexItemById(sectionIndexItemId);
                    _sectionIndexItemItem.dispose();
                    _sectionIndexItemMap.delete(_sectionIndexItemItem.uniqueId);
                }
                SectionIndexItemAPI.Dispose = Dispose;
                function GetAllSectionIndexItemItemsMap() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_sectionIndexItemMap);
                }
                SectionIndexItemAPI.GetAllSectionIndexItemItemsMap = GetAllSectionIndexItemItemsMap;
                function GetSectionIndexItemById(sectionIndexItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('SectionIndexItem', sectionIndexItemId, _sectionIndexItemMap);
                }
                SectionIndexItemAPI.GetSectionIndexItemById = GetSectionIndexItemById;
                function Initialize(sectionIndexItemId) {
                    const _sectionIndexItem = GetSectionIndexItemById(sectionIndexItemId);
                    _sectionIndexItem.build();
                    return _sectionIndexItem;
                }
                SectionIndexItemAPI.Initialize = Initialize;
                function RegisterCallback(sectionIndexItemId, eventName, callback) {
                    const _sectionIndexItem = this.GetSectionIndexItemById(sectionIndexItemId);
                    _sectionIndexItem.registerCallback(eventName, callback);
                }
                SectionIndexItemAPI.RegisterCallback = RegisterCallback;
            })(SectionIndexItemAPI = Patterns.SectionIndexItemAPI || (Patterns.SectionIndexItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SidebarAPI;
            (function (SidebarAPI) {
                const _sidebarMap = new Map();
                function ChangeProperty(sidebarId, propertyName, propertyValue) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.changeProperty(propertyName, propertyValue);
                }
                SidebarAPI.ChangeProperty = ChangeProperty;
                function Close(sidebarId) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.close();
                }
                SidebarAPI.Close = Close;
                function Create(sidebarId, configs) {
                    if (_sidebarMap.has(sidebarId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Sidebar} registered under id: ${sidebarId}`);
                    }
                    const _newSidebar = new OSUIFramework.Patterns.Sidebar.Sidebar(sidebarId, JSON.parse(configs));
                    _sidebarMap.set(sidebarId, _newSidebar);
                    return _newSidebar;
                }
                SidebarAPI.Create = Create;
                function Destroy(sidebarId) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.dispose();
                    _sidebarMap.delete(sidebarId);
                }
                SidebarAPI.Destroy = Destroy;
                function GetAllSidebars() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_sidebarMap);
                }
                SidebarAPI.GetAllSidebars = GetAllSidebars;
                function GetSidebarById(sidebarId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.Sidebar, sidebarId, _sidebarMap);
                }
                SidebarAPI.GetSidebarById = GetSidebarById;
                function Initialize(sidebarId) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.build();
                    return sidebar;
                }
                SidebarAPI.Initialize = Initialize;
                function RegisterCallback(sidebarId, callback) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.registerCallback(callback);
                }
                SidebarAPI.RegisterCallback = RegisterCallback;
                function Open(sidebarId) {
                    const sidebar = GetSidebarById(sidebarId);
                    sidebar.open();
                }
                SidebarAPI.Open = Open;
            })(SidebarAPI = Patterns.SidebarAPI || (Patterns.SidebarAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SubmenuAPI;
            (function (SubmenuAPI) {
                const _submenusMap = new Map();
                function ChangeProperty(submenuId, propertyName, propertyValue) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.changeProperty(propertyName, propertyValue);
                }
                SubmenuAPI.ChangeProperty = ChangeProperty;
                function Close(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.close();
                }
                SubmenuAPI.Close = Close;
                function Open(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.open();
                }
                SubmenuAPI.Open = Open;
                function SubmenuOpenOnHover(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.changeProperty(OSUIFramework.Patterns.Submenu.Enum.Properties.OpenOnHover, true);
                }
                SubmenuAPI.SubmenuOpenOnHover = SubmenuOpenOnHover;
                function Create(submenuId, configs) {
                    if (_submenusMap.has(submenuId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Submenu} registered under id: ${submenuId}`);
                    }
                    const _newSubmenu = new OSUIFramework.Patterns.Submenu.Submenu(submenuId, JSON.parse(configs));
                    _submenusMap.set(submenuId, _newSubmenu);
                    return _newSubmenu;
                }
                SubmenuAPI.Create = Create;
                function Destroy(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.dispose();
                    _submenusMap.delete(submenuId);
                }
                SubmenuAPI.Destroy = Destroy;
                function GetAllSubmenus() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_submenusMap);
                }
                SubmenuAPI.GetAllSubmenus = GetAllSubmenus;
                function GetSubmenuById(submenuId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.Submenu, submenuId, _submenusMap);
                }
                SubmenuAPI.GetSubmenuById = GetSubmenuById;
                function Initialize(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.build();
                    return submenu;
                }
                SubmenuAPI.Initialize = Initialize;
                function UpdateOnRender(submenuId) {
                    const submenu = GetSubmenuById(submenuId);
                    submenu.updateOnRender();
                    return submenu;
                }
                SubmenuAPI.UpdateOnRender = UpdateOnRender;
            })(SubmenuAPI = Patterns.SubmenuAPI || (Patterns.SubmenuAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var SwipeEventsAPI;
            (function (SwipeEventsAPI) {
                const _swipeEventsMap = new Map();
                function Create(swipeEventsId, configs) {
                    if (_swipeEventsMap.has(swipeEventsId)) {
                        throw new Error(`There is already an ${OSUIFramework.GlobalEnum.PatternsNames.SwipeEvents} registered under id: ${swipeEventsId}`);
                    }
                    const _newSwipeEvents = new OSUIFramework.Patterns.SwipeEvents.SwipeEvents(swipeEventsId, JSON.parse(configs));
                    _swipeEventsMap.set(swipeEventsId, _newSwipeEvents);
                    return _newSwipeEvents;
                }
                SwipeEventsAPI.Create = Create;
                function Dispose(swipeEventsId) {
                    const swipeEvent = GetSwipeEventsById(swipeEventsId);
                    swipeEvent.dispose();
                    _swipeEventsMap.delete(swipeEvent.uniqueId);
                }
                SwipeEventsAPI.Dispose = Dispose;
                function GetAllSwipeEvents() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_swipeEventsMap);
                }
                SwipeEventsAPI.GetAllSwipeEvents = GetAllSwipeEvents;
                function GetSwipeEventsById(swipeEventsId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('SwipeEvents', swipeEventsId, _swipeEventsMap);
                }
                SwipeEventsAPI.GetSwipeEventsById = GetSwipeEventsById;
                function Initialize(swipeEventsId) {
                    const SwipeEvents = GetSwipeEventsById(swipeEventsId);
                    SwipeEvents.build();
                    return SwipeEvents;
                }
                SwipeEventsAPI.Initialize = Initialize;
                function RegisterCallback(swipeEventsID, eventName, callback) {
                    const swipeEvents = this.GetSwipeEventsById(swipeEventsID);
                    swipeEvents.registerCallback(eventName, callback);
                }
                SwipeEventsAPI.RegisterCallback = RegisterCallback;
                function GestureMove(swipeEventsId, event) {
                    const SwipeEvents = GetSwipeEventsById(swipeEventsId);
                    SwipeEvents.EventGestureMove(event);
                }
                SwipeEventsAPI.GestureMove = GestureMove;
                function GestureEnd(swipeEventsId, offsetX, offsetY, timeTaken) {
                    const SwipeEvents = GetSwipeEventsById(swipeEventsId);
                    SwipeEvents.EventGestureEnd(offsetX, offsetY, timeTaken);
                }
                SwipeEventsAPI.GestureEnd = GestureEnd;
            })(SwipeEventsAPI = Patterns.SwipeEventsAPI || (Patterns.SwipeEventsAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var TabsAPI;
            (function (TabsAPI) {
                const _tabsMap = new Map();
                function ChangeProperty(tabsId, propertyName, propertyValue) {
                    const tabs = GetTabsById(tabsId);
                    tabs.changeProperty(propertyName, propertyValue);
                }
                TabsAPI.ChangeProperty = ChangeProperty;
                function Create(tabsId, configs) {
                    if (_tabsMap.has(tabsId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Tabs} registered under id: ${tabsId}`);
                    }
                    const _newTabs = new OSUIFramework.Patterns.Tabs.Tabs(tabsId, JSON.parse(configs));
                    _tabsMap.set(tabsId, _newTabs);
                    return _newTabs;
                }
                TabsAPI.Create = Create;
                function Dispose(tabsId) {
                    const tabs = GetTabsById(tabsId);
                    tabs.dispose();
                    _tabsMap.delete(tabs.uniqueId);
                }
                TabsAPI.Dispose = Dispose;
                function GetAllTabs() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_tabsMap);
                }
                TabsAPI.GetAllTabs = GetAllTabs;
                function GetTabsById(tabsId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('Tabs', tabsId, _tabsMap);
                }
                TabsAPI.GetTabsById = GetTabsById;
                function Initialize(tabsId) {
                    const tabs = GetTabsById(tabsId);
                    tabs.build();
                    return tabs;
                }
                TabsAPI.Initialize = Initialize;
                function RegisterCallback(tabsId, callback) {
                    const tabs = GetTabsById(tabsId);
                    tabs.registerCallback(callback);
                }
                TabsAPI.RegisterCallback = RegisterCallback;
                function TabsToggleSwipe(tabsId, enableSwipe) {
                    const tabs = GetTabsById(tabsId);
                    tabs.toggleDragGestures(enableSwipe);
                }
                TabsAPI.TabsToggleSwipe = TabsToggleSwipe;
                function SetActiveTab(tabsId, tabsNumber) {
                    const tabs = GetTabsById(tabsId);
                    tabs.changeTab(tabsNumber, undefined, true, true);
                }
                TabsAPI.SetActiveTab = SetActiveTab;
            })(TabsAPI = Patterns.TabsAPI || (Patterns.TabsAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var TabsContentItemAPI;
            (function (TabsContentItemAPI) {
                const _tabsMap = new Map();
                const _tabsContentItemMap = new Map();
                function GetTabsByItem(tabsContentItemId) {
                    let tabs;
                    if (_tabsMap.has(tabsContentItemId)) {
                        tabs = Patterns.TabsAPI.GetTabsById(_tabsMap.get(tabsContentItemId));
                    }
                    else {
                        const elem = OSUIFramework.Helper.Dom.GetElementByUniqueId(tabsContentItemId);
                        const tabsElem = elem.closest(OSUIFramework.Constants.Dot + OSUIFramework.Patterns.Tabs.Enum.CssClasses.TabsWrapper);
                        if (!tabsElem) {
                            throw Error(`This ${OSUIFramework.GlobalEnum.PatternsNames.TabsContentItem} does not belong to any ${OSUIFramework.GlobalEnum.PatternsNames.Tabs} pattern.`);
                        }
                        const uniqueId = tabsElem.getAttribute('name');
                        tabs = Patterns.TabsAPI.GetTabsById(uniqueId);
                    }
                    return tabs;
                }
                TabsContentItemAPI.GetTabsByItem = GetTabsByItem;
                function ChangeProperty(tabsContentItemId, propertyName, propertyValue) {
                    const tabsContentItem = GetTabsContentItemById(tabsContentItemId);
                    tabsContentItem.changeProperty(propertyName, propertyValue);
                }
                TabsContentItemAPI.ChangeProperty = ChangeProperty;
                function Create(tabsContentItemId, configs) {
                    if (_tabsContentItemMap.has(tabsContentItemId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.TabsHeaderItem} registered under id: ${tabsContentItemId}`);
                    }
                    const tabs = GetTabsByItem(tabsContentItemId);
                    const _newTabsContentItem = new OSUIFramework.Patterns.TabsContentItem.TabsContentItem(tabsContentItemId, tabs, JSON.parse(configs));
                    _tabsContentItemMap.set(tabsContentItemId, _newTabsContentItem);
                    _newTabsContentItem.build();
                    if (tabs !== undefined) {
                        _tabsMap.set(tabsContentItemId, tabs.uniqueId);
                    }
                    return _newTabsContentItem;
                }
                TabsContentItemAPI.Create = Create;
                function Dispose(tabsContentItemId) {
                    const tabsContentItem = GetTabsContentItemById(tabsContentItemId);
                    tabsContentItem.dispose();
                    _tabsContentItemMap.delete(tabsContentItem.uniqueId);
                }
                TabsContentItemAPI.Dispose = Dispose;
                function GetAllTabsContentItems() {
                    return;
                }
                TabsContentItemAPI.GetAllTabsContentItems = GetAllTabsContentItems;
                function GetTabsContentItemById(tabsContentItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('TabsContentItem', tabsContentItemId, _tabsContentItemMap);
                }
                TabsContentItemAPI.GetTabsContentItemById = GetTabsContentItemById;
            })(TabsContentItemAPI = Patterns.TabsContentItemAPI || (Patterns.TabsContentItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var TabsHeaderItemAPI;
            (function (TabsHeaderItemAPI) {
                const _tabsMap = new Map();
                const _tabsHeaderItemMap = new Map();
                function GetTabsByItem(tabsHeaderItemId) {
                    let tabs;
                    if (_tabsMap.has(tabsHeaderItemId)) {
                        tabs = Patterns.TabsAPI.GetTabsById(_tabsMap.get(tabsHeaderItemId));
                    }
                    else {
                        const elem = OSUIFramework.Helper.Dom.GetElementByUniqueId(tabsHeaderItemId);
                        const tabsElem = elem.closest(OSUIFramework.Constants.Dot + OSUIFramework.Patterns.Tabs.Enum.CssClasses.TabsWrapper);
                        if (!tabsElem) {
                            throw Error(`This ${OSUIFramework.GlobalEnum.PatternsNames.TabsHeaderItem} does not belong to any ${OSUIFramework.GlobalEnum.PatternsNames.Tabs} pattern.`);
                        }
                        const uniqueId = tabsElem.getAttribute('name');
                        tabs = Patterns.TabsAPI.GetTabsById(uniqueId);
                    }
                    return tabs;
                }
                TabsHeaderItemAPI.GetTabsByItem = GetTabsByItem;
                function ChangeProperty(tabsHeaderItemId, propertyName, propertyValue) {
                    const tabsHeaderItem = GetTabsHeaderItemById(tabsHeaderItemId);
                    tabsHeaderItem.changeProperty(propertyName, propertyValue);
                }
                TabsHeaderItemAPI.ChangeProperty = ChangeProperty;
                function Create(tabsHeaderItemId, configs) {
                    if (_tabsHeaderItemMap.has(tabsHeaderItemId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.TabsHeaderItem} registered under id: ${tabsHeaderItemId}`);
                    }
                    const tabs = GetTabsByItem(tabsHeaderItemId);
                    const _newTabsHeaderItem = new OSUIFramework.Patterns.TabsHeaderItem.TabsHeaderItem(tabsHeaderItemId, tabs, JSON.parse(configs));
                    _tabsHeaderItemMap.set(tabsHeaderItemId, _newTabsHeaderItem);
                    _newTabsHeaderItem.build();
                    if (tabs !== undefined) {
                        _tabsMap.set(tabsHeaderItemId, tabs.uniqueId);
                    }
                    return _newTabsHeaderItem;
                }
                TabsHeaderItemAPI.Create = Create;
                function Dispose(tabsHeaderItemId) {
                    const tabsHeaderItem = GetTabsHeaderItemById(tabsHeaderItemId);
                    tabsHeaderItem.dispose();
                    _tabsHeaderItemMap.delete(tabsHeaderItem.uniqueId);
                }
                TabsHeaderItemAPI.Dispose = Dispose;
                function GetAllTabsHeaderItems() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_tabsHeaderItemMap);
                }
                TabsHeaderItemAPI.GetAllTabsHeaderItems = GetAllTabsHeaderItems;
                function GetTabsHeaderItemById(tabsHeaderItemId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('TabsHeaderItem', tabsHeaderItemId, _tabsHeaderItemMap);
                }
                TabsHeaderItemAPI.GetTabsHeaderItemById = GetTabsHeaderItemById;
            })(TabsHeaderItemAPI = Patterns.TabsHeaderItemAPI || (Patterns.TabsHeaderItemAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var TooltipAPI;
            (function (TooltipAPI) {
                const _tooltipsMap = new Map();
                function ChangeProperty(tooltipId, propertyName, propertyValue) {
                    const tooltip = GetTooltipById(tooltipId);
                    tooltip.changeProperty(propertyName, propertyValue);
                }
                TooltipAPI.ChangeProperty = ChangeProperty;
                function Close(tooltipId) {
                    const tooltip = GetTooltipById(tooltipId);
                    tooltip.close();
                }
                TooltipAPI.Close = Close;
                function Create(tooltipId, configs) {
                    if (_tooltipsMap.has(tooltipId)) {
                        throw new Error(`There is already a ${OSUIFramework.GlobalEnum.PatternsNames.Tooltip} registered under id: ${tooltipId}`);
                    }
                    const _newTooltip = new OSUIFramework.Patterns.Tooltip.Tooltip(tooltipId, JSON.parse(configs));
                    _tooltipsMap.set(tooltipId, _newTooltip);
                    return _newTooltip;
                }
                TooltipAPI.Create = Create;
                function Destroy(tooltipId) {
                    const tooltip = GetTooltipById(tooltipId);
                    tooltip.dispose();
                    _tooltipsMap.delete(tooltip.uniqueId);
                }
                TooltipAPI.Destroy = Destroy;
                function GetAllTooltips() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_tooltipsMap);
                }
                TooltipAPI.GetAllTooltips = GetAllTooltips;
                function GetTooltipById(tooltipId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap(OSUIFramework.GlobalEnum.PatternsNames.Tooltip, tooltipId, _tooltipsMap);
                }
                TooltipAPI.GetTooltipById = GetTooltipById;
                function Initialize(tooltipId) {
                    const tooltip = GetTooltipById(tooltipId);
                    tooltip.build();
                    return tooltip;
                }
                TooltipAPI.Initialize = Initialize;
                function Open(tooltipId) {
                    const tooltip = GetTooltipById(tooltipId);
                    tooltip.open();
                }
                TooltipAPI.Open = Open;
            })(TooltipAPI = Patterns.TooltipAPI || (Patterns.TooltipAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Patterns;
        (function (Patterns) {
            var TouchEventsAPI;
            (function (TouchEventsAPI) {
                const _touchEventsMap = new Map();
                function Create(touchEventsId, configs) {
                    if (_touchEventsMap.has(touchEventsId)) {
                        throw new Error(`There is already an ${OSUIFramework.GlobalEnum.PatternsNames.TouchEvents} registered under id: ${touchEventsId}`);
                    }
                    const _newTouchEvents = new OSUIFramework.Patterns.TouchEvents.TouchEvents(touchEventsId, JSON.parse(configs));
                    _touchEventsMap.set(touchEventsId, _newTouchEvents);
                    return _newTouchEvents;
                }
                TouchEventsAPI.Create = Create;
                function Dispose(touchEventsId) {
                    const swipeEvent = GetTouchEventsById(touchEventsId);
                    swipeEvent.dispose();
                    _touchEventsMap.delete(swipeEvent.uniqueId);
                }
                TouchEventsAPI.Dispose = Dispose;
                function GetAllTouchEvents() {
                    return OSUIFramework.Helper.MapOperation.ExportKeys(_touchEventsMap);
                }
                TouchEventsAPI.GetAllTouchEvents = GetAllTouchEvents;
                function GetTouchEventsById(touchEventsId) {
                    return OSUIFramework.Helper.MapOperation.FindInMap('TouchEvents', touchEventsId, _touchEventsMap);
                }
                TouchEventsAPI.GetTouchEventsById = GetTouchEventsById;
                function Initialize(touchEventsId) {
                    const TouchEvents = GetTouchEventsById(touchEventsId);
                    TouchEvents.build();
                    return TouchEvents;
                }
                TouchEventsAPI.Initialize = Initialize;
                function RegisterCallback(touchEventsID, eventName, callback) {
                    const touchEvents = this.GetTouchEventsById(touchEventsID);
                    touchEvents.registerCallback(eventName, callback);
                }
                TouchEventsAPI.RegisterCallback = RegisterCallback;
            })(TouchEventsAPI = Patterns.TouchEventsAPI || (Patterns.TouchEventsAPI = {}));
        })(Patterns = OSUI.Patterns || (OSUI.Patterns = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function _bodyClick(eventName, event) {
                const target = event.target;
                if (target.classList.contains('btn')) {
                    _buttonEffect(target);
                    return;
                }
                const foundElement = _hasSomeParentTheClass(target, 'list-item') || _hasSomeParentTheClass(target, 'bottom-bar-item');
                if (foundElement) {
                    _clickEffect(foundElement);
                }
            }
            function _clickEffect(el) {
                const spanEl = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Span);
                spanEl.classList.add('scale-animation');
                el.appendChild(spanEl);
                el.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.AnimationEnd, OnTransitionEnd, false);
                el.addEventListener('webkitAnimationEnd', OnTransitionEnd, false);
                function OnTransitionEnd() {
                    if (spanEl && this === el && this === spanEl.parentNode) {
                        this.removeChild(spanEl);
                    }
                }
            }
            function _buttonEffect(el) {
                const spanEl = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Span);
                spanEl.classList.add('btn-animation');
                el.appendChild(spanEl);
                setTimeout(function () {
                    el.removeChild(spanEl);
                }, 1800);
            }
            function _hasSomeParentTheClass(element, classname) {
                if (element) {
                    if (typeof element.className !== 'undefined' &&
                        !element.classList.contains('.main-content') &&
                        !(element instanceof SVGElement)) {
                        if (element.className.split(' ').indexOf(classname) >= 0) {
                            return element;
                        }
                        else {
                            return _hasSomeParentTheClass(element.parentElement, classname);
                        }
                    }
                }
                return undefined;
            }
            OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, _bodyClick);
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function ChildrenMatches(elem, selector) {
                let matchingChildren = [];
                if (elem) {
                    matchingChildren = [...elem.children].filter((child) => child.matches(selector));
                }
                return matchingChildren;
            }
            Utils.ChildrenMatches = ChildrenMatches;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Dates;
        (function (Dates) {
            function GetServerDateFormat() {
                return OSUIFramework.Helper.Dates.ServerFormat;
            }
            Dates.GetServerDateFormat = GetServerDateFormat;
            function SetServerDateFormat(date) {
                OSUIFramework.Helper.Dates.SetServerDateFormat(date);
            }
            Dates.SetServerDateFormat = SetServerDateFormat;
        })(Dates = OSUI.Dates || (OSUI.Dates = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function FixInputs() {
                let originalPosition = 0;
                let currentPosition = 0;
                const content = document.querySelector('.content');
                const inputs = document.querySelectorAll('input:not([type=button]):not([type=checkbox]):not([type=color]):not([type=file]):not([type=hidden]):not([type=image]):not([type=image]):not([type=radio]):not([type=range]):not([type=reset]):not([type=submit]), textarea');
                if (inputs.length !== 0) {
                    for (let i = inputs.length - 1; i >= 0; i--) {
                        inputs[i].style.webkitUserSelect = 'auto';
                    }
                    if (content) {
                        content.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, function (e) {
                            originalPosition = e.changedTouches[0].pageY;
                            for (let i = inputs.length - 1; i >= 0; i--) {
                                inputs[i].style.webkitUserSelect = 'auto';
                            }
                        });
                        content.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, function (e) {
                            currentPosition = e.touches[0].pageY;
                            if (Math.abs(originalPosition - currentPosition) > 10) {
                                for (let i = inputs.length - 1; i >= 0; i--) {
                                    inputs[i].style.webkitUserSelect = 'none';
                                }
                            }
                            else {
                                for (let i = inputs.length - 1; i >= 0; i--) {
                                    inputs[i].style.webkitUserSelect = 'auto';
                                }
                            }
                        });
                        content.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchEnd, function () {
                            setTimeout(function () {
                                for (let i = inputs.length - 1; i >= 0; i--) {
                                    inputs[i].style.webkitUserSelect = 'auto';
                                }
                            }, 0);
                        });
                    }
                }
            }
            Utils.FixInputs = FixInputs;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function GenerateUniqueId() {
                return OSUIFramework.Helper.Dom.GenerateUniqueId();
            }
            Utils.GenerateUniqueId = GenerateUniqueId;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function GetBrowser(useragent = '') {
                return OSUIFramework.Helper.DeviceInfo.GetBrowser(useragent);
            }
            Utils.GetBrowser = GetBrowser;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function GetClosest(elem, selector) {
                return elem.closest(selector) ? elem.closest(selector) : false;
            }
            Utils.GetClosest = GetClosest;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function GetHasListInside(targetElem) {
                const listElements = OSUI.Utils.ChildrenMatches(targetElem, OSUIFramework.Constants.Dot + OSUIFramework.GlobalEnum.CssClassElements.List);
                return listElements.length > 0;
            }
            Utils.GetHasListInside = GetHasListInside;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function GetIsRTL() {
                return OSUIFramework.Helper.Dom.Styles.ContainsClass(document.body, OSUIFramework.Constants.IsRTLClass);
            }
            Utils.GetIsRTL = GetIsRTL;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function HasMasterDetail() {
                let returnOutput = false;
                const masterDetail = OSUIFramework.Helper.Dom.ClassSelector(document.body, 'split-screen-wrapper');
                const content = document.querySelector('.active-screen .content');
                if (content && content.contains(masterDetail)) {
                    OSUIFramework.Helper.Dom.Styles.AddClass(content, 'has-master-detail');
                    returnOutput = true;
                }
                return returnOutput;
            }
            Utils.HasMasterDetail = HasMasterDetail;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            var HideOnScroll;
            (function (HideOnScroll) {
                function addEvents(header) {
                    var _a;
                    const content = document.querySelector('.active-screen .content');
                    if (OSUIFramework.Helper.Dom.Styles.ContainsClass(header, 'hide') && content) {
                        let startY = 0;
                        const mainContentHeight = (_a = OSUIFramework.Helper.Dom.ClassSelector(document.body, 'main-content')) === null || _a === void 0 ? void 0 : _a.scrollHeight;
                        const threshold = 60;
                        const layout = OSUIFramework.Helper.Dom.ClassSelector(document.body, OSUIFramework.Constants.LayoutClass);
                        if (mainContentHeight - threshold > content.offsetHeight) {
                            content.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchStart, (e) => {
                                startY = e.touches[0].pageY;
                            }, false);
                            content.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TouchMove, (e) => {
                                const c = e.touches[0].pageY;
                                const translateY = c - startY;
                                if (c < startY - threshold && translateY < 0) {
                                    OSUIFramework.Helper.Dom.Styles.AddClass(header, 'header-on-scroll');
                                    OSUIFramework.Helper.Dom.Styles.AddClass(layout, 'header-is-hidden');
                                }
                                else if (c > startY + threshold) {
                                    OSUIFramework.Helper.Dom.Styles.RemoveClass(header, 'header-on-scroll');
                                    OSUIFramework.Helper.Dom.Styles.RemoveClass(layout, 'header-is-hidden');
                                }
                            }, false);
                        }
                    }
                }
                function Init() {
                    const header = OSUIFramework.Helper.Dom.ClassSelector(document.body, OSUIFramework.Constants.HeaderClass);
                    if (header) {
                        addEvents(header);
                    }
                }
                HideOnScroll.Init = Init;
            })(HideOnScroll = Utils.HideOnScroll || (Utils.HideOnScroll = {}));
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function IsRunningAsNativeApp() {
                return OSUIFramework.Helper.DeviceInfo.IsNative;
            }
            Utils.IsRunningAsNativeApp = IsRunningAsNativeApp;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function IsRunningAsPWA() {
                return OSUIFramework.Helper.DeviceInfo.IsPwa;
            }
            Utils.IsRunningAsPWA = IsRunningAsPWA;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Language;
        (function (Language) {
            function GetLanguage() {
                return OSUIFramework.Helper.Language.Lang;
            }
            Language.GetLanguage = GetLanguage;
            function SetLanguage(language) {
                OSUIFramework.Helper.Language.SetLanguage(language);
            }
            Language.SetLanguage = SetLanguage;
        })(Language = OSUI.Language || (OSUI.Language = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function LogMessage(message) {
                if (OSUIFramework.Helper.LogMessage(message)) {
                    console.log(OSUIFramework.Helper.LogMessage(message));
                }
            }
            Utils.LogMessage = LogMessage;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function scroll(elementToScrollTo, IsSmooth) {
                if (IsSmooth) {
                    elementToScrollTo.scrollIntoView({
                        behavior: OSUIFramework.GlobalEnum.ScrollBehavior.Smooth,
                        block: 'start',
                    });
                }
                else {
                    elementToScrollTo.scrollIntoView({
                        behavior: OSUIFramework.GlobalEnum.ScrollBehavior.Auto,
                        block: 'start',
                    });
                }
                OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(elementToScrollTo, OSUIFramework.GlobalEnum.InlineStyle.Transform, '');
                OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(elementToScrollTo, OSUIFramework.GlobalEnum.InlineStyle.Display, OSUIFramework.GlobalEnum.InlineStyleValue.Display.unset);
            }
            function ScrollToElement(ElementId, IsSmooth = true, OffSet = 0) {
                if (ElementId) {
                    const elementToScrollTo = document.getElementById(ElementId);
                    if (elementToScrollTo) {
                        const header = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.Constants.HeaderClass);
                        const layout = OSUIFramework.Helper.Dom.ClassSelector(document, OSUIFramework.Constants.LayoutClass);
                        if (layout) {
                            const isFixed = OSUIFramework.Helper.Dom.Styles.ContainsClass(layout, 'fixed-header');
                            if (isFixed) {
                                OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(elementToScrollTo, OSUIFramework.GlobalEnum.InlineStyle.Transform, `translateY(${-header.offsetHeight + -OffSet}${OSUIFramework.GlobalEnum.Units.Pixel})`);
                            }
                            else {
                                OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(elementToScrollTo, OSUIFramework.GlobalEnum.InlineStyle.Transform, `translateY(${-OffSet}${OSUIFramework.GlobalEnum.Units.Pixel})`);
                            }
                            OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(elementToScrollTo, OSUIFramework.GlobalEnum.InlineStyle.Display, OSUIFramework.GlobalEnum.InlineStyleValue.Display.block);
                            OSUIFramework.Helper.AsyncInvocation(scroll, elementToScrollTo, IsSmooth);
                        }
                    }
                }
            }
            Utils.ScrollToElement = ScrollToElement;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var OutSystems;
(function (OutSystems) {
    var OSUI;
    (function (OSUI) {
        var Utils;
        (function (Utils) {
            function ToggleClass(element, state, className) {
                if (!state) {
                    setTimeout(function () {
                        if (!state) {
                            OSUIFramework.Helper.Dom.Styles.RemoveClass(element, className);
                        }
                    }, 500);
                }
                else {
                    OSUIFramework.Helper.Dom.Styles.AddClass(element, className);
                    element.offsetHeight;
                }
            }
            Utils.ToggleClass = ToggleClass;
        })(Utils = OSUI.Utils || (OSUI.Utils = {}));
    })(OSUI = OutSystems.OSUI || (OutSystems.OSUI = {}));
})(OutSystems || (OutSystems = {}));
var Providers;
(function (Providers) {
    var Splide;
    (function (Splide) {
        var Enum;
        (function (Enum) {
            let CssClass;
            (function (CssClass) {
                CssClass["SplideWrapper"] = "splide";
                CssClass["SplideTrack"] = "splide__track";
                CssClass["SplideList"] = "splide__list";
                CssClass["SplideSlide"] = "splide__slide";
            })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
            let Go;
            (function (Go) {
                Go["Next"] = ">";
                Go["Previous"] = "<";
            })(Go = Enum.Go || (Enum.Go = {}));
            let KeyboardOptions;
            (function (KeyboardOptions) {
                KeyboardOptions["Focused"] = "focused";
            })(KeyboardOptions = Enum.KeyboardOptions || (Enum.KeyboardOptions = {}));
            let SpliderEvents;
            (function (SpliderEvents) {
                SpliderEvents["Mounted"] = "mounted";
                SpliderEvents["Moved"] = "moved";
            })(SpliderEvents = Enum.SpliderEvents || (Enum.SpliderEvents = {}));
            let TypeOptions;
            (function (TypeOptions) {
                TypeOptions["Loop"] = "loop";
                TypeOptions["Slide"] = "slide";
            })(TypeOptions = Enum.TypeOptions || (Enum.TypeOptions = {}));
        })(Enum = Splide.Enum || (Splide.Enum = {}));
    })(Splide = Providers.Splide || (Providers.Splide = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Splide;
    (function (Splide) {
        class OSUISplide extends OSUIFramework.Patterns.Carousel.AbstractCarousel {
            constructor(uniqueId, configs) {
                super(uniqueId, new Splide.SplideConfig(configs));
            }
            _checkListWidget() {
                this._hasList = OutSystems.OSUI.Utils.GetHasListInside(this._carouselPlaceholderElem);
                if (this._hasList) {
                    this._carouselListWidgetElem = this._selfElem.querySelector(OSUIFramework.Constants.Dot + OSUIFramework.GlobalEnum.CssClassElements.List);
                    this._carouselProviderElem = this._carouselTrackElem;
                }
                else {
                    this._carouselProviderElem = this._selfElem;
                }
            }
            _createProviderCarousel(triggerInitialize = true) {
                this._prepareCarouselItems();
                this._providerOptions = this.configs.getProviderConfig();
                this._initProvider(triggerInitialize);
            }
            _disableBlockRender() {
                this._blockRender = false;
            }
            _initProvider(triggerInitialize = true) {
                this._provider = new window.Splide(this._carouselProviderElem, this._providerOptions);
                if (triggerInitialize) {
                    this._setOnInitializedEvent();
                }
                this._provider.mount();
                this._setOnSlideMovedEvent();
                this._setCarouselWidth();
                this._togglePaginationClass();
            }
            _prepareCarouselItems() {
                const targetList = this._hasList ? this._carouselListWidgetElem : this._carouselPlaceholderElem;
                for (const item of targetList.children) {
                    if (!item.classList.contains(Splide.Enum.CssClass.SplideSlide)) {
                        item.classList.add(Splide.Enum.CssClass.SplideSlide);
                    }
                }
            }
            _setCarouselWidth() {
                this.provider.refresh();
                OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._carouselTrackElem, OSUIFramework.Patterns.Carousel.Enum.CssVariables.CarouselWidth, this._selfElem.offsetWidth + OSUIFramework.GlobalEnum.Units.Pixel);
            }
            _setOnInitializedEvent() {
                this._provider.on(Splide.Enum.SpliderEvents.Mounted, () => {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventInitialized, this.widgetId);
                });
            }
            _setOnSlideMovedEvent() {
                this._provider.on(Splide.Enum.SpliderEvents.Moved, (index) => {
                    if (index !== this._currentIndex) {
                        OSUIFramework.Helper.AsyncInvocation(this._platformEventOnSlideMoved, this.widgetId, index);
                        this._currentIndex = index;
                    }
                });
            }
            _togglePaginationClass() {
                if (this.configs.Navigation === OSUIFramework.Patterns.Carousel.Enum.Navigation.Dots ||
                    this.configs.Navigation === OSUIFramework.Patterns.Carousel.Enum.Navigation.Both) {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, OSUIFramework.Patterns.Carousel.Enum.CssClass.HasPagination);
                }
                else {
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, OSUIFramework.Patterns.Carousel.Enum.CssClass.HasPagination);
                }
            }
            setCallbacks() {
                this._eventOnDisableRender = this._disableBlockRender.bind(this);
                this._eventOnResize = this._setCarouselWidth.bind(this);
                OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.WindowResize, this._eventOnResize);
            }
            setHtmlElements() {
                this._carouselPlaceholderElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, OSUIFramework.Patterns.Carousel.Enum.CssClass.Content);
                this._carouselTrackElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, OSUIFramework.Patterns.Carousel.Enum.CssClass.Track);
            }
            setInitialCssClasses() {
                if (this._hasList) {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._carouselTrackElem, Splide.Enum.CssClass.SplideWrapper);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._carouselPlaceholderElem, Splide.Enum.CssClass.SplideTrack);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._carouselListWidgetElem, Splide.Enum.CssClass.SplideList);
                }
                else {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, Splide.Enum.CssClass.SplideWrapper);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._carouselTrackElem, Splide.Enum.CssClass.SplideTrack);
                    OSUIFramework.Helper.Dom.Styles.AddClass(this._carouselPlaceholderElem, Splide.Enum.CssClass.SplideList);
                }
                this._togglePaginationClass();
            }
            unsetCallbacks() {
                OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.WindowResize, this._eventOnResize);
                this._eventOnDisableRender = undefined;
                this._eventOnResize = undefined;
                this._platformEventInitialized = undefined;
                this._platformEventOnSlideMoved = undefined;
            }
            unsetHtmlElements() {
                this._carouselPlaceholderElem = undefined;
                this._carouselTrackElem = undefined;
            }
            build() {
                super.build();
                this.setHtmlElements();
                this.setCallbacks();
                this._checkListWidget();
                this.setInitialCssClasses();
                this._createProviderCarousel();
                this.finishBuild();
            }
            changeProperty(propertyName, propertyValue) {
                super.changeProperty(propertyName, propertyValue);
                if (this.isBuilt) {
                    this._blockRender = true;
                    switch (propertyName) {
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.StartingPosition:
                            console.warn(`Carousel (${this.widgetId}): changes to ${OSUIFramework.Patterns.Carousel.Enum.Properties.StartingPosition} parameter do not affect the carousel. Use the client action 'CarouselGoTo' to change the current item.`);
                            break;
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.Navigation:
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.AutoPlay:
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.Loop:
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.ItemsDesktop:
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.ItemsTablet:
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.ItemsPhone:
                            this.updateCarousel();
                            break;
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.Height:
                            this._provider.options = { height: propertyValue };
                            break;
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.Padding:
                            this._provider.options = { padding: propertyValue };
                            break;
                        case OSUIFramework.Patterns.Carousel.Enum.Properties.ItemsGap:
                            this._provider.options = { gap: propertyValue };
                            break;
                    }
                }
                OSUIFramework.Helper.AsyncInvocation(this._eventOnDisableRender, this.widgetId);
            }
            dispose() {
                if (this.isBuilt) {
                    this._provider.destroy();
                }
                this.unsetCallbacks();
                this.unsetHtmlElements();
                super.dispose();
            }
            goTo(index) {
                this._provider.go(index);
            }
            next() {
                this._provider.go(Splide.Enum.Go.Next);
            }
            previous() {
                this._provider.go(Splide.Enum.Go.Previous);
            }
            registerProviderCallback(eventName, callback) {
                switch (eventName) {
                    case OSUIFramework.Patterns.Carousel.Enum.CarouselEvents.OnSlideMoved:
                        this._platformEventOnSlideMoved = callback;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.CarouselEvents.Initialized:
                        this._platformEventInitialized = callback;
                        break;
                }
            }
            toggleDrag(hasDrag) {
                this._provider.options = { drag: hasDrag };
            }
            updateCarousel(keepCurrentIndex = true, triggerInitialize = true) {
                if (typeof this._provider === 'object') {
                    this._provider.destroy();
                }
                if (keepCurrentIndex) {
                    this.configs.StartingPosition = this._currentIndex;
                }
                this._createProviderCarousel(triggerInitialize);
            }
            updateOnRender() {
                if (!this._blockRender) {
                    this.setInitialCssClasses();
                    if (typeof this._provider === 'object') {
                        this.updateCarousel(false, false);
                    }
                }
            }
        }
        Splide.OSUISplide = OSUISplide;
    })(Splide = Providers.Splide || (Providers.Splide = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Splide;
    (function (Splide) {
        class SplideConfig extends OSUIFramework.Patterns.Carousel.AbstractCarouselConfig {
            _getArrowConfig() {
                let arrows;
                switch (this.Navigation) {
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.None:
                        arrows = false;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Dots:
                        arrows = false;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Arrows:
                        arrows = true;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Both:
                        arrows = true;
                        break;
                }
                return arrows;
            }
            _getPaginationConfig() {
                let pagination;
                switch (this.Navigation) {
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.None:
                        pagination = false;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Dots:
                        pagination = true;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Arrows:
                        pagination = false;
                        break;
                    case OSUIFramework.Patterns.Carousel.Enum.Navigation.Both:
                        pagination = true;
                        break;
                }
                return pagination;
            }
            getProviderConfig() {
                const providerOptions = {
                    arrows: this._getArrowConfig(),
                    breakpoints: {
                        768: {
                            perPage: this.ItemsPhone,
                        },
                        1024: {
                            perPage: this.ItemsTablet,
                        },
                    },
                    keyboard: Splide.Enum.KeyboardOptions.Focused,
                    direction: OutSystems.OSUI.Utils.GetIsRTL()
                        ? OSUIFramework.GlobalEnum.Direction.RTL
                        : OSUIFramework.GlobalEnum.Direction.LTR,
                    height: this.Height,
                    type: this.Loop ? Splide.Enum.TypeOptions.Loop : Splide.Enum.TypeOptions.Slide,
                    focus: 0,
                    perPage: this.ItemsDesktop,
                    autoplay: this.AutoPlay,
                    padding: this.Padding,
                    pagination: this._getPaginationConfig(),
                    gap: this.ItemsGap,
                    start: this.StartingPosition,
                };
                Object.keys(providerOptions).forEach((key) => providerOptions[key] === undefined && delete providerOptions[key]);
                return providerOptions;
            }
        }
        Splide.SplideConfig = SplideConfig;
    })(Splide = Providers.Splide || (Providers.Splide = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            class AbstractFlatpickr extends OSUIFramework.Patterns.DatePicker.AbstractDatePicker {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                    this.configs.OnChange = this.onDateSelectedEvent.bind(this);
                }
                _jumpIntoToday(event) {
                    event.preventDefault();
                    this.provider.jumpToDate(this.provider.now);
                }
                _setAttributes() {
                    this._flatpickrInputElem = this._datePickerProviderInputElem.nextSibling;
                    OSUIFramework.Helper.Dom.Attribute.Set(this._flatpickrInputElem, OSUIFramework.GlobalEnum.HTMLAttributes.DataInput, '');
                }
                _setCalendarCssClasses() {
                    OSUIFramework.Helper.Dom.Styles.AddClass(this.provider.calendarContainer, OSUIFramework.Patterns.DatePicker.Enum.CssClass.Calendar);
                    if (this.configs.ExtendedClass !== '') {
                        OSUIFramework.Helper.Dom.Styles.ExtendedClass(this.provider.calendarContainer, '', this.configs.ExtendedClass);
                    }
                }
                _setHtmllElements() {
                    this._datePickerProviderInputElem = this._selfElem.querySelector('input.form-control');
                    if (!this._datePickerProviderInputElem) {
                        throw new Error(`The datepicker input at DatepickerId '${this._widgetId}' is missing`);
                    }
                }
                addTodayBtn() {
                    const todayBtnWrapper = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Div);
                    todayBtnWrapper.classList.add(Flatpickr.Enum.CssClasses.TodayBtn);
                    const todayBtn = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Link);
                    todayBtn.innerHTML = Flatpickr.Enum.TodayButton.Text;
                    OSUIFramework.Helper.A11Y.AriaLabel(todayBtn, Flatpickr.Enum.TodayButton.AriaLabelText);
                    todayBtn.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._jumpIntoToday.bind(this));
                    todayBtnWrapper.appendChild(todayBtn);
                    this.provider.calendarContainer.appendChild(todayBtnWrapper);
                }
                createProviderInstance() {
                    this.provider = window.flatpickr(this._datePickerProviderInputElem, this._flatpickrOpts);
                    this._setAttributes();
                    if (this.configs.calendarMode === OSUIFramework.Patterns.DatePicker.Enum.Mode.Range ||
                        (OSUIFramework.Helper.DeviceInfo.IsDesktop && OSUIFramework.Helper.DeviceInfo.IsNative === false)) {
                        if (this.configs.ShowTodayButton) {
                            this.addTodayBtn();
                        }
                        this._setCalendarCssClasses();
                    }
                    OSUIFramework.Helper.AsyncInvocation(this._onInitializeCallbackEvent, this.widgetId);
                }
                redraw() {
                    this.provider.destroy();
                    OSUIFramework.Helper.AsyncInvocation(this.prepareConfigs.bind(this));
                }
                unsetCallbacks() {
                    this.configs.OnChange = undefined;
                    this._onInitializeCallbackEvent = undefined;
                    this._onChangeCallbackEvent = undefined;
                }
                unsetHtmlElements() {
                    this._datePickerProviderInputElem = undefined;
                }
                build() {
                    super.build();
                    this._setHtmllElements();
                }
                changeProperty(propertyName, propertyValue) {
                    const oldExtendedClass = this.configs.ExtendedClass;
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case OSUIFramework.Patterns.DatePicker.Enum.Properties.FirstWeekDay:
                            case OSUIFramework.Patterns.DatePicker.Enum.Properties.MaxDate:
                            case OSUIFramework.Patterns.DatePicker.Enum.Properties.MinDate:
                            case OSUIFramework.Patterns.DatePicker.Enum.Properties.ShowTodayButton:
                                this.redraw();
                                break;
                            case OSUIFramework.GlobalEnum.CommonPatternsProperties.ExtendedClass:
                                OSUIFramework.Helper.Dom.Styles.ExtendedClass(this.provider.calendarContainer, oldExtendedClass, propertyValue);
                                break;
                        }
                    }
                }
                clear() {
                    this.provider.clear();
                }
                close() {
                    this.provider.close();
                }
                dispose() {
                    if (this.isBuilt) {
                        this.unsetCallbacks();
                        this.unsetHtmlElements();
                        this.provider.destroy();
                    }
                    super.dispose();
                }
                open() {
                    this.provider.open();
                }
                registerProviderCallback(eventName, callback) {
                    switch (eventName) {
                        case OSUIFramework.Patterns.DatePicker.Enum.DatePickerEvents.OnChange:
                            this._onChangeCallbackEvent = callback;
                            break;
                        case OSUIFramework.Patterns.DatePicker.Enum.DatePickerEvents.OnInitialize:
                            this._onInitializeCallbackEvent = callback;
                            break;
                        default:
                            throw new Error(`The given '${eventName}' event name it's not defined.`);
                    }
                }
            }
            Flatpickr.AbstractFlatpickr = AbstractFlatpickr;
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            class AbstractFlatpickrConfig extends OSUIFramework.Patterns.DatePicker.AbstractDatePickerConfig {
                constructor(config) {
                    super(config);
                }
                _checkAltFormat() {
                    let _altFormat = this.DateFormat !== '' ? this._mapProviderDateFormat() : this.ServerDateFormat;
                    if (this.TimeFormat === OSUIFramework.Patterns.DatePicker.Enum.TimeFormatMode.Time12hFormat) {
                        _altFormat = _altFormat + ' - h:i K';
                    }
                    else if (this.TimeFormat === OSUIFramework.Patterns.DatePicker.Enum.TimeFormatMode.Time24hFormat) {
                        _altFormat = _altFormat + ' - H:i';
                    }
                    return _altFormat;
                }
                _checkLocale() {
                    const _locale = window.flatpickr.l10ns[OSUIFramework.Helper.Language.ShortLang];
                    _locale.firstDayOfWeek = this.FirstWeekDay;
                    return _locale;
                }
                _checkServerDateFormat() {
                    this.ServerDateFormat = OSUIFramework.Helper.Dates.ServerFormat.replace('YYYY', 'Y')
                        .replace('MM', 'm')
                        .replace('DD', 'd');
                }
                _mapProviderDateFormat() {
                    const _dateFormat = this.DateFormat.replace(/[^a-zA-Z]/g, ' ').split(' ');
                    for (const format of _dateFormat) {
                        switch (format) {
                            case 'YYYY':
                                this.DateFormat = this.DateFormat.replace('YYYY', 'Y');
                                break;
                            case 'YY':
                                this.DateFormat = this.DateFormat.replace('YY', 'y');
                                break;
                            case 'MMM':
                                this.DateFormat = this.DateFormat.replace('MMM', 'M');
                                break;
                            case 'MM':
                                this.DateFormat = this.DateFormat.replace('MM', 'm');
                                break;
                            case 'DDD':
                                this.DateFormat = this.DateFormat.replace('DDD', 'D');
                                break;
                            case 'DD':
                                this.DateFormat = this.DateFormat.replace('DD', 'd');
                                break;
                        }
                    }
                    return this.DateFormat;
                }
                getCommonProviderConfigs() {
                    this._checkServerDateFormat();
                    const _flatpickrOpts = {
                        altFormat: this._checkAltFormat(),
                        altInput: true,
                        dateFormat: this.TimeFormat !== OSUIFramework.Patterns.DatePicker.Enum.TimeFormatMode.Disable
                            ? this.ServerDateFormat + ' H:i'
                            : this.ServerDateFormat,
                        locale: this._checkLocale(),
                        maxDate: OSUIFramework.Helper.Dates.IsNull(this.MaxDate) ? undefined : this.MaxDate,
                        minDate: OSUIFramework.Helper.Dates.IsNull(this.MinDate) ? undefined : this.MinDate,
                        onChange: this.OnChange,
                        time_24hr: this.TimeFormat === OSUIFramework.Patterns.DatePicker.Enum.TimeFormatMode.Time24hFormat,
                    };
                    return _flatpickrOpts;
                }
            }
            Flatpickr.AbstractFlatpickrConfig = AbstractFlatpickrConfig;
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var Enum;
            (function (Enum) {
                let CssClasses;
                (function (CssClasses) {
                    CssClasses["TodayBtn"] = "flatpickr-today-button";
                })(CssClasses = Enum.CssClasses || (Enum.CssClasses = {}));
                let TodayButton;
                (function (TodayButton) {
                    TodayButton["AriaLabelText"] = "click to jump into today date";
                    TodayButton["Text"] = "Today";
                })(TodayButton = Enum.TodayButton || (Enum.TodayButton = {}));
            })(Enum = Flatpickr.Enum || (Flatpickr.Enum = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var Factory;
            (function (Factory) {
                function NewFlatpickr(datePickerId, mode, configs) {
                    let _flatpickrItem = null;
                    switch (mode) {
                        case OSUIFramework.Patterns.DatePicker.Enum.Mode.Single:
                            _flatpickrItem = new Providers.Datepicker.Flatpickr.SingleDate.OSUIFlatpickrSingleDate(datePickerId, JSON.parse(configs));
                            break;
                        case OSUIFramework.Patterns.DatePicker.Enum.Mode.Range:
                            _flatpickrItem = new Providers.Datepicker.Flatpickr.RangeDate.OSUIFlatpickrRangeDate(datePickerId, JSON.parse(configs));
                            break;
                        default:
                            throw new Error(`There is no Flatpickr of ${mode} type`);
                    }
                    return _flatpickrItem;
                }
                Factory.NewFlatpickr = NewFlatpickr;
            })(Factory = Flatpickr.Factory || (Flatpickr.Factory = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var RangeDate;
            (function (RangeDate) {
                var Enum;
                (function (Enum) {
                    let Properties;
                    (function (Properties) {
                        Properties["InitialEndDate"] = "EndDate";
                        Properties["InitialStartDate"] = "StartDate";
                    })(Properties = Enum.Properties || (Enum.Properties = {}));
                })(Enum = RangeDate.Enum || (RangeDate.Enum = {}));
            })(RangeDate = Flatpickr.RangeDate || (Flatpickr.RangeDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var RangeDate;
            (function (RangeDate) {
                class OSUIFlatpickrRangeDate extends Flatpickr.AbstractFlatpickr {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new RangeDate.FlatpickrRangeDateConfig(configs));
                    }
                    _onUpdateDateFormat() {
                        if (this.provider.selectedDates.length > 0) {
                            this.configs.InitialStartDate = this.provider.formatDate(this.provider.selectedDates[0], this._flatpickrOpts.dateFormat);
                            if (this.provider.selectedDates[1]) {
                                this.configs.InitialEndDate = this.provider.formatDate(this.provider.selectedDates[1], this._flatpickrOpts.dateFormat);
                            }
                        }
                        this.redraw();
                    }
                    onDateSelectedEvent(selectedDates) {
                        const _selectedDate = [];
                        if (selectedDates.length > 0) {
                            _selectedDate[0] = this.provider.formatDate(selectedDates[0], this._flatpickrOpts.dateFormat);
                            if (selectedDates[1]) {
                                _selectedDate[1] = this.provider.formatDate(selectedDates[1], this._flatpickrOpts.dateFormat);
                            }
                        }
                        OSUIFramework.Helper.AsyncInvocation(this._onChangeCallbackEvent, this.widgetId, _selectedDate[0], _selectedDate[1]);
                    }
                    prepareConfigs() {
                        this._flatpickrOpts = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                    build() {
                        super.build();
                        this.prepareConfigs();
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        if (this.isBuilt) {
                            switch (propertyName) {
                                case OSUIFramework.Patterns.DatePicker.Enum.Properties.DateFormat:
                                    this._onUpdateDateFormat();
                                    break;
                            }
                        }
                    }
                }
                RangeDate.OSUIFlatpickrRangeDate = OSUIFlatpickrRangeDate;
            })(RangeDate = Flatpickr.RangeDate || (Flatpickr.RangeDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var RangeDate;
            (function (RangeDate) {
                class FlatpickrRangeDateConfig extends Flatpickr.AbstractFlatpickrConfig {
                    constructor(config) {
                        super(config);
                        this.calendarMode = OSUIFramework.Patterns.DatePicker.Enum.Mode.Range;
                    }
                    _setDefaultDate() {
                        if (OSUIFramework.Helper.Dates.IsNull(this.InitialStartDate) ||
                            OSUIFramework.Helper.Dates.IsNull(this.InitialEndDate)) {
                            return undefined;
                        }
                        if (OSUIFramework.Helper.Dates.Compare(this.InitialStartDate, this.InitialEndDate) === false) {
                            throw new Error(`StartDate '${this.InitialStartDate}' can't be after EndDate '${this.InitialEndDate}'`);
                        }
                        return [this.InitialStartDate, this.InitialEndDate];
                    }
                    getProviderConfig() {
                        const flatpickrRangeDateOpts = {
                            defaultDate: this._setDefaultDate(),
                            mode: OSUIFramework.Patterns.DatePicker.Enum.Mode.Range,
                        };
                        let fpOptions = Object.assign(Object.assign({}, super.getCommonProviderConfigs()), flatpickrRangeDateOpts);
                        Object.keys(fpOptions).forEach((key) => fpOptions[key] === undefined && delete fpOptions[key]);
                        return fpOptions;
                    }
                    validateDefault(key, value) {
                        let validatedValue = undefined;
                        switch (key) {
                            case RangeDate.Enum.Properties.InitialStartDate:
                                validatedValue = false;
                                break;
                            case RangeDate.Enum.Properties.InitialEndDate:
                                validatedValue = false;
                                break;
                            default:
                                validatedValue = super.validateDefault(key, value);
                                break;
                        }
                        return validatedValue;
                    }
                }
                RangeDate.FlatpickrRangeDateConfig = FlatpickrRangeDateConfig;
            })(RangeDate = Flatpickr.RangeDate || (Flatpickr.RangeDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var SingleDate;
            (function (SingleDate) {
                var Enum;
                (function (Enum) {
                    let Properties;
                    (function (Properties) {
                        Properties["InitialDate"] = "InitialDate";
                    })(Properties = Enum.Properties || (Enum.Properties = {}));
                })(Enum = SingleDate.Enum || (SingleDate.Enum = {}));
            })(SingleDate = Flatpickr.SingleDate || (Flatpickr.SingleDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var SingleDate;
            (function (SingleDate) {
                class OSUIFlatpickrSingleDate extends Flatpickr.AbstractFlatpickr {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new SingleDate.FlatpickrSingleDateConfig(configs));
                    }
                    onDateSelectedEvent(selectedDates) {
                        let _selectedDate = '';
                        if (selectedDates.length > 0) {
                            _selectedDate = this.provider.formatDate(selectedDates[0], this._flatpickrOpts.dateFormat);
                        }
                        OSUIFramework.Helper.AsyncInvocation(this._onChangeCallbackEvent, this.widgetId, _selectedDate);
                    }
                    prepareConfigs() {
                        this._flatpickrOpts = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                    build() {
                        super.build();
                        this.prepareConfigs();
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        if (this.isBuilt) {
                            switch (propertyName) {
                                case OSUIFramework.Patterns.DatePicker.Enum.Properties.DateFormat:
                                    if (this.provider.selectedDates.length > 0) {
                                        this.configs.InitialDate = this.provider.formatDate(this.provider.selectedDates[0], this._flatpickrOpts.dateFormat);
                                    }
                                    this.redraw();
                                    break;
                                case OSUIFramework.Patterns.DatePicker.Enum.Properties.TimeFormat:
                                    this.redraw();
                                    break;
                            }
                        }
                    }
                }
                SingleDate.OSUIFlatpickrSingleDate = OSUIFlatpickrSingleDate;
            })(SingleDate = Flatpickr.SingleDate || (Flatpickr.SingleDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Datepicker;
    (function (Datepicker) {
        var Flatpickr;
        (function (Flatpickr) {
            var SingleDate;
            (function (SingleDate) {
                class FlatpickrSingleDateConfig extends Flatpickr.AbstractFlatpickrConfig {
                    constructor(config) {
                        super(config);
                        this.calendarMode = OSUIFramework.Patterns.DatePicker.Enum.Mode.Single;
                    }
                    getProviderConfig() {
                        const flatpickrSingleDateOpts = {
                            defaultDate: OSUIFramework.Helper.Dates.IsNull(this.InitialDate) ? undefined : this.InitialDate,
                            mode: OSUIFramework.Patterns.DatePicker.Enum.Mode.Single,
                            enableTime: this.TimeFormat !== OSUIFramework.Patterns.DatePicker.Enum.TimeFormatMode.Disable,
                            onChange: this.OnChange,
                        };
                        let fpOptions = Object.assign(Object.assign({}, super.getCommonProviderConfigs()), flatpickrSingleDateOpts);
                        Object.keys(fpOptions).forEach((key) => fpOptions[key] === undefined && delete fpOptions[key]);
                        return fpOptions;
                    }
                    validateDefault(key, value) {
                        let validatedValue = undefined;
                        switch (key) {
                            case SingleDate.Enum.Properties.InitialDate:
                                validatedValue = false;
                                break;
                            default:
                                validatedValue = super.validateDefault(key, value);
                                break;
                        }
                        return validatedValue;
                    }
                }
                SingleDate.FlatpickrSingleDateConfig = FlatpickrSingleDateConfig;
            })(SingleDate = Flatpickr.SingleDate || (Flatpickr.SingleDate = {}));
        })(Flatpickr = Datepicker.Flatpickr || (Datepicker.Flatpickr = {}));
    })(Datepicker = Providers.Datepicker || (Providers.Datepicker = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var OSUIComponents;
        (function (OSUIComponents) {
            class OSUIDropdownServerSide extends OSUIFramework.Patterns.AbstractParent {
                constructor(uniqueId, configs) {
                    super(uniqueId, new OSUIComponents.OSUIDropdownServerSideConfig(configs));
                    this._balloonPositionClass = '';
                    this._closeDynamically = false;
                    this._isBlocked = false;
                    this._isOpened = false;
                }
                _addErrorMessage(text) {
                    const errorMessageElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem.parentElement, OSUIComponents.Enum.CssClass.ErrorMessage);
                    if (errorMessageElement === undefined) {
                        const textContainer = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Div);
                        textContainer.classList.add(OSUIComponents.Enum.CssClass.ErrorMessage);
                        textContainer.innerHTML = text;
                        this._selfElem.parentElement.appendChild(textContainer);
                    }
                }
                _addSpanHtmlElements() {
                    this._spanTopFocusElement = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Span);
                    this._spanTopFocusElement.classList.add(OSUIComponents.Enum.CssClass.FocusTopHtmlElement, OSUIFramework.Constants.AccessibilityHideElementClass);
                    this._balloonWrapperElement.prepend(this._spanTopFocusElement);
                    OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._spanTopFocusElement);
                    this._spanBottomFocusElement = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Span);
                    this._spanBottomFocusElement.classList.add(OSUIComponents.Enum.CssClass.FocusBottomHtmlElement, OSUIFramework.Constants.AccessibilityHideElementClass);
                    this._balloonWrapperElement.append(this._spanBottomFocusElement);
                    OSUIFramework.Helper.A11Y.AriaHiddenTrue(this._spanBottomFocusElement);
                }
                _cleanPosition() {
                    if (this._balloonPositionClass !== '') {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._balloonWrapperElement, this._balloonPositionClass);
                        this._balloonPositionClass = '';
                    }
                }
                _close() {
                    if (this._closeDynamically === false) {
                        this._selectValuesWrapper.focus();
                    }
                    this._isOpened = false;
                    this._updatePatternState();
                }
                _endOfCloseAnimation() {
                    this._balloonWrapperElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventOnCloseTransitionEnd);
                    this._cleanPosition();
                    this._isBlocked = false;
                    this._triggerToogleCalbackEvent();
                }
                _getRecomendedPosition() {
                    const balloonBounds = this._balloonContainerElement.getBoundingClientRect();
                    balloonBounds.height = this.configs.balloonMaxHeight;
                    const recomendedPosition = OSUIFramework.Helper.BoundPosition.GetRecomendedPositionByBounds(balloonBounds, document.body.getBoundingClientRect());
                    if (recomendedPosition !== undefined) {
                        let newClassPosition = '';
                        switch (recomendedPosition) {
                            case OSUIFramework.GlobalEnum.Position.Top:
                                newClassPosition = OSUIComponents.Enum.CssClass.BalloonPositionTop;
                                break;
                            case OSUIFramework.GlobalEnum.Position.Bottom:
                                newClassPosition = OSUIComponents.Enum.CssClass.BalloonPositionBottom;
                                break;
                        }
                        this._balloonPositionClass = newClassPosition;
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._balloonWrapperElement, newClassPosition);
                    }
                }
                _moveBallonElement() {
                    const layoutElement = OSUIFramework.Helper.Dom.TagSelector(document.body, OSUIFramework.Constants.Dot + OSUIFramework.Constants.LayoutClass);
                    OSUIFramework.Helper.Dom.Move(this._balloonWrapperElement, layoutElement);
                }
                _onBodyClick(eventType, event) {
                    const targetElement = event.target;
                    const getBaseElement = targetElement.closest(OSUIFramework.Constants.Dot + OSUIComponents.Enum.CssClass.Pattern);
                    if (this._isOpened && getBaseElement !== this._selfElem) {
                        this._closeDynamically = true;
                        this._close();
                    }
                }
                _onBodyScroll() {
                    if (this._isOpened && OSUIFramework.Helper.DeviceInfo.IsPhone === false) {
                        this._setBalloonCoordinates();
                        this._cleanPosition();
                        this._getRecomendedPosition();
                    }
                }
                _onKeyboardPressed(event) {
                    event.stopPropagation();
                    switch (event.target) {
                        case this._selectValuesWrapper:
                            if (event.key === OSUIFramework.GlobalEnum.Keycodes.Escape) {
                                this._close();
                            }
                            if (event.key === OSUIFramework.GlobalEnum.Keycodes.Enter ||
                                event.key === OSUIFramework.GlobalEnum.Keycodes.Space) {
                                this._selectValuesWrapper.click();
                            }
                            break;
                        case this._balloonOptionsWrapperElement:
                            if (event.key === OSUIFramework.GlobalEnum.Keycodes.Escape) {
                                this._close();
                            }
                            if (event.key === OSUIFramework.GlobalEnum.Keycodes.ArrowUp) {
                                if (this._balloonSearchInputElement) {
                                    this._balloonSearchInputElement.focus();
                                }
                                else {
                                    this._spanTopFocusElement.focus();
                                }
                            }
                            else if (event.key === OSUIFramework.GlobalEnum.Keycodes.ArrowDown) {
                                this.getChildByIndex(0).setFocus();
                                if (this.configs.AllowMultipleSelection === false) {
                                    this.getChildByIndex(0).toggleSelected();
                                }
                            }
                            break;
                        case this._balloonSearchInputElement:
                            if (event.key === OSUIFramework.GlobalEnum.Keycodes.Escape) {
                                this._close();
                            }
                            break;
                    }
                }
                _onSearchInputClicked(event) {
                    event.stopPropagation();
                }
                _onSelectValuesWrapperClicked() {
                    if (this._isBlocked === false) {
                        this._isOpened ? this._close() : this._open();
                    }
                }
                _onSpanElementFocus() {
                    this._close();
                }
                _onWindowResize() {
                    if (this._isOpened) {
                        this._close();
                    }
                    this._setBalloonCoordinates();
                }
                _open() {
                    this._closeDynamically = false;
                    this._isOpened = true;
                    this._updatePatternState();
                    this._setBalloonCoordinates();
                    this._getRecomendedPosition();
                }
                _optionItemHasBeenClicked(optionItemId) {
                    const clickedItem = this.getChild(optionItemId);
                    if (clickedItem) {
                        clickedItem.toggleSelected();
                        if (this.configs.AllowMultipleSelection === false) {
                            this._close();
                        }
                    }
                    else {
                        throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailOptionItemClicked}: The ${OSUIFramework.GlobalEnum.PatternsNames.DropdownServerSideItem} under uniqueId: '${optionItemId}' does not exist as an OptionItem from ${OSUIFramework.GlobalEnum.PatternsNames.Dropdown} with Id: ${this.widgetId}.`);
                    }
                }
                _optionItemKeyPressed(optionItemId) {
                    const optionItem = this.getChild(optionItemId);
                    if (optionItem !== undefined) {
                        const getOptionItemIndex = this.getChildIndex(optionItemId);
                        if (optionItem.keyboardTriggeredKey === undefined) {
                            return;
                        }
                        switch (optionItem.keyboardTriggeredKey) {
                            case OSUIFramework.GlobalEnum.Keycodes.Enter:
                            case OSUIFramework.GlobalEnum.Keycodes.Space:
                                this._optionItemHasBeenClicked(optionItemId);
                                break;
                            case OSUIFramework.GlobalEnum.Keycodes.ArrowUp:
                                if (getOptionItemIndex > 0) {
                                    this._updateOptionItemFocuStateOnKeyPress(optionItem, getOptionItemIndex - 1);
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Keycodes.ArrowDown:
                                if (getOptionItemIndex < this.childItems.length - 1) {
                                    this._updateOptionItemFocuStateOnKeyPress(optionItem, getOptionItemIndex + 1);
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Keycodes.ShiftTab:
                                if (this._balloonSearchInputElement) {
                                    this._balloonSearchInputElement.focus();
                                }
                                else {
                                    this._spanTopFocusElement.focus();
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Keycodes.Tab:
                                if (this._balloonFocusableElemsInFooter.length > 0) {
                                    this._balloonFocusableElemsInFooter[0].focus();
                                }
                                else {
                                    this._spanBottomFocusElement.focus();
                                }
                                break;
                            case OSUIFramework.GlobalEnum.Keycodes.Escape:
                                this._close();
                                break;
                        }
                    }
                    else {
                        throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailOptionItemKeyPressed}: The ${OSUIFramework.GlobalEnum.PatternsNames.DropdownServerSideItem} under uniqueId: '${optionItemId}' does not exist as an OptionItem from ${OSUIFramework.GlobalEnum.PatternsNames.Dropdown} with Id: ${this.widgetId}.`);
                    }
                }
                _setBalloonCoordinates() {
                    const selfElement = this._selfElem.getBoundingClientRect();
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._balloonWrapperElement, OSUIComponents.Enum.InlineCssVariables.Top, selfElement.top + OSUIFramework.GlobalEnum.Units.Pixel);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._balloonWrapperElement, OSUIComponents.Enum.InlineCssVariables.Left, selfElement.left + OSUIFramework.GlobalEnum.Units.Pixel);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._balloonWrapperElement, OSUIComponents.Enum.InlineCssVariables.Width, selfElement.width + OSUIFramework.GlobalEnum.Units.Pixel);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._balloonWrapperElement, OSUIComponents.Enum.InlineCssVariables.InputHeight, selfElement.height + OSUIFramework.GlobalEnum.Units.Pixel);
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._balloonWrapperElement, OSUIComponents.Enum.InlineCssVariables.BalloonMaxHeight, this.configs.balloonMaxHeight + OSUIFramework.GlobalEnum.Units.Pixel);
                }
                _setCssClasses() {
                    if (this._balloonSearchInputElement === undefined) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._balloonWrapperElement, OSUIComponents.Enum.CssClass.BalloonHasNotSearchInput);
                    }
                }
                _setNewOptionItem(optionItemId) {
                    const optionItem = OutSystems.OSUI.Patterns.DropdownServerSideItemAPI.GetDropdownServerSideItemItemById(optionItemId);
                    if (this.getChild(optionItemId)) {
                        throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailSetNewOptionItem}: There is already a ${OSUIFramework.GlobalEnum.PatternsNames.DropdownServerSideItem} under Id: '${optionItem.widgetId}' added to ${OSUIFramework.GlobalEnum.PatternsNames.Dropdown} with uniqueId: ${this.uniqueId}.`);
                    }
                    else {
                        this.setChild(optionItemId, optionItem);
                    }
                }
                _setUpEvents() {
                    this._selectValuesWrapper.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._selectValuesWrapper.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    this._balloonOptionsWrapperElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    this._spanTopFocusElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventOnSpanFocus);
                    this._spanBottomFocusElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventOnSpanFocus);
                    if (this._balloonSearchInputElement) {
                        this._balloonSearchInputElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClickInputSearch);
                        this._balloonSearchInputElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    }
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOnBodyClick);
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.BodyOnScroll, this._eventOnBodyScroll);
                    OSUIFramework.Event.GlobalEventManager.Instance.addHandler(OSUIFramework.Event.Type.WindowResize, this._eventOnWindowResize);
                }
                _triggerToogleCalbackEvent() {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventOnToggleCallback, this.widgetId, this._isOpened);
                }
                _unsetEvents() {
                    this._selectValuesWrapper.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClick);
                    this._selectValuesWrapper.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    this._balloonOptionsWrapperElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    this._spanTopFocusElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventOnSpanFocus);
                    this._spanBottomFocusElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Focus, this._eventOnSpanFocus);
                    if (this._balloonSearchInputElement) {
                        this._balloonSearchInputElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.Click, this._eventOnClickInputSearch);
                        this._balloonSearchInputElement.removeEventListener(OSUIFramework.GlobalEnum.HTMLEvent.keyDown, this._eventOnkeyboardPress);
                    }
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnClick, this._eventOnBodyClick);
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.BodyOnScroll, this._eventOnBodyScroll);
                    OSUIFramework.Event.GlobalEventManager.Instance.removeHandler(OSUIFramework.Event.Type.WindowResize, this._eventOnWindowResize);
                }
                _unsetNewOptionItem(optionItemId) {
                    if (this.getChild(optionItemId)) {
                        this.unsetChild(optionItemId);
                    }
                    else {
                        throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailUnsetNewOptionItem}: The ${OSUIFramework.GlobalEnum.PatternsNames.DropdownServerSideItem} under uniqueId: '${optionItemId}' does not exist as an OptionItem from ${OSUIFramework.GlobalEnum.PatternsNames.Dropdown} with Id: ${this.widgetId}.`);
                    }
                }
                _updateBallonElementsTabIndex() {
                    const tabIndexValue = this._isOpened
                        ? OSUIFramework.Constants.A11YAttributes.States.TabIndexShow
                        : OSUIFramework.Constants.A11YAttributes.States.TabIndexHidden;
                    if (this._balloonSearchInputElement !== undefined) {
                        OSUIFramework.Helper.A11Y.TabIndex(this._balloonSearchInputElement, tabIndexValue);
                    }
                    OSUIFramework.Helper.A11Y.TabIndex(this._spanBottomFocusElement, tabIndexValue);
                    OSUIFramework.Helper.A11Y.TabIndex(this._spanTopFocusElement, tabIndexValue);
                    OSUIFramework.Helper.A11Y.TabIndex(this._balloonOptionsWrapperElement, tabIndexValue);
                    if (this._balloonFocusableElemsInFooter.length > 0) {
                        for (const item of this._balloonFocusableElemsInFooter) {
                            OSUIFramework.Helper.A11Y.TabIndex(item, tabIndexValue);
                        }
                    }
                }
                _updateOptionItemFocuStateOnKeyPress(optionItem, itemIndex) {
                    if (this.configs.AllowMultipleSelection === false) {
                        optionItem.toggleSelected();
                        this.getChildByIndex(itemIndex).toggleSelected();
                    }
                    optionItem.setBlur();
                    this.getChildByIndex(itemIndex).setFocus();
                }
                _updatePatternState() {
                    this._updateBallonElementsTabIndex();
                    if (this._isOpened) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this.selfElement, OSUIComponents.Enum.CssClass.IsOpened);
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._balloonWrapperElement, OSUIComponents.Enum.CssClass.IsOpened);
                        if (this._balloonSearchInputElement) {
                            this._balloonSearchInputElement.focus();
                        }
                        else {
                            this._balloonOptionsWrapperElement.focus();
                        }
                        this._triggerToogleCalbackEvent();
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this.selfElement, OSUIComponents.Enum.CssClass.IsOpened);
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._balloonWrapperElement, OSUIComponents.Enum.CssClass.IsOpened);
                        this._isBlocked = true;
                        this._balloonWrapperElement.addEventListener(OSUIFramework.GlobalEnum.HTMLEvent.TransitionEnd, this._eventOnCloseTransitionEnd);
                    }
                }
                setA11yProperties() {
                    this._updateBallonElementsTabIndex();
                    OSUIFramework.Helper.A11Y.TabIndexTrue(this._selectValuesWrapper);
                    OSUIFramework.Helper.A11Y.RoleButton(this._selectValuesWrapper);
                    OSUIFramework.Helper.A11Y.AriaHasPopup(this._selectValuesWrapper, OSUIFramework.Constants.A11YAttributes.Role.Listbox);
                    OSUIFramework.Helper.A11Y.RoleListox(this._balloonOptionsWrapperElement);
                    if (this.configs.AllowMultipleSelection) {
                        OSUIFramework.Helper.A11Y.MultiselectableTrue(this._balloonOptionsWrapperElement);
                    }
                }
                setCallbacks() {
                    this._eventOnBodyClick = this._onBodyClick.bind(this);
                    this._eventOnBodyScroll = this._onBodyScroll.bind(this);
                    this._eventOnClick = this._onSelectValuesWrapperClicked.bind(this);
                    this._eventOnClickInputSearch = this._onSearchInputClicked.bind(this);
                    this._eventOnCloseTransitionEnd = this._endOfCloseAnimation.bind(this);
                    this._eventOnkeyboardPress = this._onKeyboardPressed.bind(this);
                    this._eventOnSpanFocus = this._onSpanElementFocus.bind(this);
                    this._eventOnWindowResize = this._onWindowResize.bind(this);
                }
                setHtmlElements() {
                    this._balloonFooterElement = OSUIFramework.Helper.Dom.ClassSelector(this.selfElement, OSUIComponents.Enum.CssClass.BalloonFooter);
                    this._balloonFocusableElemsInFooter = OSUIFramework.Helper.Dom.TagSelectorAll(this._balloonFooterElement, OSUIFramework.Constants.FocusableElems);
                    this._balloonSearchInputWrapperElement = OSUIFramework.Helper.Dom.ClassSelector(this.selfElement, OSUIComponents.Enum.CssClass.BalloonSearch);
                    this._balloonSearchInputElement = OSUIFramework.Helper.Dom.TagSelector(this._balloonSearchInputWrapperElement, OSUIFramework.GlobalEnum.HTMLElement.Input);
                    this._balloonContainerElement = OSUIFramework.Helper.Dom.ClassSelector(this.selfElement, OSUIComponents.Enum.CssClass.BalloonContainer);
                    this._balloonWrapperElement = OSUIFramework.Helper.Dom.ClassSelector(this.selfElement, OSUIComponents.Enum.CssClass.BalloonWrapper);
                    this._balloonOptionsWrapperElement = OSUIFramework.Helper.Dom.ClassSelector(this._balloonWrapperElement, OSUIComponents.Enum.CssClass.BalloonContent);
                    this._selectValuesWrapper = OSUIFramework.Helper.Dom.ClassSelector(this.selfElement, OSUIComponents.Enum.CssClass.SelectValuesWrapper);
                    this._addSpanHtmlElements();
                    this.setA11yProperties();
                    this._setUpEvents();
                    this._setCssClasses();
                    this._moveBallonElement();
                    this._setBalloonCoordinates();
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventInitializedCallback, this.widgetId);
                }
                unsetCallbacks() {
                    this._eventOnBodyClick = undefined;
                    this._eventOnBodyScroll = undefined;
                    this._eventOnClick = undefined;
                    this._eventOnClickInputSearch = undefined;
                    this._eventOnCloseTransitionEnd = undefined;
                    this._eventOnkeyboardPress = undefined;
                    this._eventOnSpanFocus = undefined;
                    this._eventOnWindowResize = undefined;
                    this._platformEventInitializedCallback = undefined;
                    this._platformEventOnToggleCallback = undefined;
                }
                unsetHtmlElements() {
                    this._balloonWrapperElement.remove();
                    this._balloonContainerElement = undefined;
                    this._balloonFocusableElemsInFooter = [];
                    this._balloonFooterElement = undefined;
                    this._balloonOptionsWrapperElement = undefined;
                    this._balloonSearchInputElement = undefined;
                    this._balloonSearchInputWrapperElement = undefined;
                    this._balloonWrapperElement = undefined;
                    this._selectValuesWrapper = undefined;
                }
                beNotifiedByChild(childId, notifiedTo) {
                    switch (notifiedTo) {
                        case OSUIComponents.Enum.ChildNotifyActionType.Add:
                            this._setNewOptionItem(childId);
                            break;
                        case OSUIComponents.Enum.ChildNotifyActionType.Click:
                            this._optionItemHasBeenClicked(childId);
                            break;
                        case OSUIComponents.Enum.ChildNotifyActionType.KeyPressed:
                            this._optionItemKeyPressed(childId);
                            break;
                        case OSUIComponents.Enum.ChildNotifyActionType.Removed:
                            this._unsetNewOptionItem(childId);
                            break;
                        default:
                            throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailToSetOptionItemAction}: There no exist a '${notifiedTo}' notification type.`);
                    }
                }
                build() {
                    super.build();
                    this.setCallbacks();
                    this.setHtmlElements();
                    super.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case OSUIComponents.Enum.Properties.IsDisabled:
                                propertyValue ? this.disable() : this.enable();
                                break;
                        }
                    }
                }
                clear() {
                    const selectedOptions = this.childItems.filter((item) => item.IsSelected);
                    for (const optionItem of selectedOptions) {
                        optionItem.toggleSelected();
                    }
                }
                disable() {
                    OSUIFramework.Helper.Dom.Attribute.Set(this.selfElement, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled, '');
                    OSUIFramework.Helper.Dom.Attribute.Set(this._balloonWrapperElement, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled, '');
                    OSUIFramework.Helper.Dom.Styles.AddClass(this.selfElement, OSUIComponents.Enum.CssClass.IsDisabled);
                }
                dispose() {
                    this._unsetEvents();
                    this.unsetCallbacks();
                    this.unsetHtmlElements();
                    super.dispose();
                }
                enable() {
                    OSUIFramework.Helper.Dom.Attribute.Remove(this.selfElement, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled);
                    OSUIFramework.Helper.Dom.Attribute.Remove(this._balloonWrapperElement, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled);
                    OSUIFramework.Helper.Dom.Styles.RemoveClass(this.selfElement, OSUIComponents.Enum.CssClass.IsDisabled);
                }
                getSelectedValues() {
                    throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.HasNoImplementation.code}:	${OSUIFramework.ErrorCodes.Dropdown.HasNoImplementation.message}`);
                }
                registerProviderCallback(eventName, callback) {
                    switch (eventName) {
                        case OSUIFramework.Patterns.Dropdown.Enum.Events.Initialized:
                            if (this._platformEventInitializedCallback === undefined) {
                                this._platformEventInitializedCallback = callback;
                            }
                            break;
                        case OSUIComponents.Enum.Events.OnToggle:
                            if (this._platformEventOnToggleCallback === undefined) {
                                this._platformEventOnToggleCallback = callback;
                            }
                            break;
                        default:
                            throw new Error(`${OSUIFramework.ErrorCodes.Dropdown.FailRegisterCallback}:	The given '${eventName}' event name is not defined.`);
                    }
                }
                validation(isValid, validationMessage) {
                    if (isValid === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, OSUIComponents.Enum.CssClass.NotValid);
                        this._addErrorMessage(validationMessage);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, OSUIComponents.Enum.CssClass.NotValid);
                        const errorMessageElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem.parentElement, OSUIComponents.Enum.CssClass.ErrorMessage);
                        if (errorMessageElement) {
                            errorMessageElement.remove();
                        }
                    }
                }
            }
            OSUIComponents.OSUIDropdownServerSide = OSUIDropdownServerSide;
        })(OSUIComponents = Dropdown.OSUIComponents || (Dropdown.OSUIComponents = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var OSUIComponents;
        (function (OSUIComponents) {
            class OSUIDropdownServerSideConfig extends OSUIFramework.Patterns.AbstractConfiguration {
                constructor() {
                    super(...arguments);
                    this._balloonMaxHeight = OSUIComponents.Enum.PropertiesValues.MaxHeight;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case OSUIComponents.Enum.Properties.AllowMultipleSelection:
                        case OSUIComponents.Enum.Properties.IsDisabled:
                            validatedValue = this.validateBoolean(value, false);
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
                get balloonMaxHeight() {
                    return this._balloonMaxHeight;
                }
            }
            OSUIComponents.OSUIDropdownServerSideConfig = OSUIDropdownServerSideConfig;
        })(OSUIComponents = Dropdown.OSUIComponents || (Dropdown.OSUIComponents = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var OSUIComponents;
        (function (OSUIComponents) {
            var Enum;
            (function (Enum) {
                let ChildNotifyActionType;
                (function (ChildNotifyActionType) {
                    ChildNotifyActionType["Add"] = "add";
                    ChildNotifyActionType["Click"] = "click";
                    ChildNotifyActionType["KeyPressed"] = "keyPressed";
                    ChildNotifyActionType["Removed"] = "removed";
                })(ChildNotifyActionType = Enum.ChildNotifyActionType || (Enum.ChildNotifyActionType = {}));
                let CssClass;
                (function (CssClass) {
                    CssClass["BalloonContainer"] = "osui-dropdown-serverside__balloon-container";
                    CssClass["BalloonContent"] = "osui-dropdown-serverside__balloon-content";
                    CssClass["BalloonFooter"] = "osui-dropdown-serverside__balloon-footer";
                    CssClass["BalloonHasNotSearchInput"] = "osui-dropdown-serverside__balloon--has-not-search";
                    CssClass["BalloonPositionBottom"] = "osui-dropdown-serverside__balloon--is-bottom";
                    CssClass["BalloonPositionTop"] = "osui-dropdown-serverside__balloon--is-top";
                    CssClass["BalloonSearch"] = "osui-dropdown-serverside__balloon-search";
                    CssClass["BalloonWrapper"] = "osui-dropdown-serverside__balloon-wrapper";
                    CssClass["ErrorMessage"] = "osui-dropdown-serverside-error-message";
                    CssClass["FocusBottomHtmlElement"] = "osui-dropdown-serverside__balloon-focus-bottom";
                    CssClass["FocusTopHtmlElement"] = "osui-dropdown-serverside__balloon-focus-top";
                    CssClass["IsDisabled"] = "osui-dropdown-serverside--is-disabled";
                    CssClass["IsOpened"] = "osui-dropdown-serverside--is-opened";
                    CssClass["NotValid"] = "osui-dropdown-serverside--not-valid";
                    CssClass["Pattern"] = "osui-dropdown-serverside";
                    CssClass["SelectText"] = "osui-dropdown-serverside__text";
                    CssClass["SelectValuesWrapper"] = "osui-dropdown-serverside__selected-values-wrapper";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Events;
                (function (Events) {
                    Events["OnToggle"] = "OnToggle";
                })(Events = Enum.Events || (Enum.Events = {}));
                let InlineCssVariables;
                (function (InlineCssVariables) {
                    InlineCssVariables["BalloonMaxHeight"] = "--osui-dropdown-ss-balloon-max-height";
                    InlineCssVariables["InputHeight"] = "--osui-dropdown-ss-input-height";
                    InlineCssVariables["Left"] = "--osui-dropdown-ss-left";
                    InlineCssVariables["Top"] = "--osui-dropdown-ss-top";
                    InlineCssVariables["Width"] = "--osui-dropdown-ss-width";
                })(InlineCssVariables = Enum.InlineCssVariables || (Enum.InlineCssVariables = {}));
                let Properties;
                (function (Properties) {
                    Properties["AllowMultipleSelection"] = "AllowMultipleSelection";
                    Properties["IsDisabled"] = "IsDisabled";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let PropertiesValues;
                (function (PropertiesValues) {
                    PropertiesValues[PropertiesValues["MaxHeight"] = 320] = "MaxHeight";
                })(PropertiesValues = Enum.PropertiesValues || (Enum.PropertiesValues = {}));
            })(Enum = OSUIComponents.Enum || (OSUIComponents.Enum = {}));
        })(OSUIComponents = Dropdown.OSUIComponents || (Dropdown.OSUIComponents = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            class AbstractVirtualSelect extends OSUIFramework.Patterns.Dropdown.AbstractDropdown {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                }
                _addErrorMessage(text) {
                    const errorMessageElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem.parentElement, VirtualSelect.Enum.CssClass.ErrorMessage);
                    if (errorMessageElement === undefined) {
                        const textContainer = document.createElement(OSUIFramework.GlobalEnum.HTMLElement.Div);
                        textContainer.classList.add(VirtualSelect.Enum.CssClass.ErrorMessage);
                        textContainer.innerHTML = text;
                        this._selfElem.parentElement.appendChild(textContainer);
                    }
                }
                _manageAttributes() {
                    if (this.configs.IsDisabled) {
                        this.disable();
                    }
                }
                _manageDisableStatus() {
                    this._virtualselectMethods.close();
                    if (this.configs.IsDisabled) {
                        OSUIFramework.Helper.Dom.Attribute.Set(this._selfElem, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled, '');
                    }
                    else {
                        OSUIFramework.Helper.Dom.Attribute.Remove(this._selfElem, OSUIFramework.GlobalEnum.HTMLAttributes.Disabled);
                    }
                }
                _onSelectedOption() {
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventSelectedOptCallback, this.widgetId, this.getSelectedOptionsStructure());
                }
                _setElementId() {
                    this.configs.ElementId = '#' + this._selfElem.id;
                }
                _setUpEvents() {
                    this._selfElem.addEventListener(VirtualSelect.Enum.Events.Change, this._onSelectedOptionEvent);
                }
                _unsetEvents() {
                    this._selfElem.removeEventListener(VirtualSelect.Enum.Events.Change, this._onSelectedOptionEvent);
                }
                createProviderInstance() {
                    this.provider = window.VirtualSelect.init(this._virtualselectOpts);
                    this._virtualselectMethods = this.provider.$ele;
                    this._setUpEvents();
                    this._manageAttributes();
                    OSUIFramework.Helper.AsyncInvocation(this._platformEventInitializedCallback, this.widgetId);
                }
                redraw() {
                    this.provider.destroy();
                    OSUIFramework.Helper.AsyncInvocation(this.prepareConfigs.bind(this));
                }
                setCallbacks() {
                    this._onSelectedOptionEvent = this._onSelectedOption.bind(this);
                }
                unsetCallbacks() {
                    this._onSelectedOptionEvent = undefined;
                }
                build() {
                    super.build();
                    this._setElementId();
                    this.setCallbacks();
                    this.prepareConfigs();
                    super.finishBuild();
                }
                changeProperty(propertyName, propertyValue) {
                    if ((propertyName === VirtualSelect.Enum.Properties.OptionsList || propertyName === VirtualSelect.Enum.Properties.SelectedOptions) &&
                        typeof propertyValue === 'string') {
                        propertyValue = JSON.parse(propertyValue);
                    }
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case OSUIFramework.Patterns.Dropdown.Enum.Properties.IsDisabled:
                                this._manageDisableStatus();
                                break;
                            case VirtualSelect.Enum.Properties.NoResultsText:
                                this.redraw();
                                break;
                            case VirtualSelect.Enum.Properties.OptionsList:
                                this.redraw();
                                break;
                            case VirtualSelect.Enum.Properties.Prompt:
                                this.redraw();
                                break;
                            case VirtualSelect.Enum.Properties.SearchPrompt:
                                this.redraw();
                                break;
                            case VirtualSelect.Enum.Properties.SelectedOptions:
                                this.redraw();
                                break;
                        }
                    }
                }
                clear() {
                    this._virtualselectMethods.reset();
                }
                disable() {
                    this.configs.IsDisabled = true;
                    this._manageDisableStatus();
                }
                dispose() {
                    this.provider.destroy();
                    this.unsetCallbacks();
                    this._unsetEvents();
                    super.dispose();
                }
                enable() {
                    this.configs.IsDisabled = false;
                    this._manageDisableStatus();
                }
                getSelectedValues() {
                    return this.getSelectedOptionsStructure();
                }
                registerProviderCallback(eventName, callback) {
                    switch (eventName) {
                        case OSUIFramework.Patterns.Dropdown.Enum.Events.Initialized:
                            if (this._platformEventInitializedCallback === undefined) {
                                this._platformEventInitializedCallback = callback;
                            }
                            break;
                        case VirtualSelect.Enum.Events.OnSelected:
                            if (this._platformEventSelectedOptCallback === undefined) {
                                this._platformEventSelectedOptCallback = callback;
                            }
                            break;
                        default:
                            throw new Error(`The given '${eventName}' event name it's not defined.`);
                    }
                }
                validation(isValid, validationMessage) {
                    if (isValid === false) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, VirtualSelect.Enum.CssClass.NotValid);
                        this._addErrorMessage(validationMessage);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, VirtualSelect.Enum.CssClass.NotValid);
                        const errorMessageElement = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem.parentElement, VirtualSelect.Enum.CssClass.ErrorMessage);
                        if (errorMessageElement) {
                            errorMessageElement.remove();
                        }
                    }
                }
            }
            VirtualSelect.AbstractVirtualSelect = AbstractVirtualSelect;
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            class AbstractVirtualSelectConfig extends OSUIFramework.Patterns.Dropdown.AbstractDropdownConfig {
                _checkForFigType(index) {
                    let hasImage = VirtualSelect.Enum.FigureType.None;
                    if (this.OptionsList[index].image_url_or_class !== undefined &&
                        this.OptionsList[index].image_url_or_class !== '') {
                        hasImage = OSUIFramework.Helper.URL.IsImage(this.OptionsList[index].image_url_or_class)
                            ? VirtualSelect.Enum.FigureType.Image
                            : VirtualSelect.Enum.FigureType.Icon;
                    }
                    return hasImage;
                }
                _getOptionIconPrefix(index) {
                    return `<i class="${VirtualSelect.Enum.CssClass.OptionItemIcon} ${this.OptionsList[index].image_url_or_class}"></i>`;
                }
                _getOptionImagePrefix(index) {
                    const sanitizedUrl = OSUIFramework.Helper.Sanitize(this.OptionsList[index].image_url_or_class);
                    return `<img class="${VirtualSelect.Enum.CssClass.OptionItemImage}" src="${sanitizedUrl}">`;
                }
                _getOptionInfo(data) {
                    let prefix = '';
                    const hasFigureType = this._checkForFigType(data.index);
                    switch (hasFigureType) {
                        case VirtualSelect.Enum.FigureType.Image:
                            prefix = this._getOptionImagePrefix(data.index);
                            break;
                        case VirtualSelect.Enum.FigureType.Icon:
                            prefix = this._getOptionIconPrefix(data.index);
                            break;
                    }
                    return `${prefix}${data.label}`;
                }
                getProviderConfig() {
                    for (const option of this.OptionsList) {
                        option.label = OSUIFramework.Helper.Sanitize(option.label);
                    }
                    const vsOptions = {
                        ele: this.ElementId,
                        hideClearButton: true,
                        labelRenderer: this._getOptionInfo.bind(this),
                        noOptionsText: this.NoResultsText,
                        noSearchResultsText: this.NoResultsText,
                        options: this.OptionsList,
                        placeholder: this.Prompt,
                        search: true,
                        searchPlaceholderText: this.SearchPrompt,
                        selectAllOnlyVisible: true,
                        silentInitialValueSet: true,
                        selectedValue: this._getSelectedValues(),
                        textDirection: OutSystems.OSUI.Utils.GetIsRTL()
                            ? OSUIFramework.GlobalEnum.Direction.RTL
                            : OSUIFramework.GlobalEnum.Direction.LTR,
                    };
                    return vsOptions;
                }
                validateDefault(key, value) {
                    let validatedValue = undefined;
                    switch (key) {
                        case VirtualSelect.Enum.Properties.NoResultsText:
                            validatedValue = this.validateString(value, undefined);
                            break;
                        case VirtualSelect.Enum.Properties.OptionsList:
                            validatedValue = value;
                            break;
                        case VirtualSelect.Enum.Properties.Prompt:
                            validatedValue = this.validateString(value, undefined);
                            break;
                        case VirtualSelect.Enum.Properties.SearchPrompt:
                            validatedValue = this.validateString(value, undefined);
                            break;
                        case VirtualSelect.Enum.Properties.SelectedOptions:
                            validatedValue = value;
                            break;
                        default:
                            validatedValue = super.validateDefault(key, value);
                            break;
                    }
                    return validatedValue;
                }
            }
            VirtualSelect.AbstractVirtualSelectConfig = AbstractVirtualSelectConfig;
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Enum;
            (function (Enum) {
                let CssClass;
                (function (CssClass) {
                    CssClass["ErrorMessage"] = "osui-dropdown-error-message";
                    CssClass["NotValid"] = "osui-dropdown--not-valid";
                    CssClass["OptionItemIcon"] = "osui-dropdown-option-icon";
                    CssClass["OptionItemImage"] = "osui-dropdown-option-image";
                })(CssClass = Enum.CssClass || (Enum.CssClass = {}));
                let Events;
                (function (Events) {
                    Events["Change"] = "change";
                    Events["OnSelected"] = "OnSelected";
                })(Events = Enum.Events || (Enum.Events = {}));
                let Properties;
                (function (Properties) {
                    Properties["NoResultsText"] = "NoResultsText";
                    Properties["OptionsList"] = "OptionsList";
                    Properties["Prompt"] = "Prompt";
                    Properties["SearchPrompt"] = "SearchPrompt";
                    Properties["SelectedOptions"] = "SelectedOptions";
                })(Properties = Enum.Properties || (Enum.Properties = {}));
                let FigureType;
                (function (FigureType) {
                    FigureType["Icon"] = "Icon";
                    FigureType["Image"] = "Image";
                    FigureType["None"] = "None";
                })(FigureType = Enum.FigureType || (Enum.FigureType = {}));
            })(Enum = VirtualSelect.Enum || (VirtualSelect.Enum = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Factory;
            (function (Factory) {
                function NewVirtualSelect(dropdownId, mode, configs) {
                    let _virtualSelectItem = null;
                    switch (mode) {
                        case OSUIFramework.Patterns.Dropdown.Enum.Mode.Search:
                            _virtualSelectItem = new Providers.Dropdown.VirtualSelect.Search.OSUIVirtualSelectSearch(dropdownId, configs);
                            break;
                        case OSUIFramework.Patterns.Dropdown.Enum.Mode.Tags:
                            _virtualSelectItem = new Providers.Dropdown.VirtualSelect.Tags.OSUIVirtualSelectTags(dropdownId, configs);
                            break;
                        default:
                            throw new Error(`There is no Dropdown of ${mode} mode type`);
                    }
                    return _virtualSelectItem;
                }
                Factory.NewVirtualSelect = NewVirtualSelect;
            })(Factory = VirtualSelect.Factory || (VirtualSelect.Factory = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Search;
            (function (Search) {
                var Enum;
                (function (Enum) {
                    let Properties;
                    (function (Properties) {
                        Properties["AllowMultipleSelection"] = "AllowMultipleSelection";
                    })(Properties = Enum.Properties || (Enum.Properties = {}));
                })(Enum = Search.Enum || (Search.Enum = {}));
            })(Search = VirtualSelect.Search || (VirtualSelect.Search = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Search;
            (function (Search) {
                class OSUIVirtualSelectSearch extends VirtualSelect.AbstractVirtualSelect {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new Search.VirtualSelectSearchConfig(configs));
                    }
                    getSelectedOptionsStructure() {
                        let optionsSelected = [];
                        if (this.configs.AllowMultipleSelection) {
                            optionsSelected = this._virtualselectMethods.getSelectedOptions();
                        }
                        else {
                            if (this._virtualselectMethods.getSelectedOptions()) {
                                optionsSelected.push(this._virtualselectMethods.getSelectedOptions());
                            }
                        }
                        return optionsSelected !== undefined && optionsSelected.length > 0 ? JSON.stringify(optionsSelected) : '';
                    }
                    prepareConfigs() {
                        this._virtualselectOpts = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        if (this.isBuilt) {
                            switch (propertyName) {
                                case Search.Enum.Properties.AllowMultipleSelection:
                                    this.redraw();
                                    break;
                            }
                        }
                    }
                }
                Search.OSUIVirtualSelectSearch = OSUIVirtualSelectSearch;
            })(Search = VirtualSelect.Search || (VirtualSelect.Search = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Search;
            (function (Search) {
                class VirtualSelectSearchConfig extends VirtualSelect.AbstractVirtualSelectConfig {
                    _getSelectedValues() {
                        const selectedKeyvalues = [];
                        if (this.SelectedOptions.length > 0) {
                            if (this.AllowMultipleSelection) {
                                for (const option of this.SelectedOptions) {
                                    selectedKeyvalues.push(option.value);
                                }
                            }
                            else {
                                selectedKeyvalues.push(this.SelectedOptions[0].value);
                            }
                        }
                        return selectedKeyvalues;
                    }
                    getProviderConfig() {
                        const virtualSelectSearchOpts = {
                            multiple: this.AllowMultipleSelection,
                        };
                        let vsOptions = Object.assign(Object.assign({}, super.getProviderConfig()), virtualSelectSearchOpts);
                        Object.keys(vsOptions).forEach((key) => vsOptions[key] === undefined && delete vsOptions[key]);
                        return vsOptions;
                    }
                    validateDefault(key, value) {
                        let validatedValue = undefined;
                        switch (key) {
                            case Search.Enum.Properties.AllowMultipleSelection:
                                validatedValue = this.validateBoolean(value, false);
                                break;
                            default:
                                validatedValue = super.validateDefault(key, value);
                                break;
                        }
                        return validatedValue;
                    }
                }
                Search.VirtualSelectSearchConfig = VirtualSelectSearchConfig;
            })(Search = VirtualSelect.Search || (VirtualSelect.Search = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Tags;
            (function (Tags) {
                class OSUIVirtualSelectTags extends VirtualSelect.AbstractVirtualSelect {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new Tags.VirtualSelectTagsConfig(configs));
                    }
                    getSelectedOptionsStructure() {
                        const optionsSelected = this._virtualselectMethods.getSelectedOptions();
                        return optionsSelected.length > 0 ? JSON.stringify(optionsSelected) : '';
                    }
                    prepareConfigs() {
                        this._virtualselectOpts = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                }
                Tags.OSUIVirtualSelectTags = OSUIVirtualSelectTags;
            })(Tags = VirtualSelect.Tags || (VirtualSelect.Tags = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var Dropdown;
    (function (Dropdown) {
        var VirtualSelect;
        (function (VirtualSelect) {
            var Tags;
            (function (Tags) {
                class VirtualSelectTagsConfig extends VirtualSelect.AbstractVirtualSelectConfig {
                    _getSelectedValues() {
                        const selectedKeyvalues = [];
                        if (this.SelectedOptions.length > 0) {
                            for (const option of this.SelectedOptions) {
                                selectedKeyvalues.push(option.value);
                            }
                        }
                        return selectedKeyvalues;
                    }
                    getProviderConfig() {
                        const virtualSelectSearchOpts = {
                            multiple: true,
                            showValueAsTags: true,
                        };
                        let vsOptions = Object.assign(Object.assign({}, super.getProviderConfig()), virtualSelectSearchOpts);
                        Object.keys(vsOptions).forEach((key) => vsOptions[key] === undefined && delete vsOptions[key]);
                        return vsOptions;
                    }
                }
                Tags.VirtualSelectTagsConfig = VirtualSelectTagsConfig;
            })(Tags = VirtualSelect.Tags || (VirtualSelect.Tags = {}));
        })(VirtualSelect = Dropdown.VirtualSelect || (Dropdown.VirtualSelect = {}));
    })(Dropdown = Providers.Dropdown || (Providers.Dropdown = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUISlider;
        (function (NoUISlider) {
            class AbstractNoUiSlider extends OSUIFramework.Patterns.RangeSlider.AbstractRangeSlider {
                constructor(uniqueId, configs) {
                    super(uniqueId, configs);
                    this.throttleTimeValue = 200;
                    this.throttleTimer = undefined;
                    this._isInterval = this.configs.rangeSliderMode === OSUIFramework.Patterns.RangeSlider.Enum.Mode.Interval;
                }
                _setIsDisabled() {
                    if (this.configs.IsDisabled) {
                        OSUIFramework.Helper.Dom.Disable(this._rangeSliderProviderElem);
                    }
                    else {
                        OSUIFramework.Helper.Dom.Enable(this._rangeSliderProviderElem);
                    }
                }
                _setOnInitializedEvent() {
                    OSUIFramework.Helper.AsyncInvocation(this.platformEventInitialize, this.widgetId);
                }
                _setOnValueChangeEvent(changeEvent) {
                    this.provider.on(changeEvent, this.eventProviderValueChanged);
                }
                _setSize() {
                    if (this.configs.Size.includes('%') && parseFloat(this.configs.Size) > 100) {
                        this.configs.Size = OSUIFramework.Patterns.RangeSlider.Enum.DefaultValues.PercentualSize;
                        console.warn(`The value of the Size property on the '${this.widgetId}' ${OSUIFramework.GlobalEnum.PatternsNames.RangeSlider} can't be smaller than '${OSUIFramework.Patterns.RangeSlider.Enum.DefaultValues.PercentualSize}'.`);
                    }
                    OSUIFramework.Helper.Dom.Styles.SetStyleAttribute(this._selfElem, OSUIFramework.Patterns.RangeSlider.Enum.CssProperties.Size, this.configs.Size);
                }
                _updateRangeValues() {
                    this.provider.updateOptions({
                        range: this.configs.getRangeConfig(),
                    });
                    if (this.configs.ShowTickMarks) {
                        this.provider.updateOptions({ pips: this.configs.getPipsConfig() });
                    }
                }
                createProviderInstance() {
                    this.setInitialStates();
                    this.provider = window.noUiSlider.create(this._rangeSliderProviderElem, this.providerOptions);
                    this._setOnInitializedEvent();
                    this._setOnValueChangeEvent(RangeSlider.NoUiSlider.Enum.NoUISliderEvents.Slide);
                }
                setHtmlElements() {
                    this._rangeSliderProviderElem = OSUIFramework.Helper.Dom.ClassSelector(this._selfElem, OSUIFramework.Patterns.RangeSlider.Enum.CssClass.RangeSliderProviderElem);
                }
                setInitialCSSClasses() {
                    if (this.configs.Orientation === OSUIFramework.GlobalEnum.Orientation.Vertical) {
                        OSUIFramework.Helper.Dom.Styles.AddClass(this._selfElem, OSUIFramework.Patterns.RangeSlider.Enum.CssClass.ClassModifier +
                            OSUIFramework.GlobalEnum.Orientation.Vertical);
                    }
                    else if (OSUIFramework.GlobalEnum.Orientation.Horizontal) {
                        OSUIFramework.Helper.Dom.Styles.RemoveClass(this._selfElem, OSUIFramework.Patterns.RangeSlider.Enum.CssClass.ClassModifier +
                            OSUIFramework.GlobalEnum.Orientation.Vertical);
                    }
                }
                setInitialStates() {
                    this._setSize();
                    this._setIsDisabled();
                }
                unsetCallbacks() {
                    this.eventProviderValueChanged = undefined;
                }
                unsetHtmlElements() {
                    this._rangeSliderProviderElem = undefined;
                }
                updateRangeSlider() {
                    this.provider.destroy();
                    this.createProviderInstance();
                    this.setInitialCSSClasses();
                }
                build() {
                    super.build();
                    this.setHtmlElements();
                    this.setInitialCSSClasses();
                }
                changeProperty(propertyName, propertyValue) {
                    super.changeProperty(propertyName, propertyValue);
                    if (this.isBuilt) {
                        switch (propertyName) {
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.StartingValueFrom:
                                console.warn(`${this._isInterval
                                    ? OSUIFramework.GlobalEnum.PatternsNames.RangeSliderInterval
                                    : OSUIFramework.GlobalEnum.PatternsNames.RangeSlider} (${this.widgetId}): changes to ${OSUIFramework.Patterns.RangeSlider.Enum.Properties.StartingValueFrom} parameter do not affect the ${this._isInterval
                                    ? OSUIFramework.GlobalEnum.PatternsNames.RangeSliderInterval
                                    : OSUIFramework.GlobalEnum.PatternsNames.RangeSlider}. Use a distinct variable to assign on the OnValueChange event`);
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.MinValue:
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.MaxValue:
                                this._updateRangeValues();
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.Orientation:
                                console.warn(`RangeSlider${this._isInterval ? OSUIFramework.Patterns.RangeSlider.Enum.Mode.Interval : ''} (${this.widgetId}): changes to ${OSUIFramework.Patterns.RangeSlider.Enum.Properties.Orientation} parameter do not affect the ${this._isInterval
                                    ? OSUIFramework.GlobalEnum.PatternsNames.RangeSliderInterval
                                    : OSUIFramework.GlobalEnum.PatternsNames.RangeSlider}. Use a distinct variable to assign on the OnValueChange event.`);
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.IsDisabled:
                                this._setIsDisabled();
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.TickMarksInterval:
                                this.provider.updateOptions({ pips: this.configs.getPipsConfig() });
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.Step:
                                this.provider.updateOptions({ step: this.configs.Step });
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.Size:
                                this._setSize();
                                break;
                            case OSUIFramework.Patterns.RangeSlider.Enum.Properties.ShowFloatingLabel:
                                this.provider.updateOptions({ tooltips: this.configs.getTooltipFormat() });
                                break;
                        }
                    }
                }
                dispose() {
                    if (this.isBuilt) {
                        this.unsetCallbacks();
                        this.unsetHtmlElements();
                        this.provider.destroy();
                    }
                    super.dispose();
                }
                getValue() {
                    return this.provider.get();
                }
                registerProviderCallback(eventName, callback) {
                    switch (eventName) {
                        case OSUIFramework.Patterns.RangeSlider.Enum.RangeSliderEvents.OnInitialize:
                            if (this.platformEventInitialize === undefined) {
                                this.platformEventInitialize = callback;
                            }
                            break;
                        case OSUIFramework.Patterns.RangeSlider.Enum.RangeSliderEvents.OnValueChange:
                            if (this.platformEventValueChange === undefined) {
                                this.platformEventValueChange = callback;
                            }
                            break;
                        default:
                            throw new Error(`${OSUIFramework.ErrorCodes.RangeSlider.FailRegisterCallback}:	The given '${eventName}' event name is not defined.`);
                    }
                }
                setRangeIntervalChangeOnDragEnd() {
                    this.provider.off(RangeSlider.NoUiSlider.Enum.NoUISliderEvents.Slide, this.eventProviderValueChanged);
                    this._setOnValueChangeEvent(RangeSlider.NoUiSlider.Enum.NoUISliderEvents.Change);
                }
            }
            NoUISlider.AbstractNoUiSlider = AbstractNoUiSlider;
        })(NoUISlider = RangeSlider.NoUISlider || (RangeSlider.NoUISlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUiSlider;
        (function (NoUiSlider) {
            class AbstractNoUiSliderConfig extends OSUIFramework.Patterns.RangeSlider
                .AbstractRangeSliderConfig {
                getCommonProviderConfig() {
                    let providerOptions = {
                        direction: OutSystems.OSUI.Utils.GetIsRTL()
                            ? OSUIFramework.GlobalEnum.Direction.RTL
                            : OSUIFramework.GlobalEnum.Direction.LTR,
                        step: this.Step,
                        orientation: this.Orientation,
                        pips: this.ShowTickMarks ? this.getPipsConfig() : false,
                        range: this.getRangeConfig(),
                        tooltips: this.getTooltipFormat(),
                    };
                    Object.keys(providerOptions).forEach((key) => providerOptions[key] === undefined && delete providerOptions[key]);
                    return providerOptions;
                }
                getPipsConfig() {
                    let tickMarksValues = Math.floor(this.TickMarksInterval);
                    if (tickMarksValues > this.MaxValue) {
                        tickMarksValues = this.MaxValue;
                    }
                    if (tickMarksValues < 1) {
                        console.warn('The interval between tick marks, when they exist, can not be smaller than one or a decimal number (library restraint). If you do not want TickMarks to show, set the ShowTickMarks parameter to false.');
                        this.TickMarksInterval = 1;
                        return;
                    }
                    const ticksDensity = tickMarksValues * 100;
                    const list = [];
                    let tick = this.MinValue;
                    while (tick <= this.MaxValue) {
                        list.push(tick);
                        tick += tickMarksValues;
                    }
                    if (tick !== this.MaxValue) {
                        list.push(this.MaxValue);
                    }
                    return {
                        values: list,
                        density: ticksDensity,
                        mode: RangeSlider.NoUiSlider.Enum.NoUiSliderModeOptions.Values,
                    };
                }
                getRangeConfig() {
                    return {
                        min: this.MinValue,
                        max: this.MaxValue === this.MinValue ? 100 : this.MaxValue,
                    };
                }
                getTooltipFormat() {
                    const tooltipValue = this.ShowFloatingLabel ? window.wNumb({ decimals: 0 }) : false;
                    let tooltipsFormat;
                    if (this.rangeSliderMode === OSUIFramework.Patterns.RangeSlider.Enum.Mode.Interval) {
                        tooltipsFormat = [tooltipValue, tooltipValue];
                    }
                    else {
                        tooltipsFormat = [tooltipValue];
                    }
                    return tooltipsFormat;
                }
            }
            NoUiSlider.AbstractNoUiSliderConfig = AbstractNoUiSliderConfig;
        })(NoUiSlider = RangeSlider.NoUiSlider || (RangeSlider.NoUiSlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUiSlider;
        (function (NoUiSlider) {
            var Enum;
            (function (Enum) {
                let NoUISliderLabels;
                (function (NoUISliderLabels) {
                    NoUISliderLabels["Lower"] = "lower-handle";
                    NoUISliderLabels["Single"] = "handle";
                    NoUISliderLabels["Upper"] = "upper-handle";
                })(NoUISliderLabels = Enum.NoUISliderLabels || (Enum.NoUISliderLabels = {}));
                let NoUISliderEvents;
                (function (NoUISliderEvents) {
                    NoUISliderEvents["Change"] = "change";
                    NoUISliderEvents["End"] = "end";
                    NoUISliderEvents["Start"] = "start";
                    NoUISliderEvents["Slide"] = "slide";
                })(NoUISliderEvents = Enum.NoUISliderEvents || (Enum.NoUISliderEvents = {}));
                let NoUiSliderConnectOptions;
                (function (NoUiSliderConnectOptions) {
                    NoUiSliderConnectOptions["Lower"] = "lower";
                })(NoUiSliderConnectOptions = Enum.NoUiSliderConnectOptions || (Enum.NoUiSliderConnectOptions = {}));
                let NoUiSliderModeOptions;
                (function (NoUiSliderModeOptions) {
                    NoUiSliderModeOptions["Values"] = "values";
                })(NoUiSliderModeOptions = Enum.NoUiSliderModeOptions || (Enum.NoUiSliderModeOptions = {}));
            })(Enum = NoUiSlider.Enum || (NoUiSlider.Enum = {}));
        })(NoUiSlider = RangeSlider.NoUiSlider || (RangeSlider.NoUiSlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUiSlider;
        (function (NoUiSlider) {
            var Factory;
            (function (Factory) {
                function NewNoUiSlider(rangeSliderId, configs, mode) {
                    let _rangeSliderItem = null;
                    switch (mode) {
                        case OSUIFramework.Patterns.RangeSlider.Enum.Mode.Single:
                            _rangeSliderItem = new Providers.RangeSlider.NoUISlider.SingleSlider.OSUINoUiSliderSingle(rangeSliderId, JSON.parse(configs));
                            break;
                        case OSUIFramework.Patterns.RangeSlider.Enum.Mode.Interval:
                            _rangeSliderItem = new Providers.RangeSlider.NoUISlider.IntervalSlider.OSUINoUiSliderInterval(rangeSliderId, JSON.parse(configs));
                            break;
                        default:
                            throw new Error(`There is no RangeSlider of ${mode} type`);
                    }
                    return _rangeSliderItem;
                }
                Factory.NewNoUiSlider = NewNoUiSlider;
            })(Factory = NoUiSlider.Factory || (NoUiSlider.Factory = {}));
        })(NoUiSlider = RangeSlider.NoUiSlider || (RangeSlider.NoUiSlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUISlider;
        (function (NoUISlider) {
            var IntervalSlider;
            (function (IntervalSlider) {
                class OSUINoUiSliderInterval extends NoUISlider.AbstractNoUiSlider {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new NoUISlider.SliderInterval.NoUiSliderIntervalConfig(configs));
                    }
                    _updateRangeSlider() {
                        const value = this.getValue();
                        this.configs.StartingValueFrom = value[0];
                        this.configs.StartingValueTo = value[1];
                        this.providerOptions = this.configs.getProviderConfig();
                        super.updateRangeSlider();
                    }
                    _valueChangeCallback(value) {
                        if (value !== undefined) {
                            this.configs.StartingValueFrom = value[0];
                            this.configs.StartingValueTo = value[1];
                        }
                        if (this.throttleTimer === undefined) {
                            this.throttleTimer = setTimeout(() => {
                                this.platformEventValueChange(this.widgetId, this.configs.StartingValueFrom, this.configs.StartingValueTo);
                                this.throttleTimer = undefined;
                            }, this.throttleTimeValue);
                        }
                    }
                    prepareConfigs() {
                        this.providerOptions = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                    setA11yProperties() {
                        this.providerOptions.handleAttributes = [
                            { 'aria-label': RangeSlider.NoUiSlider.Enum.NoUISliderLabels.Lower },
                            { 'aria-label': RangeSlider.NoUiSlider.Enum.NoUISliderLabels.Upper },
                        ];
                    }
                    setCallbacks() {
                        this.eventProviderValueChanged = this._valueChangeCallback.bind(this);
                    }
                    build() {
                        super.build();
                        this.setCallbacks();
                        this.prepareConfigs();
                        this.setA11yProperties();
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        if (this.isBuilt) {
                            switch (propertyName) {
                                case OSUIFramework.Patterns.RangeSlider.Enum.Properties.StartingValueTo:
                                    console.warn(`${OSUIFramework.GlobalEnum.PatternsNames.RangeSliderInterval}': (${this.widgetId}): changes to ${OSUIFramework.Patterns.RangeSlider.Enum.Properties.StartingValueTo} parameter do not affect the ${OSUIFramework.GlobalEnum.PatternsNames.RangeSliderInterval}'. Use a distinct variable to assign on the OnValueChange event`);
                                    break;
                                case OSUIFramework.Patterns.RangeSlider.Enum.Properties.ShowTickMarks:
                                    this._updateRangeSlider();
                                    break;
                            }
                        }
                    }
                }
                IntervalSlider.OSUINoUiSliderInterval = OSUINoUiSliderInterval;
            })(IntervalSlider = NoUISlider.IntervalSlider || (NoUISlider.IntervalSlider = {}));
        })(NoUISlider = RangeSlider.NoUISlider || (RangeSlider.NoUISlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUISlider;
        (function (NoUISlider) {
            var SliderInterval;
            (function (SliderInterval) {
                class NoUiSliderIntervalConfig extends Providers.RangeSlider.NoUiSlider.AbstractNoUiSliderConfig {
                    constructor(config) {
                        super(config);
                        this.rangeSliderMode = OSUIFramework.Patterns.RangeSlider.Enum.Mode.Interval;
                    }
                    getProviderConfig() {
                        let rangeSliderOptions = {
                            start: [this.StartingValueFrom, this.StartingValueTo],
                            connect: true,
                        };
                        let noUiSliderOptions = Object.assign(Object.assign({}, super.getCommonProviderConfig()), rangeSliderOptions);
                        Object.keys(noUiSliderOptions).forEach((key) => noUiSliderOptions[key] === undefined && delete noUiSliderOptions[key]);
                        return noUiSliderOptions;
                    }
                }
                SliderInterval.NoUiSliderIntervalConfig = NoUiSliderIntervalConfig;
            })(SliderInterval = NoUISlider.SliderInterval || (NoUISlider.SliderInterval = {}));
        })(NoUISlider = RangeSlider.NoUISlider || (RangeSlider.NoUISlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUISlider;
        (function (NoUISlider) {
            var SingleSlider;
            (function (SingleSlider) {
                class OSUINoUiSliderSingle extends NoUISlider.AbstractNoUiSlider {
                    constructor(uniqueId, configs) {
                        super(uniqueId, new NoUISlider.SliderSingle.NoUiSliderSingleConfig(configs));
                    }
                    _updateRangeSlider() {
                        const value = this.getValue();
                        this.configs.StartingValueFrom = value;
                        this.providerOptions = this.configs.getProviderConfig();
                        super.updateRangeSlider();
                    }
                    _valueChangeCallback(value) {
                        if (value !== undefined) {
                            this.configs.StartingValueFrom = value[0];
                        }
                        if (this.throttleTimer === undefined) {
                            this.throttleTimer = setTimeout(() => {
                                this.platformEventValueChange(this.widgetId, this.configs.StartingValueFrom, undefined);
                                this.throttleTimer = undefined;
                            }, this.throttleTimeValue);
                        }
                    }
                    prepareConfigs() {
                        this.providerOptions = this.configs.getProviderConfig();
                        super.createProviderInstance();
                    }
                    setA11yProperties() {
                        this.providerOptions.handleAttributes = [
                            { 'aria-label': RangeSlider.NoUiSlider.Enum.NoUISliderLabels.Single },
                        ];
                    }
                    setCallbacks() {
                        this.eventProviderValueChanged = this._valueChangeCallback.bind(this);
                    }
                    build() {
                        super.build();
                        this.setCallbacks();
                        this.prepareConfigs();
                        this.setA11yProperties();
                        this.finishBuild();
                    }
                    changeProperty(propertyName, propertyValue) {
                        super.changeProperty(propertyName, propertyValue);
                        if (this.isBuilt) {
                            switch (propertyName) {
                                case OSUIFramework.Patterns.RangeSlider.Enum.Properties.ShowTickMarks:
                                    this._updateRangeSlider();
                                    break;
                            }
                        }
                    }
                }
                SingleSlider.OSUINoUiSliderSingle = OSUINoUiSliderSingle;
            })(SingleSlider = NoUISlider.SingleSlider || (NoUISlider.SingleSlider = {}));
        })(NoUISlider = RangeSlider.NoUISlider || (RangeSlider.NoUISlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
var Providers;
(function (Providers) {
    var RangeSlider;
    (function (RangeSlider) {
        var NoUISlider;
        (function (NoUISlider) {
            var SliderSingle;
            (function (SliderSingle) {
                class NoUiSliderSingleConfig extends Providers.RangeSlider.NoUiSlider.AbstractNoUiSliderConfig {
                    constructor(config) {
                        super(config);
                        this.rangeSliderMode = OSUIFramework.Patterns.RangeSlider.Enum.Mode.Single;
                    }
                    getProviderConfig() {
                        let singleSliderOptions = {
                            start: [this.StartingValueFrom],
                            connect: RangeSlider.NoUiSlider.Enum.NoUiSliderConnectOptions.Lower,
                        };
                        let noUiSliderOptions = Object.assign(Object.assign({}, super.getCommonProviderConfig()), singleSliderOptions);
                        Object.keys(noUiSliderOptions).forEach((key) => noUiSliderOptions[key] === undefined && delete noUiSliderOptions[key]);
                        return noUiSliderOptions;
                    }
                }
                SliderSingle.NoUiSliderSingleConfig = NoUiSliderSingleConfig;
            })(SliderSingle = NoUISlider.SliderSingle || (NoUISlider.SliderSingle = {}));
        })(NoUISlider = RangeSlider.NoUISlider || (RangeSlider.NoUISlider = {}));
    })(RangeSlider = Providers.RangeSlider || (Providers.RangeSlider = {}));
})(Providers || (Providers = {}));
