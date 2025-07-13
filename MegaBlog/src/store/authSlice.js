import { createSlice } from "@reduxjs/toolkit";
// this is to track the authentication

const intialState = {
  status: false,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  intialState,
  reducers:{
    login:(state,action)=>{
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout:(state)=>{
      state.status = false;
      state.userData = null;
    }
  }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;
