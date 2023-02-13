const Z = require("zod");
const express = require("express");
const router = express.Router();
const { Client, Poll } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "felipe",
  database: "RedeSocial",
});

client.connect();

// arquivos de rotas
// USUARIOS
router.post("/cadastrar", (req, res) => {
  try {
    const usuarioBody = Z.object({
      name: Z.string().min(3),
      email: Z.string().email(),
      password: Z.string().min(3),
    }).required();
    const validData = usuarioBody.parse(req.body);
    const { name, email, password } = validData;
    const query = `
     INSERT INTO users (name, email, password)
     VALUES ('${name}', '${email}', '${password}')
    `;
    client.query(query, (err, result) => {
      if (err) {
        return res.status(400).send({
          message: "erro ao tentar cadastrar usuario",
        });
      } else {
        res.status(200).send({
          message: "usuario cadastado com sucesso",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// listar
router.get("/listar", (req, res) => {
  try {
    const query = "SELECT * FROM users";
    client.query(query, (err, result) => {
      if (err) {
        res.status(500).send({
          message: "erro ao tentar listar os usuarios",
        });
      } else {
        res.status(200).send(result.rows);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// //deletar

// router.delete("/deletar/:id", (req, res) => {
//   {
//   }
// });

// router.post("/login", (req, res) => {
//   {
//   }
// });

module.exports = router;
