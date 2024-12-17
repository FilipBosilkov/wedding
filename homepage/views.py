from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from .forms import MessageForm
from rest_framework import status

import logging


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import RegistryItem, Message, News, GalleryImage, Table
from .serializers import RegistryItemSerializer, MessageSerializer, NewsSerializer, \
    GalleryImageSerializer


# Create your views here.

RECAPTCHA_SECRET_KEY = "6LeTxJ0qAAAAAJoj6PG8n8VGVzbsHuuiXg6ZIvrI"  # Replace with your secret key

def index(request):
    return render(request, 'index.html')


@csrf_exempt
def submit_message(request):
    if request.method == 'POST':
        try:
            form = MessageForm(request.POST)
            if form.is_valid():
                form.save()
                return JsonResponse({'status': 'Message sent successfully!'}, status=200)
            else:
                logging.error("Form validation error: %s", form.errors)
                return JsonResponse({'error': 'Invalid form data'}, status=400)
        except Exception as e:
            logging.exception("Unexpected error:")
            return JsonResponse({'error': 'Internal Server Error'}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def home(request):
    return render(request, 'homepage/home.html', {'form': MessageForm()})


@csrf_exempt
def verify_captcha(request):
    if request.method == "POST":
        data = json.loads(request.body)
        captcha_token = data.get("captcha_token")

        # Verify the reCAPTCHA token with Google
        response = requests.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={
                "secret": RECAPTCHA_SECRET_KEY,
                "response": captcha_token,
            },
        )

        result = response.json()

        if result.get("success"):
            return JsonResponse({"message": "RSVP submitted successfully!"}, status=200)
        else:
            return JsonResponse({"message": "Invalid CAPTCHA. Please try again."}, status=400)
    return JsonResponse({"message": "Invalid request method"}, status=405)

@api_view(['GET'])
def registry_items(request):
    items = RegistryItem.objects.all()
    serializer = RegistryItemSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def gallery_images(request):
    images = GalleryImage.objects.all()
    serializer = GalleryImageSerializer(images, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
def send_message(request):
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Add other views as needed
