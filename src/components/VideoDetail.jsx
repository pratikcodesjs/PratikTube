import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle, Visibility, ThumbUp } from '@mui/icons-material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI' 


const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id])
  if(!videoDetail) return 'Loading...'
  return (
    <Box minHeight='95vh'>
      <Stack direction={{sx: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player' controls />
            <Typography color='#000' variant='h5' fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2}
            sx={{
              color: '#000'
              }} >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h4'}} color="#000" bgcolor='red' padding='8px' border="1px solid #e3e3e3" borderRadius='8%'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: '#5a5a5a',
                    ml: '8px'
                  }} />
                </Typography>
              </Link>
              <Stack direction='row' gap="20px" alignItems="center">
                <Typography variant='body1' sx={{opacity: '0.7'}}>
                  { parseInt(videoDetail?.statistics?.viewCount).toLocaleString() } Views
                  <Visibility sx={{fontSize: '15px', color: '5a5a5a', ml: '8px'}}/>
                </Typography>
                <Typography variant='body1' sx={{opacity: '0.7'}}>
                  { parseInt(videoDetail?.statistics?.likeCount).toLocaleString() } Likes <ThumbUp sx={{fontSize: '15px', color: '5a5a5a', ml: '8px'}}/>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems='center'>
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail