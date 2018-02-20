class Person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        isAlive: boolean) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.isAlive = isAlive;
        }
}
let me = new Person("Wayne", "Lester", 28, true)