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
    width: 200px;
    height: 133px;
    object-fit: cover;
    margin: 0 15px 0;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    text-transform: capitalize;
    margin-top: 0;
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
    position: absolute;
    right: 30px;
    margin-top: 40px;
    font-size: 2.4rem;
`