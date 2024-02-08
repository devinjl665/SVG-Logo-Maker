const inquirer = ('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function create(fileName, answers) {
    let svg = '';
    svg = '';
    svg += '<g>';
    svg += `${answers.shape}`;


    let shapeSelected;

    if (answers.shape === 'Circle') {
        shapeSelected = new Circle();
        svg += ``;
    } else if (answers.shape === 'Triangle') {
        shapeSelected = new Triangle();
        svg += ``;
    } else if (answers.shape === 'Square') {
        shapeSelected = new Square();
        svg += ``;
    }

    svg += ``;
    svg += '</g>';
    svg += '</svg>';

    fs.createFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log('Your logo has been generated!');
    });
}

function logoPrompts () {
    inquirer
    .question([
        {
            type: 'input',
            message: 'Enter text for you logo (Up to three characters.)',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Select the color of your text (Enter a color keyword or the hex code).',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Select your logo shape',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Select the color of the logo shape (Enter a color keyword or the hex code).',
            name: 'shapeColor',
        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log('Text must be 3 characters or less');
            logoPrompts();
        } else {
            write('logo.svg', answers);
        }
    });
}


logoPrompts();