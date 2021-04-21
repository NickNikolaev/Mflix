const userSchema = {
    bsonType: "object",
    required: ["username", "email", "password"],
    properties: {
        username: {
            bsonType: "string",
            minLength: 6,
            description: "must be a string and is required"
        },
        email: {
            bsonType: "string",
            minLength: 6,
            description: "must be a string and is required"
        },
        password: {
            bsonType: "string",
            minLength: 6,
            description: "must be a string and is required"
        },
        movies: {
            bsonType: "array",
            uniqueItems: true,
            items: {
                bsonType: "objectId",
                description: "must be an object id"
            },
            description: "must be an array"
        }
    }
};

db.runCommand({
    collMod: "Users",
    validator: {
        $jsonSchema: userSchema
    }
});