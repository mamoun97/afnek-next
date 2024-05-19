import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadData, saveData } from "./localStorage";


type FilterS = Filter | null

const initialState: FilterS = loadData("filter") ?? {
  limit: 5,
  page: 1,
  address: "",
  date_start: null,
  date_end: null,
  adult: 2,
  children: 0,
  room: 1,
  min_price: 4780,
  max_price: 21145
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state: FilterS, action: PayloadAction<FilterS>) => {
      state = action.payload;
      saveData("filter", action.payload)
      return state
    },
  },

});



export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;