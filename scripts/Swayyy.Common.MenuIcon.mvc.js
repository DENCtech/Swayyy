define("Swayyy.Common.MenuIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetMenuIcon", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SwayyyModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("MenuAction", "menuActionIn", "MenuAction", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("MenuAction" in inputs) {
this.variables.menuActionIn = inputs.MenuAction;
if("_menuActionInDataFetchStatus" in inputs) {
this.variables._menuActionInDataFetchStatus = inputs._menuActionInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.Common.MenuIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "Swayyy.Common.MenuIcon.mvc$model", "Swayyy.Common.MenuIcon.mvc$controller", "Swayyy.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$SetMenuIcon", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SwayyyModel, SwayyyController, OutSystemsUIController, React, OSView, Swayyy_Common_MenuIcon_mvc_model, Swayyy_Common_MenuIcon_mvc_controller, SwayyyClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Common.MenuIcon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Swayyy_Common_MenuIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_Common_MenuIcon_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("MenuIcon.Style"), function () {
return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (SwayyyModel.staticEntities.menuAction.back))) ? ("") : (" back")));
}, function () {
return model.variables.menuActionIn;
}),
visible: ((model.variables.menuActionIn) !== (SwayyyModel.staticEntities.menuAction.hidden)),
_idProps: {
service: idService,
name: "MenuIcon"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onToggleMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Toggle the Menu",
role: "button",
tabIndex: "0",
"aria-haspopup": "true"
},
style: "menu-icon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onBack$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Back to previous screen",
role: "button",
tabIndex: "0"
},
style: "menu-back",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isRTLVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "ArrowReverse"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "angle-left",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "ArrowBack"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Swayyy.Common.MenuIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "OutSystemsUI.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.Common.MenuIcon.mvc$debugger", "OutSystemsUI.controller$SetMenuIcon", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SwayyyModel, SwayyyController, OutSystemsUIController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_Common_MenuIcon_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var checkIsRTLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkIsRTLVar = checkIsRTLVar;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:25L8HeGO10mE54lBuRq53A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.25L8HeGO10mE54lBuRq53A:7YXpnMtNQDK9H2t7sxHW3w", "Swayyy", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:930pRHbQmkqkgjMnxbsxZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:6_iQJnlasUCx2E0MtgvL_A", callContext.id);
// Execute Action: SetMenuIcon
OutSystemsUIController.default.setMenuIcon$Action(model.variables.menuActionIn, callContext);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:d5Q0kmrRc0KT8ebzN0agYQ", callContext.id);
// Execute Action: SetMenuIconListeners
OutSystemsUIController.default.setMenuIconListeners$Action(callContext);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:8b3EmbEB50GUKbTtMxAR9w", callContext.id);
// Execute Action: CheckIsRTL
checkIsRTLVar.value = OutSystemsUIController.default.isRTL$Action(callContext);

OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:P9sYZ7t8zE+Vs2IGYLScPA", callContext.id);
// IsRTL = CheckIsRTL.IsRTL
model.variables.isRTLVar = checkIsRTLVar.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:s4_TzujSYEyWfKfpquVC8A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:25L8HeGO10mE54lBuRq53A", callContext.id);
}

};
Controller.prototype._onToggleMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggleMenu");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:NbtEjNDM3Uugzv14Z0ozBQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.NbtEjNDM3Uugzv14Z0ozBQ:FT5aM4woFoJJDuf3YCA4pg", "Swayyy", "OnToggleMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:AwzWQMFjqU+vRHQnax8+Kw", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:a0Gb5jostE+WwxEkX50FFA", callContext.id);
// Execute Action: ToggleSideMenu
OutSystemsUIController.default.toggleSideMenu$Action(callContext);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:IawdC6m1lkCGenBYVz7KSg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:NbtEjNDM3Uugzv14Z0ozBQ", callContext.id);
}

};
Controller.prototype._onBack$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBack");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:6t_q5oS2GUqAe+scPrg8Pg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.6t_q5oS2GUqAe+scPrg8Pg:XspcHOi9b6PxAB8QkwUA9g", "Swayyy", "OnBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:j2TNZaqk1kSqRgowGeHooA", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:pIRKUz2qxE6HwsXpsbgicA", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:6t_q5oS2GUqAe+scPrg8Pg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onToggleMenu$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggleMenu$Action, callContext);

};
Controller.prototype.onBack$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBack$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:Lw516BdHU3WcOxH4dJ1UHw", "Swayyy", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:KDMvm7RSlEK8KPNGGaJdnw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw:w4xIIsutNVwQEiCx93N9bA", "Swayyy", "MenuIcon", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:KDMvm7RSlEK8KPNGGaJdnw", callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Parameters Changed");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return SwayyyController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, SwayyyLanguageResources);
});

define("Swayyy.Common.MenuIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8b3EmbEB50GUKbTtMxAR9w": {
getter: function (varBag, idService) {
return varBag.checkIsRTLVar.value;
}
},
"p3m_8GZgfkS6MgVq9tQTTw": {
getter: function (varBag, idService) {
return varBag.model.variables.isRTLVar;
},
dataType: OS.Types.Boolean
},
"DBVN2SdEqUK9vOajJKCjVA": {
getter: function (varBag, idService) {
return varBag.model.variables.menuActionIn;
},
dataType: OS.Types.Text
},
"pegExOLfS0WF48CX5qEo5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuIcon"));
})(varBag.model, idService);
}
},
"HQn2OsYrEkSLdd6hneWSAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowReverse"));
})(varBag.model, idService);
}
},
"88NA8XPCL0itLORLN8I8CQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowBack"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
