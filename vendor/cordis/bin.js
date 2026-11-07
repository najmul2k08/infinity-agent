#!/usr/bin/env node

import { Context } from '@infinity-agent/cordis'
import { pathToFileURL } from 'node:url'
import Loader from '@infinity-agent/cordis-plugin-loader'

const ctx = new Context()
ctx.baseUrl = pathToFileURL(process.cwd()).href + '/'

await ctx.plugin(Loader)
await ctx.loader.create({
  name: '@infinity-agent/cordis-plugin-include',
  config: {
    path: './cordis.yml',
  },
})
