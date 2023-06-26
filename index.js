const inquirer = require('inquirer');
const fs = require('fs');

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
            name: 'logo_text',
            message: 'Choose up to 3 characters that your logo will contain (Required)',
            validate: logoInput => {
                // * validate that there are not more than 3 chars input by the user * //
                if (logoInput.length > 3) {
                    console.log('Logo text can only be three characters!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            // * use list type so only one option can be selected * //
            type: 'list',
            name: 'shape',
            message: 'Select a shape doooood:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter a color keyword (OR a hexadecimal number)! (Required)',
            validate: colorInput => {
                if (colorInput) {
                    return true;
                } else {
                    console.log('Please enter a color keyword (OR a hexadecimal number)... bitch');
                    return false;
                }
            }
        },
    ]).then(data => {
        console.log(data);
        console.log('goodbye');
        return;
    });
};


promptUser();
