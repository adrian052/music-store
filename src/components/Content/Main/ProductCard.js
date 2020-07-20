import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'

function ProductCard({product}) {
    const {title,description,price,image} = product
    return (
        <div>
            <Col sm={4}>
                <Card border='info'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`./ProductImages/${image}`)} />
                <Card.Body>
                <Card.Title className="cardTitle">{title}</Card.Title>
                  <div>
                    <Card.Text className='descriptionContainer'>
                      {description}
                    </Card.Text>
                  </div> 
                  <Card.Text className='cardPrice'>
                    ${price}
                  </Card.Text>
                  <Button variant="danger" className="cardButton">Buy Now!!!</Button>
                </Card.Body>
                </Card>
            </Col>
                    
        </div>
    )
}

export default ProductCard
