import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours, parse, startOfWeek, getDay, format } from "date-fns";
import { getMessagesES } from "./getMessages";
import esEs from "date-fns/locale/es";

import { CalendarModal } from "./CalendarModal";

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

const events = [
  {
    title: "Inflables La Florida",
    notes: "Av. Vicuña Mackenna Poniente",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
  },
];

function CalendarPage() {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

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
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
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
    </>
  );
}

export default CalendarPage;
