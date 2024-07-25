from sqlalchemy import Boolean, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

class NewsEntity(EntityBase):
    __tablename__ = "recipes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False, default="")
    description: Mapped[str] = mapped_column(String, nullable=False, default="")
    directions: Mapped[str] = mapped_column(String, nullable=False, default="")
    organization: Mapped[str] = mapped_column(String, nullable=False, notes="")
    slug: Mapped[str] = mapped_column(String, unique=True, nullable=False, default="")
    publish_date: Mapped[str] = mapped_column(String, nullable=False, default="")


    @classmethod
    def from_model(cls, subject: User, model: Recipe) -> Self:
        return cls(
            id=model.id,
            name=model.name,
            description=model.description,
            directions=model.directions,
            notes=model.notes,
        )

    def to_model(self) -> Recipe:
        return Recipe(
            id=self.id,
            name=self.name,
            description=self.description,
            directions=self.directions,
            notes=self.notes,
            slug=self.slug,
        )
        