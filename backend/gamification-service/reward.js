const express = require("express");
const app = express();
const users = {};

app.post("/rewards", (req, res) => {
    const { userId, energySaved } = req.body;
    if (!users[userId]) users[userId] = { points: 0 };

    users[userId].points += Math.floor(energySaved / 10); // 1 point per 10 kWh saved

    res.json({ message: `You have earned ${users[userId].points} points!` });
});

app.listen(5000, () => console.log("Rewards API running"));
