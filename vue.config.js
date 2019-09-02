module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 10000,
                maxSize: 100000,
            }
      }
    }
};