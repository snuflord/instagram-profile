const globalReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USER':
            return {
                ...state,
                images: action.payload,
            }
    }
}
export default globalReducer