// vue.config.js
module.exports = {
    // options...
    devServer: {
        proxy: 'https://storage.googleapis.com/wineshop-assets/wine-shop.json',
    }
  }