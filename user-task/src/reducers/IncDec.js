const initialState = {count: 0, number: 1};
const changeTheNumber = (state = initialState, action)=>{
    switch(action.type){
        case 'increment':
            return {...state, count: parseInt(state.count) + parseInt(state.number)}
        case 'decrement':
            return {...state, count: +state.count - state.number}
        case 'numberBadha':
            return {...state, number: action.payload}
        default:
            return state
    }
}

export default changeTheNumber;