const moment = require("moment");
module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/scss/")
        return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}