var version = "1.0",
    cacheList = [
        "/",
        "css/main-snake.css",
        "css/dark-snake.css",
        "css/images/dark-snakeblock.png",
        "css/images/dead-dark-snakeblock.png",
        "css/images/deadblock_border.png",
        "css/images/deadblock.png",
        "css/images/snakeblock.png",
        "js/snake.js"
    ];

/*  Service Worker Event Handlers */

self.addEventListener("install", function (event) {

    console.log("Installing the service worker!");

    caches.open("PRECACHE")
        .then(function (cache) {

            cache.addAll(cacheList);

        });

});

self.addEventListener("activate", function (event) {

    console.log("Activating the service worker!");

});

self.addEventListener("fetch", function (event) {

    event.respondWith(
        caches.match(event.request)
            .then(function (response) {

                if (response) {
                    return response;
                }

                return fetch(event.request);
            })
    );

});