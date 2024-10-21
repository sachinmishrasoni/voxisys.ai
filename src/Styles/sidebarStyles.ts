import { makeStyles, Theme } from "@mui/material";

const useSidebarStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 200,
      boxSizing: 'border-box',
      transition: 'width 0.3s',
    },
  },
  drawerCollapsed: {
    width: 60,
    '& .MuiDrawer-paper': {
      width: 60,
    },
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 60,
  },
  menuButtonOpen: {
    left: 200,
  },
  avatarContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
  },
}));

export default useSidebarStyles;
