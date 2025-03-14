import React, { useEffect, useState } from 'react';
import { getAllEnergyData } from '../services/energyService';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnergyTable = () => {
    const [energyData, setEnergyData] = useState([]);

    useEffect(() => {
        fetchEnergyData();
    }, []);

    const fetchEnergyData = async () => {
        const data = await getAllEnergyData();
        setEnergyData(data);
    };

    return (
        <div className="container mt-4">
            <h2>Energy Consumption Data</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Device Name</th>
                        <th>Power Usage (kWh)</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {energyData.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.id}</td>
                            <td>{entry.deviceName}</td>
                            <td>{entry.powerUsage}</td>
                            <td>{new Date(entry.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnergyTable;
