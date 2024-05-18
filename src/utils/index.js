import {
  faFacebook,
  faInstagram,
  faPinterest,
  faSnapchat,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBoxOpen,
  faCog,
  faDashboard,
  faGlobe,
  faList,
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
  {
    id: 3,
    name: "طلباتي",
    href: "/orders",
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
    href: "https://www.snapchat.com/add/tahanialsaeedi1?share_id=7-m5r_SLSFia90QpfMJvAg&locale=ar_KW",
    icon: <FontAwesomeIcon icon={faSnapchat} />,
  },
  {
    id: 4,
    name: "tiktok",
    href: "https://www.tiktok.com/@tahanialsaeedi_?_t=8m19Xypyfuz&_r=1",
    icon: <FontAwesomeIcon icon={faTiktok} />,
  },
  {
    id: 5,
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=100084140913689&mibextid=LQQJ4d",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    id: 6,
    name: "pintrest",
    href: "https://www.pinterest.com/tahanialsaeedi_/?invite_code=bbecfe07113d4f1e975d6b15f3fa6523&sender=963418682694933576",
    icon: <FontAwesomeIcon icon={faPinterest} />,
  },
  {
    id: 7,
    name: "reachme",
    href: "https://reach.link/abati_boutique?fbclid=PAAabg8UBEbwOD8RHQthxCFnqMjDCdMzY1wWApJIzstg3u5CInDSPH9O2GltA_aem_AbjC2efq0bX9781iA7-i0UJDCF4DFEmcNPLch6qdBLP0s4nqFaQNtqX6jYaqSDpyyB4",
    icon: <FontAwesomeIcon icon={faGlobe} />,
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
    type: "password",
    placeholder: "كلمة المرور",
    label: "كلمة المرور",
    componentType: "input",
  },
  {
    id: "confirmPassword",
    type: "password",
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
export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "اسم المنتج",
    label: "اسم المنتج",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "سعر المنتج",
    label: "سعر المنتج",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "وصف المنتج",
    label: "وصف المنتج",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "القسم",
    componentType: "select",
    options: [
      {
        id: "رجال",
        label: "رجال",
      },
      {
        id: "نساء",
        label: "نساء",
      },
      {
        id: "اطفال",
        label: "اطفال",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "معلومات التوصيل",
    label: "معلومات التوصيل",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "خصم",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "نعم",
      },
      {
        id: "no",
        label: "لا",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "نسبة الخصم",
    label: "نسبة الخصم",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "الاسم الكامل",
    label: "الاسم الكامل",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "ادخل العنوان ",
    label: "العنوان",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "ادخل المدينة",
    label: "المدينة",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "ادخل الدولة",
    label: "الدولة",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "ادخل الرمز البريدي",
    label: "الرمز البريدي",
    componentType: "input",
  },
];
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB6u0OlNgnXoUif1SKnv6V1o5FoqKiscJM",
  authDomain: "next-js-ecommerce-59b62.firebaseapp.com",
  projectId: "next-js-ecommerce-59b62",
  storageBucket: "next-js-ecommerce-59b62.appspot.com",
  messagingSenderId: "252303426375",
  appId: "1:252303426375:web:dc750523a68ecb01db4262",
};

export const firebaseStroageURL = "gs://next-js-ecommerce-59b62.appspot.com";
