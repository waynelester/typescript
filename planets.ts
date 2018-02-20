class Planet { 
    speed: number;
    width: number;
    color: string;
    orbit: number;
    
    constructor(
        speed: number, 
        width: number, 
        color: string, 
        orbit: number) {
            this.speed = speed;
            this.width = width;
            this.color = color;
            this.orbit = orbit;
    }
}

let mercury = new Planet(20, 30, 'red', 20);
let venus = new Planet(15, 40, 'green', 40);
let earth = new Planet(10, 50, 'blue', 50);

console.log(mercury);
console.log(venus);
console.log(earth);