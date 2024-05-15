import bcrypt from "bcryptjs" 
import verfiyToken from "../verfiyToken/verfiyToken.js";

export const signup = async (req, res) =>{
    try {
        const { fullName, username, password, gender } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "This username already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Set profile picture based on gender
        const profilePic = gender === "male"
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic,
        });
         await newUser.save();

        // Generate verification token
        verfiyToken(newUser._id, res);
         // Respond with created user details
        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}

export const login = async (req, res) =>{
try { 
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const correctPassword = await bcrypt.compare(password, user?.password);
    if (!correctPassword) {
        return res.status(400).json({error: "Wrong password or username"});
    }
    verfiyToken(user._id, res);
    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
        
    })
    console.log("successfully log in")
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Server error"});
}
    return res.status(400).json({error: "User not found"})
} 

export const logout = (req, res) =>{
    console.log('signup');
}