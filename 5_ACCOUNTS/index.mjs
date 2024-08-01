// modulos externos
import chalk from "chalk";

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import inquirer from "inquirer"


// modulos internos

const fs = require("fs")

console.log("Iniciamos o Accounts")

operation()
function operation() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "O que prefere fazer?",
        choices: [
            "Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"
        ]
    }]).then((answer) => {
        const action = answer("action")
        console.log(answer)

        if (action == "action") {
            createAccout()
        }
    })
}

function createAccout() {
    console.log(chalk.bgGreen("Obrigado por escolher nosso banco!"))
    console.log(chalk.green("Criação de conta"))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: "accountName",
        message: "Digite um nome para sua nova conta:"
    }]).then((answer) => {
        const accountName = answer("accountName")
        console.log(accountName)

        if (!fs.existsSync(`accounts${accounts}.json`)) {
            fs.mkdir("accounts")
        }
        if (fs.existsSync(`accounts${accounts}.json`)) {
            console.log(chalk.bgRed.black("Já existe uma conta com esse nome!"))
            buildAccount()
        }

        fs.writeFileSync(`accounts${accounts}.json`, `{balance: 0}`, function (err) {
            console.log(err)
        })

        console.log(chalk.green("Parabéns! Sua conta foi criada!"))
        operation()

    }).catch((err) => console.log(err))
}