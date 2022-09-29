import React from 'react'
import "./NavBar.css"
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'
import { Context } from "../context"

export default function NavBar() {
    const context = React.useContext(Context)
    const [expandNavbar, setExpandNavbar] = React.useState(false)
    const location = useLocation().pathname

    React.useEffect(()=> {
        window.scrollTo(0,0)
    },[])

    React.useEffect(()=> {
        setExpandNavbar(false)
    }, [location])
    
    const headerScroll = context.scrolled >  50 ? "headerColor" : "headerTransparent"
    const menuColor = context.scrolled > 20 ? "white" : expandNavbar ? "white" :  "accent"


    // const headerScroll = context.scrolled >  window.innerHeight ? "headerWhite" :   "headerColor"
    // context.scrolled > 20 ? "headerColor" : "headerTransparent"

    // const menuColor = context.scrolled > window.innerHeight ? "accent" :
    // (context.scrolled > 20 || expandNavbar) ? "white" :  "accent" 

    return (
        <div className={`navbar ${headerScroll}`} id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>setExpandNavbar(prev=>!prev)} >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/" className={`link ${menuColor} ${location === "/" && "active"} `} onClick={()=> headerScroll = "headerTransparent"} >Home</Link>
                <Link to="/projects" className={`link ${menuColor} ${location === "/projects" && "active"}`} onClick={()=> headerScroll = "headerTransparent"} >Projects</Link>
                <Link to="/experience" className={`link ${menuColor} ${location === "/experience" && "active"}`} onClick={()=> headerScroll = "headerTransparent"} >Experience</Link>
            </div>
        </div>
  ) 
}
