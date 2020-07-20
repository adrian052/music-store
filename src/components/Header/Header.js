import React from 'react'
import './style.css'
import {Row,Col,Image, } from 'react-bootstrap'
import Menubar from './Menubar'


function Header() {
    return (
            <div className="header">
                <Row className="rowHead">
                    <Col sm={2}>
                        <Image src={require('../../images/logo.jpeg')} thumbnail className="logo"/>
                    </Col>
                    <Col sm={8}>
                        <h1>Music Store</h1>
                        <Menubar/>
                    </Col>
                    <Col sm={1} className="accountContainer">
                        <Image src={require('../../images/session.png')} fluid className="sessionImg"/><br/>
                        <a href="#" className="myAccount">Log-In</a>
                    </Col>
                </Row>
            </div>    
    )
}

export default Header
