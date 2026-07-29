"""
Email Trigger Test Script
--------------------------
This script inserts a test contact document into Firestore.
The Firebase "Trigger Email from Firestore" extension will
pick it up and send an email to adwaithdeva@gmail.com.

Usage:
    python test_email.py

Requirements:
    pip install firebase-admin
    serviceAccountKey.json must be in this scripts/ folder
"""

import os
import firebase_admin
from firebase_admin import credentials, firestore

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KEY_PATH  = os.path.join(BASE_DIR, "serviceAccountKey.json")

cred = credentials.Certificate(KEY_PATH)

# avoid re-initializing if already done
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

db = firestore.client()

print("📧 Inserting test contact document...")

doc_ref = db.collection("contacts").add({
    "to": "adwaithdeva@gmail.com",
    "replyTo": "test@example.com",
    "message": {
        "subject": "✅ Test — Portfolio Email Trigger Working",
        "text": "This is a test message from your portfolio seed script.",
        "html": """
            <div style='font-family:sans-serif;padding:24px;'>
                <h2 style='color:#2563eb;'>✅ Email Trigger is Working!</h2>
                <p>Your Firebase Trigger Email extension is correctly configured.</p>
                <p>Contact form messages from your portfolio will now arrive here.</p>
            </div>
        """,
    },
    "senderName": "Test Script",
    "senderEmail": "test@example.com",
})

print(f"✅ Test document created: {doc_ref[1].id}")
print("📬 Check your inbox at adwaithdeva@gmail.com in ~1 minute.")
print("\nIf no email arrives:")
print("  1. Check Firebase Console → Extensions → Trigger Email → Logs")
print("  2. Verify your Gmail App Password in the extension config")
print("  3. Make sure 2-Step Verification is ON in your Google account")
