from django.urls import path
from . import views 
from .views import DTPrediction, NBPrediction, RFPrediction, SVCPrediction, KNNPrediction, LogisticPrediction
urlpatterns = [
    path('hello/' , views.say_hello),
    path('dt_prediction/', DTPrediction.as_view(), name='dt_prediction'),
    path('nb_prediction/', NBPrediction.as_view(), name='nb_prediction'),
    path('rf_prediction/', RFPrediction.as_view(), name='rf_prediction'),
    path('svc_prediction/', SVCPrediction.as_view(), name='svc_prediction'),
    path('knn_prediction/', KNNPrediction.as_view(), name='knn_prediction'),
    path('logistic_prediction/', LogisticPrediction.as_view(), name='logistic_prediction'),
]