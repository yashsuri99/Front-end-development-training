interface Person {
    readonly nationality: string
    name: string,
    age: number,
    spouse?: string,
    celebrateBirthday: () => void,
    setName: (newName: string) => void
}

interface Employee extends Person {
    role: string;
    dept: string;
}

const john : Employee = {
    nationality: 'Indian',
    name: 'John',
    age: 32,
    role: 'Acountant',
    dept: 'Finance',
    celebrateBirthday() {
        this.age++;
    },
    setName(newName: string) {
        this.name = newName;
    }
};

interface ILoginForm {
    email: string;
    password: string
}

interface IRegistrationForm extends ILoginForm {
    name: string
}

const mail: IRegistrationForm = {
    name: 'John',
    email: 'john@example.com',
    password: 'examplePass'
}