import mongoose, {Schema} from "mongoose"

const passwordSchema = new Schema (
    {
        website: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        alternateUsername: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        note: {
            type: String,
        },
        collection: [
            {
                type: String,
                required: true,
                unique: true, 
                lowercase: true,
            }
        ],
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const Password = mongoose.model("Password", passwordSchema)