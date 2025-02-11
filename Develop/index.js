// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
            type: 'input',
            message: 'What will be the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What will be the description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What will be the installation instructions for your project?',
            name: 'installation', 
        },
        {
            type: 'input',
            message: 'What will be the usage information for your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What will be the contribution guidelines for your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What will be the test instructions for your project?',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'What will be the license for your project?',
            name: 'license',
            choices: ["MIT", "GPL", "Apache 2.0", "BSD", "CC0", "None"],
          },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address',
            name: 'email',
        },
      ])
      .then((response) => {
        console.log(response);
        const readmeText = generateMarkdown(response);
        writeToFile('README.md', readmeText);
      });
}

// Function call to initialize app
init();
