module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v3.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 1000,
                maxSize: 3400000,
        }
      }
    }
};