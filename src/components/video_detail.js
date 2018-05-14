import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading ...</div>
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div style={{
            paddingTop: 8
        }}>
          <div className='7'>
              <iframe className='embed' src={url}  frameBorder="0" allowFullScreen title="Unique"/>
          </div>
            <div className='9'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;