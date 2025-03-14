import React from "react";

const NotificationItem = ({ notification }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h4>{notification.title}</h4>
      <p>{notification.message}</p>
      <small>{new Date(notification.timestamp).toLocaleString()}</small>
    </div>
  );
};

export default NotificationItem;
