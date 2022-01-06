import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
function VideoPlayer() {
  const [mute, setMuted] = useState(true)
  return (
    <div className=' h-80 w-96'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        muted={true}
        volume={10}
        playIcon={true}
        controls={false}
        height={465}
        width={800}
      />
    </div>
  )
}

export default VideoPlayer
