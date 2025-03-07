import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductItem from './ProductItem'
import Button from './Button'

function Cart() {
    const [cartProducts, setCartProducts] = useState([])

    const removeFromCart = product => {
        setCartProducts(cartProducts.filter(value => value.id != product.id))
    }

    const addToCart = product => {
        const modifiedProduct = getProductInCart(product);
        if (modifiedProduct !== undefined) {
            addAmountToProduct(modifiedProduct, 1);
        } else {
            setCartProducts(oldCartProducts => [
                ...oldCartProducts, 
                { ...product, amount: 1 }
            ]);
        }
    };
    
    const getProductInCart = product => {
        const productInCart = cartProducts.find(productInCart => productInCart.id == product.id);

        if(productInCart) return productInCart
        else return undefined
    }
    const addAmountToProduct = (product, amount) => {
        const updatedProduct = { ...product, amount: product.amount + amount }; // Create a new product object
        setCartProducts(oldCartProducts => 
            oldCartProducts.map(cartProduct => 
                cartProduct.id === product.id ? updatedProduct : cartProduct
            )
        );
    };
    

    useEffect(() => console.log(cartProducts), [cartProducts])


    return (
        <>
            <h2>Product list:</h2>
            <ProductList addToCart={addToCart}/>

            <h2>My shopping cart:</h2>
            {cartProducts.map(product => {
                return <ProductItem 
                    key={product.id} 
                    product={product} 
                    buttonComponent={Button}
                    buttonProps={{ name: "Remove from cart", callback: removeFromCart }}
                />
            })}

        </>
    )
}

export default Cart
