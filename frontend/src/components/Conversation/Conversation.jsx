import useConversation from '../../zustand/useConversation';
const Conversation = ({conversation, lastIdx}) => {
	const {selectConversation, setSelectConversation} = useConversation();
	const isSelected = selectConversation?._id === conversation._id;
     	return (
     		<>
     			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
					${isSelected ?"bg-sky-500" : ""}
					'onClick={() => setSelectConversation(conversation)}'
     				<div className='avatar online'>
     					<div className='w-12 rounded-full'>
     						<img
     							src={conversation.profilePic}
     							alt='user avatar'
     						/>
     					</div>
     				</div>
    
     				<div className='flex flex-col flex-1'>
    					<div className='flex gap-3 justify-between'>
							<p className='font-bold text-gray-200'>{conversation.fullName}</p>
     						<span className='text-xl'>🎃</span>
     					</div>
     				</div>
     			</div>
    
     			<div className='divider my-0 py-0 h-1' />
     		</>
     	);
     };
	 import PropTypes from 'prop-types';

	 Conversation.propTypes = {
		conversation: PropTypes.shape({
			profilePic: PropTypes.string,
			fullName: PropTypes.string.isRequired,
		}).isRequired,
		lastIdx: PropTypes.any,
	 };

	 export default Conversation;