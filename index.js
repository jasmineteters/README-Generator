const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
            type: "input",
            message: "What is the name of your Project?",
            name: "title",
        },
        {
            type: "input",
            message: "Describe your project?",
            name: "description",
        },
        {
            type: "input",
            message: "What are the instructions for installation?",
            name: "instructions",
        },
        {
            type: "input",
            message: "Usage information details?",
            name: "usage",
        },
        {
            type: "input",
            message: "What is the name of your License?",
            name: "licenseName",
        },
        {
            type: "input",
            message: "What color do you want your badge?",
            name: "licenseColor",
        },
        {
            type: "input",
            message: "Please provide the description of your license?",
            name: "licenseText",
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contributions",
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "email",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then((response) => {
        console.log(response);
        const readData =
            `# ${response.title}
![License Badge](https://img.shields.io/badge/license-${response.licenseName}-${response.licenseColor}.svg)
## Description 
${response.description}
## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [Contributors](##Contributors)
* [License](##License)
* [Contact](##Contact)
## Installation
${response.instructions}
## Usage 
${response.usage}
##License ${response.licenseName}
${response.licenseText}
## Contributors
${response.contributions}
## Tests
${response.test}
## Contact
To view the code for this project visit the github profile below.
Github Profile: [${response.username}](github.com/${response.username})
For any questions contact us via email.
Email: [${response.email}](mailto:${response.email})
`;


        const filename = "readme.md";

        fs.writeFile(filename, readData, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });