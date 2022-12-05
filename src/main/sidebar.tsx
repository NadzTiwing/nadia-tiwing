import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Tabs,
  Tab,
  Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from './content/about_me';
import Resume from './content/resume';
import Portfolio from './content/portfolio';
import Projects from './content/projects';
import Blogs from './content/blogs';
import Template from './content/template';

const drawerWidth = 300;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
   windowResponse?: () => Window;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function ResponsiveDrawer(props: Props) {
  const { windowResponse } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const [value, setValue] = React.useState(0);
  
  const navLinks=[
    {
      index:0,
      id:'about_me',
      title:'About Me',
      icon: PersonIcon,
      content: <AboutMe isMobile={ isMobile }/>
    },
    {
      index:1,
      id:'resume',
      title:'Resume',
      icon: FeedIcon,
      content: <Resume isMobile={ isMobile }/>
    },
    {
      index:2,
      id:'projects',
      title:'Projects',
      icon: AssignmentIcon,
      content: <Projects isMobile={ isMobile }/>
    },
    {
      index:3,
      id:'portfolio',
      title:'Portfolio',
      icon: FactCheckIcon,
      content: <Portfolio isMobile={ isMobile }/>
    },
    {
      index:4,
      id:'blogs',
      title:'Blogs',
      icon: BookOnlineIcon,
      content: <Blogs isMobile={ isMobile }/>
    },
  ];

  const handleChange = (event: React.SyntheticEvent) => {
    let tabId = event.currentTarget.getAttribute('id')?.toString();
    let tab = tabId?.split('-');
    let tabIndex = tab? parseInt(tab[2]):0;
    setValue(tabIndex);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
  }
  
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  

  const drawer = (
    <div className="bg-dark">
      <Avatar
      alt="nadia-tiwing"
      src="./img/nadz.png"
      id='profile-pic'
      />
      <Tabs
        orientation="vertical"
        value={value}
        onChange={evt => handleChange(evt)}
        aria-label="Sidebar"
        sx={{  py:1 }}
        className='nav-links'
      >
        {navLinks.map( (link, index) =>(
          <Tab
          label={link.title} {...a11yProps(link.index)} 
          className='nav-links'
          />
        ))}
      </Tabs>
    </div>
  );

  const container = windowResponse !== undefined ? () => windowResponse().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'primary.dark' }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          width: { sm: `0` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'primary.dark' }}
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
            bgcolor: 'primary.dark'
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            bgcolor: 'primary.dark'
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, py: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: 'primary.dark' }}
      >
        {/* <Toolbar /> */}
        {navLinks.map( (link, index) =>(  
          <TabPanel value={value} index={link.index}>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 5 }}
              > 
                <Template 
                title={link.title} 
                details={link.content} 
                isMobile={ isMobile }
                />
              </motion.div>
            </AnimatePresence>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
