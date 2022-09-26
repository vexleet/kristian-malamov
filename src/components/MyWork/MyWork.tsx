import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { PortfolioACF } from '../../types/Portfolio';
import PorfolioPostItem from './PorfolioPostItem';

type PortoflioPost = {
  acf: PortfolioACF;
};

const MyWork = () => {
  const [portfolioPosts, setPortfolioPosts] = useState<PortoflioPost[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api.kristianmalamov.com/wp-json/wp/v2/posts?categories=4'
      );
      const postData: PortoflioPost[] = await response.json();

      setPortfolioPosts(postData);
    })();
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {portfolioPosts.map((post) => (
          <Grid xs={4} item>
            <PorfolioPostItem
              body={post.acf.body}
              image={post.acf.image}
              website={post.acf.website}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyWork;
