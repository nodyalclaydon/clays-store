import React from "react"
import {Container, Icon} from "./styles/footer"

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Icon = function FooterIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}