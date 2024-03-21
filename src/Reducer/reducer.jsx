
const initialState = {
    Count:0,
};

function reducer(state,action){

    switch(action.type){
        case "Incr":
            return{Count: state.Count + 1};
        case "Decr": 
            return{Count: state.Count -1};
        case "Reset":
            return{Count:0};
    }
}

export{
    initialState,
    reducer

};