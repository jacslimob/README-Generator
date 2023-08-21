// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      
    case 'Apache License 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
      default:
      return '';  
  };
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    default:
      return '';   
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'Other'){
  return `This application is licensed under the ${renderLicenseLink(license)}. Click the link for more details.
  `
} else {
  return '';
}
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.project}
${renderLicenseBadge(response.license)}
## ${response.description}
               
  - ${response.why}
  - ${response.solution}
  - ${response.learn}
        
## Table of Contents        
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)
        
## Installation
        
${response.install}
        
## Usage
        
${response.usage}
        
## Credits
        
${response.collaborators}
        
## License

${renderLicenseSection(response.license)}
        
## Contributing
        
${response.contribute}

## Tests

${response.tests}

## Questions

GitHub: [${response.github}](https://github.com/${response.github})\   
Please direct any questions to [${response.email}](mailto:${response.email}).
`;
}

module.exports = generateMarkdown;
