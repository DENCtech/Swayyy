define("OutSystemsUI.Content.UserAvatar.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Name", "nameIn", "Name", true, false, OS.Types.Text, function () {
return "Jonh Doe";
}, false), 
this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Image", "imageIn", "Image", true, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, false), 
this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Color", "colorIn", "Color", true, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.color.primary;
}, false), 
this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Size", "sizeIn", "Size", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Shape", "shapeIn", "Shape", true, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, false), 
this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsLight", "isLightIn", "IsLight", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("Name" in inputs) {
this.variables.nameIn = inputs.Name;
if("_nameInDataFetchStatus" in inputs) {
this.variables._nameInDataFetchStatus = inputs._nameInDataFetchStatus;
}

}

if("Image" in inputs) {
this.variables.imageIn = inputs.Image;
if("_imageInDataFetchStatus" in inputs) {
this.variables._imageInDataFetchStatus = inputs._imageInDataFetchStatus;
}

}

if("Color" in inputs) {
this.variables.colorIn = inputs.Color;
if("_colorInDataFetchStatus" in inputs) {
this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
}

}

if("Size" in inputs) {
this.variables.sizeIn = inputs.Size;
if("_sizeInDataFetchStatus" in inputs) {
this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
}

}

if("Shape" in inputs) {
this.variables.shapeIn = inputs.Shape;
if("_shapeInDataFetchStatus" in inputs) {
this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
}

}

if("IsLight" in inputs) {
this.variables.isLightIn = inputs.IsLight;
if("_isLightInDataFetchStatus" in inputs) {
this.variables._isLightInDataFetchStatus = inputs._isLightInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUI.Content.UserAvatar.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.UserAvatar.mvc$model", "OutSystemsUI.Content.UserAvatar.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_UserAvatar_mvc_model, OutSystemsUI_Content_UserAvatar_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.UserAvatar";
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
                return OutSystemsUI_Content_UserAvatar_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Content_UserAvatar_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(OS.DataTypes.areBinaryNulls(model.variables.imageIn, OS.BuiltinFunctions.nullBinary()), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-label": model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.aria-label"), function () {
return ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1", "user initials, ") + OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1)) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
}, function () {
return model.variables.nameIn;
})
},
style: model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.Style"), function () {
return ((((((("avatar " + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? ((((((" " + "background-") + model.variables.colorIn) + "-lightest text-") + model.variables.colorIn) + "-darker")) : (((" " + "background-") + model.variables.colorIn)))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.sizeIn;
}, function () {
return model.variables.shapeIn;
}, function () {
return model.variables.isLightIn;
}, function () {
return model.variables.colorIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.getCachedValue(idService.getId("+D_RQ3IXnEqBKRHWtTlI+Q.Value"), function () {
return (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
}, function () {
return model.variables.nameIn;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
title: model.variables.nameIn
},
imageContent: model.variables.imageIn,
style: model.getCachedValue(idService.getId("e9VXyGkMykejiuHggtOyPw.Style"), function () {
return ((("avatar" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " border-radius-") + model.variables.shapeIn);
}, function () {
return model.variables.sizeIn;
}, function () {
return model.variables.shapeIn;
}),
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus)
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Content.UserAvatar.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources", "OutSystemsUI.Content.UserAvatar.mvc$debugger"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources, OutSystemsUI_Content_UserAvatar_mvc_Debugger) {
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
Controller.prototype.translationResources = OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zlrCj9mqOE6AXYiC19kWWg:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.zlrCj9mqOE6AXYiC19kWWg:I4Rq+sZlaABqo6L6HEPRVw", "OutSystemsUI", "UserAvatar", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zlrCj9mqOE6AXYiC19kWWg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
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
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Content.UserAvatar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8gCWeGIcXEmB_EByBvONJw": {
getter: function (varBag, idService) {
return varBag.model.variables.nameIn;
},
dataType: OS.Types.Text
},
"EG3uCThYdU6jc9kb7ASuXg": {
getter: function (varBag, idService) {
return varBag.model.variables.imageIn;
},
dataType: OS.Types.BinaryData
},
"aKpKSlnczU6IjoaRFhUs7w": {
getter: function (varBag, idService) {
return varBag.model.variables.colorIn;
},
dataType: OS.Types.Text
},
"ae3t7TPEgEufWvSGP3xlog": {
getter: function (varBag, idService) {
return varBag.model.variables.sizeIn;
},
dataType: OS.Types.Text
},
"4fNsuUtYBki1ku3B0r9kUg": {
getter: function (varBag, idService) {
return varBag.model.variables.shapeIn;
},
dataType: OS.Types.Text
},
"_FlGnUSvC0+c+y_C_s7MVw": {
getter: function (varBag, idService) {
return varBag.model.variables.isLightIn;
},
dataType: OS.Types.Boolean
},
"M6s+0TH6l0ukEGSSeMbhIQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources", ["exports", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt"], function (exports, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt) {
return {
"fr-CA": {
"translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt,
"isRTL": false
}
};
});
define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", [], function () {
return {
"ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l\'utilisateur, "
};
});
define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt", [], function () {
return {
"ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
};
});
