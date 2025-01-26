import React, { useState } from 'react';
import './AnnouncementCreate.css';

const AnnouncementCreatePage = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      alert('Both title and message are required!');
      return;
    }

    // Pass the new announcement data to the parent
    onCreate({
      title,
      content: message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      author: 'Admin',
    });

    // Clear the form
    setTitle('');
    setMessage('');
  };

  return (
    <div className="create-announcement">
      <div className="announcement-card">
        <h1 className="announcement-title">
          Create Announcements 📢
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />

          <textarea
            placeholder="Say something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-textarea"
          />

          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementCreatePage;
