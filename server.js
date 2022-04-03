const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;

app.get("/", (request,response) => {
  response.send(
    `
    <html>
      <body>
        <h1>I am Root!</h1>
      </body>
    </html>
    `
  )
})


app.listen(PORT, () => {
  console.log(`I am listening Port: ${PORT}...`);
});