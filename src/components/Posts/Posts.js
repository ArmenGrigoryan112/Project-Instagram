import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postAPI'
import { selectPosts } from '../../store/slices/posts/PostsSlice'
import { resetSearch, selectSearch } from '../../store/slices/search/searchSlice'
import Loading from '../Loading/Loading'
import Post from '../Post/Post'

function Posts() {
    const dispatch = useDispatch()
    const {postsData:posts,isLoading} = useSelector(selectPosts)
    const search =useSelector(selectSearch)
    useEffect(()=>{
        if (!posts.length) {
            dispatch(fetchPosts())
        }
        return ()=>{
            dispatch(resetSearch())
        } 
    },[])

    const filteredPosts = useMemo(()=>{
        return [...posts.filter(post => post.name.includes(search))]
    },[search,posts])

  return (
    <>
        {
          isLoading ? <Loading/> : 
          filteredPosts.map(el => 
          <Post key={el.id} 
          id={el.id} 
          comments={el.comments} 
          img={el.img} 
          name={el.name} 
          likesCount={el.likesCount} 
          postText={el.postText} 
          timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts