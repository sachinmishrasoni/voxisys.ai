import { Box, Paper, Typography } from '@mui/material'

const PageNotFound = () => {
  return (
    <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Paper elevation={0} sx={{
            p: 4,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant='h1' fontWeight={'bold'} lineHeight={0.8}>4O4</Typography>
            <Typography variant='h5'>Page Not Found</Typography>
            <Typography variant='caption' mt={0.5}>Oops! The page you are looking for does not exist.</Typography>
        </Paper>
    </Box>
  )
}

export default PageNotFound