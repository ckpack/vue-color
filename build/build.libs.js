import glob from 'glob';
import {
  external, output, plugins, projectRoot,
} from './build.config.js';

const input = glob.sync('src/**/*.js', {
  nodir: true,
});

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
];

export default [
  {
    input,
    output: {
      format: 'esm',
      dir: 'libs/',
      entryFileNames: ({ facadeModuleId }) => facadeModuleId.replace(`${projectRoot}/`, ''),
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
    ],
    external: [...external.vue, ...external.dependencies],
  },
];
