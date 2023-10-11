import { Router } from "call";

const routes = [
  { method: "GET", path: "/user" },
  { method: "GET", path: "/user/comments" },
  { method: "GET", path: "/user/avatar" },
  { method: "GET", path: "/user/lookup/username/{username}" },
  { method: "GET", path: "/user/lookup/email/{address}" },
  { method: "GET", path: "/event/{id}" },
  { method: "GET", path: "/event/{id}/comments" },
  { method: "POST", path: "/event/{id}/comment" },
  { method: "GET", path: "/map/{location}/events" },
  { method: "GET", path: "/status" },
  { method: "GET", path: "/very/deeply/nested/route/hello/there" },
  { method: "GET", path: "/static/{file*}" },
];

function setupRouter(routes) {
  const router = new Router();

  routes.forEach(function (route) {
    router.add(route, () => {});
  });

  return router;
}

function executeRoutes(router, routes) {
  routes.forEach(function (route) {
    router.route(route.method.toLowerCase(), route.path);
  });
}

export { executeRoutes, routes, setupRouter };
