define("Swayyy.MainFlow.UserDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.Common.Layout.mvc$model", "Swayyy.Common.Menu.mvc$model", "OutSystemsUI.Content.UserAvatar.mvc$model", "Swayyy.Common.BottomBar.mvc$model", "Swayyy.model$UserRecordList"], function (OutSystems, SwayyyModel, Swayyy_Common_Layout_mvcModel, Swayyy_Common_Menu_mvcModel, OutSystemsUI_Content_UserAvatar_mvcModel, Swayyy_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;
var GetUserByIdAggrRec = (function (_super) {
__extends(GetUserByIdAggrRec, _super);
function GetUserByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetUserByIdAggrRec.RecordListType = SwayyyModel.UserRecordList;
GetUserByIdAggrRec.init();
return GetUserByIdAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdIn", "UserId", true, false, OS.Types.Integer, function () {
return 0;
}, false), 
this.attr("_userIdInDataFetchStatus", "_userIdInDataFetchStatus", "_userIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetUserById", "getUserByIdAggr", "getUserByIdAggr", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUserByIdAggrRec());
}, true, GetUserByIdAggrRec)
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (((Swayyy_Common_Layout_mvcModel.hasValidationWidgets || Swayyy_Common_Menu_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_UserAvatar_mvcModel.hasValidationWidgets) || Swayyy_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("UserId" in inputs) {
this.variables.userIdIn = OS.DataConversion.ServerDataConverter.from(inputs.UserId, OS.Types.Integer);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.MainFlow.UserDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.MainFlow.UserDetail.mvc$model", "Swayyy.MainFlow.UserDetail.mvc$controller", "Swayyy.clientVariables", "Swayyy.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Swayyy.Common.Menu.mvc$view", "OutSystemsUI.Content.UserAvatar.mvc$view", "Swayyy.Common.BottomBar.mvc$view", "Swayyy.model$UserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_MainFlow_UserDetail_mvc_model, Swayyy_MainFlow_UserDetail_mvc_controller, SwayyyClientVariables, Swayyy_Common_Layout_mvc_view, OSWidgets, Swayyy_Common_Menu_mvc_view, OutSystemsUI_Content_UserAvatar_mvc_view, Swayyy_Common_BottomBar_mvc_view) {
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
        View.displayName = "MainFlow.UserDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Swayyy.Swayyy.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Swayyy_Common_Layout_mvc_view, Swayyy_Common_Menu_mvc_view, OutSystemsUI_Content_UserAvatar_mvc_view, Swayyy_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Swayyy_MainFlow_UserDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_MainFlow_UserDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "UserDetail";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Swayyy_Common_Layout_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
navigation: new PlaceholderContent(function () {
return [React.createElement(Swayyy_Common_Menu_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/Swayyy/HomeScreen", {}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "arrow-left",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
title: new PlaceholderContent(function () {
return ["User Detail"];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 20px; text-align: left;"
},
style: "card",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Content_UserAvatar_mvc_view, {
inputs: {
Name: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr,
_nameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr),
Shape: SwayyyModel.staticEntities.shape.rounded,
IsLight: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.is_ActiveAttr,
_isLightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr),
Size: SwayyyModel.staticEntities.size.medium
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "6",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Name"), React.createElement(OSWidgets.Expression, {
value: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Username"), React.createElement(OSWidgets.Expression, {
value: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.usernameAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Email"), React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL(("mailto:" + model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr), {}),
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Mobile Phone"), React.createElement(OSWidgets.Expression, {
value: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.mobilePhoneAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(Swayyy_Common_BottomBar_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "21",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getUserByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.mobilePhoneAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.usernameAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.is_ActiveAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("Swayyy.MainFlow.UserDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.MainFlow.UserDetail.mvc$debugger", "Swayyy.MainFlow.controller", "Swayyy.model$UserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_MainFlow_UserDetail_mvc_Debugger, Swayyy_MainFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getUserById$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getUserById$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getUserById$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:BN4BotL5JEafvttYtF8tVg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.G+LxBHoyxkqgGuF8mFJcVw/ScreenDataSets.BN4BotL5JEafvttYtF8tVg:v4jsMIxrHIJkP4Te7Wg9fg", "Swayyy", "GetUserById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/UserDetail/GetUserById");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserById", "screenservices/Swayyy/MainFlow/UserDetail/ScreenDataSetGetUserById", "noz38S1aw9OxpaU3f0dX1A", maxRecords, startIndex, function (b) {
model.variables.getUserByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getUserByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:BN4BotL5JEafvttYtF8tVg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getUserById$AggrRefresh"];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:izmCEqMdsE53zrA5nVQnfA", "Swayyy", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:G+LxBHoyxkqgGuF8mFJcVw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.G+LxBHoyxkqgGuF8mFJcVw:Kux47nhJdXxou5q7nJbRlQ", "Swayyy", "UserDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:G+LxBHoyxkqgGuF8mFJcVw", callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return Swayyy_MainFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return SwayyyController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, SwayyyLanguageResources);
});

define("Swayyy.MainFlow.UserDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qYAXf5MHvUev5Ghj_eRyZA": {
getter: function (varBag, idService) {
return varBag.model.variables.userIdIn;
},
dataType: OS.Types.Integer
},
"BN4BotL5JEafvttYtF8tVg": {
getter: function (varBag, idService) {
return varBag.model.variables.getUserByIdAggr;
}
},
"266mv4SoIkOgqskvMOqLcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"iNFc75XSWUCTQQ+DcU3+0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"yGF+Vq4UfEub_c8nIP1IiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"corElsMETUuiKZqI010r5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"WzvcT_Ky3U+bWOPo6I3EXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"b6QrghCLf02TncWTEgxTWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"E8kJV8NlnUOWjTMmh2N_Yw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
