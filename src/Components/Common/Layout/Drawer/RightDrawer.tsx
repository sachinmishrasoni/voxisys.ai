import { useState } from 'react';
import { Drawer, List, ListItemText, IconButton, Box, Typography, ListItemButton, Stack, Button, styled } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import DropdownMenu from '../../DropDownMenu';
import { FiShare } from "react-icons/fi";
import { BiRename } from "react-icons/bi";
import { MdBookmarkBorder } from "react-icons/md";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

const ListItem = styled(ListItemButton)(({ theme }) => ({
    padding: theme.spacing(0.5, 1.5),
    borderRadius: '10px',
}))
const RightDrawer = () => {
    const modalState = useSelector((state: RootState) => state.common.rightModalState);
    const { open } = modalState;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Set the anchor element for the menu
    };

    const handleClose = () => {
        setAnchorEl(null); // Close the menu
    };

    // Toggle drawer open/close
    const toggleDrawer = () => {

    };
    const menuItems = [
        { label: 'Share', icon: <FiShare />, onClick: () => alert('Share clicked') },
        { label: 'Rename', icon: <BiRename />, onClick: () => alert('Rename clicked') },
        { label: 'Bookmark', icon: <MdBookmarkBorder />, onClick: () => alert('Bookmark clicked') },
        { label: 'Archive', icon: <LuArchive />, onClick: () => alert('Archive clicked') },
        { label: 'Delete', icon: <RiDeleteBinLine color='red' />, onClick: () => alert('Delete clicked') }
    ];
    return (
        <Drawer
            anchor="right"
            variant="persistent"
            open={open}
            onClose={toggleDrawer}
            sx={{
                width: open ? 260 : 0, // Adjust width based on state
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? 260 : 0, // Adjust width of the drawer itself
                    boxSizing: 'border-box',
                    transition: 'width 0.3s', // Smooth transition
                    padding: open ? 1.5 : 0, // Adjust padding based on state
                    overflowX: 'hidden',
                },
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h6" fontWeight={'bold'}>Chat History</Typography>
                <IconButton size='small'>
                    <IoClose size={22} />
                </IconButton>
            </Stack>
            <List sx={{
                maxHeight: 'calc(100vh - 95px)',
                overflowY: 'auto',
                "& .MuiListItemButton-root .MuiIconButton-root": {
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                },
                "& .MuiListItemButton-root:hover .MuiIconButton-root": {
                    opacity: 1
                }
            }}>
                <Typography variant='caption' color='gray'>Today</Typography>
                {
                    Array(25).fill(0).map((_, index) => (
                        <ListItem key={index} >
                            <ListItemText primary={`Chat ${index + 1}`} />
                            <IconButton size='small' onClick={handleClick}>
                                <IoIosMore size={20} />
                            </IconButton>
                        </ListItem>
                    ))
                }
            </List>
            <Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', px: 1 }}>
                <Button variant='outlined' color='secondary' fullWidth
                    sx={{
                        mt: 2, borderRadius: 5, textTransform: 'none',
                        display: 'flex', alignItems: 'center', gap: 1,
                    }}>
                    <PiNotePencilBold size={20} />
                    New Chat
                </Button>
            </Box>

            {anchorEl && (
                <DropdownMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    menuItems={menuItems}
                    anchorOffset={{ vertical: 10, horizontal: 0 }}
                    transformOffset={{ vertical: 10, horizontal: 150 }}
                />
            )}

        </Drawer>
    )
}

export default RightDrawer