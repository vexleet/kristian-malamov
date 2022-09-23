import { FC } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import NavigationLinkItem from './NavigationLinkItem';
import styled from '@emotion/styled';

const NavigationContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;

const Navigation: FC = () => {
  const items = ['Home', 'About', 'Portfolio'];

  return (
    <NavigationContainer>
      <Grid container alignItems="center" paddingY={2}>
        <Grid xs={2} item>
          <Typography variant="h5" fontWeight="bold" color="white">
            vex
            <Typography display="inline" variant="inherit" color="primary">
              LEET
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={10} item>
          <Box
            display="flex"
            justifyContent="flex-end"
            flexDirection="row"
            padding="0"
            alignItems="center"
            gap={5}>
            {items.map((item) => (
              <NavigationLinkItem key={item}>{item}</NavigationLinkItem>
            ))}

            <Button color="primary" variant="outlined">
              Contact me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </NavigationContainer>
  );
};

export default Navigation;
