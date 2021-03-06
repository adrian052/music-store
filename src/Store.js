import React, {createContext,useReducer} from 'react'
import Reducer from './Reducer'

const initialState = {
    categories: [],
    brands: [],
    tags:[],
    search: '',
    minPrice: 0,
    maxPrice: 10000000
}


function Store({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider  value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store
