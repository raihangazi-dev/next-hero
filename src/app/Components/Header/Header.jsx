import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="di-header">
      <div className="di-container di-nav">
        <div className="di-logo">
          <span className="di-logo-mark">D</span>
          <span className="di-logo-text">Dine In</span>
        </div>
        <nav className="di-nav-links">
          <Link href="/">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>
        <button className="di-btn di-btn-outline">Book a Table</button>
      </div>
    </header>
  );
}
