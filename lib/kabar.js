// Tulisan contoh di /kabar. Blok: p, h2, ul, ol, catatan.

export const tulisan = [
  {
    slug: 'tanda-atap-perlu-diperiksa',
    nomor: 'A-42',
    judul: 'Tanda atap perlu diperiksa sebelum musim hujan',
    ringkas: 'Noda di plafon, genteng bergeser, dan talang penuh daun: tanda kecil yang sebaiknya diperiksa sebelum hujan deras datang.',
    tanggal: '2026-10-12',
    foto: { src: '/images/genteng.jpg', w: 1920, h: 1280, alt: 'Atap genteng tanah liat dilihat dari atas' },
    isi: [
      { t: 'p', teks: 'Atap jarang bocor tiba-tiba. Biasanya ada tanda kecil dulu. Kalau tanda itu diperiksa sebelum musim hujan, perbaikannya biasanya masih kecil.' },
      { t: 'h2', teks: 'Tanda yang terlihat dari dalam rumah' },
      {
        t: 'ul',
        items: [
          'Noda cokelat atau lingkaran kekuningan di plafon, terutama sehari dua hari setelah hujan.',
          'Cat plafon menggelembung, mengelupas, atau berbintik hitam.',
          'Plafon melengkung atau turun di satu bagian.',
          'Bau lembap di kamar atas atau di ruang bawah atap.',
        ],
      },
      { t: 'h2', teks: 'Tanda yang terlihat dari luar' },
      {
        t: 'ul',
        items: [
          'Genteng pecah, bergeser, atau ada celah di antaranya.',
          'Lumut tebal di genteng yang membuat air tertahan.',
          'Talang penuh daun, berkarat, atau lepas dari dinding.',
          'Adukan di pertemuan atap dan dinding yang retak atau rontok.',
        ],
      },
      { t: 'catatan', teks: 'Jangan naik ke atap yang basah atau licin. Foto saja dari bawah atau dari tangga yang kokoh, lalu tunjukkan ke tukang.' },
      { t: 'h2', teks: 'Cara cepat memeriksa dari loteng' },
      { t: 'p', teks: 'Masuk ke loteng pada siang hari, lalu matikan lampu. Titik cahaya kecil di atap berarti ada celah. Lihat juga kayu rangka: kayu yang gelap, basah, atau lapuk perlu dicatat.' },
      { t: 'h2', teks: 'Yang kami lakukan saat datang' },
      {
        t: 'ol',
        items: [
          'Melihat plafon dan loteng lebih dulu.',
          'Memeriksa penutup atap, talang, dan sambungan dengan dinding.',
          'Menandai titik bocor di gambar.',
          'Menulis hitungan: ganti yang pecah saja, atau lebih luas bila rangkanya ikut lapuk.',
        ],
      },
      { t: 'p', teks: 'Kamu boleh kirim foto plafon lewat WhatsApp dulu. Foto belum cukup untuk menghitung, tapi cukup untuk tahu bagian mana yang perlu dilihat lebih dulu.' },
    ],
  },
  {
    slug: 'urutan-kerja-renovasi-kamar-mandi',
    nomor: 'A-43',
    judul: 'Urutan kerja renovasi kamar mandi',
    ringkas: 'Dari bongkar sampai uji genang: urutan kerja kamar mandi dan alasan tiap langkah tidak boleh dilompati.',
    tanggal: '2026-10-19',
    foto: { src: '/images/kamar-mandi.jpg', w: 1920, h: 1440, alt: 'Kamar mandi berkeramik krem dengan bak mandi, wastafel, dan kloset' },
    isi: [
      { t: 'p', teks: 'Kamar mandi selalu basah, jadi urutan kerjanya penting. Kalau satu langkah dilompati, masalahnya baru terlihat berbulan-bulan kemudian: lantai menggenang, dinding lembap, atau keramik lepas.' },
      { t: 'h2', teks: 'Urutan yang kami pakai' },
      {
        t: 'ol',
        items: [
          'Ukur dan tentukan letak. Letak kloset, kran, dan lubang buangan dicatat dulu di gambar.',
          'Bongkar. Keramik lama dibongkar sampai lantai dasar, lalu pipa diperiksa.',
          'Perbaiki pipa. Pipa yang bocor atau berkarat diganti selagi dinding masih terbuka.',
          'Buat lantai miring. Lantai dimiringkan pelan ke arah lubang buangan, kira-kira 1 cm untuk setiap 1 m.',
          'Lapisi kedap air. Lantai dan bagian bawah dinding dilapisi bahan kedap air.',
          'Uji genang. Lantai diisi air beberapa sentimeter dan dibiarkan 1–2 hari. Kalau air turun atau plafon di bawahnya basah, lapisan diperbaiki dulu.',
          'Pasang keramik. Keramik dinding dan lantai dipasang, lalu nat diisi setelah keramik cukup kuat.',
          'Pasang kloset, wastafel, dan kran. Ini dikerjakan terakhir supaya tidak tergores.',
          'Cek bersama. Air dialirkan dan kita lihat bersama apakah mengalir ke lubang buangan.',
        ],
      },
      { t: 'catatan', teks: 'Uji genang memakan waktu 1–2 hari. Di langkah inilah bocor ketahuan, sebelum keramik dipasang.' },
      { t: 'h2', teks: 'Yang perlu kamu putuskan lebih dulu' },
      {
        t: 'ul',
        items: ['Jenis dan warna keramik.', 'Kloset duduk atau jongkok.', 'Letak kran dan pancuran.', 'Tempat mandi sementara selama pekerjaan.'],
      },
    ],
  },
  {
    slug: 'cara-membaca-hitungan-biaya-renovasi',
    nomor: 'A-44',
    judul: 'Cara membaca hitungan biaya renovasi',
    ringkas: 'Hitungan biaya yang baik memuat pekerjaan, ukuran, bahan, dan lama kerja. Ini yang perlu kamu cek sebelum setuju.',
    tanggal: '2026-10-26',
    foto: { src: '/images/meteran.jpg', w: 1920, h: 1440, alt: 'Meteran gulung ditarik miring di atas meja kayu' },
    isi: [
      { t: 'p', teks: 'Hitungan biaya renovasi sering terlihat seperti satu angka besar. Padahal di dalamnya ada beberapa bagian. Kalau kamu tahu bagiannya, kamu bisa membandingkan dua hitungan dengan adil.' },
      { t: 'h2', teks: 'Lima bagian yang perlu ada' },
      {
        t: 'ol',
        items: [
          'Daftar pekerjaan. Tertulis satu per satu, misalnya bongkar keramik, pasang keramik, dan cat.',
          'Ukuran. Luas dalam m² atau panjang dalam meter, supaya angkanya bisa dicek ulang.',
          'Bahan. Jenis atau kelas bahan disebut, bukan hanya kata “bagus” atau “biasa”.',
          'Harga per satuan. Biasanya per m², dipisah antara bahan dan upah.',
          'Lama kerja dan cara bayar. Mulai dan selesainya kira-kira kapan, dan dibayar bertahap atau sekaligus.',
        ],
      },
      { t: 'h2', teks: 'Yang sering terlewat' },
      {
        t: 'ul',
        items: [
          'Pekerjaan yang tidak termasuk, misalnya bongkar plafon atau buang puing.',
          'Dana cadangan untuk hal yang baru terlihat setelah dinding dibuka.',
          'Siapa yang membeli bahan: kontraktor atau kamu.',
          'Apa yang terjadi bila pekerjaan bertambah di tengah jalan.',
        ],
      },
      { t: 'p', teks: 'Kalau ada bagian yang tidak jelas, tanyakan sebelum setuju. Hitungan yang baik tidak keberatan ditanya.' },
      { t: 'catatan', teks: 'Mau latihan membaca rincian? Coba halaman Hitung biaya di situs ini. Hasilnya berupa rentang beserta rincian per pekerjaan.' },
    ],
  },
];

export function cariTulisan(slug) {
  return tulisan.find((t) => t.slug === slug);
}

export function menitBaca(t) {
  const kata = t.isi
    .map((b) => (b.items ? b.items.join(' ') : b.teks))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(kata / 200));
}

const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
export function tanggalId(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${BULAN[m - 1]} ${y}`;
}
