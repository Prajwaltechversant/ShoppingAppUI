import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";




export const productSlice = createSlice({

    name: 'products',
    initialState: {
        allProducts: [],
        searchItems: [],
    },

    reducers: {
        addProduct: (state, action) => {
            // return ({...state, allProducts:action.payload})
            // state.allProducts =action.payload
            state.allProducts.push(action.payload)
            // console.log(state)
        },

        deleteProduct: (state, action) => {

            // const {title} = action.payload;
            state.allProducts = state.allProducts.filter(item => item.title !== action.payload)

        },

        searchProduct: (state, action) => {
            if (!action.payload.trim()) {
                state.searchItems = []
            }
            else {
                state.searchItems = state.allProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
            }
        },
        filterByPrice: (state, action) => {
            // console.log(action.payload, 'aaaaa')
            const { p1, p2 } = action.payload
            // console.log(state.allProducts.price, "aaa")
            if (p1 && !p2) {
                state.searchItems = state.allProducts.filter(item => Number(item.price) <= p1)
                // console.log(state.searchItems,'state')
            }
            else if (p1 && p2) {
                console.log("2nd condition is working")
                state.searchItems = state.allProducts.filter(item => Number(item.price) >= p1 && Number(item.price) <= p2)
            }
            else if (p2 && !p1) {
                console.log(p1)
                state.searchItems = state.allProducts.filter(item => Number(item.price) >= p2)
            }
            // console.log(state.searchItems,'searching.....')

        },

        filterByBrand: (state, action) => {
            console.log(action.payload, "action.payload")
            const  brand  = action.payload
            console.log(brand,'bjkgjkgb')
            state.searchItems = state.allProducts.filter(item => item.brand === brand)
            console.log(state.searchItems,'searching.....')
        },
        filterBySize: (state, action) => {
            const size  = action.payload
            state.searchItems = state.allProducts.filter(item => item.size === size)
        },
        filterByColor: (state, action) => {
            const  color  = action.payload
            state.searchItems = state.allProducts.filter(item => item.color === color)
        }
    }

})

export const { addProduct, deleteProduct, searchProduct, filterByPrice, filterByBrand, filterBySize, filterByColor } = productSlice.actions
export default productSlice.reducer