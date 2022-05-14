define("Swayyy.model$OptionalStaticMapConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalStaticMapConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsRecord = (function (_super) {
__extends(OptionalStaticMapConfigsRecord, _super);
function OptionalStaticMapConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalStaticMapConfigs", "optionalStaticMapConfigsAttr", "OptionalStaticMapConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalStaticMapConfigsRec());
}, true, OutSystemsMapsModel.OptionalStaticMapConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalStaticMapConfigsRecord.fromStructure = function (str) {
return new OptionalStaticMapConfigsRecord(new OptionalStaticMapConfigsRecord.RecordClass({
optionalStaticMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalStaticMapConfigsRecord._isAnonymousRecord = true;
OptionalStaticMapConfigsRecord.UniqueId = "003de765-2ef7-0684-ee40-ecb9c31ff117";
OptionalStaticMapConfigsRecord.init();
return OptionalStaticMapConfigsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.OptionalStaticMapConfigsRecord = OptionalStaticMapConfigsRecord;

});
define("Swayyy.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SpaceRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpaceRec());
}, true, OutSystemsUIModel.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.SpaceRecord = SpaceRecord;

});
define("Swayyy.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$SpaceRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = SwayyyModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SpaceRecordList = SpaceRecordList;

});
define("Swayyy.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$OrientationRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUIModel.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OrientationList = OrientationList;

});
define("Swayyy.model$OptionalMapConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalMapConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsRecord = (function (_super) {
__extends(OptionalMapConfigsRecord, _super);
function OptionalMapConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalMapConfigs", "optionalMapConfigsAttr", "OptionalMapConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalMapConfigsRec());
}, true, OutSystemsMapsModel.OptionalMapConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalMapConfigsRecord.fromStructure = function (str) {
return new OptionalMapConfigsRecord(new OptionalMapConfigsRecord.RecordClass({
optionalMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalMapConfigsRecord._isAnonymousRecord = true;
OptionalMapConfigsRecord.UniqueId = "d761bc5f-1b0f-e2de-bf1c-3edffd0efd3c";
OptionalMapConfigsRecord.init();
return OptionalMapConfigsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.OptionalMapConfigsRecord = OptionalMapConfigsRecord;

});
define("Swayyy.model$OptionalMapConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$OptionalMapConfigsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsRecordList = (function (_super) {
__extends(OptionalMapConfigsRecordList, _super);
function OptionalMapConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsRecordList.itemType = SwayyyModel.OptionalMapConfigsRecord;
return OptionalMapConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalMapConfigsRecordList = OptionalMapConfigsRecordList;

});
define("Swayyy.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DirectionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DirectionRecord = (function (_super) {
__extends(DirectionRecord, _super);
function DirectionRecord(defaults) {
_super.apply(this, arguments);
}
DirectionRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DirectionRec());
}, true, OutSystemsUIModel.DirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRecord.fromStructure = function (str) {
return new DirectionRecord(new DirectionRecord.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectionRecord._isAnonymousRecord = true;
DirectionRecord.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
DirectionRecord.init();
return DirectionRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.DirectionRecord = DirectionRecord;

});
define("Swayyy.model$StyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$StyleRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StyleList = (function (_super) {
__extends(StyleList, _super);
function StyleList(defaults) {
_super.apply(this, arguments);
}
StyleList.itemType = OutSystemsMapsModel.StyleRec;
return StyleList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StyleList = StyleList;

});
define("Swayyy.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ShapeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ShapeRecord = (function (_super) {
__extends(ShapeRecord, _super);
function ShapeRecord(defaults) {
_super.apply(this, arguments);
}
ShapeRecord.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ShapeRec());
}, true, OutSystemsUIModel.ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRecord.fromStructure = function (str) {
return new ShapeRecord(new ShapeRecord.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShapeRecord._isAnonymousRecord = true;
ShapeRecord.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
ShapeRecord.init();
return ShapeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ShapeRecord = ShapeRecord;

});
define("Swayyy.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$BulkActionsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUIModel.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.BulkActionsList = BulkActionsList;

});
define("Swayyy.model$MarkerClustererList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerClustererRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerClustererList = (function (_super) {
__extends(MarkerClustererList, _super);
function MarkerClustererList(defaults) {
_super.apply(this, arguments);
}
MarkerClustererList.itemType = OutSystemsMapsModel.MarkerClustererRec;
return MarkerClustererList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerClustererList = MarkerClustererList;

});
define("Swayyy.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$StepsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StepsRec());
}, true, OutSystemsUIModel.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.StepsRecord = StepsRecord;

});
define("Swayyy.model$LoginAttemptResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "Swayyy.model", "Users.model$LoginAttemptResultRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$Users"], function (exports, OutSystems, UsersModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultRecord = (function (_super) {
__extends(LoginAttemptResultRecord, _super);
function LoginAttemptResultRecord(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultRecord.attributesToDeclare = function () {
return [
this.attr("LoginAttemptResult", "loginAttemptResultAttr", "LoginAttemptResult", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.LoginAttemptResultRec());
}, true, UsersModel.LoginAttemptResultRec)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptResultRecord.fromStructure = function (str) {
return new LoginAttemptResultRecord(new LoginAttemptResultRecord.RecordClass({
loginAttemptResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoginAttemptResultRecord._isAnonymousRecord = true;
LoginAttemptResultRecord.UniqueId = "1310d7a6-3cee-d4d1-094e-f97bea66e945";
LoginAttemptResultRecord.init();
return LoginAttemptResultRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.LoginAttemptResultRecord = LoginAttemptResultRecord;

});
define("Swayyy.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AnimationTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AnimationTypeRec());
}, true, OutSystemsUIModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("Swayyy.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AnimationTypeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = SwayyyModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("Swayyy.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SpaceRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SpaceList = SpaceList;

});
define("Swayyy.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DeviceResponsiveRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecord = (function (_super) {
__extends(DeviceResponsiveRecord, _super);
function DeviceResponsiveRecord(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecord.attributesToDeclare = function () {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceResponsiveRec());
}, true, OutSystemsUIModel.DeviceResponsiveRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRecord.fromStructure = function (str) {
return new DeviceResponsiveRecord(new DeviceResponsiveRecord.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceResponsiveRecord._isAnonymousRecord = true;
DeviceResponsiveRecord.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
DeviceResponsiveRecord.init();
return DeviceResponsiveRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("Swayyy.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$OrientationRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OrientationRecord = (function (_super) {
__extends(OrientationRecord, _super);
function OrientationRecord(defaults) {
_super.apply(this, arguments);
}
OrientationRecord.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.OrientationRec());
}, true, OutSystemsUIModel.OrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRecord.fromStructure = function (str) {
return new OrientationRecord(new OrientationRecord.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRecord._isAnonymousRecord = true;
OrientationRecord.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
OrientationRecord.init();
return OrientationRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.OrientationRecord = OrientationRecord;

});
define("Swayyy.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$OrientationRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = SwayyyModel.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OrientationRecordList = OrientationRecordList;

});
define("Swayyy.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$TriggerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUIModel.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.TriggerList = TriggerList;

});
define("Swayyy.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AutoplayRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AutoplayRec());
}, true, OutSystemsUIModel.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AutoplayRecord = AutoplayRecord;

});
define("Swayyy.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AutoplayRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = SwayyyModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AutoplayRecordList = AutoplayRecordList;

});
define("Swayyy.model$StyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$StyleRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StyleRecord = (function (_super) {
__extends(StyleRecord, _super);
function StyleRecord(defaults) {
_super.apply(this, arguments);
}
StyleRecord.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.StyleRec());
}, true, OutSystemsMapsModel.StyleRec)
].concat(_super.attributesToDeclare.call(this));
};
StyleRecord.fromStructure = function (str) {
return new StyleRecord(new StyleRecord.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StyleRecord._isAnonymousRecord = true;
StyleRecord.UniqueId = "97843bcb-5214-6db1-681d-fc816cff70a0";
StyleRecord.init();
return StyleRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.StyleRecord = StyleRecord;

});
define("Swayyy.model$StyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$StyleRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var StyleRecordList = (function (_super) {
__extends(StyleRecordList, _super);
function StyleRecordList(defaults) {
_super.apply(this, arguments);
}
StyleRecordList.itemType = SwayyyModel.StyleRecord;
return StyleRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StyleRecordList = StyleRecordList;

});
define("Swayyy.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$LegendPositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LegendPositionRecord = (function (_super) {
__extends(LegendPositionRecord, _super);
function LegendPositionRecord(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecord.attributesToDeclare = function () {
return [
this.attr("LegendPosition", "legendPositionAttr", "LegendPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendPositionRec());
}, true, OutSystemsChartsModel.LegendPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRecord.fromStructure = function (str) {
return new LegendPositionRecord(new LegendPositionRecord.RecordClass({
legendPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPositionRecord._isAnonymousRecord = true;
LegendPositionRecord.UniqueId = "d2362d0d-0bb3-6623-a5f0-020a47954dfc";
LegendPositionRecord.init();
return LegendPositionRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.LegendPositionRecord = LegendPositionRecord;

});
define("Swayyy.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$LegendPositionRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = SwayyyModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("Swayyy.model$ProductsRec", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ProductsRec = (function (_super) {
__extends(ProductsRec, _super);
function ProductsRec(defaults) {
_super.apply(this, arguments);
}
ProductsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Price", "priceAttr", "Price", false, false, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProductsRec.init();
return ProductsRec;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ProductsRec = ProductsRec;

});
define("Swayyy.model$ProductsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ProductsRec"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ProductsRecord = (function (_super) {
__extends(ProductsRecord, _super);
function ProductsRecord(defaults) {
_super.apply(this, arguments);
}
ProductsRecord.attributesToDeclare = function () {
return [
this.attr("Products", "productsAttr", "Products", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SwayyyModel.ProductsRec());
}, true, SwayyyModel.ProductsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProductsRecord.fromStructure = function (str) {
return new ProductsRecord(new ProductsRecord.RecordClass({
productsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProductsRecord._isAnonymousRecord = true;
ProductsRecord.UniqueId = "25cced40-8377-3cf7-5b70-cfb024048d84";
ProductsRecord.init();
return ProductsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ProductsRecord = ProductsRecord;

});
define("Swayyy.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$BulkActionsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var BulkActionsRecord = (function (_super) {
__extends(BulkActionsRecord, _super);
function BulkActionsRecord(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecord.attributesToDeclare = function () {
return [
this.attr("BulkActions", "bulkActionsAttr", "BulkActions", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BulkActionsRec());
}, true, OutSystemsUIModel.BulkActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRecord.fromStructure = function (str) {
return new BulkActionsRecord(new BulkActionsRecord.RecordClass({
bulkActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRecord._isAnonymousRecord = true;
BulkActionsRecord.UniqueId = "dedbf5dd-d64a-7345-04bf-3fd84b1363ec";
BulkActionsRecord.init();
return BulkActionsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.BulkActionsRecord = BulkActionsRecord;

});
define("Swayyy.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$BulkActionsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = SwayyyModel.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.BulkActionsRecordList = BulkActionsRecordList;

});
define("Swayyy.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$BreakColumnsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BreakColumnsRec());
}, true, OutSystemsUIModel.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("Swayyy.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SizeRecord = (function (_super) {
__extends(SizeRecord, _super);
function SizeRecord(defaults) {
_super.apply(this, arguments);
}
SizeRecord.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SizeRec());
}, true, OutSystemsUIModel.SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeRecord.fromStructure = function (str) {
return new SizeRecord(new SizeRecord.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRecord._isAnonymousRecord = true;
SizeRecord.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
SizeRecord.init();
return SizeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.SizeRecord = SizeRecord;

});
define("Swayyy.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$SizeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = SwayyyModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SizeRecordList = SizeRecordList;

});
define("Swayyy.model$GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Swayyy.model", "ServiceCenter.model$GroupRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SwayyyModel) {
var OS = OutSystems.Internal;
var GroupRecord = (function (_super) {
__extends(GroupRecord, _super);
function GroupRecord(defaults) {
_super.apply(this, arguments);
}
GroupRecord.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.GroupRec());
}, true, ServiceCenterModel.GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupRecord.fromStructure = function (str) {
return new GroupRecord(new GroupRecord.RecordClass({
groupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRecord._isAnonymousRecord = true;
GroupRecord.UniqueId = "28b11f0a-0807-5ef7-202d-92b33deb5c79";
GroupRecord.init();
return GroupRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.GroupRecord = GroupRecord;

});
define("Swayyy.model$GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$GroupRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var GroupRecordList = (function (_super) {
__extends(GroupRecordList, _super);
function GroupRecordList(defaults) {
_super.apply(this, arguments);
}
GroupRecordList.itemType = SwayyyModel.GroupRecord;
return GroupRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.GroupRecordList = GroupRecordList;

});
define("Swayyy.model$ChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$ChartFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ChartFormatRecord = (function (_super) {
__extends(ChartFormatRecord, _super);
function ChartFormatRecord(defaults) {
_super.apply(this, arguments);
}
ChartFormatRecord.attributesToDeclare = function () {
return [
this.attr("ChartFormat", "chartFormatAttr", "ChartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartFormatRec());
}, true, OutSystemsChartsModel.ChartFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartFormatRecord.fromStructure = function (str) {
return new ChartFormatRecord(new ChartFormatRecord.RecordClass({
chartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartFormatRecord._isAnonymousRecord = true;
ChartFormatRecord.UniqueId = "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53";
ChartFormatRecord.init();
return ChartFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ChartFormatRecord = ChartFormatRecord;

});
define("Swayyy.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$MessageStatusRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MessageStatusRec());
}, true, OutSystemsUIModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MessageStatusRecord = MessageStatusRecord;

});
define("Swayyy.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MessageStatusRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = SwayyyModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("Swayyy.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$MenuActionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MenuActionRec());
}, true, OutSystemsUIModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MenuActionRecord = MenuActionRecord;

});
define("Swayyy.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MenuActionRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = SwayyyModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MenuActionRecordList = MenuActionRecordList;

});
define("Swayyy.model$StaticMarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$StaticMarkerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StaticMarkerRecord = (function (_super) {
__extends(StaticMarkerRecord, _super);
function StaticMarkerRecord(defaults) {
_super.apply(this, arguments);
}
StaticMarkerRecord.attributesToDeclare = function () {
return [
this.attr("StaticMarker", "staticMarkerAttr", "StaticMarker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.StaticMarkerRec());
}, true, OutSystemsMapsModel.StaticMarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
StaticMarkerRecord.fromStructure = function (str) {
return new StaticMarkerRecord(new StaticMarkerRecord.RecordClass({
staticMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StaticMarkerRecord._isAnonymousRecord = true;
StaticMarkerRecord.UniqueId = "2e794e99-5064-8fb7-8174-0aa3223ba10d";
StaticMarkerRecord.init();
return StaticMarkerRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.StaticMarkerRecord = StaticMarkerRecord;

});
define("Swayyy.model$XAxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$XAxisValuesTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRecord = (function (_super) {
__extends(XAxisValuesTypeRecord, _super);
function XAxisValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("XAxisValuesType", "xAxisValuesTypeAttr", "XAxisValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisValuesTypeRec());
}, true, OutSystemsChartsModel.XAxisValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisValuesTypeRecord.fromStructure = function (str) {
return new XAxisValuesTypeRecord(new XAxisValuesTypeRecord.RecordClass({
xAxisValuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisValuesTypeRecord._isAnonymousRecord = true;
XAxisValuesTypeRecord.UniqueId = "700a042c-18a5-2538-bbda-09226917700a";
XAxisValuesTypeRecord.init();
return XAxisValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.XAxisValuesTypeRecord = XAxisValuesTypeRecord;

});
define("Swayyy.model$XAxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$XAxisValuesTypeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeRecordList = (function (_super) {
__extends(XAxisValuesTypeRecordList, _super);
function XAxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeRecordList.itemType = SwayyyModel.XAxisValuesTypeRecord;
return XAxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.XAxisValuesTypeRecordList = XAxisValuesTypeRecordList;

});
define("Swayyy.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$StackedCardsPositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("Swayyy.model$ZoomList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$ZoomRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ZoomList = (function (_super) {
__extends(ZoomList, _super);
function ZoomList(defaults) {
_super.apply(this, arguments);
}
ZoomList.itemType = OutSystemsMapsModel.ZoomRec;
return ZoomList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ZoomList = ZoomList;

});
define("Swayyy.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$StackingTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StackingTypeRecord = (function (_super) {
__extends(StackingTypeRecord, _super);
function StackingTypeRecord(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecord.attributesToDeclare = function () {
return [
this.attr("StackingType", "stackingTypeAttr", "StackingType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.StackingTypeRec());
}, true, OutSystemsChartsModel.StackingTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRecord.fromStructure = function (str) {
return new StackingTypeRecord(new StackingTypeRecord.RecordClass({
stackingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingTypeRecord._isAnonymousRecord = true;
StackingTypeRecord.UniqueId = "35e37489-cb29-f7a3-04d5-12a403000665";
StackingTypeRecord.init();
return StackingTypeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.StackingTypeRecord = StackingTypeRecord;

});
define("Swayyy.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ColumnBreakRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ColumnBreakList = ColumnBreakList;

});
define("Swayyy.model$MapErrorsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MapErrorsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MapErrorsList = (function (_super) {
__extends(MapErrorsList, _super);
function MapErrorsList(defaults) {
_super.apply(this, arguments);
}
MapErrorsList.itemType = OutSystemsMapsModel.MapErrorsRec;
return MapErrorsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MapErrorsList = MapErrorsList;

});
define("Swayyy.model$OffsetRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OffsetRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OffsetRecord = (function (_super) {
__extends(OffsetRecord, _super);
function OffsetRecord(defaults) {
_super.apply(this, arguments);
}
OffsetRecord.attributesToDeclare = function () {
return [
this.attr("Offset", "offsetAttr", "Offset", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OffsetRec());
}, true, OutSystemsMapsModel.OffsetRec)
].concat(_super.attributesToDeclare.call(this));
};
OffsetRecord.fromStructure = function (str) {
return new OffsetRecord(new OffsetRecord.RecordClass({
offsetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OffsetRecord._isAnonymousRecord = true;
OffsetRecord.UniqueId = "a3e0d021-78b0-78a9-60ae-427dd1751cbc";
OffsetRecord.init();
return OffsetRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.OffsetRecord = OffsetRecord;

});
define("Swayyy.model$OffsetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$OffsetRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var OffsetRecordList = (function (_super) {
__extends(OffsetRecordList, _super);
function OffsetRecordList(defaults) {
_super.apply(this, arguments);
}
OffsetRecordList.itemType = SwayyyModel.OffsetRecord;
return OffsetRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OffsetRecordList = OffsetRecordList;

});
define("Swayyy.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$StackingTypeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = SwayyyModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("Swayyy.model$MapErrorsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MapErrorsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MapErrorsRecord = (function (_super) {
__extends(MapErrorsRecord, _super);
function MapErrorsRecord(defaults) {
_super.apply(this, arguments);
}
MapErrorsRecord.attributesToDeclare = function () {
return [
this.attr("MapErrors", "mapErrorsAttr", "MapErrors", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MapErrorsRec());
}, true, OutSystemsMapsModel.MapErrorsRec)
].concat(_super.attributesToDeclare.call(this));
};
MapErrorsRecord.fromStructure = function (str) {
return new MapErrorsRecord(new MapErrorsRecord.RecordClass({
mapErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapErrorsRecord._isAnonymousRecord = true;
MapErrorsRecord.UniqueId = "3d151c63-adf1-37bd-3c85-eaa462bbbe0c";
MapErrorsRecord.init();
return MapErrorsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MapErrorsRecord = MapErrorsRecord;

});
define("Swayyy.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ScrollbarStyleRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecord = (function (_super) {
__extends(ScrollbarStyleRecord, _super);
function ScrollbarStyleRecord(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecord.attributesToDeclare = function () {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ScrollbarStyleRec());
}, true, OutSystemsUIModel.ScrollbarStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRecord.fromStructure = function (str) {
return new ScrollbarStyleRecord(new ScrollbarStyleRecord.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRecord._isAnonymousRecord = true;
ScrollbarStyleRecord.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
ScrollbarStyleRecord.init();
return ScrollbarStyleRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("Swayyy.model$IconSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$IconSizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var IconSizeList = (function (_super) {
__extends(IconSizeList, _super);
function IconSizeList(defaults) {
_super.apply(this, arguments);
}
IconSizeList.itemType = OutSystemsMapsModel.IconSizeRec;
return IconSizeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.IconSizeList = IconSizeList;

});
define("Swayyy.model$XAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$XAxisFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisFormatRecord = (function (_super) {
__extends(XAxisFormatRecord, _super);
function XAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("XAxisFormat", "xAxisFormatAttr", "XAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisFormatRec());
}, true, OutSystemsChartsModel.XAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisFormatRecord.fromStructure = function (str) {
return new XAxisFormatRecord(new XAxisFormatRecord.RecordClass({
xAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisFormatRecord._isAnonymousRecord = true;
XAxisFormatRecord.UniqueId = "424d57a2-d666-c8ed-b034-3600d6705eee";
XAxisFormatRecord.init();
return XAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.XAxisFormatRecord = XAxisFormatRecord;

});
define("Swayyy.model$ProductsList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ProductsRec"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ProductsList = (function (_super) {
__extends(ProductsList, _super);
function ProductsList(defaults) {
_super.apply(this, arguments);
}
ProductsList.itemType = SwayyyModel.ProductsRec;
return ProductsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ProductsList = ProductsList;

});
define("Swayyy.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$MenuActionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MenuActionList = MenuActionList;

});
define("Swayyy.model$ProductsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ProductsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ProductsRecordList = (function (_super) {
__extends(ProductsRecordList, _super);
function ProductsRecordList(defaults) {
_super.apply(this, arguments);
}
ProductsRecordList.itemType = SwayyyModel.ProductsRecord;
return ProductsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ProductsRecordList = ProductsRecordList;

});
define("Swayyy.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$BreakColumnsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = SwayyyModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("Swayyy.model$LoginAttemptPublicList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "Swayyy.model", "Users.model$LoginAttemptPublicRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$Users"], function (exports, OutSystems, UsersModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicList = (function (_super) {
__extends(LoginAttemptPublicList, _super);
function LoginAttemptPublicList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicList.itemType = UsersModel.LoginAttemptPublicRec;
return LoginAttemptPublicList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LoginAttemptPublicList = LoginAttemptPublicList;

});
define("Swayyy.model$ProductsUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "ServiceCenter.model", "Swayyy.model$ProductsRec", "ServiceCenter.model$UserRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$ServiceCenter"], function (exports, OutSystems, SwayyyModel, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ProductsUserRecord = (function (_super) {
__extends(ProductsUserRecord, _super);
function ProductsUserRecord(defaults) {
_super.apply(this, arguments);
}
ProductsUserRecord.attributesToDeclare = function () {
return [
this.attr("Products", "productsAttr", "Products", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SwayyyModel.ProductsRec());
}, true, SwayyyModel.ProductsRec), 
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
ProductsUserRecord._isAnonymousRecord = true;
ProductsUserRecord.UniqueId = "525f2389-4fa8-12d0-6305-0dabf9369b32";
ProductsUserRecord.init();
return ProductsUserRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ProductsUserRecord = ProductsUserRecord;

});
define("Swayyy.model$DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$DataPointRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.itemType = OutSystemsChartsModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DataPointList = DataPointList;

});
define("Swayyy.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ShapeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUIModel.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ShapeList = ShapeList;

});
define("Swayyy.model$MapEventTriggeredRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MapEventTriggeredRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredRecord = (function (_super) {
__extends(MapEventTriggeredRecord, _super);
function MapEventTriggeredRecord(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredRecord.attributesToDeclare = function () {
return [
this.attr("MapEventTriggered", "mapEventTriggeredAttr", "MapEventTriggered", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MapEventTriggeredRec());
}, true, OutSystemsMapsModel.MapEventTriggeredRec)
].concat(_super.attributesToDeclare.call(this));
};
MapEventTriggeredRecord.fromStructure = function (str) {
return new MapEventTriggeredRecord(new MapEventTriggeredRecord.RecordClass({
mapEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapEventTriggeredRecord._isAnonymousRecord = true;
MapEventTriggeredRecord.UniqueId = "bf75694d-8016-6881-34fa-555a2fd4f5d7";
MapEventTriggeredRecord.init();
return MapEventTriggeredRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MapEventTriggeredRecord = MapEventTriggeredRecord;

});
define("Swayyy.model$MapEventTriggeredRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MapEventTriggeredRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredRecordList = (function (_super) {
__extends(MapEventTriggeredRecordList, _super);
function MapEventTriggeredRecordList(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredRecordList.itemType = SwayyyModel.MapEventTriggeredRecord;
return MapEventTriggeredRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MapEventTriggeredRecordList = MapEventTriggeredRecordList;

});
define("Swayyy.model$CoordinatesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$CoordinatesRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var CoordinatesRecord = (function (_super) {
__extends(CoordinatesRecord, _super);
function CoordinatesRecord(defaults) {
_super.apply(this, arguments);
}
CoordinatesRecord.attributesToDeclare = function () {
return [
this.attr("Coordinates", "coordinatesAttr", "Coordinates", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.CoordinatesRec());
}, true, OutSystemsMapsModel.CoordinatesRec)
].concat(_super.attributesToDeclare.call(this));
};
CoordinatesRecord.fromStructure = function (str) {
return new CoordinatesRecord(new CoordinatesRecord.RecordClass({
coordinatesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinatesRecord._isAnonymousRecord = true;
CoordinatesRecord.UniqueId = "e3355f6b-7ba3-051c-4a4a-9a00634d68d0";
CoordinatesRecord.init();
return CoordinatesRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.CoordinatesRecord = CoordinatesRecord;

});
define("Swayyy.model$CoordinatesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$CoordinatesRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var CoordinatesRecordList = (function (_super) {
__extends(CoordinatesRecordList, _super);
function CoordinatesRecordList(defaults) {
_super.apply(this, arguments);
}
CoordinatesRecordList.itemType = SwayyyModel.CoordinatesRecord;
return CoordinatesRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.CoordinatesRecordList = CoordinatesRecordList;

});
define("Swayyy.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$StackingTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = OutSystemsChartsModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StackingTypeList = StackingTypeList;

});
define("Swayyy.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DropdownItemRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DropdownItemRecord = (function (_super) {
__extends(DropdownItemRecord, _super);
function DropdownItemRecord(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecord.attributesToDeclare = function () {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownItemRec());
}, true, OutSystemsUIModel.DropdownItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRecord.fromStructure = function (str) {
return new DropdownItemRecord(new DropdownItemRecord.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownItemRecord._isAnonymousRecord = true;
DropdownItemRecord.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
DropdownItemRecord.init();
return DropdownItemRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.DropdownItemRecord = DropdownItemRecord;

});
define("Swayyy.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$LegendPositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = OutSystemsChartsModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LegendPositionList = LegendPositionList;

});
define("Swayyy.model$LoginAttemptPublicRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "Swayyy.model", "Users.model$LoginAttemptPublicRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$Users"], function (exports, OutSystems, UsersModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicRecord = (function (_super) {
__extends(LoginAttemptPublicRecord, _super);
function LoginAttemptPublicRecord(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicRecord.attributesToDeclare = function () {
return [
this.attr("LoginAttemptPublic", "loginAttemptPublicAttr", "LoginAttemptPublic", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.LoginAttemptPublicRec());
}, true, UsersModel.LoginAttemptPublicRec)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptPublicRecord.fromStructure = function (str) {
return new LoginAttemptPublicRecord(new LoginAttemptPublicRecord.RecordClass({
loginAttemptPublicAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoginAttemptPublicRecord._isAnonymousRecord = true;
LoginAttemptPublicRecord.UniqueId = "57b978e1-84ee-1116-0844-e30676434be3";
LoginAttemptPublicRecord.init();
return LoginAttemptPublicRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.LoginAttemptPublicRecord = LoginAttemptPublicRecord;

});
define("Swayyy.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$PositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.PositionRec());
}, true, OutSystemsUIModel.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.PositionRecord = PositionRecord;

});
define("Swayyy.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$PositionRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = SwayyyModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.PositionRecordList = PositionRecordList;

});
define("Swayyy.model$OptionalStaticMapConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$OptionalStaticMapConfigsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsRecordList = (function (_super) {
__extends(OptionalStaticMapConfigsRecordList, _super);
function OptionalStaticMapConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsRecordList.itemType = SwayyyModel.OptionalStaticMapConfigsRecord;
return OptionalStaticMapConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalStaticMapConfigsRecordList = OptionalStaticMapConfigsRecordList;

});
define("Swayyy.model$MapErrorsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MapErrorsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MapErrorsRecordList = (function (_super) {
__extends(MapErrorsRecordList, _super);
function MapErrorsRecordList(defaults) {
_super.apply(this, arguments);
}
MapErrorsRecordList.itemType = SwayyyModel.MapErrorsRecord;
return MapErrorsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MapErrorsRecordList = MapErrorsRecordList;

});
define("Swayyy.model$OptionalStaticMapConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalStaticMapConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalStaticMapConfigsList = (function (_super) {
__extends(OptionalStaticMapConfigsList, _super);
function OptionalStaticMapConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalStaticMapConfigsList.itemType = OutSystemsMapsModel.OptionalStaticMapConfigsRec;
return OptionalStaticMapConfigsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalStaticMapConfigsList = OptionalStaticMapConfigsList;

});
define("Swayyy.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$TriggerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var TriggerRecord = (function (_super) {
__extends(TriggerRecord, _super);
function TriggerRecord(defaults) {
_super.apply(this, arguments);
}
TriggerRecord.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TriggerRec());
}, true, OutSystemsUIModel.TriggerRec)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRecord.fromStructure = function (str) {
return new TriggerRecord(new TriggerRecord.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRecord._isAnonymousRecord = true;
TriggerRecord.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
TriggerRecord.init();
return TriggerRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.TriggerRecord = TriggerRecord;

});
define("Swayyy.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$TriggerRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = SwayyyModel.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.TriggerRecordList = TriggerRecordList;

});
define("Swayyy.model$LoginAttemptPublicRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$LoginAttemptPublicRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicRecordList = (function (_super) {
__extends(LoginAttemptPublicRecordList, _super);
function LoginAttemptPublicRecordList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicRecordList.itemType = SwayyyModel.LoginAttemptPublicRecord;
return LoginAttemptPublicRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LoginAttemptPublicRecordList = LoginAttemptPublicRecordList;

});
define("Swayyy.model$AdvancedDataSeriesFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedDataSeriesFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRecord = (function (_super) {
__extends(AdvancedDataSeriesFormatRecord, _super);
function AdvancedDataSeriesFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedDataSeriesFormat", "advancedDataSeriesFormatAttr", "AdvancedDataSeriesFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AdvancedDataSeriesFormatRec());
}, true, OutSystemsChartsModel.AdvancedDataSeriesFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataSeriesFormatRecord.fromStructure = function (str) {
return new AdvancedDataSeriesFormatRecord(new AdvancedDataSeriesFormatRecord.RecordClass({
advancedDataSeriesFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedDataSeriesFormatRecord._isAnonymousRecord = true;
AdvancedDataSeriesFormatRecord.UniqueId = "e3eb1896-9a1d-0856-d6aa-6db7946dac4d";
AdvancedDataSeriesFormatRecord.init();
return AdvancedDataSeriesFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AdvancedDataSeriesFormatRecord = AdvancedDataSeriesFormatRecord;

});
define("Swayyy.model$AdvancedDataSeriesFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AdvancedDataSeriesFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatRecordList = (function (_super) {
__extends(AdvancedDataSeriesFormatRecordList, _super);
function AdvancedDataSeriesFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatRecordList.itemType = SwayyyModel.AdvancedDataSeriesFormatRecord;
return AdvancedDataSeriesFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedDataSeriesFormatRecordList = AdvancedDataSeriesFormatRecordList;

});
define("Swayyy.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$BreakColumnsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.BreakColumnsList = BreakColumnsList;

});
define("Swayyy.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ShapeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = SwayyyModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ShapeRecordList = ShapeRecordList;

});
define("Swayyy.model$DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$DataPointRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DataPointRecord = (function (_super) {
__extends(DataPointRecord, _super);
function DataPointRecord(defaults) {
_super.apply(this, arguments);
}
DataPointRecord.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.DataPointRec());
}, true, OutSystemsChartsModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRecord.fromStructure = function (str) {
return new DataPointRecord(new DataPointRecord.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPointRecord._isAnonymousRecord = true;
DataPointRecord.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
DataPointRecord.init();
return DataPointRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.DataPointRecord = DataPointRecord;

});
define("Swayyy.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DeviceConfigurationRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecord = (function (_super) {
__extends(DeviceConfigurationRecord, _super);
function DeviceConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceConfigurationRec());
}, true, OutSystemsUIModel.DeviceConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRecord.fromStructure = function (str) {
return new DeviceConfigurationRecord(new DeviceConfigurationRecord.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceConfigurationRecord._isAnonymousRecord = true;
DeviceConfigurationRecord.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
DeviceConfigurationRecord.init();
return DeviceConfigurationRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("Swayyy.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$DeviceConfigurationRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = SwayyyModel.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("Swayyy.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$MessageStatusRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MessageStatusList = MessageStatusList;

});
define("Swayyy.model$GroupList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Swayyy.model", "ServiceCenter.model$GroupRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SwayyyModel) {
var OS = OutSystems.Internal;
var GroupList = (function (_super) {
__extends(GroupList, _super);
function GroupList(defaults) {
_super.apply(this, arguments);
}
GroupList.itemType = ServiceCenterModel.GroupRec;
return GroupList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.GroupList = GroupList;

});
define("Swayyy.model$OptionalMarkerConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalMarkerConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsList = (function (_super) {
__extends(OptionalMarkerConfigsList, _super);
function OptionalMarkerConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsList.itemType = OutSystemsMapsModel.OptionalMarkerConfigsRec;
return OptionalMarkerConfigsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalMarkerConfigsList = OptionalMarkerConfigsList;

});
define("Swayyy.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$StackedCardsPositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StackedCardsPositionRec());
}, true, OutSystemsUIModel.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("Swayyy.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$StackedCardsPositionRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = SwayyyModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("Swayyy.model$OptionalMarkerConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalMarkerConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsRecord = (function (_super) {
__extends(OptionalMarkerConfigsRecord, _super);
function OptionalMarkerConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalMarkerConfigs", "optionalMarkerConfigsAttr", "OptionalMarkerConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.OptionalMarkerConfigsRec());
}, true, OutSystemsMapsModel.OptionalMarkerConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalMarkerConfigsRecord.fromStructure = function (str) {
return new OptionalMarkerConfigsRecord(new OptionalMarkerConfigsRecord.RecordClass({
optionalMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalMarkerConfigsRecord._isAnonymousRecord = true;
OptionalMarkerConfigsRecord.UniqueId = "c97612a2-7be8-5a55-32e2-b3b5ddfcfa27";
OptionalMarkerConfigsRecord.init();
return OptionalMarkerConfigsRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.OptionalMarkerConfigsRecord = OptionalMarkerConfigsRecord;

});
define("Swayyy.model$OptionalMarkerConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$OptionalMarkerConfigsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMarkerConfigsRecordList = (function (_super) {
__extends(OptionalMarkerConfigsRecordList, _super);
function OptionalMarkerConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalMarkerConfigsRecordList.itemType = SwayyyModel.OptionalMarkerConfigsRecord;
return OptionalMarkerConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalMarkerConfigsRecordList = OptionalMarkerConfigsRecordList;

});
define("Swayyy.model$DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$DataPointRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.itemType = SwayyyModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DataPointRecordList = DataPointRecordList;

});
define("Swayyy.model$MarkerEventTriggeredRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerEventTriggeredRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredRecord = (function (_super) {
__extends(MarkerEventTriggeredRecord, _super);
function MarkerEventTriggeredRecord(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredRecord.attributesToDeclare = function () {
return [
this.attr("MarkerEventTriggered", "markerEventTriggeredAttr", "MarkerEventTriggered", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerEventTriggeredRec());
}, true, OutSystemsMapsModel.MarkerEventTriggeredRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerEventTriggeredRecord.fromStructure = function (str) {
return new MarkerEventTriggeredRecord(new MarkerEventTriggeredRecord.RecordClass({
markerEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerEventTriggeredRecord._isAnonymousRecord = true;
MarkerEventTriggeredRecord.UniqueId = "d18425d8-0352-34c4-43ec-bdefa0da8210";
MarkerEventTriggeredRecord.init();
return MarkerEventTriggeredRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MarkerEventTriggeredRecord = MarkerEventTriggeredRecord;

});
define("Swayyy.model$MarkerEventTriggeredRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MarkerEventTriggeredRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredRecordList = (function (_super) {
__extends(MarkerEventTriggeredRecordList, _super);
function MarkerEventTriggeredRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredRecordList.itemType = SwayyyModel.MarkerEventTriggeredRecord;
return MarkerEventTriggeredRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerEventTriggeredRecordList = MarkerEventTriggeredRecordList;

});
define("Swayyy.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DirectionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUIModel.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DirectionList = DirectionList;

});
define("Swayyy.model$MarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerList = (function (_super) {
__extends(MarkerList, _super);
function MarkerList(defaults) {
_super.apply(this, arguments);
}
MarkerList.itemType = OutSystemsMapsModel.MarkerRec;
return MarkerList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerList = MarkerList;

});
define("Swayyy.model$AdvancedDataPointFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedDataPointFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatList = (function (_super) {
__extends(AdvancedDataPointFormatList, _super);
function AdvancedDataPointFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatList.itemType = OutSystemsChartsModel.AdvancedDataPointFormatRec;
return AdvancedDataPointFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedDataPointFormatList = AdvancedDataPointFormatList;

});
define("Swayyy.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$DeviceResponsiveRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = SwayyyModel.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("Swayyy.model$XAxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$XAxisValuesTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisValuesTypeList = (function (_super) {
__extends(XAxisValuesTypeList, _super);
function XAxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesTypeList.itemType = OutSystemsChartsModel.XAxisValuesTypeRec;
return XAxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.XAxisValuesTypeList = XAxisValuesTypeList;

});
define("Swayyy.model$StaticMarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$StaticMarkerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StaticMarkerList = (function (_super) {
__extends(StaticMarkerList, _super);
function StaticMarkerList(defaults) {
_super.apply(this, arguments);
}
StaticMarkerList.itemType = OutSystemsMapsModel.StaticMarkerRec;
return StaticMarkerList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StaticMarkerList = StaticMarkerList;

});
define("Swayyy.model$CoordinatesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$CoordinatesRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var CoordinatesList = (function (_super) {
__extends(CoordinatesList, _super);
function CoordinatesList(defaults) {
_super.apply(this, arguments);
}
CoordinatesList.itemType = OutSystemsMapsModel.CoordinatesRec;
return CoordinatesList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.CoordinatesList = CoordinatesList;

});
define("Swayyy.model$ZoomRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$ZoomRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ZoomRecord = (function (_super) {
__extends(ZoomRecord, _super);
function ZoomRecord(defaults) {
_super.apply(this, arguments);
}
ZoomRecord.attributesToDeclare = function () {
return [
this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ZoomRec());
}, true, OutSystemsMapsModel.ZoomRec)
].concat(_super.attributesToDeclare.call(this));
};
ZoomRecord.fromStructure = function (str) {
return new ZoomRecord(new ZoomRecord.RecordClass({
zoomAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ZoomRecord._isAnonymousRecord = true;
ZoomRecord.UniqueId = "80e81fdd-ca00-89d3-f29f-81106c0bee34";
ZoomRecord.init();
return ZoomRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ZoomRecord = ZoomRecord;

});
define("Swayyy.model$MarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerRecord = (function (_super) {
__extends(MarkerRecord, _super);
function MarkerRecord(defaults) {
_super.apply(this, arguments);
}
MarkerRecord.attributesToDeclare = function () {
return [
this.attr("Marker", "markerAttr", "Marker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerRec());
}, true, OutSystemsMapsModel.MarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerRecord.fromStructure = function (str) {
return new MarkerRecord(new MarkerRecord.RecordClass({
markerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerRecord._isAnonymousRecord = true;
MarkerRecord.UniqueId = "bff46e92-99d5-3c31-f521-81ed865bd729";
MarkerRecord.init();
return MarkerRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MarkerRecord = MarkerRecord;

});
define("Swayyy.model$MarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MarkerRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerRecordList = (function (_super) {
__extends(MarkerRecordList, _super);
function MarkerRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerRecordList.itemType = SwayyyModel.MarkerRecord;
return MarkerRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerRecordList = MarkerRecordList;

});
define("Swayyy.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Swayyy.model", "ServiceCenter.model$UserRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SwayyyModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.UserRecord = UserRecord;

});
define("Swayyy.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$UserRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = SwayyyModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.UserRecordList = UserRecordList;

});
define("Swayyy.model$AdvancedDataPointFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedDataPointFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRecord = (function (_super) {
__extends(AdvancedDataPointFormatRecord, _super);
function AdvancedDataPointFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedDataPointFormat", "advancedDataPointFormatAttr", "AdvancedDataPointFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AdvancedDataPointFormatRec());
}, true, OutSystemsChartsModel.AdvancedDataPointFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedDataPointFormatRecord.fromStructure = function (str) {
return new AdvancedDataPointFormatRecord(new AdvancedDataPointFormatRecord.RecordClass({
advancedDataPointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedDataPointFormatRecord._isAnonymousRecord = true;
AdvancedDataPointFormatRecord.UniqueId = "860a186f-93e9-fe7f-e0d4-2f4282c2ec00";
AdvancedDataPointFormatRecord.init();
return AdvancedDataPointFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AdvancedDataPointFormatRecord = AdvancedDataPointFormatRecord;

});
define("Swayyy.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ColorRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColorRec());
}, true, OutSystemsUIModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ColorRecord = ColorRecord;

});
define("Swayyy.model$XAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$XAxisFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisFormatRecordList = (function (_super) {
__extends(XAxisFormatRecordList, _super);
function XAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatRecordList.itemType = SwayyyModel.XAxisFormatRecord;
return XAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.XAxisFormatRecordList = XAxisFormatRecordList;

});
define("Swayyy.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUIModel.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SizeList = SizeList;

});
define("Swayyy.model$AdvancedDataSeriesFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedDataSeriesFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataSeriesFormatList = (function (_super) {
__extends(AdvancedDataSeriesFormatList, _super);
function AdvancedDataSeriesFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataSeriesFormatList.itemType = OutSystemsChartsModel.AdvancedDataSeriesFormatRec;
return AdvancedDataSeriesFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedDataSeriesFormatList = AdvancedDataSeriesFormatList;

});
define("Swayyy.model$AdvancedFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRecord = (function (_super) {
__extends(AdvancedFormatRecord, _super);
function AdvancedFormatRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedFormat", "advancedFormatAttr", "AdvancedFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AdvancedFormatRec());
}, true, OutSystemsChartsModel.AdvancedFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedFormatRecord.fromStructure = function (str) {
return new AdvancedFormatRecord(new AdvancedFormatRecord.RecordClass({
advancedFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedFormatRecord._isAnonymousRecord = true;
AdvancedFormatRecord.UniqueId = "8bd0ab07-a3f3-c2d2-a572-a84134c564bd";
AdvancedFormatRecord.init();
return AdvancedFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AdvancedFormatRecord = AdvancedFormatRecord;

});
define("Swayyy.model$ChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$ChartFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ChartFormatList = (function (_super) {
__extends(ChartFormatList, _super);
function ChartFormatList(defaults) {
_super.apply(this, arguments);
}
ChartFormatList.itemType = OutSystemsChartsModel.ChartFormatRec;
return ChartFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ChartFormatList = ChartFormatList;

});
define("Swayyy.model$ChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ChartFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ChartFormatRecordList = (function (_super) {
__extends(ChartFormatRecordList, _super);
function ChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
ChartFormatRecordList.itemType = SwayyyModel.ChartFormatRecord;
return ChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ChartFormatRecordList = ChartFormatRecordList;

});
define("Swayyy.model$YAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$YAxisFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var YAxisFormatRecord = (function (_super) {
__extends(YAxisFormatRecord, _super);
function YAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("YAxisFormat", "yAxisFormatAttr", "YAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisFormatRec());
}, true, OutSystemsChartsModel.YAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisFormatRecord.fromStructure = function (str) {
return new YAxisFormatRecord(new YAxisFormatRecord.RecordClass({
yAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisFormatRecord._isAnonymousRecord = true;
YAxisFormatRecord.UniqueId = "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10";
YAxisFormatRecord.init();
return YAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.YAxisFormatRecord = YAxisFormatRecord;

});
define("Swayyy.model$YAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$YAxisFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var YAxisFormatRecordList = (function (_super) {
__extends(YAxisFormatRecordList, _super);
function YAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatRecordList.itemType = SwayyyModel.YAxisFormatRecord;
return YAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.YAxisFormatRecordList = YAxisFormatRecordList;

});
define("Swayyy.model$AdvancedFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$AdvancedFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedFormatList = (function (_super) {
__extends(AdvancedFormatList, _super);
function AdvancedFormatList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatList.itemType = OutSystemsChartsModel.AdvancedFormatRec;
return AdvancedFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedFormatList = AdvancedFormatList;

});
define("Swayyy.model$LoginAttemptResultList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "Swayyy.model", "Users.model$LoginAttemptResultRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$Users"], function (exports, OutSystems, UsersModel, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultList = (function (_super) {
__extends(LoginAttemptResultList, _super);
function LoginAttemptResultList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultList.itemType = UsersModel.LoginAttemptResultRec;
return LoginAttemptResultList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LoginAttemptResultList = LoginAttemptResultList;

});
define("Swayyy.model$IconSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$IconSizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var IconSizeRecord = (function (_super) {
__extends(IconSizeRecord, _super);
function IconSizeRecord(defaults) {
_super.apply(this, arguments);
}
IconSizeRecord.attributesToDeclare = function () {
return [
this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.IconSizeRec());
}, true, OutSystemsMapsModel.IconSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
IconSizeRecord.fromStructure = function (str) {
return new IconSizeRecord(new IconSizeRecord.RecordClass({
iconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconSizeRecord._isAnonymousRecord = true;
IconSizeRecord.UniqueId = "96c340f5-ac62-0f54-6746-41c63eb91876";
IconSizeRecord.init();
return IconSizeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.IconSizeRecord = IconSizeRecord;

});
define("Swayyy.model$TypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$TypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var TypeList = (function (_super) {
__extends(TypeList, _super);
function TypeList(defaults) {
_super.apply(this, arguments);
}
TypeList.itemType = OutSystemsMapsModel.TypeRec;
return TypeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.TypeList = TypeList;

});
define("Swayyy.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AlertRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AlertRec());
}, true, OutSystemsUIModel.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.AlertRecord = AlertRecord;

});
define("Swayyy.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ColorRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = SwayyyModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ColorRecordList = ColorRecordList;

});
define("Swayyy.model$OptionalMapConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OptionalMapConfigsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OptionalMapConfigsList = (function (_super) {
__extends(OptionalMapConfigsList, _super);
function OptionalMapConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalMapConfigsList.itemType = OutSystemsMapsModel.OptionalMapConfigsRec;
return OptionalMapConfigsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OptionalMapConfigsList = OptionalMapConfigsList;

});
define("Swayyy.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AnimationTypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AnimationTypeList = AnimationTypeList;

});
define("Swayyy.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$GutterSizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GutterSizeRec());
}, true, OutSystemsUIModel.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.GutterSizeRecord = GutterSizeRecord;

});
define("Swayyy.model$MarkerClustererRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerClustererRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerClustererRecord = (function (_super) {
__extends(MarkerClustererRecord, _super);
function MarkerClustererRecord(defaults) {
_super.apply(this, arguments);
}
MarkerClustererRecord.attributesToDeclare = function () {
return [
this.attr("MarkerClusterer", "markerClustererAttr", "MarkerClusterer", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.MarkerClustererRec());
}, true, OutSystemsMapsModel.MarkerClustererRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerClustererRecord.fromStructure = function (str) {
return new MarkerClustererRecord(new MarkerClustererRecord.RecordClass({
markerClustererAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerClustererRecord._isAnonymousRecord = true;
MarkerClustererRecord.UniqueId = "d687bfbe-104d-1734-6737-149645109738";
MarkerClustererRecord.init();
return MarkerClustererRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.MarkerClustererRecord = MarkerClustererRecord;

});
define("Swayyy.model$MarkerClustererRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$MarkerClustererRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerClustererRecordList = (function (_super) {
__extends(MarkerClustererRecordList, _super);
function MarkerClustererRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerClustererRecordList.itemType = SwayyyModel.MarkerClustererRecord;
return MarkerClustererRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerClustererRecordList = MarkerClustererRecordList;

});
define("Swayyy.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AlertRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AlertList = AlertList;

});
define("Swayyy.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DeviceConfigurationRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUIModel.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DeviceConfigurationList = DeviceConfigurationList;

});
define("Swayyy.model$AdvancedDataPointFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AdvancedDataPointFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedDataPointFormatRecordList = (function (_super) {
__extends(AdvancedDataPointFormatRecordList, _super);
function AdvancedDataPointFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedDataPointFormatRecordList.itemType = SwayyyModel.AdvancedDataPointFormatRecord;
return AdvancedDataPointFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedDataPointFormatRecordList = AdvancedDataPointFormatRecordList;

});
define("Swayyy.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ColumnBreakRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColumnBreakRec());
}, true, OutSystemsUIModel.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("Swayyy.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ColumnBreakRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = SwayyyModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("Swayyy.model$TypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$TypeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var TypeRecord = (function (_super) {
__extends(TypeRecord, _super);
function TypeRecord(defaults) {
_super.apply(this, arguments);
}
TypeRecord.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.TypeRec());
}, true, OutSystemsMapsModel.TypeRec)
].concat(_super.attributesToDeclare.call(this));
};
TypeRecord.fromStructure = function (str) {
return new TypeRecord(new TypeRecord.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TypeRecord._isAnonymousRecord = true;
TypeRecord.UniqueId = "b32e755d-03dd-085a-4b97-5b8c0c7d4454";
TypeRecord.init();
return TypeRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.TypeRecord = TypeRecord;

});
define("Swayyy.model$LoginAttemptResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$LoginAttemptResultRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultRecordList = (function (_super) {
__extends(LoginAttemptResultRecordList, _super);
function LoginAttemptResultRecordList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultRecordList.itemType = SwayyyModel.LoginAttemptResultRecord;
return LoginAttemptResultRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.LoginAttemptResultRecordList = LoginAttemptResultRecordList;

});
define("Swayyy.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DropdownItemRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUIModel.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DropdownItemList = DropdownItemList;

});
define("Swayyy.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$StepsRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StepsList = StepsList;

});
define("Swayyy.model$ZoomRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ZoomRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ZoomRecordList = (function (_super) {
__extends(ZoomRecordList, _super);
function ZoomRecordList(defaults) {
_super.apply(this, arguments);
}
ZoomRecordList.itemType = SwayyyModel.ZoomRecord;
return ZoomRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ZoomRecordList = ZoomRecordList;

});
define("Swayyy.model$OffsetList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$OffsetRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var OffsetList = (function (_super) {
__extends(OffsetList, _super);
function OffsetList(defaults) {
_super.apply(this, arguments);
}
OffsetList.itemType = OutSystemsMapsModel.OffsetRec;
return OffsetList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.OffsetList = OffsetList;

});
define("Swayyy.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SpeedRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpeedRec());
}, true, OutSystemsUIModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.SpeedRecord = SpeedRecord;

});
define("Swayyy.model$TypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$TypeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var TypeRecordList = (function (_super) {
__extends(TypeRecordList, _super);
function TypeRecordList(defaults) {
_super.apply(this, arguments);
}
TypeRecordList.itemType = SwayyyModel.TypeRecord;
return TypeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.TypeRecordList = TypeRecordList;

});
define("Swayyy.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$DeviceResponsiveRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUIModel.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DeviceResponsiveList = DeviceResponsiveList;

});
define("Swayyy.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SideMenuBehaviorRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("Swayyy.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ColorRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ColorList = ColorList;

});
define("Swayyy.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$GutterSizeRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.GutterSizeList = GutterSizeList;

});
define("Swayyy.model$AdvancedFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AdvancedFormatRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AdvancedFormatRecordList = (function (_super) {
__extends(AdvancedFormatRecordList, _super);
function AdvancedFormatRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedFormatRecordList.itemType = SwayyyModel.AdvancedFormatRecord;
return AdvancedFormatRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AdvancedFormatRecordList = AdvancedFormatRecordList;

});
define("Swayyy.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$ScrollbarStyleRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUIModel.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ScrollbarStyleList = ScrollbarStyleList;

});
define("Swayyy.model$MapEventTriggeredList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MapEventTriggeredRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MapEventTriggeredList = (function (_super) {
__extends(MapEventTriggeredList, _super);
function MapEventTriggeredList(defaults) {
_super.apply(this, arguments);
}
MapEventTriggeredList.itemType = OutSystemsMapsModel.MapEventTriggeredRec;
return MapEventTriggeredList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MapEventTriggeredList = MapEventTriggeredList;

});
define("Swayyy.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$PositionRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.PositionList = PositionList;

});
define("Swayyy.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$DropdownItemRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = SwayyyModel.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DropdownItemRecordList = DropdownItemRecordList;

});
define("Swayyy.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$AutoplayRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AutoplayList = AutoplayList;

});
define("Swayyy.model$IconSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$IconSizeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var IconSizeRecordList = (function (_super) {
__extends(IconSizeRecordList, _super);
function IconSizeRecordList(defaults) {
_super.apply(this, arguments);
}
IconSizeRecordList.itemType = SwayyyModel.IconSizeRecord;
return IconSizeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.IconSizeRecordList = IconSizeRecordList;

});
define("Swayyy.model$XAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$XAxisFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var XAxisFormatList = (function (_super) {
__extends(XAxisFormatList, _super);
function XAxisFormatList(defaults) {
_super.apply(this, arguments);
}
XAxisFormatList.itemType = OutSystemsChartsModel.XAxisFormatRec;
return XAxisFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.XAxisFormatList = XAxisFormatList;

});
define("Swayyy.model$MarkerEventTriggeredList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsMaps.model", "Swayyy.model", "OutSystemsMaps.model$MarkerEventTriggeredRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsMaps"], function (exports, OutSystems, OutSystemsMapsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var MarkerEventTriggeredList = (function (_super) {
__extends(MarkerEventTriggeredList, _super);
function MarkerEventTriggeredList(defaults) {
_super.apply(this, arguments);
}
MarkerEventTriggeredList.itemType = OutSystemsMapsModel.MarkerEventTriggeredRec;
return MarkerEventTriggeredList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.MarkerEventTriggeredList = MarkerEventTriggeredList;

});
define("Swayyy.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SideMenuBehaviorRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SideMenuBehaviorRec());
}, true, OutSystemsUIModel.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
SwayyyModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("Swayyy.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "Swayyy.model", "OutSystemsUI.model$SpeedRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SwayyyModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SpeedList = SpeedList;

});
define("Swayyy.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$StepsRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = SwayyyModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StepsRecordList = StepsRecordList;

});
define("Swayyy.model$ProductsUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ProductsUserRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ProductsUserRecordList = (function (_super) {
__extends(ProductsUserRecordList, _super);
function ProductsUserRecordList(defaults) {
_super.apply(this, arguments);
}
ProductsUserRecordList.itemType = SwayyyModel.ProductsUserRecord;
return ProductsUserRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ProductsUserRecordList = ProductsUserRecordList;

});
define("Swayyy.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$GutterSizeRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = SwayyyModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("Swayyy.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$SideMenuBehaviorRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = SwayyyModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("Swayyy.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Swayyy.model", "ServiceCenter.model$UserRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SwayyyModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.UserList = UserList;

});
define("Swayyy.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$AlertRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = SwayyyModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.AlertRecordList = AlertRecordList;

});
define("Swayyy.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$SpeedRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = SwayyyModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.SpeedRecordList = SpeedRecordList;

});
define("Swayyy.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$DirectionRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = SwayyyModel.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.DirectionRecordList = DirectionRecordList;

});
define("Swayyy.model$YAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "Swayyy.model", "OutSystemsCharts.model$YAxisFormatRec", "Swayyy.referencesHealth", "Swayyy.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, SwayyyModel) {
var OS = OutSystems.Internal;
var YAxisFormatList = (function (_super) {
__extends(YAxisFormatList, _super);
function YAxisFormatList(defaults) {
_super.apply(this, arguments);
}
YAxisFormatList.itemType = OutSystemsChartsModel.YAxisFormatRec;
return YAxisFormatList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.YAxisFormatList = YAxisFormatList;

});
define("Swayyy.model$StaticMarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$StaticMarkerRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var StaticMarkerRecordList = (function (_super) {
__extends(StaticMarkerRecordList, _super);
function StaticMarkerRecordList(defaults) {
_super.apply(this, arguments);
}
StaticMarkerRecordList.itemType = SwayyyModel.StaticMarkerRecord;
return StaticMarkerRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.StaticMarkerRecordList = StaticMarkerRecordList;

});
define("Swayyy.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Swayyy.model", "Swayyy.model$ScrollbarStyleRecord"], function (exports, OutSystems, SwayyyModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = SwayyyModel.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
SwayyyModel.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("Swayyy.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var SwayyyModel = exports;
Object.defineProperty(SwayyyModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["356a2bca-2ffb-4cc8-acd0-02761b709c5a"];
}
});

