from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.
def home(request):
    if request.method == "POST":
        email = request.POST.get('email')
        if email:
            send_mail(
                subject="Welcome to SolutionWorks 🎉",
                message=
                '''
                Hi there,

                Thanks for being interested in working with us! We'll contact you soon.
                
                Best,
                .SolutionWorks team
                ''',
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

    return render(request, 'main/home.html')

def about(request):
    return render(request, 'main/about.html')

def portfolio(request):
    return render(request, 'main/portfolio.html')

def donate(request):
    return render(request, 'main/donate.html')