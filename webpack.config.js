const path = require('path');

module.exports = {
  resolve: {
    alias: {
      views: path.resolve(__dirname, 'src/views/*'),
      mocks: path.resolve(__dirname, 'src/mocks/*'),
      components: path.resolve(__dirname, 'src/components/*'),
      hooks: path.resolve(__dirname, 'src/hooks/*'),
      styles: path.resolve(__dirname, 'src/styles/*'),
      services: path.resolve(__dirname, 'src/services/*'),
    },
    extensions: ['.ts', '.js'],
  },
};
