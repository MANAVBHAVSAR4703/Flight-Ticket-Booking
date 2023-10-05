from django.urls import path
from . import views

urlpatterns=[
    path('flights/',views.getFlights,name="routes"),
    path('flights/<str:pk>/',views.getFlight,name="routes"),
    path('book/', views.addBookedSeats, name='seats-add'),
    path('login/',views.MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
    path('register/',views.registerUser,name='register'),
    path('profile/',views.getUserProfile,name="user_profile"),
    path('mybooked/<str:pk>', views.getMyBooked, name='myorders'),
]