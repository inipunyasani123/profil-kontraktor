import Link from 'next/link';
import Lembar from '@/components/Lembar';
import { UkuranH } from '@/components/Ukuran';

export const metadata = {
  title: 'Lembar tidak ditemukan',
  alternates: { canonical: undefined },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="wadah py-10 lg:py-16">
      <Lembar no="A-00" judul="Tidak ditemukan" skala="Tanpa skala" labelledby="judul-404">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label-mono">Galat 404</p>
            <h1 id="judul-404" className="judul-besar mt-4">
              Lembar ini tidak ada di gambar kami.
            </h1>
            <p className="teks-besar mt-5 max-w-[42ch]">Alamat yang kamu buka tidak ditemukan. Mungkin salah ketik, atau halamannya sudah dipindah.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/" className="tombol">
                Ke beranda
              </Link>
              <Link href="/layanan" className="tombol tombol-garis">
                Lihat layanan
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5" aria-hidden="true">
            <p className="font-display text-[8rem] font-bold leading-none text-biru sm:text-[11rem]">404</p>
            <UkuranH label="ukuran tidak ketemu" className="mt-2" />
          </div>
        </div>
      </Lembar>
    </div>
  );
}
