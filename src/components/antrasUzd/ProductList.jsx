import { useState } from 'react'
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import Button from './Button';

function ProductList({ addToCart }) {
    const [products, setProducts] = useState([])


    // Pripildyti duomenys
    useEffect(() => {
        let products = [];
        let product = {
            id: crypto.randomUUID(),
            name: "RTX 5090 32GB Graphics card",
            description: "Experience 8K gaming using DLSS4 with multi frame generation!",
            price: 1999.99,
            amount: 1
        }
        products.push(product);

        product = {
            id: crypto.randomUUID(),
            name: "Intel core i5 10400F",
            description: "6 core processor with hyperthreading",
            price: 129.99,
            amount: 1
        }
        products.push(product);

        product = {
            id: crypto.randomUUID(),
            name: "Corsair 50MM PC case ventilation",
            description: "Let the fan cool your pc at up to 5000RPM of cooling!",
            price: 9.99,
            amount: 1,
        }
        products.push(product);

        setProducts(products)
    }, [])

    useEffect(() => console.log(products), [products])

    return (
        <>
            {products.map(product => {
                return <ProductItem 
                    key={product.id} 
                    product={product} 
                    buttonComponent={Button}
                    buttonProps={{ name: "Add to cart", callback: addToCart }}
                />
            })}
        </>
    )
}

export default ProductList
