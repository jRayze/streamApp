import mongoose from "mongoose";

const usersModel = mongoose.model(
    "streamApp",
    {
        name: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, 
    "users"
);

export default usersModel