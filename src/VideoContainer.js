import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/contants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const result = await data.json();
        setVideos(result.items)
    }
    if (videos && videos.length === 0) return null;
    return (
        <div className='flex flex-wrap justify-between'>
            <AdVideoCard info={videos[0]}/>
            {videos?.map((video, index) => {
                return (
                    <Link to={'/watch?v=' + video.id} key={index}><VideoCard info={video}  /></Link>
                )
            })}

        </div>
    )
}

export default VideoContainer