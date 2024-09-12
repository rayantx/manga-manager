import mongoose from "mongoose";

const mangaSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Manga = mongoose.model('mangas', mangaSchema);