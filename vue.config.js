const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});
(config) => {
    config.module.rule("eslint").use("eslint-loader").options({
        fix: true,
    });
};
module.exports = {
    lintOnSave: "warning",
};
