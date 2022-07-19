# Readme.md Generator

## Technologies Used
* Javascript
* Node.js
* Visual Studio Code
* Github
* Gitbash
* npm Inquirer

## Description
Readme.md Generator is a markdown file generation application that creates a README.md styled
file through user input in the terminal using node.js and the Inquirer package.  When the file is run
through node.js in the terminal, the user is prompted for a title, description, installation instructions,
usage, contributions, tests, license, their github username, and their email.  Once every question is completed,
a README.md is automatically created.

## Installation
Clone or copy index.js and package.json.  Then install the correct packages by running npm install in your terminal, this will install Inquirer8.2.4
as it is listed in package.json. Once these are ready, open your terminal, navigate to the correct file location, run node - "node index.js" and follow the prompt instructions.

## Video Demonstration
https://drive.google.com/file/d/1Q-Ys2AbDnkuIJ2gBx2iT37Yc-ekg-AqS/view < - - - - - video walkthrough

## Usage
This application is used to generate a README.md from the command line so that you don't have to spend time on formatting titles, links, or license badges.

## Code
```javascript
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'p_title',
  },
```
This is an example of a single inquirer question using prompt.  This is how user input is gathered.

```javascript
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
```
Here we use template literals to insert user input into the README.md.

```javascript
function generateMarkdown(readme){
    fs.writeFile('generatedREADME.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
);
```
Here we take the completed readme and send it to generateMarkdown function that uses writeFile to generate the README.md.

## Contact
https://github.com/ltmccarthy9   < - - - Github
ltmccarthy9@gmail.com     < - - - Email
https://www.linkedin.com/in/liam-mccarthy-b06b9a218/  < - - - LinkedIn

## License

MIT License

Copyright (c) 2022 Liam McCarthy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
