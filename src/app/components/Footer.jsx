import { CollectionNames, ContactLinks, SocialMediaLinks } from "@/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900">
      {/* wrapper */}
      <div className="wrapper w-5/6 mx-auto grid grid-cols-1 gap-y-16 sm:grid-cols-3 space-x-3 py-16 text-gray-300">
        {/* collection */}
        <div className="flex flex-col items-center justify-center gap-8 sm:block">
          <h2 className="text-xl font-bold">المجموعات</h2>
          <ul className="flex flex-col">
            {CollectionNames.map((collection) => (
              <Link
                key={collection.id}
                href={collection.href}
                className="hover:text-gray-50 py-1"
              >
                {collection.name}
              </Link>
            ))}
          </ul>
        </div>
        {/* middle footer */}
        <div className="flex flex-col gap-y-8">
          <p className="text-center text-2xl">Tahani Alsaeedi</p>
          <p className="text-gray-300 text-center leading-8">
            تصميم العباية هو فن يحتاج إلى ذوق رفيع لذلك نحاول دائمًا تقديم
            الأفضل لعملائنا.
          </p>
          <ul className="flex items-center gap-4 justify-center">
            {SocialMediaLinks.map((link) => (
              <li
                key={link.id}
                className="border-[1px] border-gray-400 hover:border-gray-50 w-8 h-8 flex items-center justify-center"
              >
                <Link href={link.href} target="_blank">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* left footer
         */}
        <div className="flex flex-col  gap-8">
          <h2 className="text-xl font-bold text-center ">تواصل معنا</h2>
          <ul className="flex items-center gap-16 justify-center">
            {ContactLinks.map((contact) => (
              <li
                key={contact.id}
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${contact.backgroundColor}` }}
              >
                <Link href={contact.href} target="_blank">
                  {contact.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
