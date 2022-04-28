// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
const writeToFile = ({ name, location, github, title, outcome, ue, repo }) => 
`Test if this will work
${name}
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
