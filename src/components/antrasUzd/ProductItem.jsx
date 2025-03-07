
function ProductItem({ product, buttonComponent: ButtonComponent, buttonProps}) {
    return (
        <div>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} Euros</p>
            <p>Amount: {product.amount}</p>
            <p>Total: {product.amount * product.price} Euros</p>

            <ButtonComponent {...buttonProps} argument={product}/>
        </div>
    );
}

export default ProductItem;
