import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onDeleteActiveEvent
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch( onSetActiveEvent(calendarEvent) );
  };

  const startSavingEvent = async (calendarEvent) => {
    //   console.log("llegó aca 1");
    //TODO: llegar al backend
    if (calendarEvent._id) {
        // console.log("llegó aca 2");
      //Caso Actualizar o modificar
      dispatch( onUpdateEvent({ ...calendarEvent }));
    } else {
        // console.log("llegó aca 3");
      //Caso crear nuevo evento
     dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
    }
  };

  const startDeletingEvent = () => {
    //TODO: llegar al backend
    dispatch( onDeleteEvent() );
  }

  const deleteActiveEvent = () => {
    dispatch( onDeleteActiveEvent() );
  }

  return {
    //Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent, //doble negación -> si es null retorna un false, si es un objeto retorna un true

    //Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    deleteActiveEvent
  };
};
