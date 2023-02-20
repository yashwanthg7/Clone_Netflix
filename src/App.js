import "./App.css";
import React, { Component, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
    render() {
        return (
            <>
                {/* <h1>Netflix Clone</h1> */}
                <Navbar/>
            </>
        )
    }
}
export default App;
