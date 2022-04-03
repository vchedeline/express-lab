const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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
});

app.get("/greeting", (req,res) => {
  res.send("Hola, Amigos!");
});

app.get("/greeting/:name", (req,res) => {
  res.send(`Hola, ${req.params.name}!`)
});

app.get("/tip/:total/:tipPercentage", (req,res) => {
  res.send(`${parseInt(req.params.total) * parseInt(req.params.tipPercentage) / 100}`);
});

app.get("/magic/:question", (req,res) => {
  let randomNum = Math.floor(Math.random() * (magicBall.length));

  res.send(
    `
    ${req.params.question.replace("%20", " ")}\n
    <html>
      <body>
        <h1>${magicBall[randomNum]}</h1>
      </body>
    </html>
    `
  );
});

app.listen(PORT, () => {
  console.log(`I am listening Port: ${PORT}...`);
});