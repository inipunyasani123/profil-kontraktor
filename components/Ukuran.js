// Garis ukuran (dimensi) bergaya gambar kerja. Hiasan: teksnya selalu ada juga di isi halaman.

export function UkuranH({ label, className = '' }) {
  return (
    <div className={`uk uk-h ${className}`} aria-hidden="true">
      <i className="uk-batas" />
      <i className="uk-g uk-kiri" />
      <span className="uk-label">{label}</span>
      <i className="uk-g uk-kanan" />
      <i className="uk-batas" />
    </div>
  );
}

export function UkuranV({ label, className = '' }) {
  return (
    <div className={`uk uk-v ${className}`} aria-hidden="true">
      <i className="uk-batas" />
      <i className="uk-g uk-kiri" />
      <span className="uk-label">{label}</span>
      <i className="uk-g uk-kanan" />
      <i className="uk-batas" />
    </div>
  );
}
