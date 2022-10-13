import { createSlice } from "@reduxjs/toolkit";
import addHours from "date-fns/addHours";

const tempEvent = {
  _id: new Date().getTime(),
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
    onSetActiveEvent : ( state, { payload }) => {
      state.activeEvent = payload;
    }
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
