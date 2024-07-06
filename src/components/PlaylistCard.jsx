import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle
 } from '../utils/constants'
import { CheckCircle, PlaylistPlayRounded } from "@mui/icons-material"

const PlaylistCard = ({playlists: { id: { playlistId }, snippet }}) => {
  return (
    <Card sx={{
      width: { md: '320px', xs: '100%' },
      boxShadow: 'none',
      borderRadius: 0
    }}>
      <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: 358, height: 180}}
      />
      </Link>
      <CardContent
        sx={{
          backgroundColor: '#ED3B0D',
          height: '106px',
          opacity: '80%'
        }}
      >
        <Link to={snippet?.channelId ? `/playlist/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle1"
          fontWeight="bold" color="#fff"
        >
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2"
          fontWeight="bold" color="#000"
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{
            fontSize: 12,
            color: 'gray',
            ml: '5px'
          }}/>
        </Typography>
        </Link>
        <PlaylistPlayRounded sx={{fontSize: 25, color: '#fff', ml: '2px'}} />
      </CardContent>
    </Card>
  )
}

export default PlaylistCard