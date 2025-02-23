import React, { useState, useEffect } from 'react';
import './AnnouncementCreate.css';

const AnnouncementCreatePage = ({ onClose, onCreate, announcement }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [creatorName, setCreatorName] = useState('');

  useEffect(() => {
    if (announcement) {
      setTitle(announcement.title);
      setMessage(announcement.content);
      setCreatorName(announcement.author || ''); // Pre-fill creator name if available
    }
  }, [announcement]);

  const handleFileUpload = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !message.trim() || !creatorName.trim()) {
      alert('Title, message, and creator name are required!');
      return;
    }

    const newAnnouncement = {
      id: announcement ? announcement.id : null,
      title,
      content: message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      author: creatorName,
      files, // Attach the uploaded files
    };

    onCreate(newAnnouncement);

    setTitle('');
    setMessage('');
    setFiles([]);
    setCreatorName('');
  };

  return (
    <div className="create-announcement">
      <div className="announcement-card">
        <h1 className="announcement-title">
          {announcement ? 'Edit Announcement 📢' : 'Create Announcement 📢'}
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

          <input
            type="text"
            placeholder="Creator Name..."
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            className="form-input"
          />

          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="form-file-input"
          />

          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              {announcement ? 'Update Announcement' : 'Create Announcement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementCreatePage;