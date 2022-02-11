/**
 * Module pattern is a "design pattern" that applies closures to implement data hiding and encapsulation
 * Common solutions for common problems (good solutions)
 */
// Everything is "public" in a JS object
function getShoppingCart() {
    const items = []; // local variable accessible only to addToCart() and showCart()

    const shoppingCart = {
        // items: [], // this makes it public - BAD!
        addToCart( item ) {
            if( typeof item === 'string' ) {
                // this.items.push( item );
                items.push( item );
            }
        },
        showCart() {
            console.log( items );
        }
    };

    return shoppingCart;
}

const shoppingCart = getShoppingCart(); // has its own set of items
const shoppingCart2 = getShoppingCart(); // has its own set of items

shoppingCart.addToCart( 'Lays chips' );
shoppingCart.addToCart( 'Dairy Milk' );
shoppingCart.addToCart( { name: 'Parle G' } );

// will not work - there is NO shoppingCart.items
// shoppingCart.items.push( { name: 'Poppins' } );

shoppingCart.showCart(); // [ 'Lays chips', 'Dairy Milk' ]
shoppingCart2.showCart(); // []