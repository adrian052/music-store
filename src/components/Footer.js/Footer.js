import React from 'react'
import './style.css'
import CardFooter from './CardFooter'
import {Row,Col} from 'react-bootstrap'
function Footer() {
    return (
        <div className="footerContainer">
            <Row className="rowFooter">
                <Col sm={3}><CardFooter/></Col>
                <Col sm={3}><CardFooter/></Col>
                <Col sm={3}><CardFooter/></Col>
                <Col sm={3}><CardFooter/></Col>
            </Row>
        </div>
    )
}

export default Footer

