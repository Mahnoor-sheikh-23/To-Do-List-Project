#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright(`\n\t\t ~~~~~ WLLCOME TO THIS TODOS DIARY ~~~~\n`));
// array list 
let todos = []

let conditions = true
// loop  
while(conditions){
     let ques = await inquirer.prompt([{
        name : "toDo",
        type : "input",
        message : chalk.blue(" what do you want to add in your todo .... \n")
    }]);
    
    if(!ques.toDo){
     console.log(chalk.red.bold("\t----Nothing is Added in your todos----\n"));
     conditions = ques.toDo 
    }else{
      todos.push(ques.toDo)
      console.log(chalk.green(`"${ques.toDo}" is added in your list!!`));

        let addMore = await inquirer.prompt([{
            name : "againAdd",
            type : "confirm",
            message : chalk.blue(" Do you want to add more ?"),
            default : false
        }])
        if(conditions = addMore.againAdd){
            ques.toDo
            
        }else{
            console.log(chalk.magenta.italic(`\nHere is your Todos list : \n`));
                todos.forEach((item,index)=>{console.log(chalk.rgb(226,167,128).italic(`${index +1 } : ${item}\n`));
                })
                console.log(chalk.rgb(335,136,424)(`\n\t\t-----YOUR LIST IS READY !!----\t\t\n`));
            // conformation 
            let ans = await inquirer.prompt([{
                name : "option",
                type : "confirm",
                message : chalk.rgb(186,98,129)("Do you want to change your todos ? "),
                default : false 
            }]) 
            // options 
            if(conditions = ans.option){
                let giveOptions = await inquirer.prompt([{
                    name : "options",
                    type : "list",
                    message :chalk.rgb(186,110,150)( "select the options which you want to change "),
                    choices : ["Add","Update","Read","Delete"]
                }])   
                // add option
                if(giveOptions.options === "Add"){
                         ques.toDo
                    }
                // update option
                if(giveOptions.options === "Update"){
                    let userUpdate = await inquirer.prompt([{
                        name : "update",
                        type : "list",
                        message : chalk.rgb(186,120,150)("Select items for update"),
                        choices : todos.map( list=> list)
                     }])
                    let Todo = await inquirer.prompt([{
                        name : "todoo",
                        type : "input",
                        message : chalk.rgb(186,120,150)("add updation..")
                    }])
                    let newTodo:any = todos.filter(val => val !== userUpdate.update);
                    todos = [Todo.todoo,...newTodo];
                    console.log(chalk.magenta.italic(`\nHere is your Todos list : \n`));
                    todos.forEach((item,index)=>{console.log(chalk.rgb(226,167,128).italic(`${index +1 } : ${item}\n`));
                     })
                     console.log(chalk.rgb(146,28,78)("\nYour List Has Been Updated"));
                     console.log(chalk.rgb(235,136,324)(`\n\t\t-----YOUR LIST IS READY !!----\t\t\n`));
                    break;
                    
                //  read option
                }  
                if(giveOptions.options == "Read"){
                    console.log(chalk.magenta.italic(`\nHere is your Todos list : \n`));
                    todos.forEach((item,index)=>{console.log(chalk.rgb(226,167,128).italic(`${index +1 } : ${item}\n`));
                 })
                 console.log(chalk.rgb(235,136,324)(`\n\t\t-----YOUR LIST IS READY !!----\t\t\n`));
                  break;
                    
                //  delete option  
                }
                if(giveOptions.options == "Delete"){
                    let userDelete = await inquirer.prompt([
                     {
                        name : "delete",
                        type : "list",
                        message : chalk.rgb(186,120,150)( "Select items for delete"),
                        choices : todos.map((list)=> list )
                     }
                    ])
                    let newTodos : any = todos.filter(val=> val !== userDelete.delete)
                        todos = [...newTodos];
                        console.log(chalk.magenta.italic(`\nHere is your Todos list : \n`));
                     todos.forEach((item,index)=>{console.log(chalk.rgb(226,167,128).italic(`${index +1 } : ${item}\n`));
                    })
                    console.log(chalk.rgb(146,28,78)("\nYour 1 Item Has Been Deleted"));
                    console.log(chalk.rgb(235,136,324)(`\n\t\t-----YOUR LIST IS READY !!----\t\t\n`));
                    
                  break;
                    
                } 
                
            }
        }
   }  
}
            
            
                