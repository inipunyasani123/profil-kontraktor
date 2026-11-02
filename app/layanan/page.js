import Link from 'next/link';
import Lembar from '@/components/Lembar';
import Foto from '@/components/Foto';
import JsonLd from '@/components/JsonLd';
import JudulHalaman from '@/components/JudulHalaman';
import SebelumSesudah from '@/components/SebelumSesudah';
import { UkuranH } from '@/components/Ukuran';
import { layanan, proyek, waBeranda } from '@/lib/data';
import { jsonLdBreadcrumb, ogHalaman } from '@/lib/seo';

const judul = 'Layanan Renovasi dan Proyek Contoh';
const deskripsi = 'Lima layanan renovasi di Medan: dapur, kamar mandi, atap dan plafon, cat ulang, tambah kamar. Lengkap dengan lama kerja contoh dan tiga proyek contoh.';

export const metadata = {
  title: judul,
  description: deskripsi,
  alternates: { canonical: '/layanan' },
  ...ogHalaman({ path: '/layanan', judul, deskripsi }),
};

export default function Layanan() {
  return (
    <div className="wadah py-6 lg:py-10">
      <JsonLd data={jsonLdBreadcrumb([{ nama: 'Beranda', path: '' }, { nama: 'Layanan', path: '/layanan' }])} />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <JudulHalaman
            no="A-21"
            label="Layanan"
            judul="Pekerjaan yang kami kerjakan"
            isi="Lima jenis renovasi. Di tiap pekerjaan ada yang kami kerjakan, lama kerja contoh, dan yang perlu kamu siapkan."
          >
            <nav aria-label="Loncat ke pekerjaan">
              <p className="label-mono">Loncat ke</p>
              <ul className="mt-2 border-b-[1.5px] border-tinta">
                {layanan.map((l) => (
                  <li key={l.slug}>
                    <a href={`#${l.slug}`} className="flex min-h-[44px] items-baseline gap-3 border-t-[1.5px] border-tinta py-2 no-underline hover:bg-biru-pucat">
                      <span className="label-mono">{l.nomor}</span>
                      <span className="font-display uppercase tracking-wide">{l.nama}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#proyek" className="flex min-h-[44px] items-baseline gap-3 border-t-[1.5px] border-tinta py-2 no-underline hover:bg-biru-pucat">
                    <span className="label-mono">A-27</span>
                    <span className="font-display uppercase tracking-wide">Proyek contoh</span>
                  </a>
                </li>
              </ul>
            </nav>
          </JudulHalaman>
        </div>

        {layanan.map((l, i) => (
          <Lembar key={l.slug} id={l.slug} no={l.nomor} judul={l.nama} skala="1 : 20" className="scroll-mt-24 lg:col-span-12" labelledby={`j-${l.slug}`}>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <figure className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                <UkuranH label={l.ukuran} />
                <Foto className="mt-2" src={l.foto.src} w={l.foto.w} h={l.foto.h} rasio="4 / 3" sizes="(min-width: 1024px) 480px, 92vw" prioritas={i === 0} alt={l.foto.alt} />
                <figcaption className="label-mono mt-2">Foto ilustrasi, ukuran contoh</figcaption>
              </figure>

              <div className="lg:col-span-7">
                <p className="label-mono">
                  {l.nomor} · Pekerjaan {i + 1} dari {layanan.length}
                </p>
                <h2 id={`j-${l.slug}`} className="judul-sedang mt-2">
                  {l.nama}
                </h2>
                <p className="mt-3 max-w-[52ch]">{l.ringkas}</p>

                <div className="mt-5">
                  <p className="label-mono">Lama kerja contoh, bukan janji</p>
                  <UkuranH label={`${l.lama.min}–${l.lama.maks} ${l.lama.satuan}`} className="mt-2" />
                  <p className="bantu mt-1">{l.lama.catatan}</p>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="subjudul">Yang dikerjakan</h3>
                    <ol className="daftar-nomor">
                      {l.dikerjakan.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="subjudul">Yang perlu kamu siapkan</h3>
                    <ul className="daftar-kotak">
                      {l.siapkan.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Lembar>
        ))}

        <div id="proyek" className="scroll-mt-24 pt-4 lg:col-span-12">
          <p className="label-mono">A-27 sampai A-29</p>
          <h2 className="judul-sedang mt-2">Tiga proyek contoh</h2>
          <p className="mt-3 max-w-[60ch]">Ketiganya proyek rekaan. Gambar garisnya buatan sendiri dan bisa dibandingkan dengan menggeser penggeser di tiap gambar.</p>
        </div>

        {proyek.map((p) => (
          <Lembar key={p.slug} no={p.nomor} judul={p.judulLembar} skala="1 : 25" className="lg:col-span-12" labelledby={`j-${p.slug}`}>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <SebelumSesudah kunci={p.slug} nama={p.nama} />
                <p className="label-mono mt-2">{p.tampak}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="label-mono">
                  {p.nomor} · {p.ukuran} · {p.lama}
                </p>
                <h3 id={`j-${p.slug}`} className="judul-sedang mt-2">
                  {p.nama}
                </h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <h4 className="subjudul">Sebelum</h4>
                    <ul className="daftar-kotak">
                      {p.sebelum.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="subjudul">Sesudah</h4>
                    <ul className="daftar-kotak">
                      {p.sesudah.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Lembar>
        ))}

        <Lembar no="A-30" judul="Langkah berikutnya" skala="Tanpa skala" biru className="lg:col-span-12" labelledby="judul-lanjut">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="label-mono">Langkah berikutnya</p>
              <h2 id="judul-lanjut" className="judul-sedang mt-2">
                Mau tahu perkiraan biayanya?
              </h2>
              <p className="mt-3 max-w-[52ch]">Coba hitung kasar dulu, lalu kirim hasilnya lewat WhatsApp. Hitungan sungguhan kami buat setelah ukur di tempat.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
              <Link href="/hitung-biaya" className="tombol tombol-terang">
                Hitung kasar biaya
              </Link>
              <a href={waBeranda} target="_blank" rel="noopener noreferrer" className="tombol tombol-terang">
                WhatsApp
              </a>
            </div>
          </div>
        </Lembar>
      </div>
    </div>
  );
}
