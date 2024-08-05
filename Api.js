import axios from 'axios'
import React from 'react'

 
const Base_url="http://localhost:3000"
export const GetAllproducts=async()=>{
    const respons=await axios.get(`${Base_url}/ProductData `)
    return respons.data
}

export const GetProductsId=async(id)=>{
    const respons=await axios.get(`${Base_url}/ProductData/${id} `)
    return respons.data
}

export const GetProductsImage=async(id)=>{
    const respons=await axios.get(`${Base_url}/ProductData/${id}/image `)
    return respons.data
}

