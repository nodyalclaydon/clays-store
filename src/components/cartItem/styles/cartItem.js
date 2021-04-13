import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px auto;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const Trash = styled.img`
    width: 15px;
    height: 22px;
    cursor: pointer;
    position: relative;
    top: 50px;
    left: 15px;

    &:hover {
        opacity: 0.5;
    }

    @media (min-width: 600px) {
        margin: auto 0 auto 15px;
        top: 0;
        left: 0;
    }
`

export const Thumbnail = styled.img`
    width: 120px;
    height: 80px;
    object-fit: cover;
    margin: 0 15px 5px 45px;

    @media (min-width: 600px) {
        width: 200px;
        height: 133px;
        margin: 0 15px 0;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 45px;

    @media (min-width: 600px) {
        margin-left: 0;
    }
`

export const Title = styled.h1`
    text-transform: capitalize;
    margin-top: 0;
    word-wrap: break-word;

    @media (min-width: 600px) {
        max-width: 200px;
    }

    @media (min-width: 800px) {
        max-width: 400px;
    }

    @media (min-width: 1000px) {
        max-width: 700px;
    }

    @media (min-width: 1200px) {
        max-width: 900px;
    }
`

export const Credit = styled.h2`
    font-weight: 400;
    margin-top: 10px;
`

export const Price = styled.h1`
    align-self: center;
    position: absolute;
    right: 30px;
    margin-top: 40px;
    font-weight: 400;

    @media (min-width: 600px) {
        margin-top: 0;
    }
`

export const Total = styled.h1`
    margin: 40px 30px 0 0;
    text-align: right;
    font-size: 2.4rem;
`

export const BuyBtn = styled.button`   
    display: block;    
    margin: 60px 30px 0 auto;
    border: none;
    outline: none;
    width: 150px;
    color: white;
    background-color: #ee6c4d;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 150ms ease-in-out;

    &:hover {
        transform: scale(1.045)
    }
`