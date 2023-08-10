import { createSlice } from '@reduxjs/toolkit'
import { Iproduct, addProduct, deleteProduct, getAllproduct, updateProduct } from '../action/Product'


const initialState = {
    products: []
}
const prodcutSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllproduct.fulfilled, (state: any, action) => {
            state.products = action.payload
        })

        builder.addCase(addProduct.fulfilled, (state: any, action) => {
            state.products.push(action.payload)
        })

        builder.addCase(deleteProduct.fulfilled, (state: any, action) => {
            const id: any = action.payload
            state.products = state.products.filter((item: any) => item.id != id)
        })

        builder.addCase(updateProduct.fulfilled, (state: any, action) => {
            const product: any = action.payload
            state.products = state.products.map((item: any) => item.id == product.id ? product : item)
        })
    }
})

export const productReducer = prodcutSlice.reducer