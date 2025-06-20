// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col flex-grow"> {/* flex-grow might be useful if nested in another flex container */}
      {children}
    </div>
  );
};

export default Layout;