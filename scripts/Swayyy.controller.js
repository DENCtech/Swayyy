define("Swayyy.controller$OfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.clientVariables", "Swayyy.controller$ServerAction.ServerDataSync"], function (exports, OutSystems, SwayyyModel, SwayyyController, SwayyyClientVariables) {
var OS = OutSystems.Internal;
SwayyyController.default.offlineDataSync$Action = function (syncUnitIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Swayyy.OfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:LpmGhy9cE0mCR0BZzhJoJA:/ClientActionFlows.LpmGhy9cE0mCR0BZzhJoJA:9fW7JZ_EcTcjt12Bg_nsGA", "Swayyy", "OfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:r3w04DYy+UO88Hnbcauheg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:NSg3uwX2z0KDzIngfCcKnw", callContext.id);
// Execute Action: ServerDataSync
return controller.serverDataSync$ServerAction(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:CutXTLFsZE632Xm9fh21Kg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
throw ex;

});
};
var controller = SwayyyController.default;
SwayyyController.default.constructor.registerVariableGroupType("Swayyy.OfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
SwayyyController.default.clientActionProxies.offlineDataSync$Action = function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(SwayyyController.default.offlineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Swayyy.controller$OfflineDataSyncConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.clientVariables"], function (exports, OutSystems, SwayyyModel, SwayyyController, SwayyyClientVariables) {
var OS = OutSystems.Internal;
SwayyyController.default.offlineDataSyncConfiguration$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Swayyy.OfflineDataSyncConfiguration$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:X7IJk9rbwEG8Cc2qzpBYAA:/ClientActionFlows.X7IJk9rbwEG8Cc2qzpBYAA:caWfCxDC_+ez9PImlgRZBg", "Swayyy", "OfflineDataSyncConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:4uf+P18taEuIWJBnuSJ1Gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:i_wEoadk3kWP4Wc1gPBpjA", callContext.id);
// SyncOnOnline = False
outVars.value.syncOnOnlineOut = false;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:8FTfXO_sYEiA3QGV5j9Caw", callContext.id);
// SyncOnLogin = False
outVars.value.syncOnLoginOut = false;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:Et6hhpxEZEq61+V1aOfXNg", callContext.id);
// SyncOnResume = False
outVars.value.syncOnResumeOut = false;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:XUGCZiBFuEmTNw_FElJlcw", callContext.id);
// RetryOnError = False
outVars.value.retryOnErrorOut = false;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:QziPTs5cUUOu7YJ52192jA", callContext.id);
// RetryIntervalInSeconds = 30
outVars.value.retryIntervalInSecondsOut = 30;
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:9P4z+cemjUqImNOz1PrWig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:X7IJk9rbwEG8Cc2qzpBYAA", callContext.id);
}

};
var controller = SwayyyController.default;
SwayyyController.default.constructor.registerVariableGroupType("Swayyy.OfflineDataSyncConfiguration$outVars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnLogin",
attrName: "syncOnLoginOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
SwayyyController.default.clientActionProxies.offlineDataSyncConfiguration$Action = function () {
return controller.executeActionInsideJSNode(SwayyyController.default.offlineDataSyncConfiguration$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnOnlineOut, OS.Types.Boolean),
SyncOnLogin: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnLoginOut, OS.Types.Boolean),
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnResumeOut, OS.Types.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryOnErrorOut, OS.Types.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryIntervalInSecondsOut, OS.Types.Integer)
};
});
};
});

define("Swayyy.controller$TriggerOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "OutSystemsUI.controller", "Swayyy.clientVariables", "OutSystemsUI.controller$StartOfflineDataSync", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, SwayyyModel, SwayyyController, OutSystemsUIController, SwayyyClientVariables) {
var OS = OutSystems.Internal;
SwayyyController.default.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Swayyy.TriggerOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("yitqNfsvyEys0AJ2G3CcWg:ewY24h0Rok2TVMPjaBRz4g:/ClientActionFlows.ewY24h0Rok2TVMPjaBRz4g:yVL8Ui4NEag39G++wvv5gQ", "Swayyy", "TriggerOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:nwD+mAhpF0C5lbeoGhWn7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:9zjg8WmArkmExeOIJ+8uyQ", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action(vars.value.syncUnitInLocal, vars.value.discardPendingSyncUnitsInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("yitqNfsvyEys0AJ2G3CcWg:f3NRrVvFPkO4qaGalBP3Vw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("yitqNfsvyEys0AJ2G3CcWg:ewY24h0Rok2TVMPjaBRz4g", callContext.id);
}

};
var controller = SwayyyController.default;
SwayyyController.default.constructor.registerVariableGroupType("Swayyy.TriggerOfflineDataSync$vars", [{
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
SwayyyController.default.clientActionProxies.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(SwayyyController.default.triggerOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Swayyy.controller$ServerAction.ServerDataSync", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller"], function (exports, OutSystems, SwayyyModel, SwayyyController) {
var OS = OutSystems.Internal;
SwayyyController.default.serverDataSync$ServerAction = function (syncUnitIn, callContext) {
var controller = this.controller;
var inputs = {
SyncUnit: OS.DataConversion.ServerDataConverter.to(syncUnitIn, OS.Types.Text)
};
return controller.callServerAction("ServerDataSync", "screenservices/Swayyy/ActionServerDataSync", "SnHEsMVTuTHmpdlTypWAow", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
});
define("Swayyy.controller", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller$debugger"], function (exports, OutSystems, SwayyyModel, Swayyy_Controller_debugger) {
var OS = OutSystems.Internal;
var SwayyyController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {
Seller: {
roleKey: "yitqNfsvyEys0AJ2G3CcWg*C+E6Pn5th0qKrpHxAvHySw",
roleException: new OS.Exceptions.Exceptions.NotRegisteredException("Swayyy.NotSeller", "Seller role required")
},
Admin: {
roleKey: "yitqNfsvyEys0AJ2G3CcWg*ctVxWgjMB0WVCPiz_XHDzw",
roleException: new OS.Exceptions.Exceptions.NotRegisteredException("Swayyy.NotAdmin", "Admin role required")
}
};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return SwayyyController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
SwayyyController.default = new Controller();
});
define("Swayyy.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "Swayyy.clientVariables"], function (exports, Debugger, OutSystems, SwayyyClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"ohKLgVfudEO9WIjbR4IDJg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"ISb8Rf1h5kui7U4VaeJ4Qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnOnlineOut;
},
dataType: OS.Types.Boolean
},
"xCO9GsKcHEShU+X2TOlOFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnLoginOut;
},
dataType: OS.Types.Boolean
},
"5Qpcg_GuwE6Ynei0vKslOg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnResumeOut;
},
dataType: OS.Types.Boolean
},
"5IHHC5Ck6EWlngzbULlcXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryOnErrorOut;
},
dataType: OS.Types.Boolean
},
"n6dhnmBl802fr13DcvtUlw": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryIntervalInSecondsOut;
},
dataType: OS.Types.Integer
},
"a90n2WJUTU6syYn3y31SVA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"Aqrrh8UMfUa806dMfGJNCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.Types.Boolean
},
"tq9MyyBHA0yISC1r4+0W0g": {
getter: function (varBag, idService) {
return SwayyyClientVariables.getUsername();
},
dataType: OS.Types.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
