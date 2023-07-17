// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// const generateMarkdown = require('generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project does.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can a user install your project on their own device?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how your project is meant to be used'
    },
    {
        type: 'confirm',
        name: 'confirmation',
        message: 'Can others contribute to this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to this project?',
        when: (answer) => answer.confirmation === true
    },
    {
        type: 'confirm',
        name: 'confirmCredit',
        message: 'Did others help contribute to this project?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please enter the names of contributors.',
        when: (answer) => answer.confirmCredit === true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do test?!'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Did you use any licenses?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using',
        when: (answer) => answer.confirmLicense === true
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}-README.md`, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(`${fileName}-README created`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers.title, answers)
    })
}

// Function call to initialize app
init();
