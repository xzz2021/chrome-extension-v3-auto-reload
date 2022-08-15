## chrome extension V3 auto reload ##

  This is a chrome extension developer template,use **`Vue3.2+manifestV3 + Sass + Webpack5`**, the fantastic part is this template can be **auto reload**(runtime + active tab) when complier updated, the only thing you need do is use webpack-devserver,and addeventlistener in background.js(worker service)!

  这个谷歌插件模板借助devsever自动刷新监听页面功能，实现了编译完成自动刷新扩展和当前tab页面，之前看过很多方案，ssetrem,监听文件夹的变动等等，感觉太麻烦了所以自己尝试后，在background.js里调用2个谷歌API监听就可以了!