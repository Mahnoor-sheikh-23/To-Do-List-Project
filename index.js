#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`\n\t\t ~~~~~WLLCOME TO THIS TODOS DIARY~~~~\n`));
let todos = [];
let conditions = true;
while (conditions) {
    let ques = await inquirer.prompt([{
            name: "toDo",
            type: "input",
            message: chalk.blue(" what do you want to do .... ")
        }]);
    todos.push(ques.toDo);
    console.log(chalk.green(`${ques.toDo} added in your list`));
    let addMore = await inquirer.prompt([{
            name: "againAdd",
            type: "confirm",
            message: chalk.blue("Do you want to add more ? "),
            default: "false"
        }]);
    conditions = addMore.againAdd;
}
console.log(chalk.magenta.italic(`Here is your Todos list : `));
todos.forEach((item) => {
    console.log(item);
});
console.log(chalk.magenta(`\n\t\tYour list is Ready !! \n`));
