import fs from "fs/promises";
import path from "path";

import b from "benny";
import { exec } from "child_process";

const directory = "./routers/";
const files = await fs.readdir(directory);
await files.forEach(async (file) => {
  if (path.extname(file) === ".js") {
    const filePath = directory + file;
    const baseName = path.basename(file, ".js");

    try {
      const { setupRouter, executeRoutes, routes } = await import(filePath);

      const router = setupRouter(routes);
      b.suite(
        file,
        b.add("short static", () => {
          executeRoutes(router, [{ method: "GET", path: "/user" }]);
        }),
        b.add("static with same radix", () => {
          executeRoutes(router, [{ method: "GET", path: "/user/comments" }]);
        }),
        b.add("dynamic route", () => {
          executeRoutes(router, [{
            method: "GET",
            path: "/user/lookup/username/john",
          }]);
        }),
        b.add("mixed static dynamic", () => {
          executeRoutes(router, [{
            method: "GET",
            path: "/event/abcd1234/comments",
          }]);
        }),
        b.add("long static", () => {
          executeRoutes(router, [{
            method: "GET",
            path: "/very/deeply/nested/route/hello/there",
          }]);
        }),
        b.add("wildcard", () => {
          executeRoutes(router, [{
            method: "GET",
            path: "/static/index.html",
          }]);
        }),
        b.add("all together", () => {
          executeRoutes(router, [
            { method: "GET", path: "/user" },
            { method: "GET", path: "/user/comments" },
            { method: "GET", path: "/user/lookup/username/john" },
            { method: "GET", path: "/event/abcd1234/comments" },
            { method: "GET", path: "/very/deeply/nested/route/hello/there" },
            { method: "GET", path: "/static/index.html" },
          ]);
        }),
        b.cycle(),
        b.complete(),
        b.save({ file: baseName, format: `chart.html`, details: true }),
        b.save({ file: baseName, format: `json`, details: true }),
      );
    } catch (err) {
      console.error(filePath, err);
    }
  }
});

