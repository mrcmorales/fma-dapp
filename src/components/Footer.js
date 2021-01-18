import React, {Component} from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from './../assets/images/logo/flama.png';
import Navbar from "react-bootstrap/Navbar";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-flama">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 social">
                            <a href="https://t.me/FlamaToken" title="Flamanet Telegram" target="_blank" rel="noreferrer">
                                <FaTelegram color="white" />
                            </a>
                            <a href="https://twitter.com/FlamaToken" title="Flamanet Twitter" target="_blank" rel="noreferrer">
                                <FaTwitter color="white" />
                            </a>


                        </div>
                        <div className="col-sm-6 text-right link">
                            <a href="https://flamanet.io" title="Flamanet" target="_blank" color="white" rel="noreferrer">
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