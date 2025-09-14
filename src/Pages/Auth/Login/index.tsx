import { alpha,  Button, Paper, Stack, TextField, Typography } from '@mui/material';
import AuthLayout from '../Layout';
import { useNavigate } from 'react-router-dom';
// import BackgroundImg from '../../../assets/background.jpg'
import { motion } from 'framer-motion';
import ThirdParty from '../Components/ThirdParty';

const pageVariants = {
  initial: { opacity: 0, y: 50 },  // Start off-screen with reduced opacity
  animate: { opacity: 1, y: 0 },  // Fade in and move to the final position
  exit: { opacity: 0, y: -50 }    // Fade out and move off-screen
};

const pageTransition = {
  duration: 0.5, // Set animation duration
  ease: 'easeInOut' // Define easing for smoother animation
};

const Login = () => {
  const navigate = useNavigate();
  
  document.title = 'Log In - Voxisys.ai';
  return (
    <AuthLayout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
      <Paper
        sx={{
          width: { xs: 'auto', sm: 400 },
          minWidth: 400,
          borderRadius: 3,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.1),
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          border: '1px solid',
          borderColor: (theme) => alpha(theme.palette.secondary.main, 0.3)
        }}
      >
        <Typography variant='h5' mb={2} fontWeight={'bold'}>Welcome back</Typography>
        <TextField fullWidth label='Email or Phone' />
        <Button fullWidth variant='contained' sx={{ mt: 1, py: 1.2, borderRadius: 3 }}>Continue</Button>

        <Stack direction={'row'} gap={0.5}>
          <Typography>Don&apos;t have an account?</Typography>
          <Typography color='secondary'
            onClick={() => navigate('/voxisys.ai/signup')}
           sx={{
            cursor: 'pointer',
            userSelect: 'none',
            px: 1.5,
            borderRadius: 5,
            position: 'relative',
            backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.1),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '0%',
              height: '100%',
              backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.3),
              borderRadius: 5,
            },
            '&:hover::before': {
              width: '100%',
              transition: 'width 0.3s ease-in-out',
            }
          }}>Sign Up</Typography>
        </Stack>
        <ThirdParty />
      </Paper>
      </motion.div>
    </AuthLayout>
  )
}

export default Login;