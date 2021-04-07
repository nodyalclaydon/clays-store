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
        background: rgba(255, 255, 255, 255);
        opacity: 0.7;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
    max-width: 800px;
    position: fixed;
    height: 600px;
    background-color: white;
    box-shadow: 0 10px 6px -6px #777;
    z-index: 1;
`

export const Image = styled.img`
    max-width: 55%;
    height: 85%;
    object-fit: cover;
    margin: auto 0 auto 20px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    justify-content: flex-end;
`

export const Header = styled.h1`
    font-size: 2.5rem;
    margin-top: 20px;
    text-transform: capitalize;
`

export const Credits = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 30px;
`

export const Price = styled.p`
    font-size: 2.5rem;
    margin-top: 220px;
`

export const AddToCart = styled.button`
    background-color: green;
    border: none;
    width: 150px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    border-radius: 3px;
    cursor: pointer;
`

export const ViewCart = styled.button`
    background-color: red;
    border: none;
    width: 150px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    border-radius: 3px;
    margin: 15px 0 50px;
    cursor: pointer;
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
        background-color: #333;
    }

    &:hover {
        transform: rotate(135deg);
    }

    &:after {
        transform: rotate(-90deg);
    }
`