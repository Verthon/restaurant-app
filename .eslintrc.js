module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'standard', 'standard-react'],
  rules: {
    'no-unused-vars': 'off',
    'react/no-unused-state': 'off',
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ]
  }
}
