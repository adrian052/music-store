import React, {useState,useContext,useEffect} from 'react'
import './style.css'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import products from '../../../data/store.json'
import { Context } from '../../../Store'

function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}

function ProductsContainer() {
    const allProductList = products.data;
    const [currentProducts,setCurrentProducts] = useState([]);
    const [state,dispatch] = useContext(Context)


    useEffect(() => {
        setCurrentProducts(filterByCategory(state.categories,allProductList))
        
        
    }, [state.categories])
    

    

    const filterByCategory = (categoryList, products) =>{
        if(categoryList.length===0){
            return allProductList;
        }
        return products.filter((product)=>{
            for(var category of categoryList){
                if(product.category.includes(category) && category !== ''){
                    return true;
                }
            }
            return false;
        })
    }

    const filterByBrand = (brandList, products) =>{
        if(brandList.length===0){
            return allProductList;
        }
        return products.filter((product)=>{
            for(var brand of brandList){
                if(product.brand.includes(brand) && brand !== ''){
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
                    {currentProducts.map((product)=><ProductCard product={product}></ProductCard>)}
                </Row>
            </div>
        </div>
    )
}

export default ProductsContainer
