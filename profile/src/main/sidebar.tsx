import * as React from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Avatar,
    Divider,
    Grid
} from '@mui/material'
import { orange, brown } from '@mui/material/colors';
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

export default function Sidebar() {
  const [value, setValue] = React.useState(0);
  const sidebarBg = orange[500];
  const navText = orange[200];
  const coffee = brown[900];
  
  const navLinks=[
    {
      index:4,
      id:'about_me',
      title:'About Me',
      icon: PersonIcon,
      content: <AboutMe/>
    },
    {
      index:5,
      id:'resume',
      title:'Resume',
      icon: FeedIcon,
      content: <Resume/>
    },
    {
      index:6,
      id:'projects',
      title:'Current Projects',
      icon: AssignmentIcon,
      content: <Projects/>
    },
    {
      index:7,
      id:'portfolio',
      title:'Portfolio',
      icon: FactCheckIcon,
      content: <Portfolio/>
    },
    {
      index:8,
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
    console.log(value);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={evt => handleChange(evt)}
        aria-label="Sidebar"
        sx={{ borderRight: 1, color:coffee, bgcolor: sidebarBg, py:1}}
        className='nav-links'
        indicatorColor='primary'
      >
        <Avatar
        alt="Remy Sharp"
        src="/img/nadz.png"
        id='profile-pic'
        />
        <Typography variant="h2" sx={{color:coffee}}>NADIA A. TIWING</Typography>
        <Typography variant="h4" sx={{color:coffee}}>Software Engineer</Typography>
        <Divider sx={{pt:3}}/>
        {navLinks.map( (link, index) =>(
          <Tab 
          icon={<link.icon/>}
          iconPosition="start"
          label={link.title} {...a11yProps(link.index)} 
          sx={{color:navText, px:8, my:0}} 
          className='nav-links'
          />
        ))}
        
      </Tabs>
      {navLinks.map( (link, index) =>(  
        <TabPanel value={value} index={link.index}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 5 }}
            > 
              {link.content}
            </motion.div>
          </AnimatePresence>
        </TabPanel>
      ))}
    </Box>
  );
}
