const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Prompt messages for logo creation
const logoPrompts = [
  'Enter text for your logo (Up to three characters.)',
  'Select the color of your text (Enter a color or the hex code).',
  'Select your logo shape',
  'Select the color of the logo shape (Enter a color or the hex code).',
];

// Function to write the SVG file based on user input
function write(fileName, answers) { 
    let svg = '';    

    // Start SVG markup
    svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svg += '<g>';
    svg += `${answers.shapeChoice}`;

    let shape;

    // Create the chosen shape based on user input
    if (answers.shapeChoice === 'Circle') {
      shape = new Circle();
      svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.Choice === 'Triangle') {
      shape = new Triangle();
      svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else {
      shape = new Square();
      svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    }

    // Add text to the SVG
    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    
    // Close SVG markup
    svg += '</g>';
    svg += '</svg>';

    // Write SVG to file
    fs.writeFile(fileName, svg, (err) =>
      err ? console.log(err) : console.log('Logo generated!')
    )
}

// Function to initialize the prompts for logo creation
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
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shapeChoice',
      },
      {
        type: 'input',
        message: logoPrompts[3],
        name: 'shapeColor',
      },
    ])
    .then((answers) => {
      // Check if text length exceeds 3 characters
      if (answers.text.length > 3) {
        console.log('Text cannot exceed 3 characters.');
        initPrompts();  
      } else {
        // Write SVG file based on user input
        write('./Examples/logo.svg', answers);
      }
  });
}

// Start the prompt for logo creation
initPrompts();
