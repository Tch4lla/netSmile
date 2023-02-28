import { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EyeCatch from './EyeCatch'
import About from './About'
import '../App.css'


const Home = () => {
    return ( 
        <>
            <EyeCatch />
            <About />
        </>
     );
}
 
export default Home;