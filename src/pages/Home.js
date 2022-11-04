import React from 'react'
import "./Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Context } from "../context";

export default function Home() {
    const context1 = React.useContext(Context)
    const [title, setTitle] =  React.useState("")

    const titleText = "I'm Carl, Frontend Developer "
    const titleArray = titleText.split("");

    // when using css scroll snap functionality
    // you loose the scrollY or scrollTop attributes of the Window
    // (the Window has to be fixed height/unscrollable for scroll snap to work)
    // workaround: set onScroll listener on child (child that has the scroll snap/scrollability)
    // and onScroll invoke function that gets the event.target.scrollTop of that child as param.
    // (function saves value to context state manager and navbar uses it to conditionally render bg color)

    function handleScroll(e) {
        context1.scrollSetter(e.target.scrollTop)
    }
    
    React.useEffect(()=>{
        setTitle("")
        titleArray.map((item, index) => {
            setTimeout(() => {
                setTitle(prev => prev + item)
            },50*index)
        })
    },[])

    return (

        <div className='home' onScroll={handleScroll}>
            <NavBar/>
            <div className="section aboutBg" >            
                
                <div className='about'>
                    <div className='aboutContainer'>
                        <h2 className="prompt">{title}</h2>

                        <div className='subtext'>
                            <p>I am a React Developer,</p>
                            <p>with full-stack aspirations.</p>
                            <p>I build scalable frontends, </p>
                            <p>and great user experiences. </p>
                            <a href="mailto:thepythoneer@gmail.com" target="_blank"><EmailIcon /></a>
                            <a href="https://www.linkedin.com/in/carl-evaristo/" target="_blank"><LinkedInIcon /></a>
                            <a href="https://github.com/CarlEvaristo" target="_blank"><GitHubIcon /></a>
                        </div>
                        {/* <div style={{height: "250px", width: "100%", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "150%", width: "100%"}}><path d="M0.00,49.99 C150.00,150.00 329.23,-17.26 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></svg></div> */}
                    </div>
                </div>
            </div>
            <div className='section skills'>
                <h2>Skills</h2>
                <ol className='list'>
                    <li className='item'>
                        <h3 className='subtitle'>Front-end</h3>
                        <p className='items'>
                            ReactJS, HTML5, CSS3, NPM, MaterialUI, React Router, Context State Management
                        </p>
                    </li>
                    <li className='item'>
                        <h3 className='subtitle'>Back-end</h3>
                        <p className='items'>
                            NodeJS, ExpressJS, Flask, Pandas, MySQL, MongoDB, FireBase
                        </p>
                    </li>
                    <li className='item'>
                        <h3 className='subtitle'>Languages</h3>
                        <p className='items'>
                            Javascript, JS ES2015, Python, <em>learning Typescript</em>
                        </p>
                    </li>
                </ol>
            </div> 
            <div className='section cover'>
                <h2>About</h2>
                <p className='coverText'>
                    I'm a ReactJS frontend developer, with backend NodeJS,
                    ExpressJS, MongoDB, mySQL, FireBase, AWS knowledge. 
                    Highly motivated and creative, with a passion to build innovative,
                    practical, accessible and aesthetic user experiences. Extensive
                    knowledge of HTML5, CSS3, Javascript, ES2015, React18. <br/>
                    Python experience: web apps with Flask, 
                    using APIs, web scraping, and data analysis using Pandas.
                </p>
            </div> 
            <Footer /> 
        </div>
    )
}
