'use client';

import { useState } from 'react';
import Lembar from './Lembar';
import { DenahHitung } from './Gambar';
import { pesanWa } from '@/lib/data';
import { asumsi, bentukRuang, hitung, juta, kelasBahan, m2, meter, pekerjaan, rentangHari, rentangJuta, rupiah } from '@/lib/biaya';

export default function Hitung() {
  const [luas, setLuas] = useState(12);
  const [dipilih, setDipilih] = useState(['cat', 'keramik']);
  const [kelas, setKelas] = useState('menengah');

  const ruang = bentukRuang(luas);
  const h = hitung({ luas, dipilih, kelas });
  const ada = h.baris.length > 0;
  const namaKelas = kelasBahan.find((k) => k.id === kelas).nama.toLowerCase();
  const ganti = (id) => setDipilih((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));

  const pesan = ada
    ? [
        'Halo Bowplank, saya mencoba Hitung Kasar Biaya di situs demo.',
        `Luas ruangan: ${m2(luas)} m² (kira-kira ${meter(ruang.lebar)} × ${meter(ruang.dalam)} m).`,
        `Pekerjaan: ${h.baris.map((b) => b.nama.toLowerCase()).join(', ')}.`,
        `Kelas bahan: ${namaKelas}.`,
        `Perkiraan: ${rentangJuta(h.bawah, h.atas)}, sekitar ${rentangHari(h.hariMin, h.hariMaks)}.`,
        '(Contoh perhitungan, bukan penawaran harga.)',
        'Bisa dibantu ukur dan hitung yang sebenarnya?',
      ].join('\n')
    : '';

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <Lembar no="A-32" judul="Masukan" skala="1 : 50" className="lg:col-span-7" labelledby="judul-masukan">
          <h2 id="judul-masukan" className="judul-sedang">
            Isi ukuran dan pilihan
          </h2>

          <div className="sticky top-[62px] z-20 mt-4 border-2 border-tinta bg-biru px-3 py-2 text-kertas lg:hidden" aria-hidden="true">
            <span className="label-mono block text-biru-muda">Perkiraan sementara</span>
            <span className="block font-display text-lg font-bold uppercase leading-tight">
              {ada ? `${rentangJuta(h.bawah, h.atas)} · ${rentangHari(h.hariMin, h.hariMaks)}` : 'Pilih pekerjaan dulu'}
            </span>
            {ada ? <span className="block font-mono text-xs uppercase tracking-[0.04em] text-biru-muda">Contoh perhitungan, bukan penawaran harga</span> : null}
          </div>

          <div className="mt-6 grid gap-8">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="luas" className="font-display text-xl font-semibold uppercase tracking-[0.08em]">
                  Luas ruangan
                </label>
                <output htmlFor="luas" className="font-display text-3xl font-bold leading-none text-biru">
                  {m2(luas)} m²
                </output>
              </div>
              <input
                id="luas"
                type="range"
                className="geser mt-2"
                min="4"
                max="40"
                step="1"
                value={luas}
                onChange={(e) => setLuas(Number(e.target.value))}
                aria-valuetext={`${luas} meter persegi, kira-kira ${meter(ruang.lebar)} kali ${meter(ruang.dalam)} meter`}
              />
              <div className="flex justify-between font-mono text-xs text-tinta-2" aria-hidden="true">
                <span>4 m²</span>
                <span>40 m²</span>
              </div>
              <div className="mx-auto mt-4 max-w-[420px] border-[1.5px] border-tinta">
                <DenahHitung lebar={ruang.lebar} dalam={ruang.dalam} luas={luas} pilihan={dipilih} />
              </div>
              <p className="bantu mt-2">Ruangan dianggap persegi panjang dengan perbandingan sisi {asumsi.rasio}. Garis putus-putus di sekeliling denah muncul bila pekerjaan atap dipilih.</p>
            </div>

            <fieldset>
              <legend className="subjudul w-full">Pekerjaan</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {pekerjaan.map((p) => (
                  <label key={p.id} className="pilih">
                    <input type="checkbox" checked={dipilih.includes(p.id)} onChange={() => ganti(p.id)} />
                    <span className="pilih-kotak" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold">{p.nama}</span>
                      <span className="bantu block">{p.uraian}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="subjudul w-full">Kelas bahan</legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {kelasBahan.map((k) => (
                  <label key={k.id} className="pilih">
                    <input type="radio" name="kelas" value={k.id} checked={kelas === k.id} onChange={() => setKelas(k.id)} />
                    <span className="pilih-kotak bulat" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold">{k.nama}</span>
                      <span className="bantu block">{k.catatan}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </Lembar>

        <Lembar no="A-33" judul="Hasil hitungan" skala="Contoh" biru className="lg:col-span-5 lg:sticky lg:top-[5.5rem]" labelledby="judul-hasil">
          <h2 id="judul-hasil" className="judul-sedang">
            Perkiraan kasar
          </h2>

          {ada ? (
            <>
              <div className="mt-5" aria-live="polite" aria-atomic="true">
                <p className="label-mono">Rentang biaya</p>
                <p className="mt-1 font-display text-[2.1rem] font-bold uppercase leading-none tracking-[0.01em] sm:text-[2.6rem]">{rentangJuta(h.bawah, h.atas)}</p>
                <p className="label-mono mt-4">Lama kerja contoh</p>
                <p className="mt-1 font-display text-2xl font-bold uppercase leading-tight">{rentangHari(h.hariMin, h.hariMaks)}</p>
              </div>
              <p className="cap mt-5">Contoh perhitungan, bukan penawaran harga</p>

              <h3 className="subjudul mt-7" style={{ borderBottomColor: 'rgba(255,255,255,.6)' }}>
                Rincian per pekerjaan
              </h3>
              <ul>
                {h.baris.map((b) => (
                  <li key={b.id} className="border-b border-white/35 py-3 last:border-b-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold">{b.nama}</span>
                      <span className="font-mono text-[0.9375rem] font-medium">
                        {juta(b.bawah)}–{juta(b.atas)} jt
                      </span>
                    </div>
                    <p className="mt-1 text-[0.9375rem] text-biru-muda">
                      {m2(b.volume)} m² × {rupiah(b.tarif)} per m², {rentangHari(b.hariMin, b.hariMaks)}
                    </p>
                  </li>
                ))}
              </ul>

              <a className="tombol tombol-terang mt-6 w-full" href={pesanWa(pesan)} target="_blank" rel="noopener noreferrer">
                Kirim hitungan ke WhatsApp
              </a>
              <p className="mt-3 text-[0.9375rem] text-biru-muda">Hanya membuka WhatsApp dengan pesan tersusun. Tidak ada data yang dikirim ke situs ini.</p>
            </>
          ) : (
            <p className="mt-5 max-w-[34ch]">Pilih minimal satu pekerjaan di kolom kiri untuk melihat rentang biaya dan lama kerja.</p>
          )}
        </Lembar>
      </div>

      <Lembar no="A-34" judul="Catatan hitungan" skala="Tanpa skala" className="mt-5" labelledby="judul-catatan">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="judul-catatan" className="judul-sedang">
              Cara menghitung
            </h2>
            <ul className="daftar-kotak mt-5">
              <li>
                Luas dinding = keliling ruangan × {asumsi.tinggiDinding} m × {String(asumsi.bukaan).replace('.', ',')} (pintu dan jendela dikurangkan).
              </li>
              <li>Luas atap = {String(asumsi.faktorAtap).replace('.', ',')} × luas ruangan (kemiringan dan teritis).</li>
              <li>Rentang = hasil dikurangi 10% sampai ditambah 20%, karena keadaan sebenarnya baru terlihat setelah diukur.</li>
              <li>Lama kerja = hari kerja contoh tiap pekerjaan, dijumlahkan. Hari hujan belum dihitung.</li>
              <li>Hitungan sungguhan selalu dimulai dari ukur di tempat.</li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <p className="cap">Contoh harga, bukan harga pasar</p>
            <table className="tabel-tarif mt-4">
              <caption>Tarif contoh per m², sudah termasuk bahan dan upah</caption>
              <thead>
                <tr>
                  <th scope="col">Pekerjaan</th>
                  {kelasBahan.map((k) => (
                    <th key={k.id} scope="col">
                      {k.nama}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pekerjaan.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" className="font-semibold">
                      {p.nama}
                    </th>
                    {kelasBahan.map((k) => (
                      <td key={k.id}>{new Intl.NumberFormat('id-ID').format(p.tarif[k.id])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Lembar>
    </>
  );
}
