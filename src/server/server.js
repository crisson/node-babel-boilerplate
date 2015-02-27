import Promise from 'bluebird'
import bunyan from 'bunyan'

import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import compression from 'compression'
import errorHandler from 'errorhandler'
import bunyanMiddleware from 'bunyan-middleware'

export default (config = {}) => {
    const app = express()

    const appName = 'app'

    const loggerConfig = {
        name: appName
    }

    const logger = bunyan.createLogger(loggerConfig)

    const bunyanMiddlewareConfig = {
      logger: logger,
      obscureHeaders: ['Authorization']
    }

    app.disable('x-powered-by');
    app.use(bunyanMiddleware(bunyanMiddlewareConfig))

    // app.use('/api', middleware.auth)
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true }));
    app.use(helmet.xframe('deny'));
    app.use(helmet.xssFilter());

    if (process.env.NODE_ENV !== 'production') {
        app.use(errorHandler())
    }
    
    return app
}