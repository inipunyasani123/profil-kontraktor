// Semua isi Bowplank (usaha rekaan): identitas, layanan, proyek contoh, cara kerja.
// Tidak ada nomor telepon, email, rating, atau ulasan: kontak hanya lewat pesan WhatsApp tanpa nomor.

export const site = {
  nama: 'Bowplank',
  url: 'https://profil-kontraktor.pintuweb.id',
  judul: 'Bowplank | Renovasi dan Bangun Rumah di Medan',
  deskripsi:
    'Bowplank, kontraktor renovasi dan bangun rumah di Medan. Lihat layanan, proyek contoh, dan hitung kasar biaya. Usaha rekaan untuk situs demo.',
  tagline: 'Rumahmu diukur dulu, baru dikerjakan.',
  kota: 'Medan',
  provinsi: 'Sumatera Utara',
  jalan: 'Jl. Patok Ukur No. 14 (alamat contoh)',
  jam: { hari: 'Senin–Sabtu', buka: '08.00', tutup: '17.00', zona: 'WIB' },
  diperbarui: '2026-11-02',
};

export const jamTeks = `${site.jam.hari}, ${site.jam.buka}–${site.jam.tutup} ${site.jam.zona}`;

// Enam halaman. Nomor lembar mengikuti halaman: Beranda A-01, Profil A-11, dst.
export const navigasi = [
  { href: '/', label: 'Beranda', lembar: 'A-01' },
  { href: '/profil', label: 'Profil', lembar: 'A-11' },
  { href: '/layanan', label: 'Layanan', lembar: 'A-21' },
  { href: '/hitung-biaya', label: 'Hitung biaya', lembar: 'A-31' },
  { href: '/kabar', label: 'Kabar', lembar: 'A-41' },
  { href: '/kontak', label: 'Kontak', lembar: 'A-51' },
];

