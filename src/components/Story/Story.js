import React from 'react'

function Story({img, name}) {
  return (
    <div className="status-card">
        <div className="profile-pic"><img src={img} alt=""/></div>
        <p className="username">{name}</p>
    </div>
  )
}

export default Story