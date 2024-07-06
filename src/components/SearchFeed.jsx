import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos, setvideos] = useState([])
  const { searchTerm } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
  }, [searchTerm])

  return (
    <Box sx={{
      padding: 2,
      overflowY: 'auto',
      height: '90vh',
      flex: 2
    }}>
      <Typography variant='h4'
      fontWeight='bold' mb={2}
      sx={{
        color: '#000'
      }}
      >
       Search results for: <span style={{color: '#FC1503'}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} justifyContent='space-evenly'/>
    </Box>
  )
}

export default SearchFeed