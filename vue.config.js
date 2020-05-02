module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v8.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 100000,
                maxSize: 200000,
        }
      }
    }
};