import React from 'react'
import { alpha, Box, Stack, Typography } from '@mui/material'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: (theme) => `linear-gradient(transparent, ${alpha(theme.palette.secondary.main, 0.3)})`,
                // backgroundImage: `url(${BackgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <Box sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack sx={{ position: 'absolute', top: 50, }}>
                    <Typography variant='h4' fontWeight={'600'}>Voxisys.ai</Typography>
                </Stack>

                {children}
                
                <Stack direction={'row'} gap={1.5} sx={{ position: 'absolute', bottom: 5, }}>
                    <Typography variant='caption' >Terms of Service</Typography>
                    <Typography variant='caption'>|</Typography>
                    <Typography variant='caption' >Privacy Policy</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default AuthLayout