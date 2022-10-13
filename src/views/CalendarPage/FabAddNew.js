import React from 'react';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';
import addHours from 'date-fns/addHours';

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            // _id: new Date().getTime(),
            title: "",
            notes: "",
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: "#fafafa",
          });
        openDateModal();
    }

  return (
    <button className="btn btn-primary fab" onClick={ handleClickNew }>
        <i className="fas fa-plus"></i>
    </button>
  )
}
