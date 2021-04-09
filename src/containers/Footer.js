import React from "react"
import { Footer } from "../components"

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Link href="https://github.com/nodyalclaydon/clays-store" target="_blank">
                <Footer.Icon src={process.env.PUBLIC_URL + "/img/github_logo.png"} alt="logo" />
            </Footer.Link>
            <Footer.Text>Claydon Raymer, 2021</Footer.Text>
        </Footer>
    )
}