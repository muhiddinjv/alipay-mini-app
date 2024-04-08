import WebViewBridge from './bridge';

Page({
  data: {
    targetUrl: 'https://muhiddinjv.github.io/alipay-mini-app/',
  },

  onLoad() {
    var webContext = my.createWebViewContext('custom-web-view')
    this.webBridge = new WebViewBridge(webContext)
  },

  onMessage(e) {
    this.webBridge.listen(e)
  },
})

