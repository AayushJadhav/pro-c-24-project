class Iron {
    constructor(x, y) {
        var options = {
            'density': 30,
            'friction': 3,
            'restitution': 0.8,
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill('black');
        rect(0, 0, this.width, this.height);
        pop();
    }
}