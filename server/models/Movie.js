const movieSchema = {
    bsonType: "object",
    required: ["title", "year", "director", "runtime", "description", "imageUrl", "imdb_rating", "creator_id"],
    properties: {
        title: {
            bsonType: "string",
            minLength: 6,
            description: "must be a string and is required"
        },
        year: {
            bsonType: "number",
            minimum: 1888,
            maximum: 2021,
            description: "must be a number and is required"
        },
        director: {
            bsonType: "string",
            minLength: 6,
            description: "must be a string and is required"
        },
        runtime: {
            bsonType: "double",
            minimum: 0,
            maximum: 5,
            description: "must be a double and is required"
        },
        description: {
            bsonType: "string",
            minLength: 10,
            description: "must be a string and is required"
        },
        imageUrl: {
            bsonType: "string",
            "pattern": "^http(s)?",
            description: "must be a string and is required"
        },
        imdb_rating: {
            bsonType: "double",
            minimum: 0,
            maximum: 10,
            description: "must be a double and is required"
        },
        creator_id: {
            bsonType: "objectId",
            description: "must be object id and is required"
        }
    }
};

db.runCommand({
    collMod: "Movies",
    validator: {
        $jsonSchema: movieSchema
    }
});