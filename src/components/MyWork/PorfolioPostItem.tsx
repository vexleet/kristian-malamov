import { Box, Button, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { PortfolioACF } from '../../types/Portfolio';
import { FC, useState } from 'react';
import styled from '@emotion/styled';

const ProjectCard = styled(Card)`
  position: relative;
  max-height: 250px;
  min-height: 250px;
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

type PorfolioPostItemProps = PortfolioACF;

const PorfolioPostItem: FC<PorfolioPostItemProps> = ({ image, body, website }) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectCard onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <CardMedia component="img" image={image} height="250" width="100%" />
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
            {body}
          </Typography>
          <Button variant="outlined" color="warning" href={website} target="_blank">
            Visit project
          </Button>
        </Box>
      </ProjectContent>
    </ProjectCard>
  );
};

export default PorfolioPostItem;
