import Lembar from '@/components/Lembar';
import JsonLd from '@/components/JsonLd';
import JudulHalaman from '@/components/JudulHalaman';
import FormKontak from '@/components/FormKontak';
import { PetaContoh } from '@/components/Gambar';
import { jamTeks, site } from '@/lib/data';
import { jsonLdBreadcrumb, ogHalaman } from '@/lib/seo';

const judul = 'Kontak, Jam Kerja, dan Alamat Contoh';
const deskripsi = 'Kirim cerita singkat tentang rumahmu lewat WhatsApp. Jam kerja Senin–Sabtu 08.00–17.00 WIB. Alamat contoh di Medan. Situs demo, usaha rekaan.';

export const metadata = {
  title: judul,
  description: deskripsi,
  alternates: { canonical: '/kontak' },
  ...ogHalaman({ path: '/kontak', judul, deskripsi }),
};

export default function Kontak() {
  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Kontak', path: '/kontak' }])} />
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-12">
          <JudulHalaman
            no="A-51"
            label="Kontak"
            judul="Ceritakan rumahmu"
            isi="Isi singkat, lalu kirim lewat WhatsApp. Tidak ada data yang dikirim ke situs ini."
          />
        </div>

        <Lembar no="A-52" judul="Formulir" skala="Tanpa skala" className="lg:col-span-7" labelledby="judul-form">
          <h2 id="judul-form" className="judul-sedang">
            Pesan ke Bowplank
          </h2>
          <div className="mt-6">
            <FormKontak />
          </div>
        </Lembar>

        <Lembar no="A-53" judul="Lokasi dan jam" skala="Tanpa skala" className="lg:col-span-5" labelledby="judul-lokasi">
          <h2 id="judul-lokasi" className="judul-sedang">
            Lokasi dan jam kerja
          </h2>
          <dl className="mt-5 grid gap-4">
            <div>
              <dt className="label-mono">Jam kerja</dt>
              <dd>{jamTeks}</dd>
            </div>
            <div>
              <dt className="label-mono">Alamat</dt>
              <dd>
                {site.jalan}
                <br />
                {site.kota}, {site.provinsi}
              </dd>
            </div>
            <div>
              <dt className="label-mono">Wilayah kerja</dt>
              <dd>Medan dan sekitarnya</dd>
            </div>
          </dl>
          <div className="mt-6 border-[1.5px] border-tinta">
            <PetaContoh />
          </div>
          <p className="bantu mt-2">Peta ilustrasi buatan sendiri, bukan peta sungguhan. Lokasi dan alamat hanya contoh.</p>
        </Lembar>
      </div>
    </div>
  );
}
