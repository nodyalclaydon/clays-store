import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [guitarPhotos, setGuitarPhotos] = useState([])
    const [recordPhotos, setRecordPhotos] = useState([])
    const [pianoPhotos, setPianoPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const accessKey = "bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"

    const guitarUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}page=1&query=guitar`
    const recordUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}page=1&query=record`
    const pianoUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}page=1&query=piano`

    useEffect(() => {
        fetch(guitarUrl)
            .then(res => res.json())
            .then(gData => setGuitarPhotos(gData))
        
        fetch(recordUrl)
            .then(res => res.json())
            .then(rData => setRecordPhotos(rData))

        fetch(pianoUrl)
            .then(res => res.json())
            .then(pData => setPianoPhotos(pData))
    }, [])

    function addToCart(newItem) {

    }

    function removeFromCart(id) {

    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{
            guitarPhotos,
            recordPhotos,
            pianoPhotos,
            cartItems,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}