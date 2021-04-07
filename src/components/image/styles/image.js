import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
`

export const CartIcon = styled.img`

`

export const Photo = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 5px;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.025);
        cursor: pointer;
    }
`

export const Headline = styled.h2`
    font-size: 1.6rem;
    text-align: center;
`