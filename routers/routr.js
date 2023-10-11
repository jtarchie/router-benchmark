import Routr from "routr";

const routes = [
  { name: "first", method: "GET", path: "/user" },
  { name: "second", method: "GET", path: "/user/comments" },
  { name: "third", method: "GET", path: "/user/avatar" },
  { name: "fourth", method: "GET", path: "/user/lookup/username/:username" },
  { name: "fifth", method: "GET", path: "/user/lookup/email/:address" },
  { name: "sixth", method: "GET", path: "/event/:id" },
  { name: "seventh", method: "GET", path: "/event/:id/comments" },
  { name: "eighth", method: "POST", path: "/event/:id/comment" },
  { name: "ninth", method: "GET", path: "/map/:location/events" },
  { name: "tenth", method: "GET", path: "/status" },
  {
    name: "eleventh",
    method: "GET",
    path: "/very/deeply/nested/route/hello/there",
  },
  { name: "twelfth", method: "GET", path: "/static/(.*)" },
];

function setupRouter(routes) {
  return new Routr(routes);
}

function executeRoutes(router, routes) {
  routes.forEach(function (route) {
    router.getRoute(route.path, { method: route.method });
  });
}

export { executeRoutes, routes, setupRouter };
