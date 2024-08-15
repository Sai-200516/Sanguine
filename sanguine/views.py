from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.db import models
from django.forms import inlineformset_factory


def home(request):
    return render(request,"home.html")

def events(request):
    return render(request,"events.html")

def team(request):
    return render(request,"team.html")

def eclipse(request):
    return render(request,"eclipse.html")

def join_us(request):
    return render(request,"join-us.html")

def about(request):
    return render(request,"about.html")
