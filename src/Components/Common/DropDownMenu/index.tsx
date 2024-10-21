import React, { ReactNode } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
// import { MoreVert as MoreVertIcon } from '@mui/icons-material';

interface IMenuItem {
    label: string;            // Label for the menu item
    onClick: () => void;      // Action to perform on click
    icon?: ReactNode;         // Optional icon for the menu item
}

interface IProps {
    anchorEl: HTMLElement | null;  // The element that triggers the menu
    open: boolean;                 // Open state of the menu
    onClose: () => void;           // Function to handle menu close
    menuItems: IMenuItem[];        // Array of menu items
    anchorOffset?: { vertical: number, horizontal: number };
    transformOffset?: { vertical: number, horizontal: number };
}

const DropdownMenu: React.FC<IProps> = ({ anchorEl, open, onClose, menuItems, anchorOffset, transformOffset }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{
                elevation: 3,
                sx: {
                    borderRadius: 5,
                    minWidth: 150,
                },
            }}
            anchorOrigin={{
                vertical: anchorOffset?.vertical || 'bottom',
                horizontal: anchorOffset?.horizontal || 'left',
            }}
            // Apply transform origin offset
            transformOrigin={{
                vertical: transformOffset?.vertical || 'top',
                horizontal: transformOffset?.horizontal || 'left',
            }}
        >
            {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick}>
                    {item.icon && <IconButton size="small">{item.icon}</IconButton>}
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default DropdownMenu;
