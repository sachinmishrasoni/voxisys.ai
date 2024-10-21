import { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, IconButton, Box, Typography, ListItemButton, Tooltip, Stack, Avatar } from '@mui/material';
// import { TbMessage2Plus } from "react-icons/tb";
import { TbMessage } from "react-icons/tb";
import { LuBookmarkMinus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
// import { BsCalendar4Event } from "react-icons/bs";
import DropdownMenu from '../../DropDownMenu';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

const DrawerItem = ({ open, icon, label }: { open: boolean, icon: React.ReactNode, label: string }) => (
    <ListItemButton>
        <Tooltip arrow title={label} placement='right'>
            <ListItemIcon>{icon}</ListItemIcon>
        </Tooltip>
        <ListItemText
            primary={label}
            sx={{
                transition: 'opacity 0.3s, transform 0.3s',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-20px)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        />
    </ListItemButton>
);

const LeftDrawer = () => {
    const modalState = useSelector((state: RootState) => state.common.leftModalState);
    const { open } = modalState;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Set the anchor element for the menu
    };

    const handleClose = () => {
        setAnchorEl(null); // Close the menu
    };

    // Toggle drawer open/close
    // const toggleDrawer = () => {
    //     setOpen(!open);
    // };

    const menuItems = [
        { label: 'My Plan', icon: <AiOutlineStar />, onClick: () => alert('My Plan clicked') },
        { label: 'Sachin Mishra', icon: <FaRegUser />, onClick: () => alert('Profile clicked') },
        { label: 'sachinmishraf@gmail.com', icon: <MdOutlineMailOutline />, onClick: () => alert('Email clicked') },
        { label: 'Log Out', icon: <RiLogoutCircleRLine />, onClick: () => alert('Log Out clicked') }
    ];

    const drawerItems = [
        // { icon: <TbMessage2Plus size={22} />, label: 'New Chat', position: 'top' },
        // { icon: <BsCalendar4Event size={20} />, label: 'Events', position: 'top' },
        { icon: <TbMessage size={22} />, label: 'Chats', position: 'top' },
        { icon: <LuBookmarkMinus size={22} />, label: 'Bookmarks', position: 'top' },
        { icon: <AiOutlineStar size={22} />, label: 'My Plan', position: 'bottom' }, // Positioned at the bottom
        { icon: <IoSettingsOutline size={22} />, label: 'Settings', position: 'bottom' } // Positioned at the bottom
    ];

    return (
        <Drawer
            anchor="left"
            variant="permanent"
            open={open}
            sx={{
                width: open ? 250 : 60, // Adjust width based on state
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? 250 : 60,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                    overflowX: 'hidden',
                    padding: open ? 1.5 : 0,
                    pb: !open ? 1.5 : 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
        >
            {/* Top Section */}
            <Box>
                {
                    open ? (
                        <Stack direction={'row'} justifyContent={'center'}>
                            <Typography variant="h5" sx={{ p: 0, pb: 0, }}>Voxisys.ai</Typography>
                        </Stack>
                    ) : (
                        <Typography variant="h5" textAlign={'center'} sx={{
                            p: 1.5, pb: 0, pr: 2.5, position: 'relative', fontWeight: 'bold',
                            '& sub': {
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                position: 'absolute',
                                bottom: '3px',
                                right: '13px'
                            }
                        }}>
                            V<sub>.ai</sub>
                        </Typography>
                    )
                }
                <List>
                    {drawerItems.filter(item => item.position === 'top').map((item, index) => (
                        <DrawerItem key={index} open={open} icon={item.icon} label={item.label} />
                    ))}
                </List>
            </Box>

            {/* Bottom Section */}
            <Box>
                <List>
                    {drawerItems.filter(item => item.position === 'bottom').map((item, index) => (
                        <DrawerItem key={index} open={open} icon={item.icon} label={item.label} />
                    ))}
                </List>

                <Stack px={0.8} direction={'row'} alignItems={'center'} gap={1}>
                    <Tooltip title='Profile'>
                        <IconButton size='small' onClick={handleClick}>
                            <Avatar
                                sx={{
                                    width: 35, height: 35, fontSize: 15, fontWeight: 'bold',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    lineHeight: 0.8
                                }}
                                alt='Voxisys'
                            >
                                SM
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <ListItemText
                        primary="Sachin Mishra"
                        sx={{
                            transition: 'opacity 0.3s, transform 0.3s',
                            opacity: open ? 1 : 0,
                            transform: open ? 'translateX(0)' : 'translateX(-20px)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    />
                </Stack>

                {/* Dropdown Menu */}
                {anchorEl && (
                    <DropdownMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        menuItems={menuItems}
                        anchorOffset={{ vertical: 10, horizontal: 60 }}
                        transformOffset={{ vertical: -10, horizontal: 0 }}
                    />
                )}
            </Box>
        </Drawer>
    )
}

export default LeftDrawer