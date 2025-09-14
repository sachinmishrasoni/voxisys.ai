import AuthLayout from '../Layout'
import { alpha, Button, Paper, TextField, Typography } from '@mui/material'
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import ThirdParty from '../Components/ThirdParty';


const pageVariants = {
    initial: { opacity: 0, y: 50 },  // Start off-screen with reduced opacity
    animate: { opacity: 1, y: 0 },  // Fade in and move to the final position
    exit: { opacity: 0, y: -50 }    // Fade out and move off-screen
};

const pageTransition = {
    duration: 0.5, // Set animation duration
    ease: 'easeInOut' // Define easing for smoother animation
};

const ForgetPassword = () => {
    // const navigate = useNavigate();

    document.title = 'Sign Up - Voxisys.ai';
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
                        gap: 1.5,
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.1),
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'none',
                        border: '1px solid',
                        borderColor: (theme) => alpha(theme.palette.secondary.main, 0.3)
                    }}
                >
                    <Typography variant='h5' fontWeight={'bold'}>Reset Your Password</Typography>
                    <Typography variant='body2' mb={1}>Enter your Phone number or Email address and we will send you instructions to reset your password.</Typography>
                    <TextField fullWidth label='Email or Phone' />
                    <Button fullWidth variant='contained' sx={{ mt: 1, py: 1.2, borderRadius: 3 }}>Continue</Button>

                    <Button fullWidth sx={{  py: 1.2, borderRadius: 3 }}>Back to Login</Button>
                </Paper>
            </motion.div>
        </AuthLayout>
    )
}

export default ForgetPassword;