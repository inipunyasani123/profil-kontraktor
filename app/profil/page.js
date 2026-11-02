import Link from 'next/link';
import Lembar from '@/components/Lembar';
import Foto from '@/components/Foto';
import JsonLd from '@/components/JsonLd';
import JudulHalaman from '@/components/JudulHalaman';
import { Bouwplank, Tukang } from '@/components/Gambar';
import { alat, orangLapangan, prinsip } from '@/lib/data';
import { jsonLdBreadcrumb, ogHalaman } from '@/lib/seo';

const judul = 'Profil dan Cara Kerja Kontraktor di Medan';
const deskripsi = 'Kenali Bowplank: asal nama, catatan kerja, dan orang di lapangan. Kontraktor renovasi dan bangun rumah di Medan. Usaha rekaan untuk situs demo.';

export const metadata = {
  title: judul,
  description: deskripsi,
  alternates: { canonical: '/profil' },
  ...ogHalaman({ path: '/profil', judul, deskripsi }),
};

const bagian = [
  { nama: 'Patok', isi: 'Kayu yang ditancapkan ke tanah, tempat papan dipaku.' },
  { nama: 'Papan', isi: 'Papan datar di atas patok. Di sinilah ukuran dan garis tembok ditandai.' },
  { nama: 'Benang', isi: 'Direntang antarpapan untuk menunjukkan letak dinding.' },
  { nama: 'Unting-unting', isi: 'Pemberat yang menggantung supaya titik di benang tepat di atas titik di tanah.' },
];

export default function Profil() {
  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Profil', path: '/profil' }])} />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <JudulHalaman
            no="A-11"
            label="Profil"
            judul="Kami mulai dari papan patok."
            isi="Bowplank berasal dari kata bouwplank: papan yang dipasang di tanah untuk menandai letak bangunan sebelum tembok pertama berdiri. Cara kerja kami sama: ukur dan tandai dulu, baru bangun."
          >
            <Bouwplank />
          </JudulHalaman>
        </div>

        <Lembar no="A-12" judul="Bagian bouwplank" skala="1 : 20" className="lg:col-span-5" labelledby="judul-bagian">
          <h2 id="judul-bagian" className="judul-sedang">
            Empat bagian bouwplank
          </h2>
          <ol className="daftar-nomor mt-5">
            {bagian.map((b) => (
              <li key={b.nama}>
                <strong>{b.nama}.</strong> {b.isi}
              </li>
            ))}
          </ol>
        </Lembar>

        <Lembar no="A-13" judul="Catatan umum" skala="Tanpa skala" className="lg:col-span-7" labelledby="judul-catatan">
          <p className="label-mono">Catatan umum, seperti di pojok gambar kerja</p>
          <h2 id="judul-catatan" className="judul-sedang mt-2">
            Empat catatan kerja
          </h2>
          <ol className="daftar-nomor mt-5 gap-4">
            {prinsip.map((p) => (
              <li key={p.judul}>
                <strong className="font-semibold">{p.judul}</strong> {p.isi}
              </li>
            ))}
          </ol>
        </Lembar>

        <Lembar no="A-14" judul="Orang di lapangan" skala="1 : 10" className="lg:col-span-12" labelledby="judul-orang">
          <p className="label-mono">Ilustrasi buatan sendiri, tanpa wajah</p>
          <h2 id="judul-orang" className="judul-sedang mt-2">
            Orang di lapangan
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {orangLapangan.map((o) => (
              <li key={o.kode} className="border-[1.5px] border-tinta bg-kertas p-3 sm:p-4">
                <div className="mx-auto w-full max-w-[200px]">
                  <Tukang kode={o.kode} />
                </div>
                <h3 className="judul-kecil mt-3">{o.peran}</h3>
                <p className="mt-1 text-[0.9375rem] leading-snug">{o.isi}</p>
              </li>
            ))}
          </ul>
        </Lembar>

        <Lembar no="A-15" judul="Alat dan bahan" skala="1 : 5" className="lg:col-span-12" labelledby="judul-alat">
          <p className="label-mono">Foto contoh berlisensi CC0, bukan foto alat kami</p>
          <h2 id="judul-alat" className="judul-sedang mt-2">
            Alat dan bahan yang kami pakai
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {alat.map((a) => (
              <li key={a.src}>
                <figure>
                  <Foto src={a.src} w={a.w} h={a.h} rasio="4 / 3" sizes="(min-width: 1024px) 270px, 45vw" alt={a.alt} />
                  <figcaption className="mt-3">
                    <h3 className="judul-kecil">{a.judul}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-snug">{a.isi}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Lembar>

        <Lembar no="A-16" judul="Wilayah kerja" skala="Tanpa skala" biru className="lg:col-span-12" labelledby="judul-wilayah">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="label-mono">Wilayah kerja</p>
              <h2 id="judul-wilayah" className="judul-sedang mt-2">
                Medan dan sekitarnya
              </h2>
              <p className="mt-3 max-w-[52ch]">Bowplank berkantor di Medan. Untuk rumah di luar kota, ceritakan lokasinya dulu, nanti kami kabari apakah bisa dikerjakan.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
              <Link href="/layanan" className="tombol tombol-terang">
                Lihat layanan
              </Link>
              <Link href="/kontak" className="tombol tombol-terang">
                Kirim pesan
              </Link>
            </div>
          </div>
        </Lembar>
      </div>
    </div>
  );
}