SwayyyModel.staticEntities = {};
SwayyyModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("5a048369-2987-4af5-b052-ab363ac4b748"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.stackingType, "noStacking", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("b664d44a-e707-43cc-b782-cc4fd9c3ce8a"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.stackingType, "stacked", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingTypeRecord("f5816dfa-da3b-4031-aa5f-06a7a08dcc94"));
}
});

SwayyyModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "bottom", {
get: function () {
return getLegendPositionRecord("24063cd8-b015-4fb7-8ceb-c4cf65110444");
}
});

Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "right", {
get: function () {
return getLegendPositionRecord("2c2e4610-d5b5-4738-9474-83ca4e40f33b");
}
});

Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "inside", {
get: function () {
return getLegendPositionRecord("33fda788-9eba-426b-be1d-284323c6ae2a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "left", {
get: function () {
return getLegendPositionRecord("5314c097-85bd-407c-84f9-f0ebd17b75ce");
}
});

Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "hidden", {
get: function () {
return getLegendPositionRecord("6519bee3-d71b-41ae-8e57-a377f8aaa6c3");
}
});

Object.defineProperty(SwayyyModel.staticEntities.legendPosition, "top", {
get: function () {
return getLegendPositionRecord("e0495156-d508-4fc2-a3ed-77a194c65b49");
}
});

