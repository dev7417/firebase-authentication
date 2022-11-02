const initialState = {
    data:[]
}

export const dataReducer = (state= initialState, action )=>{
    switch(action.type){
        case "SEND_DATA":
            return {
                data: action.payload
            }
            default: return state;
    }

}