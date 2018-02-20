var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, isAlive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive;
    }
    return Person;
}());
var me = new Person("Wayne", "Lester", 28, true);
console.log(me);
