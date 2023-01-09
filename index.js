const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Enter Project Title:',
        name: 'title'
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

inquirer.prompt(questions).then((response) => {
        console.log(`\n\n ${response.title} \n\n ${response.description} \n\n ${response.install} \n\n ${response.usage} \n\n ${response.contribution} \n\n ${response.test}`);
    });
    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README