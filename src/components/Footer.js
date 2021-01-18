import React, {Component} from 'react';
import {FaTelegram} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import {AiFillMediumCircle} from "react-icons/ai";
import logo from './../assets/images/logo/flama.png';
import Navbar from "react-bootstrap/Navbar";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-flama">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 social">
                            <a href="https://t.me/FlamaToken" title="Telegram" target="_blank"
                               rel="noreferrer">
                                <FaTelegram color="white"/>
                            </a>
                            <a href="https://twitter.com/FlamaToken" title="Twitter" target="_blank"
                               rel="noreferrer">
                                <AiFillTwitterCircle color="white"/>
                            </a>
                            <a href="https://github.com/FlamaToken" title="Github" target="_blank"
                               rel="noreferrer">
                                <FaGithub color="white"/>
                            </a>
                            <a href="https://medium.com/@FlamaToken" title="Medium" target="_blank"
                               rel="noreferrer">
                                <AiFillMediumCircle color="white"/>
                            </a>
                        </div>
                        <div className="col-sm-6 text-right link">
                            <a href="https://flamanet.io" title="Flamanet" target="_blank" color="white"
                               rel="noreferrer">
                                <img src={logo} width="15" className="d-inline-block align-top" alt="flama"/>
                                flamanet.io
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;