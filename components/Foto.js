import Image from 'next/image';

// Foto CC0 dengan loader statis (lihat image-loader.js). Isi `children` ditumpuk di atas foto.
export default function Foto({ src, alt, w, h, rasio, sizes, prioritas = false, posisi = 'center', className = '', children }) {
  return (
    <div className={`foto ${className}`} style={{ aspectRatio: rasio || `${w} / ${h}` }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={prioritas} style={{ objectPosition: posisi }} />
      {children}
    </div>
  );
}
