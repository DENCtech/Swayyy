define("Swayyy.Common.ApplicationTitle.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model"], function (OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.Common.ApplicationTitle.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.Common.ApplicationTitle.mvc$model", "Swayyy.Common.ApplicationTitle.mvc$controller", "Swayyy.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_Common_ApplicationTitle_mvc_model, Swayyy_Common_ApplicationTitle_mvc_controller, SwayyyClientVariables, OSWidgets) {
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
        View.displayName = "Common.ApplicationTitle";
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
                return Swayyy_Common_ApplicationTitle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_Common_ApplicationTitle_mvc_controller;
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
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ApplicationTitle/ApplicationTitleWrapper onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyPress: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ApplicationTitle/ApplicationTitleWrapper onkeypress");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
role: "button",
tabIndex: "0"
},
style: "application-name display-flex align-items-center full-height",
visible: true,
_idProps: {
service: idService,
name: "ApplicationTitleWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 32px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Swayyy.Logo.png"),
style: "app-logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "AppLogo"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "text-capitalize font-bold ",
value: model.getCachedValue(idService.getId("Swayyy.Value"), function () {
return OS.BuiltinFunctions.getEntryEspaceName();
}),
_idProps: {
service: idService,
name: "Swayyy"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Swayyy.Common.ApplicationTitle.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.Common.ApplicationTitle.mvc$debugger"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_Common_ApplicationTitle_mvc_Debugger) {
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
Controller.prototype._onClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:nlP9FhmEg0GWREq87dSLKg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.LitHYJcTmUWxRufKja0Gsw/ClientActions.nlP9FhmEg0GWREq87dSLKg:ypY5jtaouE_0XY5j3lFRnQ", "Swayyy", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:TkDxsj7PwkK6_TjJRNmaXw", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:3MLKEcOWeUmjb38ZOZPoZw", callContext.id);
// Destination: /Swayyy/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:nlP9FhmEg0GWREq87dSLKg", callContext.id);
}

};

Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:Lw516BdHU3WcOxH4dJ1UHw", "Swayyy", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:LitHYJcTmUWxRufKja0Gsw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.LitHYJcTmUWxRufKja0Gsw:BosR4AEVfr1D8Ij9diURxw", "Swayyy", "ApplicationTitle", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:LitHYJcTmUWxRufKja0Gsw", callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
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

define("Swayyy.Common.ApplicationTitle.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NW2ZDVj840Sjj_Oorbzbsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ApplicationTitleWrapper"));
})(varBag.model, idService);
}
},
"XJATkoRO5U+_9MXvXRuFtA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AppLogo"));
})(varBag.model, idService);
}
},
"wBXN+ZHEQ0mwA4Zlk4P0Vw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Swayyy"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
