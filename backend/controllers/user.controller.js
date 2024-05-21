import User from "../models/user.js";

export const getUsers = async (req,res) =>{
    try {
        const loggedInUser = req.user._id
        const fetchAllUsers = await User.find();
        res.status(200).json(fetchAllUsers)
        
        
    } catch (error) {
        console.error("error get users");
        return res.status(500).json({error: "Server error"});
    }
}
