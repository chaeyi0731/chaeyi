// components/NavigationItem.tsx
import { useRouter } from 'next/router';
import React from 'react';

interface NavigationItemProps {
  path: string;
  children: React.ReactNode;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ path, children }) => {
  const router = useRouter();

  const navigate = () => {
    router.push(path);
  };

  return (
    <div onClick={navigate} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default NavigationItem;
