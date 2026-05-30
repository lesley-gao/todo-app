const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`     <html>       <head>         <title>Todo Frontend</title>       </head>       <body style="font-family: Arial; padding: 40px;">         <h1>Hello Todo Frontend</h1>         <p>This frontend service is running on Amazon ECS.</p>         <p>This is a simple web application for the Todo microservices demo.</p>       </body>     </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).send("Frontend healthy");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend service running on port ${PORT}`);
});
