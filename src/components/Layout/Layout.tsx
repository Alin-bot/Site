import React from 'react';

import './Layout.css';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='layout'>
      { children }
    </div>
  )
}