import * as React from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Avatar,
    Divider
} from '@mui/material'
import { orange, brown } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

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
        id:'about_me',
        title:'About Me',
        icon: PersonIcon
    },
    {
        id:'resume',
        title:'Resume',
        icon: FeedIcon
    },
    {
        id:'projects',
        title:'Current Projects',
        icon: AssignmentIcon
    },
    {
        id:'portfolio',
        title:'Portfolio',
        icon: FactCheckIcon
    },
    {
        id:'blogs',
        title:'Blogs',
        icon: BookOnlineIcon
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
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
            label={link.title} {...a11yProps(index)} 
            sx={{color:navText, px:8, my:0}} 
            className='nav-links'
            />
        ))}
        
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
