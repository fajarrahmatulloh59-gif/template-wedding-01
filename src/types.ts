export interface PersonInfo {
  name: string;
  fullName: string;
  sonOrDaughterOf: string;
  fatherName: string;
  motherName: string;
  photo: string;
  instagram?: string;
  bio?: string;
}

export interface EventDetail {
  id: string;
  title: string;
  badge: string;
  day: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  googleMapsUrl: string;
  dressCode?: string;
}

export interface StoryItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption?: string;
  alt: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  iconType?: 'bca' | 'mandiri' | 'bri' | 'bsi' | 'general';
}

export interface WeddingData {
  groom: PersonInfo;
  bride: PersonInfo;
  meta: {
    heroTitle: string;
    coupleMonogram: string;
    weddingDateFormatted: string;
    weddingDateShort: string;
    countdownTarget: string; // ISO date string
    coverPhoto: string;
    heroPhoto: string;
    closingPhoto: string;
  };
  intro: {
    bismillahText: string;
    salam: string;
    message: string;
  };
  quote: {
    arabicText: string;
    translation: string;
    source: string;
  };
  events: {
    akad: EventDetail;
    resepsi?: EventDetail & { enabled: boolean };
  };
  loveStory: {
    enabled: boolean;
    stories: StoryItem[];
  };
  gallery: {
    enabled: boolean;
    title: string;
    subtitle: string;
    photos: GalleryPhoto[];
  };
  location: {
    title: string;
    venueName: string;
    address: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    note?: string;
  };
  music: {
    enabled: boolean;
    title: string;
    artist: string;
    trackUrl: string;
  };
  digitalGift: {
    enabled: boolean;
    title: string;
    description: string;
    accounts: BankAccount[];
    shippingAddress?: {
      recipient: string;
      phone: string;
      fullAddress: string;
    };
  };
  closing: {
    message: string;
    salamClosing: string;
    coupleSignature: string;
  };
}

export interface WishMessage {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak' | 'ragu';
  pax: number;
  message: string;
  createdAt: string;
}
