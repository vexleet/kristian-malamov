import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import { FC } from 'react';
import WhoAmI from './WhoAmI';

type AboutMeInfo = {
  title: string;
  body: string;
};

type InfoListItemProps = AboutMeInfo;

const InfoListItem: FC<InfoListItemProps> = ({ title, body }) => {
  return (
    <Typography variant="body1" color="secondary" fontWeight="bold">
      {title}:
      <Typography variant="inherit" fontWeight="normal" display="inline" ml={1}>
        {body}
      </Typography>
    </Typography>
  );
};

const AboutMe = () => {
  const aboutMeInfo: AboutMeInfo[] = [
    { title: 'Name', body: 'Kristian Malamov' },
    { title: 'Age', body: '22' },
    { title: 'Phone', body: '+45 52 75 45 65' },
    { title: 'Email', body: 'kristian.malamov00@gmail.com' },
    { title: 'Address', body: 'Aarhus, Denmark' },
    { title: 'Experience', body: '3 years' }
  ];

  return (
    <Grid container alignItems="center">
      <Grid xs={5} item paddingRight={10}>
        <Image src="src/assets/images/me.png" height={430} />
      </Grid>
      <Grid xs={7} item>
        <WhoAmI />
        <Box my={4}>
          <Divider />
        </Box>
        <Box>
          <Grid container rowGap={2}>
            {aboutMeInfo.map((item) => (
              <Grid xs={6} item>
                <InfoListItem title={item.title} body={item.body} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
