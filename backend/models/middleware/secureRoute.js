import jwt from 'jsonwebtoken'
import User from "../user.js"

const secureRoute = async (req, res, next) => { 
    try {
        const token = req.cookies.token;
        if(!token)
            return res.status(401).json({error: "Unauthorized"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded)
            return res.status(401).json({error: "Unauthorized, invaild token"});

        const user = await User.findById(decoded.userId);
        if(!user)
            return res.status(401).json({error: "Unauthorized, user not found"});
        req.user = user;
        next();
    }catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}

export default secureRoute;