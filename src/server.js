// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your description?',
        name: 'description',
    },
    {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
    }
];

//   for (const value of songs) {
//     outputCyanText(value)
//   }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            const generate = generateMarkdown(response);
            writeToFile('generate.md', generate);
            console.log(generate);
        })
};

// Function call to initialize app
init();