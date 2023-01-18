const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@UI': 'src/components/UI',
    '@containers': 'src/containers',
    '@constatns': 'src/constatns',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
    '@routes': 'src/routes',
    '@image': 'src/image',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
  })(config);
  return config;
};
