from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import joblib

# Load your machine learning models
dt_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/DecisionTree.joblib')
nb_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/NaiveBayes.joblib')
rf_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/RandomForest.joblib')
svc_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/SVC.joblib')
knn_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/KNNClassifier.joblib')
logistic_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/LogisticRegression.joblib')


def say_hello(request):
    return HttpResponse('hello world')


class DTPrediction(APIView):
   
    def post(self, request):
        # Handle POST request for prediction
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = dt_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})

class NBPrediction(APIView):
    def post(self, request):
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = nb_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})

class RFPrediction(APIView):
    def post(self, request):
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = rf_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})

class SVCPrediction(APIView):
    def post(self, request):
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = svc_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})

class KNNPrediction(APIView):
    def post(self, request):
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = knn_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})

class LogisticPrediction(APIView):
    def post(self, request):
        data = request.data
        features = [data['gender'], data['age'], data['hypertension'], data['heart_disease'], data['ever_married'], data['work_type'], data['residence_type'], data['avg_gluc_lvl'], data['bmi'], data['smoking']]
        prediction = logistic_model.predict([features])[0]
        return JsonResponse({'prediction': prediction})



#-----------------------------------------------
# from django.shortcuts import render
# from django.http import HttpResponse
# from django.http import JsonResponse
# from rest_framework.views import APIView
# import  joblib




# dt_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/DecisionTree.joblib')
# nb_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/NaiveBayes.joblib')
# rf_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/RandomForest.joblib')
# svc_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/SVC.joblib')
# knn_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/KNNClassifier.joblib')
# logistic_model = joblib.load('C:/Users/Mega Store/Desktop/api/models/LogisticRegression.joblib')




# def say_hello(request):
#     return HttpResponse('hello world')

# class DTPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = dt_model.predict(data)
#         print("sucsess")
        
#         return JsonResponse({'prediction': 4})

# class NBPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = nb_model.predict(data)
#         return JsonResponse({'prediction': 3})

# class RFPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = rf_model.predict(data)
#         return JsonResponse({'prediction': 1})

# class SVCPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = svc_model.predict(data)
#         return JsonResponse({'prediction': 3})

# class KNNPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = knn_model.predict(data)
#         return JsonResponse({'prediction': 3})

# class LogisticPrediction(APIView):
#     def post(self, request):
#         data = request.data
#         prediction = logistic_model.predict(data)
#         return JsonResponse({'prediction': 3})