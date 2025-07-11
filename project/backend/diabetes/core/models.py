from django.db import models



class DiabetesPrediction(models.Model):
    age = models.IntegerField()
    gender = models.IntegerField()
    family_history = models.IntegerField()
    medication = models.IntegerField()
    sugar_intake = models.IntegerField()
    physical_activity = models.IntegerField()
    prediction = models.BooleanField()
    predicted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Prediction: {'Diabetic' if self.prediction else 'Not Diabetic'} at {self.predicted_at}"
