// Semua ilustrasi Bowplank dibuat sendiri sebagai SVG di kode ini: logo, bouwplank, tukang tanpa wajah,
// gambar garis sebelum-sesudah, peta ilustrasi, dan denah. Tidak ada foto orang atau merek nyata.
import { meter, m2 } from '@/lib/biaya';

const T = '#0d1f4d'; // tinta
const B = '#1f43a0'; // biru cetak-biru
const L = '#fbf8ee'; // lembar
const P = '#e1e8fa'; // biru pucat
const M = '#c7d6fb'; // biru muda
const O = '#ff6b1a'; // oranye pelampung (hanya titik kecil)
const K = '#f3ecd9'; // kertas

// Garis ukuran di dalam SVG. Teks mono 15 satuan (kira-kira 12 px di layar 390 px), sekitar 9 satuan per huruf.
function DimH({ x1, x2, y, label, warna = B, bg = L }) {
  const mid = (x1 + x2) / 2;
  const w = label.length * 9.4 + 12;
  return (
    <g stroke={warna} strokeWidth="1.5" fill={warna}>
      <path d={`M${x1} ${y - 7}v14M${x2} ${y - 7}v14M${x1} ${y}H${x2}`} fill="none" />
      <path d={`M${x1} ${y}l9 -4v8zM${x2} ${y}l-9 -4v8z`} stroke="none" />
      <rect x={mid - w / 2} y={y - 10} width={w} height="20" fill={bg} stroke="none" />
      <text x={mid} y={y + 5} textAnchor="middle" className="svg-teks" stroke="none" style={{ color: warna }}>
        {label}
      </text>
    </g>
  );
}

function DimV({ x, y1, y2, label, warna = B, bg = L }) {
  const mid = (y1 + y2) / 2;
  const w = label.length * 9.4 + 12;
  return (
    <g stroke={warna} strokeWidth="1.5" fill={warna}>
      <path d={`M${x - 7} ${y1}h14M${x - 7} ${y2}h14M${x} ${y1}V${y2}`} fill="none" />
      <path d={`M${x} ${y1}l-4 9h8zM${x} ${y2}l-4 -9h8z`} stroke="none" />
      <rect x={x - 10} y={mid - w / 2} width="20" height={w} fill={bg} stroke="none" />
      <text transform={`translate(${x + 5} ${mid}) rotate(-90)`} textAnchor="middle" className="svg-teks" stroke="none" style={{ color: warna }}>
        {label}
      </text>
    </g>
  );
}

export function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" fill={B} />
      <path d="M10 14h4v18l-2 4-2-4zM26 14h4v18l-2 4-2-4z" fill={K} />
      <path d="M5 9h30v6H5z" fill={K} />
      <path d="M5 23h30" stroke={K} strokeWidth="1.5" strokeDasharray="3 2.5" />
      <rect x="31" y="3" width="6" height="6" fill={O} />
    </svg>
  );
}

// Bouwplank: papan yang dipaku di atas dua patok untuk menandai letak bangunan. Benang direntang di antaranya.
export function Bouwplank() {
  return (
    <svg viewBox="0 0 360 230" className="h-auto w-full" role="img" aria-label="Gambar bouwplank: dua patok kayu dengan papan di atasnya, benang direntang di antara papan, dan unting-unting menggantung">
      <DimH x1={64} x2={296} y={30} label="6,0 m" />
      <path d="M64 38V66M296 38V66" stroke={B} strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
      <path d="M10 176H350" stroke={T} strokeWidth="3" />
      {Array.from({ length: 17 }, (_, i) => (
        <path key={i} d={`M${24 + i * 20} 176l-8 11`} stroke={T} strokeOpacity=".4" strokeWidth="1.3" />
      ))}
      <path d="M64 176v30h232v-30" fill="none" stroke={B} strokeWidth="2" strokeDasharray="6 4" />
      {[0, 232].map((dx) => (
        <g key={dx}>
          <path d={`M${56 + dx} 86h16v94l-8 24-8-24z`} fill={P} stroke={T} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x={34 + dx} y="70" width="60" height="16" fill={L} stroke={T} strokeWidth="2.5" />
          <circle cx={44 + dx} cy="78" r="2.5" fill={T} />
          <circle cx={84 + dx} cy="78" r="2.5" fill={T} />
        </g>
      ))}
      <path d="M94 78H266" stroke={T} strokeWidth="1.6" />
      <path d="M180 78V138" stroke={T} strokeWidth="1.5" />
      <path d="M180 164l-8-24h16z" fill={B} stroke={T} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="180" cy="176" r="4" fill={O} stroke={T} strokeWidth="1.5" />
    </svg>
  );
}

