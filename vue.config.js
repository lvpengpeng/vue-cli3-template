if (process.env.VUE_APP_ENV !== 'development') process.env.VUE_APP_LASTMODIFY = new Date();
const baseUrl='/jianyue/rank/'//history模式配置相对于根域名的公共路径头部;
module.exports = {
    /*打包后静态资源存放目录*/
    // assetsDir: undefined,
    publicPath:baseUrl,
    productionSourceMap: false,
}