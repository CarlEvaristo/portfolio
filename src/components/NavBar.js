import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'

export default function NavBar() {
    const [expandNavbar, setExpandNavbar] = React.useState(false)

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>setExpandNavbar(prev=>!prev)}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>

        </div>
  ) 
}
