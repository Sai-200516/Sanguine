from django.contrib import admin
from .models import JoinUs


class JoinUsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'gender', 'reg_no', 'phone', 'course', 'section', 'year', 'location', 'confirmation_sent')
    search_fields = ('name', 'email', 'reg_no')
    actions = ['send_confirmation_email', 'export_to_csv', 'export_to_pdf']

    def send_confirmation_email(self, request, queryset):
        # Code to send confirmation emails
        pass

    def export_to_csv(self, request, queryset):
        # Code to export selected records to CSV
        pass

    def export_to_pdf(self, request, queryset):
        # Code to export selected records to PDF
        pass

admin.site.register(JoinUs, JoinUsAdmin)
