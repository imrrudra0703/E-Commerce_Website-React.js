import Cookies from "js-cookie";

const getCartItem = ()=>{
    const cartItems = Cookies.get('cartItems');
    return cartItems?JSON.parse(cartItems):[]; 
}

const setCartItems = (cartItems)=>{
    Cookies.set("cartItems",JSON.stringify(cartItems));
}

const addToCart = (product,quantity)=>{
    const cartItems = getCartItem();
    const existingItem = cartItems.find((item)=>item.id === product.id);
    if(existingItem){
        existingItem.quantity += quantity;
    }
    else{
        cartItems.push({id:product?.id,title:product?.title,price:product?.price,image:product?.thumbnail,qty:quantity})
    }
    setCartItems(cartItems);
}

const removeFromCart = (productId)=>{
    const cartItems = getCartItem().filter((item)=>item.id !== productId);
    setCartItems(cartItems);
}

const updateCartItems = (productId,quantity)=>{
    const cartItems = getCartItem().map((item) => {
        if(item.id === productId){
            return {...item,qty:quantity}
        } else{
            return item
        }
    });
    setCartItems(cartItems);
}

export {getCartItem,addToCart,removeFromCart,updateCartItems}