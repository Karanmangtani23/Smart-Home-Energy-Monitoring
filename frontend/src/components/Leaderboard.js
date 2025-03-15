import React, { useState, useEffect } from "react";

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/leaderboard")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>🏆 Energy Saving Leaderboard</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.name} - {user.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
