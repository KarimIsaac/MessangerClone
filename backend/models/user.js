const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    gender:{
        type: String,
        required:true,
        enum:["male", "female"]
    },
    profilePic:{
        type: String,
        default:"",
    }
    }

, {
    timestamps: true
});

const User = mongoose.model("User", userSchema) 
export default User;
