from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response

class RegisterView(APIView):
    def post(self, request):
        User.objects.create_user(
            username=request.data["username"],
            password=request.data["password"]
        )
        return Response({"message": "User created"})

class LoginView(APIView):
    def post(self, request):
        user = authenticate(
            username=request.data["username"],
            password=request.data["password"]
        )
        if user:
            return Response({"success": True})
        return Response({"error": "Invalid credentials"}, status=400)
