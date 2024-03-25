import WebViewBridge from './bridge';

Page({
  data: {
    targetUrl: 'http://127.0.0.1:5500/pages/index/index.html',
  },

  onLoad() {
    var webContext = my.createWebViewContext('custom-web-view')
    this.webBridge = new WebViewBridge(webContext)
  },

  onMessage(e) {
    this.webBridge.listen(e)
  },
})

