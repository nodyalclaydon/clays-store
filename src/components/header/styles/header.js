import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #293241;

    @media (min-width: 600px) {
        align-items: center;
    }

    @media (min-width: 2000px) {
        justify-content: space-around;
    }
`

export const Logo = styled.img`
    width: 50px;
    padding: 20px;
    filter: brightness(0) invert(1);

    @media (min-width: 600px) {
        margin: 0 40px 0 0;
    }
`

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-of-type {
        flex-direction: row;
        position: absolute;
        top: 0;
        right: 0;
    }

    &:first-of-type {
        margin: 0 auto;
    }

    @media (min-width: 600px) {
        flex-direction: row;

        &:last-of-type {
            flex-direction: row;
            position: relative;
        }

        &:first-of-type {
            margin: 0;
        }
    }
`

export const Icon = styled.img`  
    width: 30px;
    padding: 10px;
    margin: 0;
    filter: brightness(0) invert(1);
    transition: scale 200ms ease-in-out;

    &:hover {
        transform: scale(1.1)
    }
`

export const Link = styled.a`   
    display: block;    
    color: white;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0 auto 30px;

    @media (min-width: 600px) {
        margin: 0 30px 0 0;
    }

    &:hover {
        color: #e0fbfc;
    }
`

export const Counter = styled.p`
    color: #e0fbfc;
    font-size: 1.6rem;
`