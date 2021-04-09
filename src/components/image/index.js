import React from "react"
import {Container, Photo, Headline} from "./styles/image"

export default function Image({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Image.Photo = function ImagePhoto({ ...restProps }) {
    return <Photo {...restProps} />
}

Image.Headline = function ImageHeadline({ ...restProps }) {
    return <Headline {...restProps}></Headline>
}