'use strict';

module.export = (app) => {
  app.enable('trust proxy');
  app.use((req, res, next) => {
    if (req.secure) {
      next();
    } else {
      const proxypath = process.env.PROXY_PASS || ''
      res.redirect(301, `https://${req.headers.host}${proxypath}${req.url}`);
    }
  });
};