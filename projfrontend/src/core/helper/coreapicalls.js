import React from 'react'
import { API } from '../../backend'

const getProducts = () => {
    return fetch(`${API}/products`, {method:"GET"})
    .then(res =>{
            return res.json()
    })
    .catch(err => console.log(err))
}

export default getProducts


