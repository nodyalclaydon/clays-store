import styled from "styled-components"

export const Background = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        width: inherit;
        height: inherit;
        position: absolute;
        background: rgba(0, 0, 0);
        opacity: 0.5;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 70%;
    max-width: 800px;
    position: fixed;
    background-color: white;
    min-height: 600px;
    height: fit-content;
    box-shadow: 0 10px 6px -6px #777;
    z-index: 1;

    @media (min-width: 600px) {
        flex-direction: row;
        height: 600px;
    }
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 30px auto;

    @media (min-width: 600px) {
        width: 55%;
        height: 85%;
        margin: auto 15px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px;

    @media (min-width: 600px) {
        margin: auto 15px auto 0;
    }
`

export const Header = styled.h1`
    font-size: 2.5rem;
    text-transform: capitalize;
`

export const Credits = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
`

export const Price = styled.p`
    font-size: 2.5rem;
    margin-top: 50px
`

export const AddToCart = styled.button`
    border: none;
    outline: none;
    width: 150px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    margin-top: 50px;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 150ms ease-in-out;

    &:hover {
        transform: scale(1.045)
    }
`

export const ViewCart = styled.button`
    background-color: #ee6c4d;
    border: none;
    outline: none;
    width: 150px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    margin-top: 15px;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 150ms ease-in-out;

    &:hover {
        transform: scale(1.045)
    }
`

export const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    padding: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    transform: rotate(45deg);
    transition: transform 100ms ease-in-out;

    &:before,
    &:after {
        content: " ";
        position: absolute;
        left: 8px;
        top: 0;
        height: 20px;
        width: 2px;
        background-color: #293241;
    }

    &:hover {
        transform: rotate(135deg);
        &:before, &:after { background-color: #ee6c4d; }
    }

    &:after {
        transform: rotate(-90deg);
    }
`