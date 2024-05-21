import Chat from "../models/chat.js"
import Message from "../models/message.js"
export const sendMessage = async(req, res) =>{
    try {
       const {message}= req.body;
       const {id: receiverId} = req.params;
       const senderId = req.user._id

       let Chat = await Chat.findOne({
        members: {$all : [senderId, receiverId]},
       })
      if(!Chat){
            Chat = await Chat.create({
                members: [senderId, receiverId],
                messages: [{senderId, message}]
            })
            }
      const newMessage = new Message({
        senderId,
        receiverId, 
        message
     })
     if (newMessage){
        Chat.messages.push(newMessage._id)
        //await Chat.save()
        return res.status(200).json({message: "Message sent"})
     
     }
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Server error"});
    }
}
export const getMessages = async (req, res) => {
try {
  const {id:chatUser}= req.params;
  const senderId = req.user._id 

  const chat = await Chat.findOne({
    members: {$all: [senderId, chatUser]}.populate("messages")
    });
    if(!chat){
        return res.status(200).json({messages: []})
    }
    const messages = chat.messages;
    res.status(200).json(messages)
    
} catch (error) {
    console.error(error);
    return res.status(500).json({error: "Server error"});
}
}