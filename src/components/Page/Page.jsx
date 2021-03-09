import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextContainer from '../TextContainer/TextContainer';
import Button from '@material-ui/core/Button'
import { apiService } from '../../services/giffy'

const Page = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [gifData, setGifData] = useState()

  const onClickSearch = async () => {
    const data = await apiService.getGifBySearch(searchTerm)
    setGifData(data)
  }

    return (
        <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                <TextContainer onChange={setSearchTerm} value={searchTerm}/>
                <Button variant="contained" onClick={() => onClickSearch() } style={{ marginTop: 10, backgroundColor: '#a83232' }}>Search Gifs!!!!</Button>
                {gifData && <p>This is your share url {gifData.data.data[0].images.downsized.url}</p>}
              </Container>
        </React.Fragment>
    );
};

export default Page;