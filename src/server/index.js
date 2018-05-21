import express from "express"
import cors from 'cors'
import React from "react"
import { renderToString } from "react-dom/server"
import {StaticRouter, matchPath} from 'react-router-dom'
import App from "../shared/App"
import serialize from "serialize-javascript"
import routes from "../shared/routes"
import api from './api-server'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app = express();
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
/**
 * Agregando los middleware
 */
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(cookieSession({
  name : 'session',
  keys : ['key1', 'key2']
}))
app.use('/api', api)

/**
 * Urls aplicados en el servidor
 */

app.get("*", (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
  const markup = renderToString(
    <StaticRouter location={req.url} context={activeRoute} >
      <App/>
    </StaticRouter>
  )
  

  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Proyecto No.1 de Base de datos 2</title>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `)
})

app.listen( server_port, server_ip_address, () => {
  console.log("Server is listening in http://"+server_ip_address+":"+server_port);
})
