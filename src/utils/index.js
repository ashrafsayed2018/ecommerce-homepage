import {
  faInstagram,
  faSnapchat,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavbarLinks = [
  {
    id: 1,
    name: "معلومات عنا",
    href: "/",
  },
  {
    id: 2,
    name: "اتصل بنا",
    href: "/",
  },
];

export const ProductItems = [
  {
    id: 1,
    imageUrl: "/images/hero1.jpg",
    category: "عباية",
    description: "تميزي بإطلالتج مع كلاسيك كوليكشن",
    price: "48",
  },
  {
    id: 2,
    imageUrl: "/images/1.jpg",
    category: "عباية",
    description: "تميزي بإطلالتج مع كلاسيك كوليكشن",
    price: "58",
  },
  {
    id: 3,
    imageUrl: "/images/2.jpg",
    category: "عباية",
    description: "كلاسيك كوليكشن متوفر بألوان متعددة🔥🔥",
    price: "55",
  },
];

export const CollectionNames = [
  {
    id: 1,
    name: "عباية بسيطة",
    href: "/",
  },
  {
    id: 2,
    name: "عباية أنيقة",
    href: "/",
  },
  {
    id: 3,
    name: "عباية سوداء",
    href: "/",
  },
  {
    id: 4,
    name: "عباية ملونة",
    href: "/",
  },
];

export const SocialMediaLinks = [
  {
    id: 1,
    name: "instagram",
    href: "https://www.instagram.com/tahanialsaeedi_?igsh=a2k2ZWc3MnBxdDFw&utm_source=qr",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    id: 2,
    name: "youtube",
    href: "https://www.youtube.com/@TahaniAlsaeedi",
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
  {
    id: 3,
    name: "snapchat",
    href: "https://www.snapchat.com/tahanialsaeedi1",
    icon: <FontAwesomeIcon icon={faSnapchat} />,
  },
  {
    id: 4,
    name: "tiktok",
    href: "https://www.tiktok.com/@tahanialsaeedi_?_t=8m19Xypyfuz&_r=1",
    icon: <FontAwesomeIcon icon={faTiktok} />,
  },
];

export const ContactLinks = [
  {
    id: 1,
    name: "phone",
    href: "tel:96599002349",
    backgroundColor: "blue",
    icon: <FontAwesomeIcon icon={faPhone} size="xl" color="white" />,
  },
  {
    id: 2,
    name: "whatsapp",
    href: "https://wa.me/message/BUZO5EPDD3NEE1",
    backgroundColor: "green",
    icon: <FontAwesomeIcon icon={faWhatsapp} size="xl" color="white" />,
  },
];
