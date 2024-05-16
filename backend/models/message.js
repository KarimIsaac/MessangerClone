import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    message:{
        type: String,
        require:true
    }
}, {
    timestamps: true
});
const Message = mongoose.model("Message", messageSchema)
export default Message;