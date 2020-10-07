
const inquirer = require("inquirer");
const generateMarkdown
// array of questions for user
const questions = [
    {
        message: "what is your name?",
        name: "name"
    },

    {
        message: "what is your age?",
        name: "age",

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
