import React from "react"
import { Header } from "../components"

export function HeaderContainer() {
    return (
        <Header>
            <Header.Logo to="/"/>
            <Header.Icon to="/cart" src="/img/cart.svg" alt="cart" />
            <Header.Navbar />
        </Header>
    )
}