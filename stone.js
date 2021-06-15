class Stone {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'density': 12,
            'friction': 0.9
        }
        this.body = Bodies.rectangle(x, y, 100, 50, options);
        this.width = 100
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(2);
        stroke('black');
        fill('grey');
        rect(0, 0, this.width, this.height);
        pop();
    }
}