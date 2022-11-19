import React, {useState, useEffect} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { parse, startOfWeek, getDay, format } from "date-fns";
import { getMessagesES } from "./getMessages";
import esEs from "date-fns/locale/es";

import { CalendarModal } from "./CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useStockStore } from "../../hooks/useStockStore";

import { FabAddNew } from "./FabAddNew";
import { FabDelete } from "./FabDelete";

const locales = {
  es: esEs,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


function CalendarPage() {

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
  const { stock, changeStockEvent } = useStockStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  useEffect(() => {
    console.log("Juegos=>",stock);
  }, [])
  

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  const onDoubleClick = (event) => {
    // console.log({ doubleClick: event });
    openDateModal();
    changeStockEvent();
  };

  const onSelect = (event) => {
    // console.log({ click: event });
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    // console.log({ viewChanged: event });
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  return (
    <>
    <Calendar
      culture="es"
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      style={{ height: "calc( 100vh - 80px )" }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />

    <CalendarModal/>

    <FabAddNew />

    <FabDelete />
    </>
  );
}

export default CalendarPage;
