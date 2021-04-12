import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px auto;
`

export const Trash = styled.img`
    width: 15px;
    height: 22px;
    margin: auto 0 auto 15px;
    cursor: pointer;
`

export const Thumbnail = styled.img`
    width: 120px;
    height: 80px;
    object-fit: cover;
    margin: 0 15px 0;

    @media (min-width: 600px) {
        width: 200px;
        height: 133px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    text-transform: capitalize;
    margin-top: 0;
    max-width: 200px;
    word-wrap: break-word;

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
    font-weight: 400;
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