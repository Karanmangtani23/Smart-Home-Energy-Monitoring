exports.handler = async () => {
    const report = {
        totalUsage: 1200,
        peakHours: ["6 PM - 9 PM"],
        averageConsumption: 50,
    };

    return { statusCode: 200, body: JSON.stringify(report) };
};
