import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const myEmail = 'kristian.malamov00@gmail.com';
  const myPhone = '+4552754565';

  return (
    <Box bgcolor={theme.palette.secondary.main} py={2}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box display="flex" gap={2} alignItems="center" justifyContent="center" width="100%">
            <Link
              variant="body1"
              color="primary"
              href={`mailto:${myEmail}`}
              alignItems="center"
              display="flex"
              gap={1}>
              <Email /> {myEmail}
            </Link>
            <Link
              variant="body1"
              color="primary"
              href={`tel:${myPhone}`}
              alignItems="center"
              display="flex"
              gap={1}>
              <Phone /> {myPhone}
            </Link>
          </Box>

          <Box display="flex" gap={2} mt={2} mb={1}>
            <Link href="https://github.com/vexleet" target="_blank">
              <GitHub htmlColor="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/kristian-malamov-7471851ab/" target="_blank">
              <LinkedIn htmlColor="white" />
            </Link>
          </Box>

          <Typography variant="body2" color="white">
            &copy; 2022 Kristian Malamov
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
