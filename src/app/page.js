"use client"
import React from "react";

const RestaurantHome = () => {
  return (
    <div className="dinein-page">
      {/* Hero Section */}
      <section id="home" className="di-hero">
        <div className="di-hero-overlay" />
        <div className="di-container di-hero-content">
          <div className="di-hero-text">
            <p className="di-hero-tagline">Fine Dining • Cozy Atmosphere</p>
            <h1>
              Experience the <span>Art of Taste</span> at Dine In
            </h1>
            <p className="di-hero-subtitle">
              Fresh ingredients, handcrafted dishes, and a warm ambiance —
              perfect for family dinners, date nights, and celebrations.
            </p>
            <div className="di-hero-actions">
              <button className="di-btn di-btn-primary">Reserve Now</button>
              <button className="di-btn di-btn-ghost">View Full Menu</button>
            </div>
            <div className="di-hero-stats">
              <div>
                <span className="di-stat-number">4.9★</span>
                <span className="di-stat-label">Customer Rating</span>
              </div>
              <div>
                <span className="di-stat-number">50+</span>
                <span className="di-stat-label">Signature Dishes</span>
              </div>
              <div>
                <span className="di-stat-number">7 Days</span>
                <span className="di-stat-label">Open a Week</span>
              </div>
            </div>
          </div>
          <div className="di-hero-card">
            <h3>Tonight’s Reservation</h3>
            <p>Book your perfect time in just a few clicks.</p>
            <form className="di-reservation-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Date
                <input type="date" required />
              </label>
              <label>
                Time
                <input type="time" required />
              </label>
              <label>
                Guests
                <select defaultValue="2">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6+ Guests</option>
                </select>
              </label>
              <button type="submit" className="di-btn di-btn-primary di-btn-block">
                Check Availability
              </button>
              <p className="di-small-text">No credit card required.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="di-section di-section-light">
        <div className="di-container">
          <div className="di-section-header">
            <h2>Featured Dishes</h2>
            <p>
              A glimpse of our most loved plates — crafted with passion and plated with style.
            </p>
          </div>
          <div className="di-grid di-grid-3">
            <div className="di-card di-card-dish">
              <div className="di-dish-img di-dish-img-1" />
              <div className="di-card-body">
                <h3>Herb Grilled Salmon</h3>
                <p>
                  Fresh Atlantic salmon with lemon butter sauce, served with roasted veggies.
                </p>
                <div className="di-card-footer">
                  <span className="di-price">$24</span>
                  <span className="di-pill">Chef’s Special</span>
                </div>
              </div>
            </div>

            <div className="di-card di-card-dish">
              <div className="di-dish-img di-dish-img-2" />
              <div className="di-card-body">
                <h3>Truffle Alfredo Pasta</h3>
                <p>
                  Creamy fettuccine alfredo infused with truffle oil and parmesan.
                </p>
                <div className="di-card-footer">
                  <span className="di-price">$19</span>
                  <span className="di-pill di-pill-secondary">Most Popular</span>
                </div>
              </div>
            </div>

            <div className="di-card di-card-dish">
              <div className="di-dish-img di-dish-img-3" />
              <div className="di-card-body">
                <h3>Firewood Margherita Pizza</h3>
                <p>
                  Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.
                </p>
                <div className="di-card-footer">
                  <span className="di-price">$17</span>
                  <span className="di-pill">Stone Baked</span>
                </div>
              </div>
            </div>
          </div>
          <div className="di-center">
            <button className="di-btn di-btn-outline">Explore Full Menu</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="di-section">
        <div className="di-container di-about-layout">
          <div className="di-about-image" />
          <div className="di-about-text">
            <h2>About Dine In</h2>
            <p>
              At Dine In, we believe that every meal should feel like a celebration. 
              Our chefs blend traditional flavors with modern techniques to bring you dishes
              that are both comforting and exciting.
            </p>
            <p>
              From intimate dinners to family gatherings, our cozy interiors and warm staff ensure 
              you feel right at home the moment you walk in.
            </p>
            <ul className="di-about-list">
              <li>✔ Farm-fresh ingredients, locally sourced</li>
              <li>✔ Handcrafted desserts made daily</li>
              <li>✔ Private dining area for special events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specials / Highlights */}
      <section id="specials" className="di-section di-section-dark">
        <div className="di-container">
          <div className="di-section-header di-section-header-center">
            <h2>Why Dine With Us?</h2>
            <p>
              More than just food — it’s an experience you’ll want to relive.
            </p>
          </div>
          <div className="di-grid di-grid-3">
            <div className="di-highlight-card">
              <h3>Live Kitchen</h3>
              <p>
                Watch our chefs create your dishes in an open kitchen concept that’s as entertaining as it is delicious.
              </p>
            </div>
            <div className="di-highlight-card">
              <h3>Signature Drinks</h3>
              <p>
                From mocktails to specialty coffees, our drink menu perfectly complements every meal.
              </p>
            </div>
            <div className="di-highlight-card">
              <h3>Warm Ambiance</h3>
              <p>
                Soft lighting, curated music, and cozy seating make Dine In ideal for every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="di-section di-section-light">
        <div className="di-container">
          <div className="di-section-header di-section-header-center">
            <h2>What Our Guests Say</h2>
          </div>
          <div className="di-grid di-grid-3">
            <div className="di-review-card">
              <p>
                “Absolutely phenomenal! The service, food, and atmosphere were all spot on. 
                Dine In is our new favorite place.”
              </p>
              <span className="di-review-name">— Ayesha</span>
            </div>
            <div className="di-review-card">
              <p>
                “The truffle pasta is a must-try. Cozy, elegant, and perfect for date nights.”
              </p>
              <span className="di-review-name">— Imran</span>
            </div>
            <div className="di-review-card">
              <p>
                “Family-friendly and the staff is super welcoming. My kids loved the pizza!”
              </p>
              <span className="di-review-name">— Rahman Family</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="di-section di-contact-section">
        <div className="di-container di-contact-layout">
          <div>
            <h2>Visit Dine In</h2>
            <p className="di-contact-subtitle">
              Reserve your table or walk in — we’re ready to welcome you.
            </p>
            <div className="di-contact-info">
              <p>
                <strong>Address:</strong> 123 Food Street, Gourmet City
              </p>
              <p>
                <strong>Phone:</strong> +880-1234-567890
              </p>
              <p>
                <strong>Opening Hours:</strong> 12:00 PM – 11:00 PM (Everyday)
              </p>
            </div>
          </div>
          <form className="di-contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Let us know your thoughts or inquiry..." />
            </label>
            <button type="submit" className="di-btn di-btn-primary di-btn-block">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="di-footer">
        <div className="di-container di-footer-content">
          <span>© {new Date().getFullYear()} Dine In. All rights reserved.</span>
          <span className="di-footer-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantHome;
