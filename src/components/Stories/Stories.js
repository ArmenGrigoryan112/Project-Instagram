import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Story from '../Story/Story'

function Stories() {
    const {usersData} = useSelector(selectUsers)
  return (
    <div className="status-wrapper">
        {
            usersData.map(el => <Story key={el.id} img={el.avatar} name={el.username} />)
        }
    </div>
  )
}

export default Stories