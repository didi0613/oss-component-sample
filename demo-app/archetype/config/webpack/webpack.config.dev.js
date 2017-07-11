const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      
      "oss-component-sample": Path.join(repoPackagesDir, "oss-component-sample/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "oss-component-sample"),
      Path.join(repoPackagesDir, "oss-component-sample/node_modules"),
      
    ]
  }
};
