module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v0.2.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 10000,
                maxSize: 25000,
        }
      }
    }
};