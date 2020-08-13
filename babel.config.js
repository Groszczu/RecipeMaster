module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@components': './src/components',
            '@features': './src/features',
            '@hoc': './src/hoc',
            '@hooks': './src/hooks',
            '@images': './src/images',
            '@services': './src/services',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
