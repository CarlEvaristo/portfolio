import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    const currentYear = new Date()

    return (
        <div className='footer'>
            <div className='social'>
                <a href="mailto:thepythoneer@gmail.com"><EmailIcon /></a>
                <a href="https://www.linkedin.com/in/carl-evaristo/"><LinkedInIcon /></a>
                <a href="https://github.com/CarlEvaristo"><GitHubIcon /></a>
            </div>
            <p> &copy; {currentYear.getFullYear()}</p>
        </div>
    )
}
