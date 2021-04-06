import React from "react"
import { 
    Background, 
    Container, 
    Image, 
    Info, 
    Header, 
    Credits, 
    Price, 
    AddToCart, 
    ViewCart,
    Close } from "./styles/overlay"

export default function Overlay({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
}

Overlay.Container = function OverlayContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Overlay.Image = function OverlayImage({ ...restProps }) {
    return <Image {...restProps} />
}

Overlay.Info = function OverlayInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>
}

Overlay.Header = function OverlayHeader({ ...restProps }) {
    return <Header {...restProps}></Header>
}

Overlay.Credits = function OverlayCredits({ ...restProps }) {
    return <Credits {...restProps}></Credits>
}

Overlay.Price = function OverlayPrice({ ...restProps }) {
    return <Price {...restProps}></Price>
}

Overlay.AddToCart = function OverlayAddToCart({ ...restProps }) {
    return <AddToCart {...restProps}></AddToCart>
}

Overlay.ViewCart = function OverlayViewCart({ ...restProps }) {
    return <ViewCart {...restProps}></ViewCart>
}

Overlay.Close = function OverlayClose({ ...restProps }) {
    return <Close {...restProps}></Close>
}