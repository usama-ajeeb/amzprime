import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
function VideoPlayer() {
  const [mute, setMuted] = useState(true)
  return (
    <div className=' '>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        muted={true}
        volume={10}
        playIcon={true}
        controls={false}
        width={500}
      />
    </div>
  )
}

export default VideoPlayer
