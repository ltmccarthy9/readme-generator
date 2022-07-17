const fs = require("fs");
const inquirer = require('inquirer');
//const { bindNodeCallback } = require("rxjs");

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
    choices: ['MIT', 'Apache license 2.0', 'GPLv2'],
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
.then((response) => {
 console.log(response);
var title = response.p_title;
var description = response.description;
var installation = response.installation;
var usage = response.usage;
var contribution = response.contribution;
var tests = response.tests;
var license = response.license;
var licenseBadge;
if (license === 'MIT'){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}else if (license === 'Apache'){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
}else {
    licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
}
var github = response.github;
var email = response.email;
var readme = `
# ${title}
${licenseBadge}

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
${licensePrint}

## Questions
You can reach me through my github or email.
https://github.com/${github}
${email}`

generateMarkdown(readme)
});

function generateMarkdown(readme){
    fs.writeFile('generatedREADME.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}