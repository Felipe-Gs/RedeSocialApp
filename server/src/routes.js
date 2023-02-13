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
     VALUES ($1, $2, $3)
    `;
    const values = [name, email, password];
    client.query(query, values, (err, result) => {
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

//COMENTARIOS
router.post("/posts", (req, res) => {
  try {
    const postSchema = Z.object({
      title: Z.string().min(5),
      description: Z.string().min(5),
      image: Z.string().optional(),
      user_id: Z.number(),
    }).required();
    const validData = postSchema.parse(req.body);
    const { title, description, image, user_id } = validData;
    const query = `
      INSERT INTO posts (title, description, image, user_id)
      VALUES ($1, $2, $3, $4)
    `;
    const values = [title, description, image, user_id];

    client.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).send({
          message: "erro ao tentar criar um post",
        });
      } else {
        return res.status(200).send({
          message: "post criado com sucesso",
        });
      }
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dados invalidos!",
    });
  }
});

// router.post("/posts", (req, res) => {
//   const { title, description, image, user_id } = req.body;

//   const query =
//     "INSERT INTO posts (title, description, image, user_id) VALUES ($1, $2, $3, $4) RETURNING *";
//   const values = [title, description, image, user_id];

//   client.query(query, values, (err, result) => {
//     if (err) {
//       res.status(400).send({ message: "Erro ao adicionar post" });
//     } else {
//       const post = result.rows[0];
//       res.status(201).send({ post });
//     }
//   });
// });

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
