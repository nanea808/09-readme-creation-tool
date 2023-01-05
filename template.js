class Readme {
    constructor (title, description, link, install = 'N/A') {
        this.title = title;
        this.description = description;
        this.link = link;
        this.install = install;
    }
    
    buildReadme() {
        const template = `
            # ${this.title}

            ## Description

            ${this.description}

            ## Visuals

            This is the website layout:

            ![site-image]()

            ## Link

            [${this.link}](https://${this.link})

            ## Installation

            ${this.install}

            ## Usage

            Step 1: Enter desired city into the input box.

            Step 2: Click the search button or press enter.

            Step 3: Wait for your weather data to show on the screen.

            ## Credits

            N/A

            ## License

            Please refer to the LICENSE in the repo.
            `
        return 
    }
}

module.exports = template;