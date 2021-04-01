import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [guitarPhotos, setGuitarPhotos] = useState([])
    const [recordPhotos, setRecordPhotos] = useState([])
    const [pianoPhotos, setPianoPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const guitarUrl = "https://api.unsplash.com/search/photos?page=1&query=guitar&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"
    const recordUrl = "https://api.unsplash.com/search/photos?Xpage=1&query=record&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"
    const pianoUrl = "https://api.unsplash.com/search/photos?page=1&query=piano&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"

    function getGPhotos() {
        fetch(guitarUrl)
            .then(res => res.json())
            .then(data => setGuitarPhotos(data.results))
    }

    function getRPhotos() {
        fetch(recordUrl)
            .then(res => res.json())
            .then(data => setRecordPhotos(data))
    }

    function getPPhotos() {
        fetch(pianoUrl)
            .then(res => res.json())
            .then(data => setPianoPhotos(data))
    }

    useEffect(() => {
        getGPhotos()
        getRPhotos()
        getPPhotos()
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