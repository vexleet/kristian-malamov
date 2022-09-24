import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';

const ProjectCard = styled(Card)`
  position: relative;
  max-height: 250px;
`;

const ProjectContent = styled(CardContent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(243, 9, 78, 1);
  transition: opacity 0.2s ease-in;
`;

const MyWork = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Grid container>
        <Grid xs={4} item>
          <ProjectCard
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            <CardMedia component="img" image="header-aarhus.jpg" height="100%" width="100%" />
            <ProjectContent style={{ opacity: isHovered ? 1 : 0 }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%">
                <Typography
                  variant="body1"
                  fontWeight="600"
                  color="white"
                  textAlign="center"
                  marginBottom={2}>
                  Small component from Front End Mentor challenges.
                </Typography>
                <Button variant="outlined">Visit project</Button>
              </Box>
            </ProjectContent>
          </ProjectCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyWork;
