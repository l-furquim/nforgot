module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './dist', // Define o alias '@' para a pasta 'src'
        },
      },
    ],
  ],
};
