from platform import node
from pydantic import BaseModel

class News(BaseModel):
    id: int
    name: str
    description: str
    directions: str
    notes: str