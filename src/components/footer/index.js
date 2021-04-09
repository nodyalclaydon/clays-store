import React from "react"
import {Container, Icon, Link, Text} from "./styles/footer"

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Icon = function FooterIcon({ ...restProps }) {
    return <Icon {...restProps} />
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Text = function FooterText({ ...restProps }) {
    return <Text {...restProps}></Text>
}