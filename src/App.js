import "./App.css";
import React, { Component, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

class App extends Component {
    render() {
        return (
            <>
                {/* <h1>Netflix Clone</h1> */}
                <Navbar/>
                <Banner/>
            </>
        )
    }
}
export default App;
