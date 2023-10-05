from django.db import models
from django.contrib.auth.models import User

class Flight(models.Model):
    id=models.AutoField(primary_key=True,editable=False)
    name=models.CharField(max_length=200,null=False,blank=False)
    froml=models.CharField(max_length=200,null=False,blank=False)
    tol=models.CharField(max_length=200,null=False,blank=False)
    departure=models.TimeField(null=False)
    date=models.DateField(null=False)
    fprice=models.DecimalField(max_digits=7,decimal_places=2)
    bprice=models.DecimalField(max_digits=7,decimal_places=2)
    eprice=models.DecimalField(max_digits=7,decimal_places=2)
    def __str__(self):
        return str(self.name)


class BookTicket(models.Model):
    flight=models.ForeignKey(Flight,on_delete=models.SET_NULL,null=True,related_name='booked_seats',default="")
    seat=models.CharField(max_length=2,null=False,blank=False)
    name=models.CharField(max_length=100,null=False,blank=False,default='')
    age=models.IntegerField(default=0)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    def __str__(self):
        return str(self.flight.name+self.seat)
    
  