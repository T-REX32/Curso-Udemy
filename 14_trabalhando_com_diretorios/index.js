const fs = require("fs")

// Criando diretórios (mkdirSync) e vendo se eles já existem (existsSync)!

if(!fs.existsSync("./minhapasta")){ // O "./" significa o diretório atual
    console.log("Não existe!")
    fs.mkdirSync("minhapasta")

    console.log("Diretório criado com sucesso!")
} else {
    console.log("Diretório já existe!")
}