SwayyyModel.staticEntities.xAxisValuesType = {};
var getXAxisValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.xAxisValuesType, "text", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("31d40404-1f4d-4f1a-8c04-aa7377da778a"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.xAxisValuesType, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesTypeRecord("6599ec19-4160-4794-81cd-6ba06b0bb84d"));
}
});

SwayyyModel.staticEntities.loginAttemptResult = {};
var getLoginAttemptResultRecord = function (record) {
return OS.ApplicationInfo.getModules()["65106059-0439-4be5-b011-2f01fba4afa6"].staticEntities["4737ce47-7567-4848-b570-0a248fcd7e26"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "invalidLDAPAuthentication", {
get: function () {
return getLoginAttemptResultRecord("04f8717d-96dc-45c5-b213-cbd7ab2a4bed");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "blockedIP", {
get: function () {
return getLoginAttemptResultRecord("0502c326-3023-44c0-b9d2-23cd02e44056");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "unblocked", {
get: function () {
return getLoginAttemptResultRecord("1718bad5-6ab3-48fd-8c86-2adeb45c1bd1");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "loggedIn", {
get: function () {
return getLoginAttemptResultRecord("17834aea-828f-44b0-bc3a-98ea229badb1");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "blockedUser", {
get: function () {
return getLoginAttemptResultRecord("6ad2be72-f42d-4e94-a5de-10e55b15738d");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "invalidADAuthentication", {
get: function () {
return getLoginAttemptResultRecord("bf569f28-590b-411b-9324-b870f5e92358");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "invalidUser", {
get: function () {
return getLoginAttemptResultRecord("c26ce883-4f22-4b81-96fd-428473e22b90");
}
});

Object.defineProperty(SwayyyModel.staticEntities.loginAttemptResult, "invalidPassword", {
get: function () {
return getLoginAttemptResultRecord("fb457f23-8cb1-44b9-9dc9-95d550e320c2");
}
});

SwayyyModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(SwayyyModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

SwayyyModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(SwayyyModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(SwayyyModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

SwayyyModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(SwayyyModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

SwayyyModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(SwayyyModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

SwayyyModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(SwayyyModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

SwayyyModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(SwayyyModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

SwayyyModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

SwayyyModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(SwayyyModel.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

SwayyyModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(SwayyyModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(SwayyyModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(SwayyyModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(SwayyyModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

SwayyyModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(SwayyyModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(SwayyyModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

SwayyyModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(SwayyyModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(SwayyyModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

SwayyyModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(SwayyyModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(SwayyyModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(SwayyyModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

SwayyyModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(SwayyyModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

SwayyyModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(SwayyyModel.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

SwayyyModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(SwayyyModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

SwayyyModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(SwayyyModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(SwayyyModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(SwayyyModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

SwayyyModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(SwayyyModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(SwayyyModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(SwayyyModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

SwayyyModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(SwayyyModel.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(SwayyyModel.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

SwayyyModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(SwayyyModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

SwayyyModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(SwayyyModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

SwayyyModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(SwayyyModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(SwayyyModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(SwayyyModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(SwayyyModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

SwayyyModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(SwayyyModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(SwayyyModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

SwayyyModel.staticEntities.mapErrors = {};
var getMapErrorsRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["0ae015e4-c953-4e33-aec0-91674d05cbf5"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_CantChangeParamsStaticMap", {
get: function () {
return getMapErrorsRecord("09d03a9d-1fe9-47a1-9c96-ae495fc2ea1c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_ToolTypeAlreadyExists", {
get: function () {
return getMapErrorsRecord("0e40e3aa-77f3-4a91-bf51-8c9dc1db4202");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedGettingShapeRadius", {
get: function () {
return getMapErrorsRecord("0ef2906b-3c8a-459e-9c6a-12cf051eda08");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletShapeLocations", {
get: function () {
return getMapErrorsRecord("0f420495-ba64-4ee9-9dd7-45e95c205b30");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedSetDirections", {
get: function () {
return getMapErrorsRecord("1032db4b-ea57-4b0c-b144-4cbfb5194cc2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingMarker", {
get: function () {
return getMapErrorsRecord("191ac9c8-e152-47b1-b7e8-b9168a13437e");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedNoPluginDirections", {
get: function () {
return getMapErrorsRecord("1d180614-c899-4db7-a0f1-c4a539fcaa51");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetStaticMap", {
get: function () {
return getMapErrorsRecord("20021e6b-0a48-4dd9-888d-1f14c04beb0f");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_APIKeyDiffersFromPlacesToMaps", {
get: function () {
return getMapErrorsRecord("320ab836-3535-4abe-9e87-c767f9732b81");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_InvalidApiKeyStaticMap", {
get: function () {
return getMapErrorsRecord("44814882-6e55-4bc8-b1df-103bad3b1f7d");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMarker", {
get: function () {
return getMapErrorsRecord("4a79db0e-742c-40ba-b922-d0e24f35fe48");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyShape", {
get: function () {
return getMapErrorsRecord("52e4db88-8138-4067-b7e7-24850be42b1d");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_UnsupportedEventShape", {
get: function () {
return getMapErrorsRecord("5b68fb2b-52b5-4027-a92c-897aca15e60b");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_UnsupportedEventMap", {
get: function () {
return getMapErrorsRecord("64571e58-b584-45fc-9eb5-414e0f0b17ec");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_UnsupportedEventDrawingTools", {
get: function () {
return getMapErrorsRecord("74dd6710-acd4-4d7e-938a-a5abf23b2651");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMap", {
get: function () {
return getMapErrorsRecord("7ead0618-070c-41d2-9d20-abb934968c46");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_InvalidCircleShapeCenter", {
get: function () {
return getMapErrorsRecord("84c1783e-1289-404d-a86e-586cfe03a7d2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyDrawingTools", {
get: function () {
return getMapErrorsRecord("891e6401-f79b-4209-9347-dd09e4c4ba72");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyHeatmapLayer", {
get: function () {
return getMapErrorsRecord("8c3bd246-dde0-4413-ab91-4468070ca5c0");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarker", {
get: function () {
return getMapErrorsRecord("913849da-ebf6-477b-a2b7-1ee326a24381");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_InvalidPolylineShapeLocations", {
get: function () {
return getMapErrorsRecord("92aa1053-dd58-44d2-8767-2fa31ba2f80c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedRemoveDirections", {
get: function () {
return getMapErrorsRecord("a60723a0-5616-4929-8294-3b3c20873a06");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_InvalidRectangleShapeBounds", {
get: function () {
return getMapErrorsRecord("a74fc048-d9a5-48d5-a513-4bf617ff41ba");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingShapeLocations", {
get: function () {
return getMapErrorsRecord("a95a6dfb-02de-4610-9e8b-eaaafe1ca86c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedGettingShapePath", {
get: function () {
return getMapErrorsRecord("ac51ab48-0161-4f1c-8e04-80efdf6c1843");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyTools", {
get: function () {
return getMapErrorsRecord("ae1a5069-a717-4c71-a510-e347c127349e");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedGettingShapeCenter", {
get: function () {
return getMapErrorsRecord("b20b246b-b6a8-415f-adab-ca62b8710a61");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetMap", {
get: function () {
return getMapErrorsRecord("b44edea5-2098-4096-a014-d4579b537ec7");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_UnsupportedEventMarker", {
get: function () {
return getMapErrorsRecord("c2e353b8-dd23-48c7-8da1-307721b9b6db");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedGettingCircleShape", {
get: function () {
return getMapErrorsRecord("c2f749ad-3086-481f-a520-c21be80de363");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarkerClusterer", {
get: function () {
return getMapErrorsRecord("c86a9e24-d224-4a77-847c-a7f14924a3f8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_NoPluginDirectionsNeeded", {
get: function () {
return getMapErrorsRecord("ca7ac0b9-0a8b-4f7b-9759-87d11aa633df");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_InvalidPolygonShapeLocations", {
get: function () {
return getMapErrorsRecord("d56e484a-e250-4c5a-8038-b4050c8c9814");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_InvalidApiKeyMap", {
get: function () {
return getMapErrorsRecord("d5f27ed6-0558-44b6-a454-7104c5474008");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingMap", {
get: function () {
return getMapErrorsRecord("dc339eb1-ac70-4fb9-a179-cedd489b8f1b");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "cFG_InvalidTravelMode", {
get: function () {
return getMapErrorsRecord("e4c42d6f-8178-4c8f-8d4f-dd4012f32ee9");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMap", {
get: function () {
return getMapErrorsRecord("e94cc952-b1b6-494f-908c-5b137906a8d2");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyFileLayer", {
get: function () {
return getMapErrorsRecord("efdb6b11-c418-4b00-9702-24a49da08ead");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapErrors, "aPI_FailedLoadingPlugin", {
get: function () {
return getMapErrorsRecord("ff3ea0fa-1945-46cc-8ffe-7876054be930");
}
});

SwayyyModel.staticEntities.type = {};
var getTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["321464c3-cb26-412f-b60a-1c7140dc8c1b"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.type, "hybrid", {
get: function () {
return getTypeRecord("029187c2-5fe2-46af-b8d4-a583c7061bdb");
}
});

Object.defineProperty(SwayyyModel.staticEntities.type, "terrain", {
get: function () {
return getTypeRecord("0c4b34b6-05e3-400a-a07b-1818beec8b52");
}
});

Object.defineProperty(SwayyyModel.staticEntities.type, "roadmap", {
get: function () {
return getTypeRecord("68adf7a2-8657-4eb8-8c70-15837272cb12");
}
});

Object.defineProperty(SwayyyModel.staticEntities.type, "satellite", {
get: function () {
return getTypeRecord("b07cb01e-0e29-4968-b114-868e9deaf9c1");
}
});

SwayyyModel.staticEntities.mapEventTriggered = {};
var getMapEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["7cf2a964-5ef8-4901-abe6-e84cb6616a62"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.mapEventTriggered, "dragEnd", {
get: function () {
return getMapEventTriggeredRecord("1e4fc6d3-f736-48a8-9794-fc52e3e05a2a");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapEventTriggered, "rightClick", {
get: function () {
return getMapEventTriggeredRecord("22a3a8eb-3d4e-47b8-af22-237ad82eb9d8");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapEventTriggered, "doubleClick", {
get: function () {
return getMapEventTriggeredRecord("291ac09a-41ad-4041-97d9-539e7ea4216c");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapEventTriggered, "click", {
get: function () {
return getMapEventTriggeredRecord("91de1dbe-ad22-465a-a1e2-bc4a2ab18cee");
}
});

Object.defineProperty(SwayyyModel.staticEntities.mapEventTriggered, "zoomChanged", {
get: function () {
return getMapEventTriggeredRecord("ae939fd4-46b8-41d3-b746-32369402d31b");
}
});

SwayyyModel.staticEntities.style = {};
var getStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["a0adb83b-e208-4039-bc92-91d01b8e2081"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.style, "silver", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("039b612a-9671-4660-8713-4227c9c536e7"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.style, "standard", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("46a675cf-0150-4fd0-9ac7-2c96f73da970"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.style, "dark", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("517fb120-6b81-478c-a75c-4c917ffcca47"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.style, "night", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("a13ac6f1-5b2f-4000-adbe-dce29adec7bd"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.style, "aubergine", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("ef4b6628-727d-4fac-848e-5307eab5f9c2"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.style, "retro", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStyleRecord("f46e0309-8397-48b0-a0e2-7f92e1f7965f"));
}
});

SwayyyModel.staticEntities.markerEventTriggered = {};
var getMarkerEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["cf5812b2-bdc9-4eb2-8240-09f6367c6ad6"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.markerEventTriggered, "doubleClick", {
get: function () {
return getMarkerEventTriggeredRecord("7ddaed11-1a2e-43e6-bc9c-a0b6043034e6");
}
});

Object.defineProperty(SwayyyModel.staticEntities.markerEventTriggered, "rightClick", {
get: function () {
return getMarkerEventTriggeredRecord("b87052cc-b00f-4924-9c30-e8b8b36f2062");
}
});

Object.defineProperty(SwayyyModel.staticEntities.markerEventTriggered, "dragEnd", {
get: function () {
return getMarkerEventTriggeredRecord("f9e91264-1aba-4202-a05b-1662779d618e");
}
});

SwayyyModel.staticEntities.zoom = {};
var getZoomRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["e4acf07c-b38a-4871-a7c2-4017eaabe95c"][record];
};
Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom13", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("0922ce32-4035-4463-a75a-d3f8b54f4f94"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom9", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("11f603b5-040e-4f8a-b083-79c5267c71b6"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom10_City", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("15bacab1-f45a-4fe2-ad76-baa770fdfeff"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom3", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("2bf601f1-4db3-4c49-9845-b932615a32f1"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom15_Streets", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("5499149d-d268-4120-a938-8cdad4846c48"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom20_Buildings", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("7a19665e-df15-4f8d-b5c9-d0727ee0c621"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom19", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("833f6b68-54dd-4abe-8610-4603e82b5426"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom7", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("8dbf8113-5ad5-416b-a567-5bc6d084be7a"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom4", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("8f578193-3014-4472-b852-0c41c470ce8e"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom16", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("9aec5bf4-d8cc-46cb-90ec-4f4cc0e91468"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom5_Continent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("9b1873f3-33f4-4346-8e3c-ed2023f0bf27"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom18", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("a73ab79e-3049-4e75-b45e-2a6bf0cd2341"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom11", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("b9786be0-7e13-421d-bfb5-2846dd6384e4"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom1_World", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("bf7ff033-06f7-4cc8-a42d-26349c212d9a"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom8", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("bfcf13bd-f6e4-495f-a514-a3f608fc8092"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom2", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("c617d3e9-ebcb-4dd3-bfa0-b7cf50a94489"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom6", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("d0f47b1a-0256-417c-8c9a-25ffd0e62bc2"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom17", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("e1a365bd-624a-4125-b484-afd05d80920b"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom12", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("ebab583b-bb56-4179-827a-2cb7c814e48d"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "zoom14", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("f31f4a8c-76d5-4e1e-872e-89e885e7999f"));
}
});

Object.defineProperty(SwayyyModel.staticEntities.zoom, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getZoomRecord("fb39ba58-7d90-4803-802f-b11efd3cbcc5"));
}
});

});
