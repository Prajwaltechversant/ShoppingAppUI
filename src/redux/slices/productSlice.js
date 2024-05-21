import { createSlice } from "@reduxjs/toolkit";




export const productSlice = createSlice({

    name: 'products',
    initialState: {
        allProducts:[],
        searchItems:[]
    },

    reducers: {
        addProduct: (state, action) => {
            // return ({...state, allProducts:action.payload})
            // state.allProducts =action.payload
            state.allProducts.push(action.payload)
            console.log(state)
        },

        deleteProduct: (state, action) => {

            // const {title} = action.payload;
            state.allProducts =  state.allProducts.filter(item => item.title !== action.payload)

        },

        searchProduct: (state, action) => {
            if (!action.payload.trim()) {
                state.searchItems = []
            }
            else {
                state.searchItems = state.allProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
                
            }
        }
    }

})

export const { addProduct, deleteProduct, searchProduct } = productSlice.actions
export default productSlice.reducer