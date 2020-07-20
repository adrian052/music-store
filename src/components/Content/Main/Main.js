import React from 'react'
import { Row,Col } from 'react-bootstrap'
import FilterBox from './FilterBox'
import ProductsContainer from './ProductsContainer'

function Main() {
    return (
        <div>
            <Row>
                <Col sm={3}>
                    <FilterBox></FilterBox>
                </Col>
                <Col sm={9}>
                    <ProductsContainer></ProductsContainer>
                </Col>
            </Row>
        </div>
    )
}

export default Main
