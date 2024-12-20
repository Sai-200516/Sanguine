from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from django.shortcuts import render
# MongoDB Connection Setup
client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
db = client["Spirit"]  # Replace with your database name
join_us_collection = db["join_us"]  # Collection name


def join_us_view(request):
    if request.method == "POST":
        # Extract data from the POST request
        email = request.POST.get("email")
        name = request.POST.get("name")
        gender = request.POST.get("gender")
        reg_no = request.POST.get("reg-no")
        phone = request.POST.get("phone")
        course = request.POST.get("course")
        section = request.POST.get("section")
        personality = request.POST.get("personality")
        interested_domain = request.POST.get("interested_domain")
        location = request.POST.get("location")
        year = request.POST.get("year")
        experience = request.POST.get("experience")
        referred_by = request.POST.get("referred-by")

        # Prepare data for MongoDB
        data = {
            "email": email,
            "name": name,
            "gender": gender,
            "reg_no": reg_no,
            "phone": phone,
            "course": course,
            "section": section,
            "personality": personality,
            "interested_domain": interested_domain,
            "location": location,
            "year": year,
            "experience": experience,
            "referred_by": referred_by,
        }

        try:
            # Save data into MongoDB
            join_us_collection.insert_one(data)
            return JsonResponse({"message": "Registration saved successfully!"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
    return render(request,'join_us.html')
