/** Tool documentation containing literal template syntax for recorded PTC replay. */

import type { Context } from '@infinity-agent/cordis'
import { defineTool } from '@infinity-agent/tools'

export const name = 'literal-sdk'
export const inject = ['tools']

export function apply(ctx: Context): void {
  ctx.tools.register(defineTool({
    name: 'template_echo',
    description: 'Echo template text such as {{item}}, {{model}}, or {{ item }} without substitution.',
    parameters: { text: { type: 'string', required: true } },
    output: {
      schema: { type: 'string' },
      render: (_args, value) => [{ type: 'text', text: value }],
    },
    execute: args => Promise.resolve(args.text),
  }))
}
