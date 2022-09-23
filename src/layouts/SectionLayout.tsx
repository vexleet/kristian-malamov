import { FC, ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';

type SectionLayoutProps = {
  title: string;
  subTitle: string;
  children: ReactNode;
};

const SectionLayout: FC<SectionLayoutProps> = ({ children, subTitle, title }) => {
  return (
    <Container>
      <Box pt={8} pb={5}>
        <Typography variant="h3" mb={1} fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" mb={3}>
          {subTitle}
        </Typography>

        {children}
      </Box>
    </Container>
  );
};

export default SectionLayout;
