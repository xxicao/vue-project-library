import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel'; 
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import image from '@rollup/plugin-image';
/* import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload' */

export default {
  input: 'src/main.js',
  output: [
    { file: 'dist/bundle.min.js', format: 'umd', name:'library' },
    { file: 'dist/bundle.esm.js', format: 'es', name:'library' },
  ],
  plugins: [
    resolve(),
    babel({ 
      exclude: 'node_modules/**'
     }),
    commonjs(),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()
      ]
    }),
    image(),
    vue(),
    terser(),
    /* serve({
      contentBase: '',
      port: 8020
    }),    
    livereload('dist') */
  ]
}