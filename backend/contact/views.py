from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def contact_view(request):
    if request.method != 'POST':
        return Response({'error': 'Méthode non autorisée'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        try:
            contact = serializer.save()

            subject = f"ProMatch - Nouveau message de {contact.name}: {contact.subject}"
            message_body = f"""
Vous avez reçu un nouveau message via ProMatch:

Nom: {contact.name}
Email: {contact.email}
Sujet: {contact.subject}

Message:
{contact.message}

---
Date: {contact.created_at}
ID du message: {contact.id}
            """

            send_mail(
                subject=subject,
                message=message_body,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.CONTACT_EMAIL_RECIPIENT],
                fail_silently=False,
            )

            logger.info(f"Message de contact créé: {contact.id} - {contact.name}")

            return Response({'success': True, 'message': 'Votre message a été envoyé avec succès!', 'data': serializer.data}, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.error(f"Erreur lors de l'envoi du message: {str(e)}")
            return Response({'success': False, 'message': f'Erreur lors de l\'envoi: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
