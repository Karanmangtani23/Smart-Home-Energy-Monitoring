from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
import joblib

# Load trained model and scaler
model = tf.keras.models.load_model('energy_forecast_model.h5')
scaler = joblib.load('scaler.pkl')

app = Flask(__name__)

@app.route('/energy/predict', methods=['POST'])
def predict_energy():
    try:
        # Get JSON input
        data = request.json
        last_24_hours = np.array(data['last_24_hours']).reshape(1, 24, 1)

        # Predict next hour's energy usage
        prediction = model.predict(last_24_hours)
        prediction = scaler.inverse_transform(prediction.reshape(-1, 1))[0][0]

        return jsonify({'predicted_energy_usage': prediction})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
