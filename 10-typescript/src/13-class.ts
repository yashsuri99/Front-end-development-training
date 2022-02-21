/**
 * Interfaces are used for defining contracts for class
 */
 import IPerson from './12-interfaces';

 interface CanTalk {
     talk: ( message : string ) => void
 }
 
 class Person implements IPerson, CanTalk {
     // a fixed value to start with for nationality for all objects
     readonly nationality = 'Indian';
     name : string;
     age: number;
     spouse?: string;
     private emails: string[];
 
     constructor( name : string, age : number, emails : string[], spouse? : string ) {
         this.name = name;
         this.age = age;
         this.emails = emails;
 
         if( spouse ) {
             this.spouse = spouse;
         }
     }
 
     talk( message: string ) {
         console.log( message );
     }
 
     // methods are shared among all objects of the class
     celebrateBirthday() {
         this.age++;
     }
 
     setName( newName : string ) {
         this.name = newName;
     }
 }
 
 const john = new Person( 'John', 32, [ 'john@example.com', 'john@gmail.com' ] );
 const jane = new Person( 'Jane', 28, [ 'jane@example.com' ] );
 
 john.celebrateBirthday();
 jane.setName( 'Janette' );
 
 console.log( john );
 console.log( jane );

 export { Person }