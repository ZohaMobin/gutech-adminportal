import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Event Calenadar.css'; // Importing the CSS file

const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [myEvents, setEvents] = useState([]);  // State for events
  const [isToastOpen, setToastOpen] = useState(false);  // State for toast visibility
  const [toastText, setToastText] = useState('');  // State for the toast message

  const handleToastClose = useCallback(() => {
    setToastOpen(false);  // Close the toast when invoked
  }, []);

  const handleEventClick = useCallback((event) => {
    setToastText(event.title);  // Set the toast message to the event title
    setToastOpen(true);         // Open the toast
  }, []);

  // Fetch events for the calendar (could be from an API, or hardcoded events)
  useEffect(() => {
    const fetchedEvents = [
      {
        title: 'Sample Event 1',
        start: new Date(2025, 0, 15, 10, 0), // January 15, 2025, 10:00 AM
        end: new Date(2025, 0, 15, 11, 0),   // January 15, 2025, 11:00 AM
      },
      {
        title: 'Sample Event 2',
        start: new Date(2025, 0, 16, 12, 0), // January 16, 2025, 12:00 PM
        end: new Date(2025, 0, 16, 13, 0),   // January 16, 2025, 1:00 PM
      },
    ];

    // Set fetched events to state
    setEvents(fetchedEvents);
  }, []);

  return (
    <div>
      <h2 className="calendar-heading">GU TECH EVENT CALENDAR</h2>

      <Calendar
        localizer={localizer}
        events={myEvents}        // The event data
        startAccessor="start"    // Start date of the event
        endAccessor="end"        // End date of the event
        style={{ height: 500 }}   // Calendar height
        onSelectEvent={handleEventClick}  // Event click handler
        views={['month', 'week', 'day']}  // Views available (month, week, day)
      />

      {/* Toast Message (Simple Alert for now) */}
      {isToastOpen && (
        <div className="toast">
          <p>{toastText}</p>
          <button onClick={handleToastClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CalendarComponent;
