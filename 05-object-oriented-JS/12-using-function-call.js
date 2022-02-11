function sayHello() {
    console.log( `Hello ${this.name}` );
}

sayHello.call({
    name: 'John'
});