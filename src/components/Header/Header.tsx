import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import HeroImage from './HeroImage';

const Header = () => {
  return (
    <Box height="100vh">
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgb(17 17 17 / 80%)"
        position="relative">
        <HeroImage />
        <Image
          src="src/assets/images/kma-circle-250.png"
          height={150}
          width={150}
          bgColor="transparent"
          duration={0}
        />
        <Typography variant="h2" fontWeight="bold" color="primary">
          Kristian Malamov
        </Typography>
        <Typography variant="body1" color="white">
          Creative Front-End Developer on the lookout for new challenges
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;