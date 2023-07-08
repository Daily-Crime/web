/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      crypto: false,
      fs: false,
      path: false,
      os: false,
    },
    alias: {
      ...config.resolve.alias,
      // TODO this is useful only if you want to use MUI and styled-components
      // '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  };
  return config;
};
