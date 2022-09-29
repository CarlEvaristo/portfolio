import React from 'react'
import "./Experience.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { School, Work } from '@mui/icons-material'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Context } from "../context";
import { schoolList, jobList } from '../helpers/ExperienceList'; 

export default function Experience() {
    const context1 = React.useContext(Context)

    // when using css scroll snap functionality
    // you loose the scrollY or scrollTop attributes of the Window
    // (the Window has to be fixed height/unscrollable for scroll snap to work)
    // workaround: set onScroll listener on child (child that has the scroll snap/scrollability)
    // and onScroll invoke function that gets the event.target.scrollTop of that child as param.
    // (function saves value to context state manager and navbar uses it to conditionally render bg color)

    function handleScroll(e) {
        console.log(e.target.scrollTop)
        context1.scrollSetter(e.target.scrollTop)
    }
    
    const schoolElements = schoolList.map(school => {
        return <VerticalTimelineElement 
                    className='vertical-timeline-element--education'
                    date={school.date}
                    iconStyle={{background:"#21325e",color:"#fff"}}
                    icon={<School />}
                    >
                    <h3 className='vertical-timeline-element-title'>{school.title}</h3>
                    <p>{school.description}</p>
                </VerticalTimelineElement>
    })

    const jobElements = jobList.map(job => {
        return <VerticalTimelineElement 
                    className='vertical-timeline-element--education'
                    date={job.date}
                    iconStyle={{background:"#76ecbf",color:"#fff"}}
                    icon={<School />}
                    >
                    <h3 className='vertical-timeline-element-title'>{job.title}</h3>
                    <p>{job.description}</p>
                </VerticalTimelineElement>
    })

    return (
        <div className='experience' onScroll={handleScroll}>
            <NavBar/>
            <div className="section experiences" >
                <VerticalTimeline lineColor='#21325e'>
                    <h2></h2>
                    {schoolElements}
                    {jobElements}
                    <span></span>
                </VerticalTimeline>
            </div>

            <Footer /> 
        </div>
    )
}
