import { useState } from 'react';
import { IconButton, Typography, Stack, AppBar, Toolbar, Button } from '@mui/material';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { LuMoonStar } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { toggleLeftModal, toggleRightModal } from '../../../../app/slices/common/commonSlice';
import ModalMenu from '../../../ModalMenu';

const Header = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Set the anchor element for the menu
    };

    const handleClose = () => {
        setAnchorEl(null); // Close the menu
    };
    return (
        <AppBar position='sticky' sx={{
            top: 0, boxShadow: 'none'
        }}>
            <Toolbar variant='dense' disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'background.default' }}>
                <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                    <IconButton
                        onClick={() => dispatch(toggleLeftModal())}
                    >
                        <HiOutlineMenuAlt2 size={22} />
                    </IconButton>
                    <IconButton>
                        <PiNotePencilBold size={22} />
                    </IconButton>
                </Stack>
                <Button
                    color='secondary'
                    sx={{ px: 2, borderRadius: 5, display: 'flex', alignItems: 'center', gap: 1 }}
                    onClick={handleClick}
                >
                    <Typography variant='body2'>Modal 3.0</Typography>
                    <IoIosArrowDown />
                </Button>
                <IconButton onClick={() => dispatch(toggleRightModal())}>
                    <LuMoonStar size={22} />
                </IconButton>
            </Toolbar>

            {anchorEl && (
                <ModalMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                />
            )}
        </AppBar>
    )
}

export default Header