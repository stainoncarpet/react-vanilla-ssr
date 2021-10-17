import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path"

import Home from "../../client/pages/Home.jsx";

const renderComponents = (bundleName = "") => {
    const stringifiedReact = ReactDOMServer.renderToString(<Home />);
    const p = path.resolve(__dirname, "..", "dist");

        return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>REACT SSR</title>
            <script defer="defer" src=${bundleName}></script>
        </head>
        <body>
        <h1>STATIC HTML</h1>
            <div id="app">${stringifiedReact}</div>
        </body>
    </html>
    `;
};

export default renderComponents;