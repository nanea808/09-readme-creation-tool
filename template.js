const buildReadme = (title, description, install, usage, contribution, test) => {
    const template = `
            # ${title}

            ## Description

            ${description}

            ## Installation

            ${install}

            ## Usage

            ${usage}

            ## Contribution Guidelines

            ${contribution}

            ## Test Instructions

            ${test}

            ## Credits

            N/A

            ## License

            Please refer to the LICENSE in the repo.
            `
    return template;
}

module.exports = buildReadme;