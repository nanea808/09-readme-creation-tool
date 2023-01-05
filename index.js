const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'type 1',
            name: 'one'
        }
    ])
    .then((response) => 
        response.one == 1
            ? console.log('Yay!')
            : console.log('Thats not a one!?')
    );
