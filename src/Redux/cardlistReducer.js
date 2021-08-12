import { createSlice } from '@reduxjs/toolkit'

const CardListReducer = createSlice({
    name: "cardlist",
    initialState: [],
    reducers: {
        addCardList: (state, action) => {
            state.push(action.payload)
        }
        ,
        increaseConut: (state, action) => {
            state[action.payload].count++
        }
    }
})

export const { addCardList, increaseConut } = CardListReducer.actions

export default CardListReducer.reducer