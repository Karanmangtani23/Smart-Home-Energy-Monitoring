import json

def lambda_handler(event, context):
    intent = event['request']['intent']['name']
    
    if intent == "GetEnergyUsageIntent":
        response_text = "Your current energy usage is 120 kWh, costing around $15."
    
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": response_text
            }
        }
    }
