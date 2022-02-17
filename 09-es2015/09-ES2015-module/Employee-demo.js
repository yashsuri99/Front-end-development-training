import { Employee } from './Employee.js';

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Developer', 'XT' );

john.celebrateBirthday();
john.promote();
jane.setName( 'Janette' );

console.log( john );
console.log( jane );