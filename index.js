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
        name: 'outcome',
        message: 'What is the out come you are hoping to get?',
      },
      {
        type: 'input',
        name: 'ue',
        message: 'What is the User Experience?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Enter the Github Repository',
      },
    ]);
  };
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = ({ title, usage, location, github, title, outcome, ue, repo }) => 
`#${title}

##What it is that you are currently experiencing
Hello, and thank you for usinging ${title}. ${title} was created to assist in the issue with ${issue}. This applicaton was created for the primary use by ${usage}.

##Installation
For the installation of this program, you will be required to${install}.

##Features
Some of the main features in this app are:
${f1},
${f2},
${f3}.

##Credits
This application was created by ${name}, and can be found here:
${repo}
And a special Thank You to ${thankyou}!

Any issues you may encounter while using this app, please contact me at ${email}.

${location}
${github}
${title}
${outcome}
${ue}
${repo}
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
