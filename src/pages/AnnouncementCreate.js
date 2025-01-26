import React from 'react';
import { useState } from 'react';
import './AnnouncementCreate.css';

const AnnouncementCreatePage = ({ onClose }) => { // Accept onClose as a prop
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [audience, setAudience] = useState({
        all: false,
        teachers: false,
        students: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, message, audience });
    };

    return (
        <div className="create-announcement">
            <div className="announcement-card">
                <h1 className="announcement-title">
                    Create Announcements 
                    <span role="img" aria-label="announcement">📢</span>
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

                    <div className="action-buttons">
                        <button type="button" className="action-button">
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </button>
                        <button type="button" className="action-button">
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </button>
                        <button type="button" className="action-button">
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                    </div>

                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input 
                                type="checkbox"
                                checked={audience.all}
                                onChange={(e) => setAudience({...audience, all: e.target.checked})}
                                className="checkbox-input"
                            />
                            <span>All</span>
                        </label>
                        <label className="checkbox-label">
                            <input 
                                type="checkbox"
                                checked={audience.teachers}
                                onChange={(e) => setAudience({...audience, teachers: e.target.checked})}
                                className="checkbox-input"
                            />
                            <span>Teachers</span>
                        </label>
                        <label className="checkbox-label">
                            <input 
                                type="checkbox"
                                checked={audience.students}
                                onChange={(e) => setAudience({...audience, students: e.target.checked})}
                                className="checkbox-input"
                            />
                            <span>Students</span>
                        </label>
                    </div>

                    <div className="form-buttons">
                        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button> {/* Call onClose on cancel */}
                        <button type="submit" className="submit-button">Create Announcement</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AnnouncementCreatePage;