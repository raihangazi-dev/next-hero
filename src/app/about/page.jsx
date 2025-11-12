"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  // const isLoggedIn = true;

  // const handleNavigation = () => {
  //   if(isLoggedIn){
  //     router.push("/about/address");
  //   }else{
  //     router.push("/");
  //   }
  // }
  return (
    <div>
        <p>About Page</p>
        {/* <Link href="/about/address">Address Page</Link> */}
        {/* <button type="button" onClick={handleNavigation}>Address Page</button> */}
    </div>
  )
}
