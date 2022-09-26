import { Box, Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { PortfolioACF } from '../../types/Portfolio';
import PorfolioPostItem from './PorfolioPostItem';

type PortoflioPost = {
  id: number;
  acf: PortfolioACF;
};

const MyWork = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [portfolioPosts, setPortfolioPosts] = useState<PortoflioPost[]>([]);

  const keys = [...Array(6).keys()];

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://api.kristianmalamov.com/wp-json/wp/v2/posts?categories=4'
      );
      const postData: PortoflioPost[] = await response.json();

      setPortfolioPosts(postData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {isLoading
          ? keys.map((_, index) => (
              <Grid xs={4} item key={index}>
                <Skeleton sx={{ minHeight: 250 }}></Skeleton>
              </Grid>
            ))
          : portfolioPosts.map((post) => (
              <Grid xs={4} item key={post.id}>
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
