import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #293241;

    @media (min-width: 2000px) {
        justify-content: space-around;
    }
`

export const Logo = styled.img`
    width: 50px;
    padding: 20px;
    margin: 0 40px 0 0;
    filter: brightness(0) invert(1);
`

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
    color: white;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-right: 30px;
`

export const Counter = styled.p`
    color: white;
    font-size: 1.6rem;
`