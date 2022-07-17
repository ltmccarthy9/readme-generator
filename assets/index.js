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

])
.then((response) => {
 console.log(response);
var userName = response.name;
var location = response.location;
var bioGraphy = response.biography;
var Linked = response.linkedin;
var github = response.github;

generateMarkdown(readme)
});

function generateMarkdown(readme){
    fs.writeFile('generatedREADME.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}