/* ---------- Orang di lapangan: tokoh buatan sendiri, tanpa wajah ---------- */

const Anggota = ({ d, warna = P, tebal = 11 }) => (
  <g fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} stroke={T} strokeWidth={tebal} />
    <path d={d} stroke={warna} strokeWidth={tebal - 4.5} />
  </g>
);
const Tangan = ({ x, y }) => <circle cx={x} cy={y} r="5.5" fill={L} stroke={T} strokeWidth="2" />;

function Tubuh({ lenganKiri = 'M42 88L32 120', lenganKanan = 'M82 88L92 120', tanganKiri = [32, 121], tanganKanan = [92, 121], depan, belakang }) {
  return (
    <>
      <path d="M12 164H118" stroke={T} strokeWidth="2.5" />
      {belakang}
      <Anggota d="M52 118V156" warna={B} tebal={13} />
      <Anggota d="M72 118V156" warna={B} tebal={13} />
      <rect x="43" y="154" width="18" height="9" fill={T} />
      <rect x="63" y="154" width="18" height="9" fill={T} />
      <path d="M40 86Q40 78 48 78H76Q84 78 84 86V122H40Z" fill={P} stroke={T} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M40 114H84" stroke={T} strokeWidth="3" />
      <path d="M54 78v36M70 78v36" stroke={T} strokeOpacity=".55" strokeWidth="1.5" />
      <Anggota d={lenganKiri} />
      <Anggota d={lenganKanan} />
      <rect x="56" y="68" width="12" height="12" fill={L} stroke={T} strokeWidth="2" />
      <ellipse cx="62" cy="54" rx="15" ry="17" fill={L} stroke={T} strokeWidth="2.5" />
      <path d="M45 53a17 17 0 0 1 34 0z" fill={B} stroke={T} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="40" y="51" width="44" height="6" rx="2" fill={B} stroke={T} strokeWidth="2.5" />
      <rect x="58" y="31" width="8" height="6" fill={B} stroke={T} strokeWidth="2" />
      <Tangan x={tanganKiri[0]} y={tanganKiri[1]} />
      <Tangan x={tanganKanan[0]} y={tanganKanan[1]} />
      {depan}
    </>
  );
}

