'use client';

import { useRef, useState } from 'react';
import { jenisPekerjaan, pesanWa } from '@/lib/data';

// Tidak ada yang dikirim ke server: isian disusun menjadi pesan WhatsApp tanpa nomor tujuan.
export default function FormKontak() {
  const [nilai, setNilai] = useState({ nama: '', pekerjaan: jenisPekerjaan[0], ukuran: '', daerah: '', catatan: '' });
  const [galat, setGalat] = useState('');
  const [terbuka, setTerbuka] = useState(false);
  const namaRef = useRef(null);

  const ubah = (kunci) => (e) => {
    setNilai((n) => ({ ...n, [kunci]: e.target.value }));
    if (kunci === 'nama') setGalat('');
  };

  function kirim(e) {
    e.preventDefault();
    if (!nilai.nama.trim()) {
      setGalat('Isi nama dulu supaya kami tahu harus menyapa siapa.');
      namaRef.current?.focus();
      return;
    }
    const baris = [
      `Halo Bowplank, saya ${nilai.nama.trim()}.`,
      `Pekerjaan: ${nilai.pekerjaan}.`,
      nilai.ukuran.trim() && `Ukuran: ${nilai.ukuran.trim()}.`,
      nilai.daerah.trim() && `Daerah: ${nilai.daerah.trim()}.`,
      nilai.catatan.trim() && `Catatan: ${nilai.catatan.trim()}`,
      '(Pesan dari situs demo.)',
    ].filter(Boolean);
    window.open(pesanWa(baris.join('\n')), '_blank', 'noopener,noreferrer');
    setTerbuka(true);
  }

  return (
    <form onSubmit={kirim} noValidate className="grid gap-5">
      <div>
        <label htmlFor="nama" className="label-isian">
          Nama
        </label>
        <input
          ref={namaRef}
          id="nama"
          name="nama"
          type="text"
          autoComplete="name"
          className="isian"
          value={nilai.nama}
          onChange={ubah('nama')}
          aria-invalid={galat ? 'true' : undefined}
          aria-describedby={galat ? 'galat-nama' : undefined}
          required
        />
        {galat ? (
          <p id="galat-nama" className="galat" role="alert">
            {galat}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="pekerjaan" className="label-isian">
          Pekerjaan yang kamu mau
        </label>
        <select id="pekerjaan" name="pekerjaan" className="isian" value={nilai.pekerjaan} onChange={ubah('pekerjaan')}>
          {jenisPekerjaan.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ukuran" className="label-isian">
            Ukuran <span className="font-normal">(boleh kosong)</span>
          </label>
          <input id="ukuran" name="ukuran" type="text" className="isian" placeholder="Contoh: 2 × 2,5 m" value={nilai.ukuran} onChange={ubah('ukuran')} />
        </div>
        <div>
          <label htmlFor="daerah" className="label-isian">
            Daerah <span className="font-normal">(boleh kosong)</span>
          </label>
          <input id="daerah" name="daerah" type="text" className="isian" placeholder="Contoh: Medan Johor" value={nilai.daerah} onChange={ubah('daerah')} />
        </div>
      </div>

      <div>
        <label htmlFor="catatan" className="label-isian">
          Cerita singkat <span className="font-normal">(boleh kosong)</span>
        </label>
        <textarea id="catatan" name="catatan" className="isian" placeholder="Contoh: keramik retak dan lantai sering tergenang." value={nilai.catatan} onChange={ubah('catatan')} />
      </div>

      <div>
        <button type="submit" className="tombol w-full sm:w-auto">
          Kirim lewat WhatsApp
        </button>
        <p className="bantu mt-3 max-w-[52ch]">
          Tidak ada data yang dikirim ke situs ini. Tombol hanya membuka WhatsApp dengan pesan yang sudah tersusun, tanpa nomor tujuan, karena ini situs demo.
        </p>
        {terbuka ? (
          <p className="bantu mt-2 font-semibold" role="status">
            WhatsApp dibuka di tab baru. Kalau tidak muncul, bolehkan jendela baru dari situs ini lalu coba lagi.
          </p>
        ) : null}
      </div>
    </form>
  );
}
