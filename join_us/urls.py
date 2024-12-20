from django.contrib.auth import views as auth_views
from django.urls import path
from . import views
from join_us.views import join_us_view

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('join-us/', views.join_us_view, name='join_us'),
]
