import React from 'react'
import { Route } from 'react-router-dom'
import Weather from './'

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;


const RouterApp = () => {

    return(

         <div className="App">
         <Header city={city}/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

    </div>
)



}

export default RouterApp;