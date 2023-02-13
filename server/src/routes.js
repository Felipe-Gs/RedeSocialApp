const Z = require("zod");
const express = require("express");
const router = express.Router();
const { Client, Poll } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "felipe",
  database: "OnibusApp",
});

client.connect();

router.post("/inserir", (req, res) => {
  {
  }
});

//listar
router.get("/listar", (req, res) => {
  {
  }
});

//deletar

router.delete("/deletar/:id", (req, res) => {
  {
  }
});

router.post("/login", (req, res) => {
  {
  }
});

module.exports = router;