export function Tukang({ kode }) {
  const label = {
    pengawas: 'Ilustrasi pengawas lapangan berhelm memegang gulungan gambar dan meteran',
    batu: 'Ilustrasi tukang batu berhelm memegang sendok semen, dengan tumpukan bata di kaki',
    cat: 'Ilustrasi tukang cat berhelm memegang rol cat bergagang panjang dan kaleng cat',
    kayu: 'Ilustrasi tukang kayu berhelm memegang gergaji, dengan papan kayu di kaki',
  }[kode];
  let isi;
  if (kode === 'pengawas') {
    isi = (
      <Tubuh
        tanganKiri={[30, 121]}
        tanganKanan={[94, 121]}
        depan={
          <>
            <g transform="translate(20 96) rotate(-18)">
              <rect x="-5" y="-4" width="11" height="50" rx="2" fill={L} stroke={T} strokeWidth="2.2" />
              <rect x="-5" y="14" width="11" height="6" fill={B} stroke={T} strokeWidth="1.5" />
            </g>
            <Tangan x={30} y={121} />
            <rect x="94" y="118" width="16" height="14" rx="3" fill={B} stroke={T} strokeWidth="2.2" />
            <path d="M110 125h12" stroke={T} strokeWidth="2.2" />
            <Tangan x={94} y={121} />
          </>
        }
      />
    );
  } else if (kode === 'batu') {
    isi = (
      <Tubuh
        lenganKanan="M82 88L98 104"
        tanganKanan={[99, 105]}
        tanganKiri={[30, 121]}
        belakang={
          <>
            <rect x="92" y="156" width="26" height="8" fill={L} stroke={T} strokeWidth="2" />
            <rect x="98" y="148" width="26" height="8" fill={L} stroke={T} strokeWidth="2" />
            <path d="M105 148v8M111 156v8" stroke={T} strokeWidth="1.5" />
          </>
        }
        depan={
          <>
            <rect x="14" y="118" width="26" height="12" fill={L} stroke={T} strokeWidth="2.2" />
            <path d="M22 118v12M32 118v12" stroke={T} strokeWidth="1.2" strokeOpacity=".6" />
            <path d="M99 105L109 94" stroke={T} strokeWidth="3.2" strokeLinecap="round" />
            <path d="M106 96L112 86L127 78L120 95Z" fill={M} stroke={T} strokeWidth="2.2" strokeLinejoin="round" />
            <Tangan x={99} y={105} />
          </>
        }
      />
    );
  } else if (kode === 'cat') {
    isi = (
      <Tubuh
        lenganKanan="M82 88L98 76"
        tanganKanan={[98, 77]}
        tanganKiri={[28, 119]}
        lenganKiri="M42 88L28 118"
        belakang={<path d="M20 164c6-4 14-4 22 0" stroke={T} strokeOpacity=".4" strokeWidth="2" fill="none" />}
        depan={
          <>
            <path d="M111 30L98 78" stroke={T} strokeWidth="3.2" strokeLinecap="round" />
            <rect x="94" y="16" width="32" height="13" rx="5" fill={M} stroke={T} strokeWidth="2.4" />
            <path d="M126 22h4v10l-19 0" fill="none" stroke={T} strokeWidth="2" />
            <rect x="12" y="124" width="26" height="28" fill={L} stroke={T} strokeWidth="2.4" />
            <path d="M12 134h26" stroke={T} strokeWidth="2" />
            <rect x="12" y="124" width="26" height="6" fill={B} stroke={T} strokeWidth="2" />
            <path d="M16 124a9 9 0 0 1 18 0" fill="none" stroke={T} strokeWidth="2" />
            <Tangan x={28} y={119} />
            <Tangan x={98} y={77} />
          </>
        }
      />
    );
  } else {
    isi = (
      <Tubuh
        lenganKanan="M82 88L100 108"
        tanganKanan={[100, 109]}
        belakang={
          <>
            <rect x="14" y="156" width="74" height="8" fill={L} stroke={T} strokeWidth="2" />
            <path d="M30 156v8M52 156v8M72 156v8" stroke={T} strokeWidth="1.2" strokeOpacity=".5" />
          </>
        }
        depan={
          <>
            <path d="M104 106L127 112V124L104 117Z" fill={M} stroke={T} strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M104 117L108 122L112 118L116 123L120 119L124 125L127 124" fill="none" stroke={T} strokeWidth="1.6" strokeLinejoin="round" />
            <rect x="96" y="102" width="12" height="18" rx="3" fill={B} stroke={T} strokeWidth="2.2" />
            <Tangan x={100} y={109} />
          </>
        }
      />
    );
  }
  return (
    <svg viewBox="0 0 130 172" className="h-auto w-full" role="img" aria-label={label}>
      {isi}
    </svg>
  );
}

/* ---------- Gambar garis sebelum-sesudah untuk tiga proyek contoh (viewBox 360 x 260) ---------- */

function Dinding({ d, ...sisa }) {
  return <path d={d} fill="none" stroke={T} strokeWidth="5" strokeLinejoin="miter" {...sisa} />;
}

