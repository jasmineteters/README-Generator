const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the instructions for installation?',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Usage information details?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'email',
            message: 'What is your email address?',
            name: 'email',
        },
    ]).then((response) => {
        console.log(response);
        const readData =
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
## Contributors
${response.contributions}
## Tests
${response.test}
## Contact
To view the code for this project visit the github profile below.
Github Profile: [${response.username}](${response.username})
For any questions contact us via email.
Email: [${response.email}](mailto:${response.email})
`;


        const filename = "readme.md";

        fs.writeFile(filename, readData, (err) =>
            err ? console.log(err) : console.log("success")
        );
    });


// // array of questions for user
// const questions = [
//     "Name :":
// ];

// function to write README file
// function writeToFile(filename, data) {


// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();