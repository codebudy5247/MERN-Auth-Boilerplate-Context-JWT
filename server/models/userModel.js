import mongoose from 'mongoose'


const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,

            lowercase: true,
            unique: true,
            minlength: 3,
        },
        avatar: {
            type: String,

        },
        bio: {
            type: String,
            maxlength: 130,
        },
        website: {
            type: String,
            maxlength: 65,
        }
    },
    {
        timestamps: true,
    }
)



const User = mongoose.model('User', userSchema)

export default User
