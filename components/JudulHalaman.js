import Lembar from './Lembar';

// Lembar pembuka tiap halaman dalam: nomor lembar, judul h1, dan pengantar singkat.
export default function JudulHalaman({ no, label, judul, isi, children, id = 'judul-halaman' }) {
  return (
    <Lembar no={no} judul={label} skala="1 : 1" labelledby={id}>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label-mono">
            {no} · {label}
          </p>
          <h1 id={id} className="judul-halaman mt-3">
            {judul}
          </h1>
          <p className="teks-besar mt-4 max-w-[46ch]">{isi}</p>
        </div>
        {children ? <div className="lg:col-span-4">{children}</div> : null}
      </div>
    </Lembar>
  );
}
