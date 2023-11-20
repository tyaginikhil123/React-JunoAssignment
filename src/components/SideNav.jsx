import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import profile from "../images/Image.png";

const drawerWidth = 240;

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [activeRoute, setActiveRoute] = React.useState("/"); // Set the initial active route

  const handleItemClick = (route) => {
    navigate(route);
    setMobileOpen(false);
    setActiveRoute(route);
  };

  const drawer = (
    <div>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h1 style={{textAlign:"center",fontSize:'22px',color:'grey',width:'85%' ,borderTop:'4px solid grey',borderBottom:'4px solid grey',margin:'px',padding:'15px'}}>LOGO HERE</h1>
      </Box>
      <Divider />

     <List>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => handleItemClick("/overview")} >
      <ListItemText style={{ textAlign: "justify",color: activeRoute === "/overview" ? 'blue' : 'grey' }}>OverView</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => handleItemClick("/onboarding")}>
      <ListItemText style={{ textAlign: "justify",color: activeRoute === "/onboarding" ? 'blue' : 'grey' }}>Onboarding</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => navigate("/")}>
      <ListItemText style={{ textAlign: "justify",color: activeRoute === "/" ? 'blue' : 'grey' }}>Monitoring</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => handleItemClick("/flagging")}>
      <ListItemText style={{ textAlign: "justify",color: activeRoute === "/flagging" ? 'blue' : 'grey'}}>Flagging</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => handleItemClick("/")}>
      <ListItemText style={{ textAlign: "justify",color: 'grey' }}>Source Of Income</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem style={{ textAlign: "center" }} disablePadding>
    <ListItemButton onClick={() => handleItemClick("/overview")}>
      <ListItemText style={{ textAlign: "justify",color:'grey' }}>UAR</ListItemText>
    </ListItemButton>
  </ListItem>
  <ListItem sx={{ position: 'absolute', bottom: '50', width: '100%', marginTop:'170%'  }}>
  <Box sx={{ width: '100%', textAlign: 'center' }}>
    <div className="prof" style={{ margin: '10px' }}>
      <img src={profile} alt="profile" />
      <div className="profile-details" style={{ marginLeft: '10px' }}>
        <p style={{ fontWeight: "500", margin: 0 }}>Elon Musk</p>
        <p style={{ color: "rgba(119, 118, 118, 1)", fontSize: "14px", margin: 0 }}>
          elon@twitter.com
        </p>
      </div>
    </div>
  </Box>
</ListItem>
</List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:'white'
        }}
      >
       
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ mr: 2, display: { sm: 'none' } }}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              position: 'absolute', // Set position to 'absolute'
              left: 0,              // Align to the left
            }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default SideNav;