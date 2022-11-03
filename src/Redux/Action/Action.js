export const sendData = (item) =>{
    console.log(item)
    return{
        type:"SEND_DATA",
        payload: item,
    }
}

export const removeUserId = (item) =>{
    return{
        type:"REMOVE_DATA",
        payload: item
    }
}