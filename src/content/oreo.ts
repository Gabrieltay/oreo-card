// Edit this file to update Oreo's name card content — no code changes needed elsewhere.

export type QuickFact = {
  label: string;
  value: string;
  icon: "PawPrint" | "Cake" | "Scale" | "Carrot" | "Heart" | "MapPin";
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type ReelItem = {
  url: string;
  thumbnail: string;
  caption: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "Instagram" | "Facebook" | "Youtube" | "Link" | "Mail" | "Globe";
};

export const oreo = {
  name: "Oreo",
  fullName: "Oreothesweetbun",
  pronouns: "she/her",
  tagline: "Professional treat inspector 🐰",
  location: "Singapore",
  heroPhoto: {
    src: "/photos/oreo-hero.jpg",
    alt: "Oreo the bunny sitting on a cream stool",
  },

  quickFacts: [
    { label: "Breed", value: "Holland Lop", icon: "PawPrint" },
    { label: "Birthday", value: "16 September", icon: "Cake" },
    { label: "Weight", value: "1.4 kg", icon: "Scale" },
    { label: "Favorite Treat", value: "Apple & romaine lettuce", icon: "Carrot" },
    { label: "Personality", value: "Sweet, curious & food-motivated", icon: "Heart" },
    { label: "Home Base", value: "Singapore 🇸🇬", icon: "MapPin" },
  ] satisfies QuickFact[],

  gallery: [
    { src: "/photos/oreo-hero.jpg", alt: "Oreo sitting neatly on a stool" },
    { src: "", alt: "Add a photo of Oreo exploring outside" },
    { src: "", alt: "Add a photo of Oreo at snack time" },
    { src: "", alt: "Add a photo of Oreo mid-flop" },
    { src: "", alt: "Add a photo of Oreo's award-winning look" },
    { src: "", alt: "Add a photo of Oreo with friends" },
  ] satisfies GalleryPhoto[],

  reels: [
    {
      url: "https://www.instagram.com/reel/CYn1GucqHNo/",
      thumbnail: "",
      caption: "Oreo showing off her best dance moves 💃",
    },
  ] satisfies ReelItem[],

  about:
    "Oreo is the sweetest no. 1 bunny — a black-and-white Holland Lop with a heart-shaped nose marking and a talent for making everyone she meets fall in love. She spends her days inspecting treats, supervising nap schedules, and occasionally winning Best in Show. When she's not busy being adorable, you can find her flopped over in a sunbeam, plotting her next snack heist.",

  achievements: ["Best in Show — Rabbit Show '24", "Best in Show — Rabbit Show '25"],

  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/oreothesweetbun",
      icon: "Instagram",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1AVJk9QMP9/",
      icon: "Facebook",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@oreothesweetbun",
      icon: "Youtube",
    },
    {
      label: "All Links",
      href: "https://taplink.cc/oreothesweetbun",
      icon: "Link",
    },
  ] satisfies SocialLink[],
};

export type Oreo = typeof oreo;
