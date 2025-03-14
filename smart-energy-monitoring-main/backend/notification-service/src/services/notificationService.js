const Notification = require("../models/Notification");

exports.sendUserNotification = async (userId, message) => {
  try {
    const newNotification = new Notification({ userId, message });
    await newNotification.save();
    return { message: "Notification sent successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.fetchUserNotifications = async (userId) => {
  try {
    return await Notification.find({ userId }).sort({ timestamp: -1 }).limit(10);
  } catch (error) {
    throw new Error(error.message);
  }
};
