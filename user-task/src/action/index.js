export const incNumber = ()=>{
    return{
        type: "increment"
    }
}
export const deccNumber = ()=>{
    return{
        type: "decrement"
    }
}
export const numberBadha = (num)=>{
    return{
        type: "numberBadha",
        payload: num
    }
}