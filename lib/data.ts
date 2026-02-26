export const personalInfo = {
    name: "Rifqi Ardian",
    role: {
        id: "Web Developer",
        en: "Web Developer"
    },
    bio: {
        id: "Seorang Pelajar SMK Jurusan Pengembangan Perangkat Lunak dan Gim yang memiliki minat besar dalam pengembangan web dan teknologi informasi.",
        en: "A Software and Game Development student with a strong passion for web development and information technology."
    },
    profileImage: "/images/profile2.png",
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
    { name: "TypeScript", icon: "/icons/ts.svg" },
    { name: "Motion", icon: "/icons/motion.svg" },
];

const createMember = (username: string) => ({
    name: username,
    github: `https://github.com/${username}`
});

export const projects = [
    {
        id: "w-vote",
        title: { id: "W-Vote: Sistem E-Voting", en: "W-Vote: E-Voting System" },
        description: {
            id: "Platform E-Voting transparan yang dikembangkan dengan Laravel 12 dan Livewire Volt. Telah sukses diimplementasikan secara resmi di SMKN 1 & SMAN 8 Kota Bengkulu.",
            en: "A transparent E-Voting platform developed with Laravel 12 and Livewire Volt. Officially implemented at SMKN 1 & SMAN 8 Bengkulu City."
        },
        tech: ["Laravel 12", "Tailwind", "MySQL"],
        status: { id: "Proyek Tim", en: "Team Project" },
        image: "/images/projek/w-wote/thumb.w-vote.png",
        date: "2025",
        content: {
            id: `W-Vote adalah platform pemungutan suara elektronik (E-Voting) yang dirancang untuk mentransformasi proses pemilihan konvensional menjadi digital yang lebih aman, efisien, dan transparan. Proyek ini dikembangkan menggunakan ekosistem terbaru Laravel 12 dan Livewire Volt, menawarkan performa tinggi dengan interaksi real-time tanpa reload halaman.

            Platform ini tidak hanya sekadar prototipe, namun telah teruji dan sukses diimplementasikan secara resmi untuk mendukung demokrasi digital di institusi pendidikan, di antaranya:
            • SMKN 1 KOTA BENGKULU
            • SMAN 8 KOTA BENGKULU

            Solusi & Fitur Utama:
            • Sistem Verifikasi Token Terenkripsi: Menjamin privasi dan integritas suara dengan token unik terenkripsi.
            • Manajemen Pemilih Skala Besar: Fitur impor massal berbasis CSV/Excel untuk mengelola ribuan data pemilih dalam hitungan detik.
            • Dashboard Admin Komprehensif: Monitoring statistik real-time, manajemen kandidat dinamis, dan ekspor hasil ke Excel.
            • Alur Pemilihan Intuitif: Antarmuka ringkas (Verifikasi -> Surat Suara -> Konfirmasi) untuk kemudahan penggunaan.`,
            en: `W-Vote is an electronic voting (E-Voting) platform designed to transform conventional election processes into a more secure, efficient, and transparent digital system. Developed using the latest Laravel 12 and Livewire Volt ecosystem, it offers high performance with real-time interactions.

            This platform is more than just a prototype; it has been tested and officially implemented to support digital democracy in educational institutions including:
            • SMKN 1 BENGKULU CITY
            • SMAN 8 BENGKULU CITY

            Key Solutions & Features:
            • Encrypted Token Verification System: Ensures privacy and vote integrity with unique encrypted tokens.
            • Large-Scale Voter Management: Bulk import CSV/Excel features to manage thousands of voters in seconds.
            • Comprehensive Admin Dashboard: Real-time statistics monitoring, dynamic candidate management, and Excel result exports.
            • Intuitive Voting Flow: Simple interface (Verification -> Ballot -> Confirmation) for ease of use.`
        },
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
        title: { id: "Profil UPTTIK UMB", en: "UPTTIK UMB Profile" },
        description: {
            id: "Platform profil digital resmi UPTTIK UM Bengkulu yang dikembangkan dengan Next.js & Tailwind CSS 4.",
            en: "Official digital profile platform of UPTTIK UM Bengkulu developed with Next.js & Tailwind CSS 4."
        },
        tech: ["Next.js", "TypeScript", "Tailwind", "Motion", "Radix UI"],
        status: { id: "Proyek Tim", en: "Team Project" },
        image: "/images/projek/upttik.png",
        demo: "https://upttik.umb.ac.id",
        teamMembers: [
            createMember("RifqiArdian09"),
            createMember("Salmanziz21"),
        ],
        date: "2026",
        content: {
            id: `Platform profil digital resmi milik Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi (UPTIK) Universitas Muhammadiyah Bengkulu. Proyek ini bertujuan untuk menyediakan pusat informasi terpadu yang profesional mengenai identitas instansi.`,
            en: `Official digital profile platform of the Information and Communication Technology Implementation Unit (UPTIK) of Muhammadiyah University of Bengkulu. This project aims to provide a professional integrated information center.`
        }
    },
    {
        id: "cms-fakultas",
        title: { id: "CMS Fakultas UMB", en: "UMB Faculty CMS" },
        description: {
            id: "Platform Content Management System modern untuk digitalisasi informasi fakultas di UM Bengkulu.",
            en: "Modern Content Management System platform for digitizing faculty information at UM Bengkulu."
        },
        tech: ["Laravel 12", "Tailwind", "MySQL"],
        status: { id: "Proyek Solo", en: "Solo Project" },
        image: "/images/projek/fakultas.png",
        date: "2025",
        content: {
            id: `CMS Fakultas UMB adalah platform Content Management System (CMS) modern yang dirancang khusus untuk digitalisasi informasi pada lingkup fakultas di Universitas Muhammadiyah Bengkulu.`,
            en: `UMB Faculty CMS is a modern Content Management System (CMS) platform specifically designed for digitizing information within the faculties of Muhammadiyah University of Bengkulu.`
        }
    },
    {
        id: "essycoff-laravel",
        title: { id: "EssyCoff (POS)", en: "EssyCoff (POS)" },
        description: {
            id: "Sistem Point of Sale (POS) berbasis web yang dirancang untuk membantu operasional kedai kopi secara efisien.",
            en: "Web-based Point of Sale (POS) system designed to help coffee shop operations efficiently."
        },
        tech: ["Laravel", "Tailwind", "MySQL"],
        status: { id: "Proyek Tim", en: "Team Project" },
        image: "/images/projek/essycoff-web.png",
        github: "https://github.com/RifqiArdian09/EssyCoff-Laravel",
        date: "2025",
        content: {
            id: `EssyCoff adalah sistem Point of Sale (POS) modern berbasis web yang dikembangkan untuk membantu operasional kedai kopi dan bisnis F&B secara efisien.`,
            en: `EssyCoff is a modern web-based Point of Sale (POS) system developed to help coffee shop and F&B business operations efficiently.`
        },
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
        title: { id: "Aniverse", en: "Aniverse" },
        description: {
            id: "Platform streaming anime modern yang dibangun dengan Next.js.",
            en: "Modern anime streaming platform built with Next.js."
        },
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        status: { id: "Proyek Solo", en: "Solo Project" },
        image: "/images/projek/aniverse.png",
        github: "https://github.com/RifqiArdian09/Streming-anime",
        date: "2026",
        demo: "https://aniverse-peach.vercel.app/",
        content: {
            id: `Aniverse adalah platform streaming anime modern yang dirancang untuk memberikan pengalaman menonton yang lancar dan imersif bagi para penggemar anime.`,
            en: `Aniverse is a modern anime streaming platform designed to provide a smooth and immersive viewing experience for anime fans.`
        }
    },
    {
        id: "simaru",
        title: { id: "SIMARU: Landing Page PMB", en: "SIMARU: PMB Landing Page" },
        description: {
            id: "Platform landing page interaktif dan modern untuk mempermudah calon mahasiswa.",
            en: "Interactive and modern landing page platform to facilitate prospective students."
        },
        tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        status: { id: "Proyek Tim", en: "Team Project" },
        image: "/images/projek/simaru.png",
        demo: "https://simaru.umb.ac.id",
        date: "2026",
        content: {
            id: `SIMARU (Sistem Penerimaan Mahasiswa Baru) adalah platform landing page interaktif dan modern yang dirancang khusus untuk mempermudah calon mahasiswa.`,
            en: `SIMARU (Student Admission System) is an interactive and modern landing page platform specifically designed to facilitate prospective students.`
        },
        teamMembers: [
            createMember("RifqiArdian09"),
            createMember("Salmanziz21"),
        ],
    },
    {
        id: "alquran-web",
        title: { id: "Al-Quran Web", en: "Al-Quran Web" },
        description: {
            id: "Aplikasi baca Al-Qur'an modern berbasis React dan Vite.",
            en: "Modern Al-Qur'an reading application based on React and Vite."
        },
        tech: ["React", "Vite", "React Router", "API"],
        status: { id: "Proyek Solo", en: "Solo Project" },
        image: "/images/projek/alquran-web.png",
        github: "https://github.com/RifqiArdian09/alquran-web",
        demo: "https://bacaquran-roan.vercel.app/",
        date: "2024",
        content: {
            id: `Al-Quran Web adalah aplikasi baca Al-Qur’an berbasis web yang dikembangkan menggunakan React dan Vite.`,
            en: `Al-Quran Web is a web-based Al-Qur’an reading application developed using React and Vite.`
        }
    },
];

