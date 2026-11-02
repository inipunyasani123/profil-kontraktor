'use client';

import { useState } from 'react';
import { GambarProyek } from './Gambar';

// Dua gambar garis ditumpuk; penggeser mengatur bagian "sesudah" yang terlihat. Bisa dipakai dengan keyboard.
export default function SebelumSesudah({ kunci, nama }) {
  const [p, setP] = useState(50);
  return (
    <div className="max-w-[500px]">
      <div className="label-mono mb-2 flex justify-between" aria-hidden="true">
        <span>← Sebelum</span>
        <span>Sesudah →</span>
      </div>
      <div className="bandingkan" style={{ '--p': `${p}%` }}>
        <GambarProyek kunci={kunci} tahap="sebelum" label={`Gambar garis sebelum dan sesudah: ${nama}. Geser penggeser untuk membandingkan.`} />
        <div className="bandingkan-atas" aria-hidden="true">
          <GambarProyek kunci={kunci} tahap="sesudah" />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={p}
          onChange={(e) => setP(Number(e.target.value))}
          aria-label={`Bandingkan sebelum dan sesudah: ${nama}`}
          aria-valuetext={`${p}% sebelum, ${100 - p}% sesudah`}
        />
        <span className="bandingkan-garis" aria-hidden="true" />
      </div>
    </div>
  );
}
