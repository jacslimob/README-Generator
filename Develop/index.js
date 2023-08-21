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
        message: 'What did you learn while making this project?',
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
        message: 'Enter your GitHub Username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address:',
      },
    {
        type:'list',
        message:'Which license?',
        name:'license',        
        choices:[
          {
            name: 'MIT License',            
          },
          {
            name: 'Apache License 2.0',           
          },
          {
            name: 'Other',
          },
          
        ],
    },
    {
        type:'input',
        message:'Guidelines for contributing?',
        name:'contribute',
    },
    {
        type:'input',
        message:'Instructions for testing:',
        name:'tests',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 
        generateMarkdown(data), (err) => err ? console.error(err) : console.log('File made!'))
}

    
    
    
  
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('README.md',response);
        console.log(response);
    });
}

// Function call to initialize app
init();
