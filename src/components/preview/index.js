import React from "react"
import { Link as ReachRouterLink } from "react-router-dom"

import {Container, ImagePrev, SeeMore, Header, PrevContainer, Link} from "./styles/imagePrev"

export default function Preview({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Preview.ImagePrev = function PreviewImagePrev({ ...restProps }) {
    return <ImagePrev {...restProps} />
}

Preview.SeeMore = function PreviewSeeMore({ ...restProps }) {
    return <SeeMore {...restProps}></SeeMore>
}

Preview.Header = function PreviewHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Preview.PrevContainer = function PreviewPrevContainer({ children, ...restProps }) {
    return <PrevContainer {...restProps}>{children}</PrevContainer>
}

Preview.Link = function PreviewLink({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Link {...restProps} />
        </ReachRouterLink>
    )
}