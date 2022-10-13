import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiveEvent,
  onAddNewEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch( onSetActiveEvent(calendarEvent) );
  };

  const startSavingEvent = async (calendarEvent) => {
      console.log("llegó aca 1");
    //TODO: llegar al backend
    if (calendarEvent._id) {
        console.log("llegó aca 2");
      //Caso Actualizar o modificar
    } else {
        console.log("llegó aca 3");
      //Caso crear nuevo evento
     dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
    }
  };

  return {
    //Properties
    activeEvent,
    events,

    //Métodos
    setActiveEvent,
    startSavingEvent,
  };
};
