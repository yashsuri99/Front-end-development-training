/**
 * Arrow functions dont have their own "this". They borrow "this" from the enclosing function. 
 */

function outer() {
    console.log('outer this = ' , this);

    // old syntax
    // the comtext ("this") of old syntax functions is not related to the context of the enclosing function
    function innerOldSyntax() {
        console.log('innerOldSyntax this = ' , this);
    }

    innerOldSyntax();

    // new ES2015 arrow function syntax
    // the context ("this") of new syntax is the same as the context of the enclosing function
    const innerNewSyntax = () => {
        console.log( 'innerNewSyntax this = ', this );
    };

    innerNewSyntax();
}

outer.call({
    name: 'John'
}   
);