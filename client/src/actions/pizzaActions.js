import React from "react"
import axios from "axios"
export const getAllPizzas=() => async dispatch =>
{
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try {
        const response=await axios.get('http://localhost:5000/getpizzas')
        console.log(response)
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
    } catch(error) {
        console.log("Error")
        console.log({error})
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}