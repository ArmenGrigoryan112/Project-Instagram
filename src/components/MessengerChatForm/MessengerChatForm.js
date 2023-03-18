import './MessengerChatForm.css'
import IMAGES from '../../images'
import { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/slices/conversations/conversationsSlice'

function MessengerChatForm() {
	const formRef = useRef(null)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const [{value: body}] = formRef.current
		dispatch(addMessage(body))
		formRef.current.reset()
	}
  return (
	 <form ref={formRef} className='Chat-input'  onSubmit={handleSubmit} >
		<input type='text'  placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
	 </form>
  )
}

export default memo(MessengerChatForm)


