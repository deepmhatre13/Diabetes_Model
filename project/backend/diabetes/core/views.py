from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Prediction
from core.ml_model.load import get_imputer, get_scaler, get_model
import numpy as np

class PredictView(APIView):
    def post(self, request):
        try:
            data = request.data

            fields = ['AGE', 'GENDER', 'FAMILY_HISTORY',
                      'MEDICATION_FOR_SUGAR', 'SUGARY_FOOD_INTAKE', 'PHYSICAL_ACTIVITY']
            features = [float(data[field]) for field in fields]
            features_np = np.array([features])

            # Load preprocessing tools and model
            imputer = get_imputer()
            scaler = get_scaler()
            model = get_model()

            imputed = imputer.transform(features_np)
            scaled = scaler.transform(imputed)
            prediction = int(model.predict(scaled)[0])
            risk = "High Risk" if prediction == 1 else "Low Risk"

            # Save prediction to DB
            Prediction.objects.create(
                age=data['AGE'],
                gender=data['GENDER'],
                family_history=data['FAMILY_HISTORY'],
                medication_for_sugar=data['MEDICATION_FOR_SUGAR'],
                sugary_food_intake=data['SUGARY_FOOD_INTAKE'],
                physical_activity=data['PHYSICAL_ACTIVITY'],
                prediction=prediction  # ✅ Save to correct field
            )

            return Response({
                "prediction": prediction,
                "risk": risk
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
