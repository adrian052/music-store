import React from 'react'
import {Form,Col,Row,InputGroup,FormControl,Button} from 'react-bootstrap'
import './style.css'

function PriceFilter() {
    return (
        <div className="filterItem">
            <Form>
                <h4 className="filterItemTitle">Price</h4>
                <div className="filters">
                    <Row>
                        <Col sm={12}><Form.Label>Min Price:</Form.Label></Col>
                        <Col sm={11}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Append>
                                  <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}><Form.Label>Max Price:</Form.Label></Col>
                        <Col sm={11}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Append>
                                  <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7}></Col>
                        <Col sm ={4}>
                            <Button variant="outline-info">
                                <img src={require('../../../images/filter.png')} className='filterImg'/>Filter
                            </Button>
                        </Col>   
                    </Row>
                </div>
            </Form>
        </div>
    )
}

export default PriceFilter
