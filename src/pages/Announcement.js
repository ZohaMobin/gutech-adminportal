import React, { useState } from 'react';
import { Search, Plus, Bell, Edit, Trash } from 'lucide-react';
import Modal from './Modal';
import AnnouncementCreatePage from './AnnouncementCreate';
import './Announcement.css';

const AnnouncementsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const addAnnouncement = (newAnnouncement) => {
    setAnnouncements([
      ...announcements,
      { id: announcements.length + 1, ...newAnnouncement },
    ]);
    setIsModalOpen(false);
  };

  const editAnnouncement = (updatedAnnouncement) => {
    setAnnouncements(
      announcements.map((ann) =>
        ann.id === updatedAnnouncement.id ? updatedAnnouncement : ann
      )
    );
    setIsEditModalOpen(false);
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== id));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (announcement) => {
    setEditingAnnouncement(announcement);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingAnnouncement(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-orange-500">Announcements</h1>
            <Bell className="w-8 h-8 text-gray-400" />
          </div>
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
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements to display.</p>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement.id} className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{announcement.title}</h2>
                  <div className="flex space-x-2">
                    <button
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => openEditModal(announcement)}
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      className="text-gray-500 hover:text-red-500"
                      onClick={() => deleteAnnouncement(announcement.id)}
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{announcement.content}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-medium">
                    {announcement.author || 'Admin'}
                  </span>
                  <span className="text-gray-500">{announcement.date}</span>
                </div>
                {announcement.files && announcement.files.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Attachments:</h3>
                    {announcement.files.map((file, index) => (
                      <p key={index} className="text-blue-500">
                        {file.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AnnouncementCreatePage
          onClose={closeModal}
          onCreate={addAnnouncement}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <AnnouncementCreatePage
          onClose={closeEditModal}
          onCreate={editAnnouncement}
          announcement={editingAnnouncement}
        />
      </Modal>
    </div>
  );
};

export default AnnouncementsPage;
