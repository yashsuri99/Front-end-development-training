function Team(name,age) {
    this.name = name;
    this.age = age;
    this.emails = [];
}

Team.prototype.addEmail = function(email) {
    this.emails.push(email);
}

const john = new Team('john',32);
console.log(john);

const jane = new Team('jane',28);
console.log(jane);

john.addEmail('john@example.com');
john.addEmail('jane@example.com');

console.log(john);