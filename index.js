// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

const licenseOptions = [
    'No license used',
    'GNU AGPLv3',
    'GNU GPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Apache License 2.0',
    'MIT License',
    'Boost Software License 1.0',
    'The UnLicense',
    ]
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
        type: 'confirm',
        name: 'tableofcontents',
        message: 'Would you like to include a table of contents?'
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
        type: 'input',
        name: 'tests',
        message: 'How do test?!'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Did you use any licenses?',
        choices: licenseOptions
    },

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
        console.log(answers.license)
    }
    )
}

// Function call to initialize app
init();

/*
1. Title of project (name of repository)
2. Enter description of project.
3. (confirm) Table of contents to be added.
4. Enter installation instructions.
5. Enter usage instructions:
    a. (confirm) Image to be included? (relative file path?)
6. Contributions section:
    a. (confirm) List collaborators.
    b. (confirm) Third party attributions.
    c. (confirm) How to contribute
7. Licenses section:
    a. (confirm) (checkbox?) Licenses Used 
    b. (confirm)(checkbox) badges (toplang/license/repo)
8. (confirm) How to run tests if there are any.
 */