import React, {useContext} from "react"
import { Header } from "../components"

import {Context} from "../Context"

export function HeaderContainer() {
    const {setCategory} = useContext(Context)

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" src={process.env.PUBLIC_URL + "/img/CY-logo.png"} alt="logo" />
                <Header.Icon to="/cart" src={process.env.PUBLIC_URL + "/img/cart.png"} alt="cart" />
            </Header.Frame>
            <Header.Navbar>
                <Header.List><Header.Link to="/">home</Header.Link></Header.List>
                <Header.List><Header.Link to="/category" onClick={() => {setCategory("guitar")}}>guitars</Header.Link></Header.List>
                <Header.List><Header.Link to="/category" onClick={() => {setCategory("records")}}>records</Header.Link></Header.List>
                <Header.List><Header.Link to="/category" onClick={() => {setCategory("pianos")}}>pianos</Header.Link></Header.List>
            </Header.Navbar>
        </Header>
    )
}