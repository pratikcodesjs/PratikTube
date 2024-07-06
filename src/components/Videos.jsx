import { Stack, Box } from '@mui/material'
import { ChannelCard, VideoCard, PlaylistCard } from './'
const Videos = ({videos, direction, justifyContent}) => { 
  return (
    <Stack direction={direction || 'row'}
     flexWrap='wrap'
     justifyContent={justifyContent || 'start'}
     gap={2}
     >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard
          video={item}
          />}
          {item.id.playlistId && <PlaylistCard
            playlists={item}
          />}
          {item.id.channelId && <ChannelCard
          channelDetail={item}
          />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos