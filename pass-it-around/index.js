const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
  res.send("No Bottles of Crémas On the Wall.");
})

app.get("/:num_of_bottles", (req,res) => {
  if(parseInt(req.params.num_of_bottles) === 0) {
    res.send(
      `
      0 Bottle of Crémas on the wall,
      <html>
        <body>
          <a href='/'>add more Bottles of Crémas on the wall!</a>
        </body>
      </html>
      `
    );
  }
  else {
    let takeOne = parseInt(req.params.num_of_bottles) - 1;
    
    res.send(
    `
    ${req.params.num_of_bottles} Bottles of Crémas on the wall,
    <html>
      <body>
        <a href='/${takeOne}'>take one down, pass it around</a>
      </body>
    </html>
    `
    );
  }
});

app.listen(PORT, () => {
  console.log(`We are LIVE on Port: ${PORT}!`);
});