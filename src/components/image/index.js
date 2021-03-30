import React from "react"
import {Container, CartIcon, Photo} from "./styles/image"

export default function Image({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Image.CartIcon = function ImageCartIcon({ ...restProps }) {
    return <CartIcon {...restProps} />
}

Image.Photo = function ImagePhoto({ ...restProps }) {
    return <Photo {...restProps} />
}