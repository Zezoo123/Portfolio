import os
from pymongo import MongoClient
from dotenv import load_dotenv
from app.models import ContactForm

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["portfolio"]
collection = db["contacts"]

def insert_contact(form: ContactForm) -> bool:
    try:
        collection.insert_one(form.dict())
        return True
    except Exception as e:
        print("Error inserting contact:", e)
        return False
