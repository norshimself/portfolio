'use client';

import { useCallback, useState } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import RightNav from '@/components/RightNav';
import useActiveSection from '@/hooks/useActiveSection';

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div id="wrapper">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <LeftSidebar menuOpen={menuOpen} onMenuOpen={openMenu} />
      <Navbar open={menuOpen} onClose={closeMenu} active={active} />
      {children}
      <RightNav active={active} />
    </div>
  );
}
