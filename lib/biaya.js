// Hitung kasar biaya. Semua tarif per m² di sini rekaan (wajar, tapi bukan harga pasar atau penawaran).

export const kelasBahan = [
  { id: 'hemat', nama: 'Hemat', catatan: 'Bahan dasar yang umum dipakai.' },
  { id: 'menengah', nama: 'Menengah', catatan: 'Bahan yang lazim untuk rumah tinggal.' },
  { id: 'bagus', nama: 'Bagus', catatan: 'Lebih tahan lama, hasil akhir lebih halus.' },
];

// hari(volume): lama kerja contoh dalam hari kerja untuk satu pekerjaan
export const pekerjaan = [
  {
    id: 'cat',
    nama: 'Cat ulang dinding',
    uraian: 'Kerok, plamir, cat dasar, dua lapis cat.',
    dasar: 'luas dinding',
    tarif: { hemat: 55000, menengah: 80000, bagus: 115000 },
    hari: (v) => 1 + v / 25,
  },
  {
    id: 'keramik',
    nama: 'Ganti keramik lantai',
    uraian: 'Bongkar keramik lama, pasang yang baru, isi nat.',
    dasar: 'luas lantai',
    tarif: { hemat: 250000, menengah: 360000, bagus: 520000 },
    hari: (v) => 2 + v / 6,
  },
  {
    id: 'plafon',
    nama: 'Plafon baru',
    uraian: 'Rangka dan penutup plafon, lalu dicat.',
    dasar: 'luas plafon',
    tarif: { hemat: 110000, menengah: 165000, bagus: 230000 },
    hari: (v) => 1 + v / 10,
  },
  {
    id: 'atap',
    nama: 'Ganti penutup atap',
    uraian: 'Rangka seperlunya dan penutup atap baru.',
    dasar: 'luas atap',
    tarif: { hemat: 300000, menengah: 420000, bagus: 620000 },
    hari: (v) => 2 + v / 10,
  },
];

export const asumsi = {
  rasio: '4 : 3',
  tinggiDinding: 3,
  bukaan: 0.85, // pintu dan jendela dikurangkan
  faktorAtap: 1.3, // kemiringan dan teritis
  bawah: 0.9,
  atas: 1.2,
};

// Ruangan dianggap persegi panjang dengan perbandingan 4 : 3.
export function bentukRuang(luas) {
  const lebar = Math.sqrt((luas * 4) / 3);
  const dalam = luas / lebar;
  return { lebar, dalam, keliling: 2 * (lebar + dalam) };
}

const bulat = (n) => Math.round(n / 10000) * 10000;

export function hitung({ luas, dipilih, kelas }) {
  const { keliling } = bentukRuang(luas);
  const volume = {
    cat: keliling * asumsi.tinggiDinding * asumsi.bukaan,
    keramik: luas,
    plafon: luas,
    atap: luas * asumsi.faktorAtap,
  };
  const baris = pekerjaan
    .filter((p) => dipilih.includes(p.id))
    .map((p) => {
      const v = volume[p.id];
      const tarif = p.tarif[kelas];
      const tengah = v * tarif;
      const hari = p.hari(v);
      return {
        id: p.id,
        nama: p.nama,
        volume: v,
        tarif,
        bawah: bulat(tengah * asumsi.bawah),
        atas: bulat(tengah * asumsi.atas),
        hariMin: Math.ceil(hari),
        hariMaks: Math.ceil(hari * 1.4),
      };
    });
  return {
    baris,
    bawah: baris.reduce((a, b) => a + b.bawah, 0),
    atas: baris.reduce((a, b) => a + b.atas, 0),
    hariMin: baris.reduce((a, b) => a + b.hariMin, 0),
    hariMaks: baris.reduce((a, b) => a + b.hariMaks, 0),
  };
}

const idr = new Intl.NumberFormat('id-ID');
export const rupiah = (n) => `Rp ${idr.format(n)}`;
export const juta = (n) => (n / 1e6).toFixed(1).replace('.', ',');
export const meter = (n) => n.toFixed(1).replace('.', ',');
export const m2 = (n) => idr.format(Math.round(n * 10) / 10);
export const rentangHari = (a, b) => (a === b ? `${a} hari kerja` : `${a}–${b} hari kerja`);
export const rentangJuta = (a, b) => `Rp ${juta(a)}–${juta(b)} juta`;
