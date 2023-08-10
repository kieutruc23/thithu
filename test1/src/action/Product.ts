import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../api/instance";


export const getAllproduct = createAsyncThunk("product/getallproduct", async () => {
    const data = await instance.get(`/products`)
    return data
})

export const deleteProduct = createAsyncThunk("product/deleteproduct", async (id: any) => {
    try {
        await instance.delete(`/products/${id}`)
        return id
    } catch (error) {

    }

})

export const addProduct = createAsyncThunk("product/addproduct", async (product: any) => {
    const data = await instance.post(`/products`, product)
    return data
})

export const updateProduct = createAsyncThunk("product/updateproduct", async (product: any) => {
    const data = await instance.put(`/products/${product.id}`, product)
    return data
})