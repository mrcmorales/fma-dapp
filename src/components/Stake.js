import React, {Component, useState} from 'react';

import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FmaTokenLogo from './../assets/images/token/FMA.png';
import FssTokenLogo from './../assets/images/token/FSS.png';
import FlapTokenLogo from './../assets/images/token/FLAP.png';
import logo from "../assets/images/logo/flama.png";
import Navbar from "react-bootstrap/Navbar";


class Stake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    PrintTokenFunction(token) {
        return <span>
              <img src={token.logo} width="25" className="d-inline-block align-top" alt="token"/>
              <span>{token.name}</span>
            </span>;
    }


    render() {

        const radios = [
            {name: 'Stake', value: 1},
            {name: 'Unstake', value: 2},
        ];

        const Tokens =
            {
                fma: {name: 'FMA', logo: FmaTokenLogo},
                fss: {name: 'FSS', logo: FssTokenLogo},
                flap: {name: 'FLAP', logo: FlapTokenLogo}
            };

        const Send = this.state.value === 1 ? Tokens.fma : Tokens.fss;
        const Get = this.state.value === 2 ? Tokens.fma : Tokens.fss;

        return (
            <React.Fragment>
                <Col sm={6}>
                    <div className="staking p-5 mb-5 bg-white shadow box-rounded">
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
                                {this.PrintTokenFunction(Send)}
                            </div>
                        </div>
                        <div className="box-input">
                            <div className="amount-box-title">
                                <div className="">Receive</div>
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" placeholder="0.0" readOnly/>
                                {this.PrintTokenFunction(Get)}
                            </div>
                        </div>
                        <div className="accept mt-5 text-center">
                            <Button variant="danger" size="lg" block>{radios[this.state.value - 1].name}</Button>
                        </div>
                    </div>
                </Col>

                <Col md={{span: 4, offset: 1}}>
                    <div className="right-column">
                    <div className="balances p-4 mb-3 bg-white shadow box-rounded   ">
                        <h5>Balances</h5>
                        <div className="box-input">
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.fma)}
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.fss)}
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.flap)}
                            </div>
                        </div>
                    </div>
                    <div className="balances p-4 mb-5 bg-white shadow box-rounded   ">
                        <h5>Balances</h5>
                        <div className="box-input">
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.fma)}
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.fss)}
                            </div>
                            <div className="amount-box-input">
                                <FormControl type="text" value='0' readOnly/>
                                {this.PrintTokenFunction(Tokens.flap)}
                            </div>
                        </div>
                    </div>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}


export default Stake;