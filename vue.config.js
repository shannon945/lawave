module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 3000,
    public: '0.0.0.0:3000'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/FrontEnd/'
    : '/'
}
