import express from "express";
import path from "path";
import "regenerator-runtime/runtime.js";
import fs from "fs";

import renderComponents from "./helpers/renderer.js";

const app = express();
const distPath = path.join(__dirname, "..", "..", "dist");

app.use(express.static(distPath));

let currentBundleName;

app.listen(3000, () => {
    fs.readFile(path.join(__dirname, "..", "dist", "index.html"), 'utf-8' , function (error, html) {
        if (error) {
          throw error;
        }
        currentBundleName = html.match(/dist\/bundle\.[a-zA-Z0-9]+\.js/);
      });

    console.log("server online");
});

app.get("/api/test", (req, res) => {
    res.status(200).send({msg: "OK"})
});

app.get("/api/hash", (req, res) => {
    res.status(200).send({msg: "OK"})
});

app.get("/ssr", (req, res) => {
    const ssrContent = renderComponents(currentBundleName);
    console.log(ssrContent);
    res.status(200).send(ssrContent);
});

app.get("/*", (req, res) => {
    const file = path.resolve(__dirname, "..", "..", "dist", "index.html");
    res.status(200).sendFile(file);
});