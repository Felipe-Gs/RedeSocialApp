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

//fazer login
router.post("/login", (req, res) => {
  try {
    const postSchema = Z.object({
      email: Z.string().email(),
      password: Z.string().min(3),
    }).required();

    const validData = postSchema.parse(req.body);
    const { email, password } = validData;
    const query = `SELECT * FROM users WHERE email = $1 AND password = $2`;
    client.query(query, [email, password], (err, result) => {
      if (err) {
        return res.status(500).send({
          message: "Não foi possivel realizar o login",
        });
      } else if (result.rows.length > 0) {
        //usuario encontrado, retorna os dados dele
        return res.status(200).send({
          usuario: result.rows[0],
        });
      } else {
        return res.status(401).send({
          message: "usuario invalido",
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
      user_name: Z.string().optional(),
    }).required();
    const validData = postSchema.parse(req.body);
    const { title, description, image, user_id, user_name } = validData;
    const query = `
      INSERT INTO posts (title, description, image, user_id, user_name)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [title, description, image, user_id, user_name];

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

// visualizar os posts por id especifico, do usuario que esta logado
router.get("/visualizarPost/:id", (req, res) => {
  const id = req.params.id;
  try {
    const query = `SELECT * FROM posts where id = ${id}`;
    client.query(query, (err, result) => {
      if (err) {
        return res.status(500).send({
          message: "erro ao tentar buscar os posts",
        });
      } else {
        res.status(200).send(result.rows);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// visualizar todos os post
router.get("/visualizarPost", (req, res) => {
  try {
    const query = `SELECT * FROM posts`;
    client.query(query, (err, result) => {
      if (err) {
        return res.status(500).send({
          message: "erro ao tentar buscar os posts",
        });
      } else {
        res.status(200).send(result.rows);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//visualizar comentarios
router.get("/comentarios/:id", (req, res) => {
  const post_id = req.params.id;
  try {
    const query = `SELECT * FROM comments where post_id = ${post_id}`;
    client.query(query, (err, result) => {
      if (err) {
        return res.status(500).send({
          message: "erro ao tentar carregar os comentarios",
        });
      } else {
        return res.status(200).send({
          comments: result.rows,
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
});

//criar um comentarios
router.post("/comments", (req, res) => {
  try {
    const commentSchema = Z.object({
      text: Z.string(),
      user_id: Z.number(),
      post_id: Z.number(),
      user_name: Z.string(),
    }).required();
    const validData = commentSchema.parse(req.body);
    const { text, user_id, post_id, user_name } = validData;

    const query = `
    INSERT INTO comments (text, user_id, post_id, user_name)
    VALUES ($1, $2, $3, $4)
  `;
    const values = [text, user_id, post_id, user_name];

    client.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).send({
          message: "erro ao tentar fazer comentario",
        });
      } else {
        return res.status(200).send({
          message: "comantario adicioando com sucesso",
        });
      }
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dados inválidos!",
    });
  }
});

router.delete("/deletarComentario/:post_id/:id", (req, res) => {
  const post_id = req.params.post_id;
  const id = req.params.id;
  try {
    const query = `DELETE FROM comments where post_id = ${post_id} AND id =${id}`;
    client.query(query, (err, result) => {
      if (err) {
        console.error(res);
        return res.status(500).send({
          message: "erro ao tentar deletar um comentario",
        });
      } else {
        return res.status(200).send({
          message: "comentario deletado com sucesso",
        });
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
