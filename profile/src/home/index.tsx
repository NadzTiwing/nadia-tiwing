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
  } from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icons'
import { MdHome } from 'react-icons/md'

const Home=() =>{
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
        <Box display="flex" alignItems="center" justifyContent="center" pb={4} >
            <Heading as='h3' size='lg'>
                Nadia Tiwing
            </Heading>
        </Box>
        <List spacing={5} py={2} >
            <ListItem> <Icon as={MdHome} /> Home</ListItem>
            <ListItem> <Icon as={MdHome} /> About Me</ListItem>
            <ListItem> <Icon as={MdHome} /> Resume</ListItem>
            <ListItem> <Icon as={MdHome} /> Current Projects</ListItem>
            <ListItem> <Icon as={MdHome} /> Portfolio</ListItem>
        </List>
        <Center>
            <p>© Copyright 2022</p>
        </Center>
    </Container>
  </GridItem>
  <GridItem pl='2' area={'main'}>
    Main
  </GridItem>

</Grid>
    );
}
export default Home;