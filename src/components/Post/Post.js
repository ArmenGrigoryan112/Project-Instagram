import { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import showComments from '../../HOC/showComments'
import IMAGES from '../../images'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Comments from '../Comments/Comments'
import Form from '../Form/Form'



function Post({id, img, name, likesCount,comments, postText, timeAgo, show, toggleShow}) {
const {currentUser} = useSelector(selectUsers)

  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={currentUser?.avatar} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img onClick={toggleShow} src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
          {!!postText.trim().length && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p> <br/>
            <p onClick={toggleShow} className='post-time' style={{color: "black", cursor: "pointer"}}>{show ? "Show less" : "Show more"}</p>
            <>
               {
                  show ? comments.map(comment => (
                    <Comments  key={comment.id} name={comment.userName} body={comment.body} />
                 )) : ""
               }
            </>
        </div>
        <Form  id={id}/>
    </div>
  )
}

export default memo(showComments(Post))