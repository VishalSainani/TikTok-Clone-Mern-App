import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, shares, messages }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    // Video Play stop it and vice versa
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    else {
      videoRef.current.play();
      setPlaying(true)

    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        src={url}>
      </video>
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />

    </div>
  )
}

export default Video