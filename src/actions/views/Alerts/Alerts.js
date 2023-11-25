import React from 'react';
import './Alerts.css';

const sampleNotifications = [
  {
    id: 1,
    userName: 'John Doe',
    description: 'Notification 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timestamp: '2023-07-25 10:30 AM',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    description: 'Notification 2 - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    timestamp: '2023-07-25 11:45 AM',
  },
  // Add more notifications as needed
  // ...
  {
    id: 10,
    userName: 'Alex Johnson',
    description: 'Notification 10 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    timestamp: '2023-07-25 4:15 PM',
  },
];

const Alerts = () => {
  const handleNotificationClick = (notificationId) => {
    // Display a dummy alert with the notification ID when clicked
    alert(`Clicked notification with ID: ${notificationId}`);
    // You can replace the alert with your desired custom action
  };

  return (
    <div className="alerts-container">
      
      <div className="alerts-list">
      <h1>Alerts</h1>
        {sampleNotifications.map((notification) => (
          <div
            key={notification.id}
            className="alert-item"
            onClick={() => handleNotificationClick(notification.id)}
          >
            <div className="user-name">{notification.userName}</div>
            <div className="description">{notification.description}</div>
            <div className="timestamp">{notification.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
