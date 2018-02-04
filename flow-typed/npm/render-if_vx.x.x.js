// flow-typed signature: 2bf10bb76887e452e38c28e874025557
// flow-typed version: <<STUB>>/render-if_v^0.1.1/flow_v0.64.0
import type { Node } from 'react'

/**
 * This is an autogenerated libdef stub for:
 *
 *   'render-if'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'render-if' {
  declare module.exports: (boolean) => Node | (() => Node)
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'render-if/lib/renderIf' {
  declare module.exports: (boolean) => Node | (() => Node)
}

declare module 'render-if/test' {
  declare module.exports: any
}

// Filename aliases
declare module 'render-if/lib/renderIf.js' {
  declare module.exports: $Exports<'render-if/lib/renderIf'>
}
declare module 'render-if/test.js' {
  declare module.exports: $Exports<'render-if/test'>
}
