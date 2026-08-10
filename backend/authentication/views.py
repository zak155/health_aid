from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    # Pass incoming request JSON to our serializer
    serializer = RegisterSerializer(data=request.data)
    
    # Check if data passes validation rules
    if serializer.is_valid():
        serializer.save()  # Triggers serializer.create()
        return Response(
            {"message": "User registered successfully."}, 
            status=status.HTTP_201_CREATED
        )
    
    # Return validation error messages if invalid
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)