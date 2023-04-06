// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project's title?"
   },
   {
        type: "input",
        name: "description",
        message: "What is the name of the description?"
    },
    {
        type: "input",
        name: "instructions",
        message: "Write the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Write the usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "Write the contribution."
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions."
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter the GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
