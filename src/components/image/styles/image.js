import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
`

export const Photo = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
    margin: 5px;
    transition: transform 100ms ease-in-out;

    &:hover {
        transform: scale(1.025);
        cursor: pointer;
    }

    @media (min-width: 600px) {
        width: 250px;
        height: 250px;
    }
`

export const Headline = styled.h2`
    font-size: 2.2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
    color: #98c1d9;
`