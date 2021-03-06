import React, { useContext } from "react"

import {CartItem} from "../components"
import {Context} from "../Context"

export function CartItemContainer({ children, ...restProps }) {
    const {cartItems, removeFromCart, clearCart} = useContext(Context)

    const cartItemElements = cartItems.map(item => {
        return <CartItem>
                    <CartItem.Trash 
                        src={process.env.PUBLIC_URL + "/img/trash.png"} 
                        onClick={() => removeFromCart(item.id)}
                        />
                    <CartItem.Thumbnail src={item.urls.thumb} />
                    <CartItem.Info>
                        <CartItem.Title>{item.alt_description}</CartItem.Title>
                        <CartItem.Credit>Credit: {item.user.name}</CartItem.Credit>
                    </CartItem.Info>
                    <CartItem.Price>$9.89</CartItem.Price>
                </CartItem>
    })

    return cartItems.length > 0 ? <>
        {cartItemElements}
        <CartItem.Total>${9.89 * cartItems.length}</CartItem.Total>
        <CartItem.BuyBtn onClick={() => clearCart()}>check out</CartItem.BuyBtn>
        <h3 style={{textAlign: "right", margin: "10px 30px 100px 0"}}>(check out will remove all items from cart)</h3>
    </> : <h2 style={{textAlign: "center", marginTop: "60px"}}>There are no items in your cart...</h2>
}

