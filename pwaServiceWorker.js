importScripts("./scripts/OutSystems.js");

var MODULE_NAME = "Swayyy";
var VERSION_TOKEN = "49NNIDchMt9XlrZrEO_H4A"
var CACHE_NAME = MODULE_NAME + "-" + VERSION_TOKEN;
var urlVersions = [
  "/Swayyy/_error.html?6Tcy0RZGM5lZS5OsaClAUw",
"/Swayyy/css/_Basic.css?EqGzAe81QbZLXJyfY3oLwA",
"/Swayyy/css/OutSystemsReactWidgets.css?V4aWVwM5leALLtuu6TDWSA",
"/Swayyy/css/OutSystemsUI.OutSystemsUI.css?2Nv_XKjcZFuyrIjAQ8+5Og",
"/Swayyy/css/OutSystemsUI.OutSystemsUI.extra.css?1GjQJ0ulyV5Cvi1VkYiTIw",
"/Swayyy/css/Swayyy.Swayyy.css?bzoboiFY6jVRxKJzcEUGiA",
"/Swayyy/favicon.png?l+MR0Ib_ZmEf_QXqY9HEnQ",
"/Swayyy/fonts/fontawesome-webfont.woff?yN3x5eW_NoK8e+vzDzlBSA",
"/Swayyy/fonts/fontawesome-webfont.woff2?5s98bsfC1vZwrp12JgTLCw",
"/Swayyy/img/Swayyy.Logo.png?HAThf20ciLIl1bcAl_OLhg",
"/Swayyy/img/Swayyy.User.png?5SFLvT1kwBAOHH7ZqnyPpA",
"/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/scripts/Debugger.js?YX7duBbZiG+xXVvlCjpSxw",
"/Swayyy/scripts/LICENSES.txt?anJHJHQBjZT7NjNQ+OB+sQ",
"/Swayyy/scripts/OutSystems.js?eq9LGmzdgJbMq6dbNoVMvQ",
"/Swayyy/scripts/OutSystemsCharts.model.js?5TOeq49D6FEu1La48p+J_w",
"/Swayyy/scripts/OutSystemsCharts.referencesHealth.js?laKs03FR940zoOZP1pshpg",
"/Swayyy/scripts/OutSystemsManifestLoader.js?Uno7DkMuu4+3RKfSExTIUg",
"/Swayyy/scripts/OutSystemsMaps.model.js?UZoei0cqFBpAPnz4CduH7A",
"/Swayyy/scripts/OutSystemsMaps.referencesHealth.js?ji9ZT8RBqLbQiK4x8q2RjA",
"/Swayyy/scripts/OutSystemsReactView.js?DtzHEvOePADFJAVO+XYgVg",
"/Swayyy/scripts/OutSystemsReactWidgets.js?E4SSw3FwbHWsyMMUPr64mg",
"/Swayyy/scripts/OutSystemsUI.Adaptive.Columns2.mvc.js?tNMsUpSfaebYkVRnR3cJoQ",
"/Swayyy/scripts/OutSystemsUI.Content.BlankSlate.mvc.js?kkoPUcE5yq17SU_JMv+9WQ",
"/Swayyy/scripts/OutSystemsUI.Content.UserAvatar.mvc.js?CIFc7DBV3UbNVfHvLNB+8Q",
"/Swayyy/scripts/OutSystemsUI.controller.js?_zWDXaL5anIXkAwfpgYtSQ",
"/Swayyy/scripts/OutSystemsUI.Interaction.Animate.mvc.js?GCltD2eHMrDbMngdnf+6wQ",
"/Swayyy/scripts/OutSystemsUI.Interaction.AnimatedLabel.mvc.js?a204dTQY61jbLq33E7K6MQ",
"/Swayyy/scripts/OutSystemsUI.languageResources.js?zWqKozmvQmuPy_A5qNnccQ",
"/Swayyy/scripts/OutSystemsUI.model.js?uLE8vFrcVRhCnTpDd4ejTA",
"/Swayyy/scripts/OutSystemsUI.MWO.js?fZcFt60k3mJDWeENwt0Gbg",
"/Swayyy/scripts/OutSystemsUI.Numbers.DEPRECATED_ProgressBarV2.mvc.js?nisM+brDJGhsSNJJ1twWKA",
"/Swayyy/scripts/OutSystemsUI.OfflineDataSync.js?F6zWSuwFVMi3vvLj7DtEpA",
"/Swayyy/scripts/OutSystemsUI.OutSystemsUI.js?4IVrnLmCnbpLfW86Kflb+Q",
"/Swayyy/scripts/OutSystemsUI.Private.ApplicationLoadEvents.mvc.js?7bdurd3oXSAXgsI65ouvBA",
"/Swayyy/scripts/OutSystemsUI.Private.MenuDrag.mvc.js?R7V+1lnGLZz2r7wXyRTqJw",
"/Swayyy/scripts/OutSystemsUI.Private.NetworkStatusChanged.mvc.js?RVRn7yk+DERzzYXZd_FSRw",
"/Swayyy/scripts/OutSystemsUI.Private.OfflineDataSyncCore.mvc.js?dGXA9c9mfeDfIsjCY2KN3w",
"/Swayyy/scripts/OutSystemsUI.Private.PullToRefresh.mvc.js?lLSkltcQbTKzDNFaBwoQQw",
"/Swayyy/scripts/OutSystemsUI.PullToRefresh.js?wNAuHHJ7q2R0EAhzk+I_DA",
"/Swayyy/scripts/OutSystemsUI.referencesHealth.js?Y0OfZph4EG_32B24lULiAg",
"/Swayyy/scripts/OutSystemsUI.TouchTrack.js?mZIEy83Y3mVhoqZx133f2Q",
"/Swayyy/scripts/OutSystemsUI.Utilities.AlignCenter.mvc.js?Fhhm2taJeki4pByI59GHUA",
"/Swayyy/scripts/OutSystemsUI.Utilities.ButtonLoading.mvc.js?igH+6vDFhFxr6+SXJLq6fw",
"/Swayyy/scripts/OutSystemsUI.Utilities.TouchEvents.mvc.js?18+jnBFioje3mgX6J+3JSQ",
"/Swayyy/scripts/ServiceCenter.model.js?svQtgZsgt+ra3rtGv2OQnw",
"/Swayyy/scripts/ServiceCenter.referencesHealth.js?b9tXmJoVAsmyZQn_UE8h4g",
"/Swayyy/scripts/Swayyy.appDefinition.js?78qwJOF9hhOOvhft24ol5A",
"/Swayyy/scripts/Swayyy.clientVariables.js?L4DWoSHqsWY50tSPiTH9Fg",
"/Swayyy/scripts/Swayyy.Common.ApplicationTitle.mvc.js?y2CS_i9zaMO0O34+l20hcg",
"/Swayyy/scripts/Swayyy.Common.BottomBar.mvc.js?ElIvppjDJnJkVE3ComhLLA",
"/Swayyy/scripts/Swayyy.Common.controller.js?lthFlNuA8FDycYptX3wgEg",
"/Swayyy/scripts/Swayyy.Common.InvalidPermissions.mvc.js?RUdvluz8a9DsH3rVZBYNcw",
"/Swayyy/scripts/Swayyy.Common.Layout.mvc.js?7B9kgQVvpgXPA8_zzRgbGA",
"/Swayyy/scripts/Swayyy.Common.LayoutBlank.mvc.js?5BoOUBrX+MmffhN822LEow",
"/Swayyy/scripts/Swayyy.Common.Login.mvc.js?NJe0FPSk0k4V5TUOOP5sKQ",
"/Swayyy/scripts/Swayyy.Common.Menu.mvc.js?MUcaqNc+uH3g4d1H8e19Og",
"/Swayyy/scripts/Swayyy.Common.MenuIcon.mvc.js?b9YNSUjBB5brl3XCqCs6sQ",
"/Swayyy/scripts/Swayyy.Common.OfflineDataSyncEvents.mvc.js?tT2rB8YzCcb4YdgH8jtLMQ",
"/Swayyy/scripts/Swayyy.Common.SignUp.mvc.js?gQTNcCtvGplDQacUQb5zqg",
"/Swayyy/scripts/Swayyy.Common.Splash.mvc.js?1cowOfId5tfm3NtvgmZ0XQ",
"/Swayyy/scripts/Swayyy.Common.UserInfo.mvc.js?WYxwjxIAxqESLOUI4gygcQ",
"/Swayyy/scripts/Swayyy.controller.js?CtoKA5Ukrtvr5vAJ4gLdPA",
"/Swayyy/scripts/Swayyy.error.js?gy+PxT02cnU3VN8lRlfw4A",
"/Swayyy/scripts/Swayyy.index.js?0GVHbyyS53xY0M2Pfyi1pQ",
"/Swayyy/scripts/Swayyy.languageResources.js?LjYXYEyaf93j5zJ8blrPiA",
"/Swayyy/scripts/Swayyy.MainFlow.Add_Product.mvc.js?yzRmUuyPEGvv3fGgJJRoPg",
"/Swayyy/scripts/Swayyy.MainFlow.controller.js?zPHTKWhx__3tQZeGLT4jDw",
"/Swayyy/scripts/Swayyy.MainFlow.HomeScreen.mvc.js?yrlS01MyAYhyAikj_gVjSQ",
"/Swayyy/scripts/Swayyy.MainFlow.ProductDetail.mvc.js?CpSArKQxiyzrJ+r_mnUmzQ",
"/Swayyy/scripts/Swayyy.MainFlow.UserDetail.mvc.js?XJT7SAMNgetYfp8h+BLLuQ",
"/Swayyy/scripts/Swayyy.model.js?12OSeva88b+kABewAOENWg",
"/Swayyy/scripts/Swayyy.referencesHealth.js?Zz5WaY3dNvKoh1ZAPK9Tww",
"/Swayyy/scripts/Users.model.js?fDLNS8KfF0H9ZHQWNWIHnA",
"/Swayyy/scripts/Users.referencesHealth.js?IzMZ6inhe6_YHkmpVXDVPg"
];
var urlMappings = {
  "/Swayyy": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/_error.html": "/Swayyy/_error.html?6Tcy0RZGM5lZS5OsaClAUw",
"/Swayyy/Add_Product": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/HomeScreen": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/InvalidPermissions": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/Login": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/ProductDetail": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/SignUp": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/Splash": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/UserDetail": "/Swayyy/index.html?VK+uxZBPgSEt3QyA_9zPxg",
"/Swayyy/moduleservices/moduleinfo?cached": "/Swayyy/moduleservices/moduleinfo?49NNIDchMt9XlrZrEO_H4A"
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                trace("[install] " + CACHE_NAME + " opened, adding all core components to cache");
                return cache.addAll(urlVersions);
            })
            .then(() => {
                trace("[install] All required resources have been cached in " + CACHE_NAME);
                return self.skipWaiting();
            })
            .catch((ex) => error("[install] Error installing " + CACHE_NAME + ". " + ex.toString()))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then((cache) => {
                reqPath = new URL(event.request.url).pathname;
                var req = reqPath in urlMappings ?
                    urlMappings[reqPath] :
                    event.request

                return cache.match(req)
                    .then((response) => {
                        if (response) {
                            trace("[fetch] Returning from " + CACHE_NAME + " cache: " + reqPath);
                            return response;
                        }
                        return fetch(req)
                            .then((response) => {
                                trace("[fetch] Returning from server: " + reqPath);
                                return response;
                            })
                            .catch((ex) => error("[fetch] Error fetching " + reqPath + " from server. " + ex.toString()));
                    })
                    .catch((ex) => error("[fetch] Error fetching " + reqPath + " from " + CACHE_NAME + " cache. " + ex.toString()));
            })
            .catch((ex) => error("[fetch] Error trying to open " + CACHE_NAME + " cache. " + ex.toString()))
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (key && key.startsWith(MODULE_NAME) && key !== CACHE_NAME) {
                    trace("[activate] Deleting " + key + " old cache entry");
                    return caches.delete(key);
                }
            })
        )).then(() => {
            trace("[activate] " + MODULE_NAME + " was upgraded to version " + VERSION_TOKEN);
            self.clients.claim();
        })
        .catch((ex) => error("[activate] Error in " + MODULE_NAME + " activation. " + ex.toString()))
    );
});

var logger;
require({
    baseUrl: "./"
}, ['OutSystems/ClientRuntime/Logger', 'OutSystems/ClientRuntime/Communication'], function (crLogger, communication) {
    logger = crLogger;
    logger.setPostLogsFunction(communication.postLog);
});

// Service Worker handlers must be added on the initial evaluation of the script.
// So we can't guarantee that logger will be resolved before it's called. 
// That's why we're adding this wrapper.
function trace(message) {
    if (!logger) return;
    return logger.trace("Service Worker-" + CACHE_NAME, message);
}

function error(message) {
    if (!logger) return;
    return logger.error("Service Worker-" + CACHE_NAME, message);
}