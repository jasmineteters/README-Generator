// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
  //  const readData =
  `# ${response.title}
## Description 
${response.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Contact](#contact)
## Installation
${response.instructions}
## Usage 
${response.usage}
##License
${response.licenseName}
## Contributors
${response.contributions}
## Tests
${response.test}
## Contact
To view the code for this project visit the github profile below.
Github Profile: [${response.username}](${response.username})
For any questions contact us via email.
Email: [${response.email}](mailto:${response.email})`

}

module.exports = generateMarkdown;