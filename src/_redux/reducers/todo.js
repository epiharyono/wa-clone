const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false
}

export default function todoReducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_TODOS_PENDING':
            return {...state, isLoading: true}    
        case 'ALL_TODOS_FULFILLED':
            return {...state, isLoading: false, results: action.payload.data}    
        case 'ALL_TODOS_REJECTED':
            return {...state, isLoading: false, isError: true}    
        case 'GET_TODO_PENDING':
            return {...state, isLoading: true}    
        case 'GET_TODO_FULFILLED':
            return {...state, isLoading: false, data: action.payload.data}    
        case 'GET_TODO_REJECTED':
            return {...state, isLoading: false, isError: true}    
        default:
            return state
    }
}