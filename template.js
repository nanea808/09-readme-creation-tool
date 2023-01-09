const buildReadme = (title, description, install, usage, contribution, test) => {
    const template = `# ${title}\n\n## Description\n\n${description}\n\n## Installation\n\n${install}\n\n## Usage\n\n${usage}\n\n## Contribution Guidelines\n\n${contribution}\n\n## Test Instructions\n\n${test}\n\n## Credits\n\nN/A\n\n## License\n\nPlease refer to the LICENSE in the repo.`
    return template;
}

module.exports = buildReadme;