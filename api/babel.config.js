export default {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './dist', // Seu alias '@'
        },
      },
    ],
  ],
};
