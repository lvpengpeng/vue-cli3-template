const ENV = {
    BASEURL: "https://cs.xxxx/xx",//服务器后台接口地址
    shareImgUrl: "https://xxxx/xx/72618ae88a254130a571a9438853c8a6.png?hash=FrdM-CGUGUR3w1mCyWbOjbJ2LE&width=92&height=92&fsize=9381&scope=1",
    authUrl:'https://xxxx/xx/eva/wechat/web/authorize.do?callback=https://xxxx/xx/index.html&chantype=eva&scope=snsapi_base',
    rootUrl:"https://xxxx/xx.html/",
    upLoadUrl: "https://xxxx/xx.cn", // 上传七牛路径
  
}

if (process.env.VUE_APP_ENV === 'production') {
    ENV.BASEURL = "https://xxxx/xx";
    ENV.shareUrl = "https://xxxx/xx/index.html";
    ENV.authUrl='https://xxxx/xx/wechat/web/authorize.do?callback=https://xxxx/xx/index.html&chantype=eva&scope=snsapi_base'
    ENV.rootUrl="https://xxxx/xx/index.html/"
} else {
    ENV.BASEURL="https://xxxx/xx/",//服务器后台接口地址
    ENV.shareUrl = "https://xxxx/xx/index.html"
}
export {
    ENV
}