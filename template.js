const buildReadme = (answers1, usageSteps, answers3) => {

    let licenseBadge = null;
    switch (answers3.license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'ISC':
            licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
    
        default:
            break;
    }

    const part1 = `# ${answers1.title}\n\n${licenseBadge}\n\n## Description\n\n${answers1.description}\n\n## Installation\n\n${answers1.install}\n\n`;

    const usage = () => {
        let steps = '';
        for (const step in usageSteps) {
            const newStep = `${parseInt(step) + 1}. ${usageSteps[step]}\n`;
            steps += newStep;
        }
        return steps;
    }

    const part2 = `## Usage\n\n${usage()}\n\n## Contribution Guidelines\n\n${answers3.contribution}\n\n## Test Instructions\n\n${answers3.test}\n\n## Credits\n\nN/A\n\n## License\n\n${answers3.license}`;

    const template = part1 + part2;

    return template;
}

module.exports = buildReadme;