import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '../constants';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
