const CracoLessPlugin = require("craco-less");

module.exports = {
  devServer: {
    port: 8090,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
