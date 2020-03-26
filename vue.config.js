module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v2.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 100,
                maxSize: 10000000,
        }
      }
    }
};