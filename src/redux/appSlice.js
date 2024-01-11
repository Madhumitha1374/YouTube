import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
        isNightMode :true,
        isMainPage : false,
    },
    reducers : {
        togglemenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        removeSidebar : (state) => {
            state.isMenuOpen = false;
        },
        toggleMode : (state) => {
            state.isNightMode = !state.isNightMode
        },
        changeIsMainPage : (state,action) => {
            state.isMainPage = action.payload
        }
    }
})

export const{togglemenu, removeSidebar, toggleMode,changeIsMainPage} = appSlice.actions
export default appSlice.reducer