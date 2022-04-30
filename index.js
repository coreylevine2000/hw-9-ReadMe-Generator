// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'issue',
        message: 'What issue are you trying to address with your app?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Briefly discribe what your project is used for.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What will this app require for installation? If none are required, please type "Do Nothing"',
      },
      {
        type: 'input',
        name: 'f1',
        message: 'What is the primary feature of your app?',
      },
      {
        type: 'input',
        name: 'f2',
        message: 'what is the secondary feature of your app? If none, hit Enter.',
      },
      {
        type: 'input',
        name: 'f3',
        message: 'what is the tratiary feature of your app? If none, hit Enter.',
      },
      {
        type: 'list',
        name: 'licence',
        message: 'What licence is this app created with?',
        choices: ["GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", "MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Enter the Github Repository',
      },
      {
        type: 'input',
        name: 'thankyou',
        message: 'Enter the name of any and all contributors you wish to acknowledge. If none, enter "You"',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
    ]);
  };
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = ({ title, issue, usage, install, f1, f2, f3, licence, name, repo, thankyou, email }) => 
`${title}

Issue:
Hello, and thank you for usinging ${title}. ${title} was created to assist in the issue with ${issue}. This applicaton was created for the primary use by ${usage}.

Installation:
For the installation of this program, you will be required to${install}.

Features:
Some of the main features in this app are:
* ${f1}
* ${f2}
* ${f3}

Licence:
This app was made with ${licence}

Credits:
This application was created by ${name}, and can be found here:
${repo}
And a special Thank You to ${thankyou}!

Contributions:

Any issues you may encounter while using this app, or would like to contribute to its future developement, please contact me at ${email}.

[![size](https://img.shields.io/github/repo-size/coreylevine2000/hw-9-ReadMe-Generator)](https://img.shields.io/github/repo-size/coreylevine2000/hw-9-ReadMe-Generator)
`
;
// TODO: Create a function to initialize app
//function init() {}?

const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
