import React from "react"

import { HeaderContainer } from "../containers/Header"
import { FooterContainer} from "../containers/Footer"
import { CategoryContainer } from "../containers/Category"

function Category() {
    return (
        <>
            <HeaderContainer />
            <h1>This will be the category page</h1>
            <CategoryContainer />
            <FooterContainer />
        </>
    )
}

export default Category