const AWS = require("aws-sdk");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

AWS.config.update({ region: "us-east-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const hashedPassword = bcrypt.hashSync(password, 10);

    const params = {
        TableName: "Users",
        Item: {
            email,
            password: hashedPassword,
        },
    };

    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "User registered successfully" }),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error }) };
    }
};
