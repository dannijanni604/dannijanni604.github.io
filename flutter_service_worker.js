'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c0483c5003214be29ef6f71c848ab7b",
"assets/AssetManifest.bin.json": "207657f3012aa28ace7bd7532444506c",
"assets/AssetManifest.json": "e5ef7112228507a4dfb2a6a2c673b088",
"assets/assets/icons/animation.png": "ef5cb0bcd2a9871184a0d686b03dd63c",
"assets/assets/icons/appstore.png": "a9d93e335b8c1896b184f12ca092bf62",
"assets/assets/icons/architecture.png": "4af9ae554298e077400b2361df225853",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/cicd.png": "4b21dba0f534939a8b34781379757f63",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/design.png": "9b15c75cdd3c843c3cdd7d31baba9deb",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/getx.png": "d28bb79a557770cb8e166fe92736e8c6",
"assets/assets/icons/git.png": "a112314bf6f83a245f7c40cf26d8e821",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/localization.png": "2023de3a1222bbdf80292876358cc573",
"assets/assets/icons/map.png": "39ac08eb547733875dc099bfdce581cf",
"assets/assets/icons/notification.png": "a727c7f3f614ba2a758da8540c947118",
"assets/assets/icons/performance.png": "29cbf7ea3dfc6f94831c66df8b65c284",
"assets/assets/icons/playstore.png": "2d210714940b8f9c826a0c8a2e137c83",
"assets/assets/icons/rest_api.png": "a40b5cae301c63bf5f84508478fcd404",
"assets/assets/icons/riverpod.png": "1d415b2059f0b0c9505d82ae11ffc5e8",
"assets/assets/icons/secure.png": "89867b6f1ce28558c3e78273f1d85675",
"assets/assets/icons/serverpod.png": "657cfd0670cb4e9ab64d16b5d3839ceb",
"assets/assets/icons/sqflite.png": "d8bcf62fb4a0f5f4f4fdc2c8cb2b9388",
"assets/assets/icons/sso.png": "f2b85b3d07fe27c542714799b9a549d1",
"assets/assets/icons/stack.png": "9afe04b237ff14c89a7a6f0c76c1dd23",
"assets/assets/icons/testing.png": "35abd562ccd57b6eb3e6f6565a8d4a10",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/icons/uiux.png": "b11bf94e739af1413721d9b347ac725e",
"assets/assets/icons/upwork.png": "cec97a5fd52acd7a0de5f4016656487a",
"assets/assets/icons/web.png": "a3a31f33804d4834d2e0662ffcfa8f55",
"assets/assets/icons/web_api.png": "2f42cc254f531075153a03443097b142",
"assets/assets/images/ams.jfif": "cff05f0438dc1d8efa07d619704c6e28",
"assets/assets/images/bloc.jfif": "3ec411a2ed6ffe627b3fa67386b6a1e2",
"assets/assets/images/book_quote_collector.png": "309bfb7b854ce4e4c18acaff4798c763",
"assets/assets/images/class_guide.jfif": "5f4aea31454399ff08b622dd59811767",
"assets/assets/images/cv_lab.jpg": "454f2538ef3654b5b879692bc12b4f32",
"assets/assets/images/file_sync.jfif": "30d22b6bfc8f4d8fb12258cc079170aa",
"assets/assets/images/flutter.jpg": "89d873327aaf8514e0d2089df3a4886e",
"assets/assets/images/getx_demo.jfif": "338caa01df717809773232b0cf261851",
"assets/assets/images/kisan_stock.jfif": "3158d762411e1b735d0a582b9e5ae234",
"assets/assets/images/live_arena.jpg": "7ac5ebd7b7fa5cd403c3114a2730f226",
"assets/assets/images/logo.png": "1d11137b308eaddfeebef388b2dad615",
"assets/assets/images/positive.png": "7e4ae5cd6500e8c1d57b90ef638272ee",
"assets/assets/images/profile.png": "a5074191b10900f0675ed8d78c42e457",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "2b94c7e98f399ccc7328f72768e2ca75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "16ac92495eb092631d2afa23f1ecfc25",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "594017fca30e058f800754570ccd4092",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f964f7f21c168df57372729a8107295",
"/": "3f964f7f21c168df57372729a8107295",
"main.dart.js": "65bfd7663fe073f8b2bbef1d829b6eb1",
"manifest.json": "b5c6c2c1b85161ec647e2b9fc36264fd",
"version.json": "bfb937b63dc8901552fbd309b230e7e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