export const certificates = [
    {
        title: { id: "Belajar Dasar AI", en: "AI Fundamentals" },
        issuer: "Dicoding",
        image: "/images/sertif/Belajar_Dasar_AI_page1.png",
    },
    {
        title: { id: "Belajar Dasar Pemrograman", en: "Programming Fundamentals" },
        issuer: "Dicoding",
        image: "/images/sertif/Belajar_Dasar_Pemrograman_Web_page1.png",
    },
    {
        title: { id: "Belajar Dasar Pemrograman Javascript", en: "Javascript Fundamentals" },
        issuer: "Dicoding",
        image: "/images/sertif/belajar dasar pemrograman javascript.png",
    },
    {
        title: { id: "Belajar Membuat Front-End Web Untuk Pemula", en: "Front-End Web Development for Beginners" },
        issuer: "Dicoding",
        image: "/images/sertif/belajar membuat front-end web untuk pemula.png",
    },
    {
        title: { id: "Penghargaan Atas Pembuatan Web W-Vote ", en: "W-Vote Web Creation Award" },
        issuer: "SMKN 1 KOTA BENGKULU",
        image: "/images/sertif/w-vote.png",
    },
    {
        title: { id: "Belajar Fundamentasl Front-End Web Development", en: "Fundamental Front-End Web Development" },
        issuer: "Dicoding",
        image: "/images/sertif/Belajar Fundamentasl Front-End Web Development.png",
    }
];

