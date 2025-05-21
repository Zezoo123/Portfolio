from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import ContactForm
from app.database import insert_contact

app = FastAPI()

# Allow requests from your frontend
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/contact")
async def handle_contact(form: ContactForm):
    success = insert_contact(form)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to store message.")
    return {"message": "Message received!"}
