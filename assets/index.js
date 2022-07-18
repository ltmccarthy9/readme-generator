const fs = require("fs");
const inquirer = require('inquirer');


// Inquirer prompt for all user input
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'p_title',
  },
  {
    type: 'input',
    message: 'Describe your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions: ',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contributions: ',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Test instructions: ',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Pick a license:',
    choices: ['MIT', 'Apache license 2.0', 'GPLv3'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is your github username? :',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  }

])
.then((response) => {       //creating variables from user input
 console.log(response);
var title = response.p_title;
var description = response.description;
var installation = response.installation;
var usage = response.usage;
var contribution = response.contribution;
var tests = response.tests;
var license = response.license;
var licenseBadge;
var licenseDesc;
if (license === 'MIT'){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    licenseDesc = "This project is covered under the MIT License";
}else if (license === 'Apache'){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseDesc = "This project is covered under the Apache 2.0 License"
}else {
    licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    licenseDesc = "This project is covered under the GNU GENERAL PUBLIC LICENSE v.30"
}
var github = response.github;
var email = response.email;

// readme variable for entire readme template
var readme = `
# ${title}
${licenseBadge}

## Table of contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributions](#Contributions)
5. [Tests](#Tests)
6. [License](#License)
7. [Questions](#Questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributions
${contribution}

## Tests
${tests}

## License
${licenseDesc}

## Questions
You can reach me through my github or email.
https://github.com/${github}
${email}`

//call generate markdown function (writefile)
generateMarkdown(readme)
});

//takes the readme and writes it to a new file called generatedREADME.md
function generateMarkdown(readme){
    fs.writeFile('generatedREADME.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}