import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Examschedule.css';

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

  const [newDate, setNewDate] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [examTitle, setExamTitle] = useState("Midterm Exam");

  const schedule = schedulesByMonth[selectedMonth] || [];

  // Helper function to get the day name
  const getDayName = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  };

  // Helper function to format the date
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-GB", options);
  };

  // Add a new day with selected date
  const addNewDay = () => {
    if (!newDate) return alert("Please select a date.");
    const dayName = getDayName(newDate);
    const formattedDate = formatDate(newDate);

    const updatedSchedule = [
      ...schedule,
      {
        day: dayName,
        date: formattedDate,
        slots: [
          { time: "09:00 AM - 11:00 AM", subject: "" },
          { time: "11:30 AM - 1:30 PM", subject: "" },
          { time: "01:45 PM - 3:00 PM", subject: "" },
        ],
      },
    ];

    setSchedulesByMonth({
      ...schedulesByMonth,
      [selectedMonth]: updatedSchedule,
    });

    setNewDate(null); // Reset date picker
  };

  // Delete a day
  const deleteDay = (dayIndex) => {
    const updatedSchedule = schedule.filter((_, index) => index !== dayIndex);
    setSchedulesByMonth({
      ...schedulesByMonth,
      [selectedMonth]: updatedSchedule,
    });
  };

  // Publish schedule
  const handlePublish = () => {
    setIsPublished(true);
  };

  // Edit schedule
  const handleEdit = () => {
    setIsPublished(false);
  };

  if (isPublished) {
    return (
      <div className="exam-schedule published">
        <div className="header">
          <h1>Exam Schedule</h1>
          <h2>{examTitle}</h2>
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="schedule-table">
          {schedule.map((day, dayIndex) => (
            <div className="day-row" key={dayIndex}>
              <div className="day-cell">
                {day.day}
                <br />
                <span className="day-date">{day.date}</span>
              </div>
              {day.slots.map((slot, slotIndex) => (
                <div className={`slot-cell ${slot.subject ? "filled" : ""}`} key={slotIndex}>
                  <div className="slot-content">
                    <div className="slot-time">{slot.time}</div>
                    {slot.subject && <div className="slot-subject">{slot.subject}</div>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="exam-schedule">
      <div className="header">
        <h1>Exam Schedule</h1>
        <input
          type="text"
          className="exam-title-input"
          value={examTitle}
          onChange={(e) => setExamTitle(e.target.value)}
          placeholder="Enter exam title"
        />
        <button className="publish-button" onClick={handlePublish}>
          Publish
        </button>
      </div>
      <div className="schedule-table">
        {schedule.map((day, dayIndex) => (
          <div className="day-row" key={dayIndex}>
            <div className="day-cell">
              {day.day}
              <br />
              <span className="day-date">{day.date}</span>
              <button className="delete-button" onClick={() => deleteDay(dayIndex)}>
                Delete
              </button>
            </div>
            {day.slots.map((slot, slotIndex) => (
              <div className={`slot-cell ${slot.subject ? "filled" : ""}`} key={slotIndex}>
                <input
                  type="text"
                  className="slot-time"
                  placeholder="Enter time"
                  value={slot.time}
                  onChange={(e) => {
                    const updatedSchedule = [...schedule];
                    updatedSchedule[dayIndex].slots[slotIndex].time = e.target.value;
                    setSchedulesByMonth({ ...schedulesByMonth, [selectedMonth]: updatedSchedule });
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter subject"
                  value={slot.subject}
                  onChange={(e) => {
                    const updatedSchedule = [...schedule];
                    updatedSchedule[dayIndex].slots[slotIndex].subject = e.target.value;
                    setSchedulesByMonth({ ...schedulesByMonth, [selectedMonth]: updatedSchedule });
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="add-day-form">
        <h3>Add a New Day</h3>
        <DatePicker
          selected={newDate}
          onChange={(date) => setNewDate(date)}
          placeholderText="Select a date"
          className="date-picker"
        />
        <button onClick={addNewDay}>Add Day</button>
      </div>
    </div>
  );
};

export default ExamSchedule;
