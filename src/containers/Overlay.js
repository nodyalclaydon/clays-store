import React, {useContext, useState} from "react"
import { Overlay } from "../components"

import {Context} from "../Context"

export function OverlayContainer({ children, ...restProps }) {
    const {overlay, hideOverlay, addToCart} = useContext(Context)
    const [clicked, setClicked] = useState(false)

    function changeBtn() {
        if (clicked === false) { setClicked(true) }
    }

    function resetBtn() {
        setClicked(false)
    }

    let btnColor = clicked ? "#98c1d9" : "#3d5a80"
    let btnText = clicked ? "Added!" : "add to cart"

//background-color: #3d5a80;
return overlay.length === 0 ? <div></div> :
        <Overlay>
            <Overlay.Container>
                <Overlay.Image src={overlay.urls.regular} />
                <Overlay.Info>
                    <Overlay.Header>{overlay.alt_description}</Overlay.Header>
                    <Overlay.Credits>credit: {overlay.user.name}</Overlay.Credits>
                    <Overlay.Price>$9.89</Overlay.Price>
                    <Overlay.AddToCart 
                        style={{backgroundColor: btnColor}}
                        onClick={() => {
                            addToCart(overlay) 
                            changeBtn()
                            }
                        }>{btnText}</Overlay.AddToCart>
                    <Overlay.ViewCart to="/cart" onClick={() => hideOverlay()}>view cart</Overlay.ViewCart>
                    <Overlay.Close onClick={() => {resetBtn(); hideOverlay()}} />
                </Overlay.Info>
            </Overlay.Container>
        </Overlay>
}