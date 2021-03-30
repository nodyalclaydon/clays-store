import styled from "styled-components"

export const Container = styled.header`
display: flex;
flex-direction: column;    
background-color: orange;
`

export const Logo = styled.img`
    width: 50px;
    padding: 20px;
    margin: 0;
`

export const Icon = styled.img`
    width: 30px;
    padding: 10px;
    margin: 0;
`

export const Navbar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;
`

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const List = styled.li`
    font-weight: 700;
    text-transform: uppercase;
`

export const Link = styled.a`
    color: white;
    text-decoration: none;
`