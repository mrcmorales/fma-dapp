import React from 'react';
import './assets/css/App.css';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Stake from "./components/Stake";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
    return (
        <React.Fragment>
            <header>
                <Menu/>
            </header>
            <main>

            <Container>
                <Row>
                    <Stake/>
                </Row>

            </Container>

            </main>

            <Footer/>

        </React.Fragment>
    );
}

export default App;
