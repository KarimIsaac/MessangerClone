import Conversation from "../Conversation/Conversation";
import conversationsHook  from "../../hooks/conversationsHook";
const Conversations = () => {
    const conversations = conversationsHook();
    console.log(conversations);
 	return (
 		<div className='py-2 flex flex-col overflow-auto'>
 			{conversations.map((conversation) => (
 				<Conversation
 					key={conversation._id}
 					conversation={conversation}
 				/>
 			))}
 			<div className='divider my-0 py-0 h-1' />
 		</div>
 	);
 };
 export default Conversations;