function Pintu({ x, y, panjang, menghadap = 'atas' }) {
  // celah di dinding bawah, daun pintu terbuka ke dalam, dan busur ayunan
  return (
    <g>
      <path d={`M${x} ${y}h${panjang}`} stroke={L} strokeWidth="8" />
      <path d={`M${x} ${y}v${-panjang}`} stroke={T} strokeWidth="3.2" />
      <path d={`M${x} ${y - panjang}A${panjang} ${panjang} 0 0 1 ${x + panjang} ${y}`} fill="none" stroke={T} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={`M${x} ${y - 4}v8M${x + panjang} ${y - 4}v8`} stroke={T} strokeWidth="2" />
    </g>
  );
}

function Jendela({ x, y1, y2 }) {
  return (
    <g>
      <path d={`M${x} ${y1}V${y2}`} stroke={L} strokeWidth="8" />
      <path d={`M${x - 3} ${y1}V${y2}M${x + 3} ${y1}V${y2}`} stroke={T} strokeWidth="1.5" />
      <path d={`M${x - 5} ${y1}h10M${x - 5} ${y2}h10`} stroke={T} strokeWidth="2" />
    </g>
  );
}

function DapurSebelum() {
  return (
    <g>
      <DimH x1={90} x2={270} y={26} label="3,0 m" />
      <DimV x={60} y1={50} y2={230} label="3,0 m" />
      <path d="M100 160l30-22l22 34l36-16l22 40M210 112l-18 40l30 16" fill="none" stroke={T} strokeOpacity=".45" strokeWidth="1.5" />
      <path d="M96 128l-4 16M258 190l-12 22" fill="none" stroke={T} strokeOpacity=".45" strokeWidth="1.5" />
      <Dinding d="M90 50H270V230H90Z" />
      <Pintu x={112} y={230} panjang={40} />
      <Jendela x={270} y1={120} y2={170} />
      <rect x="93" y="53" width="174" height="36" fill={L} stroke={T} strokeWidth="2" />
      <path d="M93 62H267M93 71H267M93 80H267" stroke={T} strokeOpacity=".2" strokeWidth="1" />
      <path d="M156 53l9 12l-7 8l10 16" fill="none" stroke={T} strokeWidth="2" strokeLinejoin="round" />
      <rect x="100" y="58" width="44" height="26" fill={P} stroke={T} strokeWidth="2" />
      {[[112, 66], [132, 66], [112, 77], [132, 77]].map(([cx, cy]) => (
        <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="4.5" fill="none" stroke={T} strokeWidth="1.5" />
      ))}
      <rect x="214" y="58" width="48" height="26" fill={P} stroke={T} strokeWidth="2" />
      <rect x="220" y="62" width="26" height="18" fill="none" stroke={T} strokeWidth="1.5" />
      <circle cx="254" cy="71" r="3" fill={T} />
      <circle cx="180" cy="50" r="6" fill={L} stroke={T} strokeWidth="2" />
      <path d="M177 48v4M183 48v4" stroke={T} strokeWidth="1.5" />
      <DimH x1={144} x2={214} y={108} label="1,2 m" />
    </g>
  );
}

