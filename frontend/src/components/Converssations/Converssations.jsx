import Conversation from "../Conversation/Conversation";
import conversationsHook  from "../../hooks/conversationsHook";
const Conversations = () => {
    const conversations = conversationsHook();
    console.log(conversations);
 	return (
 		<div className='py-2 flex flex-col overflow-auto'>
 			<Conversation />
			<Conversation />
 			<Conversation />
 			<Conversation />
 			<Conversation />
 			<Conversation />
 		</div>
 	);
 };
 export default Conversations;