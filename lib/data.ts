export const personalInfo = {
    name: "Rifqi Ardian",
    role: "Fullstack Developer",
    bio: "I'm a passionate Fullstack Developer with expertise in modern web technologies. I love building scalable applications and creating beautiful user experiences.",
    profileImage: "/images/profile.png",
    cvPath: "/images/CV RIFQI ARDIAN.pdf",
    github: "https://github.com/RifqiArdian09",
    linkedin: "https://www.linkedin.com/in/rifqi-ardian-0547b7388/",
    instagram: "https://www.instagram.com/rifqiard._/",
    email: "ardianrifqi77@gmail.com",
    whatsapp: "6285182911840",
};

export const techStack = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Laravel", icon: "/icons/lara.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "Next.js", icon: "/icons/next.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Livewire", icon: "/icons/Livewire.svg" },
    { name: "Filament", icon: "/icons/filament.png" },
];

const createMember = (username: string) => ({
    name: username,
    github: `https://github.com/${username}`
});

export const projects = [
    {
        id: "w-vote",
        title: "W-Vote: Sistem E-Voting",
        description:
            "Platform E-Voting transparan yang dikembangkan dengan Laravel 12 dan Livewire Volt. Telah sukses diimplementasikan secara resmi di SMKN 1 & SMAN 8 Kota Bengkulu.",
        tech: ["Laravel 12", "Livewire Volt", "Tailwind 4", "MySQL", "Flux UI"],
        status: "Team Project",
        image: "/images/projek/w-wote/thumb.w-vote.png",
        date: "2025 Release",
        content: `W-Vote adalah platform pemungutan suara elektronik (E-Voting) yang dirancang untuk mentransformasi proses pemilihan konvensional menjadi digital yang lebih aman, efisien, dan transparan. Proyek ini dikembangkan menggunakan ekosistem terbaru Laravel 12 dan Livewire Volt, menawarkan performa tinggi dengan interaksi real-time tanpa reload halaman.

Platform ini tidak hanya sekadar prototipe, namun telah teruji dan sukses diimplementasikan secara resmi untuk mendukung demokrasi digital di institusi pendidikan, di antaranya:
• SMKN 1 KOTA BENGKULU
• SMAN 8 KOTA BENGKULU

Solusi & Fitur Utama:
• Sistem Verifikasi Token Terenkripsi: Menjamin privasi dan integritas suara dengan token unik terenkripsi.
• Manajemen Pemilih Skala Besar: Fitur impor massal berbasis CSV/Excel untuk mengelola ribuan data pemilih dalam hitungan detik.
• Dashboard Admin Komprehensif: Monitoring statistik real-time, manajemen kandidat dinamis, dan ekspor hasil ke Excel.
• Alur Pemilihan Intuitif: Antarmuka ringkas (Verifikasi -> Surat Suara -> Konfirmasi) untuk kemudahan penggunaan.

Dibuat dengan Tailwind CSS 4 untuk UI yang futuristik. Penggunaan Livewire Volt memberikan nuansa Single Page Application (SPA) yang cepat, sementara Flux UI memastikan komponen interface tampil premium dan konsisten.`,
        teamMembers: [createMember("RayanKhairullah"), createMember("RifqiArdian09"), createMember("icanpatra")],
        implementationImages: [
            "/images/projek/w-wote/implementasi1.png",
            "/images/projek/w-wote/implementasi2.png",
            "/images/projek/w-wote/implemetasi3.png",
            "/images/projek/w-wote/implemetasi4.png"
        ]
    },
    {
        id: "upptik-um-bengkulu",
        title: "Profil UPTTIK UMB",
        description:
            "Platform profil digital resmi UPTTIK UM Bengkulu yang dikembangkan dengan Next.js  & Tailwind CSS 4 untuk mendemonstrasikan kapabilitas teknologi instansi.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
        status: "Team Project",
        image: "/images/projek/upttik.png",
        demo: "https://upttik.umb.ac.id",
        teamMembers: [
            createMember("RifqiArdian09"),
            createMember("Salmanziz21"),
        ],
        date: "2026 Release",
        content: `Portal Profil & Portofolio Digital - UPTIK UMB

Platform profil digital resmi milik Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTIK) Universitas Muhammadiyah Bengkulu. Proyek ini bertujuan untuk menyediakan pusat informasi terpadu yang profesional mengenai identitas instansi, layanan teknologi, serta dokumentasi proyek.

Detail Implementasi:

1. Tujuan Utama:
• Representasi Institusi: Wajah digital resmi untuk meningkatkan kredibilitas instansi.
• Diseminasi Informasi: Akses visi, misi, dan struktur organisasi bagi civitas akademika.
• Showcase Inovasi: Dokumentasi hasil karya dan solusi teknologi informasi.

2. Arsitektur & Teknologi:
• Frontend: Next.js  (App Router) untuk performa cepat dan ramah SEO.
• Bahasa: TypeScript untuk menjamin keamanan tipe data dan integritas kode.
• Style: Tailwind CSS v4 untuk antarmuka modern dan responsif.
• UI & Animasi: Radix UI dan Framer Motion untuk interaksi yang elegan.

3. Fitur Strategis:
• Internasionalisasi : Dukungan Bahasa Indonesia dan Inggris.
• Galeri Proyek: Modul portofolio yang menampilkan detail teknis dan dokumentasi.
• Responsivitas: Optimasi mendalam untuk desktop, tablet, dan seluler.`,
    },
    {
        id: "cms-fakultas",
        title: "CMS Fakultas UMB",
        description:
            "Platform Content Management System modern untuk digitalisasi informasi fakultas di UM Bengkulu menggunakan Laravel 12 dan Livewire Volt.",
        tech: ["Laravel 12", "Livewire Volt", "Tailwind", "MySQL", "Flux UI"],
        status: "Solo Project",
        image: "/images/projek/fakultas.png",
        date: "2025 Release",
        content: `CMS Fakultas UMB adalah platform Content Management System (CMS) modern yang dirancang khusus untuk digitalisasi informasi pada lingkup fakultas di Universitas Muhammadiyah Bengkulu. Proyek ini bertujuan untuk mengotomatisasi pengelolaan data akademik dan profil fakultas secara terpusat.

Detail Implementasi:

1. Core Tech Stack:
• Laravel 12 (Backend): Menggunakan iterasi terbaru untuk keamanan robust dan arsitektur solid.
• Livewire & Volt: Menciptakan antarmuka yang reaktif tanpa reload halaman (SPA feel).
• Flux UI & Tailwind CSS: Estetika modern premium dengan responsivitas tinggi di berbagai perangkat.

2. Fitur Unggulan:
• Manajemen Konten Dinamis: Modul publikasi berita (Post), kategori, dan sistem komentar terintegrasi.
• Profil & Visi Misi: Pengaturan isi profil, visi, dan misi fakultas secara real-time.
• Sistem Pimpinan & Struktur: Modul khusus hierarki pimpinan dan visualisasi struktur organisasi.
• Monitoring Akreditasi: Dashboard pantauan status akreditasi program studi untuk transparansi kualitas.

3. Arsitektur Data & Keamanan:
• Relasi Basis Data: Implementasi relasi (Fakultas → Prodi → Akreditasi) dengan query tinggi.
• Laravel Fortify: Sistem autentikasi dan otorisasi terenkripsi untuk panel kontrol admin.
• SEO Optimized: Struktur HTML semantik untuk memastikan konten mudah terindeks mesin pencari.`,
    },
    {
        id: "essycoff-laravel",
        title: "EssyCoff (POS)",
        description:
            "Sistem Point of Sale (POS) berbasis web yang dirancang untuk membantu operasional kedai kopi secara efisien dan terstruktur.",
        tech: ["Laravel 12", "Livewire 3", "Tailwind 4", "MySQL", "Flux UI"],
        status: "Team Project",
        image: "/images/projek/essycoff-web.png",
        github: "https://github.com/RifqiArdian09/EssyCoff-Laravel",
        date: "2025 Release",
        content: `EssyCoff adalah sistem Point of Sale (POS) modern berbasis web yang dikembangkan untuk membantu operasional kedai kopi dan bisnis F&B secara efisien, cepat, dan terstruktur. Sistem ini mengintegrasikan transaksi penjualan, manajemen inventori, dan pelaporan keuangan.

Detail Implementasi:

1. Arsitektur & Teknologi:
• Laravel 12 & Livewire 3: Menciptakan pengalaman reaktif layaknya Single Page Application (SPA).
• Tailwind CSS 4 & Flux UI: Antarmuka modern, profesional, dan sepenuhnya responsif dengan mode terang/gelap.

2. Fitur Backend Utama:
• Manajemen transaksi real-time dengan validasi stok otomatis.
• Relasi database terstruktur menggunakan Eloquent ORM.
• Sistem kontrol akses (RBAC) untuk admin dan kasir.
• Ekspor Laporan: Generate PDF (DomPDF) dan Excel (Maatwebsite) untuk data keuangan.

3. Dashboard Analitik:
Menampilkan ringkasan pendapatan, statistik penjualan, serta performa produk dalam bentuk data terstruktur yang membantu pemilik usaha memonitor bisnis secara akurat.`,
        teamMembers: [
            createMember("RifqiArdian09"),
            createMember("Salmanziz21"),
            createMember("Chicktickhack"),
            createMember("RenatanJanuarta"),
            createMember("rfdd024"),
        ],
    },

    {
        id: "aniverse",
        title: "Aniverse",
        description:
            "Platform streaming anime modern yang dibangun dengan Next.js , menawarkan pengalaman menonton yang imersif, cepat, dan responsif dengan integrasi API anime terkini.",
        tech: ["Next.js ", "TypeScript", "Tailwind CSS", "API Integration"],
        status: "Solo Project",
        image: "/images/projek/aniverse.png",
        github: "https://github.com/RifqiArdian09/Streming-anime",
        date: "2026 Release",
        demo: "https://aniverse-peach.vercel.app/",
        content: `Aniverse adalah platform streaming anime modern yang dirancang untuk memberikan pengalaman menonton yang lancar dan imersif bagi para penggemar anime. Proyek ini dibangun menggunakan teknologi web terbaru untuk memastikan performa yang cepat dan antarmuka yang elegan dengan nuansa sinematik.

Detail Implementasi:

1. Stack Teknologi:
• Next.js  (App Router): Memanfaatkan Server Components dan Streaming untuk performa yang optimal dan loading yang instansi.
• TypeScript: Menjamin integritas data dari API anime dan meminimalkan runtime error.
• Tailwind CSS: Implementasi desain UI "Dark Mode" yang premium dengan nuansa visual yang konsisten.

2. Fitur Utama:
• Streaming Player Premium: Pemutar video yang mendukung pemilihan server dan navigasi antar episode yang seamless.
• Advanced Search & Filter: Memungkinkan pengguna mencari anime berdasarkan judul, genre, atau skor secara instan.
• Informasi Detail Anime: Menampilkan sinopsis, rating, genre, dan daftar episode secara komprehensif.
• Responsive Layout: Desain yang dioptimalkan secara mendalam untuk desktop, tablet, maupun smartphone.

3. Fokus Pada UX & Performa:
• Image Optimization: Penggunaan optimasi gambar Next.js untuk pemuatan banner dan poster anime yang efisien.
• SEO & Open Graph: Optimasi metadata untuk setiap halaman anime guna meningkatkan visibilitas di mesin pencari.
• Global State Management: Pengelolaan state aplikasi untuk fitur riwayat tontonan dan navigasi yang cepat.`,
    },
    {
        id: "simaru",
        title: "SIMARU: Landing Page PMB",
        description:
            "Platform landing page interaktif dan modern untuk mempermudah calon mahasiswa dalam mengakses informasi pendaftaran di Universitas Muhammadiyah Bengkulu.",
        tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        status: "Team Project",
        image: "/images/projek/simaru.png",
        demo: "https://simaru.umb.ac.id",
        date: "2026 Release",
        content: `SIMARU (Sistem Penerimaan Mahasiswa Baru) adalah platform landing page interaktif dan modern yang dirancang khusus untuk mempermudah calon mahasiswa dalam mengakses informasi pendaftaran di Universitas Muhammadiyah Bengkulu. Proyek ini bertujuan untuk menciptakan jembatan digital yang estetik, informatif, dan responsif.

Detail Implementasi:

1. Teknologi yang Digunakan:
• Core: HTML5 & Vanilla JavaScript (ES6+).
• Styling: Tailwind CSS dengan pendekatan utility-first untuk performa ringan.
• Typography & Icons: Google Fonts (Lexend), Material Symbols, dan Font Awesome.

2. Fitur Utama & Fungsionalitas:
• Sistem Multibahasa (i18n): Beralih antara bahasa Indonesia dan Inggris secara real-time.
• Glassmorphism UI: Efek kaca transparan pada navigasi sticky untuk desain modern.
• Registration Timeline: Visualisasi alur pendaftaran linier yang estetik.
• Interactive FAQ Section: Komponen akordion untuk akses informasi yang ringkas.
• Mode Gelap/Terang: Dukungan penuh untuk preferensi kenyamanan visual mata pengguna.

3. Proses Pengembangan:
Optimasi performa dengan meminimalkan dependensi berat guna memastikan skor Core Web Vitals yang optimal. Menekankan UI Excellence melalui micro-animations pada tombol hover dan transisi menu yang dinamis namun elegan.`,
        teamMembers: [
            createMember("RifqiArdian09"),
            createMember("Salmanziz21"),
        ],
    },


    {
        id: "alquran-web",
        title: "Al-Quran Web",
        description:
            "Aplikasi baca Al-Qur'an modern berbasis React dan Vite yang fokus pada kenyamanan membaca, performa cepat, dan aksesibilitas tinggi.",
        tech: ["React 18", "Vite", "React Router", "API"],
        status: "Solo Project",
        image: "/images/projek/alquran-web.png",
        github: "https://github.com/RifqiArdian09/alquran-web",
        demo: "https://bacaquran-roan.vercel.app/",
        date: "2024 Release",
        content: `Al-Quran Web adalah aplikasi baca Al-Qur’an berbasis web yang dikembangkan menggunakan React dan Vite dengan fokus utama pada kenyamanan membaca, performa cepat, serta tampilan modern dan estetis.

Detail Implementasi:

1. Arsitektur & Teknologi:
• React 18 & Vite: Memastikan proses development cepat dan hasil build yang sangat optimal.
• Modular Design: Pemisahan jelas antara komponen UI, service API, custom hooks, dan context global.

2. Fitur Unggulan & Fungsionalitas:
• Audio Per Ayat: Sistem audio dikelola melalui AudioContext API untuk memastikan pemutaran yang mulus tanpa tumpang tindih.
• Persistensi Data: Fitur bookmark, terakhir dibaca, dan pengaturan tema disimpan secara lokal menggunakan custom hooks berbasis localStorage.
• Sistem Tema Dinamis: Implementasi mode gelap/terang dan sistem aksen warna menggunakan CSS custom properties (variables).

3. Aksesibilitas & Performa:
• Accessibility (A11y): Penggunaan aria-label dan kontras warna yang memadai untuk kenyamanan pengguna.
• UX Intuitif: Animasi halus dan micro-interaction yang diterapkan tanpa mengorbankan kecepatan loading halaman.`,
    },
];


export const certificates = [
    {
        title: "Belajar Dasar AI",
        issuer: "Dicoding",
        image: "/images/sertif/Belajar_Dasar_AI_page1.png",
    },
    {
        title: "Belajar Dasar Pemrograman",
        issuer: "Dicoding",
        image: "/images/sertif/Belajar_Dasar_Pemrograman_Web_page1.png",
    },
    {
        title: "Belajar Dasar Pemrograman Javascript",
        issuer: "Dicoding",
        image: "/images/sertif/belajar dasar pemrograman javascript.png",
    },
    {
        title: "Belajar Membuat Front-End Web Untuk Pemula",
        issuer: "Dicoding",
        image: "/images/sertif/belajar membuat front-end web untuk pemula.png",
    },
    {
        title: "Penghargaan Atas Pembuatan Web W-Vote ",
        issuer: "SMKN 1 KOTA BENGKULU",
        image: "/images/sertif/w-vote.png",
    },
];
