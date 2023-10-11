# Router Benchmark

HTTP routers play a pivotal role in backend development, directing incoming
requests to the appropriate handlers. This repository provides a benchmark of
the most commonly used HTTP routers to help developers make informed decisions.

## Tested Routers

For consistency, all links point to their respective GitHub repositories:

- [find-my-way](https://github.com/delvedor/find-my-way)
- [call](https://github.com/hapijs/call)
- [express](https://www.npmjs.com/package/express)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [koa-tree-router](https://github.com/steambap/koa-tree-router)
- [router](https://github.com/pillarjs/router)
- [routr](https://github.com/yahoo/routr)
- [some-router](https://github.com/jtarchie/some-router)
- [server-router](https://github.com/yoshuawuyts/server-router)
- [trek-router](https://www.npmjs.com/package/trek-router)

If you're aware of other routers not listed here, please submit a
[PR](https://github.com/jtarchie/router-benchmark/pulls)!

## Usage

Do you wan to run the benchmarks by yourself?\
Run the following:

```bash
git clone https://github.com/jtarchie/router-benchmark
cd router-benchmark
npm i
npm start
```

## Router features

| Router            | Framework independent | Decode URI | Querystring handling | Regex route support | Multi-parametric route support | Max parameter length |
| :---------------- | :-------------------- | :--------- | :------------------- | :------------------ | :----------------------------- | :------------------- |
| `find-my-way`     | &#10003;              | &#10003;   | &#10003;             | &#10003;            | &#10003;                       | &#10003;             |
| `call`            | &#10003;              | &#10003;   | &#10007;             | ?                   | ?                              | ?                    |
| `express`         | &#10007;              | &#10003;   | &#10003;             | &#10003;            | &#10003;                       | &#10007;             |
| `koa-router`      | &#10007;              | &#10007;   | &#10007;             | &#10003;            | &#10003;                       | &#10007;             |
| `koa-tree-router` | &#10007;              | &#10007;   | &#10007;             | &#10007;            | &#10007;                       | &#10007;             |
| `router`          | &#10003;              | &#10003;   | &#10003;             | &#10003;            | &#10003;                       | &#10007;             |
| `routr`           | &#10003;              | &#10003;   | &#10003;             | &#10007;            | &#10007;                       | &#10007;             |
| `server-router`   | &#10003;              | &#10003;   | &#10007;             | &#10007;            | &#10007;                       | &#10007;             |
| `trek-router`     | &#10007;              | &#10007;   | &#10007;             | &#10007;            | &#10007;                       | &#10007;             |

## enchmarking Methodology

To emulate real-world scenarios, each router registers the following routes:

```javascript
{ method: 'GET', url: '/user' },
{ method: 'GET', url: '/user/comments' },
{ method: 'GET', url: '/user/avatar' },
{ method: 'GET', url: '/user/lookup/username/:username' },
{ method: 'GET', url: '/user/lookup/email/:address' },
{ method: 'GET', url: '/event/:id' },
{ method: 'GET', url: '/event/:id/comments' },
{ method: 'POST', url: '/event/:id/comment' },
{ method: 'GET', url: '/map/:location/events' },
{ method: 'GET', url: '/status' },
{ method: 'GET', url: '/very/deeply/nested/route/hello/there' },
{ method: 'GET', url: '/static/*' }
```

Then the following routes are tested:

```javascript
short static: { method: 'GET', url: '/user' }
static with same radix: { method: 'GET', url: '/user/comments' }
dynamic route: { method: 'GET', url: '/user/lookup/username/john' }
mixed static dynamic: { method: 'GET', url: '/event/abcd1234/comments' },
long static: { method: 'GET', url: '/very/deeply/nested/route/hello/there' },
wildcard: { method: 'GET', url: '/static/index.html' }
all together: all the above at the same time
```

Each test is executed 1 million times. We measure the time using
process.hrtime(), and the final results are expressed in operations per second.

## License

[MIT](https://github.com/delvedor/router-benchmark/blob/master/LICENSE)

Copyright © 2023 JT Archie
