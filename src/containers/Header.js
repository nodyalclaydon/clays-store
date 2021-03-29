import React from "react"
import { Header } from "../components"

export function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" src={process.env.PUBLIC_URL + "/img/CY-logo.png"} alt="logo" />
                <Header.Icon to="/cart" src={process.env.PUBLIC_URL + "/img/cart.png"} alt="cart" />
            </Header.Frame>
            <Header.Navbar>
                <Header.List><Header.Link to="/">home</Header.Link></Header.List>
                <Header.List><Header.Link to="/category">guitars</Header.Link></Header.List>
                <Header.List><Header.Link to="/category">records</Header.Link></Header.List>
                <Header.List><Header.Link to="/category">pianos</Header.Link></Header.List>
            </Header.Navbar>
        </Header>
    )
}