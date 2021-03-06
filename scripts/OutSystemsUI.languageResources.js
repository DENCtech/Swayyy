define("OutSystemsUI.languageResources", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.languageResources.translationsResources"], function (OutSystems, OutSystemsUILanguageResources_translationsResources) {
var OS = OutSystems.Internal;
var MessagesProvider = (function (_super) {
__extends(MessagesProvider, _super);
function MessagesProvider(translationResources) {
_super.apply(this, arguments);
this.setMessage("Validation.Mandatory", "Required field!");
this.setMessage("Validation.Integer", "Integer expected!");
this.setMessage("Validation.LongInteger", "Integer expected!");
this.setMessage("Validation.Decimal", "Decimal expected!");
this.setMessage("Validation.Currency", "Currency expected!");
this.setMessage("Validation.Date", "Date expected!");
this.setMessage("Validation.Time", "Time expected!");
this.setMessage("Validation.DateTime", "DateTime expected!");
this.setMessage("Validation.Text", "Text expected!");
this.setMessage("Validation.PhoneNumber", "Phone Number expected!");
this.setMessage("Validation.Email", "Email expected!");
this.setMessage("UpgradeComplete", "Your application has been updated to the latest version.");
this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost.");
this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update.");
this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.");
}
return MessagesProvider;
})(OS.LanguageResources.BaseMessagesProvider);
return new MessagesProvider(OutSystemsUILanguageResources_translationsResources);
});
define("OutSystemsUI.languageResources.translationsResources", ["exports", "OutSystemsUI.languageResources.translationsResources.fr-CA", "OutSystemsUI.languageResources.translationsResources.pt"], function (exports, OutSystemsUI_languageResources_translationsResources_frCA, OutSystemsUI_languageResources_translationsResources_pt) {
return {
"fr-CA": {
"translations": OutSystemsUI_languageResources_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_languageResources_translationsResources_pt,
"isRTL": false
}
};
});
define("OutSystemsUI.languageResources.translationsResources.fr-CA", [], function () {
return {
"Validation.Currency": "Veuillez entrer une valeur mon??taire!",
"Validation.DateTime": "Veuillez entrer une date et heure sp??cifique!",
"Validation.Date": "Veuillez entrer une date!",
"Validation.Decimal": "Veuillez entrer un d??cimal!",
"Validation.Email": "Veuillez entrer un courriel!",
"Validation.Integer": "Veuillez entrer un entier!",
"Validation.LongInteger": "Veuillez entrer un entier!",
"Validation.Mandatory": "Champs requis!",
"Kn_hixxDWEm4lMd7mIpycQ#NumericPasswordValidatorMsg": "Veuillez entrer un mot de passe num??rique!",
"Validation.PhoneNumber": "Veuillez entrer un num??ro de t??l??phone!",
"Validation.Text": "Veuillez entrer un texte!",
"Validation.Time": "Veuillez entrer une heure sp??cifique!",
"UpgradeComplete": "Votre application a ??t?? mise ?? jour avec la derni??re version.",
"AppInitError.Generic": "Une erreur s\'est produite lors de la tentative de mise ?? jour de l\'application. Si vous souhaitez r??essayer la mise ?? jour, red??marrez l\'application.",
"AppInitError.DataModel": "Une erreur s\'est produite lors de la tentative de mise ?? jour de l\'application. Si vous souhaitez r??essayer la mise ?? jour, red??marrez l\'application. Si le probl??me persiste, vous pouvez r??installer, mais toutes les donn??es locales seront perdues.",
"AppInitError.Resources": "Une erreur s\'est produite lors de la tentative de mise ?? jour de l\'application. Si vous souhaitez r??essayer la mise ?? jour, red??marrez l\'application.",
"UpgradeRequiredDataLoss": "Votre application doit ??tre mise ?? jour. Les donn??es non enregistr??es seront perdues. Appuyez ici pour mettre ?? jour.",
"UpgradeRequired": "Votre application doit ??tre mise ?? jour. Appuyez ici pour mettre ?? jour."
};
});
define("OutSystemsUI.languageResources.translationsResources.pt", [], function () {
return {
"Validation.Currency": "Formato de moeda esperado!",
"Validation.DateTime": "Formato de data e hora esperado!",
"Validation.Date": "Formato de Data esperada!",
"Validation.Decimal": "Formato decimal esperado!",
"Validation.Email": "Formato de email esperado!",
"Validation.Integer": "Formato de n??mero esperado!",
"Validation.LongInteger": "Formato de n??mero esperado!",
"Validation.Mandatory": "Campo obrigat??rio!",
"Kn_hixxDWEm4lMd7mIpycQ#NumericPasswordValidatorMsg": "Formato password num??rica esperado!",
"Validation.PhoneNumber": "Formato de n??mero de telefone esperado!",
"Validation.Text": "Formato de texto esperado!",
"Validation.Time": "Formato de hora esperado!",
"UpgradeComplete": "A sua aplica????o foi actualizada para a vers??o mais recente.",
"AppInitError.Generic": "Ocorreu um erro ao tentar actualizar a sua aplica????o. Se quiser tentar novamente, reinicie a aplica????o.",
"AppInitError.DataModel": "Ocorreu um erro ao tentar actualizar a sua aplica????o. Se quiser tentar novamente, reinicie a aplica????o. Se o problema persistir, voc?? pode reinstalar a aplica????o, mas os dados locais ser??o apagados.",
"AppInitError.Resources": "Ocorreu um erro ao tentar actualizar a sua aplica????o. Se quiser tentar novamente, reinicie a aplica????o.",
"UpgradeRequiredDataLoss": "A sua aplica????o precisa de ser actualizada (os seus dados n??o salvos, ser??o perdidos). Toque aqui para actualizar.",
"UpgradeRequired": "A sua aplica????o necessita de actualizar. Toque aqui para actualizar."
};
});
