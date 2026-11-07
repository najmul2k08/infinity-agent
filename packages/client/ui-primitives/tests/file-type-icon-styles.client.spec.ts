/** FileTypeIcon's default per-category palette as CSS text. */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import type { CodeFileType, FileType } from '@infinity-agent/client-ui-primitives'

const css = readFileSync(fileURLToPath(new URL('../src/FileTypeIcon.module.css', import.meta.url)), 'utf8')

type TraditionalFileType = Exclude<FileType, CodeFileType>

const TYPE_COLORS: Readonly<Record<TraditionalFileType, string>> = {
  code: 'var(--ia-static-deepseek-500)',
  excel: 'var(--ia-static-green-500)',
  folder: 'var(--ia-static-amber-400)',
  html: 'var(--ia-static-deepseek-500)',
  image: 'var(--ia-file-type-violet)',
  markdown: 'var(--ia-static-deepseek-500)',
  other: 'var(--ia-static-neutral-bluish-300)',
  pdf: 'var(--ia-static-red-600)',
  ppt: 'var(--ia-static-amber-500)',
  video: 'var(--ia-file-type-violet)',
  word: 'var(--ia-static-deepseek-450)',
}

describe('FileTypeIcon.module.css', () => {
  it.each(Object.entries(TYPE_COLORS) as [TraditionalFileType, string][])(
    '%s has its own default color',
    (type, color) => {
      const rule = css.match(new RegExp(`\\.${type}\\s*\\{([^}]*)\\}`))?.[1]
      expect(rule).toContain(`--ia-file-type-default-color: ${color}`)
    },
  )

  it('keeps one caller override and the supplied violet in named variables', () => {
    expect(css).toContain('color: var(--ia-file-type-icon-color, var(--ia-file-type-default-color))')
    expect(css).toContain('--ia-file-type-violet: rgb(139, 118, 246)')
  })
})
