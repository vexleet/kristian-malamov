import { FC, useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import NavigationLinkItem from './NavigationLinkItem';
import styled from '@emotion/styled';

const NavigationContainerWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20000;
  transition: background-color 0.5s ease-out;
`;

type NavigationItem = {
  title: string;
  href: string;
};

const Navigation: FC = () => {
  const items: NavigationItem[] = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#aboutme' },
    { title: 'Portfolio', href: '#portfolio' }
  ];
  const theme = useTheme();

  const [scrollDir, setScrollDir] = useState('scrolling down');
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setOffsetY(lastScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  const getNavigationBgColor = () => {
    return offsetY > 80 ? theme.palette.secondary.light : '';
  };

  return (
    <NavigationContainerWrapper bgcolor={getNavigationBgColor}>
      <Container>
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
                <NavigationLinkItem key={item.title} href={item.href}>
                  {item.title}
                </NavigationLinkItem>
              ))}

              <Button color="primary" variant="outlined" href="#contact">
                Contact me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </NavigationContainerWrapper>
  );
};

export default Navigation;
