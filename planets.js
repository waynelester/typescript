var Planet = /** @class */ (function() {
    function Planet(speed, width, color, orbit) {
        this.speed = speed;
        this.width = width;
        this.color = color;
        this.orbit = orbit;
    }
    return Planet;
}());
var mercury = new Planet(20, 30, 'red', 20);
var venus = new Planet(15, 40, 'green', 40);
var earth = new Planet(10, 50, 'blue', 50);
console.log(mercury);
