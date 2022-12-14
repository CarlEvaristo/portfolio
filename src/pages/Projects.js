import React from 'react'
import "./Projects.css"
import NavBar from '../components/NavBar'
import { Context } from "../context";
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import Footer from '../components/Footer';

export default function Projects() {
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
    const projectElements = projectList.map((project,index) => {
        return <ProjectItem image={project.image} name={project.name} key={index} id={index}/>
    })

    return (
        <>
            <NavBar/>
            <div className='projects' onScroll={handleScroll}>
                <div className='projectsContainer'>
                    <div className='section projectList'>
                    
                        {projectElements}
                    </div>
                </div>
            <Footer /> 
            </div>
        </>
  )
}
