import styled from "styled-components"

export const Container = styled.div`
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
`

export const ImagePrev = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 5px;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.025);
        cursor: pointer;
    }
`

export const PrevContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const SeeMore = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: right;
`

export const Header = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
`