import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
    name : "subscribe",
    initialState : {
        subscribersList : []
    },
    reducers : {
        addSubscriber : (state, action) => {
            state.subscribersList.push(action.payload)
        }
    }
})

export const {addSubscriber} = subscribeSlice.actions

export default subscribeSlice.reducer