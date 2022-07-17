const fs = require("fs");
const inquirer = require('inquirer');
//const { bindNodeCallback } = require("rxjs");

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Where are you located?',
    name: 'location',
  },
  {
    type: 'input',
    message: 'bio: ',
    name: 'biography',
  },
  {
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'linkedin',
  },
  {
    type: 'input',
    message: 'What is your Github URL?',
    name: 'github',
  }
])
.then((response) => {
 console.log(response);
var userName = response.name;
var location = response.location;
var bioGraphy = response.biography;
var Linked = response.linkedin;
var github = response.github;

writeHTML(HTMLPORTFOLIO)
});

function writeHTML(portfolio){
    fs.writeFile('index.html', portfolio, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}