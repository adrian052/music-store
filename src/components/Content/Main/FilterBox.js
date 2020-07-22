import React from 'react'
import './style.css'
import PriceFilter from './PriceFilter'
import FilterItem from './FilterItem'



function FilterBox() {

    const categoryList = ['percusion','wind','string','electric','guitar','tuners','accesories']
    const brandList = ['yamaha','fender','epiphone','gibson','ibanez','cort','martin','paracho']
    const otherFilterList = ['bestsell', 'promo','special']

    return (
        <div className="mainContainer">
            <FilterItem title='Category' filterList={categoryList} actionType='CHANGE_CATEGORIES'/>
            <PriceFilter/>
            <FilterItem title='Brand' filterList={brandList} actionType='CHANGE_BRANDS'/>
            <FilterItem title='Other filters' filterList={otherFilterList} actionType='CHANGE_TAGS'/>
        </div>
    )
}

export default FilterBox
