const inquirer = ('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


const logoPrompts = [

    'Enter text for you logo (Up to three characters.)',


    'Select the color of your text (Enter a color or the hex code).',


    'Select your logo shape',


    'Select the color of the logo shape (Enter a color or the hex code).',

];


function initPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: logoPrompts[0],
            name: 'text',
        },
        {
            type: 'input',
            message: logoPrompts[1],
            name: 'textColor',
        },
        {
            type: 'list',
            message: logoPrompts[2],
            choices: ['Circle', 'Triangle', 'Square' ],
            name: 'shape',
        },
        {
            type: 'input',
            message: logoPrompts[3],
            name: 'shapeColor',
        },
    ]).then((answers) => {
        var shape ='';

        if (answers.shape == 'Circle') {
            shape = new Circle(answers.text, answers.textColor, answers.shapeColor)    
        } else if (answers.shape == 'Triangle') {
            shape = new Triangle(answers.text, answers.textColor, answers.shapeColor)
        } else {
            shape = new Square(answers.text, answers.textColor, answers.shapeColor)
        }

        shape.createShape();

        const html = shape.render();


        fs.createFile('./Examples/logo.svg', html, (err) =>
            err ? console.log(err) : console.log('Logo generated!'))
    })
}


initPrompts();