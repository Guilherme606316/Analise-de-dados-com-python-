// criação de uma requisição com express
// necessário no packages.json colocar uma chave e valor como "type: module"
import express from "express";

// opcionalmente, importa a biblioteca path.
import path from "path";

// cria uma instância do express 
const app = express();

//opcionalmente, pode integrar arquivos javascripts e css do front-end com path.
app.use(express.static(path.join(__diname, "index.html")));

//cria uma página do tipo "get", onde quando um usuário acessa-lá receberá a mensagem json: bem vindo.
app.get("/pagina inicial", (req, res) => {
    app.json({mensagem: "bem vindo"})
});

// servidor começa a ouvir na porta 3000
app.listen(3000, () => {
      console.log(" o servidor está funcionando")
});
