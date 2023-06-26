const { Circle, Triangle, Square } = require('./shapes');

describe('circle', () => {
    it('generates a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
    });
});

describe('triangle', () => {
    it('generates a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('square', () => {
    it('generates a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    });
});


