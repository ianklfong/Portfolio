import React from "react";
import Nav from "../../components/Nav/Nav";
import './Home.css';
import Button from 'react-bootstrap/Button';
import coding from './coding.png';

function Home() {
    return (
        <div className="home-page">
            <Nav />
            <div className="home">
                <div className="home-left" >
                    <h1 className="intro">
                        Hi there,<br />
                        I'm <font style={{ color: "rgb(6,217,158)" }}>Justin</font>,<br />
                        a junior web developer
                    </h1>
                </div>
                <div className="home-right" >
                    <img className="home-logo" src={coding} />
                </div>
            </div>
        </div>
    )
}

export default Home;