export const layanan = [
  {
    slug: 'dapur',
    nomor: 'A-22',
    nama: 'Renovasi dapur',
    ringkas: 'Dapur lama dibongkar lalu ditata ulang: meja, keramik, pipa air, dan titik listrik.',
    ukuran: '3\u00A0×\u00A03\u00A0m',
    lama: { min: 12, maks: 18, satuan: 'hari kerja', catatan: 'untuk dapur 3\u00A0×\u00A03\u00A0m' },
    dikerjakan: [
      'Bongkar meja, keramik, dan perlengkapan yang sudah rusak.',
      'Perbaiki atau pindahkan pipa air bersih dan buangan.',
      'Buat meja dapur dari beton dengan pelapis keramik.',
      'Pasang keramik lantai dan dinding, lalu cat.',
    ],
    siapkan: [
      'Pindahkan peralatan masak dan siapkan tempat memasak sementara.',
      'Putuskan letak kompor dan bak cuci sebelum kerja dimulai.',
      'Pilih contoh keramik dan warna cat lebih dulu.',
      'Pastikan air dan listrik boleh dimatikan sebagian hari.',
    ],
    foto: { src: '/images/dapur.jpg', w: 1920, h: 1275, alt: 'Dapur putih dengan kulkas baja, meja pulau, dan dua lampu gantung hitam' },
  },
  {
    slug: 'kamar-mandi',
    nomor: 'A-23',
    nama: 'Renovasi kamar mandi',
    ringkas: 'Lantai dimiringkan ke lubang buangan, dilapisi kedap air, lalu dipasang keramik baru.',
    ukuran: '2\u00A0×\u00A02,5\u00A0m',
    lama: { min: 7, maks: 10, satuan: 'hari kerja', catatan: 'untuk kamar mandi 2\u00A0×\u00A02,5\u00A0m, termasuk uji genang 1–2 hari' },
    dikerjakan: [
      'Bongkar keramik lama dan periksa pipa yang bocor.',
      'Buat lantai miring pelan ke arah lubang buangan.',
      'Lapisi lantai dan dinding bagian bawah dengan bahan kedap air.',
      'Pasang keramik, kloset, wastafel, dan kran.',
    ],
    siapkan: [
      'Cari kamar mandi cadangan selama pekerjaan.',
      'Kosongkan barang di dalam kamar mandi.',
      'Pilih keramik, kloset, dan kran sebelum bongkar.',
      'Beri tahu kami letak keran induk air rumah.',
    ],
    foto: { src: '/images/kamar-mandi.jpg', w: 1920, h: 1440, alt: 'Kamar mandi berkeramik krem dengan bak mandi, wastafel, dan kloset' },
  },
  {
    slug: 'atap-plafon',
    nomor: 'A-24',
    nama: 'Atap dan plafon',
    ringkas: 'Atap bocor diperiksa dari rangka sampai talang, lalu penutup dan plafon diganti seperlunya.',
    ukuran: 'atap rumah tipe sedang',
    lama: { min: 6, maks: 10, satuan: 'hari kerja', catatan: 'tergantung cuaca dan luas atap' },
    dikerjakan: [
      'Periksa penutup atap dan ganti yang pecah atau bergeser.',
      'Perkuat atau ganti rangka atap yang lapuk.',
      'Pasang plafon baru, lalu cat.',
      'Perbaiki talang dan sambungannya ke dinding.',
    ],
    siapkan: [
      'Tutup atau pindahkan perabot di bawah bagian atap yang dikerjakan.',
      'Catat atau foto titik bocor yang kamu tahu.',
      'Pilih jenis penutup atap dan warna plafon.',
      'Sediakan jalur untuk tangga dan bahan di halaman.',
    ],
    foto: { src: '/images/rangka-kayu.jpg', w: 1920, h: 1280, alt: 'Plafon papan putih dengan balok rangka kayu dan dua lampu gantung tembaga' },
  },
  {
    slug: 'cat-ulang',
    nomor: 'A-25',
    nama: 'Cat ulang',
    ringkas: 'Dinding dibersihkan, ditambal, diplamir, lalu dicat dua lapis.',
    ukuran: 'tiga ruangan',
    lama: { min: 3, maks: 5, satuan: 'hari kerja', catatan: 'untuk tiga ruangan satu lantai; tambah 1 hari bila dinding lembap' },
    dikerjakan: [
      'Kerok cat yang mengelupas dan tambal retak halus.',
      'Plamir dinding sampai rata.',
      'Cat dasar, lalu tunggu kering.',
      'Cat dua lapis, kusen dan lantai dilindungi.',
    ],
    siapkan: [
      'Pilih warna dan coba di satu sudut dinding.',
      'Kosongkan ruangan atau kumpulkan perabot di tengah.',
      'Beri tahu bila ada dinding yang sering lembap.',
      'Buka akses ke semua ruangan yang akan dicat.',
    ],
    foto: { src: '/images/cat-kuas.jpg', w: 1920, h: 1300, alt: 'Kuas cat di atas kaleng berisi cat putih' },
  },
  {
    slug: 'tambah-kamar',
    nomor: 'A-26',
    nama: 'Tambah kamar atau lantai',
    ringkas: 'Kamar baru di samping atau di atas rumah, dimulai dari pemeriksaan pondasi dan kolom.',
    ukuran: '3\u00A0×\u00A04\u00A0m',
    lama: { min: 10, maks: 14, satuan: 'minggu', catatan: 'untuk satu kamar 3\u00A0×\u00A04\u00A0m di lantai dua' },
    dikerjakan: [
      'Periksa pondasi dan kolom rumah lama lebih dulu.',
      'Cor kolom dan balok baru.',
      'Pasang dinding, atap, dan tangga.',
      'Pasang listrik dan pipa air untuk kamar baru.',
    ],
    siapkan: [
      'Cari denah atau gambar rumah lama bila ada.',
      'Tentukan jumlah dan ukuran kamar yang diinginkan.',
      'Bicara dengan tetangga, lalu tanyakan aturan dan izin bangunan ke kelurahan atau dinas setempat.',
      'Sisihkan dana cadangan untuk hal yang baru terlihat setelah dinding dibuka.',
    ],
    foto: { src: '/images/bata.jpg', w: 1920, h: 1285, alt: 'Dinding bata merah dengan plester putih yang mengelupas' },
  },
];

// Tiga proyek contoh. Gambar garis sebelum-sesudah ada di components/Gambar.js (kunci = slug).
export const proyek = [
  {
    slug: 'dapur-l',
    nomor: 'A-27',
    judulLembar: 'Proyek: dapur L',
    nama: 'Dapur 3\u00A0×\u00A03\u00A0m jadi bentuk L',
    ukuran: '3\u00A0×\u00A03\u00A0m',
    lama: '15 hari kerja',
    tampak: 'Denah dapur dilihat dari atas',
    sebelum: ['Kompor dan bak cuci berjauhan.', 'Meja kayu lapuk dan keramik retak.', 'Satu titik listrik untuk semua alat.'],
    sesudah: ['Meja beton berbentuk L, bak cuci dekat jendela.', 'Keramik baru di lantai dan di atas meja.', 'Tiga titik listrik di sepanjang meja.'],
  },
  {
    slug: 'kamar-mandi-miring',
    nomor: 'A-28',
    judulLembar: 'Proyek: kamar mandi',
    nama: 'Kamar mandi 2\u00A0×\u00A02,5\u00A0m yang tidak lagi tergenang',
    ukuran: '2\u00A0×\u00A02,5\u00A0m',
    lama: '9 hari kerja',
    tampak: 'Denah kamar mandi dilihat dari atas',
    sebelum: ['Lantai datar, air menggenang di sudut.', 'Keramik retak dan dinding berjamur.', 'Kloset jongkok yang sulit dibersihkan.'],
    sesudah: ['Lantai miring pelan ke lubang buangan.', 'Lapisan kedap air dan keramik baru.', 'Kloset duduk dan wastafel kecil.'],
  },
  {
    slug: 'kamar-lantai-dua',
    nomor: 'A-29',
    judulLembar: 'Proyek: tambah kamar',
    nama: 'Rumah satu lantai tambah satu kamar di atas',
    ukuran: 'kamar 4\u00A0×\u00A03\u00A0m',
    lama: '12 minggu',
    tampak: 'Tampak depan rumah',
    sebelum: ['Rumah satu lantai dengan tiga kamar.', 'Anak bertambah, kamar kurang satu.', 'Halaman sempit, tidak bisa melebar.'],
    sesudah: ['Satu kamar baru di atas ruang depan.', 'Tangga baru dari ruang depan.', 'Atap pelana baru yang menyambung ke atap lama.'],
  },
];

