import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Tabs,
  Tab,
  Avatar,
  Grid
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
  window?: () => Window;
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
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);
  
  const navLinks=[
    {
      index:0,
      id:'about_me',
      title:'About Me',
      icon: PersonIcon,
      content: <AboutMe/>
    },
    {
      index:1,
      id:'resume',
      title:'Resume',
      icon: FeedIcon,
      content: <Resume/>
    },
    {
      index:2,
      id:'projects',
      title:'Projects',
      icon: AssignmentIcon,
      content: <Projects/>
    },
    {
      index:3,
      id:'portfolio',
      title:'Portfolio',
      icon: FactCheckIcon,
      content: <Portfolio/>
    },
    {
      index:4,
      id:'blogs',
      title:'Blogs',
      icon: BookOnlineIcon,
      content: <Blogs/>
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
  

  const drawer = (
    <div>
      <Avatar
      alt="Remy Sharp"
      src="/img/nadz.png"
      id='profile-pic'
      />
      <Typography variant="h2" sx={{color:'primary.main'}} className='center'>NADIA A. TIWING</Typography>
      <Typography variant="h4" sx={{color:'primary.main'}} className="center">Software Engineer</Typography>
      {/* <Toolbar /> */}
      <Divider />
      <Tabs
        orientation="vertical"
        value={value}
        onChange={evt => handleChange(evt)}
        aria-label="Sidebar"
        sx={{ borderRight: 1, color:'primary.light', py:1}}
        className='nav-links'
        indicatorColor='primary'
      >
        {navLinks.map( (link, index) =>(
          <Tab 
          icon={<link.icon/>}
          iconPosition="start"
          label={link.title} {...a11yProps(link.index)} 
          sx={{color:'primary.light', px:8, my:0}} 
          className='nav-links'
          />
        ))}
      </Tabs>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'primary.dark' }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          width: { sm: `0` },
          ml: { sm: `${drawerWidth}px` },
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
                <Template title={link.title} details={link.content}/>
              </motion.div>
            </AnimatePresence>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
