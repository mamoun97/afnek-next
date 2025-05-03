import { PayloadAction, createSlice } from "@reduxjs/toolkit";




const initialState: Filter = {
  limit: 5,
  page: 1,
  address: "",
  date_start: null,
  date_end: null,
  adult: 2,
  children: 0,
  room: 1,

  min_price: 4780,
  max_price: 21145,
  name:""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Partial<Filter>>) => {
      // Use Object.assign to merge new filter values with the current state
      Object.assign(state, action.payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
