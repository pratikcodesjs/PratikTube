import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, ThemeProvider } from '@mui/material'
import theme from './theme'

import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'

const App = () => (
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Box sx={{backgroundColor: theme.palette.primary.main}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      {/* <Route path='/playlist/:id' element={<PlaylistDetail />} /> */}
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
  </ThemeProvider>
)

export default App