function DapurSesudah() {
  return (
    <g>
      <DimH x1={90} x2={270} y={26} label="3,0 m" />
      <DimV x={60} y1={50} y2={230} label="3,0 m" />
      <path d="M120 50V230M150 50V230M180 50V230M210 50V230M240 50V230M90 80H270M90 110H270M90 140H270M90 170H270M90 200H270" stroke={M} strokeWidth="1" fill="none" />
      <Dinding d="M90 50H270V230H90Z" />
      <Pintu x={112} y={230} panjang={40} />
      <Jendela x={270} y1={120} y2={170} />
      <path d="M93 53H267V167H231V89H93Z" fill={P} stroke={T} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="178" y="58" width="44" height="26" fill={L} stroke={T} strokeWidth="2" />
      {[[190, 66], [210, 66], [190, 77], [210, 77]].map(([cx, cy]) => (
        <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="4.5" fill="none" stroke={T} strokeWidth="1.5" />
      ))}
      <rect x="236" y="100" width="26" height="50" fill={L} stroke={T} strokeWidth="2" />
      <rect x="240" y="105" width="18" height="40" fill="none" stroke={T} strokeWidth="1.5" />
      <circle cx="249" cy="95" r="3" fill={T} />
      {[[120, 50], [200, 50], [270, 102]].map(([cx, cy]) => (
        <g key={`${cx}${cy}`}>
          <circle cx={cx} cy={cy} r="6" fill={L} stroke={T} strokeWidth="2" />
          <path d={cy === 50 ? `M${cx - 3} ${cy - 2}v4M${cx + 3} ${cy - 2}v4` : `M${cx - 2} ${cy - 3}h4M${cx - 2} ${cy + 3}h4`} stroke={T} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M200 71L249 125" stroke={B} strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
      <DimH x1={93} x2={231} y={108} label="2,3 m" />
    </g>
  );
}

function KamarMandiDasar({ kiriAtas }) {
  return (
    <g>
      <DimH x1={110} x2={250} y={24} label="2,0 m" />
      <DimV x={82} y1={45} y2={220} label="2,5 m" />
      {kiriAtas}
      <Dinding d="M110 45H250V220H110Z" />
      <Pintu x={126} y={220} panjang={34} />
    </g>
  );
}

function KamarMandiSebelum() {
  return (
    <KamarMandiDasar
      kiriAtas={
        <g>
          <path d="M118 120l16 10l-8 14l20 12M232 134l-14 16l12 12" fill="none" stroke={T} strokeOpacity=".5" strokeWidth="1.6" />
          <path d="M150 168c8-12 26-14 38-6c14-2 22 8 18 18c-2 12-22 18-38 14c-14-2-24-12-18-26z" fill={M} fillOpacity=".7" stroke={B} strokeWidth="1.8" />
          <path d="M158 174h28M160 182h36M164 190h26" stroke={B} strokeWidth="1.4" fill="none" />
          <rect x="116" y="51" width="48" height="48" fill={P} stroke={T} strokeWidth="2" />
          <rect x="122" y="57" width="36" height="36" fill="none" stroke={T} strokeWidth="1.5" />
          <rect x="190" y="51" width="54" height="66" rx="24" fill={P} stroke={T} strokeWidth="2" />
          <ellipse cx="217" cy="88" rx="9" ry="15" fill={L} stroke={T} strokeWidth="2" />
          <rect x="196" y="60" width="11" height="18" fill="none" stroke={T} strokeWidth="1.5" />
          <rect x="227" y="60" width="11" height="18" fill="none" stroke={T} strokeWidth="1.5" />
          <circle cx="232" cy="200" r="6" fill={L} stroke={T} strokeWidth="1.8" />
          <path d="M229 197l6 6M235 197l-6 6" stroke={T} strokeWidth="1.2" />
          {[[117, 150, 4], [118, 166, 3], [117, 136, 3]].map(([cx, cy, r]) => (
            <circle key={cy} cx={cx} cy={cy} r={r} fill={T} fillOpacity=".4" />
          ))}
        </g>
      }
    />
  );
}

function Panah({ x1, y1, x2, y2 }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const p = (r, d) => `${x2 + Math.cos(a + d) * r},${y2 + Math.sin(a + d) * r}`;
  return (
    <g>
      <path d={`M${x1} ${y1}L${x2} ${y2}`} stroke={B} strokeWidth="2" />
      <path d={`M${x2},${y2}L${p(9, Math.PI - 0.45)}L${p(9, Math.PI + 0.45)}Z`} fill={B} />
    </g>
  );
}

function KamarMandiSesudah() {
  const garisX = [127.5, 145, 162.5, 180, 197.5, 215, 232.5].map((x) => `M${x} 45V220`).join('');
  const garisY = [62.5, 80, 97.5, 115, 132.5, 150, 167.5, 185, 202.5].map((y) => `M110 ${y}H250`).join('');
  return (
    <KamarMandiDasar
      kiriAtas={
        <g>
          <path d={garisX + garisY} stroke={M} strokeWidth="1" fill="none" />
          <path d="M118 53H242V212H118Z" fill="none" stroke={B} strokeWidth="1.5" strokeDasharray="6 4" />
          <Panah x1={134} y1={150} x2={162} y2={150} />
          <Panah x1={226} y1={150} x2={198} y2={150} />
          <Panah x1={180} y1={112} x2={180} y2={132} />
          <Panah x1={180} y1={204} x2={180} y2={168} />
          <circle cx="180" cy="150" r="9" fill={L} stroke={T} strokeWidth="2.2" />
          <path d="M174 144l12 12M186 144l-12 12" stroke={T} strokeWidth="1.5" />
          <rect x="198" y="51" width="44" height="16" fill={P} stroke={T} strokeWidth="2" />
          <ellipse cx="220" cy="90" rx="18" ry="24" fill={L} stroke={T} strokeWidth="2.5" />
          <ellipse cx="220" cy="92" rx="11" ry="16" fill="none" stroke={T} strokeWidth="1.5" />
          <rect x="116" y="96" width="30" height="46" fill={P} stroke={T} strokeWidth="2" />
          <ellipse cx="131" cy="119" rx="9" ry="15" fill={L} stroke={T} strokeWidth="1.5" />
          <circle cx="122" cy="119" r="2.5" fill={T} />
        </g>
      }
    />
  );
}

function LantaiDasar() {
  return (
    <g>
      <path d="M20 222H340" stroke={T} strokeWidth="3" />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i} d={`M${34 + i * 20} 222l-8 10`} stroke={T} strokeOpacity=".4" strokeWidth="1.3" />
      ))}
      <rect x="70" y="150" width="220" height="72" fill={L} stroke={T} strokeWidth="3" />
      <rect x="165" y="176" width="30" height="46" fill={P} stroke={T} strokeWidth="2" />
      <circle cx="188" cy="200" r="2.2" fill={T} />
      {[92, 220].map((x) => (
        <g key={x}>
          <rect x={x} y="168" width="48" height="30" fill={P} stroke={T} strokeWidth="2" />
          <path d={`M${x + 24} 168v30M${x} 183h48`} stroke={T} strokeWidth="1.5" />
        </g>
      ))}
      <DimH x1={70} x2={290} y={248} label="8,0 m" />
    </g>
  );
}

