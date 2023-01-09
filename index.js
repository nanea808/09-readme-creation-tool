const inquirer = require('inquirer');
const buildReadme = require('./template');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Project Title:'
    },
    {
        type: 'input',
        message: 'Enter Project Description:',
        name: 'description'
    },
    {
        type: 'editor',
        name: 'install',
        message: 'Enter Installation Instructions:'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Enter Usage Instructions:'
    },
    {
        type: 'editor',
        name: 'contribution',
        message: 'Enter Contribution Guidelines:'
    },
    {
        type: 'editor',
        name: 'test',
        message: 'Enter Test Instructions:'
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(buildReadme(answers.title, answers.description, answers.install, answers.usage, answers.contribution, answers.test));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
    });

    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README