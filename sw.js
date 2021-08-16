const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
  "./",
  "index.html",
  "css/bootstrap.min.css",
  "css/main.mincss",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    /* Este método estende o evento ONINSTALL e aplica um estado ao evento chamado ONINSTALLING */
    caches
      .open(
        CACHE_NAME
      ) /* O objeto caches é criado com um namespace e retorna uma Promise */
      .then(function (cache) {
        // console.log('Cache aberto');
        return cache.addAll(
          urlsToCache
        ); /* E por fim, conseguimos manipular o objeto de cache corrente */
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("activate");
  event.waitUntil(
    cache.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(CACHE_NAME) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      // Registro realizado com sucesso (NOTA: Observe que declaro um arquivo chamado sw.js, ele é onde colocaremos as notações do nosso Service Workers)
      console.log(
        "O ServiceWorker foi registrado com escopo: ",
        registration.scope
      );
    })
    .catch(function (err) {
      // O registro falhou :(
      console.log("O registro do ServiceWorker falhou com o erro: ", err);
    });
}

if (window.Notification && Notification.permission !== "denied") {
  Notification.requestPermission(function (status) {
    // status is "granted", if accepted by user
    var n = new Notification("Prof manu", {
      body: "Bem-vindo à ao meu site",
      icon: "img/icons/icon-72x72.png", // optional
    });
  });
}
