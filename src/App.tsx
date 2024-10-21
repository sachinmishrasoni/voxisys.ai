
import { Box, Container } from '@mui/material'
import './App.css'
// import BrokenComponent from './Components/BrokenComponent '
import ErrorBoundary from './Components/Common/Errors/ErrorBoundary'
import LeftDrawer from './Components/Common/Layout/Drawer/LeftDrawer'
import Header from './Components/Common/Layout/Header'
import RightDrawer from './Components/Common/Layout/Drawer/RightDrawer'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Common/Layout/Footer'

function App() {

  return (
    <ErrorBoundary>
      <Box
        component={'main'}
        sx={{ display: 'flex' }}
      >
        <LeftDrawer />
        <Box component={'section'} sx={{ flexGrow: 1, }}>
          <Header />
          {/* <Container maxWidth='md' disableGutters> */}
            <Outlet />
          {/* </Container> */}
        </Box>
        <RightDrawer />
      </Box>
    </ErrorBoundary>
  )
}

export default App
