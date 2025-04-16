let initialState={
    count:0
}

const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1}
        case 'decrement':
            return {...state,count:state.count-1}
        default:
            return state;
    }
}

export default CounterReducer;