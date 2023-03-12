const inquirer = require('inquirer');
// const color = require('color');
// const { validateText, validateColor } = require('./validate/validate');
// const generateLogo = require('./utils/generate-logo')
// const Circle = require('./shapes')
// const generateSVG = require()
// Class for the SVG logo?
class LogoContent {
    constructor(shape, shapeColor, logoTxt, colorTxt) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.logoTxt = logoTxt;
        this.colorTxt = colorTxt;
    }
}
// user prompts for custom logo
const promptUser = logoContent => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'logoTxt',
            message: 'Enter up to 3 characters to represent your brand',
            // validate: validateText,
            
        },
        {
            type: 'input',
            name: 'colorTxt',
            message: 'Choose the color of your logo text. Enter your color choice by its name OR hexidecimal code.',
            // validate: validateColor,
        },
        {
            type: 'list',
            name: 'shape',
            message: "Please choose a shape for your logo",
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the color of your logo shape by typing in your color.',
            // validate: validateColor,
        },
        // another Validate with return?
        // validate: (input) => {
        //     const color= Color(input)
        //     return =???
        // }
        // Need an NPM for color and how do you pull from it?

    ])
        // .then((logoContent => {
        //     generateLogo(logoContent)
        //     // console.log(logoContent);
        // }))
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

}
promptUser();
// module.exports