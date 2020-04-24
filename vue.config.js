module.exports = {
    productionSourceMap: false,
    indexPath: 'index-app-v3.html',
    //publicPath: '/PWA_V2/',
    configureWebpack: {
        optimization: {
        splitChunks: {
                minSize: 2600,
                maxSize: 2432000,
        }
      }
    }
};