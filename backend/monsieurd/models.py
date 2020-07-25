from django.conf import settings
from django.db import models
from django.utils import timezone


class Department(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name

class Position(models.Model):
    name = models.CharField(max_length=200)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)


class Employee(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    fix_in_us = models.DecimalField(max_digits=10, decimal_places=2)
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    date_of_employment = models.DateField()
    contract_amount = models.DecimalField(max_digits=10, decimal_places=2)
    contract_number = models.CharField(max_length=200)
    descrption = models.TextField()

# class ProjectTimesheet(models.Model):
#     hours_in_month = model.IntegerField()
    




    

# Create your models here.
