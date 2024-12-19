from django.shortcuts import render
from .forms import JoinUsForm

def join_us_view(request):
    if request.method == "POST":
        form = JoinUsForm(request.POST)
        if form.is_valid():
            form.save()
            # Do something after saving the form, e.g. send a confirmation email
    else:
        form = JoinUsForm()

    return render(request, 'join_us.html', {'form': form})
