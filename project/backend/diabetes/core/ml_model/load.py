import joblib
import os

# Load paths only once (on module import)
base_dir = os.path.dirname(__file__)
imputer_path = os.path.join(base_dir, 'imputer.pkl')
scaler_path = os.path.join(base_dir, 'scaler.pkl')
model_path = os.path.join(base_dir, 'knn_model.pkl')

# Load the objects once
imputer = joblib.load(imputer_path)
scaler = joblib.load(scaler_path)
model = joblib.load(model_path)

def get_imputer():
    return imputer

def get_scaler():
    return scaler

def get_model():
    return model
