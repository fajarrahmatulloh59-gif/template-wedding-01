import { WeddingData, WishMessage } from '../types';

export const defaultWeddingData: WeddingData = {
  groom: {
    name: 'Ahmad',
    fullName: 'Ahmad Fauzi, S.Kom.',
    sonOrDaughterOf: 'Putra pertama dari',
    fatherName: 'Bpk. H. Bambang Sudirman',
    motherName: 'Ibu Hj. Siti Aminah',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    instagram: 'ahmadfauzi',
    bio: 'Software Engineer & Lifelong Learner'
  },
  bride: {
    name: 'Aisyah',
    fullName: 'maronah binti saidin',
    sonOrDaughterOf: 'Putri kedua dari',
    fatherName: 'Bpk. Dr. H. Rahman Hakim',
    motherName: 'Ibu Hj. Farida Hanum',
    photo: '/public.asset/image/mempelai wanita.jpg',
    instagram: 'aisyahjannah',
    bio: 'Pharmacist & Passionate Baker'
  },
  meta: {
    heroTitle: 'The Wedding of tes cloudflare',
    coupleMonogram: 'A & A',
    weddingDateFormatted: 'Minggu, 20 Desember 2026',
    weddingDateShort: '20.12.2026',
    countdownTarget: '2026-12-20T08:00:00+07:00',
    coverPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    heroPhoto: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    closingPhoto: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'
  },
  intro: {
    bismillahText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    salam: 'Assalamu’alaikum Warahmatullahi Wabarakatuh',
    message: 'Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan putra-putri kami.'
  },
  quote: {
    arabicText: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    translation: '“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”',
    source: 'QS. Ar-Rum : 21'
  },
  events: {
    akad: {
      id: 'akad',
      title: 'Akad Nikah',
      badge: 'Sakral & Khidmat',
      day: 'Minggu',
      date: '20 Desember 2026',
      time: '08:00 - 10:00 WIB',
      venueName: 'Masjid Agung Al-Barkah',
      address: 'Jl. Veteran No. 45, Kebayoran Baru, Jakarta Selatan',
      googleMapsUrl: 'https://maps.google.com/?q=Masjid+Agung+Jakarta',
      dressCode: 'Busana Muslim / Formal Putih & Earth Tone'
    },
    resepsi: {
      enabled: true,
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      badge: 'Walimatul Ursy',
      day: 'Minggu',
      date: '20 Desember 2026',
      time: '11:00 - 14:00 WIB',
      venueName: 'The Grand Ballroom Casablanca',
      address: 'Jl. Casablanca Raya Kav. 88, Menteng Dalam, Jakarta Selatan',
      googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Ballroom+Casablanca',
      dressCode: 'Formal / Batik / Modern Elegance'
    }
  },
  loveStory: {
    enabled: true,
    stories: [
      {
        id: '1',
        year: '2022',
        title: 'Pertama Bertemu',
        description: 'Takdir mempertemukan kami pertama kali di sebuah seminar nasional di Bandung. Berawal dari diskusi singkat seputar proyek kolaborasi.',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: '2',
        year: '2023',
        title: 'Mulai Dekat',
        description: 'Seiring berjalannya waktu, percakapan kami semakin intens. Kami menemukan banyak keselarasan dalam visi hidup, prinsip, dan nilai kekeluargaan.',
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: '3',
        year: '2025',
        title: 'Momen Lamaran',
        description: 'Dengan restu kedua orang tua dan keluarga besar, Ahmad secara resmi mengkhitbah Aisyah dalam sebuah pertemuan keluarga yang hangat dan penuh berkah.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: '4',
        year: '2026',
        title: 'Menuju Pernikahan',
        description: 'Memulai lembaran ibadah terpanjang bersama, menyatukan dua hati dan dua keluarga dalam ikatan suci pernikahan.',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  gallery: {
    enabled: true,
    title: 'Galeri Momen',
    subtitle: 'Kilas kenangan perjalanan cinta dan kebersamaan kami',
    photos: [
      {
        id: 'g1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
        caption: 'Momen kehangatan prewedding',
        alt: 'Foto Prewedding Ahmad & Aisyah 1',
        aspect: 'portrait'
      },
      {
        id: 'g2',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Tawa dan kebersamaan',
        alt: 'Foto Prewedding Ahmad & Aisyah 2',
        aspect: 'square'
      },
      {
        id: 'g3',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
        caption: 'Menatap masa depan bersama',
        alt: 'Foto Prewedding Ahmad & Aisyah 3',
        aspect: 'landscape'
      },
      {
        id: 'g4',
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop',
        caption: 'Cincin tanda ikatan suci',
        alt: 'Foto Cincin Pernikahan',
        aspect: 'square'
      },
      {
        id: 'g5',
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop',
        caption: 'Langkah menuju hari bahagia',
        alt: 'Foto Bersama',
        aspect: 'portrait'
      },
      {
        id: 'g6',
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
        caption: 'Bunga kebahagiaan',
        alt: 'Detail Buket Bunga',
        aspect: 'landscape'
      },
      {
        id: 'g7',
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
        caption: 'Senja di tempat pertama',
        alt: 'Foto Suasana Senja',
        aspect: 'square'
      },
      {
        id: 'g8',
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
        caption: 'Dekorasi & sentuhan alam',
        alt: 'Dekorasi Meja Elegan',
        aspect: 'portrait'
      }
    ]
  },
  location: {
    title: 'Lokasi Acara',
    venueName: 'The Grand Ballroom & Masjid Al-Barkah',
    address: 'Jl. Casablanca Raya Kav. 88, Menteng Dalam, Tebet, Jakarta Selatan, DKI Jakarta 12870',
    googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Ballroom+Casablanca+Jakarta',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273646549646!2d106.84078497586884!3d-6.227606360989269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3900222e96d%3A0x8674d89faec0b1f2!2sKota%20Kasablanka!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
    note: 'Tersedia area parkir luas di Basement 1 & Valet Parking di Lobby Utama.'
  },
  music: {
    enabled: true,
    title: 'A Thousand Years (Acoustic Piano & Cello)',
    artist: 'Wedding Symphony Collection',
    trackUrl: '/public/music/wedding sound.mp3' // Uses ambient Web Audio API romantic melody synthesizer or audio stream
  },
  digitalGift: {
    enabled: true,
    title: 'Tanda Kasih (Amplop Digital)',
    description: 'Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda ingin memberikan tanda kasih secara cashless, Anda dapat menggunakan layanan berikut:',
    accounts: [
      {
        id: 'bca1',
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '8820194821',
        accountHolder: 'Ahmad Fauzi',
        iconType: 'bca'
      },
      {
        id: 'bsi1',
        bankName: 'Bank Syariah Indonesia (BSI)',
        accountNumber: '7192837492',
        accountHolder: 'Aisyah Nurul Jannah',
        iconType: 'bsi'
      }
    ],
    shippingAddress: {
      recipient: 'Ahmad Fauzi & Aisyah',
      phone: '+62 812-3456-7890',
      fullAddress: 'Jl. Melati Putih No. 12, RT 04 / RW 02, Kebayoran Baru, Jakarta Selatan 12130'
    }
  },
  closing: {
    message: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.',
    salamClosing: 'Wassalamu’alaikum Warahmatullahi Wabarakatuh',
    coupleSignature: 'Ahmad & Aisyah'
  }
};

export const initialWishes: WishMessage[] = [
  {
    id: 'w-1',
    name: 'Dimas Prasetyo & Keluarga',
    attendance: 'hadir',
    pax: 2,
    message: 'Barakallahu lakuma wa baraka \'alaikuma wa jama\'a bainakuma fii khair. Selamat menempuh hidup baru sahabatku Ahmad & Aisyah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
    createdAt: '2 jam yang lalu'
  },
  {
    id: 'w-2',
    name: 'Nadia Salsabila',
    attendance: 'hadir',
    pax: 1,
    message: 'MasyaAllah Aisyah sayang! Selamat yaa, terharu banget melihat perjalanan kalian. Semoga lancar sampai hari H dan selalu dilimpahi kebahagiaan!',
    createdAt: '5 jam yang lalu'
  },
  {
    id: 'w-3',
    name: 'Rian Pratama & Rekan Kantor',
    attendance: 'hadir',
    pax: 3,
    message: 'Selamat bro Ahmad! Semoga lancar ijab qobulnya dan langgeng sampai kakek nenek. InsyaAllah kami sekeluarga hadir meramaikan.',
    createdAt: '1 hari yang lalu'
  }
];
