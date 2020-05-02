module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v6.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 52000,
                maxSize: 60000,
        }
      }
    }
};