Bun.serve({
  fetch(req) {
    switch (new URL(req.url).pathname) {
      case "/":
        return new Response(Bun.file(import.meta.dir + "/index.html"), {
          headers: { "content-type": "text/html" },
        });

      case "/app.js":
        return new Response(Bun.file(import.meta.dir + "/app.js"), {
          headers: { "content-type": "application/javascript" },
        });

      case "/types/vehicle.js":
        return new Response(Bun.file(import.meta.dir + "/vehicle.js"), {
          headers: { "content-type": "application/javascript" },
        });

      default:
        return new Response("404: Not Found: " + req.url, { status: 404 });
    }
  },
});

export {};
