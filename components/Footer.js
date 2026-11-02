import Link from 'next/link';
import { navigasi, site, jamTeks } from '@/lib/data';
import { Logo } from './Gambar';

export default function Footer() {
  return (
    <footer className="lembar-biru mt-14 border-t-2 border-biru-tua">
      <div className="wadah grid gap-10 py-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11 shrink-0" />
            <p className="font-display text-3xl font-bold uppercase tracking-[0.1em]">Bowplank</p>
          </div>
          <p className="mt-4 max-w-[38ch]">{site.tagline}</p>
          <p className="mt-3 max-w-[44ch] text-[0.9375rem]">
            Kontraktor renovasi dan bangun rumah di Medan. Bowplank adalah usaha rekaan untuk situs demo. Foto contoh berlisensi CC0, ilustrasi dibuat sendiri.
          </p>
        </div>

        <nav className="lg:col-span-3" aria-label="Halaman situs">
          <p className="label-mono">Daftar gambar</p>
          <ul className="mt-3 grid gap-1">
            {navigasi.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex min-h-[28px] items-baseline gap-3 py-0.5">
                  <span className="font-mono text-xs opacity-90">{n.lembar}</span>
                  <span className="underline decoration-1 underline-offset-4">{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="label-mono">Jam kerja</p>
          <p className="mt-3">{jamTeks}</p>
          <p className="label-mono mt-5">Alamat</p>
          <p className="mt-3">
            {site.jalan}
            <br />
            {site.kota}, {site.provinsi}
          </p>
        </div>
      </div>

      <div className="kepala" aria-hidden="true">
        <span>
          <span className="max-sm:hidden">Bowplank · Kontraktor renovasi · Medan</span>
          <span className="sm:hidden">Bowplank · Medan</span>
        </span>
        <span>Rev. A</span>
        <span>A-00</span>
      </div>
    </footer>
  );
}
