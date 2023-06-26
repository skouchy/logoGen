const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const { Circle, Square, Triangle } = require('./lib/shapes');
const validateColor = require('validate-color').default;


// Create and SVG string based on user input
const generateSVG = userInput => {
    const size = 80;
    let shape;

    switch (userInput.shape) {
        case 'circle':
            shape = new Circle(userInput.color, size).draw(size / 2 + 10, size / 2 + 10);
            break;
        case 'triangle':
            shape = new Triangle(userInput.color, size).draw(10, 10);
            break;
        case 'square':
        default:
            shape = new Square(userInput.color, size).draw(10, 10);
            break;
    }

    const logoText = `
      <text x="${size / 2 + 10}" y="${size / 1.5}" text-anchor="middle" dominant-baseline="auto" fill="${userInput.textColor}" font-size="60">${userInput.logo_text}</text>
    `;

    return `
      <svg viewBox="0 0 ${size + 20} ${size + 20}" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        ${logoText}
      </svg>
    `;
};

// user prompts for custom logo details & generates SVG file
const generateLogo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'logo_text',
            message: 'Choose up to 3 characters that your logo will contain (Required)',
            validate: textInput => {
                if (textInput.length <= 3) {
                    console.log(textInput.length);
                    return true;
                } else {
                    console.log('Please limit Text to 3 characters Max');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the TEXT to be? (Required)',
            validate: validateColor
        },
        {
            // * use list type so only one option can be selected * //
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your sweet logo doooood:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like the SHAPE to be? (Required)',
            validate: validateColor
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
