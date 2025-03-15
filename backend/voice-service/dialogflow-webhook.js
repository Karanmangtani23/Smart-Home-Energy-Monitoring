const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/dialogflow-webhook", (req, res) => {
    const intent = req.body.queryResult.intent.displayName;
    if (intent === "Get Energy Usage") {
        const energyData = {
            usage: "120 kWh",
            cost: "$15",
        };
        res.json({
            fulfillmentText: `Your current energy usage is ${energyData.usage} and the estimated cost is ${energyData.cost}.`,
        });
    }
});

app.listen(5000, () => console.log("Webhook server is running on port 5000"));
