import { ContactLinks } from "@/utils";
import Link from "next/link";

export default function FixedContact() {
  return (
    <ul className="flex flex-col gap-4 fixed right-6 bottom-6 z-50">
      {ContactLinks.map((contact) => (
        <li
          key={contact.id}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${contact.backgroundColor}` }}
        >
          <Link href={contact.href} target="_blank">
            {contact.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
