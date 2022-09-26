import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

//installed dependencies:
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/material @mui/styled-engine-sc styled-components
//@mui/icons-material
// due to issues with conflict between m-ui and newest version of react:
// had to do a forced install of m-ui:
// npm install @mui/material @mui/icons-material @emotion/react @emotion/styled --force

//npm i react-router-dom
//npm i react-vertical-timeline-component