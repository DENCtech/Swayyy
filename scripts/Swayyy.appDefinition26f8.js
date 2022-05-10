define("Swayyy.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "ef728ef0-3068-4d6d-bbd9-9d2b465e91f6",
environmentName: "Development",
applicationKey: "5b7a5230-243d-470e-ad8a-ecc143f299c3",
applicationName: "Swayyy",
userProviderName: "Users",
debugEnabled: true,
homeModuleName: "Swayyy",
homeModuleKey: "356a2bca-2ffb-4cc8-acd0-02761b709c5a",
homeModuleControllerName: "Swayyy.controller",
homeModuleLanguageResourcesName: "Swayyy.languageResources",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false
},
isWeb: false,
personalArea: null,
showWatermark: false
};
});
