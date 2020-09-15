import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";
import App from "../shared/App";
import SpacexLaunch from "../shared/SpacexLaunch";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const requestInitialData = SpacexLaunch.fetchInitialData();

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { initialData };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SpaceX Launch Projects</title>
          <link rel="icon" href="data:,">
          <base href="/" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="stylesheet" href="/css/main.css">
          <script src="/bundle.js.gz" defer></script>
          <script>window.__initialData__ = ${serialize(initialData)}</script>
        </head>

        <body>
          <div id="root">${markup}</div>
        </body>
      </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
