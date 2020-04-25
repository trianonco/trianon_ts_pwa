module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v4.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 3501,
                maxSize: 59900,
        }
      }
    }
};