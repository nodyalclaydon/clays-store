import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #293241;
    margin-top: 5px;
    padding: 20px;
    height: 100px;
`

export const Icon = styled.img`
    filter: brightness(0) invert(1);
    height: 50px;
    width: 50px;
    cursor: pointer;
`

export const Link = styled.a`
    margin: 0 auto;
`

export const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 15px auto 0;
`