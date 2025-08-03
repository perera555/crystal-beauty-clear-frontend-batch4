

export default function getCart() {

    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
        return []

    }
    cart = JSON.parse(cart);
    return cart;


}

export function addToCart(product, qty) {
    let cart = getCart();

    const productIndex = cart.findIndex((item) => item.productId === product.productId);

    if (productIndex === -1) {
        if (qty > 0) {
            cart.push({
                productId: product.productId,
                name: product.name,
                price: product.price,
                altName: product.altName,
                image: product.images[0],
                quantity: qty,
            });
        }
    } else {
        cart[productIndex].quantity += qty;

        if (cart[productIndex].quantity <= 0) {
            cart = cart.filter((item) => item.productId !== product.productId);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
}


export function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter((item) => item.productId !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
}
export function getTotal() {
    let cart = getCart();
    let total = 0;
    cart.forEach((product) => {
        total += product.price * product.quantity;
    });
    return total;

}
export function getTotalForLabledPrice() {
    let cart = getCart();
    let total = 0;
    cart.forEach((product) => {

        total += product.labledPrice * product.quantity;
    });
    return total;

}