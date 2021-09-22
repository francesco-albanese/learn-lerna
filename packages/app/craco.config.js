const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = [...include, path.join(__dirname, "../components")];
      }
      return webpackConfig;
    },
  },
};