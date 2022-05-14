define("OutSystemsUI.controller$AccordionChangeMultipleItems", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionChangeMultipleItems.ChangeIsExpandedJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionChangeMultipleItems_ChangeIsExpandedJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionChangeMultipleItems$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionChangeMultipleItems$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:QLwPgVORuEao+V5ZhQdv3Q:/ClientActionFlows.QLwPgVORuEao+V5ZhQdv3Q:EJ107qDCrJLF2NbdQsN8cA", "OutSystemsUI", "AccordionChangeMultipleItems", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hKyb9rvUIk6oRxcfxIeb6Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+boPpVEvaUW3yOzdXSm0KQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionChangeMultipleItems_ChangeIsExpandedJS, "ChangeIsExpanded", "AccordionChangeMultipleItems", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("MultipleItems", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Tm3pHzAo_Ua0O31eT0h3SA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:QLwPgVORuEao+V5ZhQdv3Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionChangeMultipleItems$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionChangeMultipleItems$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionChangeMultipleItems$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionChangeMultipleItems.ChangeIsExpandedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionChangeProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionChangeProperty.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionChangeProperty_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionChangeProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:G+hFZj2Ed0O2okEfIlMFWg:/ClientActionFlows.G+hFZj2Ed0O2okEfIlMFWg:DnmWMaFLsr4v6bmAw28Vkg", "OutSystemsUI", "AccordionChangeProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aWgkLuLdDUKbLjqoYFfs6Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gneVsr_LkkqFxNGVOp0iGg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionChangeProperty_ChangePropertyJS, "ChangeProperty", "AccordionChangeProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4jjMRhWrA0SM7b+uaYDzKw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:G+hFZj2Ed0O2okEfIlMFWg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionChangeProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionChangeProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionChangeProperty.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionCollapseAll", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionCollapseAll.CollapseAllJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionCollapseAll_CollapseAllJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionCollapseAll$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionCollapseAll$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:HzPWSLt18E+Q+ENDPk0IVQ:/ClientActionFlows.HzPWSLt18E+Q+ENDPk0IVQ:ewFT_LmjgSzXvVmwZdxwDA", "OutSystemsUI", "AccordionCollapseAll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bQMaKq5lhUWumkrNu2pRyg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZeATaWNcTkeTDOl1XJYRQg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionCollapseAll_CollapseAllJS, "CollapseAll", "AccordionCollapseAll", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+fKZw_ZxCU+69_VqjNLqBw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:HzPWSLt18E+Q+ENDPk0IVQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionCollapseAll$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionCollapseAll$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionCollapseAll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionCollapseAll.CollapseAllJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.CollapseAllItems($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionCreate.CreateJS", "OutSystemsUI.model$Accordion_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yX+vEd1pVkW9OzpKwNqD5Q:/ClientActionFlows.yX+vEd1pVkW9OzpKwNqD5Q:4OJMfwBMaXWfWL+QI2XtIA", "OutSystemsUI", "AccordionCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KPbPs1IHvkWnzGzbl3d6Ww", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q4_6qs75x0+yTwgcB30WKw", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:f3wgICMYSkGH1_To9ANWkw", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionCreate_CreateJS, "Create", "AccordionCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+PSb1W_3vkCl2ynTougb9Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yX+vEd1pVkW9OzpKwNqD5Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.Accordion_InternalConfigsRec();
},
complexType: OutSystemsUIModel.Accordion_InternalConfigsRec
}]);
OutSystemsUIController.default.clientActionProxies.accordionCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.Accordion_InternalConfigsRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$AccordionDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7rcHhHBUzUu4fi8QG+kExA:/ClientActionFlows.7rcHhHBUzUu4fi8QG+kExA:+2KiM9Ev6a5s+y8KPs4I6g", "OutSystemsUI", "AccordionDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IxdY0hMP1ECDw0qAAC5gWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rSjLlycM0k6Y0xrO6ckxjw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionDestroy_DestroyJS, "Destroy", "AccordionDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ytziO+zhWki9N2WoiqiGgw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7rcHhHBUzUu4fi8QG+kExA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionExpandAll", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionExpandAll.ExpandAllJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionExpandAll_ExpandAllJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionExpandAll$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionExpandAll$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:GmvrN3ZlqUaHs_ptn5GxaQ:/ClientActionFlows.GmvrN3ZlqUaHs_ptn5GxaQ:7s3KPpHKQAuD9qH2R0hSuQ", "OutSystemsUI", "AccordionExpandAll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bHuXklktFUiRAEKoDaT+tA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ct2VLzJyNEqMqflU8Pp70g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionExpandAll_ExpandAllJS, "ExpandAll", "AccordionExpandAll", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rhon9zxBJ0iGI18UtxeQLw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:GmvrN3ZlqUaHs_ptn5GxaQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionExpandAll$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionExpandAll$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionExpandAll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionExpandAll.ExpandAllJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.ExpandAllItems($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:c_vFTy28ZkqcklFYn_dxuQ:/ClientActionFlows.c_vFTy28ZkqcklFYn_dxuQ:AtZkhrpmn_jRucqWlS61Fw", "OutSystemsUI", "AccordionInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ugq0iNXO80uL4U2e3TNlwQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7S05JBD3Fk+QUafzdEXpFA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionInitialize_InitializeJS, "Initialize", "AccordionInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oOEJEyAOCk26HW047FiV8g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:c_vFTy28ZkqcklFYn_dxuQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionItemChangeIconPosition", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemChangeIconPosition.ChangeIconPositionJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemChangeIconPosition_ChangeIconPositionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemChangeIconPosition$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemChangeIconPosition$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:jqJYeskz9E6g2CHs7k248A:/ClientActionFlows.jqJYeskz9E6g2CHs7k248A:E6Ct_lhN4ZLgH_MqZCMcDg", "OutSystemsUI", "AccordionItemChangeIconPosition", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jI5muL_aPEm5wZmLbzgX9Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+odFljIlmEu9MDrNwwwXhA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemChangeIconPosition_ChangeIconPositionJS, "ChangeIconPosition", "AccordionItemChangeIconPosition", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("IconPosition", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:otAJxPLg_UO8GeM0iEUV2g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:jqJYeskz9E6g2CHs7k248A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemChangeIconPosition$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemChangeIconPosition$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemChangeIconPosition$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemChangeIconPosition.ChangeIconPositionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionItemChangeIconType", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemChangeIconType.ChangeIconTypeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemChangeIconType_ChangeIconTypeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemChangeIconType$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemChangeIconType$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:4zCozxQveE+iOQTSWutSmA:/ClientActionFlows.4zCozxQveE+iOQTSWutSmA:d+zPAKOi3Cuf2yk7p4pH5w", "OutSystemsUI", "AccordionItemChangeIconType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G6PWSevEL0azUgeDIFbZsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gnA9qTMiY0admwJoOdtO1Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemChangeIconType_ChangeIconTypeJS, "ChangeIconType", "AccordionItemChangeIconType", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Icon", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Kd_nx92lnUKI5n_4bV43nQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:4zCozxQveE+iOQTSWutSmA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemChangeIconType$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemChangeIconType$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemChangeIconType$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemChangeIconType.ChangeIconTypeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionItemChangeIsDisabled", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemChangeIsDisabled.ChangeIsDisabledJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemChangeIsDisabled_ChangeIsDisabledJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemChangeIsDisabled$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemChangeIsDisabled$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uFan_nLBu0W4WqeMFLvdvQ:/ClientActionFlows.uFan_nLBu0W4WqeMFLvdvQ:pjrytyMfJXeqg8Y_6eAF5w", "OutSystemsUI", "AccordionItemChangeIsDisabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P8sfYn_9GU6G8eu0yjZbdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:se0T6Fh9GUmFSvo+nqw_zg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemChangeIsDisabled_ChangeIsDisabledJS, "ChangeIsDisabled", "AccordionItemChangeIsDisabled", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("IsDisabled", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YX+e_s9vIUuFWK3xrEdN8Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uFan_nLBu0W4WqeMFLvdvQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemChangeIsDisabled$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemChangeIsDisabled$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemChangeIsDisabled$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemChangeIsDisabled.ChangeIsDisabledJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionItemChangeIsExpanded", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemChangeIsExpanded.ChangeIsExpandedJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemChangeIsExpanded_ChangeIsExpandedJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemChangeIsExpanded$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemChangeIsExpanded$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:klGqWI_GS0eiGrLFHjytFA:/ClientActionFlows.klGqWI_GS0eiGrLFHjytFA:6KBueFkCqK8s36OPPr+5Pw", "OutSystemsUI", "AccordionItemChangeIsExpanded", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+UnLiunHFU6bOtcwY+0b_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:38U7ThNlwkazS1gsxAXowg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemChangeIsExpanded_ChangeIsExpandedJS, "ChangeIsExpanded", "AccordionItemChangeIsExpanded", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("IsExpanded", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:47uXRPEGKE+HtLYCvX4hew", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:klGqWI_GS0eiGrLFHjytFA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemChangeIsExpanded$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemChangeIsExpanded$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemChangeIsExpanded$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemChangeIsExpanded.ChangeIsExpandedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionItemChangeProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemChangeProperty.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemChangeProperty_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemChangeProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IVQz0vHffUKv0IxtHhuQJg:/ClientActionFlows.IVQz0vHffUKv0IxtHhuQJg:CL2KwCbI_xgUI_bOVgYt9g", "OutSystemsUI", "AccordionItemChangeProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wW81n3HPfEe+DcDefyYvVQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Qyt7AzwxV0mdAfFmSTW4vw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemChangeProperty_ChangePropertyJS, "ChangeProperty", "AccordionItemChangeProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:q37HbkIsOkObqJH0unHgJQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IVQz0vHffUKv0IxtHhuQJg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemChangeProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemChangeProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemChangeProperty.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AccordionItemCollapse", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemCollapse.CloseJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemCollapse_CloseJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemCollapse$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemCollapse$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:B1eZVLI8h0Kk3CUEdzNQAg:/ClientActionFlows.B1eZVLI8h0Kk3CUEdzNQAg:vaLcNIpFAODXaQBP9GY0mA", "OutSystemsUI", "AccordionItemCollapse", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:A2Z8fR0vLkWzlsL9haGJpw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4uX9RNr4ZkqJpO+vIT2kow", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemCollapse_CloseJS, "Close", "AccordionItemCollapse", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qXaY_D93U0+AS9uWl64tyA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:B1eZVLI8h0Kk3CUEdzNQAg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemCollapse$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemCollapse$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemCollapse$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemCollapse.CloseJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.Collapse($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionItemCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemCreate.CreateJS", "OutSystemsUI.model$AccordionItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZvZ4dqALpkuLgv1cjEiobg:/ClientActionFlows.ZvZ4dqALpkuLgv1cjEiobg:au5FADfUdfyx0u4UjGwntQ", "OutSystemsUI", "AccordionItemCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_wPeihd69EC+Q2bcAJ1QCg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OI7sQ0dPqEezNQM9VOjN8w", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Zgm65KwMwEuSf3oH6Me+Wg", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemCreate_CreateJS, "Create", "AccordionItemCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xno0DUOmgEGnMUgBa6gw5Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZvZ4dqALpkuLgv1cjEiobg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.AccordionItem_InternalConfigsRec();
},
complexType: OutSystemsUIModel.AccordionItem_InternalConfigsRec
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.AccordionItem_InternalConfigsRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$AccordionItemDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:rrmTg1+Xykiad+HwVV_JGQ:/ClientActionFlows.rrmTg1+Xykiad+HwVV_JGQ:hW2YBBgIdevXVIspMy_ZQg", "OutSystemsUI", "AccordionItemDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:f+9WTErcJUCQEAzloBmp3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OFuyspOyN0W+8nnvv1PJOw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemDestroy_DestroyJS, "Destroy", "AccordionItemDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6k5LpD44nUesDFheOFUH_A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:rrmTg1+Xykiad+HwVV_JGQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionItemExpand", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemExpand.OpenJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemExpand_OpenJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemExpand$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemExpand$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_SMWBPCDiESQk70JvhqPng:/ClientActionFlows._SMWBPCDiESQk70JvhqPng:WuUg6TMxi5VLC_cIr_ARwQ", "OutSystemsUI", "AccordionItemExpand", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DiVhNq4HLEyn2BgEfLnKiw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4TYUH4bS9keNOkoYe34E4A", callContext.id);
// Opens an AccordionItem with a given identifier.
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemExpand_OpenJS, "Open", "AccordionItemExpand", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fji0_KHUIku48jU_V3wcLg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_SMWBPCDiESQk70JvhqPng", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemExpand$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemExpand$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemExpand$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemExpand.OpenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.Expand($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AccordionItemRegisterCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AccordionItemRegisterCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AccordionItemRegisterCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.accordionItemRegisterCallback$Action = function (uniqueIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AccordionItemRegisterCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:tkLl2TO99kWvYVVR_hREHA:/ClientActionFlows.tkLl2TO99kWvYVVR_hREHA:wwgC4FBLis6NXnogZ9v1Mw", "OutSystemsUI", "AccordionItemRegisterCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Bex+OOxI2Eu2TZ9b0E5wrw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_Oend+MOvkiX0CCjdUze+g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AccordionItemRegisterCallback_RegisterCallbackJS, "RegisterCallback", "AccordionItemRegisterCallback", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g3Ugnqg1eEWiPBVr2I0dtg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:tkLl2TO99kWvYVVR_hREHA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AccordionItemRegisterCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.accordionItemRegisterCallback$Action = function (uniqueIdIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.accordionItemRegisterCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AccordionItemRegisterCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AccordionItemAPI.RegisterCallback($parameters.UniqueId, $parameters.Callback);
};
});

define("OutSystemsUI.controller$AddFavicon", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AddFavicon.AddFaviconJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AddFavicon_AddFaviconJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.addFavicon$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AddFavicon$vars"))());
vars.value.uRLInLocal = uRLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_0NYWTTYl0ycqAqbD2ODmA:/ClientActionFlows._0NYWTTYl0ycqAqbD2ODmA:Z425_y+sRVQjgldl6Ah_HA", "OutSystemsUI", "AddFavicon", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R1cjlwOFUEeCXdUQnR+0jw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZB3jt8cO6UyAPUoqxcSYmA", callContext.id);
// Add favicon to your project
controller.safeExecuteJSNode(OutSystemsUI_controller_AddFavicon_AddFaviconJS, "AddFavicon", "AddFavicon", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7FkirfGRwUmbJAkF3xWlsw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_0NYWTTYl0ycqAqbD2ODmA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AddFavicon$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.addFavicon$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.addFavicon$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AddFavicon.AddFaviconJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = $parameters.URL;
document.getElementsByTagName('head')[0].appendChild(link);
};
});

define("OutSystemsUI.controller$AnimatedLabelChangeProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AnimatedLabelChangeProperty.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AnimatedLabelChangeProperty_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.animatedLabelChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AnimatedLabelChangeProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:w8l73khmCUeDpQXZx0fCRw:/ClientActionFlows.w8l73khmCUeDpQXZx0fCRw:BrwFWLDRXI6QKuMX9ZBKfQ", "OutSystemsUI", "AnimatedLabelChangeProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OiSBmyS1EEmyOpl+Y7Andw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kRo5_1e2mkGPsWtPHlQnVA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AnimatedLabelChangeProperty_ChangePropertyJS, "ChangeProperty", "AnimatedLabelChangeProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u3Y9WtVIvUqNfTerDjBTog", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:w8l73khmCUeDpQXZx0fCRw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AnimatedLabelChangeProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.animatedLabelChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.animatedLabelChangeProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AnimatedLabelChangeProperty.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AnimatedLabelAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$AnimatedLabelCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AnimatedLabelCreate.CreateJS", "OutSystemsUI.model$AnimatedLabel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AnimatedLabelCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.animatedLabelCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AnimatedLabelCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:It3K+7hmHk+T6ON5Xd9HrQ:/ClientActionFlows.It3K+7hmHk+T6ON5Xd9HrQ:MSGXvDIe1Moztdpfgt6KaQ", "OutSystemsUI", "AnimatedLabelCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ih+9DpsHbEmrgy0oPxOO7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GnPs6ZSE70uO5qGdP3Nbtg", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6_Y7RPfqZEqwKubxNGDhGA", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_AnimatedLabelCreate_CreateJS, "Create", "AnimatedLabelCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HSymHBEibUm_5ooCTZEbxg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:It3K+7hmHk+T6ON5Xd9HrQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AnimatedLabelCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.AnimatedLabel_InternalConfigRec();
},
complexType: OutSystemsUIModel.AnimatedLabel_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.animatedLabelCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.AnimatedLabel_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.animatedLabelCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AnimatedLabelCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AnimatedLabelAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$AnimatedLabelDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AnimatedLabelDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AnimatedLabelDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.animatedLabelDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AnimatedLabelDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Pic2pCmAWkaptH6NPok0gw:/ClientActionFlows.Pic2pCmAWkaptH6NPok0gw:D1JnBFde8NOebbBg7Q4r+A", "OutSystemsUI", "AnimatedLabelDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qyTOcHwfqEi7rRn_0TuLvA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HYYdi0dvpUSxnzDlEEVTHA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_AnimatedLabelDestroy_DestroyJS, "Destroy", "AnimatedLabelDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6hJe_MFPTUmsTbXBTPwsoQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Pic2pCmAWkaptH6NPok0gw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AnimatedLabelDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.animatedLabelDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.animatedLabelDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AnimatedLabelDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AnimatedLabelAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AnimatedLabelInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AnimatedLabelInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AnimatedLabelInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.animatedLabelInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AnimatedLabelInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wX4XlbW6VEuAhOLq0LcLhQ:/ClientActionFlows.wX4XlbW6VEuAhOLq0LcLhQ:Ej4KKfz2c+fQkCx12YRs2Q", "OutSystemsUI", "AnimatedLabelInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ugi_dBy670CDB887Et8iyw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CIZ3QMWYQ0auE6GbRz5zgw", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_AnimatedLabelInitialize_InitializeJS, "Initialize", "AnimatedLabelInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UPMPv+geS0iO5bmLK54ptA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wX4XlbW6VEuAhOLq0LcLhQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AnimatedLabelInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.animatedLabelInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.animatedLabelInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AnimatedLabelInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AnimatedLabelAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$AnimatedLabelUpdateOnRender", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$AnimatedLabelUpdateOnRender.UpdateOnRenderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_AnimatedLabelUpdateOnRender_UpdateOnRenderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.animatedLabelUpdateOnRender$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.AnimatedLabelUpdateOnRender$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:UArYOPa1XEitgDrDyfsbJg:/ClientActionFlows.UArYOPa1XEitgDrDyfsbJg:iCPzCptYyNppd0bcpND2hw", "OutSystemsUI", "AnimatedLabelUpdateOnRender", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:l4TVe_7r9ECYQOHnVSOeng", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4EGa1ZA6I02buZ7eIsQeTg", callContext.id);
// Trigger the API method that will check if the label must be active or not.
controller.safeExecuteJSNode(OutSystemsUI_controller_AnimatedLabelUpdateOnRender_UpdateOnRenderJS, "UpdateOnRender", "AnimatedLabelUpdateOnRender", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c5P3w7vcIEOsFZOPPgVmIg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:UArYOPa1XEitgDrDyfsbJg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.AnimatedLabelUpdateOnRender$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.animatedLabelUpdateOnRender$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.animatedLabelUpdateOnRender$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$AnimatedLabelUpdateOnRender.UpdateOnRenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.AnimatedLabelAPI.UpdateOnRender($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$BinaryToURLImage", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$BinaryToURLImage.JsBinaryToBase64JS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_BinaryToURLImage_JsBinaryToBase64JS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.binaryToURLImage$Action = function (imageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.BinaryToURLImage$vars"))());
vars.value.imageInLocal = imageIn;
var jsBinaryToBase64JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.BinaryToURLImage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jsBinaryToBase64JSResult = jsBinaryToBase64JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:hpEuNetfiEerhxAiMSbrQQ:/ClientActionFlows.hpEuNetfiEerhxAiMSbrQQ:HQD8eL4joPfBvwkqEaHdWg", "OutSystemsUI", "BinaryToURLImage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6_chTCWxTEKRvUATn0WuUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HoTpRIE1m0e2MkudNr4zSg", callContext.id);
// Script to convert base64 into binary data.
jsBinaryToBase64JSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_BinaryToURLImage_JsBinaryToBase64JS, "JsBinaryToBase64", "BinaryToURLImage", {
Binary: OS.DataConversion.JSNodeParamConverter.to(vars.value.imageInLocal, OS.Types.BinaryData),
Base64: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.BinaryToURLImage$jsBinaryToBase64JSResult"))();
jsNodeResult.base64Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Base64, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// Set Image URL
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ISMbm2SpY0KnWedxlbL5Uw", callContext.id);
// URL = "data:image/gif;base64," + JsBinaryToBase64.Base64
outVars.value.uRLOut = ("data:image/gif;base64," + jsBinaryToBase64JSResult.value.base64Out);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D16PzPiI8kSjZFs4QGscNw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:hpEuNetfiEerhxAiMSbrQQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.BinaryToURLImage$vars", [{
name: "Image",
attrName: "imageInLocal",
mandatory: true,
dataType: OS.Types.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.BinaryToURLImage$jsBinaryToBase64JSResult", [{
name: "Base64",
attrName: "base64Out",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.BinaryToURLImage$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.binaryToURLImage$Action = function (imageIn) {
imageIn = (imageIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : imageIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.binaryToURLImage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(imageIn, OS.Types.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$BinaryToURLImage.JsBinaryToBase64JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Base64 = $parameters.Binary;
};
});

define("OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ButtonLoadingChangeBooleanProperty_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ButtonLoadingChangeBooleanProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:VdTlN8CGE0yTPthXsS6AJQ:/ClientActionFlows.VdTlN8CGE0yTPthXsS6AJQ:qbcBCDtN86z2I6RFBCSg7Q", "OutSystemsUI", "ButtonLoadingChangeBooleanProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cOYMDNMwOE63yWkzAxomHA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eS8ExKvWgESXAszsmeiH6w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ButtonLoadingChangeBooleanProperty_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "ButtonLoadingChangeBooleanProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_JxUsA77DkCdd+e0tsogBA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:VdTlN8CGE0yTPthXsS6AJQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ButtonLoadingChangeBooleanProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.buttonLoadingChangeBooleanProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ButtonLoadingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$ButtonLoadingChangeTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ButtonLoadingChangeTextProperty_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.buttonLoadingChangeTextProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ButtonLoadingChangeTextProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_rKC6xuelkmIjQN_KOryRQ:/ClientActionFlows._rKC6xuelkmIjQN_KOryRQ:B676euxPFnkU76Th6yyiDw", "OutSystemsUI", "ButtonLoadingChangeTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:U1SLcuxrVES3bjuE2vaP2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xPXUt7053EGczbsLnyY18A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ButtonLoadingChangeTextProperty_ChangeTextPropertyJS, "ChangeTextProperty", "ButtonLoadingChangeTextProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PxxV9t8YOEOgR5IFfKQp9A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_rKC6xuelkmIjQN_KOryRQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ButtonLoadingChangeTextProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.buttonLoadingChangeTextProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.buttonLoadingChangeTextProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ButtonLoadingChangeTextProperty.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ButtonLoadingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$ButtonLoadingCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ButtonLoadingCreate.CreateJS", "OutSystemsUI.model$ButtonLoading_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ButtonLoadingCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.buttonLoadingCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ButtonLoadingCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_lGtmvBMEUWqrcERHWYYnA:/ClientActionFlows._lGtmvBMEUWqrcERHWYYnA:y1bOF+tkLLyGpQsjcwUEZQ", "OutSystemsUI", "ButtonLoadingCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GY1u9vqRw0qU9Mmowm0gbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4dPMNlJpaU6o1ehYdZSGxg", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CRYuV54uk0uB5+MohLa1iA", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_ButtonLoadingCreate_CreateJS, "Create", "ButtonLoadingCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ishfImU3pkavZTEN9VvRTA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_lGtmvBMEUWqrcERHWYYnA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ButtonLoadingCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ButtonLoading_InternalConfigRec();
},
complexType: OutSystemsUIModel.ButtonLoading_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.buttonLoadingCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.ButtonLoading_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.buttonLoadingCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ButtonLoadingCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ButtonLoadingAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$ButtonLoadingDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ButtonLoadingDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ButtonLoadingDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.buttonLoadingDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ButtonLoadingDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:jLrDjGqTSEGRY5HhW9zQ6w:/ClientActionFlows.jLrDjGqTSEGRY5HhW9zQ6w:B9Ikyd29WX8dDtmucn4a1w", "OutSystemsUI", "ButtonLoadingDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hgTSZr2lt02ujzy45MAMSA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QAnZUcm0EUGKIQgAbtyJWw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ButtonLoadingDestroy_DestroyJS, "Destroy", "ButtonLoadingDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2NrLDjFyg0eUs3D9Zv+HYg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:jLrDjGqTSEGRY5HhW9zQ6w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ButtonLoadingDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.buttonLoadingDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.buttonLoadingDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ButtonLoadingDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ButtonLoadingAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$ButtonLoadingInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ButtonLoadingInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ButtonLoadingInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.buttonLoadingInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ButtonLoadingInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xpWpmMo79UymhORPkn7tZA:/ClientActionFlows.xpWpmMo79UymhORPkn7tZA:ztifgjl_5c+iiA0lHxx8Tg", "OutSystemsUI", "ButtonLoadingInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:I9+zzHJq606P8mEsTSt2BA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:alV4QJyvmkGxcbYJPZpJTQ", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_ButtonLoadingInitialize_InitializeJS, "Initialize", "ButtonLoadingInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cgTWNw_2uUmTK_W3Jy76LA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xpWpmMo79UymhORPkn7tZA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ButtonLoadingInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.buttonLoadingInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.buttonLoadingInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ButtonLoadingInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ButtonLoadingAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$CarouselChangeBooleanProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselChangeBooleanProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselChangeBooleanProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselChangeBooleanProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:medPU1vQrEiq1RkQR4TgFQ:/ClientActionFlows.medPU1vQrEiq1RkQR4TgFQ:3EFtwEcSMTWTUKzprFpBSQ", "OutSystemsUI", "CarouselChangeBooleanProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vm2tyqOPf0uCdK9fqQprAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TFkSpkeBUkyRp+GGJ9h_Sw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselChangeBooleanProp_ChangeTextPropertyJS, "ChangeTextProperty", "CarouselChangeBooleanProp", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wDr8hDgZwky265qL1ymPDg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:medPU1vQrEiq1RkQR4TgFQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselChangeBooleanProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselChangeBooleanProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselChangeBooleanProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$CarouselChangeExtendedClass", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselChangeExtendedClass.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselChangeExtendedClass_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselChangeExtendedClass$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:tVm_5NZyg0e+WIb17n_fTQ:/ClientActionFlows.tVm_5NZyg0e+WIb17n_fTQ:U_usgVUZ4mv7AZn2dlsSHw", "OutSystemsUI", "CarouselChangeExtendedClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bLvDwcsVv06EwsG+a83DgQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NhGMKtxMO0+2SZSFFmVjlQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselChangeExtendedClass_ChangePropertyJS, "ChangeProperty", "CarouselChangeExtendedClass", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("ExtendedClass", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Sk8K5o6o8U2J0+iGOeq6Uw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:tVm_5NZyg0e+WIb17n_fTQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselChangeExtendedClass$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselChangeExtendedClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselChangeExtendedClass.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$CarouselChangeIntegerProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselChangeIntegerProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselChangeIntegerProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselChangeIntegerProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:t82STWw0IE+4fAKE5xgPVg:/ClientActionFlows.t82STWw0IE+4fAKE5xgPVg:eExRfj7AcR2HAZ2l2DvNaw", "OutSystemsUI", "CarouselChangeIntegerProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QBeHek7z3UaYTkmzAbXe2Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3Z6RhnKeOUegiSGgD9xHfQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselChangeIntegerProp_ChangeTextPropertyJS, "ChangeTextProperty", "CarouselChangeIntegerProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Integer),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_GAd0B2__UOYF80XKA5zBA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:t82STWw0IE+4fAKE5xgPVg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselChangeIntegerProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? 0 : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselChangeIntegerProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselChangeIntegerProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$CarouselChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Zm+xmhosykK0wHNXCrcZoA:/ClientActionFlows.Zm+xmhosykK0wHNXCrcZoA:OZ+y4IVj4BgZKLSmSUsL+Q", "OutSystemsUI", "CarouselChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:y1doCZA7WEKsKei6+sZNyA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JCmTAIpRWkepl5gsrrmEyw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "CarouselChangeTextProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_2IZ7Rn9TUCu6YmJjxmduw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Zm+xmhosykK0wHNXCrcZoA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$CarouselCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselCreate.CreateCarouselJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselCreate_CreateCarouselJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselCreate$Action = function (uniqueIdIn, internalConfigsIn, providerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
vars.value.providerInLocal = providerIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Xrs9UUNm1kOwTb8WOQ75tQ:/ClientActionFlows.Xrs9UUNm1kOwTb8WOQ75tQ:qMmFcKq5d75WID7Qq9vmiA", "OutSystemsUI", "CarouselCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:14ewmrkq+UWX81fVhonkfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lTXnKx0a2U6G_m26f6hTmw", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselCreate_CreateCarouselJS, "CreateCarousel", "CarouselCreate", {
Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D1gRXqwHFUOb7qPX+jx9jA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Xrs9UUNm1kOwTb8WOQ75tQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselCreate$Action = function (uniqueIdIn, internalConfigsIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text), providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselCreate.CreateCarouselJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.Create($parameters.UniqueId, $parameters.Configs, $parameters.Provider);
};
});

define("OutSystemsUI.controller$CarouselDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:C9fJvuAfmUaoCF5r+G+zXg:/ClientActionFlows.C9fJvuAfmUaoCF5r+G+zXg:f+8naS2Qer9zq6CK_W19Ng", "OutSystemsUI", "CarouselDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ISKlotlnYEe13ezCkI84+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hrqbWemBIkulRvOYfHr58g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselDestroy_DestroyJS, "Destroy", "CarouselDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:btu1XA8+Nk6y9LtdB8VZWg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:C9fJvuAfmUaoCF5r+G+zXg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$CarouselGoTo", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselGoTo.CarouselGoToJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselGoTo_CarouselGoToJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselGoTo$Action = function (widgetIdIn, itemIndexIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselGoTo$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.itemIndexInLocal = itemIndexIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RqRlHyBAxEucz+II1zjsyQ:/ClientActionFlows.RqRlHyBAxEucz+II1zjsyQ:gl44yLh4FdniS3z94SbSrg", "OutSystemsUI", "CarouselGoTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eWlNIy7pw0m54_d356URCg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:l1_C+Z5SgUG7XI5QX194Rw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselGoTo_CarouselGoToJS, "CarouselGoTo", "CarouselGoTo", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
Index: OS.DataConversion.JSNodeParamConverter.to(vars.value.itemIndexInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8B5suQLD4kSp6P+2f6RM8A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RqRlHyBAxEucz+II1zjsyQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselGoTo$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ItemIndex",
attrName: "itemIndexInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselGoTo$Action = function (widgetIdIn, itemIndexIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
itemIndexIn = (itemIndexIn === undefined) ? 0 : itemIndexIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselGoTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(itemIndexIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselGoTo.CarouselGoToJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.GoTo($parameters.WidgetId, $parameters.Index);
};
});

define("OutSystemsUI.controller$CarouselInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselInitialize.InitializeCarouselJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselInitialize_InitializeCarouselJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:k45tCzHM+UK+4d_ve4IA6Q:/ClientActionFlows.k45tCzHM+UK+4d_ve4IA6Q:3hdUrvYWOLmboolmC3n3fw", "OutSystemsUI", "CarouselInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EargwjHQak+eqS5Pe9ejig", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R3IEvhbKQk2ZA5z72YVrkA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselInitialize_InitializeCarouselJS, "InitializeCarousel", "CarouselInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LQd_TFkb6kK8i4w20XkKoA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:k45tCzHM+UK+4d_ve4IA6Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselInitialize.InitializeCarouselJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$CarouselNext", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselNext.CarouselNextJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselNext_CarouselNextJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselNext$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselNext$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:DalbT2WZuk2sSGbSp+Ri7w:/ClientActionFlows.DalbT2WZuk2sSGbSp+Ri7w:cQl6+djKrUGaS0+s9mPzrg", "OutSystemsUI", "CarouselNext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aELmfDEQ6kO7y4Z38EfK+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SkGL_4SFaEC6UPAE7apWJQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselNext_CarouselNextJS, "CarouselNext", "CarouselNext", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:djGKdL++HEqqSuDzKO3WQA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:DalbT2WZuk2sSGbSp+Ri7w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselNext$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselNext$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselNext$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselNext.CarouselNextJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.Next($parameters.WidgetId);
};
});

define("OutSystemsUI.controller$CarouselPrevious", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselPrevious.CarouselPreviousJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselPrevious_CarouselPreviousJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselPrevious$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselPrevious$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wBo+ou7R50yaScCFheYblw:/ClientActionFlows.wBo+ou7R50yaScCFheYblw:rX4Ifyz0OOsNViKqiGGHpQ", "OutSystemsUI", "CarouselPrevious", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vc3zed976kuItx7eEeNF6g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_yFY8VIR30+BBrJkE40zvg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselPrevious_CarouselPreviousJS, "CarouselPrevious", "CarouselPrevious", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ju5yCpKAbUaUiskZasHNlA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wBo+ou7R50yaScCFheYblw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselPrevious$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselPrevious$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselPrevious$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselPrevious.CarouselPreviousJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.Previous($parameters.WidgetId);
};
});

define("OutSystemsUI.controller$CarouselRegisterProviderCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselRegisterProviderCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselRegisterProviderCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselRegisterProviderCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3IDEpgD9FEuxMHHMOqKt9A:/ClientActionFlows.3IDEpgD9FEuxMHHMOqKt9A:_4_rZmCmccZ9oNCqWi83yQ", "OutSystemsUI", "CarouselRegisterProviderCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kQ0Ie8AB8kCzD5kRh9a0kw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:y_04rFE18EOkGhy_MJo9zA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselRegisterProviderCallback_RegisterCallbackJS, "RegisterCallback", "CarouselRegisterProviderCallback", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pdImZWL_V068CcmDroNIig", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3IDEpgD9FEuxMHHMOqKt9A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselRegisterProviderCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselRegisterProviderCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselRegisterProviderCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.RegisterProviderCallback($parameters.UniqueId, $parameters.EventName, $parameters.Callback);
};
});

define("OutSystemsUI.controller$CarouselToggleDrag", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselToggleDrag.CarouselToggleDragJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselToggleDrag_CarouselToggleDragJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselToggleDrag$Action = function (widgetIdIn, hasDragIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselToggleDrag$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.hasDragInLocal = hasDragIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:JtjFI5sxG0+EicgxSpap6w:/ClientActionFlows.JtjFI5sxG0+EicgxSpap6w:5UQejlUnPeK4m7PifL9NXg", "OutSystemsUI", "CarouselToggleDrag", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eOeqIfhrPkuv9uDNUfo9fQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hc6M7O1DhUadffjARhYIxw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselToggleDrag_CarouselToggleDragJS, "CarouselToggleDrag", "CarouselToggleDrag", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
HasDrag: OS.DataConversion.JSNodeParamConverter.to(vars.value.hasDragInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:58gAx3arl06MLZAjNmsK3A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:JtjFI5sxG0+EicgxSpap6w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselToggleDrag$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasDrag",
attrName: "hasDragInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselToggleDrag$Action = function (widgetIdIn, hasDragIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
hasDragIn = (hasDragIn === undefined) ? false : hasDragIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselToggleDrag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(hasDragIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselToggleDrag.CarouselToggleDragJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.ToggleDrag($parameters.WidgetId, $parameters.HasDrag);
};
});

define("OutSystemsUI.controller$CarouselUpdateOnRender", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$CarouselUpdateOnRender.UpdateOnRenderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_CarouselUpdateOnRender_UpdateOnRenderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.carouselUpdateOnRender$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.CarouselUpdateOnRender$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:88PVSVL2gUq98mH_FpVvig:/ClientActionFlows.88PVSVL2gUq98mH_FpVvig:YaJhOleXH0e1dlPAkdBVZw", "OutSystemsUI", "CarouselUpdateOnRender", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pORbsOyAO0iO7Gh06fpDCw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zRuwcv34O0CYDUk4Wxu2ow", callContext.id);
// Trigger the API method that will check if the label must be active or not.
controller.safeExecuteJSNode(OutSystemsUI_controller_CarouselUpdateOnRender_UpdateOnRenderJS, "UpdateOnRender", "CarouselUpdateOnRender", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c8UTCUfz2UeUsVO_XbgOvA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:88PVSVL2gUq98mH_FpVvig", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.CarouselUpdateOnRender$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.carouselUpdateOnRender$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.carouselUpdateOnRender$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$CarouselUpdateOnRender.UpdateOnRenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.CarouselAPI.UpdateOnRender($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$ConfigureOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ConfigureOfflineDataSync.ConfigureOfflineDataSyncJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ConfigureOfflineDataSync_ConfigureOfflineDataSyncJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.configureOfflineDataSync$Action = function (syncOnOnlineIn, syncOnResumeIn, retryOnErrorIn, retryIntervalInSecondsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ConfigureOfflineDataSync$vars"))());
vars.value.syncOnOnlineInLocal = syncOnOnlineIn;
vars.value.syncOnResumeInLocal = syncOnResumeIn;
vars.value.retryOnErrorInLocal = retryOnErrorIn;
vars.value.retryIntervalInSecondsInLocal = retryIntervalInSecondsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wlq1EEBDSk6XBVqBnqrN_w:/ClientActionFlows.wlq1EEBDSk6XBVqBnqrN_w:2cSasMUYyxMLULWUER6qdQ", "OutSystemsUI", "ConfigureOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dDeqycVUN0SauMDQ4RwX3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q3ziLgpmwEiLfbtrD1nU_A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ConfigureOfflineDataSync_ConfigureOfflineDataSyncJS, "ConfigureOfflineDataSync", "ConfigureOfflineDataSync", {
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncOnResumeInLocal, OS.Types.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.retryIntervalInSecondsInLocal, OS.Types.Integer),
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncOnOnlineInLocal, OS.Types.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(vars.value.retryOnErrorInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cata8UPkrUmg_S6Y1sbHKw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wlq1EEBDSk6XBVqBnqrN_w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ConfigureOfflineDataSync$vars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.configureOfflineDataSync$Action = function (syncOnOnlineIn, syncOnResumeIn, retryOnErrorIn, retryIntervalInSecondsIn) {
syncOnOnlineIn = (syncOnOnlineIn === undefined) ? false : syncOnOnlineIn;
syncOnResumeIn = (syncOnResumeIn === undefined) ? false : syncOnResumeIn;
retryOnErrorIn = (retryOnErrorIn === undefined) ? false : retryOnErrorIn;
retryIntervalInSecondsIn = (retryIntervalInSecondsIn === undefined) ? 0 : retryIntervalInSecondsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.configureOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncOnOnlineIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(syncOnResumeIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(retryOnErrorIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(retryIntervalInSecondsIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ConfigureOfflineDataSync.ConfigureOfflineDataSyncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.configure(
    $parameters.SyncOnOnline,
    $parameters.SyncOnResume,
    $parameters.RetryOnError,
    $parameters.RetryIntervalInSeconds);

};
});

define("OutSystemsUI.controller$DatePickerChangeBooleanProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerChangeBooleanProp.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerChangeBooleanProp_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerChangeBooleanProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NbUigcCGvky4iMH+zAQUEA:/ClientActionFlows.NbUigcCGvky4iMH+zAQUEA:5c6CjZ7Bd1AWnkcUvzdGmw", "OutSystemsUI", "DatePickerChangeBooleanProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Noycz1X5DUq1YHXahP8gLg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5eosNb33dkOedsiSJzCaWg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerChangeBooleanProp_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "DatePickerChangeBooleanProp", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jTyYCcCrkEmKy8jYNAZhIw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NbUigcCGvky4iMH+zAQUEA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerChangeBooleanProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerChangeBooleanProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerChangeBooleanProp.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DatePickerChangeDateTimeProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerChangeDateTimeProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerChangeDateTimeProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerChangeDateTimeProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerChangeDateTimeProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7yaI4ZkmKEKEGZVURawaNQ:/ClientActionFlows.7yaI4ZkmKEKEGZVURawaNQ:sWfbjG2VwS_Y7oZecsG0QA", "OutSystemsUI", "DatePickerChangeDateTimeProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BIpuKlkq8E+vsLJYCx6Q0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9YKnJLRpCEy20q7U6l3zJg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerChangeDateTimeProp_ChangeTextPropertyJS, "ChangeTextProperty", "DatePickerChangeDateTimeProp", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.DateTime),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yyPDY3gBTUSz9z0AHf4rhQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7yaI4ZkmKEKEGZVURawaNQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerChangeDateTimeProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerChangeDateTimeProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.DateTime.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerChangeDateTimeProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerChangeDateTimeProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DatePickerChangeIntegerProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerChangeIntegerProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerChangeIntegerProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerChangeIntegerProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ubvt0maKLEebI81J6xoLjQ:/ClientActionFlows.ubvt0maKLEebI81J6xoLjQ:T4KraUM_hrA6CJZX2s1MdA", "OutSystemsUI", "DatePickerChangeIntegerProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rpi1BCfqj0Cq64TD_ostaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b9Ep2b_NdEWzmxJfRkPn+w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerChangeIntegerProp_ChangeTextPropertyJS, "ChangeTextProperty", "DatePickerChangeIntegerProp", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.LongInteger),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mbVKdu7h7keZmUdBsFpc0A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ubvt0maKLEebI81J6xoLjQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerChangeIntegerProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerChangeIntegerProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerChangeIntegerProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DatePickerChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kmdxHSW+Fk2Fhi1eKD07Aw:/ClientActionFlows.kmdxHSW+Fk2Fhi1eKD07Aw:Dr1b2JZNNhGgVRHYruh1wA", "OutSystemsUI", "DatePickerChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mZ0JItUBDEqGM9+pqf3P4w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zPtQJi4EtE6gHnKJ41s5EQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "DatePickerChangeTextProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:enx401caYEW0rGcRzHUjmQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kmdxHSW+Fk2Fhi1eKD07Aw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DatePickerClear", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerClear.ClearDatepickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerClear_ClearDatepickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerClear$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerClear$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:XA9N6xrQKUGTrhIKHbqebw:/ClientActionFlows.XA9N6xrQKUGTrhIKHbqebw:JnuthWBGTv_pPlkpgtUizw", "OutSystemsUI", "DatePickerClear", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5YCjR6iamkeHiVmY9WgmKA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6mF3_SIeGU6G93knJeYVXA", callContext.id);
// Trigger the API method that will clear the datepicker.
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerClear_ClearDatepickerJS, "ClearDatepicker", "DatePickerClear", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2Jm6bfc8M0aGWjmSfpR4iQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:XA9N6xrQKUGTrhIKHbqebw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerClear$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerClear$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerClear$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerClear.ClearDatepickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Clear($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DatePickerClearInputDate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerClearInputDate.ClearDateJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerClearInputDate_ClearDateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerClearInputDate$Action = function (inputIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerClearInputDate$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZkPC3kYsK0+u70AN5Ynciw:/ClientActionFlows.ZkPC3kYsK0+u70AN5Ynciw:QOoArkE1w4zIqlX3DREFdg", "OutSystemsUI", "DatePickerClearInputDate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pDLWshK5Ik+7QrM+4prHhg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:24BYYGogjEamX0Nv0eDlVA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerClearInputDate_ClearDateJS, "ClearDate", "DatePickerClearInputDate", {
widgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MEU8EdFMN0q_aDPX2sgtNA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZkPC3kYsK0+u70AN5Ynciw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerClearInputDate$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerClearInputDate$Action = function (inputIdIn) {
inputIdIn = (inputIdIn === undefined) ? "" : inputIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerClearInputDate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerClearInputDate.ClearDateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var widget = document.getElementById($parameters.widgetId);

if(widget) {
    try {
        widget.clearDate();
    } catch (e) {
        console.warn('The action ClearDatePickerInput only works when bounding a DatePicker to an input widget');
    }
}
};
});

define("OutSystemsUI.controller$DatePickerClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerClose.CloseDatepickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerClose_CloseDatepickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerClose$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerClose$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Ng5_r9LHuEShqJ_OLWbntg:/ClientActionFlows.Ng5_r9LHuEShqJ_OLWbntg:k2bL8l3Mm_gEYNdd0KL4Sw", "OutSystemsUI", "DatePickerClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1BjQ7cSVd0CruZNiICAKbA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WwZMb9JoLE+kK1za8B8Rbg", callContext.id);
// Trigger the API method that will close the datepicker.
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerClose_CloseDatepickerJS, "CloseDatepicker", "DatePickerClose", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p4qAV2o120KNwf7THvwwpQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Ng5_r9LHuEShqJ_OLWbntg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerClose$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerClose$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerClose.CloseDatepickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Close($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DatePickerCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerCreate.CreateDatePickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerCreate_CreateDatePickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerCreate$Action = function (uniqueIdIn, internalConfigsIn, modeIn, providerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
vars.value.modeInLocal = modeIn;
vars.value.providerInLocal = providerIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:2QYBrY19L0OPq_VsjvVOVg:/ClientActionFlows.2QYBrY19L0OPq_VsjvVOVg:_p5eWiL5h3B4todYKLrCXg", "OutSystemsUI", "DatePickerCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ofE715XK0Uq7wOmmMlRijw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OSrw7fkHIkyMEh2lVTNMhg", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerCreate_CreateDatePickerJS, "CreateDatePicker", "DatePickerCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text),
Mode: OS.DataConversion.JSNodeParamConverter.to(vars.value.modeInLocal, OS.Types.Text),
Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XaQh1D41n0egQs9JsWhIfA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:2QYBrY19L0OPq_VsjvVOVg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Mode",
attrName: "modeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerCreate$Action = function (uniqueIdIn, internalConfigsIn, modeIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
modeIn = (modeIn === undefined) ? "" : modeIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text), modeIn, providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerCreate.CreateDatePickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Create($parameters.UniqueId, $parameters.Configs, $parameters.Mode, $parameters.Provider);
};
});

define("OutSystemsUI.controller$DatePickerDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerDestroy.DestroyDatePickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerDestroy_DestroyDatePickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Hw_ndug_x0y441UgRflEWg:/ClientActionFlows.Hw_ndug_x0y441UgRflEWg:mFNIyxfDojJzXd_a+1mEAw", "OutSystemsUI", "DatePickerDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wkOjo1EI7kyZQCD3_lfMCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7PE4rN1Fwku2rNtpRJtx2A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerDestroy_DestroyDatePickerJS, "DestroyDatePicker", "DatePickerDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iClcmJXCEUSDbzOLg7es5Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Hw_ndug_x0y441UgRflEWg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerDestroy.DestroyDatePickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DatepickerExposeTranslations", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList", "OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datepickerExposeTranslations$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatepickerExposeTranslations$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EmOJTVVnHUKuypR_b66DFA:/ClientActionFlows.EmOJTVVnHUKuypR_b66DFA:6IP4nXht5OMswoKJzMCyuw", "OutSystemsUI", "DatepickerExposeTranslations", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZryHpmudIUOYCE6zOeN+mA", callContext.id);
// i18n Defaults Translations
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id);
// i18nDefaults.Current.PreviousMonth = "Previous Month"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).previousMonthAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("1fCvKiR860iF8y93wqzElg#Value.1784051735.1", "Previous Month");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// i18nDefaults.Current.NextMonth = "Next Month"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).nextMonthAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("FRQkwo9Yp0iVKYmvglli4w#Value.-766743789.1", "Next Month");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// i18nDefaults.Current.TodayButton = "Today"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).todayButtonAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("c93RG+ceD0WdMhhBlgm7sA#Value.80981793.1", "Today");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// i18nDefaults.Current.Midnight = "Midnight"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).midnightAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("tI9n5r_Dx0iO64Cd0TsZQg#Value.-1576218896.1", "Midnight");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// i18nDefaults.Current.Noon = "Noon"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).noonAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("7JkNQfmve0ybQuEBCcmHfw#Value.2433920.1", "Noon");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// i18nDefaults.Current.Months.Current.Month1 = "January"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month1Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Elw2vXw960izxzIMvM1qpA#Value.-162006966.1", "January");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// i18nDefaults.Current.Months.Current.Month2 = "February"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month2Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("4BHq85s+VE+IylptE9ZukQ#Value.-199248958.1", "February");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// i18nDefaults.Current.Months.Current.Month3 = "March"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month3Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("mbDBy4VjB0SzzkLzOXUdFg#Value.74113571.1", "March");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// i18nDefaults.Current.Months.Current.Month4 = "April"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month4Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("jNVk7nRwUkKdBhDRLgvUag#Value.63478374.1", "April");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// i18nDefaults.Current.Months.Current.Month5 = "May"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month5Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Ew9YPH2yzEGI5SqyvW_2sQ#Value.77125.1", "May");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// i18nDefaults.Current.Months.Current.Month6 = "June"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month6Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("q6eCYPoiPE6Z8gtzavUUWg#Value.2320482.1", "June");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// i18nDefaults.Current.Months.Current.Month7 = "July"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month7Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("OG7OPs09EEmIHvBtd09u5Q#Value.2320440.1", "July");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "13");
// i18nDefaults.Current.Months.Current.Month8 = "August"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month8Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZIkkytkF00C62bRH6ZRMcA#Value.1972131363.1", "August");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "14");
// i18nDefaults.Current.Months.Current.Month9 = "September"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month9Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("nX8TB7S5xkW2vLpNGzji6A#Value.-25881423.1", "September");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "15");
// i18nDefaults.Current.Months.Current.Month10 = "October"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month10Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("9LIV9yDE20eRBuqb7_MUNQ#Value.43165376.1", "October");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "16");
// i18nDefaults.Current.Months.Current.Month11 = "November"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month11Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("duL0nCW7+0uMBTLcjoL7Xg#Value.1703773522.1", "November");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "17");
// i18nDefaults.Current.Months.Current.Month12 = "December"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).monthsAttr.getCurrent(callContext.iterationContext).month12Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("mSVpIhn5x0WuqHFplsMTFw#Value.626483269.1", "December");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "18");
// i18nDefaults.Current.Weekdays.Current.Weekday1 = "Sunday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday1Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PP+e0FO51k2OuDR1+EhorQ#Value.-1807319568.1", "Sunday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "19");
// i18nDefaults.Current.Weekdays.Current.Weekday2 = "Monday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday2Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("WV8_eD4RTE61GB2a0BkwuQ#Value.-1984635600.1", "Monday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "20");
// i18nDefaults.Current.Weekdays.Current.Weekday3 = "Tuesday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday3Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("CdvV1OKrjUSoC4jJteUE6A#Value.687309357.1", "Tuesday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "21");
// i18nDefaults.Current.Weekdays.Current.Weekday4 = "Wednesday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday4Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("2cEIAtVIlES4bU387yYKFA#Value.-897468618.1", "Wednesday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "22");
// i18nDefaults.Current.Weekdays.Current.Weekday5 = "Thursday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday5Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("rZxYcEOLE0SMy_WUK1USbg#Value.1636699642.1", "Thursday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "23");
// i18nDefaults.Current.Weekdays.Current.Weekday6 = "Friday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday6Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PTUebe2ghUGIcIlmoiHGTA#Value.2112549247.1", "Friday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "24");
// i18nDefaults.Current.Weekdays.Current.Weekday7 = "Saturday"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysAttr.getCurrent(callContext.iterationContext).weekday7Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("fxhdUHdd30WEIUqlUd3Dgg#Value.-2049557543.1", "Saturday");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "25");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort1 = "Sun"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort1Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Q0atH4XnxESfNPKXcNCMhg#Value.83500.1", "Sun");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "26");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort2 = "Mon"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort2Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("pWtYDFh+oEGF3oMu1ST3SA#Value.77548.1", "Mon");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "27");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort3 = "Tue"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort3Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("TxFtPzJ8eEmwSbWV_8uB3w#Value.84452.1", "Tue");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "28");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort4 = "Wed"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort4Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("n_faF_hqU0qU+TQPqypwbg#Value.86838.1", "Wed");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "29");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort5 = "Thu"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort5Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("C5ZwndaAOUOl74fkEmefDw#Value.84065.1", "Thu");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "30");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort6 = "Fri"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort6Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("7Dxp7GHv9kO9AEdEXQqPGA#Value.70909.1", "Fri");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vv4YFHDbXk2n5y8ZtIvrxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "31");
// i18nDefaults.Current.WeekdaysShort.Current.WeekdayShort7 = "Sat"
outVars.value.i18nDefaultsOut.getCurrent(callContext.iterationContext).weekdaysShortAttr.getCurrent(callContext.iterationContext).weekdayShort7Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("wupNrsljn0+ZgKsDAgws7w#Value.82886.1", "Sat");
// i18n Accessibility Translations
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id);
// i18nAccessibility.Current.IsDisabled = "Disabled. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).isDisabledAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("0JFpmf26qEmLPKk06zPUDg#Value.374566222.1", "Disabled. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// i18nAccessibility.Current.IsToday = "Is Today. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).isTodayAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("iqF5Pqcm+EuQgVmDvcRfXQ#Value.1584999357.1", "Is Today. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// i18nAccessibility.Current.DaySelected = "Day selected. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).daySelectedAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("pXZo0bRIl0KKarFWqwJMoA#Value.997213361.1", "Day selected. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// i18nAccessibility.Current.HasEvent = "Has event. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).hasEventAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("s6Mc6dzsq0O31GbSo7QbpQ#Value.-1258432986.1", "Has event. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// i18nAccessibility.Current.DaysInRange = "Day is in range. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).daysInRangeAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("nmdHfe62kkWmZZi8twrJvg#Value.-1662297402.1", "Day is in range. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// i18nAccessibility.Current.StartRange = "Start range. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).startRangeAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("6yUVQvdC90Gm4KUFQBj81w#Value.1774776785.1", "Start range. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// i18nAccessibility.Current.EndRange = "End range. "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).endRangeAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Ou2_Lg3vvEe3aQ7GWyGPBQ#Value.979281226.1", "End range. ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// i18nAccessibility.Current.Navigation = "navigation"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).navigationAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("q2HVeR5fq06ujvR8mwXC1g#Value.1862666772.1", "navigation");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// i18nAccessibility.Current.Month = "month"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).monthAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("iKX__y0GCEK4HvMWgzSWjA#Value.104080000.1", "month");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// i18nAccessibility.Current.Year = "year"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).yearAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("H6apzIN1TUKPQopWFy0zBw#Value.3704893.1", "year");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// i18nAccessibility.Current.KeyboardShortcuts = "Keyboard shortcuts"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).keyboardShortcutsAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("k2YfRkJbhkWi6MaJmqxhJg#Value.1665633300.1", "Keyboard shortcuts");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// i18nAccessibility.Current.CalendarDates = "Calendar dates"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).calendarDatesAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("XTzYOcd0uEuBcu+inuc+jg#Value.-2092303549.1", "Calendar dates");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "13");
// i18nAccessibility.Current.DateSelected = "Date selected: "
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).dateSelectedAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("bOB6QpW3y0qaPPNGZE3U9A#Value.-911153517.1", "Date selected: ");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "14");
// i18nAccessibility.Current.Calendar = "Calendar"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).calendarAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Bra9RrfzZk+b3rOW0R7aWA#Value.-113680546.1", "Calendar");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "15");
// i18nAccessibility.Current.GoToToday = "Go to today"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).goToTodayAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("StrMC+dU8UKyWJfLxq6nJA#Value.-18794124.1", "Go to today");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "16");
// i18nAccessibility.Current.OpenCalendar = "Open. Press Enter to close the Calendar"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).openCalendarAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("1b5_VD14vEWCUSQsUQ8m8g#Value.-464608999.1", "Open. Press Enter to close the Calendar");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "17");
// i18nAccessibility.Current.CloseCalendar = "Closed. Press Enter to open the Calendar"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).closeCalendarAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("hw5vDiQKrESpaaxSlyRHCA#Value.857568417.1", "Closed. Press Enter to open the Calendar");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "18");
// i18nAccessibility.Current.EnterCalendar = "Press Tab to enter the Calendar"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).enterCalendarAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("eVkbzc3vuEypSjfR3Hr9bA#Value.1511082002.1", "Press Tab to enter the Calendar");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "19");
// i18nAccessibility.Current.MonthNext = "Next Month"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).monthNextAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("d7ISJdppoUa87s3wJLedig#Value.-766743789.1", "Next Month");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "20");
// i18nAccessibility.Current.MonthPrevious = "Previous Month"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).monthPreviousAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("lRJU8QwPl0iwqv3N9eqD+Q#Value.1784051735.1", "Previous Month");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "21");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog1 = "The following keyboard shortcuts are available"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog1Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("7KBMokDeIEC_mM_EfFiiKA#Value.82125743.1", "The following keyboard shortcuts are available");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "22");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog2 = "LEFT / RIGHT to move day to day."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog2Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("aUoleWSZBEGHb_sk4X7m8A#Value.-1916325413.1", "LEFT / RIGHT to move day to day.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "23");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog3 = "UP / DOWN to move week to week."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog3Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("I6J5cRrTyk6bSZ6JvMUtBg#Value.-1048883153.1", "UP / DOWN to move week to week.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "24");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog4 = "DELETE to reset the date."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog4Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("yqo5pCbrYUa4Qeqn0J_qOg#Value.-1565462224.1", "DELETE to reset the date.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "25");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog5 = "ESCAPE to close the calendar."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog5Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("9s+39UgfEUOBkGEECmMZsw#Value.887781619.1", "ESCAPE to close the calendar.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "26");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog6 = "PAGE UP to move to the previous month."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog6Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("2pdORbIMeUmJLoWBa4tFQQ#Value.-513930751.1", "PAGE UP to move to the previous month.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "27");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog7 = "PAGE DOWN to move to the next month."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog7Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("hxu4s7ASlUCI3vkxgsoR+A#Value.941141342.1", "PAGE DOWN to move to the next month.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "28");
// i18nAccessibility.Current.ShortcutsDialog.Current.ShortcutsDialog8 = "SPACE / ENTER to select a date."
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).shortcutsDialogAttr.getCurrent(callContext.iterationContext).shortcutsDialog8Attr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("EKgo2wktLUWoYHof84369Q#Value.58078159.1", "SPACE / ENTER to select a date.");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZnZvYqAqnkC8lMuM5PuscA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "29");
// i18nAccessibility.Current.DialogButton = "Got it!"
outVars.value.i18nAccessibilityOut.getCurrent(callContext.iterationContext).dialogButtonAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("lg7NoSsYfEuhIOQNq772Tw#Value.1874273954.1", "Got it!");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qPOorQqLIkSyODdI6Zf8oA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EmOJTVVnHUKuypR_b66DFA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatepickerExposeTranslations$outVars", [{
name: "i18nDefaults",
attrName: "i18nDefaultsOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OutSystemsUIModel.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList();
},
complexType: OutSystemsUIModel.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList
}, {
name: "i18nAccessibility",
attrName: "i18nAccessibilityOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList();
},
complexType: OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList
}]);
OutSystemsUIController.default.clientActionProxies.datepickerExposeTranslations$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datepickerExposeTranslations$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
i18nDefaults: actionResults.i18nDefaultsOut,
i18nAccessibility: actionResults.i18nAccessibilityOut
};
});
};
});

define("OutSystemsUI.controller$DatePickerInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerInitialize.InitializeDatePickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerInitialize_InitializeDatePickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:veZMpyesyke+4wQR2KlNtg:/ClientActionFlows.veZMpyesyke+4wQR2KlNtg:UoXzFhg94vwBR3B2m7TrQw", "OutSystemsUI", "DatePickerInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c1tamy7SNU6Kv4HG7w2TAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bJptLwyOrEWTCpV1hA8dxQ", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerInitialize_InitializeDatePickerJS, "InitializeDatePicker", "DatePickerInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OOCEMB8luUCCpQzaGOf3eQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:veZMpyesyke+4wQR2KlNtg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerInitialize.InitializeDatePickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DatePickerOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerOpen.OpenDatepickerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerOpen_OpenDatepickerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerOpen$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerOpen$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:cF6Lvs8h40Gf0c9ID_IYzg:/ClientActionFlows.cF6Lvs8h40Gf0c9ID_IYzg:ugWhcFRxNz4d1nZMdWjHMg", "OutSystemsUI", "DatePickerOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SyleBRMruEaeCo1SfQpIMw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BmsYmgUgc0mXQKgpq423mA", callContext.id);
// Trigger the API method that will open the datepicker.
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerOpen_OpenDatepickerJS, "OpenDatepicker", "DatePickerOpen", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zHo2_Get2UOIN5abDBoFaA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:cF6Lvs8h40Gf0c9ID_IYzg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerOpen$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerOpen$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerOpen.OpenDatepickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.Open($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DatePickerRegisterProviderCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DatePickerRegisterProviderCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DatePickerRegisterProviderCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.datePickerRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DatePickerRegisterProviderCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:at_u6myc30+GfKMUn2C0ZA:/ClientActionFlows.at_u6myc30+GfKMUn2C0ZA:Js+pdonobwxLLmfJg63mXg", "OutSystemsUI", "DatePickerRegisterProviderCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lvLeGcbsQEK25MuMz_Bp9A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LJWZYQQ6OE6THxlSDgsKig", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DatePickerRegisterProviderCallback_RegisterCallbackJS, "RegisterCallback", "DatePickerRegisterProviderCallback", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eeiWhHhVhUOPWIAZOcf51A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:at_u6myc30+GfKMUn2C0ZA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DatePickerRegisterProviderCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.datePickerRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.datePickerRegisterProviderCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DatePickerRegisterProviderCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DatePickerAPI.RegisterProviderCallback($parameters.UniqueId, $parameters.EventName, $parameters.Callback);
};
});

define("OutSystemsUI.controller$DEPRECATED_AccessibilityConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_AccessibilityConfiguration.setConfigJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_AccessibilityConfiguration_setConfigJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_AccessibilityConfiguration$Action = function (showFocusIn, showSkipToContentIn, langIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_AccessibilityConfiguration$vars"))());
vars.value.showFocusInLocal = showFocusIn;
vars.value.showSkipToContentInLocal = showSkipToContentIn;
vars.value.langInLocal = langIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:wjS927+CN0i5kgkU+vhqLw:/ClientActionFlows.wjS927+CN0i5kgkU+vhqLw:5Uc8tR1NSOmQvYtAI4Iz2A", "OutSystemsUI", "DEPRECATED_AccessibilityConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Cs9+PccrmUGziPOmvs2rpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OEiKilqUO0uT5hWyOOJlmQ", callContext.id);
// Action used to configure Accessibility options, live the visibility of the focus otline, the "Skip to content" link and to set the html language.
//
//This is present by default on OutSystems UI Layouts.
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_AccessibilityConfiguration_setConfigJS, "setConfig", "DEPRECATED_AccessibilityConfiguration", {
ShowFocus: OS.DataConversion.JSNodeParamConverter.to(vars.value.showFocusInLocal, OS.Types.Boolean),
Lang: OS.DataConversion.JSNodeParamConverter.to(vars.value.langInLocal, OS.Types.Text),
ShowSkipToContent: OS.DataConversion.JSNodeParamConverter.to(vars.value.showSkipToContentInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:z_+mjvAMDkez19Ek6ar9Fw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:wjS927+CN0i5kgkU+vhqLw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_AccessibilityConfiguration$vars", [{
name: "ShowFocus",
attrName: "showFocusInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ShowSkipToContent",
attrName: "showSkipToContentInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Lang",
attrName: "langInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_AccessibilityConfiguration$Action = function (showFocusIn, showSkipToContentIn, langIn) {
showFocusIn = (showFocusIn === undefined) ? false : showFocusIn;
showSkipToContentIn = (showSkipToContentIn === undefined) ? false : showSkipToContentIn;
langIn = (langIn === undefined) ? "" : langIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_AccessibilityConfiguration$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(showFocusIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(showSkipToContentIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(langIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_AccessibilityConfiguration.setConfigJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.querySelector('.skip-nav');
var layout = document.querySelector('.layout');

if(elem) {
    elem.setAttribute('data-showSkipContent', $parameters.ShowSkipToContent);
}

if(layout && $parameters.ShowFocus) {
    document.body.classList.add('is-focusable');   
    layout.classList.add('has-accessible-features');   
}

if($parameters.Lang !== "") {
    document.documentElement.setAttribute('lang', $parameters.Lang);
}
};
});

define("OutSystemsUI.controller$DEPRECATED_CarouselDisableSwipe", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_CarouselDisableSwipe.AddClassNoSwipeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_CarouselDisableSwipe_AddClassNoSwipeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_CarouselDisableSwipe$Action = function (carouselIDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_CarouselDisableSwipe$vars"))());
vars.value.carouselIDInLocal = carouselIDIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:SAFhfi45BU6VeqYFazfRRg:/ClientActionFlows.SAFhfi45BU6VeqYFazfRRg:fDWCCW4VjIVrZVjonR6ZyQ", "OutSystemsUI", "DEPRECATED_CarouselDisableSwipe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X0580Gn280imj6vUP3PEwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EA76gLu_y0WEapiQoFodxg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_CarouselDisableSwipe_AddClassNoSwipeJS, "AddClassNoSwipe", "DEPRECATED_CarouselDisableSwipe", {
CarouselID: OS.DataConversion.JSNodeParamConverter.to(vars.value.carouselIDInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PqihoXYUMkKbUMgD_UvU5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:SAFhfi45BU6VeqYFazfRRg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_CarouselDisableSwipe$vars", [{
name: "CarouselID",
attrName: "carouselIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_CarouselDisableSwipe$Action = function (carouselIDIn) {
carouselIDIn = (carouselIDIn === undefined) ? "" : carouselIDIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_CarouselDisableSwipe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(carouselIDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_CarouselDisableSwipe.AddClassNoSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.CarouselID).querySelector('.carousel');

if(elem) {
    elem.classList.add('no-swipe');
}
};
});

define("OutSystemsUI.controller$DEPRECATED_CarouselGoTo", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_CarouselGoTo.CallGoToActionJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_CarouselGoTo_CallGoToActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_CarouselGoTo$Action = function (widgetIdIn, targetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_CarouselGoTo$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.targetInLocal = targetIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Z5AAPK6NwEC74YLVRyAFLQ:/ClientActionFlows.Z5AAPK6NwEC74YLVRyAFLQ:zRIMpPItO3bQCO8jBy4CBQ", "OutSystemsUI", "DEPRECATED_CarouselGoTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g8Q4KSOw+kesTnGRUDg74Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dBRtEJ1oXUeFmuSC_CWu9Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_CarouselGoTo_CallGoToActionJS, "CallGoToAction", "DEPRECATED_CarouselGoTo", {
Target: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetInLocal, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mDXwbVp8BE+5mlkO+9_7nQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Z5AAPK6NwEC74YLVRyAFLQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_CarouselGoTo$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Target",
attrName: "targetInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_CarouselGoTo$Action = function (widgetIdIn, targetIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
targetIn = (targetIn === undefined) ? 0 : targetIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_CarouselGoTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(targetIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_CarouselGoTo.CallGoToActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').goto($parameters.Target);
};
});

define("OutSystemsUI.controller$DEPRECATED_CarouselNext", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_CarouselNext.CallNextActionJS", "OutSystemsUI.controller$IsRTL"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_CarouselNext_CallNextActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_CarouselNext$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_CarouselNext$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:s3o2xkm11kWBC1DM24ANFA:/ClientActionFlows.s3o2xkm11kWBC1DM24ANFA:v7uuiIfFwlb8dXtbUa8x8A", "OutSystemsUI", "DEPRECATED_CarouselNext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UlUeFYUFyk6CQLCV7HGwwg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:53BVu_67OUOpcv5eedIWzw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_CarouselNext_CallNextActionJS, "CallNextAction", "DEPRECATED_CarouselNext", {
IsRTL: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isRTL$Action(callContext).isRTLOut;
}, OS.Types.Boolean, callContext.id), OS.Types.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CfcmfBv7PE6zw+XQkz6LhQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:s3o2xkm11kWBC1DM24ANFA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_CarouselNext$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_CarouselNext$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_CarouselNext$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_CarouselNext.CallNextActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;
if($parameters.IsRTL){
    element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').previous();
} else{
    element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').next();
}

};
});

define("OutSystemsUI.controller$DEPRECATED_CarouselPrevious", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_CarouselPrevious.CallPreviousActionJS", "OutSystemsUI.controller$IsRTL"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_CarouselPrevious_CallPreviousActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_CarouselPrevious$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_CarouselPrevious$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:CffDzLB_b06BcWvnmqj02w:/ClientActionFlows.CffDzLB_b06BcWvnmqj02w:4BoDCGorfiKi49WNfQmIKw", "OutSystemsUI", "DEPRECATED_CarouselPrevious", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iABzbqhH5EG01r7OLD2N+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mfJ8xdFCcEm0t1Gi9snU+Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_CarouselPrevious_CallPreviousActionJS, "CallPreviousAction", "DEPRECATED_CarouselPrevious", {
IsRTL: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isRTL$Action(callContext).isRTLOut;
}, OS.Types.Boolean, callContext.id), OS.Types.Boolean),
IdCarousel: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nFHHZdm9Fkmgy91n4K5uSA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CffDzLB_b06BcWvnmqj02w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_CarouselPrevious$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_CarouselPrevious$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_CarouselPrevious$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_CarouselPrevious.CallPreviousActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

if($parameters.IsRTL){
    element = document.getElementById($parameters.IdCarousel).querySelector('.carousel-container-content').next();
} else{
    element = document.getElementById($parameters.IdCarousel).querySelector('.carousel-container-content').previous();
}

};
});

define("OutSystemsUI.controller$DEPRECATED_CarouselUpdate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_CarouselUpdate.CallUpdateActionJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_CarouselUpdate_CallUpdateActionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_CarouselUpdate$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_CarouselUpdate$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Q9gj08KLHEKuYcqlD371lQ:/ClientActionFlows.Q9gj08KLHEKuYcqlD371lQ:6hjpGd8saFxwojiVIjMNmA", "OutSystemsUI", "DEPRECATED_CarouselUpdate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FUpJO9Gw5US7hEcadm2mpQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LrnR4YHuPEaFFAmbmSTz1Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_CarouselUpdate_CallUpdateActionJS, "CallUpdateAction", "DEPRECATED_CarouselUpdate", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PMNXmASQ7EWX0M3vuqW2uA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Q9gj08KLHEKuYcqlD371lQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_CarouselUpdate$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_CarouselUpdate$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_CarouselUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_CarouselUpdate.CallUpdateActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.carousel-container-content').updateCarousel();
};
});

define("OutSystemsUI.controller$DEPRECATED_GetBrowser", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_GetBrowser$Action = function (userAgentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_GetBrowser$vars"))());
vars.value.userAgentInLocal = userAgentIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_GetBrowser$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:dV1fY48Rm0muX7QLAz_Zeg:/ClientActionFlows.dV1fY48Rm0muX7QLAz_Zeg:dbMc47PlVpOaF636LRuKBA", "OutSystemsUI", "DEPRECATED_GetBrowser", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:enpNVcI00UmoatR0IGRzJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LNyF1J3OzkyRhjunPMh7dA", callContext.id);
// UserAgent = ToLower
vars.value.userAgentInLocal = OS.BuiltinFunctions.toLower(vars.value.userAgentInLocal);
// DetectBrowser
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e8RM0whGOUeEDg0Sr0uuNA", callContext.id) && (OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "edge", 0, false, false) > -1))) {
// Edge
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RMQogNJuREukkmWOqCDqLg", callContext.id);
// Browser = "edge"
outVars.value.browserOut = "edge";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tJLANBnAAECuLWQLmQUMQA", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "firefox", 0, false, false) > -1)) {
// Firefox
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dXew8pG+N0ubvxq9eJvk0Q", callContext.id);
// Browser = "firefox"
outVars.value.browserOut = "firefox";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tJLANBnAAECuLWQLmQUMQA", callContext.id);
} else {
if(((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "chrome", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "crios", 0, false, false) > -1))) {
// Chrome
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VRQ0rVhJfU62Aj6UOQjqOg", callContext.id);
// Browser = "chrome"
outVars.value.browserOut = "chrome";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tJLANBnAAECuLWQLmQUMQA", callContext.id);
} else {
if(((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "safari", 0, false, false) > -1) && (OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "chrome", 0, false, false) <= -1))) {
// Safari
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0uBexWpwIUOBEZnWA1YVWw", callContext.id);
// Browser = "safari"
outVars.value.browserOut = "safari";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tJLANBnAAECuLWQLmQUMQA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tJLANBnAAECuLWQLmQUMQA", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:dV1fY48Rm0muX7QLAz_Zeg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_GetBrowser$vars", [{
name: "UserAgent",
attrName: "userAgentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_GetBrowser$outVars", [{
name: "Browser",
attrName: "browserOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_GetBrowser$Action = function (userAgentIn) {
userAgentIn = (userAgentIn === undefined) ? "" : userAgentIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_GetBrowser$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(userAgentIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Browser: OS.DataConversion.JSNodeParamConverter.to(actionResults.browserOut, OS.Types.Text)
};
});
};
});

define("OutSystemsUI.controller$DEPRECATED_LayoutReadyMobile", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$HasMasterDetail", "OutSystemsUI.controller$ECTCall", "OutSystemsUI.controller$iPhoneXPreview", "OutSystemsUI.controller$FixInputs", "OutSystemsUI.controller$DeviceDetection", "OutSystemsUI.controller$HideHeader", "OutSystemsUI.controller$IsRunningAsPWA"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_LayoutReadyMobile$Action = function (hideHeaderOnScrollIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_LayoutReadyMobile$vars"))());
vars.value.hideHeaderOnScrollInLocal = hideHeaderOnScrollIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:gMQKaTC8KUWmUEZZexJTUA:/ClientActionFlows.gMQKaTC8KUWmUEZZexJTUA:2i2PAGq97oP44SxoF21y2g", "OutSystemsUI", "DEPRECATED_LayoutReadyMobile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nv6CGv91ZEC553LJXqmGZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vBVwkeGXhUWn8nVijd41Fg", callContext.id);
// Execute Action: DeviceDetection
OutSystemsUIController.default.deviceDetection$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e3SDeDlqWUuEd2GHxB8F_w", callContext.id);
// Execute Action: iPhoneXPreview
OutSystemsUIController.default.iPhoneXPreview$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E7sEqVzT0ECAYxEv56NPlw", callContext.id);
// Execute Action: HideHeader
OutSystemsUIController.default.hideHeader$Action(vars.value.hideHeaderOnScrollInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ly3djGDLQ0eI92tAbDMTAw", callContext.id);
// Execute Action: FixInputs
OutSystemsUIController.default.fixInputs$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YAbyNvISkkOmjdeqPvPIPQ", callContext.id);
// Execute Action: HasMasterDetail
OutSystemsUIController.default.hasMasterDetail$Action(callContext);
// isPWA?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HsxguUD1z0i2pq1+B4miHg", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isRunningAsPWA$Action(callContext).isStandaloneOut;
}, OS.Types.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IiwkQ+FNyEmosnFoHFcnkw", callContext.id);
// Execute Action: ECTCall
OutSystemsUIController.default.eCTCall$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xz_lS09TxkawPtD9+erq_A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xz_lS09TxkawPtD9+erq_A", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:gMQKaTC8KUWmUEZZexJTUA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_LayoutReadyMobile$vars", [{
name: "HideHeaderOnScroll",
attrName: "hideHeaderOnScrollInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_LayoutReadyMobile$Action = function (hideHeaderOnScrollIn) {
hideHeaderOnScrollIn = (hideHeaderOnScrollIn === undefined) ? false : hideHeaderOnScrollIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_LayoutReadyMobile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hideHeaderOnScrollIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsUI.controller$DEPRECATED_RangeSliderReset", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_RangeSliderReset.RangeSliderResetJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_RangeSliderReset_RangeSliderResetJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_RangeSliderReset$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_RangeSliderReset$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:nSEKzSSq8E+ZVD4SzCdDcg:/ClientActionFlows.nSEKzSSq8E+ZVD4SzCdDcg:uneMh_BU4yxMOFb4dF0hpQ", "OutSystemsUI", "DEPRECATED_RangeSliderReset", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wYUkLAEJj0Gte0iUmjILMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jEqMIxUlL0mR8zD8JhDQ6w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_RangeSliderReset_RangeSliderResetJS, "RangeSliderReset", "DEPRECATED_RangeSliderReset", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DyRuU0MxU0GLR23XRBB7Zg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:nSEKzSSq8E+ZVD4SzCdDcg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_RangeSliderReset$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_RangeSliderReset$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_RangeSliderReset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_RangeSliderReset.RangeSliderResetJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var slider = document.querySelector('#' + $parameters.WidgetId + ' .range-slider > div');

// Check if element exists before applying the reset on slider
if(slider && slider.noUiSlider){
    slider.noUiSlider.reset();
}
};
});

define("OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems.SetActiveJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_SetActiveMenuItems_SetActiveJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_SetActiveMenuItems$Action = function (activeItemIn, activeSubItemIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_SetActiveMenuItems$vars"))());
vars.value.activeItemInLocal = activeItemIn;
vars.value.activeSubItemInLocal = activeSubItemIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uHyStiD+ZkKHYmlhJmLnAQ:/ClientActionFlows.uHyStiD+ZkKHYmlhJmLnAQ:h32nPjVK2YqIsA3mlYQvfA", "OutSystemsUI", "DEPRECATED_SetActiveMenuItems", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vYg7WslDaUaY2sGvqQla_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uauiLqkNdU2Vr4TlJvBStA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_SetActiveMenuItems_SetActiveJS, "SetActive", "DEPRECATED_SetActiveMenuItems", {
ActiveItem: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeItemInLocal, OS.Types.Integer),
ActiveSubItem: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeSubItemInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xlMASpfuCES1HtjwT6+7QQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uHyStiD+ZkKHYmlhJmLnAQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_SetActiveMenuItems$vars", [{
name: "ActiveItem",
attrName: "activeItemInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return -1;
}
}, {
name: "ActiveSubItem",
attrName: "activeSubItemInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return -1;
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_SetActiveMenuItems$Action = function (activeItemIn, activeSubItemIn) {
activeItemIn = (activeItemIn === undefined) ? -1 : activeItemIn;
activeSubItemIn = (activeSubItemIn === undefined) ? -1 : activeSubItemIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_SetActiveMenuItems$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(activeItemIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(activeSubItemIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems.SetActiveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var appMenuLinks = document.querySelector('.app-menu-links');

if(appMenuLinks) {
    var activeLinkBlock = appMenuLinks.children[$parameters.ActiveItem];
    
    if(activeLinkBlock) {
        activeLinkBlock.classList.add("active");
        var activeSubMenu = activeLinkBlock.querySelector('.submenu');
        
        if(activeSubMenu) {
            activeSubMenu.classList.add("active");
            var activeSubMenuItem = activeSubMenu.querySelector('.submenu-items').children[$parameters.ActiveSubItem];
            
            if(activeSubMenuItem) {
                activeSubMenuItem.classList.add("active");
            }
        }
    }
    
}
};
});

define("OutSystemsUI.controller$DEPRECATED_SetMenuListeners", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_SetMenuListeners.setEventListenerJS", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetMenuAttributes"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_SetMenuListeners_setEventListenerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_SetMenuListeners$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:CkiPP8+8i0mkzflRrnuYLw:/ClientActionFlows.CkiPP8+8i0mkzflRrnuYLw:U08ApqGFEa1i84JerP0yWQ", "OutSystemsUI", "DEPRECATED_SetMenuListeners", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dL6z+3ZDe0qLFkk_AScR2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wbo+S7HMhUadZf94GvsqTg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_SetMenuListeners_setEventListenerJS, "setEventListener", "DEPRECATED_SetMenuListeners", null, function ($parameters) {
}, {
ToggleSideMenu: OutSystemsUIController.default.clientActionProxies.toggleSideMenu$Action,
SetMenuAttributes: OutSystemsUIController.default.clientActionProxies.setMenuAttributes$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:24n1aES+60yMRWyK72zG7Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:CkiPP8+8i0mkzflRrnuYLw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.dEPRECATED_SetMenuListeners$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_SetMenuListeners$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_SetMenuListeners.setEventListenerJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.layout');
var menu = document.querySelector('.app-menu-content');

if(layout && menu) {
    
    var isTopMenuMobile;
    var isVisibleMobile;
    var isExpanded = layout.classList.contains('menu-visible');
    var isOverlay = layout.classList.contains('aside-overlay');
    var isExpandable = layout.classList.contains('aside-expandable');
    
    var menuLinks = menu.querySelector('.app-menu-links');

    var menuOnKeypress = function(e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
        var isEscapedPressed = (e.key === 'Escape' || e.keyCode === 27);
        var isShiftKey = e.shiftKey;
        var focusableEls = menu.querySelectorAll('a[href]:not([disabled]),[tabindex="0"], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]),input[type="submit"]:not([disabled]), select:not([disabled])');
        var firstFocusableEl = focusableEls[0]; 
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var isExpandableDesktop = document.querySelector('.desktop .active-screen .layout-side.aside-expandable') || document.querySelector('.tablet.landscape .active-screen .layout-side.aside-expandable');
        
        if(!isTabPressed && !isEscapedPressed) {
            return;
        }
    
        isExpanded = layout.classList.contains('menu-visible');
        
        //If esc, Close Menu
        if(isExpanded && isEscapedPressed) {
            e.preventDefault();
            e.stopPropagation();
            $actions.ToggleSideMenu();
        }
        
        if (!isExpandableDesktop) {
            if (isShiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }     
        }
        
    };
    
    // Invoking setTimeout to schedule the callback to be run asynchronously
    setTimeout(function(){
        isTopMenuMobile = document.querySelector('.tablet .active-screen .layout-top') || document.querySelector('.phone .active-screen .layout-top');
        isVisibleMobile = document.querySelector('.tablet.portrait .active-screen .layout-side.aside-visible') || document.querySelector('.phone .active-screen .layout-side.aside-visible');
        
        if(isOverlay || isExpandable || isTopMenuMobile || isVisibleMobile) {
            menu.addEventListener('keydown', menuOnKeypress);
            $actions.SetMenuAttributes();
        }
    }, 0);
    
    if(menuLinks){
        menuLinks = menuLinks.children;
        
        // Add role menuitem to all links on menu
        for(var i = 0; i < menuLinks.length; i++) {
            if(!menuLinks[i].hasAttribute("role") && menuLinks[i].tagName === "A") {      
                menuLinks[i].setAttribute("role", "menuitem");
            }
        }  
        
    }
  
}



};
});

define("OutSystemsUI.controller$DEPRECATED_SidebarToggle", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_SidebarToggle.ToggleSidebarJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_SidebarToggle_ToggleSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_SidebarToggle$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_SidebarToggle$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qit9KmBqB0mQXaPFQSKnRg:/ClientActionFlows.qit9KmBqB0mQXaPFQSKnRg:4ttlM8YvF4tH2o0pIbmLfw", "OutSystemsUI", "DEPRECATED_SidebarToggle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8esdRllSMUqw9Hqhwp+AdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jaHB+obidUu+wcGD9DdGOw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_SidebarToggle_ToggleSidebarJS, "ToggleSidebar", "DEPRECATED_SidebarToggle", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JRPe6doJ_kS6syI0E_xQkA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qit9KmBqB0mQXaPFQSKnRg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_SidebarToggle$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_SidebarToggle$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_SidebarToggle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_SidebarToggle.ToggleSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// toggle Sidebar

var el;
var isOpen;

if($parameters.WidgetId !== "") {
    el = document.querySelector("#" + $parameters.WidgetId + " .sidebar");
}

if(el !== null) {
    isOpen = el.classList.contains("sidebar-open");
    
    if(isOpen) {
        el.classList.remove("sidebar-open");
    } else {
        el.classList.add("sidebar-open");
    }
}
};
});

define("OutSystemsUI.controller$DEPRECATED_UpdateAccordion", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DEPRECATED_UpdateAccordion.UpdateAccordionJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DEPRECATED_UpdateAccordion_UpdateAccordionJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dEPRECATED_UpdateAccordion$Action = function (widgetIdIn, multipleItemsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DEPRECATED_UpdateAccordion$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.multipleItemsInLocal = multipleItemsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:sur94UMpbkO2Xl28KlBPqQ:/ClientActionFlows.sur94UMpbkO2Xl28KlBPqQ:rJChzKz5c5Ytih0BHNuqwQ", "OutSystemsUI", "DEPRECATED_UpdateAccordion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:olaDm+5jIkmxToCysstNsA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ulTTWWisZE6vnyND5_2EsQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DEPRECATED_UpdateAccordion_UpdateAccordionJS, "UpdateAccordion", "DEPRECATED_UpdateAccordion", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
MultipleItems: OS.DataConversion.JSNodeParamConverter.to(vars.value.multipleItemsInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CefwQWwUokSTgwCV2dpPAQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:sur94UMpbkO2Xl28KlBPqQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DEPRECATED_UpdateAccordion$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MultipleItems",
attrName: "multipleItemsInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.dEPRECATED_UpdateAccordion$Action = function (widgetIdIn, multipleItemsIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
multipleItemsIn = (multipleItemsIn === undefined) ? false : multipleItemsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dEPRECATED_UpdateAccordion$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(multipleItemsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DEPRECATED_UpdateAccordion.UpdateAccordionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);
var elementNodes = element.querySelectorAll('.section-expandable');

// Check if exist elements inside accordion
if(elementNodes.length > 0){
    for(i = 0; i < elementNodes.length; i++){
        elementNodes[i].updateAccordion($parameters.MultipleItems);
    } 
}

};
});

define("OutSystemsUI.controller$DeviceDetection", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DeviceDetection.AddNativeClassesJS", "OutSystemsUI.controller$DeviceDetection.AddWebClassesJS", "OutSystemsUI.controller$GetBrowser", "OutSystemsUI.controller$GetOS", "OutSystemsUI.controller$GetIsTouch"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DeviceDetection_AddNativeClassesJS, OutSystemsUI_controller_DeviceDetection_AddWebClassesJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.deviceDetection$Action = function (isWebAppIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DeviceDetection$vars"))());
vars.value.isWebAppInLocal = isWebAppIn;
var getBrowserVar = new OS.DataTypes.VariableHolder();
var getOSVar = new OS.DataTypes.VariableHolder();
var getIsTouchVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getBrowserVar = getBrowserVar;
varBag.getOSVar = getOSVar;
varBag.getIsTouchVar = getIsTouchVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OOQHk+EK0UyAa1lqT_YN4w:/ClientActionFlows.OOQHk+EK0UyAa1lqT_YN4w:yQylQkjMcTZG6rvMS+Fujw", "OutSystemsUI", "DeviceDetection", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TteqoKGApkaHPTQdW6ZGzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SO6yYH8njUOWeZhQo6DNmQ", callContext.id);
// Execute Action: GetOS
getOSVar.value = OutSystemsUIController.default.getOS$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.getUserAgent()), callContext);

if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ixUEhPBrC0GC0rKi0G8GgQ", callContext.id) && vars.value.isWebAppInLocal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:802dRsv2ZkmMTp_gvSZjQg", callContext.id);
// Execute Action: GetBrowser
getBrowserVar.value = OutSystemsUIController.default.getBrowser$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5WQ6+EOI20qlKf+sVTvE1A", callContext.id);
// Execute Action: GetIsTouch
getIsTouchVar.value = OutSystemsUIController.default.getIsTouch$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FDjUnNglU0GGZuMXhNjSKQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DeviceDetection_AddWebClassesJS, "AddWebClasses", "DeviceDetection", {
IsTouch: OS.DataConversion.JSNodeParamConverter.to(getIsTouchVar.value.isTouchOut, OS.Types.Boolean),
Browser: OS.DataConversion.JSNodeParamConverter.to(getBrowserVar.value.browserOut, OS.Types.Text),
OS: OS.DataConversion.JSNodeParamConverter.to(getOSVar.value.oSOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RZidRamT0W1nSDxrR7HUQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RWt+kXHuzUSxVy0cZJHDGw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DeviceDetection_AddNativeClassesJS, "AddNativeClasses", "DeviceDetection", {
OS: OS.DataConversion.JSNodeParamConverter.to(getOSVar.value.oSOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RZidRamT0W1nSDxrR7HUQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OOQHk+EK0UyAa1lqT_YN4w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DeviceDetection$vars", [{
name: "IsWebApp",
attrName: "isWebAppInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.deviceDetection$Action = function (isWebAppIn) {
isWebAppIn = (isWebAppIn === undefined) ? false : isWebAppIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.deviceDetection$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isWebAppIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DeviceDetection.AddNativeClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.querySelector('body');

if(body) {
    if($parameters.OS !== "") {
        body.classList.add($parameters.OS);    
    }
    
    // Detect IpadPro to add desktop class
    if(!body.classList.contains('phone') && !body.classList.contains('tablet')) {
        body.classList.add('desktop');
    }
    
    if(body.classList.contains('tablet') || body.classList.contains('desktop')) {
        window.addEventListener('orientationchange', function(){
            
            setTimeout(function(){
                if(!body.classList.contains('phone') && !body.classList.contains('tablet')) {
                    body.classList.add('desktop');
                } else if(body.classList.contains('desktop') && body.classList.contains('tablet')) {
                    body.classList.remove('desktop');
                }
            }, 500);
            
        });
    }
}

};
});
define("OutSystemsUI.controller$DeviceDetection.AddWebClassesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.querySelector('body');

if($parameters.Browser !== "") {
    body.classList.add($parameters.Browser);
}

if($parameters.OS !== "") {
    body.classList.add($parameters.OS);    
}

if($parameters.IsTouch) {
    body.classList.add('is--touch');
}
};
});

define("OutSystemsUI.controller$DropdownChangeBooleanProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownChangeBooleanProp.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownChangeBooleanProp_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownChangeBooleanProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:VpYwsq6V_EaQJ+NsQiw2MQ:/ClientActionFlows.VpYwsq6V_EaQJ+NsQiw2MQ:UVqvUxcIYSjufcLKWaqdqg", "OutSystemsUI", "DropdownChangeBooleanProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+fvKZ06tSkK4bHfI1o+jxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CWCya8BAbEu2slcao+21qQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownChangeBooleanProp_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "DropdownChangeBooleanProp", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zzC2H4GTL063Dgka9Pt7nw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:VpYwsq6V_EaQJ+NsQiw2MQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownChangeBooleanProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownChangeBooleanProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownChangeBooleanProp.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DropdownChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:MU419xEbKUe3AmuNGg_wHg:/ClientActionFlows.MU419xEbKUe3AmuNGg_wHg:ldN0T4wTRQVa+NFk9x3q9A", "OutSystemsUI", "DropdownChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oyFJ4dbZmEWgG2h1Y2vq+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8EyPKQuca06SYiGmRU1TMA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "DropdownChangeTextProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:z311_vdR_0aXZFigD7DYgA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:MU419xEbKUe3AmuNGg_wHg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$DropdownClear", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownClear.ClearDropdownJS", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownClear_ClearDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownClear$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClear$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
var clearDropdownJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClear$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.clearDropdownJSResult = clearDropdownJSResult;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6sUJiKYcdUiNxgj9D4oOpw:/ClientActionFlows.6sUJiKYcdUiNxgj9D4oOpw:_HaC4rwe5mIfV7m36oBrHw", "OutSystemsUI", "DropdownClear", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2C3jsk37jkGwjbjhJ54R7w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WFhzUYgav06WlTXA7Kx1IA", callContext.id);
// Trigger the API method that will clear the selected valued from the given pattern ID.
clearDropdownJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownClear_ClearDropdownJS, "ClearDropdown", "DropdownClear", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClear$clearDropdownJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NjJ2pShHg0KGusxavLmfxw", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(clearDropdownJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pDaoLiFvgkm5rLnIY18FHw", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pDaoLiFvgkm5rLnIY18FHw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pDaoLiFvgkm5rLnIY18FHw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+DkMg0sOxU+NrG1KT9ZSqA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6sUJiKYcdUiNxgj9D4oOpw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClear$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClear$clearDropdownJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClear$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ErrorMessageRec();
},
complexType: OutSystemsUIModel.ErrorMessageRec
}]);
OutSystemsUIController.default.clientActionProxies.dropdownClear$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownClear$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});
define("OutSystemsUI.controller$DropdownClear.ClearDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.Clear($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownClearValidation", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownClearValidation.ValidationDropdownJS", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownClearValidation_ValidationDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownClearValidation$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClearValidation$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
var validationDropdownJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClearValidation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validationDropdownJSResult = validationDropdownJSResult;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:r2LVGF0gTk2QJHL5f8jtvA:/ClientActionFlows.r2LVGF0gTk2QJHL5f8jtvA:ayI9RtaI3xBWqr5luy9t_g", "OutSystemsUI", "DropdownClearValidation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TG5GFE0pTUu7KWK2USbJ5g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XupgQde8cUCtwwpmCmWNew", callContext.id);
// Trigger the API method that will set the validation status for the given Dropdown ID.
validationDropdownJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownClearValidation_ValidationDropdownJS, "ValidationDropdown", "DropdownClearValidation", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownClearValidation$validationDropdownJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nrlLS92KfEeOtV+wwRaeOQ", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validationDropdownJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1TL3mm9meU2v7tIFviSQTw", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1TL3mm9meU2v7tIFviSQTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1TL3mm9meU2v7tIFviSQTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XQ0tfnhzyUiX9ZQWfpFc5g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:r2LVGF0gTk2QJHL5f8jtvA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClearValidation$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClearValidation$validationDropdownJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownClearValidation$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ErrorMessageRec();
},
complexType: OutSystemsUIModel.ErrorMessageRec
}]);
OutSystemsUIController.default.clientActionProxies.dropdownClearValidation$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownClearValidation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});
define("OutSystemsUI.controller$DropdownClearValidation.ValidationDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.SetValidation($parameters.UniqueId, true, '');
};
});

define("OutSystemsUI.controller$DropdownCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownCreate.CreateDropdownJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownCreate_CreateDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownCreate$Action = function (uniqueIdIn, modeIn, providerIn, internalConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.modeInLocal = modeIn;
vars.value.providerInLocal = providerIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:UK267ycLLk2GBwu7GMyd0w:/ClientActionFlows.UK267ycLLk2GBwu7GMyd0w:RHAseGCf2lXGI3j5Sif3Mw", "OutSystemsUI", "DropdownCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jcCArarLxkaxcnD_+Xzt_Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yOweKhcgHEC68uxLxcmgYg", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownCreate_CreateDropdownJS, "CreateDropdown", "DropdownCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text),
Mode: OS.DataConversion.JSNodeParamConverter.to(vars.value.modeInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mAiv41qz5kOP7w_CXP6q_w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:UK267ycLLk2GBwu7GMyd0w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Mode",
attrName: "modeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownCreate$Action = function (uniqueIdIn, modeIn, providerIn, internalConfigsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
modeIn = (modeIn === undefined) ? "" : modeIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), modeIn, providerIn, OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownCreate.CreateDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.Create($parameters.UniqueId, $parameters.Mode, $parameters.Provider, $parameters.Configs);
};
});

define("OutSystemsUI.controller$DropdownDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownDestroy.DestroyDropdownJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownDestroy_DestroyDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zLAqT9q5REWxvlshdPuq0Q:/ClientActionFlows.zLAqT9q5REWxvlshdPuq0Q:g67fcr8+aChLOlxXOXT7pA", "OutSystemsUI", "DropdownDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v+GXJfLA_0iHqLjSpCjDPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sXvWFNF6gU6sNLyg28d7FA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownDestroy_DestroyDropdownJS, "DestroyDropdown", "DropdownDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:w3F0mYx2Pk+yZxbGtLXmNQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zLAqT9q5REWxvlshdPuq0Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownDestroy.DestroyDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownDisable", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownDisable.DisableDropdownJS", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownDisable_DisableDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownDisable$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownDisable$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
var disableDropdownJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownDisable$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.disableDropdownJSResult = disableDropdownJSResult;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9B5x14n150mQVMcLQ3R2sA:/ClientActionFlows.9B5x14n150mQVMcLQ3R2sA:j_dcbjjTF4cLgudK8Nnytg", "OutSystemsUI", "DropdownDisable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3HxQSW5w2kKO8FnfsZ9rkA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QSdycfZs1kCl43Gv5izH_A", callContext.id);
// Trigger the API method that will set the given pattern id as Disabled.
disableDropdownJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownDisable_DisableDropdownJS, "DisableDropdown", "DropdownDisable", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownDisable$disableDropdownJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WnDDNVs+sEuA422Omzcg9Q", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(disableDropdownJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NBTaQcVsskiy0e7bA2mHkA", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NBTaQcVsskiy0e7bA2mHkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NBTaQcVsskiy0e7bA2mHkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Iabsae1XnUKVbHFUKx6SoQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9B5x14n150mQVMcLQ3R2sA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownDisable$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownDisable$disableDropdownJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownDisable$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ErrorMessageRec();
},
complexType: OutSystemsUIModel.ErrorMessageRec
}]);
OutSystemsUIController.default.clientActionProxies.dropdownDisable$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownDisable$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});
define("OutSystemsUI.controller$DropdownDisable.DisableDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.Disable($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownEnable", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownEnable.EnableDropdownJS", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownEnable_EnableDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownEnable$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownEnable$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
var enableDropdownJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownEnable$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.enableDropdownJSResult = enableDropdownJSResult;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:nRtgaHgZ+EKdiXs46OGlbw:/ClientActionFlows.nRtgaHgZ+EKdiXs46OGlbw:mx9Auz6w+WqRSk2HRuJ69A", "OutSystemsUI", "DropdownEnable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ekyQqZNTv0OfI2jbKPEhSQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hho8jTyTXkGID0kzfTmAXQ", callContext.id);
// Trigger the API method that will set the given pattern id as Enabled.
enableDropdownJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownEnable_EnableDropdownJS, "EnableDropdown", "DropdownEnable", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownEnable$enableDropdownJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eo3xYmeclEOcHbSC_ieoJw", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(enableDropdownJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lQGEmCiBw0ygUj+rJlcFag", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lQGEmCiBw0ygUj+rJlcFag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lQGEmCiBw0ygUj+rJlcFag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0AHp6+9RS0uQhCttDTdbHQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:nRtgaHgZ+EKdiXs46OGlbw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownEnable$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownEnable$enableDropdownJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownEnable$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ErrorMessageRec();
},
complexType: OutSystemsUIModel.ErrorMessageRec
}]);
OutSystemsUIController.default.clientActionProxies.dropdownEnable$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownEnable$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});
define("OutSystemsUI.controller$DropdownEnable.EnableDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.Enable($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownGetSelectedValues", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownGetSelectedValues.GetSelectedValuesJS", "OutSystemsUI.model$DropdownOptionList", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownGetSelectedValues_GetSelectedValuesJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownGetSelectedValues$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
var getSelectedValuesJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeDropdownOptionVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.DropdownOptionList))());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSelectedValuesJSResult = getSelectedValuesJSResult;
varBag.jSONDeserializeDropdownOptionVar = jSONDeserializeDropdownOptionVar;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:s3pH_4xpgkCRSu4C0AO_0Q:/ClientActionFlows.s3pH_4xpgkCRSu4C0AO_0Q:qojGheG_OldaJvxQAaKtkA", "OutSystemsUI", "DropdownGetSelectedValues", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9Fg7XOrzg0KURkpXcQg34A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:S7+BoHXlBkK+eWD7+5OI_w", callContext.id);
// Trigger the API method that will get the selected values.
getSelectedValuesJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownGetSelectedValues_GetSelectedValuesJS, "GetSelectedValues", "DropdownGetSelectedValues", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$getSelectedValuesJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KPSFGMvK0kqQ5o83ibb7Ng", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getSelectedValuesJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5RbOFsLDb023jQPNfMW5gw", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5RbOFsLDb023jQPNfMW5gw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5RbOFsLDb023jQPNfMW5gw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
// HasSelectedValues
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v2CsqmDZNk+jlFjj2WhQng", callContext.id) && (((jSONDeserializeErrorMessageVar.value.dataOut.valueAttr) !== ("")) && (jSONDeserializeErrorMessageVar.value.dataOut.codeAttr === "200")))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aHHBF9UtQUi60vqEscYUMQ", callContext.id);
// JSON Deserialize: JSONDeserializeDropdownOption
jSONDeserializeDropdownOptionVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(jSONDeserializeErrorMessageVar.value.dataOut.valueAttr, OutSystemsUIModel.DropdownOptionList, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nKWjTkwXQUqY8HndjuFFaw", callContext.id);
// SelectedOptionList = JSONDeserializeDropdownOption.Data
outVars.value.selectedOptionListOut = jSONDeserializeDropdownOptionVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Zjj6eRN9LEq4j8V8rF4Mgg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Zjj6eRN9LEq4j8V8rF4Mgg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:s3pH_4xpgkCRSu4C0AO_0Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$getSelectedValuesJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownGetSelectedValues$outVars", [{
name: "SelectedOptionList",
attrName: "selectedOptionListOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OutSystemsUIModel.DropdownOptionList();
},
complexType: OutSystemsUIModel.DropdownOptionList
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.ErrorMessageRec();
},
complexType: OutSystemsUIModel.ErrorMessageRec
}]);
OutSystemsUIController.default.clientActionProxies.dropdownGetSelectedValues$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownGetSelectedValues$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SelectedOptionList: actionResults.selectedOptionListOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});
define("OutSystemsUI.controller$DropdownGetSelectedValues.GetSelectedValuesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.GetSelectedValues($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownInitialize.InitializeDropdownJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownInitialize_InitializeDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+qIK2Pa33EGh+pJM7btGag:/ClientActionFlows.+qIK2Pa33EGh+pJM7btGag:9jMdkR44Qc25U1W5K_EFLA", "OutSystemsUI", "DropdownInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KX_eAXshg0KOlSDlrF+TJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8KNjwkdWmkSI3qieAr0U2A", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownInitialize_InitializeDropdownJS, "InitializeDropdown", "DropdownInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SXW+fMc1jkiTD+nDmEBPMg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+qIK2Pa33EGh+pJM7btGag", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownInitialize.InitializeDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$DropdownNotValid", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownNotValid.ValidationDropdownJS", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownNotValid_ValidationDropdownJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownNotValid$Action = function (widgetIdIn, errorMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownNotValid$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.errorMessageInLocal = errorMessageIn;
var validationDropdownJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.ReturnMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownNotValid$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validationDropdownJSResult = validationDropdownJSResult;
varBag.jSONDeserializeErrorMessageVar = jSONDeserializeErrorMessageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Isqu3ObtRUGvjEzTJaoyOw:/ClientActionFlows.Isqu3ObtRUGvjEzTJaoyOw:E22Y2K7BPwUQhCL+k53uTA", "OutSystemsUI", "DropdownNotValid", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G4pFiUaDE0CDfMlf48qSdw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5+l2+PpVb0mVTBEO1pLB2w", callContext.id);
// Trigger the API method that will set the validation status for the given Dropdown ID.
validationDropdownJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownNotValid_ValidationDropdownJS, "ValidationDropdown", "DropdownNotValid", {
ValidationMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.errorMessageInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownNotValid$validationDropdownJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:J3IACBrP5USys5Gy3tThlw", callContext.id);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validationDropdownJSResult.value.responseJSONOut, OutSystemsUIModel.ReturnMessageRec, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BjVTGv_SuUeGvb41jHc5SQ", callContext.id);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EEyVQlKEMEWSfu00LhiqzA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Isqu3ObtRUGvjEzTJaoyOw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownNotValid$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownNotValid$validationDropdownJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownNotValid$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownNotValid$Action = function (widgetIdIn, errorMessageIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownNotValid$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$DropdownNotValid.ValidationDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.OSUI.Patterns.DropdownAPI.SetValidation($parameters.UniqueId, false, $parameters.ValidationMessage);
};
});

define("OutSystemsUI.controller$DropdownRegisterProviderCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$DropdownRegisterProviderCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_DropdownRegisterProviderCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.dropdownRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.DropdownRegisterProviderCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ybA42fKFsEi+gRcq8_XSeA:/ClientActionFlows.ybA42fKFsEi+gRcq8_XSeA:Uao_8qGDcEzk_gQDDB4fuQ", "OutSystemsUI", "DropdownRegisterProviderCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LBjYC6szEkSki0gDanjHNA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zB04ReuN+UmzfKqkcdi7Sg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_DropdownRegisterProviderCallback_RegisterCallbackJS, "RegisterCallback", "DropdownRegisterProviderCallback", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0pboHn4H70eciOxZkp+f4w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ybA42fKFsEi+gRcq8_XSeA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.DropdownRegisterProviderCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.dropdownRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.dropdownRegisterProviderCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$DropdownRegisterProviderCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.DropdownAPI.RegisterProviderCallback($parameters.UniqueId, $parameters.EventName, $parameters.Callback);
};
});

define("OutSystemsUI.controller$ECTCall", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ECTCall.InitECTJS", "OutSystemsUI.controller$GetECTURL"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ECTCall_InitECTJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.eCTCall$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:JQm1Wit7_EeqJznh4EqEmw:/ClientActionFlows.JQm1Wit7_EeqJznh4EqEmw:141UyBa_8lJgwarBAIE7Jg", "OutSystemsUI", "ECTCall", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mHckDcDGTkefbeqoxIZ3+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AZ_lAiT4PkqroKU27DpP1Q", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ECTCall_InitECTJS, "InitECT", "ECTCall", {
URL: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.getECTURL$Action(callContext).uRLOut;
}, OS.Types.Text, callContext.id), OS.Types.Text),
ModuleName: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getEntryEspaceName(), OS.Types.Text),
CurrentLocale: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getCurrentLocale(), OS.Types.Text),
UserId: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getUserId(), OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KUo1WCwkPE+5mz3TvPfI1g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:JQm1Wit7_EeqJznh4EqEmw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.eCTCall$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.eCTCall$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ECTCall.InitECTJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function createHTMLElement(block){
    var range = document.createRange();
    var documentFragment = range.createContextualFragment(block);
    
    // Removes the non existant Theme file
    if(documentFragment.querySelector('#ect_wtOutFeedbackDiv') !== null && documentFragment.querySelector('#ect_wtOutFeedbackDiv').childNodes[0].childNodes[0].href.includes('Theme')) {
        documentFragment.querySelector('#ect_wtOutFeedbackDiv').childNodes[0].childNodes[0].remove();
    }
    
    document.body.appendChild(documentFragment);
    
    var floating = document.querySelector('[data-block="Interaction.FloatingActions"]');

    if(floating){
        var elements = document.querySelectorAll('.ECT_FeedbackContainer div[class^="Feedback"]');
        elements.forEach(function(i){
           i.style.bottom = '100px';
           i.style.right = '35px';
        });
    }
    
}

var soapRequest = new XMLHttpRequest();
var soapBody = '<?xml version="1.0" encoding="utf-8"?>' +
                '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
                    '<soapenv:Body>' +
                        '<GetModernECT xmlns="http://www.outsystems.com"> <moduleName>' + $parameters.ModuleName + '</moduleName>  <userId>' + $parameters.UserId + '</userId>  <locale>' + $parameters.CurrentLocale + '</locale>  </GetModernECT>' +
                    '</soapenv:Body>' +
                '</soapenv:Envelope>';
var timeout = 2000;
                
                
soapRequest.open('POST', window.location.origin + $parameters.URL, true);

soapRequest.setRequestHeader('Content-Type', 'text/xml');
soapRequest.responseType = 'document';
soapRequest.timeout = timeout;

soapRequest.onload = function() {
    if (soapRequest.readyState === 4) {
        if (soapRequest.status === 200) {
            createHTMLElement(soapRequest.response.getElementsByTagName('GetModernECTResponse')[0].getElementsByTagName('html')[0].textContent);
            if(document.getElementById('ect_wtFeedbackInput') !== null) {
                document.getElementById('ect_wtFeedbackInput').setAttribute('onchange', '');
                document.getElementById('ect_wtFeedbackInput').setAttribute('onkeyup', '');
            }
        } else {
            console.error(soapRequest.statusText);
        }
    }
    
} 

soapRequest.send(soapBody);
};
});

define("OutSystemsUI.controller$EndOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$EndOfflineDataSync.TriggerSyncCompleteEventJS", "OutSystemsUI.controller$EndOfflineDataSync.TriggerSyncErrorEventJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_EndOfflineDataSync_TriggerSyncCompleteEventJS, OutSystemsUI_controller_EndOfflineDataSync_TriggerSyncErrorEventJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.endOfflineDataSync$Action = function (hasErrorIn, errorMessageIn, allowRetryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.EndOfflineDataSync$vars"))());
vars.value.hasErrorInLocal = hasErrorIn;
vars.value.errorMessageInLocal = errorMessageIn;
vars.value.allowRetryInLocal = allowRetryIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:AB+048wZeESjgZV4xG1UYg:/ClientActionFlows.AB+048wZeESjgZV4xG1UYg:nzzr3PCOOkTPkRQSPfTDjA", "OutSystemsUI", "EndOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vEmEoYJ_GUeCgNb_hSa5lQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ncGVGJ0owEmKLlIy4BaxiQ", callContext.id) && vars.value.hasErrorInLocal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iIqr4yohpki+TJEMODfuzQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_EndOfflineDataSync_TriggerSyncErrorEventJS, "TriggerSyncErrorEvent", "EndOfflineDataSync", {
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.errorMessageInLocal, OS.Types.Text),
AllowRetry: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowRetryInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b5IFu_KqQUCcrmTBRopVKw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v03QPIY87ECIHTsz5R0JNA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_EndOfflineDataSync_TriggerSyncCompleteEventJS, "TriggerSyncCompleteEvent", "EndOfflineDataSync", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b5IFu_KqQUCcrmTBRopVKw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:AB+048wZeESjgZV4xG1UYg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.EndOfflineDataSync$vars", [{
name: "HasError",
attrName: "hasErrorInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowRetry",
attrName: "allowRetryInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.endOfflineDataSync$Action = function (hasErrorIn, errorMessageIn, allowRetryIn) {
hasErrorIn = (hasErrorIn === undefined) ? false : hasErrorIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
allowRetryIn = (allowRetryIn === undefined) ? false : allowRetryIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.endOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hasErrorIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(allowRetryIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$EndOfflineDataSync.TriggerSyncCompleteEventJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.triggerSyncCompleteEvent();

};
});
define("OutSystemsUI.controller$EndOfflineDataSync.TriggerSyncErrorEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.triggerSyncErrorEvent($parameters.ErrorMessage, $parameters.AllowRetry);

};
});

define("OutSystemsUI.controller$FeedbackMessageClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FeedbackMessageClose.closeFeedbackMessageJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FeedbackMessageClose_closeFeedbackMessageJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.feedbackMessageClose$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:vy1eQyrsuUan5_Z_P27S8A:/ClientActionFlows.vy1eQyrsuUan5_Z_P27S8A:hOxKy5HJQwzm9R_+v7mOaQ", "OutSystemsUI", "FeedbackMessageClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cvboV7I1R0iF_GxvqynOHw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aP3W63E880Oz+FpnEt9gtw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FeedbackMessageClose_closeFeedbackMessageJS, "closeFeedbackMessage", "FeedbackMessageClose", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NERNA0DdZ0OzDPJ4F7LZyQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:vy1eQyrsuUan5_Z_P27S8A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.feedbackMessageClose$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.feedbackMessageClose$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FeedbackMessageClose.closeFeedbackMessageJS", [], function () {
return function ($actions, $roles, $public) {
$public.FeedbackMessage.closeFeedbackMessage();
};
});

define("OutSystemsUI.controller$FeedbackMessageShow", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FeedbackMessageShow.ShowFeedbackMessageJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FeedbackMessageShow_ShowFeedbackMessageJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.feedbackMessageShow$Action = function (messageIn, messageTypeIn, encodedHTMLIn, extendedClassIn, closeOnClickIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FeedbackMessageShow$vars"))());
vars.value.messageInLocal = messageIn;
vars.value.messageTypeInLocal = messageTypeIn;
vars.value.encodedHTMLInLocal = encodedHTMLIn;
vars.value.extendedClassInLocal = extendedClassIn;
vars.value.closeOnClickInLocal = closeOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:pHVUgsFyJUaj_aYZTEPMOA:/ClientActionFlows.pHVUgsFyJUaj_aYZTEPMOA:0Bgc2KOkvoXY23yX0xsGwQ", "OutSystemsUI", "FeedbackMessageShow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kf1LIwrg4kO7EXqlxgbscw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tVD78iKKA0mkOwErjC3kog", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FeedbackMessageShow_ShowFeedbackMessageJS, "ShowFeedbackMessage", "FeedbackMessageShow", {
ExtraCSSClasses: OS.DataConversion.JSNodeParamConverter.to(vars.value.extendedClassInLocal, OS.Types.Text),
EncodedHtml: OS.DataConversion.JSNodeParamConverter.to(vars.value.encodedHTMLInLocal, OS.Types.Boolean),
MessageType: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageTypeInLocal, OS.Types.Integer),
CloseOnClick: OS.DataConversion.JSNodeParamConverter.to(vars.value.closeOnClickInLocal, OS.Types.Boolean),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6ezIvWPdQU6wxvtvGEHW9Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:pHVUgsFyJUaj_aYZTEPMOA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FeedbackMessageShow$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageType",
attrName: "messageTypeInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "EncodedHTML",
attrName: "encodedHTMLInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ExtendedClass",
attrName: "extendedClassInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CloseOnClick",
attrName: "closeOnClickInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
OutSystemsUIController.default.clientActionProxies.feedbackMessageShow$Action = function (messageIn, messageTypeIn, encodedHTMLIn, extendedClassIn, closeOnClickIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
messageTypeIn = (messageTypeIn === undefined) ? 0 : messageTypeIn;
encodedHTMLIn = (encodedHTMLIn === undefined) ? true : encodedHTMLIn;
extendedClassIn = (extendedClassIn === undefined) ? "" : extendedClassIn;
closeOnClickIn = (closeOnClickIn === undefined) ? true : closeOnClickIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.feedbackMessageShow$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(messageTypeIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(encodedHTMLIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(extendedClassIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(closeOnClickIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FeedbackMessageShow.ShowFeedbackMessageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$public.FeedbackMessage.showFeedbackMessage($parameters.Message, $parameters.MessageType, $parameters.EncodedHtml, $parameters.ExtraCSSClasses, $parameters.CloseOnClick);

};
});

define("OutSystemsUI.controller$FixInputs", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FixInputs.FixInputsJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FixInputs_FixInputsJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.fixInputs$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:joiCQJkwhEazo8+aMtGV2Q:/ClientActionFlows.joiCQJkwhEazo8+aMtGV2Q:O2cLk_3cWHHRId6fOWCjXQ", "OutSystemsUI", "FixInputs", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zHVm52HnGkCutkyhJ8Q6sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PQa9fzVt50+PvtBRPKnhgQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FixInputs_FixInputsJS, "FixInputs", "FixInputs", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MHp2qeIBc0OkgRuqHvU2vQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:joiCQJkwhEazo8+aMtGV2Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.fixInputs$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.fixInputs$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FixInputs.FixInputsJS", [], function () {
return function ($actions, $roles, $public) {
// apply the iOS inputs fix for webviews
OutSystems.OSUI.Utils.FixInputs();
};
});

define("OutSystemsUI.controller$FlipContentBack", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentBack.ShowBackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentBack_ShowBackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentBack$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentBack$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Q6tlmVaXPEeYeASUubjKTw:/ClientActionFlows.Q6tlmVaXPEeYeASUubjKTw:dcx8gj4mGyRz8_YB0zzlBQ", "OutSystemsUI", "FlipContentBack", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zRhVrQ48AUqhG6hUuVBs+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:d9ozr8UP6kqQ25NgNooICQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentBack_ShowBackJS, "ShowBack", "FlipContentBack", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9jzMzJ3hMUKga0RiYVrGnA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Q6tlmVaXPEeYeASUubjKTw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentBack$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentBack$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentBack$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentBack.ShowBackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ShowBackContent($parameters.WidgetId);
};
});

define("OutSystemsUI.controller$FlipContentChangeFlipSelf", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentChangeFlipSelf.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentChangeFlipSelf_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentChangeFlipSelf$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentChangeFlipSelf$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:XkexmBbABU2eN1Q_+WvynQ:/ClientActionFlows.XkexmBbABU2eN1Q_+WvynQ:KEoUhX4ih9vKkiP4RU5IeA", "OutSystemsUI", "FlipContentChangeFlipSelf", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hcxKWX_tL0OoLTaUD_OiSA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BwHIyyhyA0iFNGSTGYfTcA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentChangeFlipSelf_ChangePropertyJS, "ChangeProperty", "FlipContentChangeFlipSelf", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("FlipSelf", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FN+gFaTHSUi1LietRzPL2w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:XkexmBbABU2eN1Q_+WvynQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentChangeFlipSelf$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentChangeFlipSelf$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentChangeFlipSelf$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentChangeFlipSelf.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$FlipContentChangeIsFlipped", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentChangeIsFlipped.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentChangeIsFlipped_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentChangeIsFlipped$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentChangeIsFlipped$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:lHcKo7eXekeEEIN3QBlVLw:/ClientActionFlows.lHcKo7eXekeEEIN3QBlVLw:hgJ08Kb+BtmMOLFYGJFAww", "OutSystemsUI", "FlipContentChangeIsFlipped", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:l4d+KjDMlUeGJBk1shblQQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rkSZOJryqkKXOQIR1OGJ8g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentChangeIsFlipped_ChangePropertyJS, "ChangeProperty", "FlipContentChangeIsFlipped", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("IsFlipped", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:f6b8uic2Nkihw9OMNu2b3A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:lHcKo7eXekeEEIN3QBlVLw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentChangeIsFlipped$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentChangeIsFlipped$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentChangeIsFlipped$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentChangeIsFlipped.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$FlipContentChangeProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentChangeProperty.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentChangeProperty_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentChangeProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5k74niagdUuZgXq7MO4GFA:/ClientActionFlows.5k74niagdUuZgXq7MO4GFA:f+IeFzzp6hJldzdTx_xW5g", "OutSystemsUI", "FlipContentChangeProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FfR8m9gvyk6JJOw_mGywew", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Tkxy80hjVUWLLZ49o+vSRw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentChangeProperty_ChangePropertyJS, "ChangeProperty", "FlipContentChangeProperty", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BkvJlOjftkGQg+u2Rxk0ug", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5k74niagdUuZgXq7MO4GFA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentChangeProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentChangeProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentChangeProperty.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$FlipContentCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentCreate.CreateJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentCreate$Action = function (uniqueIdIn, internalConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:vvIRai0rhEWviZJuHSkz_Q:/ClientActionFlows.vvIRai0rhEWviZJuHSkz_Q:jPiGq1_4Jz3+2m1+U0sFvg", "OutSystemsUI", "FlipContentCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aMCELxC9SEe64mgIPYy2Sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6lLiqGvmeEGw395hqCb0Cw", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentCreate_CreateJS, "Create", "FlipContentCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IoEfluEVvkGY8+SEj5zJGg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:vvIRai0rhEWviZJuHSkz_Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentCreate$Action = function (uniqueIdIn, internalConfigsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$FlipContentDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:hdYpur_hSUadIG5Mgt4Sxg:/ClientActionFlows.hdYpur_hSUadIG5Mgt4Sxg:d6TYLCOw7wL4ngDAA41QGA", "OutSystemsUI", "FlipContentDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LPN6RIpbgkeOGdshHXy4HA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:U0hNGZzPZ0SCQK0LzBqaAw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentDestroy_DestroyJS, "Destroy", "FlipContentDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cRxCVub0yUSCcO8V_TM0xw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:hdYpur_hSUadIG5Mgt4Sxg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$FlipContentFront", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentFront.ShowFrontJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentFront_ShowFrontJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentFront$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentFront$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EzLQWewaQ0qFcO_RNOlhkw:/ClientActionFlows.EzLQWewaQ0qFcO_RNOlhkw:l7ey_H7v3Litm+XT_QwzaA", "OutSystemsUI", "FlipContentFront", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GKM0WDp8cUaV5_MPMvRThw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xnIQve_4jkmQx9zizDnSPA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentFront_ShowFrontJS, "ShowFront", "FlipContentFront", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OphDp8V7LUOdnN3GSypZ_A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EzLQWewaQ0qFcO_RNOlhkw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentFront$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentFront$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentFront$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentFront.ShowFrontJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ShowFrontContent($parameters.WidgetId);
};
});

define("OutSystemsUI.controller$FlipContentInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:dwAxGFz8BkK1Ua8n1OieMQ:/ClientActionFlows.dwAxGFz8BkK1Ua8n1OieMQ:fvfmYIpL66kY6lk2LCm+SA", "OutSystemsUI", "FlipContentInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CPg+sXwssEabpcP4ZjErCg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ggqp_4GWsEuu9j4bIKesDA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentInitialize_InitializeJS, "Initialize", "FlipContentInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lmHy22wtHEi1zvStupZJtQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:dwAxGFz8BkK1Ua8n1OieMQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$FlipContentRegisterCallack", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentRegisterCallack.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentRegisterCallack_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentRegisterCallack$Action = function (uniqueIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentRegisterCallack$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Yf+y+pTpa060VtHVpp49Lg:/ClientActionFlows.Yf+y+pTpa060VtHVpp49Lg:bvdOg4fKqKlMd4ny7CzDWA", "OutSystemsUI", "FlipContentRegisterCallack", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0VMCEc48tUCUifU9+5pi6Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9rbIUcru1UW1Ff6DnkJxAQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentRegisterCallack_RegisterCallbackJS, "RegisterCallback", "FlipContentRegisterCallack", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a3JQ7xsIQUevIBhOzjTMsw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Yf+y+pTpa060VtHVpp49Lg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentRegisterCallack$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentRegisterCallack$Action = function (uniqueIdIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentRegisterCallack$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentRegisterCallack.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.RegisterCallback($parameters.UniqueId, $parameters.Callback);
};
});

define("OutSystemsUI.controller$FlipContentToggle", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$FlipContentToggle.ToggleJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_FlipContentToggle_ToggleJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.flipContentToggle$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.FlipContentToggle$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:HhaNzefgYkG7HIZgEzqqBQ:/ClientActionFlows.HhaNzefgYkG7HIZgEzqqBQ:bjR9vzD4j84qRYS2CMi_7Q", "OutSystemsUI", "FlipContentToggle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ltmUvimzpkaHlNllyZaqAw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JmYeJJQeiEeC+gdiBqpVew", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_FlipContentToggle_ToggleJS, "Toggle", "FlipContentToggle", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B41JnIDTeEmB3VlqEGqS1A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:HhaNzefgYkG7HIZgEzqqBQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.FlipContentToggle$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.flipContentToggle$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.flipContentToggle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$FlipContentToggle.ToggleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.FlipContentAPI.ToggleFlipContent($parameters.WidgetId);
};
});

define("OutSystemsUI.controller$GalleryChangeProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GalleryChangeProperty.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GalleryChangeProperty_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.galleryChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GalleryChangeProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:nqjHT+V5xUGWsxgaISrJMw:/ClientActionFlows.nqjHT+V5xUGWsxgaISrJMw:MUJSlxzSurdu7s0n5EE9Bg", "OutSystemsUI", "GalleryChangeProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6CyKp0CEG0y_abJBNHyMWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jbVxCQBHCkaP1d4H9YiPBw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_GalleryChangeProperty_ChangePropertyJS, "ChangeProperty", "GalleryChangeProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RPizm8K3kUO8qcAyLI6KiA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:nqjHT+V5xUGWsxgaISrJMw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GalleryChangeProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.galleryChangeProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.galleryChangeProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$GalleryChangeProperty.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.GalleryAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$GalleryCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GalleryCreate.CreateJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GalleryCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.galleryCreate$Action = function (uniqueIdIn, internalConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GalleryCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yHUNNI9FOUW0LTimdHPQmw:/ClientActionFlows.yHUNNI9FOUW0LTimdHPQmw:dNPAw4PBRukSU8SffI0WCg", "OutSystemsUI", "GalleryCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WzHIH+7wK0GlAtVFqQ25OA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:foN3EBr7W0+CKgVFs0jWYg", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_GalleryCreate_CreateJS, "Create", "GalleryCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wKdEhqvIq0SFPWgSqYoq7Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yHUNNI9FOUW0LTimdHPQmw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GalleryCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.galleryCreate$Action = function (uniqueIdIn, internalConfigsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.galleryCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$GalleryCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.GalleryAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$GalleryDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GalleryDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GalleryDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.galleryDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GalleryDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6geNfWfYNEKJUt8iiF4k0Q:/ClientActionFlows.6geNfWfYNEKJUt8iiF4k0Q:VxMZfRkQwAhogDZ4XLx2hw", "OutSystemsUI", "GalleryDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Tf9NOei5ZUKp_FUmehexjA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:C1xg6nYQp0ybHV6wVcJWAw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_GalleryDestroy_DestroyJS, "Destroy", "GalleryDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eN6v0mDIG0iQH_R6HZGqQQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6geNfWfYNEKJUt8iiF4k0Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GalleryDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.galleryDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.galleryDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$GalleryDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.GalleryAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$GalleryInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GalleryInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GalleryInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.galleryInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GalleryInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:j8d_bE3kSkuDNoG5h6HlMA:/ClientActionFlows.j8d_bE3kSkuDNoG5h6HlMA:UuTsIAc1A8ay3+t6jI_Ocg", "OutSystemsUI", "GalleryInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9PHR6gtU806DxWymH2MuLw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b18tsDWAUUSZWVupalPplA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_GalleryInitialize_InitializeJS, "Initialize", "GalleryInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EJxje6TltU2kaahBjNE6VA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:j8d_bE3kSkuDNoG5h6HlMA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GalleryInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.galleryInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.galleryInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$GalleryInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.GalleryAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$GenerateUniqueId", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GenerateUniqueId.RandomStringJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GenerateUniqueId_RandomStringJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.generateUniqueId$Action = function (current_Unique_IDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GenerateUniqueId$vars"))());
vars.value.current_Unique_IDInLocal = current_Unique_IDIn;
var randomStringJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GenerateUniqueId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.randomStringJSResult = randomStringJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0XavAbDZ6Ua+QBhH6oQk2g:/ClientActionFlows.0XavAbDZ6Ua+QBhH6oQk2g:nvpSzBoxark3pqu0zRW5Xw", "OutSystemsUI", "GenerateUniqueId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2Di2IrfFuEiztVha2l_50A", callContext.id);
// Current_ID is empty?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UHlTrEcaokqcb84Vdq7SQw", callContext.id) && (vars.value.current_Unique_IDInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bEKN+jVz40mJbzOqjUIV4g", callContext.id);
randomStringJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GenerateUniqueId_RandomStringJS, "RandomString", "GenerateUniqueId", {
UniqueID: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GenerateUniqueId$randomStringJSResult"))();
jsNodeResult.uniqueIDOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UniqueID, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// Return new ID
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N0yvHay3q0e2BD8eYQEWag", callContext.id);
// Unique_ID = RandomString.UniqueID
outVars.value.unique_IDOut = randomStringJSResult.value.uniqueIDOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OPunkDewV0amYVlShWR1+w", callContext.id);
} else {
// Return current ID
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Yj14bYB6eE6QRRH9JWjVbw", callContext.id);
// Unique_ID = Current_Unique_ID
outVars.value.unique_IDOut = vars.value.current_Unique_IDInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OPunkDewV0amYVlShWR1+w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0XavAbDZ6Ua+QBhH6oQk2g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GenerateUniqueId$vars", [{
name: "Current_Unique_ID",
attrName: "current_Unique_IDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GenerateUniqueId$randomStringJSResult", [{
name: "UniqueID",
attrName: "uniqueIDOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GenerateUniqueId$outVars", [{
name: "Unique_ID",
attrName: "unique_IDOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.generateUniqueId$Action = function (current_Unique_IDIn) {
current_Unique_IDIn = (current_Unique_IDIn === undefined) ? "" : current_Unique_IDIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.generateUniqueId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(current_Unique_IDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Unique_ID: OS.DataConversion.JSNodeParamConverter.to(actionResults.unique_IDOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$GenerateUniqueId.RandomStringJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UniqueID = OutSystems.OSUI.Utils.GenerateUniqueId();

};
});

define("OutSystemsUI.controller$GetBrowser", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getBrowser$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetBrowser$vars"))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetBrowser$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3_xNcGbavk6MHmblfLO8HQ:/ClientActionFlows.3_xNcGbavk6MHmblfLO8HQ:+6NwV4wNDZwesYoB_6UIsA", "OutSystemsUI", "GetBrowser", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rY5TmkY0sUSq51H5zMPZdA", callContext.id);
// Set UserAgent
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4fFm9ruzi0K0oY7ZVv_Hyw", callContext.id);
// UserAgent = ToLower
vars.value.userAgentVar = OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.getUserAgent());
// Detect Browser
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:StGAwJsoiUiPgnNvOPAizg", callContext.id) && ((((((((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "chrome", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "crios", 0, false, false) > -1)) && ((((((((((((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "kindle", 0, false, false) === -1) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "silk", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kftt", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfot", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfsowi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opr", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opera", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opios", 0, false, false) === -1))) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edge", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edgios", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edga", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edg/", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "samsungbrowser", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "yabrowser", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "miuibrowser", 0, false, false) === -1)))) {
// Chrome
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_N73ExwR_0Szc1SN15zesQ", callContext.id);
// Browser = "chrome"
outVars.value.browserOut = "chrome";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if(((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "edge", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edgios", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edga", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "edg/", 0, false, false) > -1))) {
// Edge
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8lsZ8bzpgEKLLgduUPmbvQ", callContext.id);
// Browser = "edge"
outVars.value.browserOut = "edge";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if(((OS.BuiltinFunctions.index(vars.value.userAgentVar, "firefox", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "fxios", 0, false, false) > -1))) {
// Firefox
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kbrcS985mEaYh4GcV8rZWw", callContext.id);
// Browser = "firefox"
outVars.value.browserOut = "firefox";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((((((((((((((((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "safari", 0, false, false) > -1) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "chrome", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opr", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opera", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opios", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kindle", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "silk", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kftt", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfot", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfsowi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwa", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwi", 0, false, false) === -1)) && (OS.BuiltinFunctions.index(vars.value.userAgentVar, "ucbrowser", 0, false, false) === -1))) {
// Safari
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ax62IQWmJ0GApvssrnCoAQ", callContext.id);
// Browser = "safari"
outVars.value.browserOut = "safari";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "opr", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opera", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "opios", 0, false, false) > -1))) {
// Opera
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qCzEnyd61Um1AvUnmGGfAw", callContext.id);
// Browser = "opera"
outVars.value.browserOut = "opera";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if(((OS.BuiltinFunctions.index(vars.value.userAgentVar, "trident", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "msie", 0, false, false) > -1))) {
// IE
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MGpjRtxEnkGSiCb4WTDWYw", callContext.id);
// Browser = "ie"
outVars.value.browserOut = "ie";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((((((((((((OS.BuiltinFunctions.index(vars.value.userAgentVar, "kindle", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "silk", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kftt", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfot", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwa", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfjwi", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfsowi", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwa", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfthwi", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwa", 0, false, false) > -1)) || (OS.BuiltinFunctions.index(vars.value.userAgentVar, "kfapwi", 0, false, false) > -1))) {
// Kindle
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:elOfrCo96Ee4+OIm7NafGg", callContext.id);
// Browser = "kindle"
outVars.value.browserOut = "kindle";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentVar, "samsungbrowser", 0, false, false) > -1)) {
// Samsung Browser
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0DkaygKgvUepcNxjDbQG4Q", callContext.id);
// Browser = "samsung"
outVars.value.browserOut = "samsung";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentVar, "yabrowser", 0, false, false) > -1)) {
// Yandex
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3X1lN+w5Z069KAHK0wiPNg", callContext.id);
// Browser = "yandex"
outVars.value.browserOut = "yandex";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentVar, "miuibrowser", 0, false, false) > -1)) {
// MIUI Browser
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FSd_dtTtAUaXzUNGdtHeDA", callContext.id);
// Browser = "miui"
outVars.value.browserOut = "miui";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentVar, "ucbrowser", 0, false, false) > -1)) {
// UC Browser
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WKWro3V9DUW5VofcClG1+w", callContext.id);
// Browser = "uc"
outVars.value.browserOut = "uc";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N+PwSKN40kO6RMP8OJmpBA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_dPXELZ1P0iH7famQQ88kg", callContext.id);
}

}

}

}

}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3_xNcGbavk6MHmblfLO8HQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetBrowser$vars", [{
name: "UserAgent",
attrName: "userAgentVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetBrowser$outVars", [{
name: "Browser",
attrName: "browserOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getBrowser$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getBrowser$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Browser: OS.DataConversion.JSNodeParamConverter.to(actionResults.browserOut, OS.Types.Text)
};
});
};
});

define("OutSystemsUI.controller$GetDeviceOrientation", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceOrientation.CheckDeviceJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetDeviceOrientation_CheckDeviceJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getDeviceOrientation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetDeviceOrientation$outVars"))());
varBag.callContext = callContext;
varBag.checkDeviceJSResult = checkDeviceJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:tGVz89UL+E+S9m21JwQD0w:/ClientActionFlows.tGVz89UL+E+S9m21JwQD0w:e3jWoXW6l0vG9_rJypZTAA", "OutSystemsUI", "GetDeviceOrientation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WlXLDSxzeE2HWrZvOK8R9A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gbjVoiko4UGtMqk2GHLr1g", callContext.id);
checkDeviceJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GetDeviceOrientation_CheckDeviceJS, "CheckDevice", "GetDeviceOrientation", {
Orientation: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GetDeviceOrientation$checkDeviceJSResult"))();
jsNodeResult.orientationOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Orientation, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5mf9zMosH0iwQ_WWqvwkug", callContext.id);
// Orientation = CheckDevice.Orientation
outVars.value.orientationOut = checkDeviceJSResult.value.orientationOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eJeV2aTII0yt5v5wbvM3kg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:tGVz89UL+E+S9m21JwQD0w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetDeviceOrientation$checkDeviceJSResult", [{
name: "Orientation",
attrName: "orientationOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetDeviceOrientation$outVars", [{
name: "Orientation",
attrName: "orientationOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getDeviceOrientation$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getDeviceOrientation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Orientation: OS.DataConversion.JSNodeParamConverter.to(actionResults.orientationOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$GetDeviceOrientation.CheckDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var classList = document.body.classList;

if(classList.contains("landscape")) {
    $parameters.Orientation = "landscape";
} else if(classList.contains("portrait")) {
    $parameters.Orientation = "portrait";
}
};
});

define("OutSystemsUI.controller$GetDeviceType", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceType.CheckDeviceJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetDeviceType_CheckDeviceJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getDeviceType$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetDeviceType$outVars"))());
varBag.callContext = callContext;
varBag.checkDeviceJSResult = checkDeviceJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:V8kn6TfTuUWAmMWp18n+Vw:/ClientActionFlows.V8kn6TfTuUWAmMWp18n+Vw:9Zh_rdLAgDsBOjcR12SHxg", "OutSystemsUI", "GetDeviceType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZvhAJGrMGkeKAvnAYcWXlQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N9WTj9dLUkuBdvhGabzneA", callContext.id);
checkDeviceJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GetDeviceType_CheckDeviceJS, "CheckDevice", "GetDeviceType", {
Device: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GetDeviceType$checkDeviceJSResult"))();
jsNodeResult.deviceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Device, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Z+YNE6HFAEC_aV40cAT4ZA", callContext.id);
// Device = CheckDevice.Device
outVars.value.deviceOut = checkDeviceJSResult.value.deviceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ivLLSyFVj0uFhq3EYv2bFg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:V8kn6TfTuUWAmMWp18n+Vw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetDeviceType$checkDeviceJSResult", [{
name: "Device",
attrName: "deviceOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetDeviceType$outVars", [{
name: "Device",
attrName: "deviceOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getDeviceType$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getDeviceType$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Device: OS.DataConversion.JSNodeParamConverter.to(actionResults.deviceOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$GetDeviceType.CheckDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var classList = document.body.classList;

if(classList.contains("phone")) {
    $parameters.Device = "phone";
} else if(classList.contains("tablet")) {
    $parameters.Device = "tablet";
} else {
    $parameters.Device = "desktop";
}
};
});

define("OutSystemsUI.controller$GetECTURL", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getECTURL$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetECTURL$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fXEH2WZHUUydeeqXb58htg:/ClientActionFlows.fXEH2WZHUUydeeqXb58htg:inleWBBPTtOStrVjeZZ1KA", "OutSystemsUI", "GetECTURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F_yOm7loL06q_516kLwKbA", callContext.id);
// URL
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AoRQO0BVQkKF3zbzl5IiYw", callContext.id);
// URL = "/ECT_Provider/WS_ECT.asmx"
outVars.value.uRLOut = "/ECT_Provider/WS_ECT.asmx";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:czCiPkd8T0q1ZbAgZlnbjA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fXEH2WZHUUydeeqXb58htg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetECTURL$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getECTURL$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getECTURL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.Types.Text)
};
});
};
});

define("OutSystemsUI.controller$GetIsTouch", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetIsTouch.SetIsTouchJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetIsTouch_SetIsTouchJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getIsTouch$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var setIsTouchJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetIsTouch$outVars"))());
varBag.callContext = callContext;
varBag.setIsTouchJSResult = setIsTouchJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RZ1a65S6TEG+U0tQG3j8vA:/ClientActionFlows.RZ1a65S6TEG+U0tQG3j8vA:2Ic9JOCalng9TxkE4PTHBg", "OutSystemsUI", "GetIsTouch", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eq_Hnst4vkq_06kai8zFAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UzL18+5tCEyY2xczP1HzpQ", callContext.id);
setIsTouchJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GetIsTouch_SetIsTouchJS, "SetIsTouch", "GetIsTouch", {
IsTouch: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GetIsTouch$setIsTouchJSResult"))();
jsNodeResult.isTouchOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsTouch, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XxzUi3lJf0C_2edgopB4Tw", callContext.id);
// IsTouch = SetIsTouch.IsTouch
outVars.value.isTouchOut = setIsTouchJSResult.value.isTouchOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hc1FN68lS0+PvmL2nVXeFQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RZ1a65S6TEG+U0tQG3j8vA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetIsTouch$setIsTouchJSResult", [{
name: "IsTouch",
attrName: "isTouchOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetIsTouch$outVars", [{
name: "IsTouch",
attrName: "isTouchOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.getIsTouch$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getIsTouch$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsTouch: OS.DataConversion.JSNodeParamConverter.to(actionResults.isTouchOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$GetIsTouch.SetIsTouchJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.body;
var isTouch = false;
  
function detectTouchscreen() {
  if (window.PointerEvent && ('maxTouchPoints' in navigator)) {
    // if Pointer Events are supported, just check maxTouchPoints
    if (navigator.maxTouchPoints > 0) {
      isTouch = true;
    }
  } else {
    // no Pointer Events...
    if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
      // check for any-pointer:coarse which mostly means touchscreen
      isTouch = true;
    } else if (window.TouchEvent || ('ontouchstart' in window)) {
      // last resort - check for exposed touch events API / event handler
      isTouch = true;
    }
  }
  
  return isTouch;
  
}

detectTouchscreen();
$parameters.IsTouch = isTouch;
};
});

define("OutSystemsUI.controller$GetNetworkStatus", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetNetworkStatus.CheckDeviceOnlineJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetNetworkStatus_CheckDeviceOnlineJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getNetworkStatus$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkDeviceOnlineJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetNetworkStatus$outVars"))());
varBag.callContext = callContext;
varBag.checkDeviceOnlineJSResult = checkDeviceOnlineJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Jy8FxeT960+JHkWnvjJmrA:/ClientActionFlows.Jy8FxeT960+JHkWnvjJmrA:dlgQZ5M9jdEPWK+_bv4Z8Q", "OutSystemsUI", "GetNetworkStatus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xI6lj4cJrkycwMKaYxJ9qg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lLAk3sElnEm+ySLNkSsrjw", callContext.id);
checkDeviceOnlineJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GetNetworkStatus_CheckDeviceOnlineJS, "CheckDeviceOnline", "GetNetworkStatus", {
NavigatorOnline: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GetNetworkStatus$checkDeviceOnlineJSResult"))();
jsNodeResult.navigatorOnlineOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NavigatorOnline, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EVe_1N6TwkOPoX_6BvPMwg", callContext.id);
// IsOnline = CheckDeviceOnline.NavigatorOnline
outVars.value.isOnlineOut = checkDeviceOnlineJSResult.value.navigatorOnlineOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DxBwnwxWYkGRFq2qdQoUeQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Jy8FxeT960+JHkWnvjJmrA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetNetworkStatus$checkDeviceOnlineJSResult", [{
name: "NavigatorOnline",
attrName: "navigatorOnlineOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetNetworkStatus$outVars", [{
name: "IsOnline",
attrName: "isOnlineOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.getNetworkStatus$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getNetworkStatus$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.isOnlineOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$GetNetworkStatus.CheckDeviceOnlineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Uses navigator to check if device is online
$parameters.NavigatorOnline = navigator.onLine;
};
});

define("OutSystemsUI.controller$GetNetworkType", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetNetworkType.CheckNetworkTypeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetNetworkType_CheckNetworkTypeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getNetworkType$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkNetworkTypeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetNetworkType$outVars"))());
varBag.callContext = callContext;
varBag.checkNetworkTypeJSResult = checkNetworkTypeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+ZNpq6EuMUqlKdDF3430RQ:/ClientActionFlows.+ZNpq6EuMUqlKdDF3430RQ:TmD+dN3JZpo3oQQuV55tSg", "OutSystemsUI", "GetNetworkType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cJs2O+6qmEa1MRh3D3tRSg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DdnOaND2fkCpllA7GTAiCg", callContext.id);
checkNetworkTypeJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_GetNetworkType_CheckNetworkTypeJS, "CheckNetworkType", "GetNetworkType", {
NetworkType: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.GetNetworkType$checkNetworkTypeJSResult"))();
jsNodeResult.networkTypeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NetworkType, OS.Types.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5ClbImcBE0CofTng9C3dZg", callContext.id);
// NetworkType = CheckNetworkType.NetworkType
outVars.value.networkTypeOut = checkNetworkTypeJSResult.value.networkTypeOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1d7KSzcSFUmHBadz77dl9Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+ZNpq6EuMUqlKdDF3430RQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetNetworkType$checkNetworkTypeJSResult", [{
name: "NetworkType",
attrName: "networkTypeOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetNetworkType$outVars", [{
name: "NetworkType",
attrName: "networkTypeOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getNetworkType$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getNetworkType$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
NetworkType: OS.DataConversion.JSNodeParamConverter.to(actionResults.networkTypeOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$GetNetworkType.CheckNetworkTypeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof navigator.connection !== "undefined") {
    //In a mobile device
    if(typeof navigator.connection.type !== "undefined"){
        $parameters.NetworkType = navigator.connection.type;
    } else {
        //In a web browser
        $parameters.NetworkType = "webbrowser"; 
    }
} else {
    //In a web browser
    $parameters.NetworkType = "webbrowser";
}
};
});

define("OutSystemsUI.controller$GetOS", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetOS.DetectIphoneXJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_GetOS_DetectIphoneXJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.getOS$Action = function (userAgentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetOS$vars"))());
vars.value.userAgentInLocal = userAgentIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.GetOS$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xv7Qrjz7QUGtBmrY543I6A:/ClientActionFlows.xv7Qrjz7QUGtBmrY543I6A:i3o6ZDPs55PxhV0Lpqtc+g", "OutSystemsUI", "GetOS", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qCrxHG1sYkiv4suX4MWRJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4AGvjje3wEG4pmEkTTJrQA", callContext.id);
// UserAgent = ToLower
vars.value.userAgentInLocal = OS.BuiltinFunctions.toLower(vars.value.userAgentInLocal);
// Detect Device
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kq5UEbH41kSUDgj9ytpzpA", callContext.id) && ((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "ipad", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "iphone", 0, false, false) > -1)))) {
// Ios
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qxbU+4BD2kqtbcKBet0mmg", callContext.id);
// OS = "ios"
outVars.value.oSOut = "ios";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UTNgkVilxEuT_Cr3S2KMTA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_GetOS_DetectIphoneXJS, "DetectIphoneX", "GetOS", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWtYynhaykGMr7fxAZWZEQ", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "android", 0, false, false) > -1)) {
// Android
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g5GMKvCPfUSIkYWgdSmmOg", callContext.id);
// OS = "android"
outVars.value.oSOut = "android";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWtYynhaykGMr7fxAZWZEQ", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "windows", 0, false, false) > -1)) {
// Windows
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Gw8OZz1r0E2KMJp2nMTTag", callContext.id);
// OS = "windows"
outVars.value.oSOut = "windows";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWtYynhaykGMr7fxAZWZEQ", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.userAgentInLocal, "mac", 0, false, false) > -1)) {
// OSX
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bshK_kErOEq3Y_BrL+gZ+g", callContext.id);
// OS = "osx"
outVars.value.oSOut = "osx";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWtYynhaykGMr7fxAZWZEQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWtYynhaykGMr7fxAZWZEQ", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xv7Qrjz7QUGtBmrY543I6A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetOS$vars", [{
name: "UserAgent",
attrName: "userAgentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.GetOS$outVars", [{
name: "OS",
attrName: "oSOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.getOS$Action = function (userAgentIn) {
userAgentIn = (userAgentIn === undefined) ? "" : userAgentIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.getOS$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(userAgentIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OS: OS.DataConversion.JSNodeParamConverter.to(actionResults.oSOut, OS.Types.Text)
};
});
};
});
define("OutSystemsUI.controller$GetOS.DetectIphoneXJS", [], function () {
return function ($actions, $roles, $public) {
var body = document.querySelector("body");

// detect iPhoneX
function detectIphoneX() {
    // devices list and their screen sizes
    var devices = [
        
        // iPhoneX
        {width: 1125, height: 2436, description: "iphone x/xs"},
        {width: 828, height: 1792, description: "iphone xr"},
        {width: 750, height: 1624, description: "iphone xr scaled"},
        {width: 1242, height: 2688, description: "iphone xs max"},
        
        // iPhone12
        {width: 1170, height: 2532, description: "iphone 12"},
        {width: 1284, height: 2778, description: "iphone 12 pro max"},
        
        // iPhone13
        {width: 1170, height: 2532, description: "iphone 13"},
        {width: 1125, height: 2436, description: "iphone 13 mini"},
        {width: 1170, height: 2532, description: "iphone 13 pro"},
        {width: 1284, height: 2778, description: "iphone 13 pro max"},
    ];
    
    // get the device pixel ratio
    var ratio = window.devicePixelRatio || 1;

    // get the device screen dimensions
    var screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
    };

    // check if the screen size matches any of the devices in the list
    for(var i = 0; i < devices.length; i++) {
        if(devices[i].width === screen.width && devices[i].height === screen.height) {
            window.iphoneX = true;
            break;
        }
    }
    
    if(window.iphoneX) {
        // get orientation and register an event to update it
        detectOrientation();
        window.addEventListener("orientationchange", function() {
            setTimeout(detectOrientation, 500);
        });
    }
}

// update orientation
function detectOrientation() {
    // store the notch position value
    var notchPosition;
    
    if("orientation" in window) {
        // mobile browers
        if (window.orientation == 90) {
            notchPosition = "left";
        } else if (window.orientation == -90) {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    } else if ("orientation" in window.screen) {
        // webkit browsers
        if( window.screen.orientation.type === "landscape-primary") {
            notchPosition = "left";
        } else if( window.screen.orientation.type === "landscape-secondary") {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    } else if("mozOrientation" in window.screen) {
        // firefox browsers
        if( window.screen.mozOrientation === "landscape-primary") {
            notchPosition = "left";
        } else if( window.screen.mozOrientation === "landscape-secondary") {
            notchPosition = "right";
        } else {
            notchPosition = "up";
        }
    }
    
    window.notch = notchPosition;
    updateClasses();
}

function updateClasses() {
    // set the iphonex class on the body
    body.classList.add("iphonex");
    
    // override tablet detection on landscape mode
    if (window.notch == "left" || window.notch == "right") {
        body.classList.remove("tablet");
        body.classList.add("phone");
    }
}

// detect iPhoneX
detectIphoneX();
};
});

define("OutSystemsUI.controller$HasMasterDetail", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$HasMasterDetail.HasMasterDetailJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_HasMasterDetail_HasMasterDetailJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.hasMasterDetail$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:eTjJM+ziD0ikmEqvObe7+Q:/ClientActionFlows.eTjJM+ziD0ikmEqvObe7+Q:Ie0n85IYn0JPs7ITmsjjMA", "OutSystemsUI", "HasMasterDetail", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2frMzbJO8Ey842DmBNh2dQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4tPDI+5d60iT0y9hC+_RjA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_HasMasterDetail_HasMasterDetailJS, "HasMasterDetail", "HasMasterDetail", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c2L+7egkAUeHomqzEpbFDw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:eTjJM+ziD0ikmEqvObe7+Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.hasMasterDetail$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.hasMasterDetail$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$HasMasterDetail.HasMasterDetailJS", [], function () {
return function ($actions, $roles, $public) {
// detect if master detail is used
OutSystems.OSUI.Utils.HasMasterDetail();
};
});

define("OutSystemsUI.controller$HideHeader", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$HideHeader.HideOnScrollJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_HideHeader_HideOnScrollJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.hideHeader$Action = function (hideHeaderIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.HideHeader$vars"))());
vars.value.hideHeaderInLocal = hideHeaderIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yWN3I3mUa0+a7mgU7VdRyw:/ClientActionFlows.yWN3I3mUa0+a7mgU7VdRyw:yj0awOpa_8BLgrAroQjPYQ", "OutSystemsUI", "HideHeader", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RcQh4R4oTkimx1nMetHWXw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3JmP0Rp+3Uuc_SKPk_Ui0Q", callContext.id) && vars.value.hideHeaderInLocal)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YIoLAMN9y0C6r84F2nZDLg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_HideHeader_HideOnScrollJS, "HideOnScroll", "HideHeader", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kUv59cqJ6Uyzd_kOmdu1RA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sjl7Mgg+Ck2k3OuMhnkwFQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yWN3I3mUa0+a7mgU7VdRyw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.HideHeader$vars", [{
name: "HideHeader",
attrName: "hideHeaderInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.hideHeader$Action = function (hideHeaderIn) {
hideHeaderIn = (hideHeaderIn === undefined) ? false : hideHeaderIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.hideHeader$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hideHeaderIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$HideHeader.HideOnScrollJS", [], function () {
return function ($actions, $roles, $public) {
// window.performance.timing is deprecated but the technology that MDN suggest to use is stil experimental and does not work on IE and Safari. Please visit the following link for context: 
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing
var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;

setTimeout(function(){
    var hideOnScroll = new osui.HideOnScroll();
    hideOnScroll.init();
}, loadTime);
};
});

define("OutSystemsUI.controller$iPhoneXPreview", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$iPhoneXPreview.DetectPreviewInDevicesJS", "OutSystemsUI.controller$SetStickyObserver"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_iPhoneXPreview_DetectPreviewInDevicesJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.iPhoneXPreview$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.iPhoneXPreview$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NbOckAGFXESom8tE91RycA:/ClientActionFlows.NbOckAGFXESom8tE91RycA:wSckmRnhrg1IKqgFAf+p9g", "OutSystemsUI", "iPhoneXPreview", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sUoEZhrvbEuF6HCvCEDvVQ", callContext.id);
// iPhoneX Preview CSS
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pXgbImTph0amgXBBKeCMoA", callContext.id);
// PreviewCSS = "/* iPhoneX Preview in Devices */
//._phantom-limb .iphonex.portrait .layout-native:not(.blank) .content {
//    padding-top: calc(var(--header-size) + var(--header-size-content) + 35px);
//    padding-bottom: var(--footer-height);
//}
//
//._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .header {
//    top: calc(-1 * (var(--header-size) + 35px));
//}
//
//._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll.header-is--visible .header-top-content {
//   padding-top: 0; 
//}
//
//._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .header-top-content {
//   padding-top: 35px; 
//}
//
//._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .content {
//    padding-top: 0;
//}
//
//._phantom-limb .iphonex.landscape .layout-native .content {
//    padding-left: 35px;
//    padding-right: 35px;
//}
//
//.iphonex .bottom-bar-wrapper {    
//    padding-bottom: 5px;    
//}
//
//.iphonex .action-sheet {
//    padding-bottom: 35px; 
//}
//
//.iphonex .split-right-close a,
//.split-right-close a:link,
//.split-right-close a:visited {
//    color: var(--color-neutral-8);
//}
//
///* portrait only */
//.iphonex.portrait .header,
//.iphonex.portrait .app-menu-content,
//.iphonex.portrait .notification {
//    padding-top: 35px;
//}
//
//.iphonex.portrait .notification--visible {
//    margin-top: 35px;
//}
//
//.iphonex.portrait .app-menu,
//.iphonex.portrait .sidebar {
//    padding-top: 35px;
//    padding-bottom: 5px;
//}
//
//.iphonex.portrait .section-group.is--sticky .section-title {
//    top: calc(var(--section-top-position) + 35px);
//}
//
//.iphonex.portrait .section-index.is--sticky {
//    top: calc(var(--header-size) + var(--header-size-content) + var(--top-position) + 35px);
//}
//
//.iphonex.ios.phone.portrait .layout-native .floating-actions-wrapper {
//    margin-bottom: 16px;
//}
//
//.iphonex.ios.phone.portrait .layout-native .floating-actions-wrapper.bottom-bar-exists {
//    margin-bottom: 0;
//}
//
//.iphonex.portrait .layout-native .split-right {
//    padding-top: calc(var(--header-size) + var(--header-size-content) + 35px);
//}
//
//.iphonex.ios.phone.portrait .layout-native .split-right-close {
//    top: 47px;
//}
//
//.iphonex.portrait .split-right-close {
//    top: 41px;
//}
//
//.iphonex.portrait .header-right .search-input {
//    padding-top: 40px;
//}
//
//.iphonex.portrait .header-right .search-input:after {
//    top: 50px; 
//}
//
//.iphonex.portrait .feedback-message {
//    padding-top: 45px;
//}
//
///* landscape */
//.iphonex.landscape .app-menu,
//.iphonex.landscape .sidebar {
//    padding-bottom: 5px;
//}
//
//.iphonex.landscape .app-menu-links {
//    padding-left: 35px; 
//}
//
//.iphonex.landscape .header,
//.iphonex.landscape .main-content,
//.iphonex.landscape .bottom-bar-wrapper {
//    padding-left: 35px;
//    padding-right: 35px;
//}
//
//.iphonex.ios.phone.landscape .layout-native .split-right-close {
//    display: block;
//}
//
//.ios.phone.landscape .layout-native .floating-actions-wrapper {
//    margin-right: calc(35px + var(--space-base));
//}
//
//"
vars.value.previewCSSVar = "/* iPhoneX Preview in Devices */\r\n._phantom-limb .iphonex.portrait .layout-native:not(.blank) .content {\r\n    padding-top: calc(var(--header-size) + var(--header-size-content) + 35px);\r\n    padding-bottom: var(--footer-height);\r\n}\r\n\r\n._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .header {\r\n    top: calc(-1 * (var(--header-size) + 35px));\r\n}\r\n\r\n._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll.header-is--visible .header-top-content {\r\n   padding-top: 0; \r\n}\r\n\r\n._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .header-top-content {\r\n   padding-top: 35px; \r\n}\r\n\r\n._phantom-limb .iphonex.portrait .layout-native.hide-header-on-scroll .content {\r\n    padding-top: 0;\r\n}\r\n\r\n._phantom-limb .iphonex.landscape .layout-native .content {\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n}\r\n\r\n.iphonex .bottom-bar-wrapper {    \r\n    padding-bottom: 5px;    \r\n}\r\n\r\n.iphonex .action-sheet {\r\n    padding-bottom: 35px; \r\n}\r\n\r\n.iphonex .split-right-close a,\r\n.split-right-close a:link,\r\n.split-right-close a:visited {\r\n    color: var(--color-neutral-8);\r\n}\r\n\r\n/* portrait only */\r\n.iphonex.portrait .header,\r\n.iphonex.portrait .app-menu-content,\r\n.iphonex.portrait .notification {\r\n    padding-top: 35px;\r\n}\r\n\r\n.iphonex.portrait .notification--visible {\r\n    margin-top: 35px;\r\n}\r\n\r\n.iphonex.portrait .app-menu,\r\n.iphonex.portrait .sidebar {\r\n    padding-top: 35px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.iphonex.portrait .section-group.is--sticky .section-title {\r\n    top: calc(var(--section-top-position) + 35px);\r\n}\r\n\r\n.iphonex.portrait .section-index.is--sticky {\r\n    top: calc(var(--header-size) + var(--header-size-content) + var(--top-position) + 35px);\r\n}\r\n\r\n.iphonex.ios.phone.portrait .layout-native .floating-actions-wrapper {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.iphonex.ios.phone.portrait .layout-native .floating-actions-wrapper.bottom-bar-exists {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.iphonex.portrait .layout-native .split-right {\r\n    padding-top: calc(var(--header-size) + var(--header-size-content) + 35px);\r\n}\r\n\r\n.iphonex.ios.phone.portrait .layout-native .split-right-close {\r\n    top: 47px;\r\n}\r\n\r\n.iphonex.portrait .split-right-close {\r\n    top: 41px;\r\n}\r\n\r\n.iphonex.portrait .header-right .search-input {\r\n    padding-top: 40px;\r\n}\r\n\r\n.iphonex.portrait .header-right .search-input:after {\r\n    top: 50px; \r\n}\r\n\r\n.iphonex.portrait .feedback-message {\r\n    padding-top: 45px;\r\n}\r\n\r\n/* landscape */\r\n.iphonex.landscape .app-menu,\r\n.iphonex.landscape .sidebar {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.iphonex.landscape .app-menu-links {\r\n    padding-left: 35px; \r\n}\r\n\r\n.iphonex.landscape .header,\r\n.iphonex.landscape .main-content,\r\n.iphonex.landscape .bottom-bar-wrapper {\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n}\r\n\r\n.iphonex.ios.phone.landscape .layout-native .split-right-close {\r\n    display: block;\r\n}\r\n\r\n.ios.phone.landscape .layout-native .floating-actions-wrapper {\r\n    margin-right: calc(35px + var(--space-base));\r\n}\r\n\r\n";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pXgbImTph0amgXBBKeCMoA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// GeneralCss = "/* General Devices Preview */
//._phantom-limb body {
//    overflow: initial !important;
//}
//
//._phantom-limb .layout-native.hide-header-on-scroll .header {
//    position: sticky;
//}
//
//._phantom-limb .layout-native.hide-header-on-scroll .content {
//    padding-top: 0;
//}
//
//._phantom-limb .layout-native:not(.hide-header-on-scroll) .header {
//    top: 0;
//}
//
//._phantom-limb .layout-native .footer {
//    bottom: 0;
//}
//
//._phantom-limb .layout-native .header,
//._phantom-limb .layout-native .footer {
//    position: fixed;
//    left: 0;
//    right: 0;
//}
//
//._phantom-limb .layout-native .footer {
//    bottom: 0;
//}
//
//._phantom-limb .layout-native:not(.blank) .content {
//    padding-top: calc(var(--header-size) + var(--header-size-content));
//    padding-bottom: var(--footer-height);
//}
//
//._phantom-limb .landscape .layout.layout-side.layout-native .header {
//    z-index: 150;
//}
//
//._phantom-limb .landscape.phone.tablet.windows .layout-native .split-right-close {
//    display: block;
//}
//
//._phantom-limb .split-right-close a,
//._phantom-limb .split-right-close a:link,
//._phantom-limb .split-right-close a:visited {
//    color: var(--color-neutral-8);
//}
//"
vars.value.generalCssVar = "/* General Devices Preview */\r\n._phantom-limb body {\r\n    overflow: initial !important;\r\n}\r\n\r\n._phantom-limb .layout-native.hide-header-on-scroll .header {\r\n    position: sticky;\r\n}\r\n\r\n._phantom-limb .layout-native.hide-header-on-scroll .content {\r\n    padding-top: 0;\r\n}\r\n\r\n._phantom-limb .layout-native:not(.hide-header-on-scroll) .header {\r\n    top: 0;\r\n}\r\n\r\n._phantom-limb .layout-native .footer {\r\n    bottom: 0;\r\n}\r\n\r\n._phantom-limb .layout-native .header,\r\n._phantom-limb .layout-native .footer {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n._phantom-limb .layout-native .footer {\r\n    bottom: 0;\r\n}\r\n\r\n._phantom-limb .layout-native:not(.blank) .content {\r\n    padding-top: calc(var(--header-size) + var(--header-size-content));\r\n    padding-bottom: var(--footer-height);\r\n}\r\n\r\n._phantom-limb .landscape .layout.layout-side.layout-native .header {\r\n    z-index: 150;\r\n}\r\n\r\n._phantom-limb .landscape.phone.tablet.windows .layout-native .split-right-close {\r\n    display: block;\r\n}\r\n\r\n._phantom-limb .split-right-close a,\r\n._phantom-limb .split-right-close a:link,\r\n._phantom-limb .split-right-close a:visited {\r\n    color: var(--color-neutral-8);\r\n}\r\n";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NuLUeUgpEUCTkx4KpN0klA", callContext.id);
// Detects the Preview In Devices and adds support for the iPhoneX if needed
controller.safeExecuteJSNode(OutSystemsUI_controller_iPhoneXPreview_DetectPreviewInDevicesJS, "DetectPreviewInDevices", "iPhoneXPreview", {
GeneralCss: OS.DataConversion.JSNodeParamConverter.to(vars.value.generalCssVar, OS.Types.Text),
PreviewCSS: OS.DataConversion.JSNodeParamConverter.to(vars.value.previewCSSVar, OS.Types.Text)
}, function ($parameters) {
}, {
SetStickyObserver: OutSystemsUIController.default.clientActionProxies.setStickyObserver$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lbIIpqHAUECLHUDQU3_2eA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NbOckAGFXESom8tE91RycA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.iPhoneXPreview$vars", [{
name: "PreviewCSS",
attrName: "previewCSSVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeneralCss",
attrName: "generalCssVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.iPhoneXPreview$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.iPhoneXPreview$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$iPhoneXPreview.DetectPreviewInDevicesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.querySelector('body');
var isIframe;
var isPreviewInDevices;

// detect Preview in Devices
function detectPreviewInDevices() {
    isIframe = window.self !== window.top;
    
    try {
        if(isIframe) {
           isPreviewInDevices = window.top.document.querySelector(".marvel-device") !== null;
        }
    } catch(e) {
        isPreviewInDevices = false;
    }
    
    if(isPreviewInDevices) {
        if(window.top.document.querySelector(".marvel-device").classList.contains("iphone-x") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12mini") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12pro") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12max")) {
            body.classList.add('ios');
            body.classList.add('iphonex');
        }
        
        // check if sticky-observer is available and call the action for Preview in Devices
        if(document.querySelector("._phantom-limb .active-screen .sticky-observer")){
            $actions.SetStickyObserver(); 
        }
        
        addGeneralPreview();
        
    }
}

// Holds the logic to add or not the iPhoneX css preview
function addGeneralPreview() {
  
    var stylesEl = document.getElementById("preview-css");
    var css;

    if (stylesEl === null) {
        if(window.top.document.querySelector(".marvel-device").classList.contains("iphone-x") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12mini") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12pro") || window.top.document.querySelector(".marvel-device").classList.contains("iphone12max")) { 
            css = $parameters.PreviewCSS + $parameters.GeneralCss;
        } else {
            css = $parameters.GeneralCss;
        }
        
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = "preview-css";
      
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
      
        document.body.appendChild(style);
    }
}

detectPreviewInDevices();
};
});

define("OutSystemsUI.controller$IsDesktop", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceType"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isDesktop$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsDesktop$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceTypeVar = getDeviceTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:A+Ouy1m8hEqkJ1_FDu4WGw:/ClientActionFlows.A+Ouy1m8hEqkJ1_FDu4WGw:bgZdKfEt+tvPCz4wG_A0gA", "OutSystemsUI", "IsDesktop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTLxb6dpl0GnKezFuLXCrg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LyPCmHPMOUiz05omO6N5Kg", callContext.id);
// Execute Action: GetDeviceType
getDeviceTypeVar.value = OutSystemsUIController.default.getDeviceType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cxAlCplvwEOSSdLslc2ylQ", callContext.id);
// IsDesktop = GetDeviceType.Device = "desktop"
outVars.value.isDesktopOut = (getDeviceTypeVar.value.deviceOut === "desktop");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:shg_i4TieE2fMp_GRRTp+w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:A+Ouy1m8hEqkJ1_FDu4WGw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsDesktop$outVars", [{
name: "IsDesktop",
attrName: "isDesktopOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isDesktop$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isDesktop$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsDesktop: OS.DataConversion.JSNodeParamConverter.to(actionResults.isDesktopOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUI.controller$IsLayoutNative", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsLayoutNative.CheckIsWebAppJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsLayoutNative_CheckIsWebAppJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isLayoutNative$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkIsWebAppJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsLayoutNative$outVars"))());
varBag.callContext = callContext;
varBag.checkIsWebAppJSResult = checkIsWebAppJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:lx9tgaLOqEueK5wx+OeU2g:/ClientActionFlows.lx9tgaLOqEueK5wx+OeU2g:6y2UazCXEDU9TNpkxj5y_w", "OutSystemsUI", "IsLayoutNative", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WxC60Fvoo0imnOA_0M6dRA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BjdfYuAz7k2Qa63M89MgIQ", callContext.id);
checkIsWebAppJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsLayoutNative_CheckIsWebAppJS, "CheckIsWebApp", "IsLayoutNative", {
IsNative: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsLayoutNative$checkIsWebAppJSResult"))();
jsNodeResult.isNativeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsNative, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZEnosUnOOEaBCy8p+AwC_A", callContext.id);
// IsNative = CheckIsWebApp.IsNative
outVars.value.isNativeOut = checkIsWebAppJSResult.value.isNativeOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dL+JpQQ7_U+uB5tJ+k+j1g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:lx9tgaLOqEueK5wx+OeU2g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsLayoutNative$checkIsWebAppJSResult", [{
name: "IsNative",
attrName: "isNativeOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsLayoutNative$outVars", [{
name: "IsNative",
attrName: "isNativeOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isLayoutNative$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isLayoutNative$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsNative: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNativeOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsLayoutNative.CheckIsWebAppJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var layout = document.body.querySelector('.layout');

if(layout) {
    var isNative = layout.classList.contains('layout-native');

    if(isNative) {
        $parameters.IsNative = true;
    } else {
        $parameters.IsNative = false;
    }
}

};
});

define("OutSystemsUI.controller$IsMenuDraggable", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsMenuDraggable.CheckIfNativeJS", "OutSystemsUI.controller$IsRunningAsPWA"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsMenuDraggable_CheckIfNativeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isMenuDraggable$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkIfNativeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsMenuDraggable$outVars"))());
varBag.callContext = callContext;
varBag.checkIfNativeJSResult = checkIfNativeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Nrq11Yu9QUG7x8e2miqF_g:/ClientActionFlows.Nrq11Yu9QUG7x8e2miqF_g:_60TO+Fhro7TrjWWY6Xweg", "OutSystemsUI", "IsMenuDraggable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AoRWa3vjr0KRRO58Ml_SZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9uW+UGQms020qoCwM_hTwA", callContext.id);
checkIfNativeJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsMenuDraggable_CheckIfNativeJS, "CheckIfNative", "IsMenuDraggable", {
IsRunninAsNative: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsMenuDraggable$checkIfNativeJSResult"))();
jsNodeResult.isRunninAsNativeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRunninAsNative, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:x_zsccUNzkqBWuVlx3BtvQ", callContext.id) && (checkIfNativeJSResult.value.isRunninAsNativeOut && !(OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isRunningAsPWA$Action(callContext).isStandaloneOut;
}, OS.Types.Boolean, callContext.id))))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WN5EkcnMEUa9gSAwr73Jzw", callContext.id);
// AddDrag = True
outVars.value.addDragOut = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yZhYFGAlTECYmc1mZ+rvVw", callContext.id);
} else {
// RemoveDrag
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bDUEP7C72U+kTjHaTC6eow", callContext.id);
// AddDrag = False
outVars.value.addDragOut = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yZhYFGAlTECYmc1mZ+rvVw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Nrq11Yu9QUG7x8e2miqF_g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsMenuDraggable$checkIfNativeJSResult", [{
name: "IsRunninAsNative",
attrName: "isRunninAsNativeOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsMenuDraggable$outVars", [{
name: "AddDrag",
attrName: "addDragOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isMenuDraggable$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isMenuDraggable$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AddDrag: OS.DataConversion.JSNodeParamConverter.to(actionResults.addDragOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsMenuDraggable.CheckIfNativeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.cordova) {
    $parameters.IsRunninAsNative = true;
}
};
});

define("OutSystemsUI.controller$IsPhone", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceType"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isPhone$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsPhone$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceTypeVar = getDeviceTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yHQFd4E_hEmOMh7uK+5Fyg:/ClientActionFlows.yHQFd4E_hEmOMh7uK+5Fyg:jlNGnkfs63fUxTw_ptXEWQ", "OutSystemsUI", "IsPhone", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sqTjqT20_kKX0XFd6smU8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BX3uLVf1k0Wr5zgao8m4ow", callContext.id);
// Execute Action: GetDeviceType
getDeviceTypeVar.value = OutSystemsUIController.default.getDeviceType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sI5YvXpAx0yzCJClQinRcA", callContext.id);
// IsPhone = GetDeviceType.Device = "phone"
outVars.value.isPhoneOut = (getDeviceTypeVar.value.deviceOut === "phone");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HiJh7DVYkUquZoFhy0NigQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yHQFd4E_hEmOMh7uK+5Fyg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsPhone$outVars", [{
name: "IsPhone",
attrName: "isPhoneOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isPhone$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isPhone$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsPhone: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPhoneOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUI.controller$IsRTL", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsRTL.CheckRTLJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsRTL_CheckRTLJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isRTL$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkRTLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRTL$outVars"))());
varBag.callContext = callContext;
varBag.checkRTLJSResult = checkRTLJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:HjGQh2D2hU+nLBMXmpwmcw:/ClientActionFlows.HjGQh2D2hU+nLBMXmpwmcw:fGGKlGcrnSM93Y4YwPcAAw", "OutSystemsUI", "IsRTL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ph4QaBIuWUSY1qD+ld_GMw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AvkLh6PCIkWXMP_fWWgdKA", callContext.id);
// Retunrs the value of IsRTL
checkRTLJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsRTL_CheckRTLJS, "CheckRTL", "IsRTL", {
RTL: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRTL$checkRTLJSResult"))();
jsNodeResult.rTLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RTL, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p6P7C3DiI0WZrIN1Stmo_w", callContext.id);
// IsRTL = CheckRTL.RTL
outVars.value.isRTLOut = checkRTLJSResult.value.rTLOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a1AFToz+ZEiA_fuuO2V99w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:HjGQh2D2hU+nLBMXmpwmcw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRTL$checkRTLJSResult", [{
name: "RTL",
attrName: "rTLOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRTL$outVars", [{
name: "IsRTL",
attrName: "isRTLOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isRTL$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isRTL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsRTL: OS.DataConversion.JSNodeParamConverter.to(actionResults.isRTLOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsRTL.CheckRTLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.RTL = document.querySelector('.is-rtl') ? true : false;
};
});

define("OutSystemsUI.controller$IsRunningAsNativeApp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsRunningAsNativeApp.IsRunningAsNativeAppJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsRunningAsNativeApp_IsRunningAsNativeAppJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isRunningAsNativeApp$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isRunningAsNativeAppJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRunningAsNativeApp$outVars"))());
varBag.callContext = callContext;
varBag.isRunningAsNativeAppJSResult = isRunningAsNativeAppJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:37KWqFpqCkStrm5OXq88kA:/ClientActionFlows.37KWqFpqCkStrm5OXq88kA:wmHnV0h0qQYO1ypY0bprjg", "OutSystemsUI", "IsRunningAsNativeApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DqBS3t+_oEO9sItcyjS1+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SFRpRIsTa0aEhQ7QPLWumA", callContext.id);
isRunningAsNativeAppJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsRunningAsNativeApp_IsRunningAsNativeAppJS, "IsRunningAsNativeApp", "IsRunningAsNativeApp", {
IsRunningAsNativeApp: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRunningAsNativeApp$isRunningAsNativeAppJSResult"))();
jsNodeResult.isRunningAsNativeAppOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRunningAsNativeApp, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vM6lmAHg0UKLWf61JS6SEg", callContext.id);
// IsRunningAsNative = IsRunningAsNativeApp.IsRunningAsNativeApp
outVars.value.isRunningAsNativeOut = isRunningAsNativeAppJSResult.value.isRunningAsNativeAppOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:D9+I+3ZbBUSN+9kEcubkzQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:37KWqFpqCkStrm5OXq88kA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRunningAsNativeApp$isRunningAsNativeAppJSResult", [{
name: "IsRunningAsNativeApp",
attrName: "isRunningAsNativeAppOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRunningAsNativeApp$outVars", [{
name: "IsRunningAsNative",
attrName: "isRunningAsNativeOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isRunningAsNativeApp$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isRunningAsNativeApp$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsRunningAsNative: OS.DataConversion.JSNodeParamConverter.to(actionResults.isRunningAsNativeOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsRunningAsNativeApp.IsRunningAsNativeAppJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRunningAsNativeApp = OutSystems.OSUI.Utils.IsRunningAsNativeApp();
};
});

define("OutSystemsUI.controller$IsRunningAsPWA", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsRunningAsPWA.IsRunningAsPWAJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsRunningAsPWA_IsRunningAsPWAJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isRunningAsPWA$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isRunningAsPWAJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRunningAsPWA$outVars"))());
varBag.callContext = callContext;
varBag.isRunningAsPWAJSResult = isRunningAsPWAJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:O_Ml7RGknUKI9tOPbQZuzQ:/ClientActionFlows.O_Ml7RGknUKI9tOPbQZuzQ:QJJA3hJclpNgXUH9hduXmA", "OutSystemsUI", "IsRunningAsPWA", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iAzpqeW8YE+hQY0ysv1bTQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ho14ByP0d0KPoK4vE2Wcbw", callContext.id);
isRunningAsPWAJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsRunningAsPWA_IsRunningAsPWAJS, "IsRunningAsPWA", "IsRunningAsPWA", {
isStandalone: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsRunningAsPWA$isRunningAsPWAJSResult"))();
jsNodeResult.isStandaloneOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isStandalone, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jefUQlH3PUaIAN9jziLkZw", callContext.id);
// IsStandalone = IsRunningAsPWA.isStandalone
outVars.value.isStandaloneOut = isRunningAsPWAJSResult.value.isStandaloneOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:z1rKWThoikyqbsqTH28vdw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:O_Ml7RGknUKI9tOPbQZuzQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRunningAsPWA$isRunningAsPWAJSResult", [{
name: "isStandalone",
attrName: "isStandaloneOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsRunningAsPWA$outVars", [{
name: "IsStandalone",
attrName: "isStandaloneOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isRunningAsPWA$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isRunningAsPWA$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsStandalone: OS.DataConversion.JSNodeParamConverter.to(actionResults.isStandaloneOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsRunningAsPWA.IsRunningAsPWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true) {
    $parameters.isStandalone = true;
}
else {
    $parameters.isStandalone = false;
}
};
});

define("OutSystemsUI.controller$IsTablet", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceType"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isTablet$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsTablet$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceTypeVar = getDeviceTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:eSfw9qKoGkSe9uxu_d4bSg:/ClientActionFlows.eSfw9qKoGkSe9uxu_d4bSg:z2DgsomQNC4CEYwnUUgrQQ", "OutSystemsUI", "IsTablet", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AoelbxLQKUqZjyK10lGysw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ioZf772KpUSfGBw8JlIMDw", callContext.id);
// Execute Action: GetDeviceType
getDeviceTypeVar.value = OutSystemsUIController.default.getDeviceType$Action(callContext);

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PbdePxtRWE68PTVq_rpzaw", callContext.id);
// IsTablet = GetDeviceType.Device = "tablet"
outVars.value.isTabletOut = (getDeviceTypeVar.value.deviceOut === "tablet");
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JWCYa7HVNEGLLv_HARuYcQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:eSfw9qKoGkSe9uxu_d4bSg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsTablet$outVars", [{
name: "IsTablet",
attrName: "isTabletOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isTablet$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isTablet$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsTablet: OS.DataConversion.JSNodeParamConverter.to(actionResults.isTabletOut, OS.Types.Boolean)
};
});
};
});

define("OutSystemsUI.controller$IsWebApp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsWebApp.CheckIsWebAppJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_IsWebApp_CheckIsWebAppJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.isWebApp$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkIsWebAppJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.IsWebApp$outVars"))());
varBag.callContext = callContext;
varBag.checkIsWebAppJSResult = checkIsWebAppJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:02qGF+VI30iww9i_k+iKfA:/ClientActionFlows.02qGF+VI30iww9i_k+iKfA:QFjHOVPP1wij7uuBuqRr3g", "OutSystemsUI", "IsWebApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GielZ0yGqkW7VIAg9TrmJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:A8C7OkSCkkqYxzxiYRUweA", callContext.id);
checkIsWebAppJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_IsWebApp_CheckIsWebAppJS, "CheckIsWebApp", "IsWebApp", {
IsWebApp: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.IsWebApp$checkIsWebAppJSResult"))();
jsNodeResult.isWebAppOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsWebApp, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e0xiL7IHIkuRGzAdAPR3hw", callContext.id);
// IsWebApp = CheckIsWebApp.IsWebApp
outVars.value.isWebAppOut = checkIsWebAppJSResult.value.isWebAppOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:++p8oBPhkEiRVivVDh0l0A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:02qGF+VI30iww9i_k+iKfA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsWebApp$checkIsWebAppJSResult", [{
name: "IsWebApp",
attrName: "isWebAppOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.IsWebApp$outVars", [{
name: "IsWebApp",
attrName: "isWebAppOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.isWebApp$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.isWebApp$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsWebApp: OS.DataConversion.JSNodeParamConverter.to(actionResults.isWebAppOut, OS.Types.Boolean)
};
});
};
});
define("OutSystemsUI.controller$IsWebApp.CheckIsWebAppJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var layout = document.body.querySelector('.layout');

if(layout) {
    var isNative = layout.classList.contains('layout-native');
    var isNotOldNativeLayouts = document.querySelector('.active-screen .layout.layout-top') || document.querySelector('.active-screen .layout.layout-side') || document.querySelector('.active-screen .layout.blank') || document.querySelector('.active-screen .layout.layout-blank');
    
    if(isNotOldNativeLayouts && !isNative) {
            $parameters.IsWebApp = true;
    }
}

};
});

define("OutSystemsUI.controller$LayoutReady", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$LayoutReady.RunOnStartJS", "OutSystemsUI.controller$LayoutReady.GetHeaderAndFooterSizeJS", "OutSystemsUI.controller$LayoutReady.FixForRenderingIssuesJS", "OutSystemsUI.controller$LayoutReady.ViewportJS", "OutSystemsUI.controller$LayoutReady.CloseMenuOnBodyClickJS", "OutSystemsUI.controller$LayoutReady.SetExpandableExceptionsJS", "OutSystemsUI.controller$iPhoneXPreview", "OutSystemsUI.controller$FixInputs", "OutSystemsUI.controller$IsRunningAsPWA", "OutSystemsUI.controller$IsWebApp", "OutSystemsUI.controller$DeviceDetection", "OutSystemsUI.controller$ECTCall", "OutSystemsUI.controller$WCAGMetaTag", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetStickyObserver"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_LayoutReady_RunOnStartJS, OutSystemsUI_controller_LayoutReady_GetHeaderAndFooterSizeJS, OutSystemsUI_controller_LayoutReady_FixForRenderingIssuesJS, OutSystemsUI_controller_LayoutReady_ViewportJS, OutSystemsUI_controller_LayoutReady_CloseMenuOnBodyClickJS, OutSystemsUI_controller_LayoutReady_SetExpandableExceptionsJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.layoutReady$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.LayoutReady$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3YPe0a8dvEOq0s0BQKEmYA:/ClientActionFlows.3YPe0a8dvEOq0s0BQKEmYA:mkuFMFK0p8EJ5YZ1e8hwmA", "OutSystemsUI", "LayoutReady", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gGkKczYuTUWJTqZtPQ8ZWw", callContext.id);
// Init IsWebApp and IsPWA
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:abi+PXG80Uq9gnuUQfZdJA", callContext.id);
// IsWebApp = IsWebApp()
vars.value.isWebAppVar = OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isWebApp$Action(callContext).isWebAppOut;
}, OS.Types.Boolean, callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:abi+PXG80Uq9gnuUQfZdJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsPWA = IsRunningAsPWA()
vars.value.isPWAVar = OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isRunningAsPWA$Action(callContext).isStandaloneOut;
}, OS.Types.Boolean, callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PdwtDmJ9MUKMS4YDtId34w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_RunOnStartJS, "RunOnStart", "LayoutReady", {
IsPWA: OS.DataConversion.JSNodeParamConverter.to(vars.value.isPWAVar, OS.Types.Boolean),
URL: OS.DataConversion.JSNodeParamConverter.to(OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsUI.MWO.js"), OS.Types.Text),
IsWebApp: OS.DataConversion.JSNodeParamConverter.to(vars.value.isWebAppVar, OS.Types.Boolean)
}, function ($parameters) {
}, {
DeviceDetection: OutSystemsUIController.default.clientActionProxies.deviceDetection$Action,
ECTCall: OutSystemsUIController.default.clientActionProxies.eCTCall$Action,
WCAGMetaTag: OutSystemsUIController.default.clientActionProxies.wCAGMetaTag$Action,
RequireScript: OS.SystemActions.requireScript
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fd7I_BtwWkecM47jRYQwFQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_SetExpandableExceptionsJS, "SetExpandableExceptions", "LayoutReady", null, function ($parameters) {
}, {
ToggleSideMenu: OutSystemsUIController.default.clientActionProxies.toggleSideMenu$Action,
SetStickyObserver: OutSystemsUIController.default.clientActionProxies.setStickyObserver$Action
}, {});
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cub9l9AjtE+lUq_EVw9sqg", callContext.id) && vars.value.isWebAppVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9bcwgxs8tka6zDwDgHPlfg", callContext.id);
// Execute Action: FixInputs
OutSystemsUIController.default.fixInputs$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B2Fl0bIY5UqjnDYFY8KlvA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_CloseMenuOnBodyClickJS, "CloseMenuOnBodyClick", "LayoutReady", null, function ($parameters) {
}, {}, {});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:b0DbFMMJeE6xWwKtJdAwxA", callContext.id);
// Execute Action: iPhoneXPreview
OutSystemsUIController.default.iPhoneXPreview$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:07SEFfNsg0K4cJ3Z4ke3iA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_GetHeaderAndFooterSizeJS, "GetHeaderAndFooterSize", "LayoutReady", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vedik6OqRESlGJkYBGu5Tg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_FixForRenderingIssuesJS, "FixForRenderingIssues", "LayoutReady", null, function ($parameters) {
}, {}, {});
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9hie0LpEdE24tR9bVTqriQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LayoutReady_ViewportJS, "Viewport", "LayoutReady", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gSzoQbcWEEqViZ16wV_Brg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3YPe0a8dvEOq0s0BQKEmYA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.LayoutReady$vars", [{
name: "IsWebApp",
attrName: "isWebAppVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsPWA",
attrName: "isPWAVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.layoutReady$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.layoutReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$LayoutReady.RunOnStartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Actions that run only once per application start

if(window.applicationStarted === undefined) {
    $actions.DeviceDetection($parameters.IsWebApp);

    if($parameters.IsWebApp || $parameters.IsPWA) {
        $actions.ECTCall();  
        $actions.WCAGMetaTag();
    }
    
    // Call the "Built with OutSystems" label for Reactive Web apps
    var showMWO = false;
    
    try {
        showMWO = $public.Branding.showOutSystemsWatermark();
    } catch(e) {
        
    }
    
    $actions.RequireScript($parameters.URL).then(function(){
        if(showMWO && $parameters.IsWebApp) {
            osui.StartMWO();
        }
    });
    
    window.applicationStarted = true;
}
};
});
define("OutSystemsUI.controller$LayoutReady.GetHeaderAndFooterSizeJS", [], function () {
return function ($actions, $roles, $public) {
var headerContent = document.querySelector('.header-top-content');
var footer = document.querySelector('.footer');
var body = document.body;

if(headerContent) {
    var headerContentHeight = headerContent.getBoundingClientRect().height;
    body.style.setProperty('--header-size-content', headerContentHeight + "px");
}

if(footer) {
    var footerHeight = footer.getBoundingClientRect().height;
    body.style.setProperty('--footer-height', footerHeight + "px"); 
}
};
});
define("OutSystemsUI.controller$LayoutReady.FixForRenderingIssuesJS", [], function () {
return function ($actions, $roles, $public) {
// Simulate scroll to avoid rendering issues on WebView (replicated on Tablet devices)
var docElem = document.documentElement;

docElem.scrollLeft = 2;

setTimeout(function(){ 
    docElem.scrollLeft = 0;
}, 100);
};
});
define("OutSystemsUI.controller$LayoutReady.ViewportJS", [], function () {
return function ($actions, $roles, $public) {
if(document.body.classList.contains('phone') || document.body.classList.contains('tablet')) {
    document.body.style.setProperty('--viewport-height', innerHeight + 'px');
}
};
});
define("OutSystemsUI.controller$LayoutReady.CloseMenuOnBodyClickJS", [], function () {
return function ($actions, $roles, $public) {
var isDesktop = document.body.classList.contains('desktop');
var layout = document.querySelector('.layout');
var isSideMenu;

if(layout) {
   isSideMenu = layout.classList.contains('layout-side'); 
}

var closeOnBodyClick = function() {
    var menu = document.querySelector('.app-menu-links');
    
    if(menu) {
        var subItems = menu.querySelectorAll('.submenu');
        
        if(subItems.length > 0) {
            for(var i = 0; i < subItems.length; i++) {
                if(subItems[i].classList.contains('open')) {
                    subItems[i].CloseMenu();
                } 
            }
        }    
    }
};

// If is Desktop and not SideMenu, add eventListener on Body, to close Menu on click
if(isDesktop && !isSideMenu) {
   document.body.addEventListener('click', closeOnBodyClick);
}

};
});
define("OutSystemsUI.controller$LayoutReady.SetExpandableExceptionsJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.layout');
var body = document.body;
var isExpandable = layout.classList.contains('aside-expandable');
var nativeLayout = layout.classList.contains('layout-native');
var isTabletLandscape = body.classList.contains('tablet') && body.classList.contains('landscape');
var isDesktop = body.classList.contains('desktop');
var isHideOnScroll = layout.classList.contains('hide-header-on-scroll');


if(layout && isExpandable && (nativeLayout && isTabletLandscape || isDesktop)) {
    $actions.ToggleSideMenu();
}

// Set StickyListener when HideHeaderOnScroll is used to adapt menu padding when Expandable
if(layout && nativeLayout && isHideOnScroll && isExpandable && (isTabletLandscape || isDesktop)) {
    $actions.SetStickyObserver();
}
};
});

define("OutSystemsUI.controller$ListItemHint", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ListItemHint.ListItemAnimateJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ListItemHint_ListItemAnimateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.listItemHint$Action = function (listIdIn, hasLeftActionIn, hasRightActionIn, animationTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ListItemHint$vars"))());
vars.value.listIdInLocal = listIdIn;
vars.value.hasLeftActionInLocal = hasLeftActionIn;
vars.value.hasRightActionInLocal = hasRightActionIn;
vars.value.animationTimeInLocal = animationTimeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zInTb5waXk6r33Wt42NZGg:/ClientActionFlows.zInTb5waXk6r33Wt42NZGg:1W2pivi+QoNAa1KGwqCC0Q", "OutSystemsUI", "ListItemHint", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TqkjCJNYoUiv3yTkFD6Q_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HI7FczBGrEKwVfINKPZ6vA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ListItemHint_ListItemAnimateJS, "ListItemAnimate", "ListItemHint", {
AnimationTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.animationTimeInLocal, OS.Types.Decimal),
ListId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listIdInLocal, OS.Types.Text),
HasRightAction: OS.DataConversion.JSNodeParamConverter.to(vars.value.hasRightActionInLocal, OS.Types.Boolean),
HasLeftAction: OS.DataConversion.JSNodeParamConverter.to(vars.value.hasLeftActionInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R5jQfKdCSkuzzP2KGVEAiA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zInTb5waXk6r33Wt42NZGg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ListItemHint$vars", [{
name: "ListId",
attrName: "listIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasLeftAction",
attrName: "hasLeftActionInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasRightAction",
attrName: "hasRightActionInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AnimationTime",
attrName: "animationTimeInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.listItemHint$Action = function (listIdIn, hasLeftActionIn, hasRightActionIn, animationTimeIn) {
listIdIn = (listIdIn === undefined) ? "" : listIdIn;
hasLeftActionIn = (hasLeftActionIn === undefined) ? false : hasLeftActionIn;
hasRightActionIn = (hasRightActionIn === undefined) ? false : hasRightActionIn;
animationTimeIn = (animationTimeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : animationTimeIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.listItemHint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(hasLeftActionIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(hasRightActionIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(animationTimeIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ListItemHint.ListItemAnimateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var timeoutVar;
var timeAnimation = $parameters.AnimationTime / 6;

var waitListRender = function() {
    listEl = document.querySelector('#' + $parameters.ListId);

    if(!listEl.classList.contains('list-loading')) { 
        listAnimateItems();
        clearTimeout(timeoutVar);
    } else {
        timeoutVar = setTimeout(waitListRender, 50);
    }
};

var listAnimateItems = function() {
    setTimeout(function(){
        listElement = document.getElementById($parameters.ListId).childNodes[1];
        listItemContentLeft = listElement.querySelector('.active-screen .list-item-left-actions');
        listItemContentRight = listElement.querySelector('.active-screen .list-item-right-actions');
        
        listElement.style.pointerEvents = 'none';
        
        if($parameters.HasLeftAction && $parameters.HasRightAction || $parameters.HasLeftAction) {
            listItemContentLeft.classList.add('has-content-animation');
            listItemContentLeft.setAttribute('style', 'width:75px; transition: all ' + timeAnimation + 'ms !important;');
            
            setTimeout(function(){
                listItemContentLeft.style.width = '';
                
                listItemContentLeft.addEventListener("transitionend", function(event) {
                    listItemContentLeft.classList.remove('has-content-animation');
                    listItemContentLeft.removeAttribute('style');
                    listElement.style.pointerEvents = '';
                }, false);
                
            },timeAnimation * 3);
            
        } else if($parameters.HasRightAction) {
            listItemContentRight.classList.add('has-content-animation-right');
            listItemContentRight.setAttribute('style', 'width:75px; transition: all ' + timeAnimation + 'ms !important; height: ' + listElement.offsetHeight + 'px;');
            
            setTimeout(function(){
                listItemContentRight.style.width = '';
                
                listItemContentRight.addEventListener("transitionend", function(event) {
                    listItemContentRight.classList.remove('has-content-animation-right');
                    listItemContentRight.removeAttribute('style');
                    listElement.style.pointerEvents = '';
                }, false);

            }, timeAnimation * 3);
        }    
    },timeAnimation); // waiting for screen transition ends
};

waitListRender();

};
});

define("OutSystemsUI.controller$LogEvent", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$LogEvent.LogMessageJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_LogEvent_LogMessageJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.logEvent$Action = function (logTypeIdIn, messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.LogEvent$vars"))());
vars.value.logTypeIdInLocal = logTypeIdIn;
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3jjJi8SibUOUuWrcNNmYFg:/ClientActionFlows.3jjJi8SibUOUuWrcNNmYFg:YDlYESYfFWzbeO3D1k6_8Q", "OutSystemsUI", "LogEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:d7QToJUgb0acQOAkGEAiow", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8rwDnoRDaEmrQkqQ_JU2wA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_LogEvent_LogMessageJS, "LogMessage", "LogEvent", {
LogTypeId: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.identifierToText(vars.value.logTypeIdInLocal), OS.Types.Text),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8RkFEDUd_EmY8syNmF1KEw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3jjJi8SibUOUuWrcNNmYFg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.LogEvent$vars", [{
name: "LogTypeId",
attrName: "logTypeIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.logEvent$Action = function (logTypeIdIn, messageIn) {
logTypeIdIn = (logTypeIdIn === undefined) ? "" : logTypeIdIn;
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.logEvent$Action.bind(controller, logTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$LogEvent.LogMessageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OSUIFramework.Helper.LogMessage($parameters.Message);
};
});

define("OutSystemsUI.controller$MasterDetailSetContentFocus", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$MasterDetailSetContentFocus.SetFocusBehaviourJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_MasterDetailSetContentFocus_SetFocusBehaviourJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.masterDetailSetContentFocus$Action = function (contentIdIn, triggerItemIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.MasterDetailSetContentFocus$vars"))());
vars.value.contentIdInLocal = contentIdIn;
vars.value.triggerItemInLocal = triggerItemIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3wuNsg73ZEiE8P2CkpP9KQ:/ClientActionFlows.3wuNsg73ZEiE8P2CkpP9KQ:mx52CeutTkcBrBid7AqkEg", "OutSystemsUI", "MasterDetailSetContentFocus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:umhO4t1XbkqQxH9AU8G4uQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UufczVjIsEqSMRYpostVdw", callContext.id);
// MasterDetail focus behaviour
controller.safeExecuteJSNode(OutSystemsUI_controller_MasterDetailSetContentFocus_SetFocusBehaviourJS, "SetFocusBehaviour", "MasterDetailSetContentFocus", {
SetFocusWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.contentIdInLocal, OS.Types.Text),
ClickedItemId: OS.DataConversion.JSNodeParamConverter.to(vars.value.triggerItemInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p8Zn95o0eEe6GzaS83pa1g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3wuNsg73ZEiE8P2CkpP9KQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.MasterDetailSetContentFocus$vars", [{
name: "ContentId",
attrName: "contentIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TriggerItem",
attrName: "triggerItemInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.masterDetailSetContentFocus$Action = function (contentIdIn, triggerItemIn) {
contentIdIn = (contentIdIn === undefined) ? "" : contentIdIn;
triggerItemIn = (triggerItemIn === undefined) ? "" : triggerItemIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.masterDetailSetContentFocus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(contentIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(triggerItemIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$MasterDetailSetContentFocus.SetFocusBehaviourJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Set focus in the container
var elementId = document.getElementById($parameters.SetFocusWidgetId);
var isPhone = document.body.classList.contains('phone');

elementId.setAttribute('tabindex', "0");
elementId.focus();

if(!isPhone) {
    // Set the properties to define the tab navigation inside the content
    var focusItemTop = elementId.closest(".split-right-content").querySelector("span.focus-item.top");
    focusItemTop.setAttribute("tabindex", "0");
    focusItemTop.setAttribute("focusItemId", $parameters.ClickedItemId);
    
    var focusItemBottom = elementId.closest(".split-right-content").querySelector("span.focus-item.bottom");
    if(document.querySelector("#"+$parameters.ClickedItemId + " + div")){
        focusItemBottom.setAttribute("tabindex", "0");
        focusItemBottom.setAttribute("focusItemId", document.querySelector("#"+$parameters.ClickedItemId + " + div").id);   
    }
    else {
        focusItemBottom.setAttribute("tabindex", "-1");
        focusItemBottom.removeAttribute("focusItemId");
    } 
}
};
});

define("OutSystemsUI.controller$MenuHide", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$MenuHide.ToggleLayoutClassJS", "OutSystemsUI.controller$SetMenuAttributes"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_MenuHide_ToggleLayoutClassJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.menuHide$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:rTUt1ZeC60SXXTbA17bXvg:/ClientActionFlows.rTUt1ZeC60SXXTbA17bXvg:2Ruf3xRqYsKlBeUrgfWZMw", "OutSystemsUI", "MenuHide", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GDX+rV1O5kq12XItQlSn0Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9md9YTHjZkiZZN3suuWnkg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_MenuHide_ToggleLayoutClassJS, "ToggleLayoutClass", "MenuHide", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2CMMB0HzZEC6nyNriXP6hw", callContext.id);
// Execute Action: SetMenuAttributes
OutSystemsUIController.default.setMenuAttributes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MHbbMoVcvUqcZ22JkcaTVA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:rTUt1ZeC60SXXTbA17bXvg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.menuHide$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.menuHide$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$MenuHide.ToggleLayoutClassJS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.menu');
var appMenu = document.querySelector('.app-menu-container');
var menuOverlay = document.querySelector('.menu-background');

if(menu) {
    menu.classList.remove('menu--visible');

     if(menuOverlay) {
            menuOverlay.style.opacity = "";
    }
    
    appMenu.style.transform =  "";
    appMenu.style.webkitTransform =  "";
    
    
    menu.addEventListener("transitionend", OnTransitionEnd, false);
}

function OnTransitionEnd() {
    menu.classList.remove('menu--animatable');
    
    menu.removeEventListener("transitionend", OnTransitionEnd);
}

};
});

define("OutSystemsUI.controller$MenuShow", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$MenuShow.ToggleLayoutClassJS", "OutSystemsUI.controller$SetMenuAttributes"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_MenuShow_ToggleLayoutClassJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.menuShow$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kaZY_xZ0Q0WkzEXP5e61QQ:/ClientActionFlows.kaZY_xZ0Q0WkzEXP5e61QQ:RJPceJR1VqyP0vAE3Qknxw", "OutSystemsUI", "MenuShow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1F_gKW0w3kiU1fVedwTQPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+p4JrADMgEuyMGCRVuSHCA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_MenuShow_ToggleLayoutClassJS, "ToggleLayoutClass", "MenuShow", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Bdzy9IeAXEWqOgmZoO4bnQ", callContext.id);
// Execute Action: SetMenuAttributes
OutSystemsUIController.default.setMenuAttributes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tLfQai9OfkS9OKvWPJfK5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kaZY_xZ0Q0WkzEXP5e61QQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.menuShow$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.menuShow$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$MenuShow.ToggleLayoutClassJS", [], function () {
return function ($actions, $roles, $public) {
var myMenu = document.querySelector(".menu");

myMenu.classList.add('menu--visible');
myMenu.classList.add('menu--animatable');
};
});

define("OutSystemsUI.controller$MoveElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$MoveElement.MoveElementJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_MoveElement_MoveElementJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.moveElement$Action = function (widgetIDIn, targetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.MoveElement$vars"))());
vars.value.widgetIDInLocal = widgetIDIn;
vars.value.targetInLocal = targetIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fKauCzBE8E+Jnb0QL5gRGQ:/ClientActionFlows.fKauCzBE8E+Jnb0QL5gRGQ:fsR3VvdviUxUdVqirVjoXQ", "OutSystemsUI", "MoveElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X4j8W89180G23LxsRYkLpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ys785lY_qE6ziCYEBGOpgw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_MoveElement_MoveElementJS, "MoveElement", "MoveElement", {
Target: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetInLocal, OS.Types.Object),
Element: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIDInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oolQX8C0XUGcbQqdZ6H8Hg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fKauCzBE8E+Jnb0QL5gRGQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.MoveElement$vars", [{
name: "WidgetID",
attrName: "widgetIDInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}, {
name: "Target",
attrName: "targetInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.moveElement$Action = function (widgetIDIn, targetIn) {
widgetIDIn = (widgetIDIn === undefined) ? null : widgetIDIn;
targetIn = (targetIn === undefined) ? null : targetIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.moveElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIDIn, OS.Types.Object), OS.DataConversion.JSNodeParamConverter.from(targetIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$MoveElement.MoveElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Target && $parameters.Element) 
{
    var screenEl = document.getElementById($parameters.Element);
    var element = document.querySelector($parameters.Target);
    
    if(screenEl && element) 
    {
        setTimeout(function (){
            element.appendChild(screenEl);
        }, 200);
    }
}
};
});

define("OutSystemsUI.controller$NotificationChangeCloseAfterTime", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangeCloseAfterTime.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangeCloseAfterTime_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangeCloseAfterTime$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangeCloseAfterTime$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ec66ebDJKkGiWfVgCC3+tA:/ClientActionFlows.ec66ebDJKkGiWfVgCC3+tA:AexwukCVX7TS_a6XzR4vSw", "OutSystemsUI", "NotificationChangeCloseAfterTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B1lBQgPr8Uup8MsPaCoaOg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:stZ1v7AFuka14N55HyT0UQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangeCloseAfterTime_ChangePropertyJS, "ChangeProperty", "NotificationChangeCloseAfterTime", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("CloseAfterTime", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:m0ayAJEWr0GReDMLkw_ENg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ec66ebDJKkGiWfVgCC3+tA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangeCloseAfterTime$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangeCloseAfterTime$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? 0 : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangeCloseAfterTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangeCloseAfterTime.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationChangeExtendedClass", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangeExtendedClass.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangeExtendedClass_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangeExtendedClass$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:LaOPkKvFSUO_ZKWFBOiAFQ:/ClientActionFlows.LaOPkKvFSUO_ZKWFBOiAFQ:tMzaQN9lOqbPsRO48zso6w", "OutSystemsUI", "NotificationChangeExtendedClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iB9Fr5Tv9k6K0l7szFP1Rw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:clpN2WN2eUKC56QkPf35dg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangeExtendedClass_ChangePropertyJS, "ChangeProperty", "NotificationChangeExtendedClass", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("ExtendedClass", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mbYf7Zuh5kiUGAms8KXxHQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:LaOPkKvFSUO_ZKWFBOiAFQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangeExtendedClass$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangeExtendedClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangeExtendedClass.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationChangeInteractToClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangeInteractToClose.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangeInteractToClose_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangeInteractToClose$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangeInteractToClose$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZhktW+sJqk6xoxIzy8MHtg:/ClientActionFlows.ZhktW+sJqk6xoxIzy8MHtg:Cx813bYH6GdWyT4cEUnpMA", "OutSystemsUI", "NotificationChangeInteractToClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BJHmdRbxZEqcpGToJ8N+bg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kInbJ+xfTES8xCOiP1XtxQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangeInteractToClose_ChangePropertyJS, "ChangeProperty", "NotificationChangeInteractToClose", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("InteractToClose", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e++fup_KAE6DxMuW8yx7dQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZhktW+sJqk6xoxIzy8MHtg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangeInteractToClose$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangeInteractToClose$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangeInteractToClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangeInteractToClose.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationChangePosition", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangePosition.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangePosition_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangePosition$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangePosition$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:w0vm3smgfEChvw8SDFX+nA:/ClientActionFlows.w0vm3smgfEChvw8SDFX+nA:WCdnLJnmsBCR3JhQodw5wQ", "OutSystemsUI", "NotificationChangePosition", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XpQ4GUqsGkyf9qnzHU6aYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qHuTgDk+mkKoIdN2of05_g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangePosition_ChangePropertyJS, "ChangeProperty", "NotificationChangePosition", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Position", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:91E4e_LjeUeD+uI1ri2b_g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:w0vm3smgfEChvw8SDFX+nA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangePosition$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangePosition$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangePosition$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangePosition.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationChangeStartsOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangeStartsOpen.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangeStartsOpen_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangeStartsOpen$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangeStartsOpen$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:KWiogKDYLkSfEf312yxOCw:/ClientActionFlows.KWiogKDYLkSfEf312yxOCw:SPctMvuEGpg1wgwNb4ZKOQ", "OutSystemsUI", "NotificationChangeStartsOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hZHA92Ozp0ej2vRtAID+8Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e54UxSe9jkyXluvGYG+Aag", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangeStartsOpen_ChangePropertyJS, "ChangeProperty", "NotificationChangeStartsOpen", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("StartsOpen", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K7KoJIvu0EeJooODnRWs4w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:KWiogKDYLkSfEf312yxOCw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangeStartsOpen$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangeStartsOpen$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangeStartsOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangeStartsOpen.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationChangeWidth", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationChangeWidth.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationChangeWidth_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationChangeWidth$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationChangeWidth$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:t7XvDWFDrE+7CP3ILlle3A:/ClientActionFlows.t7XvDWFDrE+7CP3ILlle3A:Y3nySMEtJzWQzyH+e54Q4g", "OutSystemsUI", "NotificationChangeWidth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Xh1MKMaCQE+gdiAqf1L6_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ubmrmh2R10K636Y69JcR0A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationChangeWidth_ChangePropertyJS, "ChangeProperty", "NotificationChangeWidth", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Width", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YhIl09LiA0e8J9HPu_c3OA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:t7XvDWFDrE+7CP3ILlle3A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationChangeWidth$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationChangeWidth$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationChangeWidth$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationChangeWidth.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$NotificationClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationClose.HideNotificationJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationClose_HideNotificationJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationClose$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationClose$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EqGGkzcn4EaYWWRgDiKrWg:/ClientActionFlows.EqGGkzcn4EaYWWRgDiKrWg:OC4ZU_BnXT+JOtakcpcA4A", "OutSystemsUI", "NotificationClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BcD4fcTOvEC99wxeUSkBWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uahTP0TFEEC2dA7m9GRqRA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationClose_HideNotificationJS, "HideNotification", "NotificationClose", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6eXT7wXXUUupqW0yj9f8fw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EqGGkzcn4EaYWWRgDiKrWg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationClose$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationClose$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationClose.HideNotificationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.Hide(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$NotificationCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationCreate.CreateJS", "OutSystemsUI.model$Notification_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:TuKA6M3XrUOzTqMyOymnPw:/ClientActionFlows.TuKA6M3XrUOzTqMyOymnPw:4mpxAnFCmmd5SZlWZ4kgZg", "OutSystemsUI", "NotificationCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cue1BxZpAU6h2yxeolpJ8w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ULfiSpItuUS3I8+9zGqHJA", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MyJ1XjasNUCB7xD6SmUcPQ", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationCreate_CreateJS, "Create", "NotificationCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9p7+Bzk7F0iw0KcmIqHR7Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:TuKA6M3XrUOzTqMyOymnPw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.Notification_InternalConfigRec();
},
complexType: OutSystemsUIModel.Notification_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.notificationCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.Notification_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.Create($parameters.UniqueId, $parameters.Configs);

};
});

define("OutSystemsUI.controller$NotificationDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xUvLCUvWl0iPryYW81hpOw:/ClientActionFlows.xUvLCUvWl0iPryYW81hpOw:qxCuI4EuWtQ16iNPFdohCQ", "OutSystemsUI", "NotificationDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xdXquUhtRUKsvQj9Jyy16w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QGkwtpwU4UWD5YSdN+LfOQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationDestroy_DestroyJS, "Destroy", "NotificationDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dZT9vPsubkSP+CWR1GN_Ww", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xUvLCUvWl0iPryYW81hpOw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$NotificationInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationInitialize.InitializeNotificationJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationInitialize_InitializeNotificationJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:UUGwnPdqsEW7nrVjLkpWdA:/ClientActionFlows.UUGwnPdqsEW7nrVjLkpWdA:t20k+uj+xa9AEJR7MnbIJg", "OutSystemsUI", "NotificationInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IMYvScr6dkykZfUn8L_lzg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FAoRcmRPrk6xw52IIHGrtg", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationInitialize_InitializeNotificationJS, "InitializeNotification", "NotificationInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mJoLcW+qUkSDw77W8ZV6EA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:UUGwnPdqsEW7nrVjLkpWdA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationInitialize.InitializeNotificationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$NotificationOnSwipeBottom", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationOnSwipeBottom.onSwipeBottomJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationOnSwipeBottom_onSwipeBottomJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationOnSwipeBottom$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationOnSwipeBottom$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:PQZptZoOukWkYeTbKcHMlw:/ClientActionFlows.PQZptZoOukWkYeTbKcHMlw:nCJVpozO2+8JB3gYapb9CQ", "OutSystemsUI", "NotificationOnSwipeBottom", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ist+LgvCUkOf3yAJ3LicQA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IjaOCbxRhUuYJA4hQb2Drg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationOnSwipeBottom_onSwipeBottomJS, "onSwipeBottom", "NotificationOnSwipeBottom", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:73D+7dk3XUav6KwxhKcIvg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:PQZptZoOukWkYeTbKcHMlw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationOnSwipeBottom$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationOnSwipeBottom$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationOnSwipeBottom$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationOnSwipeBottom.onSwipeBottomJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.GetNotificationById($parameters.UniqueId).onSwipeBottom();
};
});

define("OutSystemsUI.controller$NotificationOnSwipeLeft", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationOnSwipeLeft.OnSwipeLeftJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationOnSwipeLeft_OnSwipeLeftJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationOnSwipeLeft$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationOnSwipeLeft$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:1NwNIBbkQES0Ja+hR7Xo+Q:/ClientActionFlows.1NwNIBbkQES0Ja+hR7Xo+Q:g_bewYPDVIoIUBMwgBWkZw", "OutSystemsUI", "NotificationOnSwipeLeft", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:k8E06Ay5Cky8RIj_zaJyGg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3Av23XtA_0aktWSUvDSl+g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationOnSwipeLeft_OnSwipeLeftJS, "OnSwipeLeft", "NotificationOnSwipeLeft", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TxCrS5Ebsk6_ikQws4ULWw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:1NwNIBbkQES0Ja+hR7Xo+Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationOnSwipeLeft$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationOnSwipeLeft$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationOnSwipeLeft$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationOnSwipeLeft.OnSwipeLeftJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.GetNotificationById($parameters.UniqueId).onSwipeLeft();
};
});

define("OutSystemsUI.controller$NotificationOnSwipeRight", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationOnSwipeRight.OnSwipeRightJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationOnSwipeRight_OnSwipeRightJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationOnSwipeRight$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationOnSwipeRight$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:pCAY2NkeP0qWt3gnbu8MnA:/ClientActionFlows.pCAY2NkeP0qWt3gnbu8MnA:TgIibpwPFWuPtySVhrDstQ", "OutSystemsUI", "NotificationOnSwipeRight", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2TGv5aAvK0GHJjCadzNPIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5ihY8BrPQ0WJ6xTD0ExaqA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationOnSwipeRight_OnSwipeRightJS, "OnSwipeRight", "NotificationOnSwipeRight", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5PM_U6ZPHUS1Qq+noc4sYw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:pCAY2NkeP0qWt3gnbu8MnA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationOnSwipeRight$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationOnSwipeRight$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationOnSwipeRight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationOnSwipeRight.OnSwipeRightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.GetNotificationById($parameters.UniqueId).onSwipeRight();
};
});

define("OutSystemsUI.controller$NotificationOnSwipeTop", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationOnSwipeTop.OnSwipeTopJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationOnSwipeTop_OnSwipeTopJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationOnSwipeTop$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationOnSwipeTop$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:05CwHtw4pUq_Am_KYwu7vg:/ClientActionFlows.05CwHtw4pUq_Am_KYwu7vg:g4QKmHHKNAcMbyjf2KToJQ", "OutSystemsUI", "NotificationOnSwipeTop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yNYNPVA8BkKU8b2Kvy1__Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u3+2jsIAR0SkMyjTjEQc0A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationOnSwipeTop_OnSwipeTopJS, "OnSwipeTop", "NotificationOnSwipeTop", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3qE_CpE5zUafDQXmt5y5LQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:05CwHtw4pUq_Am_KYwu7vg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationOnSwipeTop$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationOnSwipeTop$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationOnSwipeTop$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationOnSwipeTop.OnSwipeTopJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.GetNotificationById($parameters.UniqueId).onSwipeTop();
};
});

define("OutSystemsUI.controller$NotificationOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationOpen.ShowNotificationJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationOpen_ShowNotificationJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationOpen$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationOpen$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:JNl7H0r9N0SbGP7u8NUGKw:/ClientActionFlows.JNl7H0r9N0SbGP7u8NUGKw:PNl6zr8ZsIKjcKBnQKOmDQ", "OutSystemsUI", "NotificationOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+WHQkNkYS0ihrUG0mclkcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SwAvRuileUiBYGYeXYEGCQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationOpen_ShowNotificationJS, "ShowNotification", "NotificationOpen", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:n+bpMosDlU2Jh__3ZrBG+A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:JNl7H0r9N0SbGP7u8NUGKw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationOpen$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationOpen$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationOpen.ShowNotificationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.Show(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$NotificationRegisterCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$NotificationRegisterCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_NotificationRegisterCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.notificationRegisterCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.NotificationRegisterCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:so0pekRxb0Oujfvsdsy6hA:/ClientActionFlows.so0pekRxb0Oujfvsdsy6hA:3KK3BP6agWZv38vjrbE3Lg", "OutSystemsUI", "NotificationRegisterCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rsR2m0GWFkGCIEJ+bcqqXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WO5bXIteTEKV3bdoEtdTPA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_NotificationRegisterCallback_RegisterCallbackJS, "RegisterCallback", "NotificationRegisterCallback", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:M9iCIkSCAkyTjWSIP5Ob3Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:so0pekRxb0Oujfvsdsy6hA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.NotificationRegisterCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.notificationRegisterCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.notificationRegisterCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$NotificationRegisterCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.NotificationAPI.RegisterProviderCallback($parameters.UniqueId, $parameters.EventName, $parameters.Callback);
};
});

define("OutSystemsUI.controller$ProgressChangeIntegerProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ProgressChangeIntegerProp.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ProgressChangeIntegerProp_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.progressChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ProgressChangeIntegerProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8OWb8K5Dik2jaB2hnICEuw:/ClientActionFlows.8OWb8K5Dik2jaB2hnICEuw:2BwySjguLMAWc1ePuMxnEQ", "OutSystemsUI", "ProgressChangeIntegerProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4KbEHPJMZEGZESgE0uxtUQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AezO69EsmECGyIfkZ4+qjQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ProgressChangeIntegerProp_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "ProgressChangeIntegerProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.LongInteger),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E+6J4vf0S0epcpaDOCO8tg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8OWb8K5Dik2jaB2hnICEuw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ProgressChangeIntegerProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.progressChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.progressChangeIntegerProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ProgressChangeIntegerProp.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$ProgressChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ProgressChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ProgressChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.progressChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ProgressChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Tw2CYHbHx02K52HtQC0etw:/ClientActionFlows.Tw2CYHbHx02K52HtQC0etw:BZ1lPcwqAAX71X6YOOWyew", "OutSystemsUI", "ProgressChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_AH+jM7pCkyNCRbZMLlVDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:znBsNJhgUUOJVwBSQ39aUQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ProgressChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "ProgressChangeTextProp", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nKEnq4TCf0O25Hb2ftrx_A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Tw2CYHbHx02K52HtQC0etw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ProgressChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.progressChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.progressChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ProgressChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$ProgressCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ProgressCreate.CreateJS", "OutSystemsUI.model$Progress_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ProgressCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.progressCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ProgressCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_JcKY_OIFkmGaZdzLR7V2g:/ClientActionFlows._JcKY_OIFkmGaZdzLR7V2g:mrqOi+Ik0dwi0Vzm8AO24A", "OutSystemsUI", "ProgressCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DsvAZ4J_tk+223xrxtpvPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ya66phMKeEaPyap4HBR0DA", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gJ3TSFlchUK_8p2hL4S4JA", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_ProgressCreate_CreateJS, "Create", "ProgressCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text),
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.typeAttr, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2d1Dng7mUUSJ2ew86H3YBA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_JcKY_OIFkmGaZdzLR7V2g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ProgressCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.Progress_InternalConfigRec();
},
complexType: OutSystemsUIModel.Progress_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.progressCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.Progress_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.progressCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ProgressCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.Create($parameters.UniqueId, $parameters.Type, $parameters.Configs);
};
});

define("OutSystemsUI.controller$ProgressDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ProgressDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ProgressDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.progressDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ProgressDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zWcgt2NdUEi9uGalrR6Pzg:/ClientActionFlows.zWcgt2NdUEi9uGalrR6Pzg:BRnGH_tiU_s1Abjl+NVCkQ", "OutSystemsUI", "ProgressDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3HDA5FH20EWEvabaVbaWLg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qhYV9pcVKEajuo8WOaAC8w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ProgressDestroy_DestroyJS, "Destroy", "ProgressDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hGLSsj96H02GmtCFdEcuTg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zWcgt2NdUEi9uGalrR6Pzg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ProgressDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.progressDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.progressDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ProgressDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$ProgressInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ProgressInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ProgressInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.progressInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ProgressInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:pNwYEZG1ZEapQDNW38z31g:/ClientActionFlows.pNwYEZG1ZEapQDNW38z31g:eMu9t6Hiknkx6VGqkCxS+Q", "OutSystemsUI", "ProgressInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GhpJQYNZk0uek6H3mtl99w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G7hay46cH0y9zTZwu64kDA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_ProgressInitialize_InitializeJS, "Initialize", "ProgressInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aqfEBVPo5U+Zo9u8qNvAfA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:pNwYEZG1ZEapQDNW38z31g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ProgressInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.progressInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.progressInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ProgressInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$RangeSliderChangeBooleanProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderChangeBooleanProp.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderChangeBooleanProp_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderChangeBooleanProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:SA0EvMJ8h0aW4L58zbXHIA:/ClientActionFlows.SA0EvMJ8h0aW4L58zbXHIA:4sqBFygANAdYS+0G7INZ0Q", "OutSystemsUI", "RangeSliderChangeBooleanProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BbHeA+Q70k+rGHh8BY9sqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7Y0HPo6iREG0HevTp0ln3g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderChangeBooleanProp_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "RangeSliderChangeBooleanProp", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YySC2OWvk0WXrV3PWEL4KA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:SA0EvMJ8h0aW4L58zbXHIA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderChangeBooleanProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderChangeBooleanProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderChangeBooleanProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderChangeBooleanProp.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RangeSliderChangeDecimalProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderChangeDecimalProp.ChangeDecimalPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderChangeDecimalProp_ChangeDecimalPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderChangeDecimalProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderChangeDecimalProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+a4xM2OkRU+kHtMknfeuNw:/ClientActionFlows.+a4xM2OkRU+kHtMknfeuNw:LDobI7MmmPkv42GfSQxBPQ", "OutSystemsUI", "RangeSliderChangeDecimalProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1aKoVooYbUGuVyzpelzJRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tS9XZK3IwkCgsmBHdp9sLQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderChangeDecimalProp_ChangeDecimalPropertyJS, "ChangeDecimalProperty", "RangeSliderChangeDecimalProp", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Decimal),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RbPQy3qNYECfzG87FDbuZQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+a4xM2OkRU+kHtMknfeuNw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderChangeDecimalProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderChangeDecimalProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderChangeDecimalProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderChangeDecimalProp.ChangeDecimalPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RangeSliderChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:k9RxUmGB_0aCzQXQrY33LQ:/ClientActionFlows.k9RxUmGB_0aCzQXQrY33LQ:PI8PAdP1V5hzjbRhyZPztA", "OutSystemsUI", "RangeSliderChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tahc7XgKgkm5UHKidynjAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gpUxD+3NR0+PqevzfM8fcQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "RangeSliderChangeTextProp", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IPFNHVgB5EqrH0Jjp396Og", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:k9RxUmGB_0aCzQXQrY33LQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RangeSliderCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderCreate.CreateRangeSliderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderCreate_CreateRangeSliderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderCreate$Action = function (uniqueIdIn, internalConfigsIn, modeIn, providerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
vars.value.modeInLocal = modeIn;
vars.value.providerInLocal = providerIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qwyMJedTU0yLxfiuTYUG4A:/ClientActionFlows.qwyMJedTU0yLxfiuTYUG4A:z+QDXbigfj5B2_m+2rQDmQ", "OutSystemsUI", "RangeSliderCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YOHY2fbYvUe236K5mrrA4w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wg1u6Qb2skaThTAddAdMww", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderCreate_CreateRangeSliderJS, "CreateRangeSlider", "RangeSliderCreate", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.Types.Text),
Mode: OS.DataConversion.JSNodeParamConverter.to(vars.value.modeInLocal, OS.Types.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8kDc8Cfpr0+ACr2cCPLEgg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qwyMJedTU0yLxfiuTYUG4A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Mode",
attrName: "modeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderCreate$Action = function (uniqueIdIn, internalConfigsIn, modeIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
modeIn = (modeIn === undefined) ? "" : modeIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text), modeIn, providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderCreate.CreateRangeSliderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.Create($parameters.UniqueId, $parameters.Configs, $parameters.Mode, $parameters.Provider);
};
});

define("OutSystemsUI.controller$RangeSliderDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderDestroy.DestroyRangeSliderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderDestroy_DestroyRangeSliderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:J8cQ8LwOcEuVgDu8XK0muQ:/ClientActionFlows.J8cQ8LwOcEuVgDu8XK0muQ:c4tAYHFUhjiENsVhWSzmeQ", "OutSystemsUI", "RangeSliderDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AUl6Ou9cn0u79nJEAqPrwQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RFqZJN7juUylH5WXQEIYFA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderDestroy_DestroyRangeSliderJS, "DestroyRangeSlider", "RangeSliderDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vfpWvytBaEGHo8WBJkXUkw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:J8cQ8LwOcEuVgDu8XK0muQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderDestroy.DestroyRangeSliderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.Dispose($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$RangeSliderInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderInitialize.InitializeRangeSliderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderInitialize_InitializeRangeSliderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_AdWzl6SSEqfeRcCYZb5iw:/ClientActionFlows._AdWzl6SSEqfeRcCYZb5iw:YNJLr9XcDXT4NdfOpOx4bg", "OutSystemsUI", "RangeSliderInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eiqgHpWLJU6oHVSLH70ceQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pIP+E7IVNEKaeg9IdAXq7w", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderInitialize_InitializeRangeSliderJS, "InitializeRangeSlider", "RangeSliderInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q0oDWCWcKE2ZrNmkuRKPbg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_AdWzl6SSEqfeRcCYZb5iw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderInitialize.InitializeRangeSliderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$RangeSliderRegisterProviderCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RangeSliderRegisterProviderCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RangeSliderRegisterProviderCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rangeSliderRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RangeSliderRegisterProviderCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:F1zHlndqBUS7+B3bVRIXhA:/ClientActionFlows.F1zHlndqBUS7+B3bVRIXhA:gDczvW7cNJHwIG5YVUx_sw", "OutSystemsUI", "RangeSliderRegisterProviderCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bi1cZHlnwUKISvvgFaasRw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:56QLeub6j0G4ewprErYrQw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RangeSliderRegisterProviderCallback_RegisterCallbackJS, "RegisterCallback", "RangeSliderRegisterProviderCallback", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7izGOWu1UE6QI_wQxFsn_Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:F1zHlndqBUS7+B3bVRIXhA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RangeSliderRegisterProviderCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.rangeSliderRegisterProviderCallback$Action = function (uniqueIdIn, eventNameIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rangeSliderRegisterProviderCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RangeSliderRegisterProviderCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.RegisterProviderCallback($parameters.UniqueId, $parameters.EventName, $parameters.Callback);
};
});

define("OutSystemsUI.controller$RatingChangeExtendedClass", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingChangeExtendedClass.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingChangeExtendedClass_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingChangeExtendedClass$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:A12N0WqSv0eTrR2+y9WNpw:/ClientActionFlows.A12N0WqSv0eTrR2+y9WNpw:mRBDC6INLOhSH7FmA4KRPA", "OutSystemsUI", "RatingChangeExtendedClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AxZvYKdYYUihzTHcjbm13Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lX+erA_UAEeCH5TJ8qN1hg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingChangeExtendedClass_ChangePropertyJS, "ChangeProperty", "RatingChangeExtendedClass", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("ExtendedClass", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zLfQSziIekeVUpy223GzEA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:A12N0WqSv0eTrR2+y9WNpw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingChangeExtendedClass$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingChangeExtendedClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingChangeExtendedClass.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RatingChangeIsEdit", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingChangeIsEdit.ChangeIsEditJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingChangeIsEdit_ChangeIsEditJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingChangeIsEdit$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingChangeIsEdit$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:EiJeKGTwH06e68J_CIuC8w:/ClientActionFlows.EiJeKGTwH06e68J_CIuC8w:32YxW8UFlX6mGkn8gTUgSA", "OutSystemsUI", "RatingChangeIsEdit", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:M43luKa4H0C4SmVrCcboxw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HMjddLhOFU24Koeirm9Zwg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingChangeIsEdit_ChangeIsEditJS, "ChangeIsEdit", "RatingChangeIsEdit", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("IsEdit", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DmoZYToIh0CGTSZaXeaB9A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:EiJeKGTwH06e68J_CIuC8w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingChangeIsEdit$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingChangeIsEdit$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingChangeIsEdit$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingChangeIsEdit.ChangeIsEditJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RatingChangeRatingScale", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingChangeRatingScale.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingChangeRatingScale_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingChangeRatingScale$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingChangeRatingScale$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:dE0mjWY0IEC+SAy8ramS1A:/ClientActionFlows.dE0mjWY0IEC+SAy8ramS1A:iEaNxhPiVF6OFvU0qtBaxA", "OutSystemsUI", "RatingChangeRatingScale", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AwnTA2+cxEaZ3lAb_zc8oA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3qGFLwJEZUm5vrEChApSTA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingChangeRatingScale_ChangePropertyJS, "ChangeProperty", "RatingChangeRatingScale", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Integer),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("RatingScale", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WgfDDeIX6U20M8Y_0qXAKw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:dE0mjWY0IEC+SAy8ramS1A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingChangeRatingScale$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingChangeRatingScale$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? 0 : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingChangeRatingScale$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingChangeRatingScale.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RatingChangeRatingValue", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingChangeRatingValue.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingChangeRatingValue_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingChangeRatingValue$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingChangeRatingValue$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6KW1sVgDZk6dkklXF3CH3Q:/ClientActionFlows.6KW1sVgDZk6dkklXF3CH3Q:kkjTki1gtrQa4bCprUvirw", "OutSystemsUI", "RatingChangeRatingValue", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dL7CZ9OSx0OKoxKeiVPcgg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZqfyH9UKR0WntFypeCFaUA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingChangeRatingValue_ChangePropertyJS, "ChangeProperty", "RatingChangeRatingValue", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("RatingValue", OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ElYyMAnPAEa7FhuA3WYo3w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6KW1sVgDZk6dkklXF3CH3Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingChangeRatingValue$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingChangeRatingValue$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingChangeRatingValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingChangeRatingValue.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RatingChangeSize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingChangeSize.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingChangeSize_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingChangeSize$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingChangeSize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:rDZm3AFin0uP2+JY++zSkg:/ClientActionFlows.rDZm3AFin0uP2+JY++zSkg:AfzCJLuAGsjXBfevq8wgYA", "OutSystemsUI", "RatingChangeSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G9Y4n0Eu8k6kGVaAV4uHqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:C8aLhxYzgEakWlmaWN132w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingChangeSize_ChangePropertyJS, "ChangeProperty", "RatingChangeSize", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Size", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P61QIfSfsUqkFWtV9vFyGg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:rDZm3AFin0uP2+JY++zSkg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingChangeSize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingChangeSize$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingChangeSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingChangeSize.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$RatingCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingCreate.CreateRatingJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingCreate_CreateRatingJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingCreate$Action = function (uniqueIdIn, internalConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:L5t_KkbRg0SBXKauP8KC_A:/ClientActionFlows.L5t_KkbRg0SBXKauP8KC_A:AGJ7D67+1NcjI7OZJDMeiw", "OutSystemsUI", "RatingCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:se+0BIWZJEOicElZaN5BAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:x3FziJbdeEmY9OiShXWvWw", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingCreate_CreateRatingJS, "CreateRating", "RatingCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u8VvHRgjn024v6cTTMqL9Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:L5t_KkbRg0SBXKauP8KC_A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingCreate$Action = function (uniqueIdIn, internalConfigsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingCreate.CreateRatingJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$RatingDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_QUL8QzouU21w4Y+HjgWTg:/ClientActionFlows._QUL8QzouU21w4Y+HjgWTg:u7xD+s6tTQhdng_c_lFvsQ", "OutSystemsUI", "RatingDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HlsMbLT6rEKGWTH_qg0Scw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KgpVePaJTEGnIxxjKQr4Zg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingDestroy_DestroyJS, "Destroy", "RatingDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WAnpJR3MXEqQ4KQn1tU6CA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_QUL8QzouU21w4Y+HjgWTg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$RatingInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kUEMaLvq6ESsz6EhZrS1oA:/ClientActionFlows.kUEMaLvq6ESsz6EhZrS1oA:FT_NZBEWM8UEIS8IvsU1Lg", "OutSystemsUI", "RatingInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rZE+r78emk2z1VqyZDYkjg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:diABuhyGyEupwsCkq_4pfQ", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingInitialize_InitializeJS, "Initialize", "RatingInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WRpgt3WKjkOMbFUk6zjTUg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kUEMaLvq6ESsz6EhZrS1oA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$RatingRegisterCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RatingRegisterCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RatingRegisterCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.ratingRegisterCallback$Action = function (uniqueIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RatingRegisterCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kwKMwxx0SE2EHAonspMQfg:/ClientActionFlows.kwKMwxx0SE2EHAonspMQfg:qH+2E_68frLqztLsMWcuPg", "OutSystemsUI", "RatingRegisterCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+Ju9NGAGOUC8nH5StJtQQQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Nn4uHLljkEOnf5G5_kZAJA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_RatingRegisterCallback_RegisterCallbackJS, "RegisterCallback", "RatingRegisterCallback", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dNIJh+IJEU29wp02vb+8lA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kwKMwxx0SE2EHAonspMQfg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RatingRegisterCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.ratingRegisterCallback$Action = function (uniqueIdIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.ratingRegisterCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$RatingRegisterCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RatingAPI.RegisterCallback($parameters.UniqueId, $parameters.Callback);
};
});

define("OutSystemsUI.controller$RTLObserver", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$RTLObserver.ObserverJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_RTLObserver_ObserverJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.rTLObserver$Action = function (callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RTLObserver$vars"))());
vars.value.callbackInLocal = callbackIn;
var observerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.RTLObserver$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.observerJSResult = observerJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:h6QfrQ1kp0aqFegcitXG2A:/ClientActionFlows.h6QfrQ1kp0aqFegcitXG2A:AMzix+Rg1tYys3ayoEGerw", "OutSystemsUI", "RTLObserver", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kM1cIjyAE0azqw4BpmIuHQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:I0v7qVLxN0yTq6rIFmubjw", callContext.id);
observerJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_controller_RTLObserver_ObserverJS, "Observer", "RTLObserver", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
RTLObserverObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.RTLObserver$observerJSResult"))();
jsNodeResult.rTLObserverObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RTLObserverObj, OS.Types.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YIynuWPltkSaOoOYPknDRg", callContext.id);
// RTObserverObj = Observer.RTLObserverObj
outVars.value.rTObserverObjOut = observerJSResult.value.rTLObserverObjOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+NagTJ0RIUqSXgZDjhvq3A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:h6QfrQ1kp0aqFegcitXG2A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RTLObserver$vars", [{
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RTLObserver$observerJSResult", [{
name: "RTLObserverObj",
attrName: "rTLObserverObjOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.RTLObserver$outVars", [{
name: "RTObserverObj",
attrName: "rTObserverObjOut",
mandatory: false,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.rTLObserver$Action = function (callbackIn) {
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.rTLObserver$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
RTObserverObj: OS.DataConversion.JSNodeParamConverter.to(actionResults.rTObserverObjOut, OS.Types.Object)
};
});
};
});
define("OutSystemsUI.controller$RTLObserver.ObserverJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elemToObserve = document.body;
var hasAlreadyRTL = elemToObserve.classList.contains('is-rtl');

var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if(mutation.attributeName == "class"){
                            var hasRTLNow = mutation.target.classList.contains('is-rtl');
                            if(hasAlreadyRTL !== hasRTLNow){
                                hasAlreadyRTL = hasRTLNow;
                                $parameters.Callback();
                            }
                        }
                    });
                });
observer.observe(elemToObserve, {attributes: true});


$parameters.RTLObserverObj = observer;
};
});

define("OutSystemsUI.controller$ScrollToElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ScrollToElement.ScrollToElementJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ScrollToElement_ScrollToElementJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.scrollToElement$Action = function (widgetIdIn, isSmoothIn, offSetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.ScrollToElement$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.isSmoothInLocal = isSmoothIn;
vars.value.offSetInLocal = offSetIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:I55BcigVtEezFElENRqUAg:/ClientActionFlows.I55BcigVtEezFElENRqUAg:KYB0bid7EVSFEzgL_2LE4A", "OutSystemsUI", "ScrollToElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E+Ij_as6bEm21n4IAFpCWA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mE133IzgnEmi05Gp0HG3Nw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ScrollToElement_ScrollToElementJS, "ScrollToElement", "ScrollToElement", {
IsSmooth: OS.DataConversion.JSNodeParamConverter.to(vars.value.isSmoothInLocal, OS.Types.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
OffSet: OS.DataConversion.JSNodeParamConverter.to(vars.value.offSetInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kUCWkT5P006vwSboeaiJ8w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:I55BcigVtEezFElENRqUAg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.ScrollToElement$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsSmooth",
attrName: "isSmoothInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "OffSet",
attrName: "offSetInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.scrollToElement$Action = function (widgetIdIn, isSmoothIn, offSetIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
isSmoothIn = (isSmoothIn === undefined) ? true : isSmoothIn;
offSetIn = (offSetIn === undefined) ? 0 : offSetIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.scrollToElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isSmoothIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(offSetIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ScrollToElement.ScrollToElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// isolate the code in order for the variables not be reacheable through the console and therefore manipulated without awareness
var scrollToElement = function() { 
    var isSmooth = $parameters.IsSmooth;
    var target = document.getElementById($parameters.WidgetId);
    var header = document.querySelector('.header');
    var layout = document.querySelector('.layout');
    var isFixed = layout.classList.contains('fixed-header');
    
    // pull the target up from its original position, pulling it the header amount so in the end it won't be covered by the header
    // it removes the height from whatever offset you might want to remove from the top
    if(isFixed) {
        target.style.transform = 'translateY(' + (-header.offsetHeight + (-$parameters.OffSet))+ 'px)';
    } else {
        target.style.transform = 'translateY('+ (-$parameters.OffSet) + 'px)';
    }
    
    target.style.display = 'block';


    // timeout needs to be added as a hack for the scrollIntoView to act
    setTimeout(function() { 
        if(isSmooth) {
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
            target.scrollIntoView({behavior: 'instant', block: 'start'});
        }

        // reset to the original position
        target.style.transform = ''; 
        target.style.display = '';
    }, 0);
}();



};
});

define("OutSystemsUI.controller$SetAccessibilityRole", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetAccessibilityRole.SetRoleJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetAccessibilityRole_SetRoleJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setAccessibilityRole$Action = function (widgetIdIn, roleIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetAccessibilityRole$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.roleInLocal = roleIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:nIPZ47GGZkyGi3Ef5TZsqw:/ClientActionFlows.nIPZ47GGZkyGi3Ef5TZsqw:Jj56toGQlO3vmDg9ThrNcQ", "OutSystemsUI", "SetAccessibilityRole", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E932h+7ZnEyjZB_fbjIe_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4O88zbHElkSgAsLU0yIERw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetAccessibilityRole_SetRoleJS, "SetRole", "SetAccessibilityRole", {
Role: OS.DataConversion.JSNodeParamConverter.to(vars.value.roleInLocal, OS.Types.Text),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0H7pHuK6Ck+hdcXUrGMGhA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:nIPZ47GGZkyGi3Ef5TZsqw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetAccessibilityRole$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Role",
attrName: "roleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setAccessibilityRole$Action = function (widgetIdIn, roleIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
roleIn = (roleIn === undefined) ? "" : roleIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setAccessibilityRole$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(roleIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetAccessibilityRole.SetRoleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);

if (element) {
    var isBlock = element.hasAttribute('data-block');
    
    if(isBlock) {
       element.children[0].setAttribute('role', $parameters.Role); 
    } else {
        element.setAttribute('role', $parameters.Role);
    }
}

};
});

define("OutSystemsUI.controller$SetActiveElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetActiveElement.SetActiveElementJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetActiveElement_SetActiveElementJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setActiveElement$Action = function (widgetIdIn, isActiveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetActiveElement$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.isActiveInLocal = isActiveIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WkrqyYiP70KuHnjgeUkWGg:/ClientActionFlows.WkrqyYiP70KuHnjgeUkWGg:v3L13OdHRKvDT0UZW20pmQ", "OutSystemsUI", "SetActiveElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:njUly_cwd0Khl3g1Ftrcng", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IO79uJFMWEeJUfqEirGmkg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetActiveElement_SetActiveElementJS, "SetActiveElement", "SetActiveElement", {
IsActive: OS.DataConversion.JSNodeParamConverter.to(vars.value.isActiveInLocal, OS.Types.Boolean),
ID: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GWR2eHd5v0GLCZnFxKd8bQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WkrqyYiP70KuHnjgeUkWGg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetActiveElement$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsActive",
attrName: "isActiveInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.setActiveElement$Action = function (widgetIdIn, isActiveIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
isActiveIn = (isActiveIn === undefined) ? false : isActiveIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setActiveElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isActiveIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetActiveElement.SetActiveElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.ID);

if($parameters.IsActive) {
    elem.classList.add('active-element');    
} else {
    elem.classList.remove('active-element');
}
};
});

define("OutSystemsUI.controller$SetActiveMenuItems", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetActiveMenuItems.SetActiveJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetActiveMenuItems_SetActiveJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setActiveMenuItems$Action = function (widgetIdIn, activeItemIn, activeSubItemIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetActiveMenuItems$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.activeItemInLocal = activeItemIn;
vars.value.activeSubItemInLocal = activeSubItemIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:FMhBkkyTfUCBwiIQM1Ct6w:/ClientActionFlows.FMhBkkyTfUCBwiIQM1Ct6w:BS4x13fT3OLr3aDbF3a0hg", "OutSystemsUI", "SetActiveMenuItems", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bS6qNfol9Uyq1yiQBnoEZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eMpAyzImzUKwL_ip4d08TA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetActiveMenuItems_SetActiveJS, "SetActive", "SetActiveMenuItems", {
ActiveItem: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeItemInLocal, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
ActiveSubItem: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeSubItemInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:k88gLS2xmEiMeKwgrvrowQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FMhBkkyTfUCBwiIQM1Ct6w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetActiveMenuItems$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ActiveItem",
attrName: "activeItemInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return -1;
}
}, {
name: "ActiveSubItem",
attrName: "activeSubItemInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return -1;
}
}]);
OutSystemsUIController.default.clientActionProxies.setActiveMenuItems$Action = function (widgetIdIn, activeItemIn, activeSubItemIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
activeItemIn = (activeItemIn === undefined) ? -1 : activeItemIn;
activeSubItemIn = (activeSubItemIn === undefined) ? -1 : activeSubItemIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setActiveMenuItems$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(activeItemIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(activeSubItemIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetActiveMenuItems.SetActiveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var widgetSelector = '';
if($parameters.WidgetId !== '') {
    widgetSelector = '#'+$parameters.WidgetId+' ';
}

var appMenuLinks = document.querySelector(widgetSelector + '.app-menu-links') || document.querySelector(widgetSelector + '.app-sidemenu-links');

if(appMenuLinks) {
    var activeLinkBlock = appMenuLinks.children[$parameters.ActiveItem];
    
    if(activeLinkBlock) {
        activeLinkBlock.classList.add("active");
        var activeSubMenu = activeLinkBlock.querySelector('.submenu') || activeLinkBlock.querySelector('.osui-submenu');
        
        if(activeSubMenu) {
            activeSubMenu.classList.add("active");
            var subMenuItem = activeSubMenu.querySelector('.submenu-items') || activeSubMenu.querySelector('.osui-submenu__items');
            var activeSubMenuItem = subMenuItem.children[$parameters.ActiveSubItem];
            
            if(activeSubMenuItem) {
                activeSubMenuItem.classList.add("active");
            }
        }
    }
    
}
};
});

define("OutSystemsUI.controller$SetAriaHidden", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetAriaHidden.setAriaHiddenJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetAriaHidden_setAriaHiddenJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setAriaHidden$Action = function (widgetIdIn, isHiddenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetAriaHidden$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.isHiddenInLocal = isHiddenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:sdxo8WObfkKHDkj1hJ+dxQ:/ClientActionFlows.sdxo8WObfkKHDkj1hJ+dxQ:PiqkRC7243vUpald0Az7pQ", "OutSystemsUI", "SetAriaHidden", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pBfV5nTmJkuOwunbPpENXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:r0z5tyLSlUqGLBeTxTzxqA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetAriaHidden_setAriaHiddenJS, "setAriaHidden", "SetAriaHidden", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
IsHidden: OS.DataConversion.JSNodeParamConverter.to(vars.value.isHiddenInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ujeL83Nl0Ue9C4lkulPrHQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:sdxo8WObfkKHDkj1hJ+dxQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetAriaHidden$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsHidden",
attrName: "isHiddenInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.setAriaHidden$Action = function (widgetIdIn, isHiddenIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
isHiddenIn = (isHiddenIn === undefined) ? false : isHiddenIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setAriaHidden$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isHiddenIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetAriaHidden.setAriaHiddenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.WidgetId);

if(elem) {
    elem.setAttribute('aria-hidden', $parameters.IsHidden);   
}

};
});

define("OutSystemsUI.controller$SetBottomBarActiveElement", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetBottomBarActiveElement.AddActiveJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetBottomBarActiveElement_AddActiveJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setBottomBarActiveElement$Action = function (activeItemIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetBottomBarActiveElement$vars"))());
vars.value.activeItemInLocal = activeItemIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:aKul3GyFdUyInhOVT5pVnQ:/ClientActionFlows.aKul3GyFdUyInhOVT5pVnQ:cvLcCozQjJb0xb7Jy09rhw", "OutSystemsUI", "SetBottomBarActiveElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hoF9LLURdEuNu_81ywHtXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ft1g983_JkyOahUTuGF5kA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetBottomBarActiveElement_AddActiveJS, "AddActive", "SetBottomBarActiveElement", {
Active: OS.DataConversion.JSNodeParamConverter.to(vars.value.activeItemInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Y_2iPO77Dk+huBTotnzLBg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:aKul3GyFdUyInhOVT5pVnQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetBottomBarActiveElement$vars", [{
name: "ActiveItem",
attrName: "activeItemInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return -1;
}
}]);
OutSystemsUIController.default.clientActionProxies.setBottomBarActiveElement$Action = function (activeItemIn) {
activeItemIn = (activeItemIn === undefined) ? -1 : activeItemIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setBottomBarActiveElement$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(activeItemIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetBottomBarActiveElement.AddActiveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var bottomBar = document.querySelector('.bottom-bar');
var bottomBarChild = bottomBar ? bottomBar.children[$parameters.Active] : undefined;

if(bottomBar && bottomBarChild) {
    bottomBarChild.classList.add("active");
}
};
});

define("OutSystemsUI.controller$SetDeviceBreakpoints", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetDeviceBreakpoints.SetDeviceOnResizeJS", "OutSystemsUI.model$DeviceConfigurationRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetDeviceBreakpoints_SetDeviceOnResizeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setDeviceBreakpoints$Action = function (deviceConfigurationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetDeviceBreakpoints$vars"))());
vars.value.deviceConfigurationInLocal = deviceConfigurationIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kzLCurPnyEiZZBS7mNwWSA:/ClientActionFlows.kzLCurPnyEiZZBS7mNwWSA:Dyz7yQhJNrK5Z+eRwE1VWg", "OutSystemsUI", "SetDeviceBreakpoints", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZFkpLrDlmEeaDRVWUDxnXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VoR2nu8KDUyBS7WGi_Ed1w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetDeviceBreakpoints_SetDeviceOnResizeJS, "SetDeviceOnResize", "SetDeviceBreakpoints", {
Phone: OS.DataConversion.JSNodeParamConverter.to(vars.value.deviceConfigurationInLocal.phoneWidthAttr, OS.Types.Integer),
Tablet: OS.DataConversion.JSNodeParamConverter.to(vars.value.deviceConfigurationInLocal.tabletWidthAttr, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3F+2DIwLeUW4IU_xmn+BDg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kzLCurPnyEiZZBS7mNwWSA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetDeviceBreakpoints$vars", [{
name: "DeviceConfiguration",
attrName: "deviceConfigurationInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.DeviceConfigurationRec();
},
complexType: OutSystemsUIModel.DeviceConfigurationRec
}]);
OutSystemsUIController.default.clientActionProxies.setDeviceBreakpoints$Action = function (deviceConfigurationIn) {
deviceConfigurationIn = (deviceConfigurationIn === undefined) ? new OutSystemsUIModel.DeviceConfigurationRec() : deviceConfigurationIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setDeviceBreakpoints$Action.bind(controller, deviceConfigurationIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetDeviceBreakpoints.SetDeviceOnResizeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$public.View.registerDeviceClassGetter(function() {

    var deviceList;
    var userValues;
    var device;
    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var orient = windowWidth > windowHeight ? "landscape" : "portrait";
    var isLandscape = (orient === "landscape");
    
    userValues = {
        phone: $parameters.Phone,
        tablet: $parameters.Tablet,
    };
    
    var phoneMax = userValues.phone ? userValues.phone : 700;
    var tabletMax = userValues.tablet ? userValues.tablet : 1024;
   
    deviceList = ["phone", "tablet","desktop"];
    
    switch(true) {
        case (windowWidth < phoneMax || (!isLandscape && windowHeight < phoneMax)):
            device = 0;
            break;
        case ((windowWidth >= phoneMax && windowWidth <= tabletMax) || (windowHeight >= phoneMax && windowHeight <= tabletMax && isLandscape)):
            device = 1;
            break;
        case (windowWidth > tabletMax ||(windowHeight > tabletMax && isLandscape)):  
            device = 2;
            break;
    }
   
   return [orient, deviceList[device]];
   
});

};
});

define("OutSystemsUI.controller$SetFocus", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetFocus.SetFocusJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetFocus_SetFocusJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setFocus$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetFocus$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:oih6gdN1p02bcN63KtmoNg:/ClientActionFlows.oih6gdN1p02bcN63KtmoNg:KZc4c3TJzEe7TbFR05_vHA", "OutSystemsUI", "SetFocus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5mv2cB2E5Eet16lMvAxBUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wEwcXvm0jUKJwZd5VMepaQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetFocus_SetFocusJS, "SetFocus", "SetFocus", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UQKGVPn0+k+Xkj7vNccKcg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:oih6gdN1p02bcN63KtmoNg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetFocus$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setFocus$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setFocus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetFocus.SetFocusJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elementId = document.getElementById($parameters.WidgetId);

if(elementId) {
    elementId.focus();
}    


};
});

define("OutSystemsUI.controller$SetLang", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetLang.SetLangJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetLang_SetLangJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setLang$Action = function (langIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetLang$vars"))());
vars.value.langInLocal = langIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WxQ0Foobt06XqI2YgwwILQ:/ClientActionFlows.WxQ0Foobt06XqI2YgwwILQ:hvj2YFFR7ZmtHe6XNmFO0Q", "OutSystemsUI", "SetLang", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yI1TXv5l2U+xKhyk1uGcHg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yIPv6fhPdU6R+151g6zGBw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetLang_SetLangJS, "SetLang", "SetLang", {
Lang: OS.DataConversion.JSNodeParamConverter.to(vars.value.langInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:35CWYx64yUiXptKyv_hhlQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WxQ0Foobt06XqI2YgwwILQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetLang$vars", [{
name: "Lang",
attrName: "langInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setLang$Action = function (langIn) {
langIn = (langIn === undefined) ? "" : langIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setLang$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(langIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetLang.SetLangJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var hasLangAttribute = document.documentElement.lang !== "";

if(!hasLangAttribute && $parameters.Lang !== "") {
    document.documentElement.lang = $parameters.Lang;
}
};
});

define("OutSystemsUI.controller$SetLanguage", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetLanguage.SetAppLanguageJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetLanguage_SetAppLanguageJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setLanguage$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uLJtfxx3vkap6uBwet72cw:/ClientActionFlows.uLJtfxx3vkap6uBwet72cw:Qx6oEu6nebdByibRzB8mPg", "OutSystemsUI", "SetLanguage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MEL2LjGhFUe3AQ4ln5qsVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WC4ezbowQ0+u95o0f9VASA", callContext.id);
// Trigger the API method that will set the ServerDate format.
controller.safeExecuteJSNode(OutSystemsUI_controller_SetLanguage_SetAppLanguageJS, "SetAppLanguage", "SetLanguage", {
Locale: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getCurrentLocale(), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hiVmUI_EdkKV5N6VUNEcHg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uLJtfxx3vkap6uBwet72cw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.setLanguage$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setLanguage$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetLanguage.SetAppLanguageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Language.SetLanguage($parameters.Locale);
};
});

define("OutSystemsUI.controller$SetMenuAttributes", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetMenuAttributes.setAttributesJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetMenuAttributes_setAttributesJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setMenuAttributes$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ESHkOFhygUSr2c6PVMh1+Q:/ClientActionFlows.ESHkOFhygUSr2c6PVMh1+Q:PUzn5uICuRLhKK9y9DYqYw", "OutSystemsUI", "SetMenuAttributes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sOA1S7fJf0SC6iXUOiGs1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sIHiSdj210KF+db9x5sfgg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetMenuAttributes_setAttributesJS, "setAttributes", "SetMenuAttributes", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:U6f0ASFieUaz4CrnUYLqyw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ESHkOFhygUSr2c6PVMh1+Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.setMenuAttributes$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setMenuAttributes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetMenuAttributes.setAttributesJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.layout');
var menu = document.querySelector('.app-menu-content') || document.querySelector('.app-menu-container');
var isExpanded = layout.classList.contains('menu-visible') || layout.classList.contains('menu--visible');

if(menu) {
    var focusableEls = menu.querySelectorAll('a[href]:not([disabled]),[tabindex], [role=button],button:not([disabled]),textarea:not([disabled]),input[type="text"]:not([disabled]),input[type="radio"]:not([disabled]),input[type="checkbox"]:not([disabled]),input[type="submit"]:not([disabled]),select:not([disabled])');
    focusableEls = [].slice.call(focusableEls);
    
    var setAttributes = function(){
        if(isExpanded) {
            menu.setAttribute('tabindex', '0');
            menu.setAttribute('aria-expanded', 'true');
            
        } else {
            menu.setAttribute('tabindex', '-1');
            menu.setAttribute('aria-expanded', 'false');
            
        }
    }();
    
    var toggleTabindex = function(){
        // Toggle tabindex value if Menu is closed or open
        if(isExpanded) {
            // apply tabindex = -1 by default to disable the navigation inside the sidebar when is hidden
            focusableEls.forEach(function(item) {
                item.setAttribute('tabindex', '0');
            }); 
        } else {
            focusableEls.forEach(function(item) {
                item.setAttribute('tabindex', '-1');
            }); 
        }
    }();
}
};
});

define("OutSystemsUI.controller$SetMenuIcon", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetMenuIcon.FindMenuLinksJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetMenuIcon_FindMenuLinksJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setMenuIcon$Action = function (menuActionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetMenuIcon$vars"))());
vars.value.menuActionInLocal = menuActionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZETeHV+it0+N0my823scLA:/ClientActionFlows.ZETeHV+it0+N0my823scLA:j2Fucvjjc3lgi6OmrT3VxQ", "OutSystemsUI", "SetMenuIcon", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NmF_8AW1KkGeiFIvO9blhA", callContext.id);
// Auto?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZKUCOQN2MU6NhBsUtij4aw", callContext.id) && (vars.value.menuActionInLocal === OutSystemsUIModel.staticEntities.menuAction.auto))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:u1xwWmjOrUmCUq_MktIlVg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetMenuIcon_FindMenuLinksJS, "FindMenuLinks", "SetMenuIcon", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pJbaDv6PLE2VHW9iYjYl2Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rXkEjvPVHkmK4GMFMM9AuQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZETeHV+it0+N0my823scLA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetMenuIcon$vars", [{
name: "MenuAction",
attrName: "menuActionInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setMenuIcon$Action = function (menuActionIn) {
menuActionIn = (menuActionIn === undefined) ? "" : menuActionIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setMenuIcon$Action.bind(controller, menuActionIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetMenuIcon.FindMenuLinksJS", [], function () {
return function ($actions, $roles, $public) {
var appMenu = Array.prototype.slice.call(document.querySelectorAll(".bottom-bar a")),
    bottomBar = Array.prototype.slice.call(document.querySelectorAll(".app-menu a"))

var links = appMenu.concat(bottomBar);

var showMenu = false;

for (var i = 0; i < links.length; i++) {
    /* removing platform timestamps */
    var timestampIndex = window.location.href.indexOf("_ts")-1;
    var currentPage = timestampIndex > 0 ? window.location.href.substring(0, timestampIndex) : window.location.href;
    if(links[i].attributes["href"]) {
        if (currentPage.indexOf(links[i].attributes["href"].value) >= 0 || 
            currentPage[currentPage.length-1] === "/") {
            showMenu = (window.history ? window.history.length > 0 : true);        
        }
    }
}

if(showMenu) {
    document.querySelector(".app-menu-icon").classList.remove('back');
} else {
    document.querySelector(".app-menu-icon").classList.add('back');
}
};
});

define("OutSystemsUI.controller$SetMenuIconListeners", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetMenuIconListeners.setEventListenerJS", "OutSystemsUI.controller$ToggleSideMenu"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetMenuIconListeners_setEventListenerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setMenuIconListeners$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_11xLwz33EKTaCdoVOzzhQ:/ClientActionFlows._11xLwz33EKTaCdoVOzzhQ:dsSHVKNIxhCYkyZ8YJ6eBA", "OutSystemsUI", "SetMenuIconListeners", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TQJHloqQb0218XBRh0K83A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DQfQnUbxxUqjf787Hk7CTA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetMenuIconListeners_setEventListenerJS, "setEventListener", "SetMenuIconListeners", null, function ($parameters) {
}, {
ToggleSideMenu: OutSystemsUIController.default.clientActionProxies.toggleSideMenu$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PX6vMCSusECOzH18XaRgPg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_11xLwz33EKTaCdoVOzzhQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.setMenuIconListeners$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setMenuIconListeners$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetMenuIconListeners.setEventListenerJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.layout');
var menuIcon = document.querySelector('.menu-icon');
var isExpanded;

if(menuIcon) {
    var menuIconOnKeypress = function(e) {
        isExpanded = layout.classList.contains('menu-visible');
        //If enter or space use the menuIcon to validate
        if (e.keyCode == "32" || e.keyCode == "13") {
            e.preventDefault();
            e.stopPropagation();
            $actions.ToggleSideMenu();
        }
    };
    
    menuIcon.addEventListener('keydown', menuIconOnKeypress);
}
};
});

define("OutSystemsUI.controller$SetMenuListeners", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetMenuListeners.setEventListenerJS", "OutSystemsUI.controller$ToggleSideMenu", "OutSystemsUI.controller$SetMenuAttributes"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetMenuListeners_setEventListenerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setMenuListeners$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetMenuListeners$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9cFahaid_ESaRP3Q6_FwUw:/ClientActionFlows.9cFahaid_ESaRP3Q6_FwUw:lGYwElySlvafyhph5i2xPg", "OutSystemsUI", "SetMenuListeners", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YQPr42UAPEqQgZkGU1ldLA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:46YnzcXd6UmkwH+nqi2Q0A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetMenuListeners_setEventListenerJS, "setEventListener", "SetMenuListeners", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {
ToggleSideMenu: OutSystemsUIController.default.clientActionProxies.toggleSideMenu$Action,
SetMenuAttributes: OutSystemsUIController.default.clientActionProxies.setMenuAttributes$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Y8nvnVZ7XUGhMQSHxu1aRQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9cFahaid_ESaRP3Q6_FwUw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetMenuListeners$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setMenuListeners$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setMenuListeners$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetMenuListeners.setEventListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var widgetSelector = '';
if($parameters.WidgetId !== '') {
    widgetSelector = '#'+$parameters.WidgetId;
}

var layout = document.querySelector('.layout');
var menu = document.querySelector(widgetSelector+'.app-menu-content');

if(layout && menu) {
    
    var isTopMenuMobile;
    var isVisibleMobile;
    var isExpanded = layout.classList.contains('menu-visible');
    var isOverlay = layout.classList.contains('aside-overlay');
    var isExpandable = layout.classList.contains('aside-expandable');
    
    var menuLinks = menu.querySelector('.app-menu-links');

    var menuOnKeypress = function(e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
        var isEscapedPressed = (e.key === 'Escape' || e.keyCode === 27);
        var isShiftKey = e.shiftKey;
        var focusableEls = menu.querySelectorAll('a[href]:not([disabled]),[tabindex="0"], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]),input[type="submit"]:not([disabled]), select:not([disabled])');
        var firstFocusableEl = focusableEls[0]; 
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var isExpandableDesktop = document.querySelector('.desktop .active-screen .layout-side.aside-expandable') || document.querySelector('.tablet.landscape .active-screen .layout-side.aside-expandable');
        
        if(!isTabPressed && !isEscapedPressed) {
            return;
        }
    
        isExpanded = layout.classList.contains('menu-visible');
        
        //If esc, Close Menu
        if(isExpanded && isEscapedPressed) {
            e.preventDefault();
            e.stopPropagation();
            $actions.ToggleSideMenu();
        }
        
        if (!isExpandableDesktop) {
            if (isShiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }     
        }
        
    };
    
    // Invoking setTimeout to schedule the callback to be run asynchronously
    setTimeout(function(){
        isTopMenuMobile = document.querySelector('.tablet .active-screen .layout-top') || document.querySelector('.phone .active-screen .layout-top');
        isVisibleMobile = document.querySelector('.tablet.portrait .active-screen .layout-side.aside-visible') || document.querySelector('.phone .active-screen .layout-side.aside-visible');
        
        if(isOverlay || isExpandable || isTopMenuMobile || isVisibleMobile) {
            menu.addEventListener('keydown', menuOnKeypress);
            $actions.SetMenuAttributes();
        }
    }, 0);
    
    if(menuLinks){
        menuLinks = menuLinks.children;
        
        // Add role menuitem to all links on menu
        for(var i = 0; i < menuLinks.length; i++) {
            if(!menuLinks[i].hasAttribute("role") && menuLinks[i].tagName === "A") {      
                menuLinks[i].setAttribute("role", "menuitem");
            }
        }  
        
    }
  
}



};
});

define("OutSystemsUI.controller$SetProgressBarValue", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetProgressBarValue.SetProgressValueJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetProgressBarValue_SetProgressValueJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setProgressBarValue$Action = function (widgetIdIn, progressIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetProgressBarValue$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.progressInLocal = progressIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RMukOuB+P06DzBcBZYmJZA:/ClientActionFlows.RMukOuB+P06DzBcBZYmJZA:f4A_X8pTroOfpBmWhHwpzw", "OutSystemsUI", "SetProgressBarValue", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kFeu2+emZ0izWTAepWFlMQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:79wf0dJa1UW5K7wvkMBZGw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetProgressBarValue_SetProgressValueJS, "SetProgressValue", "SetProgressBarValue", {
Progress: OS.DataConversion.JSNodeParamConverter.to(vars.value.progressInLocal, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uBZlCfjqbUq1e8Zo32ACpQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RMukOuB+P06DzBcBZYmJZA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetProgressBarValue$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.setProgressBarValue$Action = function (widgetIdIn, progressIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
progressIn = (progressIn === undefined) ? 0 : progressIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setProgressBarValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(progressIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetProgressBarValue.SetProgressValueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.SetProgressValue($parameters.WidgetId, $parameters.Progress);
};
});

define("OutSystemsUI.controller$SetProgressCircleValue", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetProgressCircleValue.SetProgressValueJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetProgressCircleValue_SetProgressValueJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setProgressCircleValue$Action = function (widgetIdIn, progressIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetProgressCircleValue$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.progressInLocal = progressIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:BMD9zqQMgUiIhvlVH+p9Cg:/ClientActionFlows.BMD9zqQMgUiIhvlVH+p9Cg:AEUf7l6dJzCbKFgSbEIIdA", "OutSystemsUI", "SetProgressCircleValue", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9hw8wKIEjkazxMLWB+LRbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xj06NhzqkUaROyRC0V8odw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetProgressCircleValue_SetProgressValueJS, "SetProgressValue", "SetProgressCircleValue", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
Progress: OS.DataConversion.JSNodeParamConverter.to(vars.value.progressInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qezA9ngu8keFzrTxpc87Aw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:BMD9zqQMgUiIhvlVH+p9Cg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetProgressCircleValue$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.setProgressCircleValue$Action = function (widgetIdIn, progressIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
progressIn = (progressIn === undefined) ? 0 : progressIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setProgressCircleValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(progressIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetProgressCircleValue.SetProgressValueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.ProgressAPI.SetProgressValue($parameters.WidgetId, $parameters.Progress);
};
});

define("OutSystemsUI.controller$SetRangeSliderChangeOnDragEnd", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetRangeSliderChangeOnDragEnd.SetRangeSliderChangeOnDragEndJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetRangeSliderChangeOnDragEnd_SetRangeSliderChangeOnDragEndJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setRangeSliderChangeOnDragEnd$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetRangeSliderChangeOnDragEnd$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Cwk6PejmuUa4qUppblHKvA:/ClientActionFlows.Cwk6PejmuUa4qUppblHKvA:NShL+T8tzg0+uYach_RfmQ", "OutSystemsUI", "SetRangeSliderChangeOnDragEnd", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bOiszbL2ak6qaDF0otCsJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yWhMYPKKkEWtrJNbsGxAKA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetRangeSliderChangeOnDragEnd_SetRangeSliderChangeOnDragEndJS, "SetRangeSliderChangeOnDragEnd", "SetRangeSliderChangeOnDragEnd", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nUuTNYHBj0qeQ9G2qOhIsA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Cwk6PejmuUa4qUppblHKvA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetRangeSliderChangeOnDragEnd$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setRangeSliderChangeOnDragEnd$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setRangeSliderChangeOnDragEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetRangeSliderChangeOnDragEnd.SetRangeSliderChangeOnDragEndJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.GetRangeSliderItemById($parameters.WidgetId).setRangeIntervalChangeOnDragEnd();
};
});

define("OutSystemsUI.controller$SetRangeSliderIntervalChangeOnDragEnd", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetRangeSliderIntervalChangeOnDragEnd.SetRangeSliderChangeOnDragEndJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetRangeSliderIntervalChangeOnDragEnd_SetRangeSliderChangeOnDragEndJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setRangeSliderIntervalChangeOnDragEnd$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetRangeSliderIntervalChangeOnDragEnd$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:VIDuqmbsfEWHZXOAMknMbA:/ClientActionFlows.VIDuqmbsfEWHZXOAMknMbA:7R04NiR0p6az3Vdwf4tklQ", "OutSystemsUI", "SetRangeSliderIntervalChangeOnDragEnd", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:W4P0jsJAXkiJOpzujE0PIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4NC4s2vkqU+xdq1Y1MRYcQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetRangeSliderIntervalChangeOnDragEnd_SetRangeSliderChangeOnDragEndJS, "SetRangeSliderChangeOnDragEnd", "SetRangeSliderIntervalChangeOnDragEnd", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:q2zkMKmUqkm9XDcddDbRIA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:VIDuqmbsfEWHZXOAMknMbA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetRangeSliderIntervalChangeOnDragEnd$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.setRangeSliderIntervalChangeOnDragEnd$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setRangeSliderIntervalChangeOnDragEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetRangeSliderIntervalChangeOnDragEnd.SetRangeSliderChangeOnDragEndJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.RangeSliderAPI.GetRangeSliderItemById($parameters.WidgetId).setRangeIntervalChangeOnDragEnd();
};
});

define("OutSystemsUI.controller$SetSelectedTableRow", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetSelectedTableRow.SetSelectedRowJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetSelectedTableRow_SetSelectedRowJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setSelectedTableRow$Action = function (tableIdIn, rowNumberIn, isSelectedIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SetSelectedTableRow$vars"))());
vars.value.tableIdInLocal = tableIdIn;
vars.value.rowNumberInLocal = rowNumberIn;
vars.value.isSelectedInLocal = isSelectedIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6iLdt8t_ZUOkaPCUy9o4OQ:/ClientActionFlows.6iLdt8t_ZUOkaPCUy9o4OQ:6Zg4QlWTAFpYCnJrUCaxrw", "OutSystemsUI", "SetSelectedTableRow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Xy8qMy44yUij3dTCSoXTbw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ATatOzJqo0u2ApIml90UFg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetSelectedTableRow_SetSelectedRowJS, "SetSelectedRow", "SetSelectedTableRow", {
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.isSelectedInLocal, OS.Types.Boolean),
RowNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.rowNumberInLocal, OS.Types.Integer),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.tableIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wvnnWu9em0iOBY6Et5Hw+w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6iLdt8t_ZUOkaPCUy9o4OQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SetSelectedTableRow$vars", [{
name: "TableId",
attrName: "tableIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "RowNumber",
attrName: "rowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IsSelected",
attrName: "isSelectedInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.setSelectedTableRow$Action = function (tableIdIn, rowNumberIn, isSelectedIn) {
tableIdIn = (tableIdIn === undefined) ? "" : tableIdIn;
rowNumberIn = (rowNumberIn === undefined) ? 0 : rowNumberIn;
isSelectedIn = (isSelectedIn === undefined) ? false : isSelectedIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setSelectedTableRow$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tableIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(rowNumberIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(isSelectedIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetSelectedTableRow.SetSelectedRowJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var table = document.getElementById($parameters.WidgetId);

if(table) {
    var tableRow = table.querySelectorAll('.table-row');

    if(tableRow[$parameters.RowNumber]) {
        if($parameters.Value) {
            tableRow[$parameters.RowNumber].classList.add('table-row-selected');    
        } else {
            tableRow[$parameters.RowNumber].classList.remove('table-row-selected');    
        }
    }
}



};
});

define("OutSystemsUI.controller$SetServerDateFormat", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetServerDateFormat.SetServerDateFormatJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetServerDateFormat_SetServerDateFormatJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setServerDateFormat$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:dSnvORlvaEqP6BF_G1bxxQ:/ClientActionFlows.dSnvORlvaEqP6BF_G1bxxQ:ScpXGpjpx0lREqdTcRGOPQ", "OutSystemsUI", "SetServerDateFormat", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0OKaFOWDfEyVyMhpIpPDwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MfQf+UXzbkCUTjbWz2E37A", callContext.id);
// Trigger the API method that will set the ServerDate format.
controller.safeExecuteJSNode(OutSystemsUI_controller_SetServerDateFormat_SetServerDateFormatJS, "SetServerDateFormat", "SetServerDateFormat", {
SampleDate: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.dateToText(OS.BuiltinFunctions.newDate(1900, 10, 13)), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E00WOO6V_UCnyYt4skagdQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:dSnvORlvaEqP6BF_G1bxxQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.setServerDateFormat$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setServerDateFormat$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetServerDateFormat.SetServerDateFormatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Dates.SetServerDateFormat($parameters.SampleDate);
};
});

define("OutSystemsUI.controller$SetStickyObserver", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SetStickyObserver.StickyObserverJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SetStickyObserver_StickyObserverJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.setStickyObserver$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:1O3INw5CAUquLN4jLtAbkA:/ClientActionFlows.1O3INw5CAUquLN4jLtAbkA:O1sk4ko6oNsBdJmyl2BdeQ", "OutSystemsUI", "SetStickyObserver", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jHs6Uy+HMk+65BlMLQDz8A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1MNAe+J_ZUObGzwngACR8g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SetStickyObserver_StickyObserverJS, "StickyObserver", "SetStickyObserver", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P1IB+2nZVk6Hb2_BHfsn5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:1O3INw5CAUquLN4jLtAbkA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.setStickyObserver$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.setStickyObserver$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SetStickyObserver.StickyObserverJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.active-screen .layout');
var stickyObserver = document.querySelector(".active-screen .sticky-observer");
 
var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
        layout.classList.add('header-is--visible');
    } else {
        layout.classList.remove('header-is--visible');
    }
});

observer.observe(stickyObserver);

};
});

define("OutSystemsUI.controller$ShowPassword", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ShowPassword.ShowPasswordJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ShowPassword_ShowPasswordJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.showPassword$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IPzU9ikG0ESQIuRuOj5wDw:/ClientActionFlows.IPzU9ikG0ESQIuRuOj5wDw:HqmytqiblSO_B0NvBWwjUw", "OutSystemsUI", "ShowPassword", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PKLSaVAA3Ueb1liPdD5UMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bxp8S_H10kKMTwwJmoLfTQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ShowPassword_ShowPasswordJS, "ShowPassword", "ShowPassword", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TOjICRQzdEKCDowrukraiQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IPzU9ikG0ESQIuRuOj5wDw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.showPassword$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.showPassword$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ShowPassword.ShowPasswordJS", [], function () {
return function ($actions, $roles, $public) {
var inputPassword = document.querySelector('.login-password');

var typeInputPassword = inputPassword.type;

if(typeInputPassword === 'password') {
    inputPassword.setAttribute('type', 'text');
} else {
    inputPassword.setAttribute('type', 'password');   
}
};
});

define("OutSystemsUI.controller$SidebarChangeDirection", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarChangeDirection.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarChangeDirection_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarChangeDirection$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarChangeDirection$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5I43SgaDYUyQ9MESsgjCDw:/ClientActionFlows.5I43SgaDYUyQ9MESsgjCDw:x7fTRK1wD_qkrbXFHuHmUQ", "OutSystemsUI", "SidebarChangeDirection", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Lwa3G1gvQk+FYowNkrkWuQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P49CEKpIs0ObJLrajfWARg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarChangeDirection_ChangePropertyJS, "ChangeProperty", "SidebarChangeDirection", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Direction", OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qyPSxK3k3EikeJQR0mdfzg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5I43SgaDYUyQ9MESsgjCDw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarChangeDirection$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarChangeDirection$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarChangeDirection$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarChangeDirection.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SidebarChangeExtendedClass", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarChangeExtendedClass.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarChangeExtendedClass_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarChangeExtendedClass$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:VXD7p_f+1keTbClLYcec2Q:/ClientActionFlows.VXD7p_f+1keTbClLYcec2Q:36YxzFlJw9D1sUqc9Pn9AA", "OutSystemsUI", "SidebarChangeExtendedClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dK9MkH2miEiNNrSjLQo3LA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CbKYKPceSUCPSX8Zn7V7cw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarChangeExtendedClass_ChangePropertyJS, "ChangeProperty", "SidebarChangeExtendedClass", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("ExtendedClass", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5TUrBfvMv069_iXqdSi4dg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:VXD7p_f+1keTbClLYcec2Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarChangeExtendedClass$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarChangeExtendedClass$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarChangeExtendedClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarChangeExtendedClass.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SidebarChangeHasOverlay", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarChangeHasOverlay.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarChangeHasOverlay_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarChangeHasOverlay$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarChangeHasOverlay$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NVxg4+SW1EmrsLRv0Yv4kg:/ClientActionFlows.NVxg4+SW1EmrsLRv0Yv4kg:Cxj6wsG+BrWb6+Fv5Z3jvw", "OutSystemsUI", "SidebarChangeHasOverlay", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3cRK96LfZUGaW3YjRTLQ8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5Gj3K3lglEyHnZWFKXdqrw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarChangeHasOverlay_ChangePropertyJS, "ChangeProperty", "SidebarChangeHasOverlay", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("HasOverlay", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Zoqb65ZVCkGRMIMqdU3Hjg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NVxg4+SW1EmrsLRv0Yv4kg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarChangeHasOverlay$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarChangeHasOverlay$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarChangeHasOverlay$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarChangeHasOverlay.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SidebarChangeStartsOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarChangeStartsOpen.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarChangeStartsOpen_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarChangeStartsOpen$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarChangeStartsOpen$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:88xqw_orJUW+IE5lL4spLQ:/ClientActionFlows.88xqw_orJUW+IE5lL4spLQ:DRpruV9_yZ6iyyeSCw2qfw", "OutSystemsUI", "SidebarChangeStartsOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JPIdEgExykeudq3ags9EXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OrF7yRqI_kWzAmDe6yuElg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarChangeStartsOpen_ChangePropertyJS, "ChangeProperty", "SidebarChangeStartsOpen", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("StartsOpen", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ydB+PV1DoUimZAyglVFseg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:88xqw_orJUW+IE5lL4spLQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarChangeStartsOpen$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarChangeStartsOpen$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarChangeStartsOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarChangeStartsOpen.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SidebarChangeWidth", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarChangeWidth.ChangePropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarChangeWidth_ChangePropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarChangeWidth$Action = function (uniqueIdIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarChangeWidth$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:03uLSx7BG0C6yQWOq+NvUQ:/ClientActionFlows.03uLSx7BG0C6yQWOq+NvUQ:As8+vGhWq+XfUDb5Frw_6A", "OutSystemsUI", "SidebarChangeWidth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Gls1K0DXs0+dP8BJfgSd1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mINadEczU0SrTKykppVZbA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarChangeWidth_ChangePropertyJS, "ChangeProperty", "SidebarChangeWidth", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to("Width", OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0CgoelmGtEurnfzqKMUvxA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:03uLSx7BG0C6yQWOq+NvUQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarChangeWidth$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarChangeWidth$Action = function (uniqueIdIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarChangeWidth$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarChangeWidth.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SidebarClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarClose.CloseSidebarJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarClose_CloseSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarClose$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarClose$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3R4D2mxED0erTuoiqqO3EA:/ClientActionFlows.3R4D2mxED0erTuoiqqO3EA:6UJQKGC9BxGW5i9ahKCVXg", "OutSystemsUI", "SidebarClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nECCfBb5nka+4IGicXbgMA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dpOajdnvzkiUvJ0Ou1SZbA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarClose_CloseSidebarJS, "CloseSidebar", "SidebarClose", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rE4n0Y01SE6eT81xvaycuw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3R4D2mxED0erTuoiqqO3EA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarClose$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarClose$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarClose.CloseSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.Close(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$SidebarCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarCreate.CreateSidebarJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarCreate_CreateSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarCreate$Action = function (uniqueIdIn, internalConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarCreate$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.internalConfigsInLocal = internalConfigsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:z0rUFycutE2SGjpf1RuQfg:/ClientActionFlows.z0rUFycutE2SGjpf1RuQfg:K03BZx37F8h34kfTDViBGg", "OutSystemsUI", "SidebarCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IlbzZcAjL0OKY6E5lHZcgA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nBS9w_PQZE22OrnbvuMxFA", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarCreate_CreateSidebarJS, "CreateSidebar", "SidebarCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.internalConfigsInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OlCrjSYKLECoPhgtc9ECyQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:z0rUFycutE2SGjpf1RuQfg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarCreate$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "InternalConfigs",
attrName: "internalConfigsInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarCreate$Action = function (uniqueIdIn, internalConfigsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
internalConfigsIn = (internalConfigsIn === undefined) ? "" : internalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarCreate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(internalConfigsIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarCreate.CreateSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$SidebarDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+BKflUVDzUqCK3bICvaN0A:/ClientActionFlows.+BKflUVDzUqCK3bICvaN0A:z_6VB_4ku2wLVsdaO9mAuA", "OutSystemsUI", "SidebarDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Z1spc7bpL06bnJb857E7mQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L0duiZHKHE6hZr0sYKPKUw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarDestroy_DestroyJS, "Destroy", "SidebarDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xz2RDSiPW0iTdrzVYJxU3w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+BKflUVDzUqCK3bICvaN0A", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$SidebarInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarInitialize.InitializeSidebarJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarInitialize_InitializeSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OaWm7uLYa0mswt1zuEqPWg:/ClientActionFlows.OaWm7uLYa0mswt1zuEqPWg:X+O85PLXZUtsbNglP2SAWg", "OutSystemsUI", "SidebarInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ce8P0fudaEq_luZj1zAvCw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pPS1Usw1cUelqE7nxjfGMw", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarInitialize_InitializeSidebarJS, "InitializeSidebar", "SidebarInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kmjUkUYfMkW9CYnmsBYZiA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OaWm7uLYa0mswt1zuEqPWg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarInitialize.InitializeSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$SidebarOnGestureEnd", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarOnGestureEnd.OnGestureEndJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarOnGestureEnd_OnGestureEndJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarOnGestureEnd$Action = function (uniqueIdIn, offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarOnGestureEnd$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RpWXsI+880axCdGUrivVBQ:/ClientActionFlows.RpWXsI+880axCdGUrivVBQ:ai7si+0GD79CNJCDnH82Aw", "OutSystemsUI", "SidebarOnGestureEnd", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WHci2qWuVUORXNbkgI3lzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OZcVt6LzxU2+U+P0OWGscA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarOnGestureEnd_OnGestureEndJS, "OnGestureEnd", "SidebarOnGestureEnd", {
OffsetX: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetXInLocal, OS.Types.Decimal),
TimeTaken: OS.DataConversion.JSNodeParamConverter.to(vars.value.timeTakenInLocal, OS.Types.Decimal),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
OffsetY: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetYInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:J9CLaVS9NUOr2QEZp_rz5g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RpWXsI+880axCdGUrivVBQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarOnGestureEnd$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarOnGestureEnd$Action = function (uniqueIdIn, offsetXIn, offsetYIn, timeTakenIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
offsetXIn = (offsetXIn === undefined) ? OS.DataTypes.Decimal.defaultValue : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? OS.DataTypes.Decimal.defaultValue : offsetYIn;
timeTakenIn = (timeTakenIn === undefined) ? OS.DataTypes.Decimal.defaultValue : timeTakenIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarOnGestureEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(timeTakenIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarOnGestureEnd.OnGestureEndJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.GetSidebarById($parameters.UniqueId).onGestureEnd(
    $parameters.OffsetX,$parameters.OffsetY,$parameters.TimeTaken
);
};
});

define("OutSystemsUI.controller$SidebarOnGestureMove", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarOnGestureMove.OnGestureMoveJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarOnGestureMove_OnGestureMoveJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarOnGestureMove$Action = function (uniqueIdIn, xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarOnGestureMove$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.evtInLocal = evtIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:MOdklch83keEdHT9GEjVsA:/ClientActionFlows.MOdklch83keEdHT9GEjVsA:8fFmKYSx9qgykLwpgCtigg", "OutSystemsUI", "SidebarOnGestureMove", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:h9cZbc_OVUyJcdsH5M8U9Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aSHUl2uswU2bVdB5bvUqVQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarOnGestureMove_OnGestureMoveJS, "OnGestureMove", "SidebarOnGestureMove", {
X: OS.DataConversion.JSNodeParamConverter.to(vars.value.xInLocal, OS.Types.Decimal),
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.Types.Object),
Y: OS.DataConversion.JSNodeParamConverter.to(vars.value.yInLocal, OS.Types.Decimal),
OffsetX: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetXInLocal, OS.Types.Decimal),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
OffsetY: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetYInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aiLQLr1iIEGzxgoCV3fvog", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:MOdklch83keEdHT9GEjVsA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarOnGestureMove$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarOnGestureMove$Action = function (uniqueIdIn, xIn, yIn, offsetXIn, offsetYIn, evtIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
xIn = (xIn === undefined) ? OS.DataTypes.Decimal.defaultValue : xIn;
yIn = (yIn === undefined) ? OS.DataTypes.Decimal.defaultValue : yIn;
offsetXIn = (offsetXIn === undefined) ? OS.DataTypes.Decimal.defaultValue : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? OS.DataTypes.Decimal.defaultValue : offsetYIn;
evtIn = (evtIn === undefined) ? null : evtIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarOnGestureMove$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(xIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(evtIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarOnGestureMove.OnGestureMoveJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.GetSidebarById($parameters.UniqueId).onGestureMove(
    $parameters.X, $parameters.Y,$parameters.OffsetX,$parameters.OffsetY,$parameters.Evt
);
};
});

define("OutSystemsUI.controller$SidebarOnGestureStart", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarOnGestureStart.OnGestureStartJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarOnGestureStart_OnGestureStartJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarOnGestureStart$Action = function (uniqueIdIn, xIn, yIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarOnGestureStart$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8FzEUwWOq0+Zi_AZHC02ow:/ClientActionFlows.8FzEUwWOq0+Zi_AZHC02ow:jyprQzJoylkxzlhNv0Vf4Q", "OutSystemsUI", "SidebarOnGestureStart", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NRNVN0YjF0GutkX9yxL4Dw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Nl4IQlqm2EqIhmGqIn6ykQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarOnGestureStart_OnGestureStartJS, "OnGestureStart", "SidebarOnGestureStart", {
Y: OS.DataConversion.JSNodeParamConverter.to(vars.value.yInLocal, OS.Types.Decimal),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
X: OS.DataConversion.JSNodeParamConverter.to(vars.value.xInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8OOHyGTs506i2IevO4jmKQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8FzEUwWOq0+Zi_AZHC02ow", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarOnGestureStart$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarOnGestureStart$Action = function (uniqueIdIn, xIn, yIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
xIn = (xIn === undefined) ? OS.DataTypes.Decimal.defaultValue : xIn;
yIn = (yIn === undefined) ? OS.DataTypes.Decimal.defaultValue : yIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarOnGestureStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(xIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarOnGestureStart.OnGestureStartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.GetSidebarById($parameters.UniqueId).onGestureStart($parameters.X,$parameters.Y);
};
});

define("OutSystemsUI.controller$SidebarOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarOpen.OpenSidebarJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarOpen_OpenSidebarJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarOpen$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarOpen$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:PN7rZt6KuU6Ljraavd2k6g:/ClientActionFlows.PN7rZt6KuU6Ljraavd2k6g:KVZd5N1fIIFl1K3MpPqvTA", "OutSystemsUI", "SidebarOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JOSYvGRHW02BQaAEK_QEZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bMYlNGwj10ScNyPxyydUBQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarOpen_OpenSidebarJS, "OpenSidebar", "SidebarOpen", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Tw2HERjFwk6modxcutCXcQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:PN7rZt6KuU6Ljraavd2k6g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarOpen$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarOpen$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarOpen.OpenSidebarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.Open(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$SidebarRegisterCallback", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SidebarRegisterCallback.RegisterCallbackJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SidebarRegisterCallback_RegisterCallbackJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.sidebarRegisterCallback$Action = function (uniqueIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SidebarRegisterCallback$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zNQ51VqoIU6HWzBlJzeUBQ:/ClientActionFlows.zNQ51VqoIU6HWzBlJzeUBQ:S3QOWvUL+5Hp0yZCR0eixw", "OutSystemsUI", "SidebarRegisterCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2OoHnEPPIEWg8TCyJmdscA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RfzQcaNGSE+UGaBoHeNIGA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SidebarRegisterCallback_RegisterCallbackJS, "RegisterCallback", "SidebarRegisterCallback", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.Types.Object),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Zrgl1l05lE+Gqi7W3wcuWQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zNQ51VqoIU6HWzBlJzeUBQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SidebarRegisterCallback$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsUIController.default.clientActionProxies.sidebarRegisterCallback$Action = function (uniqueIdIn, callbackIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.sidebarRegisterCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SidebarRegisterCallback.RegisterCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SidebarAPI.RegisterCallback($parameters.UniqueId, $parameters.Callback);
};
});

define("OutSystemsUI.controller$SkipToContent", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SkipToContent.SkipToContentJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SkipToContent_SkipToContentJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.skipToContent$Action = function (targetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SkipToContent$vars"))());
vars.value.targetIdInLocal = targetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:47TabZ9HT0ixaXEVUGyJag:/ClientActionFlows.47TabZ9HT0ixaXEVUGyJag:tgfK7UZQnZPDLbai4QN0vg", "OutSystemsUI", "SkipToContent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jeOesKjOSEGo7zI_+1uc+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9yYTvLbuNE2F6DOfAk65eg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SkipToContent_SkipToContentJS, "SkipToContent", "SkipToContent", {
TargetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:15oljrWsnk+JvEvZqMz7qA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:47TabZ9HT0ixaXEVUGyJag", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SkipToContent$vars", [{
name: "TargetId",
attrName: "targetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.skipToContent$Action = function (targetIdIn) {
targetIdIn = (targetIdIn === undefined) ? "" : targetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.skipToContent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(targetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SkipToContent.SkipToContentJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var target = document.getElementById($parameters.TargetId);

if(target) {
    var isFocusable = target.getAttribute('tabindex');
    
    if(isFocusable === null) {
        target.setAttribute('tabindex', '0');
        target.focus();
        target.removeAttribute('tabindex');    
    } else {
        target.focus();
    }
}
};
});

define("OutSystemsUI.controller$StackedCardsSwipeLeft", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$StackedCardsSwipeLeft.SwipeLeftJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_StackedCardsSwipeLeft_SwipeLeftJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.stackedCardsSwipeLeft$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.StackedCardsSwipeLeft$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fk74nHYtG0aQv3rJupL3Yg:/ClientActionFlows.fk74nHYtG0aQv3rJupL3Yg:9PmvKzTtJczMu5bSZKBJHA", "OutSystemsUI", "StackedCardsSwipeLeft", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:s+iPGCWs_k+MMYfN3ziU3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bYAjhTuI_UCBz++CrCJsBg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_StackedCardsSwipeLeft_SwipeLeftJS, "SwipeLeft", "StackedCardsSwipeLeft", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1c7eHc5sLkWMsIBVVyheOw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fk74nHYtG0aQv3rJupL3Yg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.StackedCardsSwipeLeft$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.stackedCardsSwipeLeft$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.stackedCardsSwipeLeft$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$StackedCardsSwipeLeft.SwipeLeftJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').leftAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUI.controller$StackedCardsSwipeRight", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$StackedCardsSwipeRight.SwipeRightJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_StackedCardsSwipeRight_SwipeRightJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.stackedCardsSwipeRight$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.StackedCardsSwipeRight$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6tQbuDWdOEWMYpjaBjycWw:/ClientActionFlows.6tQbuDWdOEWMYpjaBjycWw:bVlhJ11T7x_3hNPHRpOCdA", "OutSystemsUI", "StackedCardsSwipeRight", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VuD5cPGfhkeiduZM4nLpWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NdVbtmiNvESSTFMxbhkzFA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_StackedCardsSwipeRight_SwipeRightJS, "SwipeRight", "StackedCardsSwipeRight", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WNVQ6nuIvkGGt1RcEa_mpg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6tQbuDWdOEWMYpjaBjycWw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.StackedCardsSwipeRight$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.stackedCardsSwipeRight$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.stackedCardsSwipeRight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$StackedCardsSwipeRight.SwipeRightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').rightAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUI.controller$StackedCardsSwipeTop", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$StackedCardsSwipeTop.SwipeTopJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_StackedCardsSwipeTop_SwipeTopJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.stackedCardsSwipeTop$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.StackedCardsSwipeTop$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8YOsHAWvHESA5NDmbFugGA:/ClientActionFlows.8YOsHAWvHESA5NDmbFugGA:NB+6PhpJrH3mOakIV4Ugug", "OutSystemsUI", "StackedCardsSwipeTop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QM9QmX8J80OsfJOs1nLE0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VGBdXlToIUWYcJSWS4uVRg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_StackedCardsSwipeTop_SwipeTopJS, "SwipeTop", "StackedCardsSwipeTop", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_UhNcUdIkEWxi1lLtcZXcA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8YOsHAWvHESA5NDmbFugGA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.StackedCardsSwipeTop$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.stackedCardsSwipeTop$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.stackedCardsSwipeTop$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$StackedCardsSwipeTop.SwipeTopJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element;

var swipeActionInterval = setInterval(function(){
    
    element = document.getElementById($parameters.WidgetId);

    if( element !== null) {
        element.querySelector('.stackedcards-container').topAction();
        clearInterval(swipeActionInterval);
    }
    
}, 100)
};
});

define("OutSystemsUI.controller$StackedCardsUpdate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$StackedCardsUpdate.UpdateUiJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_StackedCardsUpdate_UpdateUiJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.stackedCardsUpdate$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.StackedCardsUpdate$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qVJTiEelwUyyAIZ8YvF0kA:/ClientActionFlows.qVJTiEelwUyyAIZ8YvF0kA:icyWBqa6Z07UEiWpatgjaQ", "OutSystemsUI", "StackedCardsUpdate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3o5Fg1Sy30SjMSRtsAXFvQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xMKXLKzze0S3+ZodJF1oqw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_StackedCardsUpdate_UpdateUiJS, "UpdateUi", "StackedCardsUpdate", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2ps+Ax4uM0++BiukTNgv2g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qVJTiEelwUyyAIZ8YvF0kA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.StackedCardsUpdate$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.stackedCardsUpdate$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.stackedCardsUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$StackedCardsUpdate.UpdateUiJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId).querySelector('.stackedcards-container').updateUi();
};
});

define("OutSystemsUI.controller$StartOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$StartOfflineDataSync.CallBlockHandlerJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_StartOfflineDataSync_CallBlockHandlerJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.startOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.StartOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6wYKHDHaTk24G0Nx4wSdrQ:/ClientActionFlows.6wYKHDHaTk24G0Nx4wSdrQ:6c+o6y23CS0r6_w8YmX+nA", "OutSystemsUI", "StartOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:eCwp1y5OvEmtYkivpmfoog", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0Tc16cg8iEuflVtN94J9Dg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_StartOfflineDataSync_CallBlockHandlerJS, "CallBlockHandler", "StartOfflineDataSync", {
SyncUnit: OS.DataConversion.JSNodeParamConverter.to(vars.value.syncUnitInLocal, OS.Types.Text),
DiscardPendingUnits: OS.DataConversion.JSNodeParamConverter.to(vars.value.discardPendingSyncUnitsInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9YoiDsnfdEadz05S8x5_ZA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6wYKHDHaTk24G0Nx4wSdrQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.StartOfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DiscardPendingSyncUnits",
attrName: "discardPendingSyncUnitsInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.startOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.startOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$StartOfflineDataSync.CallBlockHandlerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.offlineDataSync) {
    window.offlineDataSync.sync($parameters.SyncUnit, $parameters.DiscardPendingUnits);
}
};
});

define("OutSystemsUI.controller$SubmenuChangeIntegerProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuChangeIntegerProp.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuChangeIntegerProp_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuChangeIntegerProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5aR29kE5U06ksj5Xhm58rQ:/ClientActionFlows.5aR29kE5U06ksj5Xhm58rQ:C1Cu4+5KmKwwomr89BWvIg", "OutSystemsUI", "SubmenuChangeIntegerProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lFFBRdI7JkCWHG_hjJuzGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kFDjkN455kSPZktIXhzAjg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuChangeIntegerProp_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "SubmenuChangeIntegerProp", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.LongInteger),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lMhFTuGPn0aWLljGq_F0nA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5aR29kE5U06ksj5Xhm58rQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuChangeIntegerProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuChangeIntegerProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuChangeIntegerProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuChangeIntegerProp.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SubmenuChangeTextProp", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuChangeTextProp.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuChangeTextProp_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuChangeTextProp$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:MO37tcJ14Eu8LFEDxBLUlQ:/ClientActionFlows.MO37tcJ14Eu8LFEDxBLUlQ:X0ZVf8TCYYN1lGFsVi9Ylg", "OutSystemsUI", "SubmenuChangeTextProp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WK16fD9vi0Ck71uOrk0bNQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NCmsBFr8skm3jWvPl_riJw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuChangeTextProp_ChangeTextPropertyJS, "ChangeTextProperty", "SubmenuChangeTextProp", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PCRTi+b6q0mRbuK_Fo0Kkw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:MO37tcJ14Eu8LFEDxBLUlQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuChangeTextProp$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuChangeTextProp$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuChangeTextProp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuChangeTextProp.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$SubmenuClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuClose.CloseSubmenuJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuClose_CloseSubmenuJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuClose$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuClose$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:pZoGL7rcFk+2JW+vKUQyfA:/ClientActionFlows.pZoGL7rcFk+2JW+vKUQyfA:zlhPoBFb349fF34DjuEGug", "OutSystemsUI", "SubmenuClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:y6xD7GJ860KM_UhGUwcwZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xHm9+kLqdUWRzZ8xWWollw", callContext.id);
// Trigger the API method that will close the submenu.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuClose_CloseSubmenuJS, "CloseSubmenu", "SubmenuClose", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7W2xrPOT6EKa0sWRIJcH7A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:pZoGL7rcFk+2JW+vKUQyfA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuClose$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuClose$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuClose.CloseSubmenuJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.Close(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$SubmenuCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuCreate.CreateJS", "OutSystemsUI.model$Submenu_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yaJhOP_yb0yqSYWVJZG68Q:/ClientActionFlows.yaJhOP_yb0yqSYWVJZG68Q:YcJL9Om3L9Eudve2Gl1I8g", "OutSystemsUI", "SubmenuCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R5wrDDwcMkC2P5ooexqaCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zjy5Rgnx10aTD30HZqe_4w", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vyM_7_fKUUme4ROZMJHNsw", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuCreate_CreateJS, "Create", "SubmenuCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X92mgMHU5Ue_y9yl1yuZ6Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yaJhOP_yb0yqSYWVJZG68Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.Submenu_InternalConfigRec();
},
complexType: OutSystemsUIModel.Submenu_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.submenuCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.Submenu_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$SubmenuDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:mcUjblteRkG6euKqAbT9mA:/ClientActionFlows.mcUjblteRkG6euKqAbT9mA:L3JQoFcbP0vXDNzw1xGoPQ", "OutSystemsUI", "SubmenuDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ISOQBRAOPkuapAaoYytYWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:APEYpnFeKUSPEI5m1fvidw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuDestroy_DestroyJS, "Destroy", "SubmenuDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xR8KKXkxnUe9n4VV_Qb54A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:mcUjblteRkG6euKqAbT9mA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$SubmenuInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:jsQwShgXt02pRAorWLoF7w:/ClientActionFlows.jsQwShgXt02pRAorWLoF7w:pSAPFFwILIOyGTUVsN5Rcg", "OutSystemsUI", "SubmenuInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_gRbI2NqRkia2Nv2kUYoNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dt3Wpk9vjEGEnBj3NQ6dpw", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuInitialize_InitializeJS, "Initialize", "SubmenuInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KSXS2lZ3gk21Hi1qDsh4aw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:jsQwShgXt02pRAorWLoF7w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$SubmenuOnRender", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuOnRender.OnRenderJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuOnRender_OnRenderJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuOnRender$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuOnRender$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:sAnbvTFH00O3EMO_VgcYCg:/ClientActionFlows.sAnbvTFH00O3EMO_VgcYCg:vCddbSW3g4far1XmlGaSlQ", "OutSystemsUI", "SubmenuOnRender", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FqCtcU9G20SF50VCyWTUbA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TE4j5j+PI06bzcKVldv1nw", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuOnRender_OnRenderJS, "OnRender", "SubmenuOnRender", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p2EE0RdEaUOFgkOlFYYgAQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:sAnbvTFH00O3EMO_VgcYCg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuOnRender$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuOnRender$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuOnRender$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuOnRender.OnRenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.UpdateOnRender($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$SubmenuOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuOpen.OpenSubmenuJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuOpen_OpenSubmenuJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuOpen$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuOpen$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+zJyhDB__EKzvZTbcS_UIQ:/ClientActionFlows.+zJyhDB__EKzvZTbcS_UIQ:+D5XqsFDtfn4SGLVQPrHdQ", "OutSystemsUI", "SubmenuOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kvQ4y5J6jEOuxTnoIo1UDw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:olfzfLoxd0WnOFttHrHMMw", callContext.id);
// Trigger the API method that will open the submenu.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuOpen_OpenSubmenuJS, "OpenSubmenu", "SubmenuOpen", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L54LaTnN00KBBbeLDSY97g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+zJyhDB__EKzvZTbcS_UIQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuOpen$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuOpen$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuOpen.OpenSubmenuJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.Open(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$SubmenuOpenOnHover", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$SubmenuOpenOnHover.SetSubmenuOpenOnHoverJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_SubmenuOpenOnHover_SetSubmenuOpenOnHoverJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.submenuOpenOnHover$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.SubmenuOpenOnHover$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:azymyWSM9EChoS8tERyNNw:/ClientActionFlows.azymyWSM9EChoS8tERyNNw:vmggY7_YnH9WPy92gluhKA", "OutSystemsUI", "SubmenuOpenOnHover", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OMcQ6dsOjUio1EsHxg5Ibw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NFAashiXokalwr8nmwajLg", callContext.id);
// Trigger the API method that set the open by hover on the submenu.
controller.safeExecuteJSNode(OutSystemsUI_controller_SubmenuOpenOnHover_SetSubmenuOpenOnHoverJS, "SetSubmenuOpenOnHover", "SubmenuOpenOnHover", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XoirE9Qp60OOJEjskddaiA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:azymyWSM9EChoS8tERyNNw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.SubmenuOpenOnHover$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.submenuOpenOnHover$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.submenuOpenOnHover$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$SubmenuOpenOnHover.SetSubmenuOpenOnHoverJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.SubmenuAPI.SubmenuOpenOnHover(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$TabsDisableSwipe", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TabsDisableSwipe.AddClassNoSwipeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TabsDisableSwipe_AddClassNoSwipeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tabsDisableSwipe$Action = function (tabIDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TabsDisableSwipe$vars"))());
vars.value.tabIDInLocal = tabIDIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8A4PWWqEo0eHrnR0AR3i9Q:/ClientActionFlows.8A4PWWqEo0eHrnR0AR3i9Q:mt1har0OcRexVb1lI1e0UQ", "OutSystemsUI", "TabsDisableSwipe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GtM0GXiS1UG1DaAH_MoTaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B3wXWZq7aUWYEIVdFUX_KA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TabsDisableSwipe_AddClassNoSwipeJS, "AddClassNoSwipe", "TabsDisableSwipe", {
TabID: OS.DataConversion.JSNodeParamConverter.to(vars.value.tabIDInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2SYl0nbsbUifUcGePGHZQQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8A4PWWqEo0eHrnR0AR3i9Q", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TabsDisableSwipe$vars", [{
name: "TabID",
attrName: "tabIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tabsDisableSwipe$Action = function (tabIDIn) {
tabIDIn = (tabIDIn === undefined) ? "" : tabIDIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tabsDisableSwipe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tabIDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TabsDisableSwipe.AddClassNoSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.TabID).querySelector('.tabs');

if(elem) {
    elem.classList.add('no-swipe');
}
};
});

define("OutSystemsUI.controller$TabsGoTo", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TabsGoTo.JsChangeTabJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TabsGoTo_JsChangeTabJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tabsGoTo$Action = function (widgetIdIn, tabNumberIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TabsGoTo$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.tabNumberInLocal = tabNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:uBmPnAyh10iXcs4yts2GGw:/ClientActionFlows.uBmPnAyh10iXcs4yts2GGw:GtIK7HvsZovkngViPUJq6w", "OutSystemsUI", "TabsGoTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PZmGGuUzaEmvKzzO7xFVXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:DkGb6z63NUeOAN_exev1sA", callContext.id);
// Script to change the tab that is opened.
controller.safeExecuteJSNode(OutSystemsUI_controller_TabsGoTo_JsChangeTabJS, "JsChangeTab", "TabsGoTo", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text),
TabNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.tabNumberInLocal, OS.Types.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L5BRA4V2M0CBIiYdrVYnsw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:uBmPnAyh10iXcs4yts2GGw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TabsGoTo$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TabNumber",
attrName: "tabNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.clientActionProxies.tabsGoTo$Action = function (widgetIdIn, tabNumberIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
tabNumberIn = (tabNumberIn === undefined) ? 0 : tabNumberIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tabsGoTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(tabNumberIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TabsGoTo.JsChangeTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);

if(element) {
    var countTabs = element.querySelectorAll(".tabs-header-tab").length-1;
    var newTargetTab = ($parameters.TabNumber < 0) ? 0 : ($parameters.TabNumber > countTabs) ? countTabs : $parameters.TabNumber;
    element.changeTab(newTargetTab);
}
};
});

define("OutSystemsUI.controller$TextEllipsis", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.textEllipsis$Action = function (textIn, numberOfCharsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TextEllipsis$vars"))());
vars.value.textInLocal = textIn;
vars.value.numberOfCharsInLocal = numberOfCharsIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TextEllipsis$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:vcPCjzmwt06eSWGQwvznuA:/ClientActionFlows.vcPCjzmwt06eSWGQwvznuA:LVSGFDl_rtj5L9TOtWoTXA", "OutSystemsUI", "TextEllipsis", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p1XmnacGaEOcwbrR8D7Z0g", callContext.id);
// Set Text with Ellipsis
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1sSXt7IPA06J2_AMOnpLfQ", callContext.id);
// Out = If + If
outVars.value.outOut = ((((OS.BuiltinFunctions.length(vars.value.textInLocal) > vars.value.numberOfCharsInLocal)) ? (OS.BuiltinFunctions.substr(vars.value.textInLocal, 0, vars.value.numberOfCharsInLocal)) : (vars.value.textInLocal)) + (((OS.BuiltinFunctions.length(vars.value.textInLocal) > vars.value.numberOfCharsInLocal)) ? ("...") : ("")));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Gri2DOKqCE6VH4hPqVv76w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:vcPCjzmwt06eSWGQwvznuA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TextEllipsis$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "NumberOfChars",
attrName: "numberOfCharsInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TextEllipsis$outVars", [{
name: "Out",
attrName: "outOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.textEllipsis$Action = function (textIn, numberOfCharsIn) {
textIn = (textIn === undefined) ? "" : textIn;
numberOfCharsIn = (numberOfCharsIn === undefined) ? 0 : numberOfCharsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.textEllipsis$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(numberOfCharsIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out: OS.DataConversion.JSNodeParamConverter.to(actionResults.outOut, OS.Types.Text)
};
});
};
});

define("OutSystemsUI.controller$ToggleSideMenu", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ToggleSideMenu.ToggleSideMenuJS", "OutSystemsUI.controller$SetMenuAttributes"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ToggleSideMenu_ToggleSideMenuJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.toggleSideMenu$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:DCQtVNJTOkqa1AaUsdSc5w:/ClientActionFlows.DCQtVNJTOkqa1AaUsdSc5w:c4ZOxoX7AMJnn9CGsnfcwg", "OutSystemsUI", "ToggleSideMenu", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XtNByosVU0a72x8r54raqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:e_mF4MqD3kavK37a4fp_WA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ToggleSideMenu_ToggleSideMenuJS, "ToggleSideMenu", "ToggleSideMenu", null, function ($parameters) {
}, {
SetMenuAttributes: OutSystemsUIController.default.clientActionProxies.setMenuAttributes$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tR4CDYbfKUCj9S2MJHARQg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:DCQtVNJTOkqa1AaUsdSc5w", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.toggleSideMenu$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.toggleSideMenu$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ToggleSideMenu.ToggleSideMenuJS", [], function () {
return function ($actions, $roles, $public) {
var layout = document.querySelector('.layout');
var menu = document.querySelector('.app-menu-content');
var menuIcon = document.querySelector('.menu-icon');

if(layout && menu) {
    var isExpanded = layout.classList.contains('menu-visible');
    
    var toggleMenu = function(){
       if(isExpanded && menuIcon) {
            layout.classList.remove('menu-visible');
            menuIcon.focus();
            isExpanded = false;
        } else {
            layout.classList.add('menu-visible');
            menu.focus(); 
            isExpanded = true;
        }
        
        $actions.SetMenuAttributes();
    }(); 
}


};
});

define("OutSystemsUI.controller$ToggleTextSpacing", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$ToggleTextSpacing.TextSpacingStylesJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_ToggleTextSpacing_TextSpacingStylesJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.toggleTextSpacing$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:lpumF0DITkK_p+HM2xm0Pg:/ClientActionFlows.lpumF0DITkK_p+HM2xm0Pg:h_6Yo6Afm4K6i8nXQIWx_Q", "OutSystemsUI", "ToggleTextSpacing", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G43XKcaiGU6G8GDsKC+Ocg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:i+7a8WhXc0ibOM_sownrVQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_ToggleTextSpacing_TextSpacingStylesJS, "TextSpacingStyles", "ToggleTextSpacing", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YjyxIe2J4EmvDi1GNkJQkQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:lpumF0DITkK_p+HM2xm0Pg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.toggleTextSpacing$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.toggleTextSpacing$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$ToggleTextSpacing.TextSpacingStylesJS", [], function () {
return function ($actions, $roles, $public) {
var spacingStyles = document.querySelector('.acessibility-style-tag');

if (!spacingStyles) {
    spacingStyles = document.createElement('style');
    spacingStyles.classList.add('acessibility-style-tag');
    spacingStyles.textContent = " * { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } p { margin-bottom: 2em !important; } ";
    document.head.appendChild(spacingStyles);
} else if(spacingStyles) {
    spacingStyles.remove();
}
};
});

define("OutSystemsUI.controller$TooltipChangeBooleanProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipChangeBooleanProperty.ChangeBooleanPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipChangeBooleanProperty_ChangeBooleanPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipChangeBooleanProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipChangeBooleanProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OAjb1bJms0GMJ_7am73lFw:/ClientActionFlows.OAjb1bJms0GMJ_7am73lFw:fBujq3Sy4KYjqOEBNwTp4g", "OutSystemsUI", "TooltipChangeBooleanProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:I4jWPwqRwESabJr9Z3m45A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:J6J+lT2FE0GHMxZbxePVPw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipChangeBooleanProperty_ChangeBooleanPropertyJS, "ChangeBooleanProperty", "TooltipChangeBooleanProperty", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sBh5x8PlwkSN1ITGIKIGKA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OAjb1bJms0GMJ_7am73lFw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipChangeBooleanProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipChangeBooleanProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? false : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipChangeBooleanProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipChangeBooleanProperty.ChangeBooleanPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$TooltipChangeTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipChangeTextProperty.ChangeTextPropertyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipChangeTextProperty_ChangeTextPropertyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipChangeTextProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipChangeTextProperty$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:4zh0+dFnB0KQbMr9_Bui0g:/ClientActionFlows.4zh0+dFnB0KQbMr9_Bui0g:tNIbuvqpei2F8VxoT8NCzA", "OutSystemsUI", "TooltipChangeTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:asIVcV0qx0+zSIjusEbhAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:San7Ttq1oEiIQGWqQURCRw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipChangeTextProperty_ChangeTextPropertyJS, "ChangeTextProperty", "TooltipChangeTextProperty", {
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3zc6xclNcEGTl_jJP9Tobg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:4zh0+dFnB0KQbMr9_Bui0g", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipChangeTextProperty$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipChangeTextProperty$Action = function (uniqueIdIn, propertyNameIn, propertyValueIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipChangeTextProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipChangeTextProperty.ChangeTextPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.ChangeProperty(
    $parameters.UniqueId, 
    $parameters.PropertyName, 
    $parameters.PropertyValue
);
};
});

define("OutSystemsUI.controller$TooltipClose", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipClose.HideTooltipJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipClose_HideTooltipJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipClose$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipClose$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:vJlH90wfc06HicyTCHNtzQ:/ClientActionFlows.vJlH90wfc06HicyTCHNtzQ:tpEontBwqH0VRZiry4qlWA", "OutSystemsUI", "TooltipClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cVV1eRLcFE6SSFfvEoSsDQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c4Bt3BGDQUKHNfRW5WNyUQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipClose_HideTooltipJS, "HideTooltip", "TooltipClose", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dZTE__Ut30WgjxxLXRLpmg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:vJlH90wfc06HicyTCHNtzQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipClose$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipClose$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipClose.HideTooltipJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.Close(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$TooltipCreate", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipCreate.CreateJS", "OutSystemsUI.model$Tooltip_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipCreate_CreateJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipCreate$Action = function (internal_ConfigsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipCreate$vars"))());
vars.value.internal_ConfigsInLocal = internal_ConfigsIn.clone();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Vaz8Xj6hJUiaMOfyfSQSVg:/ClientActionFlows.Vaz8Xj6hJUiaMOfyfSQSVg:u8VZa89ttJDV6csxdt0Y+g", "OutSystemsUI", "TooltipCreate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wftn_uXFG0KJ39zG1XUb+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XfCjA77iOkWwJDK_W1bE0Q", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_ConfigsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UtOwtVW4706InZitDW1+BA", callContext.id);
// Trigger the API method that will create the new pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipCreate_CreateJS, "Create", "TooltipCreate", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serialize_configsVar.value.jSONOut, OS.Types.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.internal_ConfigsInLocal.uniqueIdAttr, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0Y83DRl7nEyGx_ZuH+J4FQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Vaz8Xj6hJUiaMOfyfSQSVg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipCreate$vars", [{
name: "Internal_Configs",
attrName: "internal_ConfigsInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new OutSystemsUIModel.Tooltip_InternalConfigRec();
},
complexType: OutSystemsUIModel.Tooltip_InternalConfigRec
}]);
OutSystemsUIController.default.clientActionProxies.tooltipCreate$Action = function (internal_ConfigsIn) {
internal_ConfigsIn = (internal_ConfigsIn === undefined) ? new OutSystemsUIModel.Tooltip_InternalConfigRec() : internal_ConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipCreate$Action.bind(controller, internal_ConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipCreate.CreateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.Create($parameters.UniqueId, $parameters.Configs);
};
});

define("OutSystemsUI.controller$TooltipDestroy", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipDestroy.DestroyJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipDestroy_DestroyJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipDestroy$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipDestroy$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:APpqPdOjPkSc2mjejWu0gw:/ClientActionFlows.APpqPdOjPkSc2mjejWu0gw:_Y5WPqCAFHGXhxBFlZHI6g", "OutSystemsUI", "TooltipDestroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wzwotK_X5U+2eblMZPV7RA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qrH9kg+emki8AZQAgyyI4g", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipDestroy_DestroyJS, "Destroy", "TooltipDestroy", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4Cm3sAkzakWu8uEIUcNrLA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:APpqPdOjPkSc2mjejWu0gw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipDestroy$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipDestroy$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipDestroy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.Destroy($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$TooltipInitialize", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipInitialize.InitializeJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipInitialize_InitializeJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipInitialize$Action = function (uniqueIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipInitialize$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6R75hTWHKkSBIZXoFIQzZg:/ClientActionFlows.6R75hTWHKkSBIZXoFIQzZg:sBk_ztIwVSNcs941DmWOqw", "OutSystemsUI", "TooltipInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1aoFx+GLH0uvQlCk+jZpzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OOS63FZLPU2Dhc4c7wxcEA", callContext.id);
// Trigger the API method that will initialize the pattern instance.
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipInitialize_InitializeJS, "Initialize", "TooltipInitialize", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P_UB_gyGfESxCLkqpqJkGg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6R75hTWHKkSBIZXoFIQzZg", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipInitialize$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipInitialize$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.Initialize($parameters.UniqueId);
};
});

define("OutSystemsUI.controller$TooltipOpen", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$TooltipOpen.ShowTooltipJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_TooltipOpen_ShowTooltipJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.tooltipOpen$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.TooltipOpen$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RO9FWd0GskG0I7CzQzNzOw:/ClientActionFlows.RO9FWd0GskG0I7CzQzNzOw:hrBjinCfl5rnti0xVB3FaQ", "OutSystemsUI", "TooltipOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ID_Ef5Q94UKVg0QADtHGVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Q5LU+IsgLUOG2Nh2JtBopw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_TooltipOpen_ShowTooltipJS, "ShowTooltip", "TooltipOpen", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Cbv5hI_8V06qOvL8jHANNg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RO9FWd0GskG0I7CzQzNzOw", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.TooltipOpen$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.tooltipOpen$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.tooltipOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$TooltipOpen.ShowTooltipJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.OSUI.Patterns.TooltipAPI.Open(
    $parameters.WidgetId
);
};
});

define("OutSystemsUI.controller$VideoPause", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$VideoPause.PauseVideoJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_VideoPause_PauseVideoJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.videoPause$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.VideoPause$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:XZhXecZh6EaW7R2FSGgeWQ:/ClientActionFlows.XZhXecZh6EaW7R2FSGgeWQ:r6avvjsRES7CnZm0JOwyjw", "OutSystemsUI", "VideoPause", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:60SFJR8Xgkq5rnzg0D37Ww", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hRGnfc_5jkadLvrVm24NQQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_VideoPause_PauseVideoJS, "PauseVideo", "VideoPause", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:67D1E4xrs0mRjYUAnWo08A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:XZhXecZh6EaW7R2FSGgeWQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.VideoPause$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.videoPause$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.videoPause$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$VideoPause.PauseVideoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var videoWidget = document.getElementById($parameters.WidgetId);
var videoTag = videoWidget.querySelector('video');
videoTag.pause();
};
});

define("OutSystemsUI.controller$VideoPlay", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$VideoPlay.PlayVideoJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_VideoPlay_PlayVideoJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.videoPlay$Action = function (widgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.VideoPlay$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9RaZU8285Uq8mBSLGd60mQ:/ClientActionFlows.9RaZU8285Uq8mBSLGd60mQ:I_f0FgC0cHzQxV_qWIYCqQ", "OutSystemsUI", "VideoPlay", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:R_v+DsUpIEWquaClGVVciw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Sw71dFhVZU+bIcw4SpveXA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_VideoPlay_PlayVideoJS, "PlayVideo", "VideoPlay", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1eMKnrmGL0K5+GjQaYVz5w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9RaZU8285Uq8mBSLGd60mQ", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.constructor.registerVariableGroupType("OutSystemsUI.VideoPlay$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsUIController.default.clientActionProxies.videoPlay$Action = function (widgetIdIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsUIController.default.videoPlay$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$VideoPlay.PlayVideoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var videoWidget = document.getElementById($parameters.WidgetId);
var videoTag = videoWidget.querySelector('video');
videoTag.play();
};
});

define("OutSystemsUI.controller$WCAGMetaTag", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$WCAGMetaTag.ViewportJS"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_controller_WCAGMetaTag_ViewportJS) {
var OS = OutSystems.Internal;
OutSystemsUIController.default.wCAGMetaTag$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:P1CTemhq5kGBBVkXbTT5aA:/ClientActionFlows.P1CTemhq5kGBBVkXbTT5aA:H15U4_KzRiNAxU1b+8v_zA", "OutSystemsUI", "WCAGMetaTag", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:p408KBPGHE+DuMm7SgHBdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8qRXUiX9DEuIdCtr_cT_BA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_controller_WCAGMetaTag_ViewportJS, "Viewport", "WCAGMetaTag", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jAdlKKQ8GU60bOjK9y+izQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P1CTemhq5kGBBVkXbTT5aA", callContext.id);
}

};
var controller = OutSystemsUIController.default;
OutSystemsUIController.default.clientActionProxies.wCAGMetaTag$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsUIController.default.wCAGMetaTag$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("OutSystemsUI.controller$WCAGMetaTag.ViewportJS", [], function () {
return function ($actions, $roles, $public) {
document.head.querySelector('[name="viewport"]').setAttribute('content', "viewport-fit=cover, width=device-width, initial-scale=1");
};
});

define("OutSystemsUI.controller", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller$debugger", "OutSystemsUI.controller$translationsResources"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUI_Controller_debugger, OutSystemsUI_Controller_translationsResources) {
var OS = OutSystems.Internal;
var OutSystemsUIController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
OutSystemsUIController.default = new Controller(OutSystemsUI_Controller_translationsResources);
});
define("OutSystemsUI.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O+82ungSr0ytgoFiM_1Ikw": {
getter: function (varBag, idService) {
return varBag.vars.value.current_Unique_IDInLocal;
},
dataType: OS.Types.Text
},
"QORShg4dgUyprlkQCHVCiw": {
getter: function (varBag, idService) {
return varBag.outVars.value.unique_IDOut;
},
dataType: OS.Types.Text
},
"bEKN+jVz40mJbzOqjUIV4g": {
getter: function (varBag, idService) {
return varBag.randomStringJSResult.value;
}
},
"RZtH1Tqd10adHu9I1PRtxw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"4TYUH4bS9keNOkoYe34E4A": {
getter: function (varBag, idService) {
return varBag.openJSResult.value;
}
},
"FUeBhPad7U+_s1GGetaPLg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"QGkwtpwU4UWD5YSdN+LfOQ": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"79BWKRBX4Ueur3wHOIiXDg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"R3IEvhbKQk2ZA5z72YVrkA": {
getter: function (varBag, idService) {
return varBag.initializeCarouselJSResult.value;
}
},
"Iv4qqL2CAUyTooBa4SSJpg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIDInLocal;
},
dataType: OS.Types.Object
},
"Tn+H6xGcAUWzRA9GgwDPeA": {
getter: function (varBag, idService) {
return varBag.vars.value.targetInLocal;
},
dataType: OS.Types.Object
},
"ys785lY_qE6ziCYEBGOpgw": {
getter: function (varBag, idService) {
return varBag.moveElementJSResult.value;
}
},
"SWFRKJIIqkGpJU2vq9tUtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"kZoEtEj1Z0uYsc8OrNd_ZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"Ubmrmh2R10K636Y69JcR0A": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"iR_mzVvx4EWGZU1VRw3FkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncOnOnlineInLocal;
},
dataType: OS.Types.Boolean
},
"7JGqGYj7tE+x8vgdNQiHAA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncOnResumeInLocal;
},
dataType: OS.Types.Boolean
},
"3veDb5FLK0GnedPWNQeZTw": {
getter: function (varBag, idService) {
return varBag.vars.value.retryOnErrorInLocal;
},
dataType: OS.Types.Boolean
},
"aWKSMdKBYUipICKoqyHvUA": {
getter: function (varBag, idService) {
return varBag.vars.value.retryIntervalInSecondsInLocal;
},
dataType: OS.Types.Integer
},
"Q3ziLgpmwEiLfbtrD1nU_A": {
getter: function (varBag, idService) {
return varBag.configureOfflineDataSyncJSResult.value;
}
},
"OhGG8NSth0C6p0mwD+ZBhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"G7hay46cH0y9zTZwu64kDA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"bLIevX8x_EW73Ts20lTmVA": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"Q4_6qs75x0+yTwgcB30WKw": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"f3wgICMYSkGH1_To9ANWkw": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"bjySSodtmUmSoES7KUjPcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.langInLocal;
},
dataType: OS.Types.Text
},
"yIPv6fhPdU6R+151g6zGBw": {
getter: function (varBag, idService) {
return varBag.setLangJSResult.value;
}
},
"nquViCwYO0O1G+h5jsG5SA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isWebAppOut;
},
dataType: OS.Types.Boolean
},
"A8C7OkSCkkqYxzxiYRUweA": {
getter: function (varBag, idService) {
return varBag.checkIsWebAppJSResult.value;
}
},
"i+7a8WhXc0ibOM_sownrVQ": {
getter: function (varBag, idService) {
return varBag.textSpacingStylesJSResult.value;
}
},
"jqfCvbuO8US9OtaDP7vDew": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"lrcuVxZdB0uoHOJLHpAkjg": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"nBS9w_PQZE22OrnbvuMxFA": {
getter: function (varBag, idService) {
return varBag.createSidebarJSResult.value;
}
},
"pBZiM86fBU+4NIKb53DiBg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Ggqp_4GWsEuu9j4bIKesDA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"6q24V6aCHkermJ5ttI9kYA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"lA6JJZ3zg0uv4i28owURBw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"AtcRkAZymEaW9QQL+WRiPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
}
},
"nrlLS92KfEeOtV+wwRaeOQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"XupgQde8cUCtwwpmCmWNew": {
getter: function (varBag, idService) {
return varBag.validationDropdownJSResult.value;
}
},
"tZjZovcHS0yJd7OvtytkJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"yFRpWSObyUqhUpN24G94fA": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.Types.Boolean
},
"0Tc16cg8iEuflVtN94J9Dg": {
getter: function (varBag, idService) {
return varBag.callBlockHandlerJSResult.value;
}
},
"dsUlges1bEaJZgxAH5ixpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"VGBdXlToIUWYcJSWS4uVRg": {
getter: function (varBag, idService) {
return varBag.swipeTopJSResult.value;
}
},
"m96Z17igL0mM+dUEdQ9H8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"nYztwvO3QUe2tAuuwzjr4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"A6vAAUZzLUS58DaJXEklmg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"zPtQJi4EtE6gHnKJ41s5EQ": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"lox_6jGjDkaqtFjZZDxrRA": {
getter: function (varBag, idService) {
return varBag.vars.value.menuActionInLocal;
},
dataType: OS.Types.Text
},
"u1xwWmjOrUmCUq_MktIlVg": {
getter: function (varBag, idService) {
return varBag.findMenuLinksJSResult.value;
}
},
"En7VaCO7dESP123B9w35kQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"u3+2jsIAR0SkMyjTjEQc0A": {
getter: function (varBag, idService) {
return varBag.onSwipeTopJSResult.value;
}
},
"Lp3AWm4m10yiCrHm101n9A": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"RVrJ0OMHHUuMcUwu9e1xhg": {
getter: function (varBag, idService) {
return varBag.vars.value.itemIndexInLocal;
},
dataType: OS.Types.Integer
},
"l1_C+Z5SgUG7XI5QX194Rw": {
getter: function (varBag, idService) {
return varBag.carouselGoToJSResult.value;
}
},
"5m9pbNq+DkO_WO4l3JyPUw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"SwAvRuileUiBYGYeXYEGCQ": {
getter: function (varBag, idService) {
return varBag.showNotificationJSResult.value;
}
},
"J651uRpUmE+oEj3jkPA07A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"3Av23XtA_0aktWSUvDSl+g": {
getter: function (varBag, idService) {
return varBag.onSwipeLeftJSResult.value;
}
},
"ObH9X2EVfE2QMmbmUEtQ2g": {
getter: function (varBag, idService) {
return varBag.vars.value.hideHeaderInLocal;
},
dataType: OS.Types.Boolean
},
"YIoLAMN9y0C6r84F2nZDLg": {
getter: function (varBag, idService) {
return varBag.hideOnScrollJSResult.value;
}
},
"oI4hDxsm00SF_jbqJzniDA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"0SeG7lzDHkazDCwky_ElCg": {
getter: function (varBag, idService) {
return varBag.vars.value.hasDragInLocal;
},
dataType: OS.Types.Boolean
},
"hc6M7O1DhUadffjARhYIxw": {
getter: function (varBag, idService) {
return varBag.carouselToggleDragJSResult.value;
}
},
"s22hFjR4S02CkAjxciHpGw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"VIRhi4TR5UmzMJODSkUvdw": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"Hhpil02Qw0OYi4rqAJCqXA": {
getter: function (varBag, idService) {
return varBag.vars.value.modeInLocal;
},
dataType: OS.Types.Text
},
"Xxf3q3hrX0uT+HbLOFjFQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.providerInLocal;
},
dataType: OS.Types.Text
},
"wg1u6Qb2skaThTAddAdMww": {
getter: function (varBag, idService) {
return varBag.createRangeSliderJSResult.value;
}
},
"B8mgorzlN0CPsbiZ2aBipw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"c_6FmGsqGE2K4mszJCrDsw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"HMjddLhOFU24Koeirm9Zwg": {
getter: function (varBag, idService) {
return varBag.changeIsEditJSResult.value;
}
},
"bQKATDoEQ0W7bsABQuI4fA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"jaHB+obidUu+wcGD9DdGOw": {
getter: function (varBag, idService) {
return varBag.toggleSidebarJSResult.value;
}
},
"i0mU9d_EqEuggYXJad0aMw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"ITVYGubcb0inkMqGCfJCuw": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"x3FziJbdeEmY9OiShXWvWw": {
getter: function (varBag, idService) {
return varBag.createRatingJSResult.value;
}
},
"Ie6Ga7x5_EC20gj8nRfvfw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"xHm9+kLqdUWRzZ8xWWollw": {
getter: function (varBag, idService) {
return varBag.closeSubmenuJSResult.value;
}
},
"DQfQnUbxxUqjf787Hk7CTA": {
getter: function (varBag, idService) {
return varBag.setEventListenerJSResult.value;
}
},
"U33wrhhZ7keM6buRDNF69g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"KkYj7eX73kWRv92uifgrWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"g72vixlADUKdotgTOZiWPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Decimal
},
"tS9XZK3IwkCgsmBHdp9sLQ": {
getter: function (varBag, idService) {
return varBag.changeDecimalPropertyJSResult.value;
}
},
"4tPDI+5d60iT0y9hC+_RjA": {
getter: function (varBag, idService) {
return varBag.hasMasterDetailJSResult.value;
}
},
"I5Uq+p2atUuWgeFSO8uGEg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"kbnaASTX4k+6mBe5ye8eoA": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"foN3EBr7W0+CKgVFs0jWYg": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"ReY8li7Au0aOnvDANbfgpw": {
getter: function (varBag, idService) {
return varBag.vars.value.imageInLocal;
},
dataType: OS.Types.BinaryData
},
"kX34EMu0a0eN8EHhusEQ0A": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.Types.Text
},
"HoTpRIE1m0e2MkudNr4zSg": {
getter: function (varBag, idService) {
return varBag.jsBinaryToBase64JSResult.value;
}
},
"1MNAe+J_ZUObGzwngACR8g": {
getter: function (varBag, idService) {
return varBag.stickyObserverJSResult.value;
}
},
"NcXtpwiQfUSGwTXBz8ConA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"_VbbODfrwU6uy_GcD5Rw8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"dFvKyh750k2Xrf4eY3CHpw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"eS8ExKvWgESXAszsmeiH6w": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"Mm9CC3GIOUeC0yIFC6yUNA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"ct2VLzJyNEqMqflU8Pp70g": {
getter: function (varBag, idService) {
return varBag.expandAllJSResult.value;
}
},
"ThYUY3vEoUKiNtoB7X8_iQ": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"zjy5Rgnx10aTD30HZqe_4w": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"vyM_7_fKUUme4ROZMJHNsw": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"gtFbBaaKbkaEBfMiOGEr4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"4EGa1ZA6I02buZ7eIsQeTg": {
getter: function (varBag, idService) {
return varBag.updateOnRenderJSResult.value;
}
},
"sIHiSdj210KF+db9x5sfgg": {
getter: function (varBag, idService) {
return varBag.setAttributesJSResult.value;
}
},
"MfQf+UXzbkCUTjbWz2E37A": {
getter: function (varBag, idService) {
return varBag.setServerDateFormatJSResult.value;
}
},
"awdjthg31kCslQX0phhU5w": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"cI4bho2NsE6gvRvkTGvipQ": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
},
dataType: OS.Types.Integer
},
"79wf0dJa1UW5K7wvkMBZGw": {
getter: function (varBag, idService) {
return varBag.setProgressValueJSResult.value;
}
},
"5Xc9s8o640OnMfDi59LYUg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"Q46YfT8QYEW25B5LNZozRg": {
getter: function (varBag, idService) {
return varBag.vars.value.targetInLocal;
},
dataType: OS.Types.Integer
},
"dBRtEJ1oXUeFmuSC_CWu9Q": {
getter: function (varBag, idService) {
return varBag.callGoToActionJSResult.value;
}
},
"lF3B1wIlXUuuBvwporNE8g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"yWhMYPKKkEWtrJNbsGxAKA": {
getter: function (varBag, idService) {
return varBag.setRangeSliderChangeOnDragEndJSResult.value;
}
},
"IWQZY_PFkEKctuPDGu1YCg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"qrH9kg+emki8AZQAgyyI4g": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"Wbo+S7HMhUadZf94GvsqTg": {
getter: function (varBag, idService) {
return varBag.setEventListenerJSResult.value;
}
},
"PQa9fzVt50+PvtBRPKnhgQ": {
getter: function (varBag, idService) {
return varBag.fixInputsJSResult.value;
}
},
"aP3W63E880Oz+FpnEt9gtw": {
getter: function (varBag, idService) {
return varBag.closeFeedbackMessageJSResult.value;
}
},
"CM19sag3BUKvufYu8b7Dgw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"ZeATaWNcTkeTDOl1XJYRQg": {
getter: function (varBag, idService) {
return varBag.collapseAllJSResult.value;
}
},
"o+AXgNzmAUGszXgKDmbyMw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"zRuwcv34O0CYDUk4Wxu2ow": {
getter: function (varBag, idService) {
return varBag.updateOnRenderJSResult.value;
}
},
"IsUKcrDfEkqsioywgAkC6A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"dt3Wpk9vjEGEnBj3NQ6dpw": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"Bg0Otk_UtUmZHhR3J2_ukQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"+t6c8mOgd0yNu31wCEtuHw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"P49CEKpIs0ObJLrajfWARg": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"Zh07CZg1OECe6ffcHXUZ2g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"CNCVDYiysEi7R3PEDnoDyA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"mINadEczU0SrTKykppVZbA": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"uZIzUDZnhkidvR_hwGn9cQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.i18nDefaultsOut;
}
},
"s84zwxK1AUC5aIwYweIxUg": {
getter: function (varBag, idService) {
return varBag.outVars.value.i18nAccessibilityOut;
}
},
"8FvT6t4l0UOZHBxoAUFlhg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"g5unHbCkHU2R+uDi79yArg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"_NmLW1O6hEKvLJWbtyx4Ag": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Integer
},
"3Z6RhnKeOUegiSGgD9xHfQ": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"bwZ57MKJ6EODXFMxOne26A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"sXvWFNF6gU6sNLyg28d7FA": {
getter: function (varBag, idService) {
return varBag.destroyDropdownJSResult.value;
}
},
"2PiKkrY6bEWLszyZiQGvJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"SkGL_4SFaEC6UPAE7apWJQ": {
getter: function (varBag, idService) {
return varBag.carouselNextJSResult.value;
}
},
"sLGvY64qIUeWoKP2vof5YQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"7S05JBD3Fk+QUafzdEXpFA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"2osoMob0iUe2jvoKf0ixdg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"bL941NDutUa59SdGOMGaAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"2JB7+F5UF0GvWxvCt5WW0A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"jbVxCQBHCkaP1d4H9YiPBw": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"WFc9CKIwJUqvFdBOcgxchw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"+i9_r0lIckiPkmkT4Q2p3g": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"EJHXPVJmREyYJ137f36Ubw": {
getter: function (varBag, idService) {
return varBag.vars.value.providerInLocal;
},
dataType: OS.Types.Text
},
"lTXnKx0a2U6G_m26f6hTmw": {
getter: function (varBag, idService) {
return varBag.createCarouselJSResult.value;
}
},
"glkZw6UmDEihhvAWz+a6Ww": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"mHpeoWsqd0OJ_OfcsmIvUw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"ONoAX5epF0Gg8ndhIrw5TQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"gpUxD+3NR0+PqevzfM8fcQ": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"z32luTT91k2eezvxpdHNtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"YOxdPcUlOEOBpFhifhi01Q": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"HTgn138bT0q21Gb2a2sDgA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"TFkSpkeBUkyRp+GGJ9h_Sw": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"N7UpWG6xpkmSVFWk5O6iLQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"Sw71dFhVZU+bIcw4SpveXA": {
getter: function (varBag, idService) {
return varBag.playVideoJSResult.value;
}
},
"IOS9d76CsU+_B3LDu9I5Tw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"HAPW0MmcEEi72qGOgBpV0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Decimal
},
"3JYRWNBuKk2LVsjJsNZ46g": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Decimal
},
"Nl4IQlqm2EqIhmGqIn6ykQ": {
getter: function (varBag, idService) {
return varBag.onGestureStartJSResult.value;
}
},
"e_mF4MqD3kavK37a4fp_WA": {
getter: function (varBag, idService) {
return varBag.toggleSideMenuJSResult.value;
}
},
"IgIJFMykFkGjE2IWlH7pYA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"4uX9RNr4ZkqJpO+vIT2kow": {
getter: function (varBag, idService) {
return varBag.closeJSResult.value;
}
},
"T6kYkrDAE0aJCsbcaJ2QyA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"_+Cay__KI0+4ET3zr6l6nA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"38U7ThNlwkazS1gsxAXowg": {
getter: function (varBag, idService) {
return varBag.changeIsExpandedJSResult.value;
}
},
"2T8OZEsJu0ySMPfim+kqxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.tabIDInLocal;
},
dataType: OS.Types.Text
},
"B3wXWZq7aUWYEIVdFUX_KA": {
getter: function (varBag, idService) {
return varBag.addClassNoSwipeJSResult.value;
}
},
"MzrlY+grJEODsLnMYvLufw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"Q5LU+IsgLUOG2Nh2JtBopw": {
getter: function (varBag, idService) {
return varBag.showTooltipJSResult.value;
}
},
"e+h9u3XlcU22Ur1L_whNeA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.Types.Text
},
"ZB3jt8cO6UyAPUoqxcSYmA": {
getter: function (varBag, idService) {
return varBag.addFaviconJSResult.value;
}
},
"nSbLKSjJS0Gx5Iy6M5p21w": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"xnIQve_4jkmQx9zizDnSPA": {
getter: function (varBag, idService) {
return varBag.showFrontJSResult.value;
}
},
"AZ_lAiT4PkqroKU27DpP1Q": {
getter: function (varBag, idService) {
return varBag.initECTJSResult.value;
}
},
"vYgloYauJEiwgXDqhXM37A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"BLpl6_p5HkKg8PQe9TWAuw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"kInbJ+xfTES8xCOiP1XtxQ": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"pIlgBdDMGE213FdGTMmuvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"XfCjA77iOkWwJDK_W1bE0Q": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"UtOwtVW4706InZitDW1+BA": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"k6fy2n_izkGAZVZHeyB_EQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"xZ_AlRZXOUOe23IcmsMLxw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"nniz7K9RGk2lC28Y5C1IJA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"znBsNJhgUUOJVwBSQ39aUQ": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"REtAs+9qmk+ju2mkGTKDZg": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"Ya66phMKeEaPyap4HBR0DA": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"gJ3TSFlchUK_8p2hL4S4JA": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"umH3O5XZ906q3gkjTHHoNA": {
getter: function (varBag, idService) {
return varBag.vars.value.userAgentInLocal;
},
dataType: OS.Types.Text
},
"1B54odsIhUeCcVl+yrlE1A": {
getter: function (varBag, idService) {
return varBag.outVars.value.browserOut;
},
dataType: OS.Types.Text
},
"446Tw4Q2U0aBWMWFIYjoYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"TbqOX16TZUGDRk7n+B6nmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"XCTTNWd9JE+eggpJcri1Kw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"gneVsr_LkkqFxNGVOp0iGg": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"HLC9vijBMk6DvF4aXk7a4w": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"bMYlNGwj10ScNyPxyydUBQ": {
getter: function (varBag, idService) {
return varBag.openSidebarJSResult.value;
}
},
"9H9CL8sYu0CTiF0PLH1DSg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"diABuhyGyEupwsCkq_4pfQ": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"0GqWrWpd5EGRItllOQ1Egg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"foRhRQ6CrUG5n2NuUeIhpA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"JEN4AwdmHEeVpEijZMjZag": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
}
},
"Eo3xYmeclEOcHbSC_ieoJw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"hho8jTyTXkGID0kzfTmAXQ": {
getter: function (varBag, idService) {
return varBag.enableDropdownJSResult.value;
}
},
"LFGiQlQsl0S6Vbs+hRPR+w": {
getter: function (varBag, idService) {
return varBag.vars.value.hideHeaderOnScrollInLocal;
},
dataType: OS.Types.Boolean
},
"Wqaxf0iY9Ua1OCgsME8ftw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"NYNXOQAbMkaj16bfzUI1sw": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"6lLiqGvmeEGw395hqCb0Cw": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"o+uIbyR_ykGM5dxs93QGNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"b18tsDWAUUSZWVupalPplA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"sLbyV5S8UUiYjL7PQKZhKw": {
getter: function (varBag, idService) {
return varBag.vars.value.targetIdInLocal;
},
dataType: OS.Types.Text
},
"9yYTvLbuNE2F6DOfAk65eg": {
getter: function (varBag, idService) {
return varBag.skipToContentJSResult.value;
}
},
"b6SgNmh0i06BUImft9VQWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"APEYpnFeKUSPEI5m1fvidw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"bfGKJ1B_sk65pnXBgj4EhA": {
getter: function (varBag, idService) {
return varBag.vars.value.listIdInLocal;
},
dataType: OS.Types.Text
},
"xb07J7dEDEm05wY1sZpuZg": {
getter: function (varBag, idService) {
return varBag.vars.value.hasLeftActionInLocal;
},
dataType: OS.Types.Boolean
},
"lhbvA9M+YUGFlaR8fZIBVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasRightActionInLocal;
},
dataType: OS.Types.Boolean
},
"SG5ALp9a6UqadpEzOTCXsw": {
getter: function (varBag, idService) {
return varBag.vars.value.animationTimeInLocal;
},
dataType: OS.Types.Decimal
},
"HI7FczBGrEKwVfINKPZ6vA": {
getter: function (varBag, idService) {
return varBag.listItemAnimateJSResult.value;
}
},
"mTjZ8x0qeUGAf+HSNj47MQ": {
getter: function (varBag, idService) {
return varBag.vars.value.userAgentVar;
},
dataType: OS.Types.Text
},
"CIp0JbnEX0qaG5zhUfsPAQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.browserOut;
},
dataType: OS.Types.Text
},
"+mIZIR6g4EevIAtvr6mUvw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"Wx9W9EoAZkSWXpQJFznJ7A": {
getter: function (varBag, idService) {
return varBag.vars.value.isSmoothInLocal;
},
dataType: OS.Types.Boolean
},
"aYVdQMoTE02HjwAVGptmgg": {
getter: function (varBag, idService) {
return varBag.vars.value.offSetInLocal;
},
dataType: OS.Types.Integer
},
"mE133IzgnEmi05Gp0HG3Nw": {
getter: function (varBag, idService) {
return varBag.scrollToElementJSResult.value;
}
},
"SraTW2qP+Uecqq4koL9WCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"OI7sQ0dPqEezNQM9VOjN8w": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"Zgm65KwMwEuSf3oH6Me+Wg": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"gL5xs2Oep0G8niHgQeSfHg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"7PE4rN1Fwku2rNtpRJtx2A": {
getter: function (varBag, idService) {
return varBag.destroyDatePickerJSResult.value;
}
},
"P9DByrkeYEWaLabmT75fAw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPhoneOut;
},
dataType: OS.Types.Boolean
},
"BX3uLVf1k0Wr5zgao8m4ow": {
getter: function (varBag, idService) {
return varBag.getDeviceTypeVar.value;
}
},
"vy3Gn11jQU669hZMoQ11rw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"hRGnfc_5jkadLvrVm24NQQ": {
getter: function (varBag, idService) {
return varBag.pauseVideoJSResult.value;
}
},
"f2qVJKvhtEezWeCb1EciOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"x2q0ACymqU2pCm0Is9d+wA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Integer
},
"stZ1v7AFuka14N55HyT0UQ": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"eQIK52+SRk69lM2byAs0pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"ylzVSx+QiEqOj2BltIUGhg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.Types.Text
},
"ZxZx3_h9O0Glc_RaBdcbUA": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"WO5bXIteTEKV3bdoEtdTPA": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"Ondm8ynmPk2yNGzkaKylxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"sOyl60XDkUqofP+tM16DyA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"+odFljIlmEu9MDrNwwwXhA": {
getter: function (varBag, idService) {
return varBag.changeIconPositionJSResult.value;
}
},
"8qRXUiX9DEuIdCtr_cT_BA": {
getter: function (varBag, idService) {
return varBag.viewportJSResult.value;
}
},
"fXc8VzCeiEm1jgF7PA8niQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"C1xg6nYQp0ybHV6wVcJWAw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"ItfV8gXRx0ihT6BbYk+NBw": {
getter: function (varBag, idService) {
return varBag.vars.value.carouselIDInLocal;
},
dataType: OS.Types.Text
},
"EA76gLu_y0WEapiQoFodxg": {
getter: function (varBag, idService) {
return varBag.addClassNoSwipeJSResult.value;
}
},
"WC4ezbowQ0+u95o0f9VASA": {
getter: function (varBag, idService) {
return varBag.setAppLanguageJSResult.value;
}
},
"kOdA3tBxqEy3CuT_pMnq1A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"0VWtf1UP1kuajLxqYNCBfg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"e54UxSe9jkyXluvGYG+Aag": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"H9HZyXh6AkSbMtf_L7DWvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"juIN8RdkqkG7p4GtAYxA9A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"+boPpVEvaUW3yOzdXSm0KQ": {
getter: function (varBag, idService) {
return varBag.changeIsExpandedJSResult.value;
}
},
"rJAP+WDU+E+f5mMmqdg7OA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"436LOS6nhUi1gDzy8utG6A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"cifZj8Mne0y1u1DBKBdMcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"5eosNb33dkOedsiSJzCaWg": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"wZ+Ats11_0O0f7qIwJ4REw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isNativeOut;
},
dataType: OS.Types.Boolean
},
"BjdfYuAz7k2Qa63M89MgIQ": {
getter: function (varBag, idService) {
return varBag.checkIsWebAppJSResult.value;
}
},
"8CzTk9WVw0C2xf1SdO8mPw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"wEwcXvm0jUKJwZd5VMepaQ": {
getter: function (varBag, idService) {
return varBag.setFocusJSResult.value;
}
},
"RdqlYWlCYEeJpX5RZ0u2bA": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.Types.Text
},
"6mFkQXPW5UaPu+V0jWwoKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageTypeInLocal;
},
dataType: OS.Types.Integer
},
"l7wXGteR+0K7j67AdCMTPA": {
getter: function (varBag, idService) {
return varBag.vars.value.encodedHTMLInLocal;
},
dataType: OS.Types.Boolean
},
"++vlGAlP2kWWeNuQT_bGJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.extendedClassInLocal;
},
dataType: OS.Types.Text
},
"pzBv2zFYdk+rl+Jw8uvqhg": {
getter: function (varBag, idService) {
return varBag.vars.value.closeOnClickInLocal;
},
dataType: OS.Types.Boolean
},
"tVD78iKKA0mkOwErjC3kog": {
getter: function (varBag, idService) {
return varBag.showFeedbackMessageJSResult.value;
}
},
"58GmiGdjO06qlP+5vRRXgw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"OFuyspOyN0W+8nnvv1PJOw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"FKrC76fyTUmmIz7F49L5BQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"rSjLlycM0k6Y0xrO6ckxjw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"05YdMtUkkkqT4qp93h5wOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"olfzfLoxd0WnOFttHrHMMw": {
getter: function (varBag, idService) {
return varBag.openSubmenuJSResult.value;
}
},
"552dkyDrvEqubIYlI2ky2g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"46YnzcXd6UmkwH+nqi2Q0A": {
getter: function (varBag, idService) {
return varBag.setEventListenerJSResult.value;
}
},
"AqPQ0tLemkGBpSMzKutDSA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"OOS63FZLPU2Dhc4c7wxcEA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"oql0fj81MkKIBFWhByF83Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.isRTLOut;
},
dataType: OS.Types.Boolean
},
"AvkLh6PCIkWXMP_fWWgdKA": {
getter: function (varBag, idService) {
return varBag.checkRTLJSResult.value;
}
},
"PQ6V0LsLu02x1nQesHNo+A": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"D8TRNSYtNUePifgwJPR24g": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"PQunawaHoU6gJzeH82FOPw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
}
},
"NjJ2pShHg0KGusxavLmfxw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"WFhzUYgav06WlTXA7Kx1IA": {
getter: function (varBag, idService) {
return varBag.clearDropdownJSResult.value;
}
},
"2v19Xbd0EEeAUeDvE9Jb9g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"xMKXLKzze0S3+ZodJF1oqw": {
getter: function (varBag, idService) {
return varBag.updateUiJSResult.value;
}
},
"O_wTWPXP6keoa_U4Ph+aUA": {
getter: function (varBag, idService) {
return varBag.vars.value.logTypeIdInLocal;
},
dataType: OS.Types.Text
},
"MN_Y_J7yrEaV8DXC8hmJfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.Types.Text
},
"8rwDnoRDaEmrQkqQ_JU2wA": {
getter: function (varBag, idService) {
return varBag.logMessageJSResult.value;
}
},
"V21U4JHuAUGpJov9codDiA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"QAnZUcm0EUGKIQgAbtyJWw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"tPNJd57JrUi1Y0+LesesyA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"EopePsEOh0eNCKmQuOrsqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Integer
},
"3qGFLwJEZUm5vrEChApSTA": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"odudn8epsEOTFn+_2qQH1w": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.Types.Text
},
"mxxRiYR+zEaWQ2SeYGzMvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.numberOfCharsInLocal;
},
dataType: OS.Types.Integer
},
"dtolCG+1Gkqewx1BgEUySg": {
getter: function (varBag, idService) {
return varBag.outVars.value.outOut;
},
dataType: OS.Types.Text
},
"ap0P5fNYjEu4xBC33LaJJg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"8BmY0jDkvESrr7vNRZ+LUA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"clpN2WN2eUKC56QkPf35dg": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"E7XleKb+UkCOQdHGwDB4ZA": {
getter: function (varBag, idService) {
return varBag.vars.value.previewCSSVar;
},
dataType: OS.Types.Text
},
"Zti0Ncev_UyJyMoKDV009w": {
getter: function (varBag, idService) {
return varBag.vars.value.generalCssVar;
},
dataType: OS.Types.Text
},
"NuLUeUgpEUCTkx4KpN0klA": {
getter: function (varBag, idService) {
return varBag.detectPreviewInDevicesJSResult.value;
}
},
"v3AkUN5_y0GdM12HkGJrfg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"aUK7xALNA0WoM3OE6OtJ5g": {
getter: function (varBag, idService) {
return varBag.vars.value.activeItemInLocal;
},
dataType: OS.Types.Integer
},
"xKvTcM8hRUWIkW6_mFYRZg": {
getter: function (varBag, idService) {
return varBag.vars.value.activeSubItemInLocal;
},
dataType: OS.Types.Integer
},
"eMpAyzImzUKwL_ip4d08TA": {
getter: function (varBag, idService) {
return varBag.setActiveJSResult.value;
}
},
"ZbJB_cs_Mkqn+ANCAE8lPA": {
getter: function (varBag, idService) {
return varBag.vars.value.isWebAppInLocal;
},
dataType: OS.Types.Boolean
},
"802dRsv2ZkmMTp_gvSZjQg": {
getter: function (varBag, idService) {
return varBag.getBrowserVar.value;
}
},
"SO6yYH8njUOWeZhQo6DNmQ": {
getter: function (varBag, idService) {
return varBag.getOSVar.value;
}
},
"5WQ6+EOI20qlKf+sVTvE1A": {
getter: function (varBag, idService) {
return varBag.getIsTouchVar.value;
}
},
"RWt+kXHuzUSxVy0cZJHDGw": {
getter: function (varBag, idService) {
return varBag.addNativeClassesJSResult.value;
}
},
"FDjUnNglU0GGZuMXhNjSKQ": {
getter: function (varBag, idService) {
return varBag.addWebClassesJSResult.value;
}
},
"p9PdABITMkSS6FBLAJLVZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"uahTP0TFEEC2dA7m9GRqRA": {
getter: function (varBag, idService) {
return varBag.hideNotificationJSResult.value;
}
},
"0GPBjKGrokmTG+9rDknt+g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"CIZ3QMWYQ0auE6GbRz5zgw": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"M_sehlqNN0ynsMwdiIWcgA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"ZN+4l6p6_UmIsgxiz+i16w": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.Types.Decimal
},
"fnelDsVIekGYnPWXlMju5A": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.Types.Decimal
},
"kaEPmSSb6kOLZQZHJOQLwg": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"Gu_wKfEve06+vUs0tNifVw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Decimal
},
"LqaDZDIUYEiwr0bBBistBA": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.Types.Object
},
"aSHUl2uswU2bVdB5bvUqVQ": {
getter: function (varBag, idService) {
return varBag.onGestureMoveJSResult.value;
}
},
"L_Qbz7ykaEWPvOlOy2kAuw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"L0duiZHKHE6hZr0sYKPKUw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"6VDZV6ZGT0yaUsOmXzIUWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"_VPOc5y8wk69j5Ne8Pjq2w": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.Types.Text
},
"EHVYP2GsJEiPvH3iBnfbkg": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"56QLeub6j0G4ewprErYrQw": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"+1T06ilD70a9W01Npn7Mdw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"alV4QJyvmkGxcbYJPZpJTQ": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"LTV8jzKCRUOln6ZWcu7w5g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"CcvRfJhZa0SGQKLiBZfGuA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"BwHIyyhyA0iFNGSTGYfTcA": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"yCmv9lJVkUycbIKAWefF5A": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"d9ozr8UP6kqQ25NgNooICQ": {
getter: function (varBag, idService) {
return varBag.showBackJSResult.value;
}
},
"lWGbBI8WcUue46Yq6gRymA": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"4dPMNlJpaU6o1ehYdZSGxg": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"CRYuV54uk0uB5+MohLa1iA": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"LX6QtvQWHkK2nfWBI8FoFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"EzeYQeBHK0eK9OT2gbgz3w": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"dp8ZFoqTo0aoDJb3ihBJ1A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"JCmTAIpRWkepl5gsrrmEyw": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"RcUKCznBskGsiPDjBehj5g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"RAfjTcfSlU6imxmQMnCpsw": {
getter: function (varBag, idService) {
return varBag.vars.value.tabNumberInLocal;
},
dataType: OS.Types.Integer
},
"DkGb6z63NUeOAN_exev1sA": {
getter: function (varBag, idService) {
return varBag.jsChangeTabJSResult.value;
}
},
"ZdM+iKtjH0murBEmRslD3w": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"FAoRcmRPrk6xw52IIHGrtg": {
getter: function (varBag, idService) {
return varBag.initializeNotificationJSResult.value;
}
},
"z3SR6adZJUWjR4CsYqcFRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"bYAjhTuI_UCBz++CrCJsBg": {
getter: function (varBag, idService) {
return varBag.swipeLeftJSResult.value;
}
},
"zeahAjA6K0KSRB2DnpqNDg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"etMC1ZB6VE+x7e5bBCRbEw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"7jhXqU2MJ0SDrZUnGlvVvw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"Tkxy80hjVUWLLZ49o+vSRw": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"eqZpQ1JpLEuVNmHXnmyQGA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"_yFY8VIR30+BBrJkE40zvg": {
getter: function (varBag, idService) {
return varBag.carouselPreviousJSResult.value;
}
},
"tNEuRxpSL0u1QAy4hXAj4w": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"5bWXoMt0K02FNMWSzJPWPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"rkSZOJryqkKXOQIR1OGJ8g": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"nIIEGs19E0K5jOLLM46mdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"HYYdi0dvpUSxnzDlEEVTHA": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"MltHO4gO+kSHmQTn_5lCCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"le_DRalfk060s3oihGyHDA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.Types.Text
},
"vAWdtK_T4UGswjUCVgDonA": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"y_04rFE18EOkGhy_MJo9zA": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"4ViMTxLKsE6lSujc8VwMtw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"bJptLwyOrEWTCpV1hA8dxQ": {
getter: function (varBag, idService) {
return varBag.initializeDatePickerJSResult.value;
}
},
"zm4iy0nr4kas9m4QZiGb7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Hrpfj5uVxE+Cl8laimCcyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"CbKYKPceSUCPSX8Zn7V7cw": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"hQC6ttN1eUGqWHifprsUrQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isRunningAsNativeOut;
},
dataType: OS.Types.Boolean
},
"SFRpRIsTa0aEhQ7QPLWumA": {
getter: function (varBag, idService) {
return varBag.isRunningAsNativeAppJSResult.value;
}
},
"uP3fexzQaE6pvlzy9fhr8g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"4NC4s2vkqU+xdq1Y1MRYcQ": {
getter: function (varBag, idService) {
return varBag.setRangeSliderChangeOnDragEndJSResult.value;
}
},
"n8TPmPwhBU2KRXr3lW5hzQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.networkTypeOut;
},
dataType: OS.Types.Text
},
"DdnOaND2fkCpllA7GTAiCg": {
getter: function (varBag, idService) {
return varBag.checkNetworkTypeJSResult.value;
}
},
"Dsbn3+kxm02p4Ix89FN8UQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"4QjlGavji0qDG0KIMwSd+A": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"JXOix3R+rkih4RCCOWepMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.modeInLocal;
},
dataType: OS.Types.Text
},
"_vAjfPDfR0usO_J5Y9_seQ": {
getter: function (varBag, idService) {
return varBag.vars.value.providerInLocal;
},
dataType: OS.Types.Text
},
"OSrw7fkHIkyMEh2lVTNMhg": {
getter: function (varBag, idService) {
return varBag.createDatePickerJSResult.value;
}
},
"ULOJ1JdZV06nLBd32iU9zQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"TnjtB1qi30uCRxJtSprrXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.rTObserverObjOut;
},
dataType: OS.Types.Object
},
"I0v7qVLxN0yTq6rIFmubjw": {
getter: function (varBag, idService) {
return varBag.observerJSResult.value;
}
},
"0kG81uY5e0GVOSc67jGqBw": {
getter: function (varBag, idService) {
return varBag.vars.value.userAgentInLocal;
},
dataType: OS.Types.Text
},
"EIlIMad4pk+liSQRvrUwQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.oSOut;
},
dataType: OS.Types.Text
},
"UTNgkVilxEuT_Cr3S2KMTA": {
getter: function (varBag, idService) {
return varBag.detectIphoneXJSResult.value;
}
},
"xCQ_k6fT4EuMqMRqSy6LJg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"WwZMb9JoLE+kK1za8B8Rbg": {
getter: function (varBag, idService) {
return varBag.closeDatepickerJSResult.value;
}
},
"o3W0nCH_C0exqy_bpEhYzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"l2ZT1c53uE2deI9zHswrNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.Types.Decimal
},
"jCXXYi1o2kaIq_uOf1Ec4g": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.Types.Decimal
},
"Ig9Kq1FTkEKClLusT3JwPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.Types.Decimal
},
"OZcVt6LzxU2+U+P0OWGscA": {
getter: function (varBag, idService) {
return varBag.onGestureEndJSResult.value;
}
},
"q1LpotUPB0aHAZDrXF1Ojg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"vU6wDxxPFU+yL3v4KHfr0w": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Decimal
},
"ZqfyH9UKR0WntFypeCFaUA": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"DVPzO8ebsE+WT2xS4g6TMA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Be8739OH5UmI7VDvU9BXxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"0Z05JY2TQE2fbkfpStgi4A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"CWCya8BAbEu2slcao+21qQ": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"kjBPK70600CmwsglzKE0SA": {
getter: function (varBag, idService) {
return varBag.vars.value.contentIdInLocal;
},
dataType: OS.Types.Text
},
"Vz80WN2GxkarDKbQWZ84Xw": {
getter: function (varBag, idService) {
return varBag.vars.value.triggerItemInLocal;
},
dataType: OS.Types.Text
},
"UufczVjIsEqSMRYpostVdw": {
getter: function (varBag, idService) {
return varBag.setFocusBehaviourJSResult.value;
}
},
"J97BWdGspUCWxuu+V5J31g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"IjaOCbxRhUuYJA4hQb2Drg": {
getter: function (varBag, idService) {
return varBag.onSwipeBottomJSResult.value;
}
},
"fpGSPFoMv0CYgvYXZ55R2A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Bfp6_UbmW026g_y6CZZ0DQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"0IfdNAkKD0uoR6w9RMRRIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"NCmsBFr8skm3jWvPl_riJw": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"UoTroLkEs0ipEBTZAHXTzw": {
getter: function (varBag, idService) {
return varBag.vars.value.activeItemInLocal;
},
dataType: OS.Types.Integer
},
"GBAp_B5zEEafCOEqAM20CQ": {
getter: function (varBag, idService) {
return varBag.vars.value.activeSubItemInLocal;
},
dataType: OS.Types.Integer
},
"uauiLqkNdU2Vr4TlJvBStA": {
getter: function (varBag, idService) {
return varBag.setActiveJSResult.value;
}
},
"wU4denjHh0WNX0WPBCbp0w": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"qhYV9pcVKEajuo8WOaAC8w": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"sD28oLAE8kOYUOCl9kDTHw": {
getter: function (varBag, idService) {
return varBag.vars.value.tableIdInLocal;
},
dataType: OS.Types.Text
},
"aoNsjtr39EmXIYAk_8UCtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.rowNumberInLocal;
},
dataType: OS.Types.Integer
},
"Kgq7hn4x70m93JvEJ1zJ1A": {
getter: function (varBag, idService) {
return varBag.vars.value.isSelectedInLocal;
},
dataType: OS.Types.Boolean
},
"ATatOzJqo0u2ApIml90UFg": {
getter: function (varBag, idService) {
return varBag.setSelectedRowJSResult.value;
}
},
"qLA8zbYCJ0GeeKTA6l0_Dg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"NdVbtmiNvESSTFMxbhkzFA": {
getter: function (varBag, idService) {
return varBag.swipeRightJSResult.value;
}
},
"hVjwntVhd0GrQLbpLtvDHQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"U0hNGZzPZ0SCQK0LzBqaAw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"jK0u8VLe6E+1I1BAkhjrbA": {
getter: function (varBag, idService) {
return varBag.vars.value.deviceConfigurationInLocal;
}
},
"VoR2nu8KDUyBS7WGi_Ed1w": {
getter: function (varBag, idService) {
return varBag.setDeviceOnResizeJSResult.value;
}
},
"BLlScTzYI0C55ErwgyEyNw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"We3HeTi9X0aQWXW5HGAiug": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"1GAdlA0XsUGhDMNKE+kQmw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"7Y0HPo6iREG0HevTp0ln3g": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"hg5UbZxzn0SJQ+VWBdStSg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"TE4j5j+PI06bzcKVldv1nw": {
getter: function (varBag, idService) {
return varBag.onRenderJSResult.value;
}
},
"8mskTrJwLUOhMqyPc8H8bA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"BmsYmgUgc0mXQKgpq423mA": {
getter: function (varBag, idService) {
return varBag.openDatepickerJSResult.value;
}
},
"+m4IbWle3UOsSKkuYMDQbw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"hrqbWemBIkulRvOYfHr58g": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"BNqxcUoqK0OEBUTMqox9OQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"pZWfgnLNOkS53HFFpTdumA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"OrF7yRqI_kWzAmDe6yuElg": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"YLvdZYYbNU+F0V+G9TP5SQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"1lH2Qug1dkmObfF4SVgywA": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"Nn4uHLljkEOnf5G5_kZAJA": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"sSpuHDYDoE2Ew8OgBXKTvw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isOnlineOut;
},
dataType: OS.Types.Boolean
},
"lLAk3sElnEm+ySLNkSsrjw": {
getter: function (varBag, idService) {
return varBag.checkDeviceOnlineJSResult.value;
}
},
"Vb34NY3zYEGX4ikxHnvp0A": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"53BVu_67OUOpcv5eedIWzw": {
getter: function (varBag, idService) {
return varBag.callNextActionJSResult.value;
}
},
"Rpls7RW+Xk6MIx4vrgOJ5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"NFAashiXokalwr8nmwajLg": {
getter: function (varBag, idService) {
return varBag.setSubmenuOpenOnHoverJSResult.value;
}
},
"4CpUHNaQRUume7E1q0Su+g": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"X_gFhwE7Lkiq7jKcqYRqDA": {
getter: function (varBag, idService) {
return varBag.vars.value.isActiveInLocal;
},
dataType: OS.Types.Boolean
},
"IO79uJFMWEeJUfqEirGmkg": {
getter: function (varBag, idService) {
return varBag.setActiveElementJSResult.value;
}
},
"d1di0ONiQ0aOcg3byZYc0Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.isDesktopOut;
},
dataType: OS.Types.Boolean
},
"LyPCmHPMOUiz05omO6N5Kg": {
getter: function (varBag, idService) {
return varBag.getDeviceTypeVar.value;
}
},
"A2ILCIEO7EGW0QZ6CB6LJg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"mfJ8xdFCcEm0t1Gi9snU+Q": {
getter: function (varBag, idService) {
return varBag.callPreviousActionJSResult.value;
}
},
"+6G2ix7G+U6Q80AmGklutg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"jEqMIxUlL0mR8zD8JhDQ6w": {
getter: function (varBag, idService) {
return varBag.rangeSliderResetJSResult.value;
}
},
"uvqRzo3lQkCwP+lSHMTAjg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"JmYeJJQeiEeC+gdiBqpVew": {
getter: function (varBag, idService) {
return varBag.toggleJSResult.value;
}
},
"BEgE0bNQwkWv_ge0GtalYg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"pIP+E7IVNEKaeg9IdAXq7w": {
getter: function (varBag, idService) {
return varBag.initializeRangeSliderJSResult.value;
}
},
"56HXz2UrMUGmTBnJrfPHGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"utRe0p5wLkeeqm9FjSoQXA": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
},
dataType: OS.Types.Integer
},
"xj06NhzqkUaROyRC0V8odw": {
getter: function (varBag, idService) {
return varBag.setProgressValueJSResult.value;
}
},
"PwiMmRVOL0OFB6TA_s6eEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"f4YyiUcZ1kiTsmqfUIIDBg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"gnA9qTMiY0admwJoOdtO1Q": {
getter: function (varBag, idService) {
return varBag.changeIconTypeJSResult.value;
}
},
"qgyOAHf9g0qR32dlHXeu7A": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"LtrvLzZDVka8_M51Nev2mw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"lX+erA_UAEeCH5TJ8qN1hg": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"onmE87DcFkiZyEYZNkE+eg": {
getter: function (varBag, idService) {
return varBag.vars.value.isWebAppVar;
},
dataType: OS.Types.Boolean
},
"7nyPIcv8REyRdnDThsUOJA": {
getter: function (varBag, idService) {
return varBag.vars.value.isPWAVar;
},
dataType: OS.Types.Boolean
},
"PdwtDmJ9MUKMS4YDtId34w": {
getter: function (varBag, idService) {
return varBag.runOnStartJSResult.value;
}
},
"07SEFfNsg0K4cJ3Z4ke3iA": {
getter: function (varBag, idService) {
return varBag.getHeaderAndFooterSizeJSResult.value;
}
},
"vedik6OqRESlGJkYBGu5Tg": {
getter: function (varBag, idService) {
return varBag.fixForRenderingIssuesJSResult.value;
}
},
"9hie0LpEdE24tR9bVTqriQ": {
getter: function (varBag, idService) {
return varBag.viewportJSResult.value;
}
},
"B2Fl0bIY5UqjnDYFY8KlvA": {
getter: function (varBag, idService) {
return varBag.closeMenuOnBodyClickJSResult.value;
}
},
"fd7I_BtwWkecM47jRYQwFQ": {
getter: function (varBag, idService) {
return varBag.setExpandableExceptionsJSResult.value;
}
},
"lRxhx2wFTkGkxdhA_VU2Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"861yU7dh+kGA2uhMGjs8fQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"HXQtwUaVLEejPByhozUkjg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"Qyt7AzwxV0mdAfFmSTW4vw": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"yZhwrx5Mw06wOpo59SqUTA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"kUa8tFpy4U+ui8317xypfA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"3sZVg+YXZEuSlwqu+zA+6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.LongInteger
},
"b9Ep2b_NdEWzmxJfRkPn+w": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"P_GwkYB2Qky8mj5wnK0Usg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"LrnR4YHuPEaFFAmbmSTz1Q": {
getter: function (varBag, idService) {
return varBag.callUpdateActionJSResult.value;
}
},
"9md9YTHjZkiZZN3suuWnkg": {
getter: function (varBag, idService) {
return varBag.toggleLayoutClassJSResult.value;
}
},
"+VvG_iDcGk2ih3UVID9CZA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"dlAUzymUtUasY1sAQC_ScQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"RfzQcaNGSE+UGaBoHeNIGA": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"EbXefQSkc0aLbD3h3UfbNQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.addDragOut;
},
dataType: OS.Types.Boolean
},
"9uW+UGQms020qoCwM_hTwA": {
getter: function (varBag, idService) {
return varBag.checkIfNativeJSResult.value;
}
},
"stUMYb+yfEK+TSPkokC45g": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"c_TxgRFoL0GiDwtCmoPUiA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"5cW_xBp5_0KepdldM_Wvpw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"J6J+lT2FE0GHMxZbxePVPw": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"SRv4j2hQ10iCKPA8D+yqxw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"FSREt8eolkGxPybGf44dCw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"8ZbyoCV4LkWESlLl5XA5wg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
}
},
"WnDDNVs+sEuA422Omzcg9Q": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"QSdycfZs1kCl43Gv5izH_A": {
getter: function (varBag, idService) {
return varBag.disableDropdownJSResult.value;
}
},
"FRRc+raZJEC8Udmcf+aSBw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"8KNjwkdWmkSI3qieAr0U2A": {
getter: function (varBag, idService) {
return varBag.initializeDropdownJSResult.value;
}
},
"SgRFzgpzDEeZJXDc235hCw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"5ihY8BrPQ0WJ6xTD0ExaqA": {
getter: function (varBag, idService) {
return varBag.onSwipeRightJSResult.value;
}
},
"+saQ0fhpUUq89_xpICnSAg": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.Types.Text
},
"Tqtf+c60O0uMF152LXncfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"h3X0VgXkT0CPT0t0sqesgg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.Types.Text
},
"wEOA9EdgmkqCLN8ityuLbw": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"zB04ReuN+UmzfKqkcdi7Sg": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"vpjusqMqck22yQB4F0+aOA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"vOWILUVN_kCrA4dT98d5ng": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"_Oend+MOvkiX0CCjdUze+g": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"bKrodZ1Ot0SzpjzZni3wzA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"dpOajdnvzkiUvJ0Ou1SZbA": {
getter: function (varBag, idService) {
return varBag.closeSidebarJSResult.value;
}
},
"7srVpViX+EadwjmfHMaeMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.showFocusInLocal;
},
dataType: OS.Types.Boolean
},
"ly2tKQ9rGECKJvMC6SY1ew": {
getter: function (varBag, idService) {
return varBag.vars.value.showSkipToContentInLocal;
},
dataType: OS.Types.Boolean
},
"ZsWmIvKBBkaNJGyYYN+RfA": {
getter: function (varBag, idService) {
return varBag.vars.value.langInLocal;
},
dataType: OS.Types.Text
},
"OEiKilqUO0uT5hWyOOJlmQ": {
getter: function (varBag, idService) {
return varBag.setConfigJSResult.value;
}
},
"axFs4o9Lm0GQ9ItdUlokFw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"jLQjxGyt1kuyoTPkIdmLBw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"C8aLhxYzgEakWlmaWN132w": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"Hlukjh42A0e7KTmBBV5kxw": {
getter: function (varBag, idService) {
return varBag.vars.value.activeItemInLocal;
},
dataType: OS.Types.Integer
},
"ft1g983_JkyOahUTuGF5kA": {
getter: function (varBag, idService) {
return varBag.addActiveJSResult.value;
}
},
"G736Oi4Y2EOdbSrwM7jekw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"23Cd6vV+zkCiPLT8E2ccyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"nyPfGRigH0OCV4c71R5v+Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"J3IACBrP5USys5Gy3tThlw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"5+l2+PpVb0mVTBEO1pLB2w": {
getter: function (varBag, idService) {
return varBag.validationDropdownJSResult.value;
}
},
"z1e2dlslfUmiN3TNfcYtgA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"xXytuHwgwUWJxCLbMqq3WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"p3FNDr4af0mqODF9cx2CMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"kRo5_1e2mkGPsWtPHlQnVA": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"SeZaiei3l02bVsMlI7AgBw": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.Types.Text
},
"24BYYGogjEamX0Nv0eDlVA": {
getter: function (varBag, idService) {
return varBag.clearDateJSResult.value;
}
},
"wUmlbnoLA0O_PHz71d_MKw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"1aRiCYw0hkSPI1A3Ua8dqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"qHuTgDk+mkKoIdN2of05_g": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"t7MtUCP1Gkmy1oQlTMKtpw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Qqgu9YfFEEmfxAy_C0DSiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"jykRwa828U2ZGtm1EI2YCw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.DateTime
},
"9YKnJLRpCEy20q7U6l3zJg": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"N9qM0cA0mkSxUqTm3IcUJw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"WXaYc5PKJEOfP8_vtx0xtw": {
getter: function (varBag, idService) {
return varBag.vars.value.multipleItemsInLocal;
},
dataType: OS.Types.Boolean
},
"ulTTWWisZE6vnyND5_2EsQ": {
getter: function (varBag, idService) {
return varBag.updateAccordionJSResult.value;
}
},
"bYaaGu_4okOa4FcH948Ztw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"8Q8Om6nmEUel7zo6QkrUtg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"5Gj3K3lglEyHnZWFKXdqrw": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"+I9JkjJjakK280+6IfwP8w": {
getter: function (varBag, idService) {
return varBag.vars.value.hasErrorInLocal;
},
dataType: OS.Types.Boolean
},
"DCs_wh+rgEKLx0aKR_Y_vA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"cgGNyx+ntUSOxm5inqsadA": {
getter: function (varBag, idService) {
return varBag.vars.value.allowRetryInLocal;
},
dataType: OS.Types.Boolean
},
"v03QPIY87ECIHTsz5R0JNA": {
getter: function (varBag, idService) {
return varBag.triggerSyncCompleteEventJSResult.value;
}
},
"iIqr4yohpki+TJEMODfuzQ": {
getter: function (varBag, idService) {
return varBag.triggerSyncErrorEventJSResult.value;
}
},
"7G0KMtWjn0+HjyqaZU0Vxw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"OhEyJVmArkyNoKTm8dQpsA": {
getter: function (varBag, idService) {
return varBag.vars.value.roleInLocal;
},
dataType: OS.Types.Text
},
"4O88zbHElkSgAsLU0yIERw": {
getter: function (varBag, idService) {
return varBag.setRoleJSResult.value;
}
},
"z30uh0YbMUOyAcStxulxQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"e7zMEhokQEW9uZkvOkt3Xg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"NhGMKtxMO0+2SZSFFmVjlQ": {
getter: function (varBag, idService) {
return varBag.changePropertyJSResult.value;
}
},
"DTASNwU2pUaV0XWGvdecQg": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"ULfiSpItuUS3I8+9zGqHJA": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"MyJ1XjasNUCB7xD6SmUcPQ": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"QphTtzz8LUSMkYDEPg6ugQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.deviceOut;
},
dataType: OS.Types.Text
},
"N9WTj9dLUkuBdvhGabzneA": {
getter: function (varBag, idService) {
return varBag.checkDeviceJSResult.value;
}
},
"M+UbDGs6wky2ZoeN8U32kw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"QFqppE7yPE+KtcMlyfpvvg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.Types.Text
},
"BACcTe_Q40ueNnYKHjYiyw": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"LJWZYQQ6OE6THxlSDgsKig": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"DNcuy4lPxEqa2maOVFUrHA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"6mF3_SIeGU6G93knJeYVXA": {
getter: function (varBag, idService) {
return varBag.clearDatepickerJSResult.value;
}
},
"zC671vjgxUCxvuKBets7Cg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isTouchOut;
},
dataType: OS.Types.Boolean
},
"UzL18+5tCEyY2xczP1HzpQ": {
getter: function (varBag, idService) {
return varBag.setIsTouchJSResult.value;
}
},
"koLZiZR2y0aGtjwgAm6ecw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"6WlWfWO1okKlSIHFqBJ1ug": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"nStVOKkQIEOtPpV4SnH5LQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"xPXUt7053EGczbsLnyY18A": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"yRkQ_D2_qEm2BiVxFUwylQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isStandaloneOut;
},
dataType: OS.Types.Boolean
},
"ho14ByP0d0KPoK4vE2Wcbw": {
getter: function (varBag, idService) {
return varBag.isRunningAsPWAJSResult.value;
}
},
"XEkh5w521kiVdx7JaepwsA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"pPS1Usw1cUelqE7nxjfGMw": {
getter: function (varBag, idService) {
return varBag.initializeSidebarJSResult.value;
}
},
"i89PxJRGqUegqcOKj9CyPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"1RrZBO+ro0iOP7rBMOxR5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.modeInLocal;
},
dataType: OS.Types.Text
},
"Yis1scCMSEqJkdgkckXlBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.providerInLocal;
},
dataType: OS.Types.Text
},
"bJOJIcSQmUqp0XVlJ4hfUA": {
getter: function (varBag, idService) {
return varBag.vars.value.internalConfigsInLocal;
},
dataType: OS.Types.Text
},
"yOweKhcgHEC68uxLxcmgYg": {
getter: function (varBag, idService) {
return varBag.createDropdownJSResult.value;
}
},
"Kx54o169KEKnW_MBFfq97w": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"RFqZJN7juUylH5WXQEIYFA": {
getter: function (varBag, idService) {
return varBag.destroyRangeSliderJSResult.value;
}
},
"bmSv7oiQEkmhMkPUGagztA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"X9zKkVy440W865BoLlxJPg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"46Gbh+_1V0ukSyaN0ImNKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.LongInteger
},
"AezO69EsmECGyIfkZ4+qjQ": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"RW1PUmw+UUO2sHqz5dNLog": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"KgpVePaJTEGnIxxjKQr4Zg": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"yH10E7_NoEmaUrpAkuvkHg": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"X93MJr+xZUqCmwTVroWG_A": {
getter: function (varBag, idService) {
return varBag.vars.value.isHiddenInLocal;
},
dataType: OS.Types.Boolean
},
"r0z5tyLSlUqGLBeTxTzxqA": {
getter: function (varBag, idService) {
return varBag.setAriaHiddenJSResult.value;
}
},
"eyb8jAm6+kSOcY1dlExx2g": {
getter: function (varBag, idService) {
return varBag.outVars.value.orientationOut;
},
dataType: OS.Types.Text
},
"gbjVoiko4UGtMqk2GHLr1g": {
getter: function (varBag, idService) {
return varBag.checkDeviceJSResult.value;
}
},
"zEkHDdkRJkqYBNyW6Xoyzw": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"JIY3ha5mqEO7rnYL9M7U+g": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"XJIFtwZy9k6fK2ZGtryEXw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.LongInteger
},
"kFDjkN455kSPZktIXhzAjg": {
getter: function (varBag, idService) {
return varBag.changeBooleanPropertyJSResult.value;
}
},
"bxp8S_H10kKMTwwJmoLfTQ": {
getter: function (varBag, idService) {
return varBag.showPasswordJSResult.value;
}
},
"lGYz479sKE2RJjD9e6HHYg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isTabletOut;
},
dataType: OS.Types.Boolean
},
"ioZf772KpUSfGBw8JlIMDw": {
getter: function (varBag, idService) {
return varBag.getDeviceTypeVar.value;
}
},
"xPuWZaTn6UaNLPxAFDaNOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"LyKuIyJp_Eqe+TQF8m5f0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"JONqy2260Uye7G14bh8qww": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"8EyPKQuca06SYiGmRU1TMA": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"jyl4eR0MekOUj_ge2_XYAA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"c4Bt3BGDQUKHNfRW5WNyUQ": {
getter: function (varBag, idService) {
return varBag.hideTooltipJSResult.value;
}
},
"amTr6W7W2ku5jd9cXFz2qA": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"Wnlx8Mw2_UWgZUSR8Ha0zQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.Types.Text
},
"uphCsdReKE2__sD8LoeddA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Text
},
"San7Ttq1oEiIQGWqQURCRw": {
getter: function (varBag, idService) {
return varBag.changeTextPropertyJSResult.value;
}
},
"x1MjqhXrP0iAKFPapF4Efg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"uZAW8i5dRESCOoXvm_D2KQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.Types.Object
},
"9rbIUcru1UW1Ff6DnkJxAQ": {
getter: function (varBag, idService) {
return varBag.registerCallbackJSResult.value;
}
},
"JtYow7xOrUWV4mBZXL8HTg": {
getter: function (varBag, idService) {
return varBag.vars.value.internal_ConfigsInLocal;
}
},
"GnPs6ZSE70uO5qGdP3Nbtg": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"6_Y7RPfqZEqwKubxNGDhGA": {
getter: function (varBag, idService) {
return varBag.createJSResult.value;
}
},
"WbjiWs14IkOlC9UBuLzhbg": {
getter: function (varBag, idService) {
return varBag.vars.value.uniqueIdInLocal;
},
dataType: OS.Types.Text
},
"XkqHm0QP7EagxyfkfsE57A": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.Types.Boolean
},
"se0T6Fh9GUmFSvo+nqw_zg": {
getter: function (varBag, idService) {
return varBag.changeIsDisabledJSResult.value;
}
},
"fThddc44fESG65lW4aYefA": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.Types.Text
},
"_UeV8Tswuku9c5sj6Bs_MQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.selectedOptionListOut;
}
},
"DgPONHz2c0+rTvD7yzFqfA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.Types.Boolean
},
"gUeTLWzzHUCZJVYQHuwEOg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
}
},
"aHHBF9UtQUi60vqEscYUMQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeDropdownOptionVar.value;
}
},
"KPSFGMvK0kqQ5o83ibb7Ng": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeErrorMessageVar.value;
}
},
"S7+BoHXlBkK+eWD7+5OI_w": {
getter: function (varBag, idService) {
return varBag.getSelectedValuesJSResult.value;
}
},
"+p4JrADMgEuyMGCRVuSHCA": {
getter: function (varBag, idService) {
return varBag.toggleLayoutClassJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.controller$translationsResources", ["exports", "OutSystemsUI.controller$translationsResources.fr-CA", "OutSystemsUI.controller$translationsResources.pt", "OutSystemsUI.controller$translationsResources.ja-JP"], function (exports, OutSystemsUI_controller_translationsResources_frCA, OutSystemsUI_controller_translationsResources_pt, OutSystemsUI_controller_translationsResources_jaJP) {
return {
"fr-CA": {
"translations": OutSystemsUI_controller_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_controller_translationsResources_pt,
"isRTL": false
},
"ja-JP": {
"translations": OutSystemsUI_controller_translationsResources_jaJP,
"isRTL": false
}
};
});
define("OutSystemsUI.controller$translationsResources.fr-CA", [], function () {
return {
"lg7NoSsYfEuhIOQNq772Tw#Value.1874273954.1": "Bien reçu!",
"EKgo2wktLUWoYHof84369Q#Value.58078159.1": "ESPACE / ENTRÉE pour sélectionner une date.",
"hxu4s7ASlUCI3vkxgsoR+A#Value.941141342.1": "PAGE BASSE pour passer au mois suivant.",
"2pdORbIMeUmJLoWBa4tFQQ#Value.-513930751.1": "PAGE HAUTE pour passer au mois précédent.",
"9s+39UgfEUOBkGEECmMZsw#Value.887781619.1": "ÉCHAPPER pour fermer le calendrier.",
"yqo5pCbrYUa4Qeqn0J_qOg#Value.-1565462224.1": "SUPPRIMER pour réinitialiser la date.",
"I6J5cRrTyk6bSZ6JvMUtBg#Value.-1048883153.1": "HAUT / BAS pour passer d\'une semaine à l\'autre.",
"aUoleWSZBEGHb_sk4X7m8A#Value.-1916325413.1": "GAUCHE / DROITE pour se déplacer d\'un jour à l\'autre.",
"7KBMokDeIEC_mM_EfFiiKA#Value.82125743.1": "Les raccourcis clavier suivants sont disponibles",
"lRJU8QwPl0iwqv3N9eqD+Q#Value.1784051735.1": "Mois précédent",
"d7ISJdppoUa87s3wJLedig#Value.-766743789.1": "Prochain mois",
"eVkbzc3vuEypSjfR3Hr9bA#Value.1511082002.1": "Appuyez sur Tab pour entrer dans le calendrier",
"hw5vDiQKrESpaaxSlyRHCA#Value.857568417.1": "Fermé. Appuyez sur Entrée pour ouvrir le calendrier",
"1b5_VD14vEWCUSQsUQ8m8g#Value.-464608999.1": "Ouvrir. Appuyez sur Entrée pour fermer le calendrier",
"StrMC+dU8UKyWJfLxq6nJA#Value.-18794124.1": "Allez à aujourd\'hui",
"Bra9RrfzZk+b3rOW0R7aWA#Value.-113680546.1": "Calendrier",
"bOB6QpW3y0qaPPNGZE3U9A#Value.-911153517.1": "Date sélectionnée: ",
"XTzYOcd0uEuBcu+inuc+jg#Value.-2092303549.1": "Dates de calendrier",
"k2YfRkJbhkWi6MaJmqxhJg#Value.1665633300.1": "Raccourcis clavier",
"H6apzIN1TUKPQopWFy0zBw#Value.3704893.1": "année",
"iKX__y0GCEK4HvMWgzSWjA#Value.104080000.1": "mois",
"q2HVeR5fq06ujvR8mwXC1g#Value.1862666772.1": "navigation",
"Ou2_Lg3vvEe3aQ7GWyGPBQ#Value.979281226.1": "Fin d\'intervalle. ",
"6yUVQvdC90Gm4KUFQBj81w#Value.1774776785.1": "Début de l\'intervalle. ",
"nmdHfe62kkWmZZi8twrJvg#Value.-1662297402.1": "La journée est dans l\'intervalle. ",
"s6Mc6dzsq0O31GbSo7QbpQ#Value.-1258432986.1": "A un événement. ",
"pXZo0bRIl0KKarFWqwJMoA#Value.997213361.1": "Journée sélectionnée. ",
"iqF5Pqcm+EuQgVmDvcRfXQ#Value.1584999357.1": "Est aujourd\'hui. ",
"0JFpmf26qEmLPKk06zPUDg#Value.374566222.1": "Désactivé. ",
"wupNrsljn0+ZgKsDAgws7w#Value.82886.1": "Sam",
"7Dxp7GHv9kO9AEdEXQqPGA#Value.70909.1": "Ven",
"C5ZwndaAOUOl74fkEmefDw#Value.84065.1": "Jeu",
"n_faF_hqU0qU+TQPqypwbg#Value.86838.1": "Mer",
"TxFtPzJ8eEmwSbWV_8uB3w#Value.84452.1": "Mar",
"pWtYDFh+oEGF3oMu1ST3SA#Value.77548.1": "Lun",
"Q0atH4XnxESfNPKXcNCMhg#Value.83500.1": "Dim",
"fxhdUHdd30WEIUqlUd3Dgg#Value.-2049557543.1": "Samedi",
"PTUebe2ghUGIcIlmoiHGTA#Value.2112549247.1": "Vendredi",
"rZxYcEOLE0SMy_WUK1USbg#Value.1636699642.1": "Jeudi",
"2cEIAtVIlES4bU387yYKFA#Value.-897468618.1": "Mercredi",
"CdvV1OKrjUSoC4jJteUE6A#Value.687309357.1": "Mardi",
"WV8_eD4RTE61GB2a0BkwuQ#Value.-1984635600.1": "Lundi",
"PP+e0FO51k2OuDR1+EhorQ#Value.-1807319568.1": "Dimanche",
"mSVpIhn5x0WuqHFplsMTFw#Value.626483269.1": "Décembre",
"duL0nCW7+0uMBTLcjoL7Xg#Value.1703773522.1": "Novembre",
"9LIV9yDE20eRBuqb7_MUNQ#Value.43165376.1": "Octobre",
"nX8TB7S5xkW2vLpNGzji6A#Value.-25881423.1": "Septembre",
"ZIkkytkF00C62bRH6ZRMcA#Value.1972131363.1": "Août",
"OG7OPs09EEmIHvBtd09u5Q#Value.2320440.1": "Juillet",
"q6eCYPoiPE6Z8gtzavUUWg#Value.2320482.1": "Juin",
"Ew9YPH2yzEGI5SqyvW_2sQ#Value.77125.1": "Mai",
"jNVk7nRwUkKdBhDRLgvUag#Value.63478374.1": "Avril",
"mbDBy4VjB0SzzkLzOXUdFg#Value.74113571.1": "Mars",
"4BHq85s+VE+IylptE9ZukQ#Value.-199248958.1": "Février",
"Elw2vXw960izxzIMvM1qpA#Value.-162006966.1": "Janvier",
"7JkNQfmve0ybQuEBCcmHfw#Value.2433920.1": "Midi",
"tI9n5r_Dx0iO64Cd0TsZQg#Value.-1576218896.1": "Minuit",
"c93RG+ceD0WdMhhBlgm7sA#Value.80981793.1": "Aujourd\'hui",
"FRQkwo9Yp0iVKYmvglli4w#Value.-766743789.1": "Prochain mois",
"1fCvKiR860iF8y93wqzElg#Value.1784051735.1": "Mois précédent"
};
});
define("OutSystemsUI.controller$translationsResources.pt", [], function () {
return {
"lg7NoSsYfEuhIOQNq772Tw#Value.1874273954.1": "Aceitar",
"EKgo2wktLUWoYHof84369Q#Value.58078159.1": "ESPAÇO / ENTER para seleccionar a data",
"hxu4s7ASlUCI3vkxgsoR+A#Value.941141342.1": "PAGE DOWN para mover para o mês seguinte",
"2pdORbIMeUmJLoWBa4tFQQ#Value.-513930751.1": "PAGE UP para mover para o mês anterior",
"9s+39UgfEUOBkGEECmMZsw#Value.887781619.1": "ESCAPE para fechar o calendário",
"yqo5pCbrYUa4Qeqn0J_qOg#Value.-1565462224.1": "DELETE para volar a data inicial",
"I6J5cRrTyk6bSZ6JvMUtBg#Value.-1048883153.1": "CIMA / BAIXO para mover entre semanas",
"aUoleWSZBEGHb_sk4X7m8A#Value.-1916325413.1": "ESQUERDA / DIREITA para mover entre os dias",
"7KBMokDeIEC_mM_EfFiiKA#Value.82125743.1": "Os atalhos de teclado que estão disponiveis são os seguintes",
"lRJU8QwPl0iwqv3N9eqD+Q#Value.1784051735.1": "Mês anterior",
"d7ISJdppoUa87s3wJLedig#Value.-766743789.1": "Mês seguinte",
"eVkbzc3vuEypSjfR3Hr9bA#Value.1511082002.1": "Pressione a tecla Tab para entrar no Calendário",
"hw5vDiQKrESpaaxSlyRHCA#Value.857568417.1": "Fechado. Pressione a tecla Enter para abrir o Calendário",
"1b5_VD14vEWCUSQsUQ8m8g#Value.-464608999.1": "Aberto. Pressione a tecla Enter para fechar o Calendário",
"StrMC+dU8UKyWJfLxq6nJA#Value.-18794124.1": "Ir para o dia actual",
"Bra9RrfzZk+b3rOW0R7aWA#Value.-113680546.1": "Calendário",
"bOB6QpW3y0qaPPNGZE3U9A#Value.-911153517.1": "Data seleccionada: ",
"XTzYOcd0uEuBcu+inuc+jg#Value.-2092303549.1": "Datas do calendário ",
"k2YfRkJbhkWi6MaJmqxhJg#Value.1665633300.1": "Atalhos do teclado",
"H6apzIN1TUKPQopWFy0zBw#Value.3704893.1": "ano",
"iKX__y0GCEK4HvMWgzSWjA#Value.104080000.1": "mês",
"q2HVeR5fq06ujvR8mwXC1g#Value.1862666772.1": "navegação",
"Ou2_Lg3vvEe3aQ7GWyGPBQ#Value.979281226.1": "Fim de ciclo. ",
"6yUVQvdC90Gm4KUFQBj81w#Value.1774776785.1": "Inicio de ciclo. ",
"nmdHfe62kkWmZZi8twrJvg#Value.-1662297402.1": "Dia está no ciclo",
"s6Mc6dzsq0O31GbSo7QbpQ#Value.-1258432986.1": "Tem evento. ",
"pXZo0bRIl0KKarFWqwJMoA#Value.997213361.1": "Data seleccionada. ",
"iqF5Pqcm+EuQgVmDvcRfXQ#Value.1584999357.1": "Hoje. ",
"0JFpmf26qEmLPKk06zPUDg#Value.374566222.1": "Desactivado. ",
"wupNrsljn0+ZgKsDAgws7w#Value.82886.1": "Sab",
"7Dxp7GHv9kO9AEdEXQqPGA#Value.70909.1": "Sex",
"C5ZwndaAOUOl74fkEmefDw#Value.84065.1": "Qui",
"n_faF_hqU0qU+TQPqypwbg#Value.86838.1": "Qua",
"TxFtPzJ8eEmwSbWV_8uB3w#Value.84452.1": "Ter",
"pWtYDFh+oEGF3oMu1ST3SA#Value.77548.1": "Seg",
"Q0atH4XnxESfNPKXcNCMhg#Value.83500.1": "Dom",
"fxhdUHdd30WEIUqlUd3Dgg#Value.-2049557543.1": "Sábado",
"PTUebe2ghUGIcIlmoiHGTA#Value.2112549247.1": "Sexta",
"rZxYcEOLE0SMy_WUK1USbg#Value.1636699642.1": "Quinta",
"2cEIAtVIlES4bU387yYKFA#Value.-897468618.1": "Quarta",
"CdvV1OKrjUSoC4jJteUE6A#Value.687309357.1": "Terça",
"WV8_eD4RTE61GB2a0BkwuQ#Value.-1984635600.1": "Segunda",
"PP+e0FO51k2OuDR1+EhorQ#Value.-1807319568.1": "Domingo",
"mSVpIhn5x0WuqHFplsMTFw#Value.626483269.1": "Dezembro",
"duL0nCW7+0uMBTLcjoL7Xg#Value.1703773522.1": "Novembro",
"9LIV9yDE20eRBuqb7_MUNQ#Value.43165376.1": "Outubro",
"nX8TB7S5xkW2vLpNGzji6A#Value.-25881423.1": "Setembro",
"ZIkkytkF00C62bRH6ZRMcA#Value.1972131363.1": "Agosto",
"OG7OPs09EEmIHvBtd09u5Q#Value.2320440.1": "Julho",
"q6eCYPoiPE6Z8gtzavUUWg#Value.2320482.1": "Junho",
"Ew9YPH2yzEGI5SqyvW_2sQ#Value.77125.1": "Maio",
"jNVk7nRwUkKdBhDRLgvUag#Value.63478374.1": "Abril",
"mbDBy4VjB0SzzkLzOXUdFg#Value.74113571.1": "Março",
"4BHq85s+VE+IylptE9ZukQ#Value.-199248958.1": "Fevereiro",
"Elw2vXw960izxzIMvM1qpA#Value.-162006966.1": "Janeiro",
"7JkNQfmve0ybQuEBCcmHfw#Value.2433920.1": "meio-dia",
"tI9n5r_Dx0iO64Cd0TsZQg#Value.-1576218896.1": "meia-noite",
"c93RG+ceD0WdMhhBlgm7sA#Value.80981793.1": "Hoje",
"FRQkwo9Yp0iVKYmvglli4w#Value.-766743789.1": "Mês anterior",
"1fCvKiR860iF8y93wqzElg#Value.1784051735.1": "Mês seguinte"
};
});
define("OutSystemsUI.controller$translationsResources.ja-JP", [], function () {
return {
"wupNrsljn0+ZgKsDAgws7w#Value.82886.1": "土",
"7Dxp7GHv9kO9AEdEXQqPGA#Value.70909.1": "金",
"C5ZwndaAOUOl74fkEmefDw#Value.84065.1": "木",
"n_faF_hqU0qU+TQPqypwbg#Value.86838.1": "水",
"TxFtPzJ8eEmwSbWV_8uB3w#Value.84452.1": "火",
"pWtYDFh+oEGF3oMu1ST3SA#Value.77548.1": "月",
"Q0atH4XnxESfNPKXcNCMhg#Value.83500.1": "日",
"fxhdUHdd30WEIUqlUd3Dgg#Value.-2049557543.1": "土曜日",
"PTUebe2ghUGIcIlmoiHGTA#Value.2112549247.1": "金曜日",
"rZxYcEOLE0SMy_WUK1USbg#Value.1636699642.1": "木曜日",
"2cEIAtVIlES4bU387yYKFA#Value.-897468618.1": "水曜日",
"CdvV1OKrjUSoC4jJteUE6A#Value.687309357.1": "火曜日",
"WV8_eD4RTE61GB2a0BkwuQ#Value.-1984635600.1": "月曜日",
"PP+e0FO51k2OuDR1+EhorQ#Value.-1807319568.1": "日曜日",
"mSVpIhn5x0WuqHFplsMTFw#Value.626483269.1": "12月",
"duL0nCW7+0uMBTLcjoL7Xg#Value.1703773522.1": "11月",
"9LIV9yDE20eRBuqb7_MUNQ#Value.43165376.1": "10月",
"nX8TB7S5xkW2vLpNGzji6A#Value.-25881423.1": "9月",
"ZIkkytkF00C62bRH6ZRMcA#Value.1972131363.1": "8月",
"OG7OPs09EEmIHvBtd09u5Q#Value.2320440.1": "7月",
"q6eCYPoiPE6Z8gtzavUUWg#Value.2320482.1": "6月",
"Ew9YPH2yzEGI5SqyvW_2sQ#Value.77125.1": "5月",
"jNVk7nRwUkKdBhDRLgvUag#Value.63478374.1": "4月",
"mbDBy4VjB0SzzkLzOXUdFg#Value.74113571.1": "3月",
"4BHq85s+VE+IylptE9ZukQ#Value.-199248958.1": "2月",
"Elw2vXw960izxzIMvM1qpA#Value.-162006966.1": "1月"
};
});
