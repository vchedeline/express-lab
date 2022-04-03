const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
  res.send(
    `
    99 Bottles of beer on the wall
    <html>
      <body>
        <a href='/98'>take one down, Pass it around</a>
      </body>
    </html>
    `
  );
});

app.listen(PORT, () => {
  console.log(`We are LIVE on Port: ${PORT}!`);
});