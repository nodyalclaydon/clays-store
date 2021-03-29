import React from "react"
import { Link as ReachRouterLink } from "react-router-dom"

import {Container, Logo, Icon, Navbar, Frame, List, Link} from "./styles/header"

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Icon = function HeaderIcon({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Icon {...restProps} />
        </ReachRouterLink>
    )
}

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.List = function HeaderList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

Header.Link = function HeaderLink({ to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Link {...restProps} />
        </ReachRouterLink>
    )
}