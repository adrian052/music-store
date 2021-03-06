const Reducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_CATEGORIES': 
            return {
                ...state,
                categories: action.payload
            }
        case 'CHANGE_BRANDS':
            return {
                ...state,
                brands: action.payload
            }
        case 'CHANGE_TAGS':
            return {
                ...state,
                tags: action.payload
            }
        case 'CHANGE_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'CHANGE_PRICE':
            return {
                ...state,
                minPrice: action.min,
                maxPrice: action.max
            }
        default:
            return state
    }


}

export default Reducer;