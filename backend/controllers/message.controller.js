export const sendMessage = async(req, res) =>{
    try {
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Server error"});
    }
}