import React from 'react'
import { useParams } from "react-router-dom"
import { projectList } from '../helpers/ProjectList';
import "./Detail.css"
import NavBar from '../components/NavBar'
import { Context } from "../context";
import Footer from '../components/Footer';


export default function Detail() {
    const currItem = projectList[useParams().id]
    const context1 = React.useContext(Context)

    // when using css scroll snap functionality
    // you loose the scrollY or scrollTop attributes of the Window
    // (the Window has to be fixed height/unscrollable for scroll snap to work)
    // workaround: set onScroll listener on child (child that has the scroll snap/scrollability)
    // and onScroll invoke function that gets the event.target.scrollTop of that child as param.
    // (function saves value to context state manager and navbar uses it to conditionally render bg color)

    function handleScroll(e) {
        context1.scrollSetter(e.target.scrollTop)
    }
    return (
        <>
            <NavBar/>
            <div className='detail' onScroll={handleScroll}>
                <div className='detailContainer'>
                    <div className='container'>
                        <h2>{currItem.name}</h2>
                        <img src={currItem.image}  className="detailImage" />
                        <h3>{currItem.title}</h3>
                        <p>{currItem.description}</p>
                        <a href={currItem.live} target="blank">Live: {currItem.live}</a>
                        <a href={currItem.repo} target="blank">Repo: {currItem.repo}</a>
                    </div>                    
                </div>
            <Footer /> 
            </div>
        </>
  )
}
