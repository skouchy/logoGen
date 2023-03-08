const inquirer = require('inquirer');
const color = require('color');
// const Circle = require('./shapes')
// const generateSVG = require()
// Class for the SVG logo?
// class LogoPrompt {
//     constructor() {
//         this.logoletters = null;
//         this.shapes = null;
//         this.textColor = null;
//         this.shapeColor = null;
//     }
// }
// user prompts for custom logo
// const askQuestions = () => {
inquirer.prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: 'Please enter up to 3 characters for you logo',
            // Validate maybe with a return for length of answer?
            // validate: (input) => {
            //     return input.length > 0 && input.length <= 3
            // }
            // test parameter for this and how to do that?
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'Please choose a shape for your logo.',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose the color of your logo text by typing in  your color.',
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the color of your logo shape by typing in your color.',
            validate: colorInput => {
                if (colorInput) {
                    return true;
                } else {
                    console.log('Please enter your hub!');
                    return false;
                }
            }
        },
            // another Validate with return?
            // validate: (input) => {
            //     const color= Color(input)
            //     return =???
            // }
            // Need an NPM for color and how do you pull from it?
        
    ])
    .then((answers) => {
        console.log(answers);
    })
        // var shapes;
        // if (answers.shapes === 'circle') {
        //     shapes = new Circle()
        //     console.log(shapes)
        // }
        // if (answers.shapes === 'square') {
        //     shapes = new Circle()
        //     console.log(shapes)
        // }
        // if (answers.shapes === 'triangle') {
        //     shapes = new Circle()
        //     console.log(shapes)
        // }
        // shapes.setColor
// askQuestions();
// What function do I need to do generate te SVG file?
// generateSVG
    // }
