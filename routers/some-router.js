import { MethodRouter } from "@jtarchie/some-router";

const routes = [
  { method: "GET", path: "/user" },
  { method: "GET", path: "/user/comments" },
  { method: "GET", path: "/user/avatar" },
  { method: "GET", path: "/user/lookup/username/:username" },
  { method: "GET", path: "/user/lookup/email/:address" },
  { method: "GET", path: "/event/:id" },
  { method: "GET", path: "/event/:id/comments" },
  { method: "POST", path: "/event/:id/comment" },
  { method: "GET", path: "/status" },
  { method: "GET", path: "/very/deeply/nested/route/hello/there" },
  { method: "GET", path: "/static/*" },
];

function setupRouter(routes) {
  const router = new MethodRouter();
  routes.forEach(function (route) {
    router.on(route.method, route.path, () => {});
  });

  return router;
}

function executeRoutes(router, routes) {
  routes.forEach(function (route) {
    router.find(route.method, route.path);
  });
}

export { executeRoutes, routes, setupRouter };
