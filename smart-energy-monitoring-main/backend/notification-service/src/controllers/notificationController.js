const { sendUserNotification, fetchUserNotifications } = require("../services/notificationService");

exports.sendNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const result = await sendUserNotification(userId, message);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await fetchUserNotifications(userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
