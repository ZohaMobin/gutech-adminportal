import React, { useState } from 'react';
import { Search, Plus, Bell } from 'lucide-react';
import Modal from './Modal';
import AnnouncementCreatePage from './AnnouncementCreate';
import './Announcement.css';

const AnnouncementsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]); // Initialize as empty array

  // Function to handle adding a new announcement
  const addAnnouncement = (newAnnouncement) => {
    setAnnouncements([
      ...announcements,
      { id: announcements.length + 1, ...newAnnouncement },
    ]);
    setIsModalOpen(false); // Close modal after adding
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-orange-500">Announcements</h1>
            <Bell className="w-8 h-8 text-gray-400" />
          </div>

          {/* Filter and Search Section */}
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md bg-gray-200"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-md"
              onClick={openModal}
            >
              <Plus className="w-5 h-5" />
              <span>Announcements</span>
            </button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements to display.</p>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement.id} className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{announcement.title}</h2>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
                <p className="text-gray-600 mb-4">{announcement.content}</p>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{announcement.author || 'Admin'}</span>
                  <span className="text-gray-500">
                    {announcement.date || 'Today'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for Create Announcement */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AnnouncementCreatePage
          onClose={closeModal}
          onCreate={addAnnouncement} // Pass the addAnnouncement function
        />
      </Modal>
    </div>
  );
};

export default AnnouncementsPage;

