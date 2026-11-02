import Link from 'next/link';
import { notFound } from 'next/navigation';
import Lembar from '@/components/Lembar';
import Foto from '@/components/Foto';
import JsonLd from '@/components/JsonLd';
import { tulisan, cariTulisan, tanggalId, menitBaca } from '@/lib/kabar';
import { jsonLdBreadcrumb, jsonLdTulisan, ogHalaman } from '@/lib/seo';

export function generateStaticParams() {
  return tulisan.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = cariTulisan(slug);
  if (!t) return {};
  const path = `/kabar/${t.slug}`;
  return {
    title: t.judul,
    description: t.ringkas,
    alternates: { canonical: path },
    ...ogHalaman({ path, judul: t.judul, deskripsi: t.ringkas, tipe: 'article', tambahan: { publishedTime: t.tanggal } }),
  };
}

function Blok({ b }) {
  if (b.t === 'h2') return <h2>{b.teks}</h2>;
  if (b.t === 'p') return <p>{b.teks}</p>;
  if (b.t === 'catatan') return <p className="catatan">{b.teks}</p>;
  const Daftar = b.t === 'ol' ? 'ol' : 'ul';
  return (
    <Daftar>
      {b.items.map((x) => {
        // langkah bernomor: kalimat pertama yang pendek dicetak tebal sebagai judul langkah
        const i = x.indexOf('. ');
        const judul = b.t === 'ol' && i > 0 && i < 40 ? x.slice(0, i + 1) : null;
        return (
          <li key={x}>
            {judul ? <strong className="font-semibold">{judul}</strong> : null}
            {judul ? ` ${x.slice(i + 2)}` : x}
          </li>
        );
      })}
    </Daftar>
  );
}

export default async function Tulisan({ params }) {
  const { slug } = await params;
  const t = cariTulisan(slug);
  if (!t) notFound();
  const lain = tulisan.filter((x) => x.slug !== t.slug);

  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Kabar', path: '/kabar' }, { nama: t.judul, path: `/kabar/${t.slug}` }])} />
      <JsonLd data={jsonLdTulisan(t)} />
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <Lembar as="article" no={t.nomor} judul="Kabar" skala="Tanpa skala" className="lg:col-span-8" labelledby="judul-tulisan">
          <p className="label-mono">
            {t.nomor} · {tanggalId(t.tanggal)} · {menitBaca(t)} menit baca
          </p>
          <h1 id="judul-tulisan" className="judul-artikel mt-3">
            {t.judul}
          </h1>
          <p className="teks-besar mt-4 max-w-[52ch]">{t.ringkas}</p>
          <div className="mt-6">
            <Foto src={t.foto.src} w={t.foto.w} h={t.foto.h} rasio="16 / 9" sizes="(min-width: 1024px) 760px, 92vw" prioritas alt={t.foto.alt} />
            <p className="label-mono mt-2">Foto ilustrasi</p>
          </div>
          <div className="isi-artikel mt-8 max-w-[44rem]">
            {t.isi.map((b, i) => (
              <Blok key={i} b={b} />
            ))}
          </div>
        </Lembar>

        <div className="grid gap-5 lg:col-span-4 lg:sticky lg:top-[5.5rem]">
          <Lembar no="A-45" judul="Tulisan lain" skala="Tanpa skala" labelledby="judul-lain">
            <h2 id="judul-lain" className="judul-kecil">
              Tulisan lain
            </h2>
            <ul className="mt-4 border-b-[1.5px] border-tinta">
              {lain.map((x) => (
                <li key={x.slug}>
                  <Link href={`/kabar/${x.slug}`} className="block border-t-[1.5px] border-tinta py-3 no-underline hover:bg-biru-pucat">
                    <span className="label-mono block">
                      {tanggalId(x.tanggal)} · {menitBaca(x)} menit baca
                    </span>
                    <span className="mt-1 block font-display text-lg font-medium uppercase leading-tight tracking-wide">{x.judul}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/kabar" className="tautan-panah mt-2">
              Semua tulisan <span aria-hidden="true">→</span>
            </Link>
          </Lembar>

          <Lembar no="A-46" judul="Alat hitung" skala="Tanpa skala" biru labelledby="judul-ajakan">
            <h2 id="judul-ajakan" className="judul-kecil">
              Hitung kasar biaya
            </h2>
            <p className="mt-3">Coba rentang biaya dan lama kerja untuk ruanganmu.</p>
            <Link href="/hitung-biaya" className="tombol tombol-terang mt-5">
              Coba hitung
            </Link>
          </Lembar>
        </div>
      </div>
    </div>
  );
}
