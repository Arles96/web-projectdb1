import express from "express";
import cors from 'cors';
import React from "react";
import { renderToString } from "react-dom/server";
import {StaticRouter, matchPath} from 'react-router-dom';
import App from "../shared/App";
import serialize from "serialize-javascript";


const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res) => {

  /*const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App/>
    </StaticRouter>
  );*/
  

  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="/bundle.js" defer></script>
        <script></script>
      </head>

      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening in http://localhost:3000");
});
