define("Swayyy.MainFlow.HomeScreen.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.Common.Layout.mvc$model", "Swayyy.Common.Menu.mvc$model", "Swayyy.Common.MenuIcon.mvc$model", "Swayyy.Common.BottomBar.mvc$model", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, Swayyy_Common_Layout_mvcModel, Swayyy_Common_Menu_mvcModel, Swayyy_Common_MenuIcon_mvcModel, Swayyy_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;
var GetProductsAggrRec = (function (_super) {
__extends(GetProductsAggrRec, _super);
function GetProductsAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductsAggrRec.RecordListType = SwayyyModel.ProductsUserRecordList;
GetProductsAggrRec.init();
return GetProductsAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("GetProducts", "getProductsAggr", "getProductsAggr", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetProductsAggrRec());
}, true, GetProductsAggrRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
getProductsAggr: OS.DataTypes.ImmutableBase.getData(str)
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (((Swayyy_Common_Layout_mvcModel.hasValidationWidgets || Swayyy_Common_Menu_mvcModel.hasValidationWidgets) || Swayyy_Common_MenuIcon_mvcModel.hasValidationWidgets) || Swayyy_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Swayyy.MainFlow.HomeScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.MainFlow.HomeScreen.mvc$model", "Swayyy.MainFlow.HomeScreen.mvc$controller", "Swayyy.clientVariables", "Swayyy.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Swayyy.Common.Menu.mvc$view", "Swayyy.Common.MenuIcon.mvc$view", "Swayyy.Common.BottomBar.mvc$view", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_MainFlow_HomeScreen_mvc_model, Swayyy_MainFlow_HomeScreen_mvc_controller, SwayyyClientVariables, Swayyy_Common_Layout_mvc_view, OSWidgets, Swayyy_Common_Menu_mvc_view, Swayyy_Common_MenuIcon_mvc_view, Swayyy_Common_BottomBar_mvc_view) {
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
        View.displayName = "MainFlow.HomeScreen";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Swayyy.Swayyy.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Swayyy_Common_Layout_mvc_view, Swayyy_Common_Menu_mvc_view, Swayyy_Common_MenuIcon_mvc_view, Swayyy_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Swayyy_MainFlow_HomeScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_MainFlow_HomeScreen_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "HomeScreen";
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
return [React.createElement(Swayyy_Common_MenuIcon_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return ["Home"];
}),
headerRight: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/Swayyy/Add_Product", {}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "plus",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getProductsAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
style: "font-size: 16px;"
},
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/Swayyy/ProductDetail", {
ProductsId: OS.DataConversion.ServerDataConverter.to(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.idAttr, OS.Types.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
style: "image-container",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr,
style: "img-circle",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width8 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "bold",
value: model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.getCachedValue(idService.getId("Ndo638lHC0GoDSuWeHrywg.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr, "₺", 2, ".", ",");
}, function () {
return model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/Swayyy/UserDetail", {
UserId: OS.DataConversion.ServerDataConverter.to(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.userIdAttr, OS.Types.Integer)
}),
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "bold",
value: model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductsAggr.dataFetchStatusAttr)
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.getProductsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getProductsAggr.dataFetchStatusAttr)]
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
uuid: "15",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getProductsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductsAggr.listOut)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("Swayyy.MainFlow.HomeScreen.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.MainFlow.HomeScreen.mvc$debugger", "Swayyy.MainFlow.controller", "Swayyy.model$ProductsUserRecordList"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_MainFlow_HomeScreen_mvc_Debugger, Swayyy_MainFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getProducts$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getProducts$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getProducts$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:Ekdw2daugUWroFDNut+nCA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Cytb7e6hNkawrRw1zka+iA/ScreenDataSets.Ekdw2daugUWroFDNut+nCA:+UjRC3h0WXo37P+lUSbh7w", "Swayyy", "GetProducts", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/HomeScreen/GetProducts");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetProducts", "screenservices/Swayyy/MainFlow/HomeScreen/ScreenDataSetGetProducts", "HVijLM5LD3obLjR+oZxwKg", maxRecords, startIndex, function (b) {
model.variables.getProductsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductsAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:Ekdw2daugUWroFDNut+nCA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getProducts$AggrRefresh"];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:zGqsHpoNk1Hw0qVOEDX9WA", "Swayyy", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:Cytb7e6hNkawrRw1zka+iA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Cytb7e6hNkawrRw1zka+iA:mOsaeldvHXUYp6wn_8L8uA", "Swayyy", "HomeScreen", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:Cytb7e6hNkawrRw1zka+iA", callContext.id);
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

define("Swayyy.MainFlow.HomeScreen.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Ekdw2daugUWroFDNut+nCA": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductsAggr;
}
},
"0eTUCtVrTUC+G+v3_zKIpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"ki9YCGVqK0ah2iuiHNWx8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"+JyDY5VQ10O303Z6fnzeBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"g7HKGI8mFEKuuHnzQkw6jQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"YWY3ZpF270ScShG1VFPZgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"mi9VUnttrkWpDvHBuVKpHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"dlLlyF+wW0yKhdsXR8Koig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem1"));
})(varBag.model, idService);
}
},
"j46MIMQaTUCtE8jIPUXOqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
