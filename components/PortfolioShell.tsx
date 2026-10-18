'use client';

import { useState } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import RightNav from '@/components/RightNav';

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="wrapper">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <LeftSidebar menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(true)} />
      <Navbar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <RightNav />
    </div>
  );
}
