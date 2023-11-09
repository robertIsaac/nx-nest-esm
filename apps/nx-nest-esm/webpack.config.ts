import nxWebpack from '@nx/webpack';

// Nx plugins for webpack.
const exports = nxWebpack.composePlugins(nxWebpack.withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});

export default exports;
