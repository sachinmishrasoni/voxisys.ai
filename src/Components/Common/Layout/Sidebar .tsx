import { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import SearchBox from '../../SearchBox';
import { BsCalendar4Event } from "react-icons/bs";
import LeftDrawer from './Drawer/LeftDrawer';
import RightDrawer from './Drawer/RightDrawer';
import Header from './Header';
// import { BiMessageSquareAdd } from "react-icons/bi";

const Sidebar = () => {
    const [open, setOpen] = useState(false); // State to control drawer open/close

    // Toggle drawer open/close
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            {/* Sidebar Drawer */}
            <LeftDrawer open={open} setIsOpen={setOpen} />
            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1 }}>
               <Header />
                <Container maxWidth='md' disableGutters>
                    <Typography variant="h4">Main Content Area</Typography>
                    this is text
                    lorem20000
                    <br />
                    <SearchBox />
                </Container>
            </Box>
           <RightDrawer />
        </Box>
    );
};

export default Sidebar;
