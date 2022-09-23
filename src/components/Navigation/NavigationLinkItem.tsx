import { Link } from '@mui/material';
import { FC, ReactNode } from 'react';

type NavigationLinkItemProps = {
  isActive?: boolean;
  children: ReactNode;
};

const NavigationLinkItem: FC<NavigationLinkItemProps> = ({ isActive, children }) => {
  return (
    <Link variant="body1" color="#fff">
      {children}
    </Link>
  );
};

export default NavigationLinkItem;
