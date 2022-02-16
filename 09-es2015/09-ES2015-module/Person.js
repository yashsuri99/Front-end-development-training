class Person {
    nationality = 'Indian';
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++
    }

    setName(newName) {
        this.name = newName;
    }
}

export {Person};