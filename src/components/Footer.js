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
                <EmailIcon />
                <LinkedInIcon />
                <GitHubIcon />
                <TwitterIcon />
            </div>
            <p> &copy; {currentYear.getFullYear()}</p>
        </div>
    )
}
