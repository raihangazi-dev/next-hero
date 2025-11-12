"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <nav className="flex justify-between items-center bg-gray-600 p-2 text-white">
        <h2>Logo</h2>
        <ul className="flex gap-5 ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
}
