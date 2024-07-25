# from fastapi import APIRouter, Depends

# api = APIRouter(prefix="/api/recipes")
# openapi_tags = {
#     "name": "Recipes",
#     "description": "",
# }

# @api.get("", response_model=list[News], tags=["News"])
# def get_all_news(
#     news_service: NewsService = Depends(),
# ) -> list[News]:
#     return news_service.get_all_news()

# @api.get("/{id}", response_model=News, tags=["News"])
# def get_news(
#     id: int,
#     news_service: NewsService = Depends(),
# ) -> News:
#     return news_service.get_news(id)

# @api.get("/slug/{slug}", response_model=News, tags=["News"])
# def get_news_by_slug(
#     slug: str,
#     news_service: NewsService = Depends(),
# ) -> News:
#     return news_service.get_news_by_slug(slug)


# @api.post("", response_model=News, tags=["News"])
# def create_news(
#     news: News,
#     subject: User = Depends(registered_user),
#     news_service: NewsService = Depends(),
# ) -> News:
#     return news_service.create_news(subject, news)


# @api.put("", response_model=News, tags=["News"])
# def update_news(
#     news: News,
#     subject: User = Depends(registered_user),
#     news_service: NewsService = Depends(),
# ) -> News:
#     return news_service.update_news(subject, news)


# @api.delete("/{id}", response_model=None, tags=["News"])
# def delete_news(
#     id: int,
#     subject: User = Depends(registered_user),
#     news_service: NewsService = Depends(),
# ) -> None:
#     news_service.delete_news(subject, id)

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from recipe_entity import RecipeEntity
from recipe_model import Recipe

api = APIRouter(prefix="/api/recipes", tags=["Recipes"])

@api.get("/", response_model=List[Recipe])
def read_recipes(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    recipes = db.query(RecipeEntity).offset(skip).limit(limit).all()
    return recipes

@api.post("/", response_model=Recipe)
def create_recipe(recipe: Recipe, db: Session = Depends(get_db)):
    db_recipe = RecipeEntity(**recipe.dict())
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

@api.get("/{recipe_id}", response_model=Recipe)
def read_recipe(recipe_id: int, db: Session = Depends(get_db)):
    recipe = db.query(RecipeEntity).filter(RecipeEntity.id == recipe_id).first()
    if recipe is None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return recipe

@api.put("/{recipe_id}", response_model=Recipe)
def update_recipe(recipe_id: int, recipe: Recipe, db: Session = Depends(get_db)):
    db_recipe = db.query(RecipeEntity).filter(RecipeEntity.id == recipe_id).first()
    if db_recipe is None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    for key, value in recipe.dict().items():
        setattr(db_recipe, key, value)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

@api.delete("/{recipe_id}", response_model=Recipe)
def delete_recipe(recipe_id: int, db: Session = Depends(get_db)):
    db_recipe = db.query(RecipeEntity).filter(RecipeEntity.id == recipe_id).first()
    if db_recipe is None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    db.delete(db_recipe)
    db.commit()
    return db_recipe
