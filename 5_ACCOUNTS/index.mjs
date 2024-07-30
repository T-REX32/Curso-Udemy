// modulos externos
import chalk from "chalk";

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import inquirer from "inquirer"

// Seu código aqui


// modulos internos

const fs = require("fs")

console.log("Iniciamos o Accounts")

operation()

function operation () {
    inquirer.prompt([{ // da pra escolher opções com o prompt
        type: "list",
        name: "action",
        message: "O que deseja fazer?",
        choices: [
            "Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"
        ]
    }]).then((answer) => {
        const action = answer["action"]

        console.log(action)
        if(action == "Criar Conta") {
            createAccount()
        }
    }

    )
    .catch((err) => console.log(err))
}

// criando uma conta

function createAccount() {
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir."))
}