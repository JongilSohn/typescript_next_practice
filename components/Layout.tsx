import React, { Children } from 'react';
import Headers from './Header';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Headers>
      {children}
    </Headers>
  );
}

export default Layout;