function LantaiSebelum() {
  return (
    <g>
      <LantaiDasar />
      <polygon points="62,150 86,108 274,108 298,150" fill={P} stroke={T} strokeWidth="3" strokeLinejoin="round" />
      <path d="M79 120H281M72.3 132H287.7M66.6 142H293.4" stroke={T} strokeOpacity=".5" strokeWidth="1.3" />
    </g>
  );
}

function LantaiSesudah() {
  return (
    <g>
      <LantaiDasar />
      <polygon points="62,150 86,118 125,118 125,150" fill={P} stroke={T} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="235,150 235,118 274,118 298,150" fill={P} stroke={T} strokeWidth="3" strokeLinejoin="round" />
      <path d="M77 130H125M69.5 140H125M235 130H283M235 140H290.5" stroke={T} strokeOpacity=".5" strokeWidth="1.3" />
      <rect x="125" y="73" width="110" height="77" fill={L} stroke={T} strokeWidth="3" />
      <polygon points="115,73 180,32 245,73" fill={P} stroke={T} strokeWidth="3" strokeLinejoin="round" />
      <path d="M135.6 60H224.4M154.6 48H205.4" stroke={T} strokeOpacity=".5" strokeWidth="1.3" />
      <rect x="150" y="96" width="60" height="32" fill={P} stroke={T} strokeWidth="2" />
      <path d="M180 96v32M150 112h60" stroke={T} strokeWidth="1.5" />
      <DimH x1={125} x2={235} y={14} label="4,0 m" />
      <DimV x={322} y1={73} y2={150} label="2,8 m" />
    </g>
  );
}

