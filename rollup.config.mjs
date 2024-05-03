import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts', // файл для сборки
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    // обеспечивают корректную работу и отсутвие ошибок
    plugins: [
      peerDepsExternal(), // те депсы, которые должны быть установлены у пользователей этого проекта
      resolve({ extensions: ['.tsx', '.ts'] }), // чтобы сборщик понимал, что собирать
      commonjs(), // сборка в формате commonjs
      babel({ exclude: './node_modules/**' }), // компиляция js из es6 в es5
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
