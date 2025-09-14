import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import Header from './Header'
import BackgroundImg from '../../assets/background.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            height: '100vh',
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }}>
            <Header />
            <Box sx={{
                height: '100vh',
                backgroundImage: 'linear-gradient(transparent, white)',
            }}>
                <Container sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Typography variant='h4' fontWeight={'bold'}>Voxisys.ai</Typography>
                    <Typography textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat, beatae itaque earum dolor modi sequi, doloribus cupiditate natus neque, eaque omnis voluptatem quaerat sapiente ex nemo. Architecto reprehenderit, doloribus vero, hic, libero cum quod non exercitationem repellat ea adipisci alias tempora voluptatibus quasi consequatur aliquam soluta veniam inventore qui!</Typography>
                    <Stack direction={'row'} gap={2} sx={{
                        '& button': {
                            borderRadius: 5,
                            px: 3.5
                        }
                    }}>
                        <Button variant='outlined' color='secondary'>Sign Up</Button>
                        <Button variant='contained' color='secondary' onClick={() => navigate('/voxisys.ai/login')}>Log In</Button>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}>
                <Container>
                    <Box sx={{ py: 10 }}>
                        <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} >Heading 1</Typography>
                        <Typography mt={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit iusto odit debitis a ex mollitia, nobis voluptate ipsa repudiandae aliquid esse ea, minus voluptatibus commodi asperiores dolorem aspernatur laudantium consequatur ut quo saepe! Aperiam omnis tempora fugit consequatur sunt reiciendis autem non officiis necessitatibus architecto. Culpa, inventore? Reiciendis, quaerat aperiam, asperiores voluptas quae tenetur neque ipsa fugiat laudantium eius consectetur quam, explicabo rem mollitia eligendi quibusdam repudiandae eum dolor accusamus laboriosam quod ex corrupti iusto minus! Veniam obcaecati atque tempora provident, consectetur ipsum sit? Atque molestiae iure, id neque beatae autem blanditiis facilis eligendi obcaecati explicabo nulla eius saepe?</Typography>

                        <Stack direction={'row'}>
                            <Paper sx={{
                                width: 300,
                                padding: 2,
                                borderRadius: 3
                            }}>
                                <Box sx={{ height: 150, backgroundColor: 'lightblue' }} />
                                <Typography variant='h6'>Heading 2</Typography>
                            </Paper>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Home;