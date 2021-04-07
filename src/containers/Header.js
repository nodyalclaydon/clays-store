import React, {useContext} from "react"
import { Header } from "../components"

import {Context} from "../Context"

export function HeaderContainer() {
    const {setCategory, cartItems} = useContext(Context)

    const cartNumber = cartItems.length > 0 ? cartItems.length : null

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" src={process.env.PUBLIC_URL + "/img/CY-logo.png"} alt="logo" />
                <Header.Link to="/">home</Header.Link>
                <Header.Link to="/category" onClick={() => {setCategory("guitar")}}>guitars</Header.Link>
                <Header.Link to="/category" onClick={() => {setCategory("records")}}>records</Header.Link>
                <Header.Link to="/category" onClick={() => {setCategory("pianos")}}>pianos</Header.Link>
            </Header.Frame>
            <Header.Frame>
                <Header.Counter>{cartNumber}</Header.Counter>
                <Header.Icon to="/cart" src={process.env.PUBLIC_URL + "/img/cart.png"} alt="cart" />
            </Header.Frame>
        </Header>
    )
}