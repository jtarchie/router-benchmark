"use strict";

import express from "express";

const routes = [
  { method: "GET", path: "/user" },
  { method: "GET", path: "/user/comments" },
  { method: "GET", path: "/user/avatar" },
  { method: "GET", path: "/user/lookup/username/:username" },
  { method: "GET", path: "/user/lookup/email/:address" },
  { method: "GET", path: "/event/:id" },
  { method: "GET", path: "/event/:id/comments" },
  { method: "POST", path: "/event/:id/comment" },
  { method: "GET", path: "/map/:location/events" },
  { method: "GET", path: "/status" },
  { method: "GET", path: "/very/deeply/nested/route/hello/there" },
  { method: "GET", path: "/static/*" },
];

function setupRouter(routes) {
  const router = express.Router();
  routes.forEach(function (route) {
    if (route.method === "GET") {
      router.route(route.path).get(() => {});
    } else {
      router.route(route.path).post(() => {});
    }
  });

  return router;
}

function executeRoutes(router, routes) {
  routes.forEach(function (route) {
    router.handle({ method: route.method, url: route.path });
  });
}

export { executeRoutes, routes, setupRouter };
