import React, {useState,useEffect,useContext} from 'react'
import {Form} from 'react-bootstrap'
import { Context } from '../../../Store'

function FilterItem({title,filterList,actionType}) {
    const [itemsSelected,setItemsSelected] = useState([])
    const [state,dispatch] = useContext(Context)
    

    useEffect(() => {
        dispatch({type:actionType,payload:itemsSelected})
    }, [itemsSelected])

    const selectHandler = (e) => {
        let index = itemsSelected.indexOf(e.target.id)
        if(index!==-1){
            itemsSelected.splice(index,1)
            let newList = [...itemsSelected]
            setItemsSelected(newList)
        }else {
            itemsSelected.push(e.target.id)
            let newList = [...itemsSelected]
            setItemsSelected(newList) 
            
        }
    }

    return (
        <div className="filterItem">
            <Form onChange={selectHandler}>
                <h4 className="filterItemTitle">{title}</h4>
                <div className="filters">
                    {filterList
                    .map(filter=>
                    <Form.Check 
                    custom 
                    type='checkbox'
                    id={filter}label={filter.replace(/^./, filter[0].toUpperCase())}/>)}
                </div>
            </Form>
        </div>
    )
}

export default FilterItem
