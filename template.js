const buildReadme = (title, description, install, usage, contribution = 'N/A', test = 'N/A', license = 'Please refer to the LICENSE in the repo.') => {

    let licenseBadge = null;
    switch (license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'ISC':
            licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
    
        default:
            break;
    }

    const template = `# ${title}\n\n${licenseBadge}\n\n## Description\n\n${description}\n\n## Installation\n\n${install}\n\n## Usage\n\n${usage}\n\n## Contribution Guidelines\n\n${contribution}\n\n## Test Instructions\n\n${test}\n\n## Credits\n\nN/A\n\n## License\n\n${license}`
    return template;
}

module.exports = buildReadme;