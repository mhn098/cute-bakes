export class Recipe {
    id: number;
    name: string;
    description: string;
    directions: string;
    notes: string;

    constructor(
        id: number,
        name: string,
        description: string,
        directions: string,
        notes: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.directions = directions;
        this.notes = notes;
    }
}