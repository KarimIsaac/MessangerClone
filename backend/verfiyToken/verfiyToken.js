import jwt from "jsonwebtoken"

const verfiyToken =(userId, res) => {  
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});


}
export default verfiyToken