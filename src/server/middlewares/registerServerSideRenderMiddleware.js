import React from 'react'
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../../app/routes'

const registerServerSideRenderMiddleware = app => {
  app.use((req, res) => {
    let context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    )
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
    res.end()
  })
  return app
}

export default registerServerSideRenderMiddleware