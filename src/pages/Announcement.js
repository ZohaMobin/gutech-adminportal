import React from 'react';
import { Search, Plus, Bell } from 'lucide-react';

const AnnouncementsPage = () => {
  const announcements = [
    { id: 1, title: 'EVENT LLC', content: 'We are seeking a results-driven Product Manager...', author: 'Sir Aleem', date: 'Jan 11', time: '12pm-6pm' },
    { id: 2, title: 'Quiz Tomorrow', content: 'We are seeking a results-driven Product Manager...', author: 'Sir Twaha', date: 'Jan 11', time: '12pm-6pm' },
    { id: 3, title: 'EVENT LLC', content: 'We are seeking a results-driven Product Manager...', author: 'Sir Aleem', date: 'Jan 11', time: '12pm-6pm' },
    { id: 4, title: 'Quiz Tomorrow', content: 'We are seeking a results-driven Product Manager...', author: 'Sir Aleem', date: 'Jan 11', time: '12pm-6pm' },
  ];

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
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border rounded-md bg-orange-500 text-white">
                <option>All</option>
              </select>
              <button className="p-2 border rounded-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md bg-gray-200" />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-md">
                <Plus className="w-5 h-5" />
                <span>Announcements</span>
              </button>
            </div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-6 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{announcement.title}</h2>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-4">{announcement.content}</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <span className="font-medium">By {announcement.author}</span>
                <span className="text-gray-500">
                  {announcement.date} {announcement.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;



