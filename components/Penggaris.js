// Penggaris tegak di tepi kiri halaman. Hanya hiasan; ikut bergulir bersama halaman.
export default function Penggaris() {
  return (
    <div className="penggaris" aria-hidden="true">
      {Array.from({ length: 120 }, (_, i) => (
        <span key={i} style={{ top: i * 100 + 6 }}>
          {i * 10}
        </span>
      ))}
    </div>
  );
}
