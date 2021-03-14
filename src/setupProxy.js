const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/api", {
      target: "http://api.myserver.com", 
      changeOrigin: true, 
      ws: true, 
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
//http://api.myserver.com/userList