// import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// export const addUserSlice = createSlice({
//   name: 'addUser',
//   initialState: {
//     userData: [],
//   } ,
//   reducers: {
//     signupUser: (state, action) => {
//       state.userData.push(action.payload);
//     },
//   },
// });

// export default addUserSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

export const addUserSlice = createSlice({
    name:'addUser',
    initialState:{
        userData:[]
    },
    reducers:{
        signupUser:(state, action)=>{
            console.log("adduser slice-----", action.payload) 
            // return({...state, userData:action.payload})
            state.userData.push(action.payload)
            console.log(state)

        },
        signInUser:(state, action)=>{
            const {username, password} = action.payload
            return state.userData.filter(item=>item.username===username && item.password ===password)
        },
        updateData:(state, action)=>{
            const user = state.filter(item=>{item.username})
            // return({...state, })
            if(user){
                return({...state, userData:action.payload})
            }else{
                return "Not Found"
            }
        }

    }
})

export const { signupUser, signInUser } = addUserSlice.actions; 
export default addUserSlice.reducer

