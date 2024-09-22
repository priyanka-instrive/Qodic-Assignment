const mongoose = require("mongoose");
const { dbConn } = require("../../system/db/mongo");

const characterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        height: { type: String },
        mass: { type: String },
        hair_color: { type: String },
        skin_color: { type: String },
        eye_color: { type: String },
        birth_year: { type: String },
        gender: { type: String },
        homeworld: { type: String }, // Assuming URLs for homeworlds
        films: [{ type: String }], // Array of film URLs
        species: [{ type: String }], // Array of species URLs
        vehicles: [{ type: String }],
        starships: [{ type: String }],
        created: { type: Date },
        edited: { type: Date },
        url: { type: String },
    },
    { timestamps: true },
);

module.exports = dbConn.model("Character", characterSchema);
