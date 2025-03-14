const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

exports.handler = async () => {
    const message = "Your energy usage is above the threshold!";
    
    return { statusCode: 200, body: JSON.stringify({ message }) };
};
