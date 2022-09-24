import { Button, Typography } from '@mui/material';

const WhoAmI = () => {
  return (
    <div>
      <Typography variant="h6" color="primary">
        Who am i?
      </Typography>
      <Typography variant="h4" color="secondary" fontWeight="bold" mb={2}>
        I'm Kristian, a Front End Developer
      </Typography>
      <Typography variant="body1" color="secondary" lineHeight={1.8}>
        I am a Frontend Developer based in Denmark, I have been building different noteworthy and
        highly-scalable applications for a few years by following design trends and using the latest
        frontend technologies and methodologies. I am motivated and enthusiastic and always eager to
        learn more.
      </Typography>
    </div>
  );
};

export default WhoAmI;
