import React, {useState,useContext,useEffect} from 'react'
import './style.css'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import products from '../../../data/store.json'
import { Context } from '../../../Store'


function ProductsContainer() {
    const allProductList = products.data;
    const [currentProducts,setCurrentProducts] = useState([]);
    const [state,dispatch] = useContext(Context)


    useEffect(() => {
        setCurrentProducts(filterAll(allProductList))
    }, [state.categories,state.brands,state.tags])
    

    

    const filterByCategory = (categoryList, products) =>{
        if(categoryList.length===0){
            return products;
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
            return products;
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

    const filterByTag = (tagList, products) =>{
        if(tagList.length === 0){
            return products
        }
        return products.filter((product)=>{
            for(var tag of tagList){
                if(product.tags.includes(tag) && tag !== ''){
                    return true;
                }
            }
            return false;
        })
    }
   
    const filterAll = (products) => {
        const result = filterByCategory(state.categories,filterByBrand(state.brands,filterByTag(state.tags,products)))
        return Array.from(result);
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
