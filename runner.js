'use strict'

import { fork } from 'child_process'
import { resolve } from 'path'
import { Queue } from './utils.js'

const benchmarks = [
  'find-my-way.js',
  'call.js',
  'express.js',
  'koa-router.js',
  'koa-tree-router.js',
  'router.js',
  'routr.js',
  'server-router.js',
  'some-router.js',
  'trek-router.js'
]

const queue = new Queue()

benchmarks.forEach(file => {
  queue.add(runner.bind({ file: resolve('benchmarks', file) }))
})

function runner (done) {
  const process = fork(this.file)
  process.on('close', done)
}
