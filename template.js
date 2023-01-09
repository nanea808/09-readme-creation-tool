class Readme {
    constructor (title, description, install = 'N/A', usage = 'N/A', contribution = 'N/A', test = 'N/A') {
        this.title = title;
        this.description = description;
        this.install = install;
        this.usage = usage;
        this.contribution = contribution;
        this.test = test;
    }
    
    buildReadme() {
        const template = `
            # ${this.title}

            ## Description

            ${this.description}

            ## Installation

            ${this.install}

            ## Usage

            ${this.usage}

            ## Contribution Guidelines

            ${this.contribution}

            ## Test Instructions

            ${this.test}

            ## Credits

            N/A

            ## License

            Please refer to the LICENSE in the repo.
            `
        return template;
    }
}

module.exports = template;