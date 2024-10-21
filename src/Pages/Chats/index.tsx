import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchBox from '../../Components/SearchBox'
import ChipBox from '../../Components/ChipBox'

const Chats = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 48px)',
      overflow: 'auto',
      // backgroundColor: 'lightblue',
      position: 'relative',
    }}>
      <Container maxWidth='md' disableGutters sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}>
        <Typography variant='h5'>What can I help you with?</Typography>
        <SearchBox />
        <ChipBox />
      </Container>

      <Box component={'footer'} sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
      }}>
        <Container maxWidth='md' sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* <SearchBox /> */}
          <Typography variant='caption'>Voxisys.ai can make mistakes. Check important info.</Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Chats