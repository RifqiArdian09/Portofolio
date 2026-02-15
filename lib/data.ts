export const personalInfo = {
    name: "Rifqi Ardian",
    role: "Fullstack Developer",
    bio: "I'm a passionate Fullstack Developer with expertise in modern web technologies. I love building scalable applications and creating beautiful user experiences.",
    profileImage: "/images/profile.png",
    cvPath: "/images/CV RIFQI ARDIAN.pdf",
    github: "https://github.com/RifqiArdian09",
    linkedin: "https://www.linkedin.com/in/rifqi-ardian-0547b7388/",
    instagram: "https://www.instagram.com/rifqiard._/",
    email: "ardianrifqi77@gmail.com", // Assuming or placeholder
    whatsapp: "6285182911840", // Placeholder
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
        title: "Portal Profil UPTIK UMB",
        description:
            "Platform profil digital resmi UPTIK UM Bengkulu yang dikembangkan dengan Next.js 15 & Tailwind CSS 4 untuk mendemonstrasikan kapabilitas teknologi instansi.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
        status: "Team Project",
        image: "/images/projek/upttik.png",
        demo: "https://upttik.umb.ac.id",
        date: "2026 Release",
        content: `# Portal Profil & Portofolio Digital - UPTIK UMB

Platform profil digital resmi milik Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTIK) Universitas Muhammadiyah Bengkulu. Proyek ini bertujuan untuk menyediakan pusat informasi terpadu yang profesional mengenai identitas instansi, layanan teknologi, serta dokumentasi proyek.

Detail Implementasi:

1. Tujuan Utama:
• Representasi Institusi: Wajah digital resmi untuk meningkatkan kredibilitas instansi.
• Diseminasi Informasi: Akses visi, misi, dan struktur organisasi bagi civitas akademika.
• Showcase Inovasi: Dokumentasi hasil karya dan solusi teknologi informasi.

2. Arsitektur & Teknologi:
• Frontend: Next.js 15 (App Router) untuk performa cepat dan ramah SEO.
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
        id: "sistem-monitoring",
        title: "Sistem Monitoring Relawan",
        description:
            "Platform manajemen operasional berbasis web untuk pemantauan, pencatatan, dan dokumentasi aktivitas lapangan secara real-time.",
        tech: ["Laravel 12", "Livewire 4", "Tailwind", "MySQL", "Flux UI"],
        status: "Solo Project",
        image: "/images/projek/sistem-monitoring.png",
        date: "2026 Release",
        content: `Sistem Monitoring Kegiatan Relawan & Petugas adalah platform manajemen operasional berbasis web yang dirancang untuk mengoptimalkan proses pemantauan dan dokumentasi aktivitas lapangan secara real-time.

Detail Implementasi:

1. Core Systems & Architecture:
• Framework: Laravel 12 (PHP 8.2+) untuk keamanan, skalabilitas, dan performa backend solid.
• Arsitektur: Berbasis Model-View-Controller (MVC) yang dioptimalkan untuk data relasional kompleks.

2. User Interface & Experience:
• Reactivity: Livewire v4 dan Flux UI untuk antarmuka reaktif dan dinamis (SPA feel).
• Styling: Tailwind CSS dengan desain konsisten, profesional, dan sepenuhnya responsif.

3. Manajemen Data & Pelaporan:
• Automated Reporting: Integrasi maatwebsite/excel untuk ekspor laporan kegiatan ke format Excel secara instan.
• Document Generation: Spatie Browsershot untuk menghasilkan arsip digital PDF berkualitas tinggi secara otomatis.

4. Keamanan & Infrastruktur:
• Robust Authentication: Laravel Fortify dengan fitur Two-Factor Authentication (2FA) untuk perlindungan data sensitif.
• Background Processing: Database Queues untuk menangani tugas berat laporan tanpa mengganggu performa aplikasi utama.`,
    },
    {
        id: "text-image-translator",
        title: "Penerjemah Teks & Gambar",
        description:
            "Aplikasi Android berbasis Java untuk menerjemahkan teks dan gambar antar berbagai bahasa menggunakan teknologi AI Gemini dari Google.",
        tech: ["Android Studio", "Java"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/Text-Image-Translator",
        demo: "https://github.com/RifqiArdian09/Text-Image-Translator",
        content: "Aplikasi Android berbasis Java untuk menerjemahkan teks dan gambar antar berbagai bahasa menggunakan teknologi AI Gemini dari Google.",
    },

    {
        id: "essycoff-android",
        title: "EssyCoff Android (POS)",
        description: "Aplikasi Point of Sale sederhana untuk kedai kopi: kelola produk, transaksi, dan riwayat.",
        tech: ["Android Studio", "Java", "Supabase"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/EssyCoffAndroid.git",
        demo: "https://github.com/RifqiArdian09/EssyCoffAndroid.git",
        content: "Aplikasi Point of Sale sederhana untuk kedai kopi: kelola produk, transaksi, dan riwayat.",
    },
    {
        id: "al-quran-flutter",
        title: "Al-Qur'an App",
        description:
            "Aplikasi Flutter untuk membaca Al-Qur'an, mendengarkan tilawah, jadwal sholat, doa harian, dan bookmark ayat.",
        tech: ["Flutter", "Dart"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/Al-Quran-Flutter",
        demo: "https://github.com/RifqiArdian09/Al-Quran-Flutter",
        content: "Aplikasi Flutter untuk membaca Al-Qur'an, mendengarkan tilawah, jadwal sholat, doa harian, dan bookmark ayat.",
    },
    {
        id: "celenganku",
        title: "Celenganku",
        description:
            "Celenganku adalah aplikasi Android untuk membantu mengelola tabungan pribadi dengan pencatatan transaksi dan target.",
        tech: ["Android Studio", "Java", "SQLite"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1554224155-169746997533?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/Celenganku",
        demo: "https://github.com/RifqiArdian09/Celenganku",
        content: "Celenganku adalah aplikasi Android untuk membantu mengelola tabungan pribadi dengan pencatatan transaksi dan target.",
    },
    {
        id: "food-recipe-app",
        title: "Food Recipe App",
        description: "Aplikasi Android untuk menampilkan berbagai resep makanan menggunakan data dari TheMealDB.",
        tech: ["Android Studio", "Java"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/FoodRecipeApp",
        demo: "https://github.com/RifqiArdian09/FoodRecipeApp",
        content: "Aplikasi Android untuk menampilkan berbagai resep makanan menggunakan data dari TheMealDB.",
    },
    {
        id: "alquran-web",
        title: "Al-Quran Web",
        description: "Aplikasi web Al-Quran dengan bookmark ayat dan pemutar audio.",
        tech: ["React", "Vite"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/alquran-web",
        demo: "https://github.com/RifqiArdian09/alquran-web",
        content: "Aplikasi web Al-Quran dengan bookmark ayat dan pemutar audio.",
    },
    {
        id: "news-portal",
        title: "News Portal",
        description:
            "Sistem manajemen konten lengkap untuk menerbitkan dan mengelola artikel berita dengan kategori dan penulis.",
        tech: ["Laravel", "Tailwind", "MySQL"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/News-Portal",
        demo: "https://github.com/RifqiArdian09/News-Portal",
        content: "Sistem manajemen konten lengkap untuk menerbitkan dan mengelola artikel berita dengan kategori dan penulis.",
    },
    {
        id: "file-converter",
        title: "FileConverter",
        description:
            "Aplikasi berbasis Flask + LibreOffice untuk mengonversi file dengan antarmuka web modern dan drag & drop.",
        tech: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/FileConverter",
        demo: "https://github.com/RifqiArdian09/FileConverter",
        content: "Aplikasi berbasis Flask + LibreOffice untuk mengonversi file dengan antarmuka web modern dan drag & drop.",
    },
    {
        id: "subtitle-generator",
        title: "Subtitle Generator",
        description: "Aplikasi untuk membuat file SRT dari upload video menggunakan Python dan Streamlit.",
        tech: ["Python", "Streamlit"],
        status: "Solo Project",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/RifqiArdian09/subtitle_genet-streamlit",
        demo: "https://github.com/RifqiArdian09/subtitle_genet-streamlit",
        content: "Aplikasi untuk membuat file SRT dari upload video menggunakan Python dan Streamlit.",
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