const PROYEK = {
  'dapur-l': { sebelum: DapurSebelum, sesudah: DapurSesudah },
  'kamar-mandi-miring': { sebelum: KamarMandiSebelum, sesudah: KamarMandiSesudah },
  'kamar-lantai-dua': { sebelum: LantaiSebelum, sesudah: LantaiSesudah },
};

export function GambarProyek({ kunci, tahap, label }) {
  const Isi = PROYEK[kunci][tahap];
  return (
    <svg viewBox="0 0 360 260" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'} focusable="false" preserveAspectRatio="xMidYMid meet">
      <rect width="360" height="260" fill={L} />
      <Isi />
    </svg>
  );
}

/* ---------- Peta ilustrasi (bukan peta sungguhan) ---------- */

export function PetaContoh() {
  const blok = [
    [16, 16, 88, 74],
    [136, 16, 96, 74],
    [16, 122, 88, 66],
    [136, 122, 98, 66],
    [266, 122, 78, 66],
  ];
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Peta ilustrasi: beberapa blok bangunan, jalan, sungai kecil, dan satu penanda lokasi contoh. Bukan peta sungguhan.">
      <defs>
        <pattern id="peta-arsir" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V8" stroke={B} strokeOpacity=".35" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="360" height="220" fill={L} />
      {blok.map(([x, y, w, h]) => (
        <rect key={`${x}${y}`} x={x} y={y} width={w} height={h} fill="url(#peta-arsir)" stroke={T} strokeWidth="1.5" />
      ))}
      {['M0 105H360', 'M120 0V220', 'M250 105V220'].map((d) => (
        <g key={d} fill="none">
          <path d={d} stroke={T} strokeWidth="18" />
          <path d={d} stroke={L} strokeWidth="14" />
        </g>
      ))}
      <path d="M0 206C50 196 90 214 150 204S250 194 360 208V220H0Z" fill={M} stroke={B} strokeWidth="2" />
      <path d="M181 84C170 70 166 62 166 54a15 15 0 0 1 30 0c0 8-4 15-15 30z" fill={B} stroke={T} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="181" cy="54" r="5.5" fill={O} stroke={T} strokeWidth="1.5" />
      <path d="M316 22l-9 24h18z" fill={T} />
      <text x="316" y="68" textAnchor="middle" className="svg-teks" style={{ color: T }}>U</text>
    </svg>
  );
}

/* ---------- Denah ---------- */

// Denah contoh 4 x 3 m di lembar biru (garis mengikuti warna teks lembar).
export function DenahMini() {
  const garis = [];
  for (let i = 1; i < 8; i++) garis.push(`M${48 + i * 22.5} 44V179`);
  for (let i = 1; i < 6; i++) garis.push(`M48 ${44 + i * 22.5}H228`);
  return (
    <svg viewBox="0 0 260 192" className="h-auto w-full" role="img" aria-label="Denah contoh ruangan 4 kali 3 meter dengan luas 12 meter persegi" style={{ color: 'currentColor' }}>
      <DimH x1={48} x2={228} y={20} label="4,0 m" warna="currentColor" bg="#1f43a0" />
      <DimV x={22} y1={44} y2={179} label="3,0 m" warna="currentColor" bg="#1f43a0" />
      <path d={garis.join('')} stroke="currentColor" strokeOpacity=".25" strokeWidth="1" fill="none" />
      <path d="M48 44H228V179H48Z" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M62 179h30" stroke="#1f43a0" strokeWidth="8" />
      <path d="M62 179v-30" stroke="currentColor" strokeWidth="3" />
      <path d="M62 149A30 30 0 0 1 92 179" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M228 80V130" stroke="#1f43a0" strokeWidth="8" />
      <path d="M225 80V130M231 80V130M222 80h12M222 130h12" stroke="currentColor" strokeWidth="1.6" />
      <text x="138" y="124" textAnchor="middle" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, fill: 'currentColor', letterSpacing: '0.02em' }}>
        12 M²
      </text>
    </svg>
  );
}

