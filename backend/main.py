from fastapi import FastAPI
from database import engine, Base
from recipe_api import api as recipe_api

Base.metadata.create_all(bind=engine)  # Create database tables

app = FastAPI()

app.include_router(recipe_api)