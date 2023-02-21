import React from 'react';
import axios from 'axios';

export const getUsersList=() => async dispatch =>
{
    dispatch({type: "GET_USERSLIST_REQUEST"})
    try {
        const response=await axios.get('/api/admin/getUsers')
        console.log(response)
        dispatch({type: "GET_USERSLIST_SUCCESS", payload: response.data})
    } catch(error) {
        console.log(error)
        dispatch({type: "GET_USERSLIST_FAILED", payload: error})
    }
}


export const deleteUsersList=({user}) => async (dispatch, getState) =>
{
    dispatch({type: "DELETE_USERSLIST_REQUEST"})
    try {
        const response=await axios.delete(`/api/admin/deleteUsers/${user._id}`, {user})
        console.log(response)
        dispatch({type: "DELETE_USERSLIST_SUCCESS"})
        window.location.reload();
    } catch(error) {
        console.log(error)
        dispatch({type: "DELETE_USERSLIST_FAILED", payload: error})
    }
}

export const getPizzasList=() => async dispatch =>
{
    dispatch({type: "GET_LIST_REQUEST"})
    try {
        const response=await axios.get('/api/admin/getPizzas')
        console.log(response)
        dispatch({type: "GET_LIST_SUCCESS", payload: response.data})
    } catch(error) {
        console.log(error)
        dispatch({type: "GET_LIST_FAILED", payload: error})
    }
}

export const addPizza=({pizza}) => async dispatch =>
{
    dispatch({type: 'PIZZA_ADD_REQUEST'})

    try {
        console.log(pizza)
        const response=await axios.post('/api/admin/addpizza', pizza)
        console.log(response)
        dispatch({type: 'PIZZA_ADD_SUCCESS'})
    } catch(error) {
        dispatch({type: 'PIZZA_ADD_FAILED', payload: error})
    }
}

export const deletePizza=({pizza}) => async dispatch =>
{
    dispatch({type: 'PIZZA_DELETE_REQUEST'})

    try {
        console.log(pizza._id)
        const response=await axios.delete(`/api/admin/deletepizza/${pizza._id}`, pizza)
        console.log(response)
        dispatch({type: 'PIZZA_DELETE_SUCCESS'})
        window.location.reload();
    } catch(error) {
        dispatch({type: 'PIZZA_DELETE_FAILED', payload: error})
    }
}