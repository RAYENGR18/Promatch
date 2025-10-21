# gmail_send.py
import os
import pickle
import base64
from email.mime.text import MIMEText
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from contact.models import Contact  # adapte le chemin selon ton projet Django

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TOKEN_FILE = os.path.join(BASE_DIR, 'token.pkl')
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def send_message(contact: Contact):
    """
    Envoie un email à partir d'une instance de Contact.
    """
    creds = None
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            raise Exception("Le token Gmail est manquant, invalide ou expiré. Supprime token.pkl et relance l’authentification.")

    service = build('gmail', 'v1', credentials=creds)

    # Corps du message
    message_text = f"""
    Vous avez reçu un nouveau message de contact :

    Nom : {contact.name}
    Email : {contact.email}
    Sujet : {contact.subject}
    Message :
    {contact.message}
    """

    message = MIMEText(message_text)
    message['to'] = 'destinataire@exemple.com'  # ou un email de ton choix
    message['subject'] = f"Nouveau message : {contact.subject}"

    raw_message = {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}
    sent_message = service.users().messages().send(userId="me", body=raw_message).execute()
    print(f"✅ Message envoyé avec l'ID : {sent_message['id']}")
