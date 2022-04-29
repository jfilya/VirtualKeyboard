module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  
  'extends': [
    "eslint:recommended", "airbnb"
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    "semi": "off",
    "quotes": ["error", "double"],
    "linebreak-style": ["error", "windows"]
  },
};
