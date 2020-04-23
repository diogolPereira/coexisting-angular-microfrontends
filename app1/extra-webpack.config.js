const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
  module.exports = (angularWebpackConfig, options) => {
    // angularWebpackConfig.output.jsonpFunction = 'app1';

    const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
    
    // Feel free to modify this webpack config however you'd like to
    return singleSpaWebpackConfig
}