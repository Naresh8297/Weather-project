import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from "../assests/image.jpg";
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '100%',
    height: '80%',
    margin: '0 auto',
    backgroundSize: 'cover',
    borderRadius: '40px 0 0 20px'
})

const Home = () => {
    const [result, setResult] = useState({})

    return (
        <Component>
            <Image></Image>
            <Box style={{ width: '73%', height: '80%' }}>
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;