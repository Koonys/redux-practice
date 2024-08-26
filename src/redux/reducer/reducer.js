
let initialState  = {
    count:0
}
function reducer(state=initialState,action){
    console.log(action)
    if(action.type==='INCREMENT'){
        return{...state,count: state.count+action.payload.num}
    }else if(action.type==='LOGIN'){
        return {...state,id: action.payload.id, pw: action.payload.pw}
    }else if(action.type==='DECREMENT'){
        return {...state,count: state.count-action.payload.num}
    }
    return {...state}
}

export default reducer;