
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        message: "what is your github username?",
        name: "name"
    },
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title",
  
      },
      {
        message: "Enter a description of your project",
        type: "input",
        name: "description"
      },
      {
        message: "Provide installation instructions:",
        name: "installationInstructions",
        type: "input",
        default: "node index.js"
    },
    {
        message: "Who else contributed to this project?",
        name: "contributors",
        type: "input"
    },
      
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    const answers = inquirer.prompt(questions);
    console.log(answers.name)

}

// function call to initialize program
init();
