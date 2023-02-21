import "./App.css";
import React, { Component, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./request";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <h1>Netflix Clone</h1> */}
                <Navbar />
                <Banner />
                <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} isLargeRow />
                <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} isLargeRow />
                <Row title={"Animation Movies"} fetchUrl={requests.fetchAnimationMovies} isLargeRow />
                <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} isLargeRow />
                <Row title={"Romance Movies "} fetchUrl={requests.fetchRomanceMovies} isLargeRow />
            </div>
        )
    }
}
export default App;
