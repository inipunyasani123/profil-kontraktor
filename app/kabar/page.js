import Link from 'next/link';
import Lembar from '@/components/Lembar';
import Foto from '@/components/Foto';
import JsonLd from '@/components/JsonLd';
import JudulHalaman from '@/components/JudulHalaman';
import { tulisan, tanggalId, menitBaca } from '@/lib/kabar';
import { jsonLdBreadcrumb, ogHalaman } from '@/lib/seo';

const judul = 'Kabar dan Tips Renovasi Rumah';
const deskripsi = 'Tulisan contoh dari Bowplank: tanda atap perlu diperiksa, urutan kerja kamar mandi, dan cara membaca hitungan biaya renovasi.';

export const metadata = {
  title: judul,
  description: deskripsi,
  alternates: { canonical: '/kabar' },
  ...ogHalaman({ path: '/kabar', judul, deskripsi }),
};

export default function Kabar() {
  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Kabar', path: '/kabar' }])} />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <JudulHalaman
            no="A-41"
            label="Kabar"
            judul="Tulisan dari lapangan"
            isi="Catatan pendek tentang atap, kamar mandi, dan cara membaca hitungan biaya. Semuanya tulisan contoh."
          />
        </div>

        {tulisan.map((t, i) => {
          const besar = i === 0;
          return (
            <Lembar key={t.slug} no={t.nomor} judul="Tulisan" skala="Tanpa skala" className={besar ? 'lg:col-span-12' : 'lg:col-span-6'} labelledby={`j-${t.slug}`}>
              <div className={besar ? 'grid gap-6 lg:grid-cols-12 lg:items-center' : ''}>
                <div className={besar ? 'lg:col-span-6' : ''}>
                  <Foto src={t.foto.src} w={t.foto.w} h={t.foto.h} rasio="16 / 10" sizes={besar ? '(min-width: 1024px) 560px, 92vw' : '(min-width: 1024px) 560px, 92vw'} alt={t.foto.alt} />
                  <p className="label-mono mt-2">Foto ilustrasi</p>
                </div>
                <div className={besar ? 'lg:col-span-6' : 'mt-5'}>
                  <p className="label-mono">
                    {tanggalId(t.tanggal)} · {menitBaca(t)} menit baca
                  </p>
                  <h2 id={`j-${t.slug}`} className="judul-sedang mt-2">
                    <Link href={`/kabar/${t.slug}`} className="no-underline hover:underline">
                      {t.judul}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-[52ch]">{t.ringkas}</p>
                  <Link href={`/kabar/${t.slug}`} className="tautan-panah mt-2">
                    Baca tulisan <span className="sr-only">{t.judul}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Lembar>
          );
        })}
      </div>
    </div>
  );
}
