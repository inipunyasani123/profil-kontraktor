import JsonLd from '@/components/JsonLd';
import JudulHalaman from '@/components/JudulHalaman';
import Hitung from '@/components/Hitung';
import { jsonLdBreadcrumb, ogHalaman } from '@/lib/seo';

const judul = 'Hitung Kasar Biaya Renovasi Rumah';
const deskripsi = 'Geser luas ruangan, pilih pekerjaan dan kelas bahan, lalu lihat rentang biaya dan lama kerja contoh. Contoh perhitungan, bukan penawaran harga.';

export const metadata = {
  title: judul,
  description: deskripsi,
  alternates: { canonical: '/hitung-biaya' },
  ...ogHalaman({ path: '/hitung-biaya', judul, deskripsi }),
};

export default function HitungBiaya() {
  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Hitung biaya', path: '/hitung-biaya' }])} />
      <div className="grid gap-5">
        <JudulHalaman
          no="A-31"
          label="Hitung biaya"
          judul="Hitung kasar biaya"
          isi="Geser luas ruangan, pilih pekerjaan dan kelas bahan. Kamu dapat rentang biaya dan lama kerja untuk gambaran awal."
        >
          <p className="cap">Contoh perhitungan, bukan penawaran harga</p>
        </JudulHalaman>
        <Hitung />
      </div>
    </div>
  );
}
