define("Swayyy.Common.UserInfo.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model"], function (OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;

var GetUserNameFromServerDataActRec = (function (_super) {
__extends(GetUserNameFromServerDataActRec, _super);
function GetUserNameFromServerDataActRec(defaults) {
_super.apply(this, arguments);
}
GetUserNameFromServerDataActRec.attributesToDeclare = function () {
return [
this.attr("UserName", "userNameOut", "UserName", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUserNameFromServerDataActRec.fromStructure = function (str) {
return new GetUserNameFromServerDataActRec(new GetUserNameFromServerDataActRec.RecordClass({
userNameOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetUserNameFromServerDataActRec.init();
return GetUserNameFromServerDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("GetUserNameFromServer", "getUserNameFromServerDataAct", "getUserNameFromServerDataAct", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUserNameFromServerDataActRec());
}, true, GetUserNameFromServerDataActRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
getUserNameFromServerDataAct: OS.DataTypes.ImmutableBase.getData(str)
}));
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
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.Common.UserInfo.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.Common.UserInfo.mvc$model", "Swayyy.Common.UserInfo.mvc$controller", "Swayyy.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_Common_UserInfo_mvc_model, Swayyy_Common_UserInfo_mvc_controller, SwayyyClientVariables, OSWidgets) {
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
        View.displayName = "Common.UserInfo";
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
                return Swayyy_Common_UserInfo_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_Common_UserInfo_mvc_controller;
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
style: "user-info",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 24px;"
},
gridProperties: {
width: "24px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Swayyy.User.png"),
style: "img-circle",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/Swayyy/UserDetail", {
UserId: OS.DataConversion.ServerDataConverter.to(OS.BuiltinFunctions.getUserId(), OS.Types.Integer)
}),
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: SwayyyClientVariables.getUsername(),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/UserInfo/Link OnClick");
return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-out",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s wcag-hide-text",
text: ["Log out"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
url: OS.Navigation.generateScreenURL("/Swayyy/Login", {}),
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-in",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Login"],
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Swayyy.Common.UserInfo.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.Common.UserInfo.mvc$debugger", "Swayyy.Common.UserInfo.mvc$controller.OnInitialize.GetUsernameJS"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_Common_UserInfo_mvc_Debugger, Swayyy_Common_UserInfo_mvc_controller_OnInitialize_GetUsernameJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
getUsername$Action: function () {
return controller.executeActionInsideJSNode(controller._getUsername$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "GetUsername");
}
};
this.dataFetchDependenciesOriginal = {
getUserNameFromServer$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getUserNameFromServer$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.doLogout$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("DoLogout", "screenservices/Swayyy/Common/UserInfo/ActionDoLogout", "2ZoR_fSc0ebl1Q+9myuSrg", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getUserNameFromServer$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:wItqMhDkVE+9c0CxfFlDTQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/DataActions.wItqMhDkVE+9c0CxfFlDTQ:3BPAoGYvCqpVE2B6WeJI9Q", "Swayyy", "GetUserNameFromServer", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Common/UserInfo/GetUserNameFromServer");
return controller.callDataAction("DataActionGetUserNameFromServer", "screenservices/Swayyy/Common/UserInfo/DataActionGetUserNameFromServer", "Fu_ofeWFbjl8T8sP4jQ2KQ", function (b) {
model.variables.getUserNameFromServerDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getUserNameFromServerDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserNameFromServerDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:wItqMhDkVE+9c0CxfFlDTQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getUserNameFromServer$DataActRefresh"];
// Client Actions
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:Ei5UANdME0iY34fopDZhqQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.Ei5UANdME0iY34fopDZhqQ:L53L5DSIbcmLmdWeGYZPCA", "Swayyy", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:XnMdAfMX0EOKQmJA89defQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:OAnSzzUm6UKdEqW8oMOJpA", callContext.id);
controller.safeExecuteJSNode(Swayyy_Common_UserInfo_mvc_controller_OnInitialize_GetUsernameJS, "GetUsername", "OnInitialize", null, function ($parameters) {
}, {
GetUsername: controller.clientActionProxies.getUsername$Action
}, {});
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:B4f5xT+pAka3HWRUT+9OdA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:Ei5UANdME0iY34fopDZhqQ", callContext.id);
}

};
Controller.prototype._getUsername$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetUsername");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:hZ4fDPeoh0aY5aYLviJYHQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.hZ4fDPeoh0aY5aYLviJYHQ:RwCuzw7+CuEQMcDZjBb9SQ", "Swayyy", "GetUsername", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:Gc8FN01ZcUWvRV5x46skvQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// No Username?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:yDWJfTWmYEaS5JsfOs1Iaw", callContext.id) && ((SwayyyClientVariables.getUsername() === "") && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:Vyh5Kje5r0+TVjOZM9VZCA", callContext.id);
// Refresh Query: GetUserNameFromServer
var result = controller.getUserNameFromServer$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:TL6U3UgmpkmzVjGijpFEkg", callContext.id);
// Username = GetUserNameFromServer.UserName
SwayyyClientVariables.setUsername(model.variables.getUserNameFromServerDataAct.userNameOut);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:mXG7Rs8Ym0esFs1pyM5cog", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:Tfh1nqD6ZUWRy1NTltUE0g", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:hZ4fDPeoh0aY5aYLviJYHQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:hZ4fDPeoh0aY5aYLviJYHQ", callContext.id);
throw ex;

});
};
Controller.prototype._clientLogout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ClientLogout");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:EmMvrH+KO0iPczkfh4gX4A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.EmMvrH+KO0iPczkfh4gX4A:nKBnBDkLwVDfHuWVT487dw", "Swayyy", "ClientLogout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:2g1uQoOGsU2TbpiXxislHA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:HyaaMUMwrkaRp1AjVZyRjA", callContext.id);
// Execute Action: DoLogout
model.flush();
return controller.doLogout$ServerAction(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:TJLTbJBk_kWbVAu0iKVMMw", callContext.id);
// Destination: /Swayyy/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/Swayyy/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:EmMvrH+KO0iPczkfh4gX4A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:EmMvrH+KO0iPczkfh4gX4A", callContext.id);
throw ex;

});
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.getUsername$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getUsername$Action, callContext);

};
Controller.prototype.clientLogout$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:Lw516BdHU3WcOxH4dJ1UHw", "Swayyy", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:yhLWz8AkSUKjfqi+bDHmhA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA:KUzn2wG6qYd5TZKDeoUD0g", "Swayyy", "UserInfo", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:yhLWz8AkSUKjfqi+bDHmhA", callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/UserInfo On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Swayyy.Common.UserInfo.mvc$controller.OnInitialize.GetUsernameJS", [], function () {
return function ($actions, $roles, $public) {
$actions.GetUsername();
};
});

define("Swayyy.Common.UserInfo.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OAnSzzUm6UKdEqW8oMOJpA": {
getter: function (varBag, idService) {
return varBag.getUsernameJSResult.value;
}
},
"wItqMhDkVE+9c0CxfFlDTQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getUserNameFromServerDataAct;
}
},
"Nqw1XgMPUky2Kc5M0JI4PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon3"));
})(varBag.model, idService);
}
},
"+Ye0LCXqVEuQq_xT9wnRpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon4"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
