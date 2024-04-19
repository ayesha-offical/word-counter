#! /usr/bin/env node
//for file exicution
//SHABANG 
// import the inquirer module  which is a command line interface of node.js
import inquirer from "inquirer";
import chalk from "chalk";
// declare a constant "answer" and assign it to the result of inquirer.propmt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellowBright.bold("Enter the sentence to count words: ")
    }
]);
const words = answer.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the length of the array to console
console.log(chalk.blueBright.bold(`Your Sentence Words  Count Is ${words.length}`));
