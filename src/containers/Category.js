import React, {useContext} from "react"
import { Image } from "../components"

import {Context} from "../Context"

export function CategoryContainer({ children, ...restProps }) {
    const {guitarPhotos, cartItems, addToCart, removeFromCart} = useContext(Context)

    // const ImageElements = guitarPhotos.map((img) => (
    //     <Image.Photo key={img.id} img={img} />
    // ))

    // function cartIcon() {
    //     const inCart = cartItems.some(item => item.id === img.id)
    //     if (inCart) {
    //         return <Image.CartIcon onClick={() => removeFromCart(img.id)}
    //     } else {
    //         return <Image.CartIcon onClick={() => addToCart(img.id)}
    //     }
    // }

    return (
        <Image>
            {/* {ImageElements} */}
            {/* {cartIcon()} */}
        </Image>
    )
}