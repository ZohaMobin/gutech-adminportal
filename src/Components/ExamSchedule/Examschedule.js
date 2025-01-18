import React, { useState } from "react";

const ExamSchedule = () => {
  const [selectedMonth, setSelectedMonth] = useState("September");
  const [schedulesByMonth, setSchedulesByMonth] = useState({
    September: [
      {
        day: "Monday",
        date: "4th September",
        slots: [
          { time: "09:00 AM - 11:00 AM", subject: "PSPF (Twaha Minai)" },
          { time: "11:30 AM - 1:30 PM", subject: "PSPF (Zoha Mubin)" },
          { time: "01:45 PM - 3:00 PM", subject: "" },
        ],
      },
      {
        day: "Tuesday",
        date: "5th September",
        slots: [
          { time: "09:00 AM - 11:00 AM", subject: "English (Dr. Samra Javed & Mr. Ali Dossa)" },
          { time: "11:30 AM - 1:30 PM", subject: "" },
          { time: "01:45 PM - 3:00 PM", subject: "" },
        ],
      },
    ],
  });

  const [newDay, setNewDay] = useState("");
  const [newDate, setNewDate] = useState("");

  const schedule = schedulesByMonth[selectedMonth] || [];

  // Update a specific slot's subject
  const updateSubject = (dayIndex, slotIndex, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].slots[slotIndex].subject = value;
    setSchedulesByMonth({
      ...schedulesByMonth,
      [selectedMonth]: updatedSchedule,
    });
  };

  // Add a new day
  const addNewDay = () => {
    if (!newDay || !newDate) return alert("Please fill in both Day and Date.");
    const updatedSchedule = [
      ...schedule,
      { day: newDay, date: newDate, slots: [{ time: "09:00 AM - 11:00 AM", subject: "" }, { time: "11:30 AM - 1:30 PM", subject: "" }, { time: "01:45 PM - 3:00 PM", subject: "" }] },
    ];
    setSchedulesByMonth({
      ...schedulesByMonth,
      [selectedMonth]: updatedSchedule,
    });
    setNewDay("");
    setNewDate("");
  };

  return (
    <div className="exam-schedule">
      {/* Header Section */}
      <div className="header">
        <h1>Exam Schedule</h1>
        <h2>MIDS Exam</h2>
        <div className="month-display">
          <span>{selectedMonth}</span>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="schedule-table">
        <div className="time-row">
          <div className="day-cell">Days</div>
          <div className="time-cell">09:00 AM - 11:00 AM</div>
          <div className="time-cell">11:30 AM - 1:30 PM</div>
          <div className="time-cell">01:45 PM - 3:00 PM</div>
        </div>

        {schedule.map((day, dayIndex) => (
          <div className="day-row" key={dayIndex}>
            <div className="day-cell">
              {day.day}
              <br />
              <span className="day-date">{day.date}</span>
            </div>
            {day.slots.map((slot, slotIndex) => (
              <div className={`slot-cell ${slot.subject ? "filled" : ""}`} key={slotIndex}>
                <div className="slot-time">{slot.time}</div>
                <input
                  type="text"
                  placeholder="Enter subject"
                  value={slot.subject}
                  onChange={(e) => updateSubject(dayIndex, slotIndex, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Add New Day */}
      <div className="add-day-form">
        <h3>Add a New Day</h3>
        <input
          type="text"
          placeholder="Day (e.g., Monday)"
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date (e.g., 4th September)"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button onClick={addNewDay}>Add Day</button>
      </div>
    </div>
  );
};

export default ExamSchedule;
