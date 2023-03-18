import { memo } from 'react'

function Comments({name, body}) {
  return (
    <>
        <p className="description"><span>{name} </span> {body}</p>
    </>
  )
}

export default memo(Comments)