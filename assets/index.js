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
    message: 'Questions:',
    name: 'questions',
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
var questions = response.questions;
var licensePrint
var readme = `
# ${title}

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
${questions}`

generateMarkdown(readme)
});

function generateMarkdown(readme){
    fs.writeFile('generatedREADME.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}