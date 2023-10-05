from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Flight
from .models import BookTicket
from .serializer import FlightSerializer
from .serializer import BookTicketSerializer
from rest_framework import status
from datetime import datetime
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from .serializer import UserSerializer, UserSerializerWithToken
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['GET'])
def getFlights(request):
    SearchItem=request.GET.get('name')
    print(SearchItem)
    flights=Flight.objects.all()
    serializer=FlightSerializer(flights,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getFlight(request,pk):
    flight=Flight.objects.get(pk=pk)
    serializer=FlightSerializer(flight,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getMyBooked(request,pk):
    booked=BookTicket.objects.filter(user=pk)
    serializer = BookTicketSerializer(booked, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addBookedSeats(request):
    data = request.data
    id=data['flight']
    user=data['user']
    passenger_details=data['passenger_details']
    flightinstance=Flight.objects.get(pk=id)
    userinstance=User.objects.get(pk=user)
    if  passenger_details and len(passenger_details) == 0:
        return Response({'detail': 'No Seats Selected'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        for i in passenger_details:

            seat=BookTicket.objects.create(
                seat=i[0],
                flight=flightinstance,
                name=i[1],
                age=i[2],
                user=userinstance
            )
           
        print(seat)
        serializer=BookTicketSerializer(seat, many=False)
        return Response(serializer.data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


