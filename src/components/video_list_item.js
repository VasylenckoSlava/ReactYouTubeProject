import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
        return (
            <li onClick={() => onVideoSelect(video)} className='1'>
                <div className='2'>
                    <div className='3'>
                        <img src={imageUrl} alt="" />
                    </div>

                    <div className='4'>
                        <div className='5'>{video.snippet.title}</div>
                    </div>
                    <input type="button" value="play"/>
                </div>
            </li>
        );
    };


export default VideoListItem;
