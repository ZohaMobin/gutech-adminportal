import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './Attendance.css';

const StatusPage = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [programQuery, setProgramQuery] = useState('');
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      name: 'Shamraiz',
      rollNumber: 'BSCS-F20-123',
      semester: 'SE-25',
      date: 'January 29, 2025',
      classes: [
        { name: 'Discrete Structures', status: 'present', time: '08:30 AM' },
        { name: 'PSPF', status: 'late', time: '10:00 AM' },
        { name: 'Web Tech', status: 'bunking', time: '11:30 AM' },
        { name: 'Web Tech Lab', status: 'present', time: '02:00 PM' },
        { name: 'Functional English', status: 'present', time: '03:30 PM' }
      ],
      overallAttendance: 85
    },
    {
      id: 2,
      name: 'Khan',
      rollNumber: 'BSCS-F20-124',
      semester: 'SE-25',
      date: 'January 29, 2025',
      classes: [
        { name: 'Discrete Structures', status: 'present', time: '08:30 AM' },
        { name: 'PSPF', status: 'present', time: '10:00 AM' },
        { name: 'Web Tech', status: 'late', time: '11:30 AM' },
        { name: 'Web Tech Lab', status: 'present', time: '02:00 PM' },
        { name: 'Functional English', status: 'present', time: '03:30 PM' }
      ],
      overallAttendance: 92
    }
    
  ]);

  const AttendanceRing = ({ percentage }) => {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="attendance-ring">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle
            className="ring-background"
            cx="30"
            cy="30"
            r={radius}
          />
          <circle
            className="ring-progress"
            cx="30"
            cy="30"
            r={radius}
            strokeDasharray={strokeDasharray}
          />
        </svg>
        <div className="ring-text">{percentage}%</div>
      </div>
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'present':
        return 'status-present';
      case 'absent':
        return 'status-absent';
      case 'late':
        return 'status-late';
      case 'bunking':
        return 'status-bunking';
      default:
        return '';
    }
  };

  const filteredStudents = studentData.filter(student =>
    (student.name.toLowerCase().includes(nameQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(nameQuery.toLowerCase())) &&
    student.rollNumber.toLowerCase().includes(programQuery.toLowerCase())
  );

  return (
    <div className="status-container">
      <div className="status-header">
        <div className="header-content">
          <h1>Daily Attendance Status</h1>
          <p>Monitor student attendance across all classes</p>
        </div>
        
        <div className="search-filters">
          <div className="search-container">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search by name or roll number"
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="program-search">
            <input
              type="text"
              placeholder="Filter by program"
              value={programQuery}
              onChange={(e) => setProgramQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="status-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Semester</th>
              <th>Date</th>
              <th>Class Attendance</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="name-cell">
                    <span>{student.name}</span>
                  </div>
                </td>
                <td>{student.rollNumber}</td>
                <td>{student.semester}</td>
                <td>{student.date}</td>
                <td>
                  <div className="class-attendance">
                    {student.classes.map((classItem, index) => (
                      <div key={index} className="class-row">
                        <span className="class-name">{classItem.name}</span>
                        <span className={`attendance-badge ${getStatusClass(classItem.status)}`}>
                          {classItem.status.charAt(0).toUpperCase() + classItem.status.slice(1)}
                        </span>
                        <span className="class-time">{classItem.time}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <AttendanceRing percentage={student.overallAttendance} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <select defaultValue={10} className="rows-select">
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={30}>30 rows</option>
        </select>
        <div className="pagination-buttons">
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;