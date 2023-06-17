
"use client"
import { Audio, BallTriangle } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div><BallTriangle
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  /></div>
  )
}

export default Loading