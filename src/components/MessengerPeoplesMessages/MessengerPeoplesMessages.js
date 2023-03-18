import './MessengerPeoplesMessages.css'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { currentUserMessage } from '../../store/slices/conversations/conversationsSlice'
import { memo, useEffect } from 'react'

function MessengerPeoplesMessages() {
const {usersData,currentUser} = useSelector(selectUsers)
const dispatch = useDispatch()
useEffect(() => {
	dispatch(currentUserMessage(currentUser?.id))
	},[currentUser])

  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			usersData.filter(user => user.id !== currentUser?.id).map(el => <MessengerPeoplesMessage key={el.id}  id={el.id} img={el.avatar} name={el.username} active={el.active}/>)
		}
	 </div>
  )
}

export default memo(MessengerPeoplesMessages)

