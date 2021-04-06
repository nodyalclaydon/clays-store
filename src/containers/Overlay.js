import React, {useContext} from "react"
import { Overlay } from "../components"

import {Context} from "../Context"

export function OverlayContainer({ children, ...restProps }) {
    const {overlay, hideOverlay, addToCart} = useContext(Context)
    
return overlay.length === 0 ? <div></div> :
        <Overlay>
            <Overlay.Container>
                <Overlay.Image src={overlay.urls.regular} />
                <Overlay.Info>
                    <Overlay.Header>{overlay.alt_description}</Overlay.Header>
                    <Overlay.Credits>credit: {overlay.user.name}</Overlay.Credits>
                    <Overlay.Price>$9.89</Overlay.Price>
                    <Overlay.AddToCart onClick={() => addToCart(overlay)}>add to cart</Overlay.AddToCart>
                    <Overlay.ViewCart>view cart</Overlay.ViewCart>
                    <Overlay.Close onClick={() => hideOverlay()} />
                </Overlay.Info>
            </Overlay.Container>
        </Overlay>
}