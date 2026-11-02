'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigasi } from '@/lib/data';
import { Logo } from './Gambar';

export default function Header() {
  const pathname = usePathname();
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    setBuka(false);
  }, [pathname]);

  const aktif = (href) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className="situs-kepala"
      onKeyDown={(e) => {
        if (e.key === 'Escape') setBuka(false);
      }}
    >
      <div className="wadah situs-kepala-isi">
        <Link href="/" className="merek">
          <Logo className="h-9 w-9 shrink-0" />
          <strong>Bowplank</strong>
          <small>Kontraktor · Medan</small>
        </Link>

        <nav className="nav-desk" aria-label="Menu utama">
          {navigasi.map((n) => (
            <Link key={n.href} href={n.href} aria-current={aktif(n.href) ? 'page' : undefined}>
              <span aria-hidden="true">{n.lembar}</span>
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>

        <button type="button" className="menu-tombol" aria-expanded={buka} aria-controls="menu-hp" onClick={() => setBuka((b) => !b)}>
          <span className="menu-garis" aria-hidden="true" />
          <span>{buka ? 'Tutup' : 'Menu'}</span>
        </button>
      </div>

      <nav id="menu-hp" className="nav-hp" aria-label="Menu utama di ponsel" hidden={!buka}>
        {navigasi.map((n) => (
          <Link key={n.href} href={n.href} aria-current={aktif(n.href) ? 'page' : undefined}>
            <span aria-hidden="true">{n.lembar}</span>
            <span>{n.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
