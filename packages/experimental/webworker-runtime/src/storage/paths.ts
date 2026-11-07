/**
 * Virtual root of the worker host's in-memory filesystem. Kept
 * in one module so the process shim, the path/os shims, and the VFS image
 * collector cannot drift apart.
 */

/** Virtual filesystem root; `process.cwd()` and every absolute path start here. */
export const INFINITY_ROOT = '/dsh'

/** `$INFINITY_HOME`: durable-state directory inside the image. */
export const INFINITY_HOME = `${INFINITY_ROOT}/home`

/** Flat, symlink-free package tree resolved by the worker module loader. */
export const INFINITY_NODE_MODULES = `${INFINITY_ROOT}/node_modules`

/** Image configuration directory: the VFS manifest and the shipped agent presets. */
export const INFINITY_CONFIG = `${INFINITY_ROOT}/config`

/** Default (empty) workspace directory. */
export const INFINITY_WORKSPACE = `${INFINITY_ROOT}/workspace`

/** Temporary directory reported by `os.tmpdir()`. */
export const INFINITY_TMP = `${INFINITY_ROOT}/tmp`
