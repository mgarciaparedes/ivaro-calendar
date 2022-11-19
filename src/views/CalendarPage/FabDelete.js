import React from 'react';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';
import addHours from 'date-fns/addHours';
import { onDeleteEvent } from '../../store/calendar/calendarSlice';

export const FabDelete = () => {
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();
    const { isDateModalOpen } = useUiStore();

    const handleDelete = () => {
      startDeletingEvent();
    }

  return (
    <button className="btn btn-danger fab-danger" style={{ display: hasEventSelected && !isDateModalOpen ? '' : 'none'}} onClick={ handleDelete }>
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
