define("Swayyy.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.controller", "Swayyy.Common.controller", "Swayyy.clientVariables", "Swayyy.MainFlow.controller$debugger"], function (exports, OutSystems, SwayyyModel, SwayyyController, Swayyy_CommonController, SwayyyClientVariables, Swayyy_MainFlow_Controller_debugger) {
var OS = OutSystems.Internal;
var Swayyy_MainFlowController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return SwayyyController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.trace("MainFlow", OS.Exceptions.getMessage(ex), ex.name);
return Swayyy_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
Swayyy_MainFlowController.default = new Controller();
});

define("Swayyy.MainFlow.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
