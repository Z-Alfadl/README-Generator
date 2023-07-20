//Files and dependencies
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

//An array of questions that the user will have to answer.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    { 
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
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
        message: 'Please provide instructions on how your project is meant to be used'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'If you are including a screenshot of your project, please enter the relative filepath here. (eg: /assets/images/screenshot.png'
    },
    {
        type: 'confirm',
        name: 'confirmCredit',
        message: 'Did others help contribute to this project?'
    },
    {
        //Question is only asked if the user answers "yes" to the previous question
        type: 'input',
        name: 'credits',
        message: 'Please enter the GitHub usernames of any collaborators.',
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
        type: 'confirm',
        name: 'testConfirm',
        message: 'Are there any tests included in this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe how a user would go about running these tests.',
        when: (answer) => answer.testConfirm === true
    },
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Are there any licenses associated with this project?'
    },
    {
        /*In choices array, name is what is presented to the user,
         value is passed to the answers object*/
        type: 'checkbox',
        name: 'license',
        message: 'Is your project covered under any of the following licenses?',
        choices: [
            { name: 'GNU AGPLv3', value: ['GNU AGPLv3', 'agpl-3.0'] },
            { name: 'GNU GPLv3', value: ['GNU GPLv3','gpl-3.0'] },
            { name: 'GNU LGPLv3', value: ['GNU LGPLv3','lgpl-3.0'] },
            { name: 'Mozilla Public License 2.0', value: ['Mozilla Public License 2.0','mpl-2.0'] },
            { name: 'Apache License 2.0', value: ['Apache License 2.0', 'apache-2.0'] },
            { name: 'MIT License', value: ['MIT License', 'mit'] },
            { name: 'Boost Software License 1.0', value: ['Boost Software License 1.0','bsl-1.0'] },
            { name: 'The UnLicense', value: ['The UnLicense', 'unlicense'] },
        ],
        when: (answer) => answer.licenseConfirm === true
    },
];

//Function that creates the README
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}-README.md`, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(`${fileName}-README created`)

    })
}

/*Function that begins prompting user with questions, 
then passes the answers to the writeToFile function.
*/
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile(answers.title, answers)
        }
        )
}

// Function call to initialize app
init();
