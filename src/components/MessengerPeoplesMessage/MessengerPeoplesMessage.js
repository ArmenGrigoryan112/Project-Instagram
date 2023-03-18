import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { chatTo } from '../../store/slices/conversations/conversationsSlice'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,active,img,id}) {
	const dispatch = useDispatch()
  return (
	 <div onClick={()=>dispatch(chatTo(id))} className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active === 0 ? 'Active now' : active + ' Minutes ago'}</p>
		</div>
	 </div>
  )
}

export default memo(MessengerPeoplesMessage)

