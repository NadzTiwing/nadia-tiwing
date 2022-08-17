import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Flex, Spacer,
    Box, Center, Grid, GridItem, Square, Text,
    Avatar, AvatarBadge, AvatarGroup,
    Heading,
    Container,
    Button,
  } from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icons'
import { MdHome, MdAccountBox, MdInsertDriveFile, MdWeb, MdAssignmentLate} from 'react-icons/md'

interface Links{
  id:string,
  title:string,
  icon: any
}

interface Nav{
  links:Array<Links>
}

const Home=() =>{
  const btnColor = 'whiteAlpha';
  //<Icon as={MdHome} w={10} h={5} color={'gray.300'}/> <Text color={'white'}>Home</Text>
  const navLinks=[
    {
      id:'home',
      title:'Home',
      icon: MdHome
    },
    {
      id:'about_me',
      title:'About Me',
      icon: MdAccountBox
    },
    {
      id:'resume',
      title:'Resume',
      icon: MdInsertDriveFile
    },
    {
      id:'projects',
      title:'Current Projects',
      icon: MdAssignmentLate
    },
    {
      id:'portfolio',
      title:'Portfolio',
      icon: MdWeb
    },
  ];

  const linkStyle={
    scheme:'whiteAlpha',
    w:10,
    h:5,
    color:'white'
  };
  
  return(
    <Grid
      templateAreas={`"nav main"
                      "nav footer"`}
      gridTemplateRows={'100vh 1fr 30px'}
      gridTemplateColumns={'300px 1fr'}
      h='100vh'
      gap='0'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.400' area={'nav'}>
        <Container maxW='md'>
            <Box display="flex" alignItems="center" justifyContent="center" p={5}>
                <Avatar size='2xl' name='Segun Adebayo' src='/img/liza.jpg' />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" pb={2} >
                <Heading as='h3' size='lg' color={'white'}>
                  Nadia Tiwing
                </Heading>
            </Box>
            <Flex align="center" justify="center">
                <Text color="white">Software Engineer</Text>
            </Flex>
            <Flex align="start" justify="start">
              <List spacing={5} py={10} >
                  {navLinks.map(link =>(
                    <ListItem id={link.id} key={link.id}>
                      <Button colorScheme={linkStyle.scheme} variant='link'>
                        <Icon as={link.icon} w={linkStyle.w} h={linkStyle.h} color={linkStyle.color}/> <Text color={linkStyle.color}>{link.title}</Text>
                      </Button> 
                    </ListItem>
                  ))}
              </List>
            </Flex>

            <Flex align="end" justify="center" pt={100}>
              <p>© Copyright 2022</p>
            </Flex>
        </Container>
      </GridItem>
      <GridItem pl='2' area={'main'}>
        Main
      </GridItem>

    </Grid>
  );
}
export default Home;