import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Event Calenadar.css';

const localizer = momentLocalizer(moment);

function AdminEventCalendar() {
  const [myEvents, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    color: '#991D20',
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEventAdd = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert('Please fill in all fields');
      return;
    }

    const eventToAdd = {
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      color: newEvent.color,
    };

    setEvents([...myEvents, eventToAdd]);
    setModalOpen(false);
    setNewEvent({ title: '', start: '', end: '', color: '#991D20' });
  };

  return (
    <div className="admin-calendar-container">
      <h2 className="calendar-heading">Event Calendar</h2>

      <button className="add-event-button" onClick={() => setModalOpen(true)}>
        Add Event
      </button>

      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={['month', 'week', 'day']}
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            color: 'white',
            borderRadius: '5px',
            padding: '5px',
          },
        })}
      />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Event</h3>
            <label>
              Title:
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </label>
            <label>
              Start:
              <input
                type="datetime-local"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
            </label>
            <label>
              End:
              <input
                type="datetime-local"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
            </label>
            <label>
              Event Color:
              <input
                type="color"
                value={newEvent.color}
                onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
              />
            </label>
            <div className="modal-actions">
              <button className="save-button" onClick={handleEventAdd}>
                Save
              </button>
              <button className="cancel-button" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminEventCalendar;