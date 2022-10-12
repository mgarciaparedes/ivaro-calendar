import { createSlice } from "@reduxjs/toolkit";
import addHours from "date-fns/addHours";

const tempEvent = {
  title: "Inflables La Florida",
  notes: "Av. Vicuña Mackenna Poniente",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: { events: [tempEvent], activeEvent: null },
  reducers: {
    increment: (state /*action*/) => {
      state.counter += 1;
    },
    // onLoadEvents: (state) => {
    //   state.events = [tempEvent];
    // },
  },
});

export const { increment } = calendarSlice.actions;
