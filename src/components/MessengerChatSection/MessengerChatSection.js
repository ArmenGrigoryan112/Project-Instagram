import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectConversations } from '../../store/slices/conversations/conversationsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {
	const {usersData} = useSelector(selectUsers)
	const {toMessage} = useSelector(selectConversations)
	
  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p>{usersData.find(user => user.id === toMessage)?.username}</p> 
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
			<MessengerChatForm />
		</div>
	 </div>
  )
}

export default memo(MessengerChatSection)


