
const inquirer = require("inquirer");
const generateMarkdown
// array of questions for user
const questions = [
    {
        message: "what is your name?",
        name: "name"
    },{
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
