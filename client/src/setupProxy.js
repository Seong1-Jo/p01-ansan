const { createProxyMiddleware } = require('http-proxy-middleware');
//프론트엔드에서 포트 3000번을 주던게  http-proxy-middleware를 해서 포트 5000번으로 한다
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};
