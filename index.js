
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [
    {
        message: "what is your github username?",
        name: "github"
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
        default: "npm i, node index.js"
    },
    {
        message: "Who else contributed to this project?",
        name: "contributors",
        type: "input"
    },
    {
        message: "What is the usage for this project",
        name: "usage",
        type: "input"
    },
    {
        
        message: "Chose the preferred license for this project: ",
        name: "license",
        type: "list",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
         },

         {
            message: "What commands should be run to run test",
            name: "test",
            type: "input"
        },
    
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
];

function writeToFile(data) {
    try {
        fs.writeFileSync("README.md", data)
    }
    catch (err) {}
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const createFile = generateMarkdown(response);
        writeToFile(createFile);
    })
}

// function call to initialize program
init();
