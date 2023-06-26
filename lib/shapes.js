class Circle {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    draw(x, y) {
        return `<circle cx="${x}" cy="${y}" r="${this.size/2}" fill="${this.color}" />`;
    };
};

class Square {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    draw(x, y) {
        return `<rect x="${x}" y="${y}" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    };
}

class Triangle {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    draw(x, y) {
        return `
        <polygon points = "${x + this.size/2}, ${y} ${x}, ${y + this.size} ${x + this.size}, ${y + this.size}" fill="${this.color}" />`;
    };
}

// export the classes
module.exports = {
    Circle,
    Square,
    Triangle
};