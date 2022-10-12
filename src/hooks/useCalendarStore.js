import { useDispatch, useSelector } from "react-redux";
import { onLoadEvents } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );

    // const loadEvents = () => {
    //     dispatch( onLoadEvents() );
    // }


    return {
        //Properties
        activeEvent,
        events,

        //Métodos
        // loadEvents,
    }
}