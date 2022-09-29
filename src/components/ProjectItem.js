import React from 'react'
import "./ProjectItem.css"
import { Link } from "react-router-dom"

export default function ProjectItem({image, name, id}) {
  return (
    <Link to={`/projects/${id}`}>
        <div className='projectItem'>
            <img src={image}  className="bgImage" />
            <h1 className='projectTitle'> {name} </h1>
        </div>
    </Link>
  )
}
