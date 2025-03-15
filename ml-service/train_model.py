import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import joblib

# Load the dataset (Replace with your actual energy usage dataset)
data = pd.read_csv('energy_data.csv')  # Format: [timestamp, energy_usage]

# Convert timestamp to datetime
data['timestamp'] = pd.to_datetime(data['timestamp'])
data.set_index('timestamp', inplace=True)

# Normalize the energy usage values
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
data['energy_usage'] = scaler.fit_transform(data[['energy_usage']])

# Create sequences for LSTM
def create_sequences(data, seq_length=24):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:i+seq_length])
        y.append(data[i+seq_length])
    return np.array(X), np.array(y)

seq_length = 24  # Using last 24 hours to predict next hour
X, y = create_sequences(data['energy_usage'].values, seq_length)

# Reshape X for LSTM (samples, time_steps, features)
X = X.reshape((X.shape[0], X.shape[1], 1))

# Build the LSTM model
model = Sequential([
    LSTM(50, activation='relu', return_sequences=True, input_shape=(seq_length, 1)),
    LSTM(50, activation='relu'),
    Dense(1)
])

model.compile(optimizer='adam', loss='mse')

# Train the model
model.fit(X, y, epochs=10, batch_size=32)

# Save the trained model
model.save('energy_forecast_model.h5')
joblib.dump(scaler, 'scaler.pkl')
