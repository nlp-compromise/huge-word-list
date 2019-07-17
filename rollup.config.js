import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-size'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'builds/huge-word-list.mjs',
        format: 'esm',
      },
    ],
    plugins: [resolve(), json(), commonjs(), size()],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'builds/huge-word-list.js',
        format: 'cjs',
      },
    ],
    plugins: [resolve(), json(), commonjs(), terser(), size()],
  },
]
