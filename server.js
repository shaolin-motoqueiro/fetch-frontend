import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

let usuarios = [
    {
        id: 1,
        nome: "João",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@email.com"
    }
];

// GET - buscar usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// POST - cadastrar usuário
app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };

    usuarios.push(novoUsuario);
    res.json(novoUsuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});