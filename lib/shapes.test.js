// These are the tests to be run in jest
const { Circle, Triangle, Square, } = require('./shapes');

describe ('Circle test', () => {
    it('should render a circle with a green background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green"/>');
    });
});

describe ('Triangle test', () => {
    it('should render a triangle with a black background', () => {
        const shape = new Triangle();
        shape.setColor('black');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black"/>');
    });
});

describe ('Square test', () => {
    it('should render a square with a red background', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red"/>');
    });
});

describe ('Circle hex test', () => {
    it('should render a circle with a yellow background', () => {
        const shape = new Circle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="yellow"/>');
    });
});

describe ('Triangle hex test', () => {
    it('should render a triangle with a blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});

describe ('Square hex test', () => {
    it('should render a square with a purple background', () => {
        const shape = new Square();
        shape.setColor('purple');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple"/>');
    });
});
