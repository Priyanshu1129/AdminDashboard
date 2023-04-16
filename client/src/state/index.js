import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239c72c00017f"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers : {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

// globalSlice object contains properties name, actions (it is object) , reducer (it is one function which return object of all states properties)

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;