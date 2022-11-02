export const sendData = (item) =>{
    console.log(item)
    return{
        type:"SEND_DATA",
        payload: item,
    }
}