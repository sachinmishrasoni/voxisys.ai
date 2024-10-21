import React, { useState } from 'react';
import { Divider, ListItemIcon, Menu, MenuItem, Stack, styled, Typography } from '@mui/material';
import { LuInfo } from "react-icons/lu";
import { RiChat1Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const CMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.3, 1.5),
  borderRadius: '10px',
}));

const ModalMenu: React.FC<IProps> = ({ anchorEl, open, onClose }) => {
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<HTMLElement | null>(null);

  // Open submenu
  const handleSubmenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  // Close submenu
  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            elevation: 5,
            sx: {
              minWidth: 300,
              borderRadius: 3,
              p: 1
            }
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ pl: 2, py: 1, pr: 1 }}>
          <Typography variant='body2'>Modal</Typography>
          <Typography variant='body2'><LuInfo size={18} /></Typography>
        </Stack>

        <CMenuItem>
          <Stack>
            <Typography variant='body2'>Modal 4.o</Typography>
            <Typography variant='caption' color='grey'>Great for most tasks</Typography>
          </Stack>
        </CMenuItem>

        {/* Menu Item with Submenu */}
        <CMenuItem
          onMouseEnter={handleSubmenuOpen}
        //   onMouseLeave={handleSubmenuClose}
          aria-haspopup="true"
        >
          <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
            <Typography variant='body2'>More Modal</Typography>
            <IoIosArrowForward />
          </Stack>
        </CMenuItem>

        <Divider />

        <CMenuItem>
          <ListItemIcon>
            <RiChat1Line size={18} />
          </ListItemIcon>
          <Typography>Temporary Chat</Typography>
        </CMenuItem>
      </Menu>

      {/* Submenu using Menu */}
      <Menu
        anchorEl={submenuAnchorEl}
        open={Boolean(submenuAnchorEl)}
        onClose={handleSubmenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          elevation: 4,
          sx: {
            borderRadius: 2,
            minWidth: 180,
            p: 1,
          },
        }}
      >
        {/* Submenu Items */}
        <CMenuItem onClick={handleSubmenuClose}>
          <Typography variant='body2'>Submenu 1</Typography>
        </CMenuItem>
        <CMenuItem onClick={handleSubmenuClose}>
          <Typography variant='body2'>Submenu 2</Typography>
        </CMenuItem>
        <CMenuItem onClick={handleSubmenuClose}>
          <Typography variant='body2'>Submenu 3</Typography>
        </CMenuItem>
      </Menu>
    </>
  );
};

export default ModalMenu;
