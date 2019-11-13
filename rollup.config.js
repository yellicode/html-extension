export default {
  input: 'dist/es6/html.js', // rollup requires ES input
  output: {
    format: 'umd',
    name: '@yellicode/html',
    file: 'dist/bundles/html.umd.js'
  },
  external: ['@yellicode/core'] // https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
}