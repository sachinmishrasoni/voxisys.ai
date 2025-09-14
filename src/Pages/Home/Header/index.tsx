import { alpha, AppBar, Avatar, Button, ButtonGroup, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MenuItem = [
    'Product',
    'Features',
    'Document',
    'Pricing',
    'About us',
]
const Header = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Show header after scrolling 75vh (75% of the viewport height)
            if (scrollTop > (window.innerHeight * 0.75)) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position='fixed'
            sx={{
                backgroundColor: theme => alpha(theme.palette.primary.main, 0.5),
                backdropFilter: 'saturate(180%) blur(10px)',
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: visible ? 1 : 0,
            }}
        >
            <Toolbar disableGutters sx={{
                px: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Stack direction={'row'} alignItems={'center'} gap={0.3}>
                    <IconButton>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>V</Avatar>
                    </IconButton>
                    <Typography variant='h5' fontWeight={'bold'}>Voxisys.ai</Typography>
                </Stack>
                <Stack direction={'row'} gap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {MenuItem.map((item, index) => (
                        <Button key={index} color='secondary'>{item}</Button>
                    ))}
                </Stack>
                <Stack direction={'row'} gap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <ButtonGroup variant='text'>
                        <Button color='secondary'>Sign Up</Button>
                        <Button color='secondary'>Log In</Button>
                    </ButtonGroup>
                </Stack>

                <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <HiOutlineMenuAlt3 size={22} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header