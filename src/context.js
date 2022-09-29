import React from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [scrolled, setScrolled] = React.useState(0)

    const [loc, setLocation] = React.useState("")

    // code for the scroll event => header tranparent => hero darker
    function scrollSetter(value){
        setScrolled(value)
    }
    function locationSetter(value){
        setLocation(value)
    }
    // React.useEffect(() => {
    //     window.addEventListener('scroll', scrollSetter);
        
    //     return () =>
    //         window.removeEventListener('scroll', scrollSetter);
    // }, []);

    return (
        <Context.Provider value={{scrolled, scrollSetter, loc, locationSetter}}>		
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}