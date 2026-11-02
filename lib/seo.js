// Metadata Open Graph per halaman (Next.js mengganti objek openGraph induk, tidak menggabungkannya) dan JSON-LD.
import { site } from './data';
import { menitBaca } from './kabar';

export const OG_ALT = 'Bowplank, kontraktor renovasi dan bangun rumah di Medan. Nama usaha, tagline Rumahmu diukur dulu, baru dikerjakan, dan foto ruangan kosong dengan garis ukuran, tersusun seperti lembar gambar kerja.';

export function ogHalaman({ path = '', judul, deskripsi, tipe = 'website', tambahan = {} }) {
  const url = `${site.url}${path}`;
  const title = judul ? `${judul} | ${site.nama}` : site.judul;
  const images = [{ url: '/og.jpg', width: 1200, height: 630, alt: OG_ALT }];
  return {
    openGraph: { type: tipe, locale: 'id_ID', url, siteName: site.nama, title, description: deskripsi, images, ...tambahan },
    twitter: { card: 'summary_large_image', title, description: deskripsi, images: images.map((g) => g.url) },
  };
}

// GeneralContractor tanpa telepon, tanpa rating, tanpa ulasan. Alamat contoh ditandai di streetAddress.
export const jsonLdUsaha = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'GeneralContractor',
      '@id': `${site.url}/#usaha`,
      name: site.nama,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/og.jpg`,
      description: site.deskripsi,
      slogan: site.tagline,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.jalan,
        addressLocality: site.kota,
        addressRegion: site.provinsi,
        addressCountry: 'ID',
      },
      areaServed: [{ '@type': 'City', name: site.kota }],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      knowsLanguage: 'id-ID',
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#situs`,
      name: site.nama,
      url: site.url,
      description: site.deskripsi,
      inLanguage: 'id-ID',
      publisher: { '@id': `${site.url}/#usaha` },
    },
  ],
};

export function jsonLdBreadcrumb(butir) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: butir.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.nama, item: `${site.url}${b.path}` })),
  };
}

export function jsonLdTulisan(t) {
  const url = `${site.url}/kabar/${t.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#tulisan`,
    headline: t.judul,
    description: t.ringkas,
    url,
    mainEntityOfPage: url,
    image: `${site.url}${t.foto.src}`,
    datePublished: t.tanggal,
    dateModified: t.tanggal,
    inLanguage: 'id-ID',
    timeRequired: `PT${menitBaca(t)}M`,
    author: { '@type': 'Organization', '@id': `${site.url}/#usaha`, name: site.nama },
    publisher: { '@type': 'Organization', '@id': `${site.url}/#usaha`, name: site.nama },
  };
}
