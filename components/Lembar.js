// Lembar gambar: bingkai ganda, isi, dan kepala gambar (title block) di bawah. Kepala gambar hanya hiasan.

export default function Lembar({ id, no, judul, skala = 'Tanpa skala', biru = false, as: Tag = 'section', className = '', isiClassName = '', labelledby, children }) {
  return (
    <Tag id={id} className={`lembar ${biru ? 'lembar-biru' : ''} ${className}`} aria-labelledby={labelledby}>
      <div className={`lembar-isi ${isiClassName}`}>{children}</div>
      <div className="kepala" aria-hidden="true">
        <span>{judul}</span>
        <span>{skala}</span>
        <span>{no}</span>
      </div>
    </Tag>
  );
}
