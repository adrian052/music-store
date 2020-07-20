const Reducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_CATEGORIES': 
            return {
                ...state,
                categories: action.payload
            }
        case 'CHANGE_BRAND':
            return {
                ...state,
                brand: action.payload
            }
        default:
            return state
    }


}

export default Reducer;