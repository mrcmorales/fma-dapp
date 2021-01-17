import React, {Component, useState} from 'react';

import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FmaLogo from './../assets/images/token/FMA.png';
import FssLogo from './../assets/images/token/FSS.png';
import logo from "../assets/images/logo/flama.png";
import Navbar from "react-bootstrap/Navbar";


class Stake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    render() {

        const radios = [
            {name: 'Stake', value: 1},
            {name: 'Unstake', value: 2},
        ];

        const tokens =
            {
                fma: {name: 'FMA', logo: FmaLogo},
                fss: {name: 'FSS', logo: FssLogo}
            };



        console.log(tokens);
        console.log(tokens["fma"].name);


        const Send = this.state.value === 1 ? tokens['fma'] : tokens['fss'];
        const Get = this.state.value === 2 ? tokens['fma'] : tokens['fss'];

        return (
            <React.Fragment>
                <Col>
                    <div className="staking p-5 mb-5 bg-white shadow">

                        <div className="controls text-center">
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-danger lg"
                                        size="lg"
                                        name="radio"
                                        value={radio.value}
                                        checked={this.state.value === radio.value}
                                        className={this.state.value === radio.value}
                                        onChange={(e) => this.setState({value: radio.value})}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                        <div className="box-input">
                            <div className="amount-box-title">
                                <div className="">Sent</div>
                                <div className="">Balance: 0
                                </div>
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" placeholder="0.0"/>
                                <button className="max">MAX</button>
                                <span>
                                    <img src={Send.logo} width="25" className="d-inline-block align-top" alt="token"/>
                                    <span>{Send.name}</span>
                                </span>
                            </div>
                        </div>
                        <div className="box-input">
                            <div className="amount-box-title">
                                <div className="">Receive</div>

                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" placeholder="0.0" readOnly/>
                                <span>
                                  <img src={Get.logo} width="25" className="d-inline-block align-top" alt="token"/>
                                    <span>{Get.name}</span>
                                </span>
                            </div>
                        </div>
                        <div className="accept mt-5 text-center" >
                            <Button variant="danger" size="lg" block>{radios[this.state.value-1].name}</Button>

                        </div>



                    </div>
                </Col>


                <Col>
                    <div className="card staking shadow-sm rounded-lg">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default Stake;