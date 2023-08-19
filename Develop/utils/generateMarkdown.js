// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return license.badge;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return license.link;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
  const link = renderLicenseLink(license);
  const badge = renderLicenseBadge(license);
  return `${link} ${badge}`;
} else {
  return '';
}
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.project}

## ${response.description}        
        
  - ${response.why}
  - ${response.solution}
  - ${response.learn}
        
## Table of Contents        
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing] 
- [Tests] 
- [Questions]
        
## Installation
        
${response.install}
        
## Usage
        
${response.usage}
        
## Credits
        
${response.collaborators}
        
## License
        
${renderLicenseSection(response.license)}
${response.license.badge}
${response.license.link}        
        
## How to Contribute
        
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`;
}

module.exports = generateMarkdown;
