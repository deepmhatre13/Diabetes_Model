from django.db import models

class Prediction(models.Model):
    age = models.IntegerField()
    gender = models.IntegerField()
    family_history = models.IntegerField()
    medication_for_sugar = models.IntegerField()
    sugary_food_intake = models.IntegerField()
    physical_activity = models.IntegerField()

    prediction = models.IntegerField()  # Renamed from 'diabetic'

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Prediction ({self.id}) - {"Diabetic" if self.prediction else "Not Diabetic"}'
