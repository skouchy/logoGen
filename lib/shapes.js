
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render(cX, cY, r) {
        return `<circle cx="${cX}" cy="${cY}" r="${r}" fill="${this.color}" />`;
    }
};


class Square extends Shape {
    render(x, y, size) {
        return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
    };
}

class Triangle extends Shape {
    render(points) {
        return `
        <polygon points="${points}" fill="${this.color}" />`;
    };
}

// export the classes
module.exports = {
    Circle,
    Square,
    Triangle
};