// Denah hidup untuk Hitung Biaya: ukuran ruang mengikuti geseran, tanda pekerjaan mengikuti pilihan.
export function DenahHitung({ lebar, dalam, luas, pilihan }) {
  const s = 40;
  const W = lebar * s;
  const H = dalam * s;
  const x0 = 48 + (312 - W) / 2;
  const y0 = 40 + (232 - H) / 2;
  const x1 = x0 + W;
  const y1 = y0 + H;
  const cat = pilihan.includes('cat');
  const pintu = Math.min(34, W / 3);
  const jend = Math.min(50, H / 2);
  const ukuranTeks = Math.max(16, Math.min(28, W / 4.2));
  return (
    <svg viewBox="0 0 360 280" className="h-auto w-full" role="img" aria-label={`Denah ruangan kira-kira ${meter(lebar)} kali ${meter(dalam)} meter, luas ${m2(luas)} meter persegi`}>
      <defs>
        <pattern id="hc-ubin" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke={B} strokeOpacity=".4" strokeWidth="1.2" />
        </pattern>
        <pattern id="hc-plafon" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 0H24M0 0V24" fill="none" stroke={T} strokeOpacity=".55" strokeWidth="1.3" strokeDasharray="5 4" />
        </pattern>
      </defs>
      <rect width="360" height="280" fill={L} />
      <DimH x1={x0} x2={x1} y={y0 - 20} label={`${meter(lebar)} m`} />
      <DimV x={x0 - 20} y1={y0} y2={y1} label={`${meter(dalam)} m`} />
      {pilihan.includes('atap') && (
        <g fill="none" stroke={T} strokeWidth="2" strokeDasharray="8 5">
          <rect x={x0 - 9} y={y0 - 9} width={W + 18} height={H + 18} />
          <path d={`M${x0 - 9} ${y0 - 9}L${x0} ${y0}M${x1 + 9} ${y0 - 9}L${x1} ${y0}M${x0 - 9} ${y1 + 9}L${x0} ${y1}M${x1 + 9} ${y1 + 9}L${x1} ${y1}`} />
        </g>
      )}
      <rect x={x0} y={y0} width={W} height={H} fill={P} />
      {pilihan.includes('keramik') && <rect x={x0} y={y0} width={W} height={H} fill="url(#hc-ubin)" />}
      {pilihan.includes('plafon') && <rect x={x0} y={y0} width={W} height={H} fill="url(#hc-plafon)" />}
      <rect x={x0} y={y0} width={W} height={H} fill="none" stroke={cat ? B : T} strokeWidth={cat ? 9 : 4.5} />
      <path d={`M${x0 + 12} ${y1}h${pintu}`} stroke={L} strokeWidth="10" />
      <path d={`M${x0 + 12} ${y1}v${-pintu}`} stroke={T} strokeWidth="3" />
      <path d={`M${x0 + 12} ${y1 - pintu}A${pintu} ${pintu} 0 0 1 ${x0 + 12 + pintu} ${y1}`} fill="none" stroke={T} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={`M${x1} ${y0 + H / 2 - jend / 2}v${jend}`} stroke={L} strokeWidth="10" />
      <path d={`M${x1 - 3} ${y0 + H / 2 - jend / 2}v${jend}M${x1 + 3} ${y0 + H / 2 - jend / 2}v${jend}`} stroke={T} strokeWidth="1.6" />
      <text x={x0 + W / 2} y={y0 + H / 2 + ukuranTeks / 3} textAnchor="middle" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: ukuranTeks, fill: B, letterSpacing: '0.02em' }}>
        {m2(luas)} M²
      </text>
    </svg>
  );
}
