import React, {useState,useContext,useEffect} from 'react'
import './style.css'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import products from '../../../data/store.json'
import { Context } from '../../../Store'


function ProductsContainer() {
    const allProductList = products.data;
    const [currentProducts,setCurrentProducts] = useState([]);
    const [state] = useContext(Context)


    useEffect(() => {
        setCurrentProducts(filterAll(allProductList))
    }, [state.categories,state.brands,state.tags,state.search,state.minPrice,state.maxPrice])
    
   
    const filterAll = (products) => {
        const result 
        = filterPrice(filterSearch(state.search,filterByX('categories',filterByX('brands',filterByX('tags',products)))),state.minPrice,state.maxPrice)
        return result;
    }

    const filterPrice = (products,currentMinPrice,currentMaxPrice) =>{
        
        return products.filter((product)=> 
            product.price>=currentMinPrice && product.price<=currentMaxPrice
        )
    }

    const filterSearch = (search,products) => {
        if(search===''){
            return products;
        }
        return products.filter((product)=>
            (product.title.toLowerCase().includes(search.toLowerCase())
            ||
            product.description.toLowerCase().includes(search.toLowerCase))?true:false
        )
    }

    const filterByX = (type,products) => {
        let filterList = state[type]
        if(filterList.length ===0){
            return products;
        }
        return products.filter((product)=>{
            for(var itemFilter of filterList){
                if(product[type].includes(itemFilter) && itemFilter !== ''){
                    return true;
                }
            }
            return false;
        })
    }

    return (
        <div className="mainContainer">
            <div className="productsPaper"> 
                <Row className='productRow'>
                    {currentProducts.map((product)=><ProductCard product={product} key={product.id}></ProductCard>)}
                </Row>
            </div>
        </div>
    )
}

export default ProductsContainer
