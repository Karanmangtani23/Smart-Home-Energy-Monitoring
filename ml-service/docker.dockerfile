FROM python:3.8-slim

WORKDIR /app

COPY ml_service.py .
COPY energy_forecast_model.h5 .
COPY scaler.pkl .
COPY requirements.txt .

RUN pip install -r requirements.txt

CMD ["python", "ml_service.py"]
