import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/easy-scrollbar-lib.js',
    format: 'cjs',
    sourcemap: true
  },
  external: ['react', 'react-dom', 'react-perfect-scrollbar'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    postcss({
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top'
      }
    })
  ]
};