// Cara kerja: titik ukur A sampai D (rantai ukuran).
export const urutanKerja = [
  { titik: 'A', judul: 'Datang dan ukur', waktu: 'hari pertama', isi: 'Kami lihat rumahnya, ukur ruangnya, dan dengar maumu.' },
  { titik: 'B', judul: 'Hitungan tertulis', waktu: '1–2 hari setelah ukur', isi: 'Kamu terima rincian pekerjaan, bahan, dan lama kerja. Setuju dulu, baru mulai.' },
  { titik: 'C', judul: 'Pengerjaan', waktu: 'sesuai pekerjaan', isi: 'Foto kerja dikirim lewat WhatsApp tiap akhir hari kerja.' },
  { titik: 'D', judul: 'Cek bersama', waktu: 'hari terakhir', isi: 'Kita keliling bareng. Yang kurang rapi dicatat dan dibenahi.' },
];

// Catatan umum, seperti catatan di pojok gambar kerja.
export const prinsip = [
  { judul: 'Ukur dulu.', isi: 'Tidak ada pekerjaan yang dimulai sebelum ukuran dicatat dan kamu setuju dengan gambarnya.' },
  { judul: 'Hitungan ditulis.', isi: 'Pekerjaan, bahan, dan lama kerja ada di atas kertas. Kalau berubah di tengah jalan, kami kabari dulu.' },
  { judul: 'Kabar tiap hari.', isi: 'Foto hasil kerja dikirim lewat WhatsApp di akhir hari kerja, supaya kamu tahu kemajuannya tanpa harus datang.' },
  { judul: 'Cek bersama.', isi: 'Di hari terakhir, kita keliling rumah bersama. Yang belum rapi dicatat dan dibenahi.' },
];

// Orang di lapangan: ilustrasi buatan sendiri tanpa wajah (components/Gambar.js, komponen Tukang).
export const orangLapangan = [
  { kode: 'pengawas', peran: 'Pengawas lapangan', isi: 'Memegang gambar, mengukur, dan memastikan kerja sesuai hitungan.' },
  { kode: 'batu', peran: 'Tukang batu dan keramik', isi: 'Memasang bata, plester, lantai, dan keramik.' },
  { kode: 'cat', peran: 'Tukang cat', isi: 'Menyiapkan dinding, memplamir, dan mengecat.' },
  { kode: 'kayu', peran: 'Tukang kayu dan atap', isi: 'Mengerjakan rangka atap, plafon, kusen, dan tangga.' },
];

// Foto alat dan bahan di halaman Profil (semua foto CC0, tanpa orang).
export const alat = [
  { src: '/images/meteran.jpg', w: 1920, h: 1440, alt: 'Meteran gulung ditarik miring di atas meja kayu', judul: 'Meteran', isi: 'Setiap ukuran dicatat, lalu diulang sekali lagi.' },
  { src: '/images/siku-baja.jpg', w: 1756, h: 1361, alt: 'Waterpass kecil berbentuk siku dengan gelembung hijau', judul: 'Waterpass', isi: 'Dinding dan lantai harus lurus dan rata.' },
  { src: '/images/kayu.jpg', w: 1920, h: 1280, alt: 'Tumpukan papan kayu', judul: 'Kayu', isi: 'Dipilih dan diperiksa sebelum dipasang.' },
  { src: '/images/keramik-krem.jpg', w: 1920, h: 1920, alt: 'Empat ubin keramik krem berbintik halus', judul: 'Contoh keramik', isi: 'Kamu lihat dan pegang dulu sebelum kami pesan.' },
];

export const jenisPekerjaan = [...layanan.map((l) => l.nama), 'Belum tahu, mau ditanyakan dulu'];

export function pesanWa(teks) {
  return `https://wa.me/?text=${encodeURIComponent(teks)}`;
}

export const waBeranda = pesanWa('Halo Bowplank, saya ingin tanya soal renovasi rumah di Medan. (Pesan dari situs demo.)');
