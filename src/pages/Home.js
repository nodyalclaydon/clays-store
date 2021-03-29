import React from "react"

import { HeaderContainer } from "../containers/Header"
import { FooterContainer} from "../containers/Footer"

function Home() {
    return (
        <>
            <HeaderContainer />
            <h1>This will be the home page</h1>
            <FooterContainer />
        </>
    )
}

export default Home