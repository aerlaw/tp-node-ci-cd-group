const { configs } = require('@eslint/js');
const globals = require('globals');

module.exports = [
  configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,    // ou le numéro approprié
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    ignores: ['node_modules/', 'coverage/', 'dist/'],
    rules: {
      // ajoute ici d'autres règles si tu veux
    },
  },
];
