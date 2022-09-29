import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import React from "react"
import Detail from './pages/Detail';

function App() {
  React.useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
      
  }, []);

  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects/:id" element={<Detail />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
