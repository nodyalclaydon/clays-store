import React, {useContext} from "react"

import { Preview } from "../components"
import { Context } from "../Context"

export function CategoryPrev({ children, ...restProps }) {
    const {guitarPhotos, recordPhotos, pianoPhotos, setCategory, displayOverlay} = useContext(Context)

    // create new photo array of first 4 for each category
    const guitarPrevElements = guitarPhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    const recordPrevElements = recordPhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    const pianoPrevElements = pianoPhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    return (
        <>
        <Preview>
            <Preview.Header>Guitars</Preview.Header>
            <Preview.PrevContainer>
                {guitarPrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("guitar")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>

        <Preview>
            <Preview.Header>Records</Preview.Header>
            <Preview.PrevContainer>
                {recordPrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("records")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>

        <Preview>
            <Preview.Header>Pianos</Preview.Header>
            <Preview.PrevContainer>
                {pianoPrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("pianos")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>
        </>
    )

}