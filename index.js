const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

// class LogoContent {
//     constructor(shape, shapeColor, logoTxt, colorTxt) {
//         this.shape = shape;
//         this.shapeColor = shapeColor;
//         this.logoTxt = logoTxt;
//         this.colorTxt = colorTxt;
//     }
// }

const generateSVG = userInput => {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="${userInput.color}" />
    <text x="50" y="55" text-anchor="middle" fill="white" font-size="60">${userInput.logo_text}</text>
  </svg>`;
};
// user prompts for custom logo details & generates SVG file
const generateLogo = () => {
    inquirer.prompt([
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
    ]).then(userInput => {
        console.log(userInput);
        const svgString = generateSVG(userInput);

        // Write the SVG string to a file
        fs.writeFile('logo.svg', svgString, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Check out the new SVG logo!');
            }
        });
    });
};


generateLogo();
