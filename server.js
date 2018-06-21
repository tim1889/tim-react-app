const express = require('express');
const app = express();
const path = require("path");
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const browserSync = require('browser-sync').create();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res, next) =>{
  const filename = path.join(DIST_DIR, 'index.html');
  complier.outputFileSystem.readFile(filename, (err, result) =>{
      if (err) { return(next(err)) }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
  })
});

// const server = require('http').createServer(app);
app.listen(3000, function () {
  // const address = server.address();
  console.log('成功启动: http://loacalhost:3000');
  console.log('成功启动: http://127.0.0.1:3000');
})