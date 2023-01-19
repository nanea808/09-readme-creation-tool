const inquirer = require('inquirer');
const buildReadme = require('./template');
const fs = require('fs');

let answers1 = null;
const usageSteps = [];
let answers3 = null;
let x = 1;

const questions1 = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Project Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter Installation Instructions:'
    }
];

const questions2 = [
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage Instructions\n Step 1.'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to add another step (hit enter for YES)?',
        default: true
    }
];

const questions3 = [
    {
        type: 'editor',
        name: 'contribution',
        message: 'Enter Contribution Guidelines:'
    },
    {
        type: 'editor',
        name: 'test',
        message: 'Enter Test Instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license:',
        choices: ['ISC', 'MIT']
    }
];

inquirer.prompt(questions1).then((answers) => {
    answers1 = answers;
    console.log('\n');
    ask();
})
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

function ask() {
    inquirer.prompt(questions2).then((answers) => {
        usageSteps.push(answers.usage);
        if (answers.askAgain) {
            questions2[0].message = `Step ${++x}.`;
            ask();
        } else {
            console.log(`\nAdded usage steps.\n`);
            inquirer.prompt(questions3).then((answers) => {
                answers3 = answers;
                const readmeText = buildReadme(answers1, usageSteps, answers3);
                fs.writeFileSync(`db/README.md`, readmeText);
            });
        }
    });
}

    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README