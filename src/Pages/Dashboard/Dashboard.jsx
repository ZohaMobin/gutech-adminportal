import React from "react";
import './Dashboard.css';
import Announcements from "./Components/Announcements/Announcements";
import Student_Chats from "./Components/Student Chats/Student_Chats";
import Upcoming_Lessons from "./Components/Upcoming Lessons/Upcoming_Lessons";
import Statistics from "./Components/Statistics/Statistics";


function Dashboard () {
    return (
        <div className="components-div">
            <Statistics/>
            <div className="upcomingLessons-studentChats">
                <span style={{transformOrigin: "top left", transform: "scale(1.21)", marginRight: 120}}> <Upcoming_Lessons /> </span>
                <Student_Chats />
            </div>
            
            <Announcements />
        </div>
    );
}

export default Dashboard;