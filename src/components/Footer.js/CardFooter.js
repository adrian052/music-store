import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function CardFooter() {
    return (
        <Container>
            <Row className="rowCardFooter">
                <Col sm={12}>
                    <h3 className="footerTitle">Social</h3>
                </Col>
                <Col sm={12}>
                    <ul className="footerList">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default CardFooter
