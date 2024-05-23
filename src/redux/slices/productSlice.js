import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Alert } from "react-native";



export const productSlice = createSlice({

    name: 'products',
    initialState: {
        allProducts: [],
        searchItems: [],
        filterItems: []
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
            let itemsToFilter = state.filterItems?.length > 0 ? state.filterItems : state.allProducts;
            const query = action.payload?.toLowerCase(); 
            console.log("Query", query)
            console.log(itemsToFilter)
            if (!query || query.trim() === '') {
                state.searchItems = [];
            } else {
                state.searchItems = itemsToFilter?.filter(item => item.title.toLowerCase().includes(query));
            }
        },
        
        filterByPrice: (state, action) => {
            console.log("action.payload", action.payload);
            // console.log("all products array", state.allProducts);
            // console.log('Searchitems array', state.searchItems);
            // console.log('filtered items array...',state.filterItems);
            let itemsToFilter = state.filterItems?.length > 0 ? state.filterItems : state.allProducts
            const { p1, p2 } = action.payload
            if (p1 && !p2) {
                state.searchItems = itemsToFilter.filter(item => Number(item.price) <= p1)
                state.filterItems = state.searchItems
                // console.log(state.searchItems,'state')
            }
            else if (p1 && p2) {
                console.log("2nd condition is working")
                state.searchItems = itemsToFilter.filter(item => Number(item.price) >= p1 && Number(item.price) <= p2)
                state.filterItems = state.searchItems

            }
            else if (p2 && !p1) {
                console.log(p1)
                state.searchItems = itemsToFilter.filter(item => Number(item.price) >= p2)
                state.filterItems = state.searchItems

            }
        },

        filterByBrand: (state, action) => {
            // console.log(action.payload, "action.payload")
            const brand = action.payload
            
            // console.log(brand,'bjkgjkgb')
            let itemsToFilter = state.filterItems?.length > 0 ? state.filterItems : state.allProducts

            state.searchItems = itemsToFilter.filter(item => item.brand === brand)
            // console.log(state.searchItems,'searching.....')
            state.filterItems = state.searchItems

        },
        filterBySize: (state, action) => {
            const size = action.payload
            let itemsToFilter = state.filterItems.length > 0 ? state.filterItems : state.allProducts

            state.searchItems = itemsToFilter.filter(item => item.size === size)
            state.filterItems = state.searchItems

        },
        filterByColor: (state, action) => {
            const color = action.payload
            let itemsToFilter = state.filterItems?.length > 0 ? state.filterItems : state.allProducts
            state.searchItems = itemsToFilter.filter(item => item.color === color)
            state.filterItems = state.searchItems
        },

        onRefresh: (state) => {
            state.filterItems = []
            state.searchItems = []
        },
        filterByCategory: (state, action) => {
            const category = action.payload;
            console.log(category, " action payload in filter By category")
            let itemsToFilter = state.filterItems.length > 0 ? state.filterItems : state.allProducts
            if(category==='All Products'){
                state.searchItems = state.allProducts
            }else{
                state.searchItems = itemsToFilter.filter(item => item.category === category)
                state.filterItems = state.searchItems  
            }           
         },
         setFilterItems:(state, action)=>{
            state.filterItems = action.payload
         }
    }

})

export const { addProduct, deleteProduct, setFilterItems, searchProduct,filterByCategory, filterByPrice, filterByBrand, filterBySize, filterByColor, onRefresh } = productSlice.actions
export default productSlice.reducer