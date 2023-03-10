const express = require("express");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use("/", routes);

// inicialização do servidor
app.listen(3000, "192.168.1.106", () => {
  console.log("Server listening on port 3000");
});
