export const sendMessage = async(req, res) =>{
    try {
       const {message}= req.body;
       const {id} = req.params;
       const senderId = req.userId
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Server error"});
    }
}