import React, {useState, useRef,useEffect,useContext} from 'react'
import {Form,Navbar,Nav,Button,FormControl} from 'react-bootstrap'
import {Context} from '../../Store'

function Menubar() {
    const [state,dispatch] = useContext(Context)
    const searchInput = useRef(null)
    const [currentSearch,setCurrentSearch] = useState('')

    useEffect(() => {
        dispatch({type:'CHANGE_SEARCH',payload:currentSearch})
    }, [currentSearch])

    const searchHandler = (e) => {
        setCurrentSearch(searchInput.current.value)
    }


    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand >Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>Best sellers</Nav.Link>
                <Nav.Link>Specials</Nav.Link>
            </Nav>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={searchInput}/>
                <Button variant="info" onClick={searchHandler}>Search</Button>
            </Form>
        </Navbar>
    )
}

export default Menubar
