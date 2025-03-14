const AWS = require("aws-sdk");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

AWS.config.update({ region: "us-east-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const params = { TableName: "Users", Key: { email } };

    try {
        const { Item } = await dynamoDB.get(params).promise();
        if (!Item || !bcrypt.compareSync(password, Item.password)) {
            return { statusCode: 401, body: JSON.stringify({ error: "Invalid credentials" }) };
        }

        const token = jwt.sign({ email }, "your_secret_key", { expiresIn: "1h" });
        return { statusCode: 200, body: JSON.stringify({ token }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error }) };
    }
};
