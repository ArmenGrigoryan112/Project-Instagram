import React, { useCallback, useState } from 'react'

export default function showComments(Component){
    return (props)=>{
        const [show, setShow] = useState(false)
    const toggleShow = useCallback(()=>{
    setShow(prev => !prev)
    },[])
        return <Component {...props} {...{show, toggleShow}}/>
    }
}