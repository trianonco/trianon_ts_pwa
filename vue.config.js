module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 20000,
                maxSize: 25000,
            }
      }
    }
};