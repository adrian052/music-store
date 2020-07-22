import React, {useRef,useState,useEffect,useContext} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import './style.css'
import InputPrice from './InputPrice'
import { Context } from '../../../Store'

function PriceFilter() {
    //Context
    const [state,dispatch] = useContext(Context)
    //Refs to price inputs
    const maxPriceRef = useRef(null)
    const minPriceRef = useRef(null)
    //state
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(10000000)

    useEffect(() => { 
        dispatch({type:'CHANGE_PRICE',min:minPrice,max:maxPrice})
    },[minPrice,maxPrice])

    const buttonFilterHandler = () => {
        if(maxPriceRef.current.value.localeCompare('')!==0 || minPriceRef.current.value.localeCompare('')!==0){
            let alertMessage = ''
            if(maxPriceRef.current.value.localeCompare('')!==0){
                let currentMax = Number(maxPriceRef.current.value)
                if(isNaN(currentMax)){
                    alert('ingresa una cantidad correcta para max price')
                }else{
                    setMaxPrice(currentMax)
                    alertMessage+='Max Price = '+currentMax+'\n'
                }
            }else{
                setMaxPrice(10000000)
            }
            if(minPriceRef.current.value.localeCompare('')!==0){
                let currentMin = Number(minPriceRef.current.value)
                if(isNaN(currentMin)){
                    alert('ingresa una cantidad correcta para min price')
                }else{
                    setMinPrice(currentMin)
                    alertMessage+='Min Price = '+currentMin
                }
            }else{
                setMinPrice(0)
            }
            alert(alertMessage)
        }else{
            alert('no hay cantidades para filtrar')
        }
        
        

    }


    return (
        <div className="filterItem">
            <Form>
                <h4 className="filterItemTitle">Price</h4>
                <div className="filters">
                    <Row>
                        <Col sm={12}><Form.Label>Min Price:</Form.Label></Col>
                        <Col sm={11}>
                            <InputPrice reference={minPriceRef}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}><Form.Label>Max Price:</Form.Label></Col>
                        <Col sm={11}>
                            <InputPrice reference={maxPriceRef}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7}></Col>
                        <Col sm ={4}>
                            <Button variant="outline-info" onClick={buttonFilterHandler}>
                                <img src={require('../../../images/filter.png')} className='filterImg' alt='filterImage'/>Filter
                            </Button>
                        </Col>   
                    </Row>
                </div>
            </Form>
        </div>
    )
}

export default PriceFilter
