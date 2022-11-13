// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a Title for your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license. This lets other developers know what they can and cannot do with your project.',
        choices: ['None', 'Apache2.0', 'MIT', 'GNUGeneralPublicv3.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer."
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Write your GitHub username here:'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Write your email address here:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            (writeToFile("README.md", generateMarkdown(answers)));
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();