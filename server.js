const express = require("express");
const bodyParser = require("body-parser");
//* CÓDIGO APENAS DE MODELO, PRECISA ADAPTAR PARA O PROJETO
const app = express();
const PORT = process.env.PORT || 5000;

// Armazenamento em memória para simplificar (substitua por um banco de dados real)
const employees = [];

app.use(bodyParser.json());

// Rota para adicionar um funcionário/visitante
app.post("/api/add-employee", (req, res) => {
  const { name, role, company } = req.body;
  const newEmployee = { id: employees.length + 1, name, role, company };
  employees.push(newEmployee);
  res.status(201).json({ message: "Funcionário cadastrado com sucesso!" });
});

// Rota para obter a lista de funcionários
app.get("/api/get-employees", (req, res) => {
  res.json(employees);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
