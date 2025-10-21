import os
from pathlib import Path
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pickle

# Chemins
BASE_DIR = Path(__file__).resolve().parent
CREDENTIALS_FILE = BASE_DIR / "credentials.json"
TOKEN_FILE = BASE_DIR / "token.pkl"

# Scope Gmail pour envoyer des emails
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def main():
    creds = None
    # Charger token existant
    if TOKEN_FILE.exists():
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)

    # Si pas de token ou invalide
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDENTIALS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)  # ouvrira le navigateur pour autorisation

        # Sauvegarder le token pour usage futur
        with open(TOKEN_FILE, 'wb') as token:
            pickle.dump(creds, token)
        print("Token Gmail généré et sauvegardé !")

if __name__ == "__main__":
    main()
