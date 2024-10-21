import { ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import LeftDrawer from './Drawer/LeftDrawer'
import Header from './Header'
import RightDrawer from './Drawer/RightDrawer'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            component={'main'}
            sx={{ display: 'flex' }}
        >
            <LeftDrawer />
            <Box component={'section'} sx={{ flexGrow: 1, }}>
                <Header />
                <Container>
                    {children}
                </Container>
            </Box>
            <RightDrawer />
        </Box>
    )
}

export default Layout