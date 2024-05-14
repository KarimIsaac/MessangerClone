import jws from "jsonwebtoken"

const verfiyToken =(userId, res) => {  
    const token = jws.sign({_id: user._id}, process.env.TOKEN_SECRET)
    return token;

}
export default verfiyToken