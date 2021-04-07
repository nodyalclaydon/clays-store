import React from "react"
import { Link as ReachRouterLink } from "react-router-dom"

import {Container, Logo, Icon, Link, Counter, Frame} from "./styles/header"

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


Header.Link = function HeaderLink({ to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Link {...restProps} />
        </ReachRouterLink>
    )
}

Header.Counter = function HeaderCounter({ ...restProps }) {
    return <Counter {...restProps} />
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}