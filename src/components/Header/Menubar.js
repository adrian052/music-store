import React from 'react'
import {Form,Navbar,Nav,Button,FormControl} from 'react-bootstrap'

function Menubar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Store</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Best sellers</Nav.Link>
              <Nav.Link href="#features">Specials</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Menubar
