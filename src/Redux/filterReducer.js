import { createSlice } from '@reduxjs/toolkit'

const initial = {
    price: "lowest",
    size: "ALL"
}

const FilterReducer = createSlice({
    name: "filter",
    initialState: initial,
    reducers: {
        Add: (state, action) => {
            state = { ...action.payload }
        }
    }
})

export const { Add } = FilterReducer.actions
export default FilterReducer.reducer