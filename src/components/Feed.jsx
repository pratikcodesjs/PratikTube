import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx:0, md: 2} }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography 
        className='copyright' 
        variant='body2'
        sx={{mt: 1.5, color: '#5a5a5a'}}
        >
          Pratik Gaikwad © 2024
        </Typography>
      </Box>
      <Box sx={{
        padding: 2,
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography variant='h4'
        fontWeight='bold' mb={2}
        sx={{
          color: 'fff'
        }}
        >
          {selectedCategory} <span style={{color: '#FC1503'}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed