from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
from .ml_models.load_model import model, imputer, scaler

@api_view(['POST'])
def predict_diabetes(request):
    try:
        data = request.data
        features = [
            data['age'],
            data['gender'],
            data['family_history'],
            data['medication'],
            data['sugar_intake'],
            data['physical_activity']
        ]
        input_array = np.array([features])
        imputed = imputer.transform(input_array)
        scaled = scaler.transform(imputed)
        prediction = model.predict(scaled)[0]

        return Response({
            'prediction': int(prediction),
            'message': 'Diabetic' if prediction == 1 else 'Not Diabetic'
        })

    except Exception as e:
        return Response({'error': str(e)}, status=400)
