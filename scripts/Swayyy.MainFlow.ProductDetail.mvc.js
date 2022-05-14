define("Swayyy.MainFlow.ProductDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.Common.Layout.mvc$model", "Swayyy.Common.Menu.mvc$model", "Swayyy.Common.BottomBar.mvc$model", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, Swayyy_Common_Layout_mvcModel, Swayyy_Common_Menu_mvcModel, Swayyy_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;
var GetProductByIdAggrRec = (function (_super) {
__extends(GetProductByIdAggrRec, _super);
function GetProductByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductByIdAggrRec.RecordListType = SwayyyModel.ProductsUserRecordList;
GetProductByIdAggrRec.init();
return GetProductByIdAggrRec;
})(OS.Model.AggregateRecord);

var CheckSellerRoleDataActRec = (function (_super) {
__extends(CheckSellerRoleDataActRec, _super);
function CheckSellerRoleDataActRec(defaults) {
_super.apply(this, arguments);
}
CheckSellerRoleDataActRec.attributesToDeclare = function () {
return [
this.attr("IsVisible", "isVisibleOut", "IsVisible", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CheckSellerRoleDataActRec.fromStructure = function (str) {
return new CheckSellerRoleDataActRec(new CheckSellerRoleDataActRec.RecordClass({
isVisibleOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CheckSellerRoleDataActRec.init();
return CheckSellerRoleDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ProductsId", "productsIdIn", "ProductsId", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_productsIdInDataFetchStatus", "_productsIdInDataFetchStatus", "_productsIdInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetProductById", "getProductByIdAggr", "getProductByIdAggr", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductByIdAggrRec());
}, true, GetProductByIdAggrRec), 
this.attr("CheckSellerRole", "checkSellerRoleDataAct", "checkSellerRoleDataAct", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CheckSellerRoleDataActRec());
}, true, CheckSellerRoleDataActRec)
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
Model._hasValidationWidgetsValue = ((Swayyy_Common_Layout_mvcModel.hasValidationWidgets || Swayyy_Common_Menu_mvcModel.hasValidationWidgets) || Swayyy_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ProductsId" in inputs) {
this.variables.productsIdIn = OS.DataConversion.ServerDataConverter.from(inputs.ProductsId, OS.Types.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.MainFlow.ProductDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.MainFlow.ProductDetail.mvc$model", "Swayyy.MainFlow.ProductDetail.mvc$controller", "Swayyy.clientVariables", "Swayyy.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Swayyy.Common.Menu.mvc$view", "Swayyy.Common.BottomBar.mvc$view", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_MainFlow_ProductDetail_mvc_model, Swayyy_MainFlow_ProductDetail_mvc_controller, SwayyyClientVariables, Swayyy_Common_Layout_mvc_view, OSWidgets, Swayyy_Common_Menu_mvc_view, Swayyy_Common_BottomBar_mvc_view) {
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
        View.displayName = "MainFlow.ProductDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Swayyy.Swayyy.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Swayyy_Common_Layout_mvc_view, Swayyy_Common_Menu_mvc_view, Swayyy_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Swayyy_MainFlow_ProductDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_MainFlow_ProductDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ProductDetail";
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
return ["Product Detail"];
}),
headerRight: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/Swayyy/Add_Product", {}),
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 18px; text-align: left;"
},
style: "card",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
gridProperties: {
classes: "ThemeGrid_Width4"
},
style: "image-container",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Name"), React.createElement(OSWidgets.Expression, {
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Description"), React.createElement(OSWidgets.Expression, {
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Price"), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("V7nub22P1EOYe7LnB4vQ8Q.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr, "₺", 2, ".", ",");
}, function () {
return model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
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
}, "Created By"), React.createElement(OSWidgets.Expression, {
value: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}))), $if(model.variables.checkSellerRoleDataAct.isVisibleOut, false, this, function () {
return [React.createElement(OSWidgets.Container, {
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
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "margin-top: 10px;"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/ProductDetail/Button OnClick");
return controller.deleteOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Delete"), React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
isDefault: false,
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/Swayyy/Add_Product", {
ProductsId: OS.DataConversion.ServerDataConverter.to(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.idAttr, OS.Types.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Edit"))];
}, function () {
return [];
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
uuid: "23",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.checkSellerRoleDataAct.isVisibleOut), asPrimitiveValue(model.variables.checkSellerRoleDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("Swayyy.MainFlow.ProductDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.MainFlow.ProductDetail.mvc$debugger", "Swayyy.MainFlow.controller", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_MainFlow_ProductDetail_mvc_Debugger, Swayyy_MainFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getProductById$AggrRefresh: 0,
checkSellerRole$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getProductById$AggrRefresh: [],
checkSellerRole$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.deleteProducts$ServerAction = function (idIn, callContext) {
var controller = this.controller;
var inputs = {
Id: OS.DataConversion.ServerDataConverter.to(idIn, OS.Types.LongInteger)
};
return controller.callServerAction("DeleteProducts", "screenservices/Swayyy/MainFlow/ProductDetail/ssDeleteProducts", "oAgfi9IR1bz4WaKVsbDB+w", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getProductById$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:vFkGPW_H0kSo9EwmBAatvw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zrQjgV2QhkO+UvzR00bmHg/ScreenDataSets.vFkGPW_H0kSo9EwmBAatvw:IXZqWl8Y+X0mYcRJ2gRrHA", "Swayyy", "GetProductById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/ProductDetail/GetProductById");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetProductById", "screenservices/Swayyy/MainFlow/ProductDetail/ScreenDataSetGetProductById", "AitMYbSBeN9DwZjUpWAHjA", maxRecords, startIndex, function (b) {
model.variables.getProductByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:vFkGPW_H0kSo9EwmBAatvw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.checkSellerRole$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:9phgVsA1+E28ndyCvXmJPw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zrQjgV2QhkO+UvzR00bmHg/DataActions.9phgVsA1+E28ndyCvXmJPw:Zrd7qhv1kme6t5_ms4jBng", "Swayyy", "CheckSellerRole", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/ProductDetail/CheckSellerRole");
return controller.callDataAction("DataActionCheckSellerRole", "screenservices/Swayyy/MainFlow/ProductDetail/DataActionCheckSellerRole", "yZ6olEUl5tDJssoSLpYcqg", function (b) {
model.variables.checkSellerRoleDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.checkSellerRoleDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.checkSellerRoleDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:9phgVsA1+E28ndyCvXmJPw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getProductById$AggrRefresh", "checkSellerRole$DataActRefresh"];
// Client Actions
Controller.prototype._deleteOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeleteOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:fRMQpV9vjk6bt8xO7cu9sw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zrQjgV2QhkO+UvzR00bmHg/ClientActions.fRMQpV9vjk6bt8xO7cu9sw:TrhYbiYFfMgjYku5NwK8Ig", "Swayyy", "DeleteOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:n1kp1xd4mEW+75gHJgAVew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:INF50Fw0wEOr13uMEtgYmA", callContext.id);
// Execute Action: DeleteProducts
model.flush();
return controller.deleteProducts$ServerAction(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.idAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:6xtH2bz0P0GPD4oKE+jsLw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Product deleted", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:YM927rADyUuxxDVKVoxzVw", callContext.id);
// Destination: /Swayyy/HomeScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/Swayyy/HomeScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:fRMQpV9vjk6bt8xO7cu9sw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:fRMQpV9vjk6bt8xO7cu9sw", callContext.id);
throw ex;

});
};

Controller.prototype.deleteOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deleteOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:zGqsHpoNk1Hw0qVOEDX9WA", "Swayyy", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:zrQjgV2QhkO+UvzR00bmHg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.zrQjgV2QhkO+UvzR00bmHg:XDG3407GXELsVF2lVbAH4g", "Swayyy", "ProductDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:zrQjgV2QhkO+UvzR00bmHg", callContext.id);
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

define("Swayyy.MainFlow.ProductDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EXNh_MCwEEWYpHE27vF_Cg": {
getter: function (varBag, idService) {
return varBag.model.variables.productsIdIn;
},
dataType: OS.Types.LongInteger
},
"9phgVsA1+E28ndyCvXmJPw": {
getter: function (varBag, idService) {
return varBag.model.variables.checkSellerRoleDataAct;
}
},
"vFkGPW_H0kSo9EwmBAatvw": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByIdAggr;
}
},
"mp_gUjIf40qLrngzme1kCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"k4KtK1kTdkC3pah0wZ_qGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"8h0LEQLLcUGJhvqxB6NdKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"sEyzH_KNik+ZGZvo1wdXIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"4O1484kHa0iNzKuCh86HzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"op2cGwEaF0SXX_f62O1AkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"7Iew6GfkP0W6RX0RThyB6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
