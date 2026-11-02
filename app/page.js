import Image from 'next/image';
import Link from 'next/link';
import Lembar from '@/components/Lembar';
import Foto from '@/components/Foto';
import { UkuranH, UkuranV } from '@/components/Ukuran';
import SebelumSesudah from '@/components/SebelumSesudah';
import { DenahMini } from '@/components/Gambar';
import { layanan, urutanKerja, proyek, jamTeks, site, waBeranda } from '@/lib/data';
import { tulisan, tanggalId, menitBaca } from '@/lib/kabar';

export default function Beranda() {
  const contoh = proyek[0];
  return (
    <div className="wadah py-6 lg:py-10">
      <div className="grid gap-5 lg:grid-cols-12">
        {/* A-01: lembar pembuka */}
        <Lembar no="A-01" judul="Denah depan rumah" skala="1 : 50" className="lg:col-span-12" labelledby="judul-beranda">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="label-mono">Kontraktor renovasi dan bangun rumah · {site.kota}</p>
              <h1 id="judul-beranda" className="judul-besar mt-4">
                Rumahmu diukur dulu, baru dikerjakan.
              </h1>
              <p className="teks-besar mt-5 max-w-[40ch]">Kami merenovasi dapur, kamar mandi, atap, dan cat rumah di Medan. Hitungannya ditulis dulu, kamu setuju, baru kami mulai.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/hitung-biaya" className="tombol">
                  Hitung kasar biaya
                </Link>
                <a href={waBeranda} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis">
                  Tanya lewat WhatsApp
                </a>
              </div>
              <p className="label-mono mt-6">
                {jamTeks} · {site.jalan}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto max-w-[460px] lg:max-w-none">
                <div className="grid grid-cols-[18px_minmax(0,1fr)] grid-rows-[18px_auto] gap-x-3 gap-y-2">
                  <span aria-hidden="true" />
                  <UkuranH label="3,5 m" />
                  <UkuranV label="2,8 m" />
                  <Foto
                    src="/images/ruang-putih.jpg"
                    w={1920}
                    h={1382}
                    rasio="5 / 6"
                    sizes="(min-width: 1024px) 440px, 90vw"
                    prioritas
                    alt="Ruangan kosong bercat putih dengan pintu ganda terbuka dan lantai kayu terang"
                  />
                </div>
                <p className="label-mono mt-2 ps-[30px]">Foto ilustrasi, ukuran contoh</p>
              </div>
            </div>
          </div>
        </Lembar>

        {/* A-02: daftar pekerjaan */}
        <Lembar no="A-02" judul="Daftar gambar" skala="Tanpa skala" className="lg:col-span-5" labelledby="judul-layanan">
          <p className="label-mono">Daftar gambar</p>
          <h2 id="judul-layanan" className="judul-sedang mt-2">
            Pekerjaan kami
          </h2>
          <p className="mt-3 max-w-[40ch]">Lima jenis pekerjaan. Tiap baris menuju penjelasannya.</p>
          <ul className="mt-5 border-b-[1.5px] border-tinta">
            {layanan.map((l) => (
              <li key={l.slug}>
                <Link href={`/layanan#${l.slug}`} className="baris-gambar">
                  <span className="relative block h-16 w-16 overflow-hidden border-[1.5px] border-tinta">
                    <Image src={l.foto.src} alt="" fill sizes="64px" />
                  </span>
                  <span className="block min-w-0">
                    <span className="label-mono block">{l.nomor}</span>
                    <span className="block font-display text-xl font-medium uppercase leading-tight tracking-wide">{l.nama}</span>
                    <span className="block text-[0.9375rem] text-tinta-2">
                      Contoh {l.lama.min}–{l.lama.maks} {l.lama.satuan}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Lembar>

        {/* A-03: urutan kerja sebagai rantai ukuran */}
        <Lembar no="A-03" judul="Rantai ukuran A–D" skala="Tanpa skala" className="lg:col-span-7" labelledby="judul-cara">
          <p className="label-mono">Rantai ukuran A–D</p>
          <h2 id="judul-cara" className="judul-sedang mt-2">
            Dari ukur sampai cek bersama
          </h2>
          <ol className="rantai mt-7">
            {urutanKerja.map((t) => (
              <li key={t.titik}>
                <span className="rantai-tanda" aria-hidden="true">
                  {t.titik}
                </span>
                <h3 className="judul-kecil">{t.judul}</h3>
                <p className="label-mono mt-1">{t.waktu}</p>
                <p className="mt-2 max-w-[48ch]">{t.isi}</p>
              </li>
            ))}
          </ol>
        </Lembar>

        {/* A-04: proyek contoh */}
        <Lembar no="A-04" judul="Proyek contoh" skala="1 : 25" className="lg:col-span-7" labelledby="judul-proyek">
          <p className="label-mono">Proyek contoh · gambar garis buatan sendiri</p>
          <h2 id="judul-proyek" className="judul-sedang mt-2">
            Sebelum dan sesudah
          </h2>
          <p className="mt-3 max-w-[48ch]">
            {contoh.nama}, {contoh.lama}. Geser penggeser untuk melihat denahnya berubah.
          </p>
          <div className="mt-5">
            <SebelumSesudah kunci={contoh.slug} nama={contoh.nama} />
          </div>
          <Link href="/layanan#proyek" className="tautan-panah mt-3">
            Lihat tiga proyek contoh <span aria-hidden="true">→</span>
          </Link>
        </Lembar>

        {/* A-05: alat hitung */}
        <Lembar no="A-05" judul="Alat hitung" skala="1 : 50" biru className="lg:col-span-5" isiClassName="flex flex-col" labelledby="judul-hitung">
          <p className="label-mono">Alat bantu</p>
          <h2 id="judul-hitung" className="judul-sedang mt-2">
            Hitung kasar biaya
          </h2>
          <p className="mt-3 max-w-[38ch]">Geser luas ruangan, pilih pekerjaan dan kelas bahan. Kamu dapat rentang biaya dan lama kerja sebagai gambaran awal.</p>
          <div className="mx-auto my-6 w-full max-w-[340px] lg:my-auto lg:py-6">
            <DenahMini />
          </div>
          <Link href="/hitung-biaya" className="tombol tombol-terang self-start">
            Coba hitung
          </Link>
        </Lembar>

        {/* A-06: kabar */}
        <Lembar no="A-06" judul="Kabar" skala="Tanpa skala" className="lg:order-2 lg:col-span-7" labelledby="judul-kabar">
          <p className="label-mono">Kabar</p>
          <h2 id="judul-kabar" className="judul-sedang mt-2">
            Tulisan dari lapangan
          </h2>
          <ul className="mt-5 border-b-[1.5px] border-tinta">
            {tulisan.map((t) => (
              <li key={t.slug}>
                <Link href={`/kabar/${t.slug}`} className="block border-t-[1.5px] border-tinta py-3 no-underline hover:bg-biru-pucat">
                  <span className="label-mono block">
                    {tanggalId(t.tanggal)} · {menitBaca(t)} menit baca
                  </span>
                  <span className="mt-1 block font-display text-xl font-medium uppercase leading-tight tracking-wide">{t.judul}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Lembar>

        {/* A-07: kontak */}
        <Lembar no="A-07" judul="Hubungi kami" skala="Tanpa skala" className="lg:order-1 lg:col-span-5" labelledby="judul-kontak">
          <p className="label-mono">Kontak</p>
          <h2 id="judul-kontak" className="judul-sedang mt-2">
            Ceritakan rumahmu
          </h2>
          <dl className="mt-5 grid gap-4">
            <div>
              <dt className="label-mono">Jam kerja</dt>
              <dd>{jamTeks}</dd>
            </div>
            <div>
              <dt className="label-mono">Alamat</dt>
              <dd>
                {site.jalan}, {site.kota}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/kontak" className="tombol">
              Isi formulir
            </Link>
            <a href={waBeranda} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis">
              WhatsApp
            </a>
          </div>
        </Lembar>
      </div>
    </div>
  );
}
