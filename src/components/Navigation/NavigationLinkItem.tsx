import { Link } from '@mui/material';
import { FC, ReactNode } from 'react';

type NavigationLinkItemProps = {
  isActive?: boolean;
  href: string;
  children: ReactNode;
};

const NavigationLinkItem: FC<NavigationLinkItemProps> = ({ isActive, href, children }) => {
  return (
    <Link variant="body1" color="#fff" href={href}>
      {children}
    </Link>
  );
};

export default NavigationLinkItem;
