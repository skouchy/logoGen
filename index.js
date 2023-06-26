const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
const validateColor = require('validate-color').default;


// Create and SVG string based on user input
const generateSVG = userInput => {
    const width = 300;
    const height = 200;

    let shape;

    switch (userInput.shape) {
        case 'circle':
            const cX = width / 2;
            const cY = height / 2;
            const r = Math.min(width, height) / 2;
            shape = new Circle(userInput.color).render(cX, cY, r);
            break;
        case 'triangle':
            const points = `20, ${height} ${width / 2}, 0 ${width - 20}, ${height}`;
            shape = new Triangle(userInput.color).render(points);
            break;
        case 'square':
        default:
            const size = Math.min(width, height);
            shape = new Square(userInput.color).render(50, 10, size);
            break;
    }

    const logoText = `
      <text x="${width / 2}" y="${height / 2}" text-anchor="middle" dominant-baseline="middle" fill="${userInput.textColor}" font-size="75">${userInput.logoTxt}</text>
    `;

    return `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
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
            name: 'logoTxt',
            message: 'Choose up to 3 characters that your logo will contain (Required)',
            validate: textInput => {
                if (textInput.length <= 3) {
                    console.log(textInput.length);
                    return true;
                } else {
                    console.log('Please limit logo text to 3 characters Max');
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
        fs.writeFile('./dist/logo.svg', svgString, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Check out the new SVG logo!');
            }
        });
    });
};


generateLogo();
