export const signup = async (req, res) =>{
    try{
        const {fullName, username, password, gender}= req.body;
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: "This username already exists"})
        }
    }catch{
        return res.status(500).json({error: "Server error"})
    
    }
}

export const login = (req, res) =>{
    console.log('signup');
}

export const logout = (req, res) =>{
    console.log('signup');
}