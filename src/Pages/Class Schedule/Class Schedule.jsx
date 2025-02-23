import React, { useState } from 'react';
import './Class Schedule.css';

function ClassSchedule() {
  const [schedule, setSchedule] = useState([
    {
      day: 'Monday',
      slots: [
        { time: '09:00 - 10:15 AM', subject: 'Problem Solving & Programming Fundamentals', teacher: 'Sir Twaha Minai', classColor: 'yellow-cell' },
        { time: '10:25 - 11:40 AM', subject: 'Web Technologies', teacher: 'Dr. Khubaib Ahmed', classColor: 'blue-cell' },
        { time: '11:50 - 01:20 PM', subject: 'Discrete Structures', teacher: 'Dr. Shehzad', classColor: 'purple-cell' },
        { time: '01:20 - 01:45 PM', subject: 'NAMAZ BREAK', classColor: 'green-cell' },
        { time: '01:45 - 03:00 PM', subject: 'Design Thinking', teacher: 'Dr. Rauf Malik & Dr. Javaid Ghani', classColor: 'orange-cell' }
      ]
    },
    {
      day: 'Tuesday',
      slots: []
    },
    {
      day: 'Wednesday',
      slots: []
    },
    {
      day: 'Thursday',
      slots: []
    },
    {
      day: 'Friday',
      slots: []
    }
  ]);

  const addSlot = (dayIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].slots.push({ time: '', subject: '', teacher: '', classColor: '' });
    setSchedule(updatedSchedule);
  };

  const updateSlot = (dayIndex, slotIndex, field, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].slots[slotIndex][field] = value;
    setSchedule(updatedSchedule);
  };

  const deleteSlot = (dayIndex, slotIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].slots.splice(slotIndex, 1);
    setSchedule(updatedSchedule);
  };

  return (
    <div className='timetable'>
      <h1 className='heading'>CLASS SCHEDULE (BSCS SEM 01)</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>09:00 - 10:15 AM</th>
            <th>10:25 - 11:40 AM</th>
            <th>11:50 - 01:20 PM</th>
            <th>01:20 - 01:45 PM</th>
            <th>01:45 - 03:00 PM</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td className="days">{day.day}</td>
              {day.slots.map((slot, slotIndex) => (
                <td key={slotIndex} className={slot.classColor}>
                  <input type="text" value={slot.subject} onChange={(e) => updateSlot(dayIndex, slotIndex, 'subject', e.target.value)} placeholder="Subject" />
                  <br />
                  <input type="text" value={slot.teacher} onChange={(e) => updateSlot(dayIndex, slotIndex, 'teacher', e.target.value)} placeholder="Teacher" />
                  <br />
                  <input type="text" value={slot.time} onChange={(e) => updateSlot(dayIndex, slotIndex, 'time', e.target.value)} placeholder="Time" />
                  <br />
                  <button onClick={() => deleteSlot(dayIndex, slotIndex)}>Delete</button>
                </td>
              ))}
              <td>
                <button onClick={() => addSlot(dayIndex)}>Add Slot</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassSchedule;
