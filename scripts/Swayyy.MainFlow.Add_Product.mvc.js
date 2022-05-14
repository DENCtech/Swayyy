define("Swayyy.MainFlow.Add_Product.mvc$model", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ProductsRecord", "Swayyy.model$UserRecordList", "Swayyy.model$ProductsRecordList"], function (OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var GetUsersAggrRec = (function (_super) {
__extends(GetUsersAggrRec, _super);
function GetUsersAggrRec(defaults) {
_super.apply(this, arguments);
}
GetUsersAggrRec.RecordListType = SwayyyModel.UserRecordList;
GetUsersAggrRec.init();
return GetUsersAggrRec;
})(OS.Model.AggregateRecord);
var GetProductByIdAggrRec = (function (_super) {
__extends(GetProductByIdAggrRec, _super);
function GetProductByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetProductByIdAggrRec.RecordListType = SwayyyModel.ProductsRecordList;
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
this.attr("GetUsers", "getUsersAggr", "getUsersAggr", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUsersAggrRec());
}, true, GetUsersAggrRec), 
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
return {
Form1: OS.Model.ValidationWidgetRecord,
Upload1: OS.Model.ValidationWidgetRecord,
Input_Name: OS.Model.ValidationWidgetRecord,
Input_Description: OS.Model.ValidationWidgetRecord,
Input_Price: OS.Model.ValidationWidgetRecord,
Dropdown1: OS.Model.ValidationWidgetRecord
};
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
return true;
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
define("Swayyy.MainFlow.Add_Product.mvc$view", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "react", "OutSystems/ReactView/Main", "Swayyy.MainFlow.Add_Product.mvc$model", "Swayyy.MainFlow.Add_Product.mvc$controller", "Swayyy.clientVariables", "Swayyy.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Swayyy.Common.Menu.mvc$view", "Swayyy.Common.BottomBar.mvc$view", "Swayyy.model$ProductsRecord", "Swayyy.model$UserRecordList", "Swayyy.model$ProductsRecordList"], function (OutSystems, SwayyyModel, SwayyyController, React, OSView, Swayyy_MainFlow_Add_Product_mvc_model, Swayyy_MainFlow_Add_Product_mvc_controller, SwayyyClientVariables, Swayyy_Common_Layout_mvc_view, OSWidgets, Swayyy_Common_Menu_mvc_view, Swayyy_Common_BottomBar_mvc_view) {
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
        View.displayName = "MainFlow.Add_Product";
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
                return Swayyy_MainFlow_Add_Product_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Swayyy_MainFlow_Add_Product_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Add_Product";
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
return ["Add Product"];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form card",
_idProps: {
service: idService,
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
targetWidget: "Upload1",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Upload, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
accept: /*Image*/ 0,
fileContent: model.createVariable(OS.Types.BinaryData, model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr, function (value) {
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr = value;
}),
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
style: "upload upload-image-withoverlay",
_idProps: {
service: idService,
name: "Upload1"
},
_widgetRecordProvider: widgetsRecordProvider,
fileContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "change-image",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "camera",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Change"))), React.createElement(OSWidgets.Container, {
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
mandatory: false,
targetWidget: "Input_Name",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Name"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr, function (value) {
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Name"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
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
mandatory: false,
targetWidget: "Input_Description",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Description"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr, function (value) {
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Description"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
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
mandatory: false,
targetWidget: "Input_Price",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Price"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Number*/ 2,
mandatory: false,
maxLength: 0,
style: "form-control",
variable: model.createVariable(OS.Types.Currency, model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr, function (value) {
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Price"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown1",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "User"), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
dropdownMode: /*Text*/ 0,
enabled: true,
labels: function (elem) {
return elem.userAttr.nameAttr;
},
list: model.variables.getUsersAggr.listOut,
mandatory: true,
style: "dropdown",
values: function (elem) {
return elem.userAttr.idAttr;
},
variable: model.createVariable(OS.Types.Integer, model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.userIdAttr, function (value) {
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.userIdAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown1"
},
_widgetRecordProvider: widgetsRecordProvider,
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUsersAggr.dataFetchStatusAttr),
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getProductByIdAggr.dataFetchStatusAttr),
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Form1"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Add_Product/Button OnClick");
return controller.saveOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Save/Update")))];
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
uuid: "25",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getUsersAggr.listOut), asPrimitiveValue(model.variables.getUsersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.userIdAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.priceAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.descriptionAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.nameAttr), asPrimitiveValue(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.imageAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("Swayyy.MainFlow.Add_Product.mvc$controller", ["OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.languageResources", "Swayyy.clientVariables", "Swayyy.MainFlow.Add_Product.mvc$debugger", "Swayyy.MainFlow.controller", "Swayyy.model$ProductsRecord", "Swayyy.model$UserRecordList", "Swayyy.model$ProductsRecordList"], function (OutSystems, SwayyyModel, SwayyyController, SwayyyLanguageResources, SwayyyClientVariables, Swayyy_MainFlow_Add_Product_mvc_Debugger, Swayyy_MainFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getUsers$AggrRefresh: 0,
getProductById$AggrRefresh: 0,
checkSellerRole$DataActRefresh: 1
};
this.dataFetchDependentsGraph = {
getUsers$AggrRefresh: ["checkSellerRole$DataActRefresh"],
getProductById$AggrRefresh: [],
checkSellerRole$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.createOrUpdateProducts$ServerAction = function (sourceIn, callContext) {
var controller = this.controller;
var inputs = {
Source: OS.DataConversion.ServerDataConverter.to(sourceIn, OS.Types.Record)
};
return controller.callServerAction("CreateOrUpdateProducts", "screenservices/Swayyy/MainFlow/Add_Product/ssCreateOrUpdateProducts", "SZ3FLdXTH1cauXW7aVm1jw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Swayyy.MainFlow.Add_Product$ssCreateOrUpdateProducts"))();
executeServerActionResult.idOut = OS.DataConversion.ServerDataConverter.from(outputs.Id, OS.Types.LongInteger);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Swayyy.MainFlow.Add_Product$ssCreateOrUpdateProducts", [{
name: "Id",
attrName: "idOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

// Aggregates and Data Actions
Controller.prototype.getUsers$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:ayCGQX202kKganGHvULBuw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.QUSkuyHGyUmkcq9KGTLtog/ScreenDataSets.ayCGQX202kKganGHvULBuw:vgX11au94u3ZFdLyzeGDHw", "Swayyy", "GetUsers", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Add_Product/GetUsers");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUsers", "screenservices/Swayyy/MainFlow/Add_Product/ScreenDataSetGetUsers", "mUoofpFAzLIon_VyizY2Hg", maxRecords, startIndex, function (b) {
model.variables.getUsersAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getUsersAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUsersAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:ayCGQX202kKganGHvULBuw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getProductById$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:gw3d4zHP3UOfzCjfJ_I1WA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.QUSkuyHGyUmkcq9KGTLtog/ScreenDataSets.gw3d4zHP3UOfzCjfJ_I1WA:WbixF+_ESAubYl9J2IX2bA", "Swayyy", "GetProductById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Add_Product/GetProductById");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetProductById", "screenservices/Swayyy/MainFlow/Add_Product/ScreenDataSetGetProductById", "Z8xiL+oEAGeylz8_0ZycHQ", maxRecords, startIndex, function (b) {
model.variables.getProductByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getProductByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getProductByIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:gw3d4zHP3UOfzCjfJ_I1WA", callContext.id);
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

OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:3t1S2JkMY0uw6Oc9jInuxg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.QUSkuyHGyUmkcq9KGTLtog/DataActions.3t1S2JkMY0uw6Oc9jInuxg:WskJ+9Ej0xOErs6QEUSzew", "Swayyy", "CheckSellerRole", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Add_Product/CheckSellerRole");
return controller.callDataAction("DataActionCheckSellerRole", "screenservices/Swayyy/MainFlow/Add_Product/DataActionCheckSellerRole", "yZ6olEUl5tDJssoSLpYcqg", function (b) {
model.variables.checkSellerRoleDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.checkSellerRoleDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.checkSellerRoleDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:3t1S2JkMY0uw6Oc9jInuxg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getUsers$AggrRefresh", "getProductById$AggrRefresh", "checkSellerRole$DataActRefresh"];
// Client Actions
Controller.prototype._saveOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SaveOnClick");
callContext = controller.callContext(callContext);
var createOrUpdateProductsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.createOrUpdateProductsVar = createOrUpdateProductsVar;
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:33JXMd21B062T3jmSvWb+w:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.QUSkuyHGyUmkcq9KGTLtog/ClientActions.33JXMd21B062T3jmSvWb+w:Y7KJWuBVMYfmDvTlpbzM+w", "Swayyy", "SaveOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:1FQtp2MSEEO5f8loQopFjw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:N4EMZJmy+0abpQbn4TyqbA", callContext.id) && model.widgets.get(idService.getId("Form1")).validAttr)) {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:efoXs_gkH0SnJfLJJD9e9g", callContext.id);
// GetProductById.List.Current.Products.Creation_Date = CurrDateTime
model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext).productsAttr.creation_DateAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:e1dYaptsvEOewCPx0Oj_zQ", callContext.id);
// Execute Action: CreateOrUpdateProducts
model.flush();
return controller.createOrUpdateProducts$ServerAction(model.variables.getProductByIdAggr.listOut.getCurrent(callContext.iterationContext), callContext).then(function (value) {
createOrUpdateProductsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:j9Cxv+gfE02jysbMa+nv5A", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Product Created", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:oGiQV0UT_kqazeQhJjNzhA", callContext.id);
// Destination: /Swayyy/HomeScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/Swayyy/HomeScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:OHCD9Wcs006jFPw8J2dNTA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:33JXMd21B062T3jmSvWb+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:33JXMd21B062T3jmSvWb+w", callContext.id);
throw ex;

});
};

Controller.prototype.saveOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:zGqsHpoNk1Hw0qVOEDX9WA", "Swayyy", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:QUSkuyHGyUmkcq9KGTLtog:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.QUSkuyHGyUmkcq9KGTLtog:BNfRpaYcV_lNSAhpVkS3Dw", "Swayyy", "Add_Product", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:QUSkuyHGyUmkcq9KGTLtog", callContext.id);
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

define("Swayyy.MainFlow.Add_Product.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"e1dYaptsvEOewCPx0Oj_zQ": {
getter: function (varBag, idService) {
return varBag.createOrUpdateProductsVar.value;
}
},
"Y5MpOW01B0m53fXRnspiOA": {
getter: function (varBag, idService) {
return varBag.model.variables.productsIdIn;
},
dataType: OS.Types.LongInteger
},
"3t1S2JkMY0uw6Oc9jInuxg": {
getter: function (varBag, idService) {
return varBag.model.variables.checkSellerRoleDataAct;
}
},
"ayCGQX202kKganGHvULBuw": {
getter: function (varBag, idService) {
return varBag.model.variables.getUsersAggr;
}
},
"gw3d4zHP3UOfzCjfJ_I1WA": {
getter: function (varBag, idService) {
return varBag.model.variables.getProductByIdAggr;
}
},
"NFoRbJ+FN0Sfrdv5Gxkvdg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"4ZFhnN3m4EKX2nD+wuuuZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"TchLsKDlD0av9URJ57OsHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"l0Wx6Qmuz02t6zMp97mNWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"adxoH1fR1kqICAftm0viLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"ABqnZ3tQCEK_XBnWwKQc+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ageIV+5NSU29PihfFC_+yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form1"));
})(varBag.model, idService);
}
},
"n49xywY2y0utJBUqBBt4xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Upload1"));
})(varBag.model, idService);
}
},
"fI2foawMnU2yd0td_iA78Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Name"));
})(varBag.model, idService);
}
},
"mM434w_cQEq8nM5PggmjGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Description"));
})(varBag.model, idService);
}
},
"KN2FwLPLAkKOSGbWwnxEXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Price"));
})(varBag.model, idService);
}
},
"G6IyE80ANUKWUaI5whwx7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown1"));
})(varBag.model, idService);
}
},
"ujOZ3EmK6UqQ06Fxa5E0Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
