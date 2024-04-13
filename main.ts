#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []
let condition = true;

while (condition)
    {let todosQuestion = await inquirer.prompt(
    [
        {
            name: "firstQuestion",
            type: "input",
            message:"what would you like to add  your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your todos?",
        }
     

]);
todos.push(todosQuestion.firstQuestion);
console.log(todos)
condition = todosQuestion.secondQuestion;
}
  
