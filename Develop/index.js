// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'What does your project do?',
      name: 'description',      
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'why',      
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'solution',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type:'input',
        message:'What are the steps required to install your project?',
        name:'install',
    },
    {
        type:'input',
        message:'Provide instructions on how to use your project:',
        name:'usage',
    },
    {
        type:'input',
        message:'List all collaborators and their links:',
        name:'collaborators',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    {
        type:'list',
        message:'Which license?',
        name:'license',        
        choices:[
            {
            name: 'MIT License',
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            link: 'https://opensource.org/licenses/MIT'
          },
          {
            name: 'Apache License 2.0',
            badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            link: 'https://opensource.org/licenses/Apache-2.0'
          },
        ],
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 
        generateMarkdown(data), (err) => err ? console.error(err) : console.log('File made!'))
}

    
    
    
  
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {writeToFile('README.md',response)});
}

// Function call to initialize app
init();
