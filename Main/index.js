//Copied from Mini Project 09-NodeJS
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
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
        type:'input',
        message:'List any/all licenses:',
        name:'license',
    }
  ])

  .then((response) => {
    
    fs.writeFile('README.md', 
        `# ${response.project}

        ## ${response.description}        
        
        - ${response.why}
        - ${response.solution}
        - ${response.learn}
        
        ## Table of Contents        
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        
        ## Installation
        
        ${response.install}
        
        ## Usage
        
        ${response.usage}
        
        ## Credits
        
        ${response.collaborators}
        
        ## License
        
        ${response.license}        
        
        ## How to Contribute
        
        If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
        
        `, (err) => err ? console.error(err) : console.log('File made!'))
    
  }
  );