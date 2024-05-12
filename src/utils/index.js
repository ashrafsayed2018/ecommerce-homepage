import {
  faInstagram,
  faSnapchat,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxOpen,
  faCog,
  faDashboard,
  faList,
  faList12,
  faPhone,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
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

export const AdminLinks = [
  {
    id: 1,
    name: "لوحة التحكم",
    href: "/admin",
    icon: (
      <FontAwesomeIcon
        icon={faDashboard}
        color="gray"
        style={{ width: "16", height: "16" }}
      />
    ),
  },
  {
    id: 2,
    name: "المستخدمين",
    href: "/admin/users",
    icon: (
      <FontAwesomeIcon
        icon={faUserAlt}
        color="gray"
        style={{ width: "16", height: "16" }}
      />
    ),
  },
  {
    id: 3,
    name: "المنتجات",
    href: "/admin/products",
    icon: (
      <FontAwesomeIcon
        icon={faBoxOpen}
        color="gray"
        style={{ width: "16", height: "16" }}
      />
    ),
  },
  {
    id: 4,
    name: "الطلبات",
    href: "/admin/orders",
    icon: (
      <FontAwesomeIcon
        icon={faList}
        color="gray"
        style={{ width: "16", height: "16" }}
      />
    ),
  },
  {
    id: 5,
    name: "الاعدادات",
    href: "/admin/settings",
    icon: (
      <FontAwesomeIcon
        icon={faCog}
        color="gray"
        style={{ width: "16", height: "16" }}
      />
    ),
  },
];

export const RegistrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "ادخل اسمك",
    label: "الاسم",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "البريد الالكتروني",
    label: "البريد الالكتروني",
    componentType: "input",
  },
  {
    id: "password",
    type: "text",
    placeholder: "كلمة المرور",
    label: "كلمة المرور",
    componentType: "input",
  },
  {
    id: "confirmPassword",
    type: "text",
    placeholder: " تأكيد كلمة المرور",
    label: "تأكيد كلمة المرور",
    componentType: "input",
  },
];

export const LoginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "البريد الاكتروني",
    label: "البريد الالكتروني",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "كلمة المرور",
    label: "كلمة المرور",
    componentType: "input",
  },
];
