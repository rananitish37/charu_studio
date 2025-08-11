import heroImage from "../images/sec1.png";
import slider1 from '../images/slider1.jpeg';
import slider2 from '../images/slider2.jpeg';
import slider3 from '../images/slider3.jpeg';
import slider4 from '../images/slider4.jpeg';
import React, { useState } from "react";

export default function Home() {
        const heroImages = [slider1, slider2, slider3, slider4];

        const [currentIndex, setCurrentIndex] = useState(0);
      
        // Move to the previous slide
        const goToPrev = () => {
          setCurrentIndex(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
        };
      
        // Move to the next slide
        const goToNext = () => {
          setCurrentIndex((currentIndex + 1) % heroImages.length);
        };
    

    return (

      <div className="home">
        {/* Hero */}
        <section className="hero">
  <div className="hero-bg-container">
    <img
      className="hero-bg"
      src={heroImages[currentIndex]}
      alt="Makeup studio background"
    />
    {/* Overlay for the theatrical look */}
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content">
    {/* Slider Controls at the top of the text */}
    <div className="text-hero">
        <div className="hero-slider-controls">
        <button onClick={goToPrev} aria-label="Previous Slide">&#9664;</button>
        <span className="slide-indicator">
            {currentIndex + 1} / {heroImages.length}
        </span>
        <button onClick={goToNext} aria-label="Next Slide">&#9654;</button>
        </div>

        <h1>The Premier Luxury Makeup Studio &amp; Academy</h1>
        <p>Experience the pinnacle of makeup excellence in India.</p>
        <div className="hero-buttons">
        <button className="btn-primary">Book an Appointment</button>
        <button className="btn-secondary">Explore Academy</button>
        </div>
</div>
    
  </div>
</section>

        {/* About */}
        <section className="about">
  <div className="about-bg-container">
    {/* Add your background image here. Use a local image or external URL */}
    <img className="about-bg" src={require('../images/sec3.jpeg')} alt="Studio background" />
    <div className="about-overlay"></div>
  </div>
  <h2>Experience Unmatched Elegance & Artistry</h2>
  <div className="about-grid">
    <div className="about-card">
      <h3>Luxury Transformation</h3>
      <p>Step into Charu Gumber's world where beauty meets precision and luxury. Our signature techniques enhance your natural features with unparalleled attention to detail.</p>
    </div>
    <div className="about-card">
      <h3>Tailored Excellence</h3>
      <p>Customized makeup journeys for brides, celebrities, and discerning clients. We craft looks that reflect your personality while maintaining timeless elegance.</p>
    </div>
    <div className="about-card">
      <h3>Premium Products</h3>
      <p>High-end cosmetics & techniques for lasting beauty...</p>
    </div>
  </div>
</section>


      
    {/* Services */}
    <section className="services">
  <div className="services-bg-container">
    {/* Optionally add a full background image for the section */}
    <img className="services-bg" src={require('../images/services-bg.jpeg')} alt="Studio ambiance" />
    <div className="services-overlay"></div>
  </div>
  <h2>Our Signature Services: Beyond Makeup, A Masterpiece</h2>
  <div className="services-grid">
    {/* Bridal Couture Makeovers Card */}
    <div className="service-card">
      <img
        className="service-image"
        src={require('../images/service-bride.jpeg')}
        alt="Bridal Couture Makeover"
      />
      <div className="service-content">
        <h3>Bridal Couture Makeovers</h3>
        <p>
          Personalized looks that enhance your unique beauty on your special day. We blend traditional elements with contemporary techniques for unforgettable bridal glamour.
        </p>
      </div>
    </div>
    {/* Glamour & Party Styling Card */}
    <div className="service-card">
      <img
        className="service-image"
        src={require('../images/service-party.jpeg')}
        alt="Glamour & Party Styling"
      />
      <div className="service-content">
        <h3>Glamour &amp; Party Styling</h3>
        <p>
          From classic elegance to avant-garde fashion statements. Make a stunning impression at every social gathering with our statement-making looks.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Meet Charu */}
      <section className="meet-charu">
  <div className="meet-charu-row">
    {/* Left: Image Panel */}
    <div className="meet-charu-image">
      <img
        src={require('../images/charu-studio-bg.jpeg')}
        alt="Charu Gumber in studio"
      />
    </div>
    {/* Right: Text Card */}
    <div className="meet-charu-text">
      <h2>Meet Charu Gumber: The Visionary Artist &amp; Mentor</h2>
      <blockquote>
        "Makeup is not about masking imperfections – it's about celebrating uniqueness and bringing out the extraordinary in every face."
      </blockquote>
      <p>
        Renowned makeup artist with over a decade of experience in luxury weddings and high-fashion events across India. Charu's signature style blends technical precision with artistic vision, earning trust from celebrities and elite clientele nationwide.
      </p>
      <p>
        As a passionate educator, Charu dedicates herself to nurturing the next generation of makeup professionals through her academy, where she shares exclusive techniques and industry insights.
      </p>
    </div>
  </div>
</section>



      {/* Academy */}
      <section className="academy">
        <h2>The Charu Gumber Academy: Elevate Your Craft</h2>
        <ul>
          <li>Professional Courses - Bridal, fashion, personal grooming...</li>
          <li>Personalized Mentorship - Hands-on training, industry insights...</li>
          <li>Elite Certification - Recognized throughout the beauty industry...</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="academy">
  <div className="academy-bg-container">
    {/* Main background image */}
    <img
      className="academy-bg"
      src={require('../images/academy-bg.jpeg')}
      alt="Academy background"
    />
    <div className="academy-overlay"></div>
  </div>
  <h2>The Charu Gumber Academy: Elevate Your Craft</h2>
  <div className="academy-card-grid">
    {/* Card 1: Professional Courses */}
    <div className="academy-card">
      <img
        className="academy-card-image"
        src={require('../images/course-card.jpeg')}
        alt="Professional Courses"
      />
      <div className="academy-card-content">
        <h3>Professional Courses</h3>
        <p>
          Comprehensive makeup programs covering bridal, fashion, personal grooming, and advanced artistry techniques. Learn the secrets behind Charu's distinctive style.
        </p>
      </div>
    </div>
    {/* Card 2: Personalized Mentorship */}
    <div className="academy-card">
      <img
        className="academy-card-image"
        src={require('../images/mentorship-card.jpeg')}
        alt="Personalized Mentorship"
      />
      <div className="academy-card-content">
        <h3>Personalized Mentorship</h3>
        <p>
          Hands-on training with individualized guidance and industry insights. Small batch sizes ensure personal attention and maximum skill development.
        </p>
      </div>
    </div>
    {/* Card 3: Elite Certification */}
    <div className="academy-card">
      <img
        className="academy-card-image"
        src={require('../images/certification-card.jpeg')}
        alt="Elite Certification"
      />
      <div className="academy-card-content">
        <h3>Elite Certification</h3>
        <p>
          Graduate with credentials recognized throughout the beauty industry. Alumni work with celebrities, luxury brands, and establish their own successful ventures.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Portfolio */}
      <section className="portfolio-preview">
  <h2>Our Work Portfolio: Artistry in Every Stroke</h2>
  <p className="portfolio-desc">
    Explore a curated selection of our most exquisite makeup transformations. From breathtaking bridal artistry to striking celebrity red carpet looks and avant-garde editorial concepts, our portfolio showcases the breadth and precision of Charu Gumber's artistry.
  </p>
  <div className="portfolio-grid">
    <div className="portfolio-card">
      <img src={require('../images/portfolio1.jpeg')} alt="Portfolio Transformation 1" />
    </div>
    <div className="portfolio-card">
      <img src={require('../images/portfolio2.jpeg')} alt="Portfolio Transformation 2" />
    </div>
    <div className="portfolio-card">
      <img src={require('../images/portfolio3.jpeg')} alt="Portfolio Transformation 3" />
    </div>
    <div className="portfolio-card">
      <img src={require('../images/portfolio4.jpeg')} alt="Portfolio Transformation 4" />
    </div>
    <div className="portfolio-card">
      <img src={require('../images/portfolio5.jpeg')} alt="Portfolio Transformation 5" />
    </div>
    <div className="portfolio-card">
      <img src={require('../images/portfolio6.jpeg')} alt="Portfolio Transformation 6" />
    </div>
  </div>
</section>




      {/* Products */}
      <section className="products">
  {/* Header at the top */}
  <h2>Our Premium Product Philosophy</h2>
  {/* Row of two cards: left is image, right is text */}
  <div className="products-row">
    {/* Left Card: Image */}
    <div className="products-card products-image-card">
      <img
        src={require('../images/products-main.jpeg')}
        alt="Luxury makeup products"
      />
    </div>
    {/* Right Card: Text */}
    <div className="products-card products-text-card">
      <p>
        At Charu Gumber Studio, we believe your skin deserves nothing but the finest.
        Our curated collection features <span className="gold">premium, cruelty-free, and skin-friendly products</span> suited for Indian skin tones.<br /><br />
        We partner exclusively with luxury brands for safety and quality, with hypoallergenic and bespoke solutions for stunning, personalized glamour.
      </p>
    </div>
  </div>
</section>




      {/* Studio Experience */}
      <section className="studio-exp">
  <div className="studio-exp-container">
    {/* Left: Text/Features Side */}
    <div className="studio-exp-content">
      <h2>Exclusive Studio Experience</h2>
      <p className="studio-exp-desc">
        Step into a sanctuary of beauty where every detail is designed for your comfort and transformation.<br />
        Our studio offers a private, opulent environment where you can relax and enjoy your metamorphosis.
      </p>
      <div className="studio-exp-features">
        <div className="studio-exp-feature">
          <div className="studio-exp-num">01</div>
          <div>
            <div className="studio-exp-title">Personal Consultation</div>
            <div className="studio-exp-text">
              Begin with an in-depth discussion about your desires, preferences, and the occasion to craft your perfect look.
            </div>
          </div>
        </div>
        <div className="studio-exp-feature">
          <div className="studio-exp-num">02</div>
          <div>
            <div className="studio-exp-title">Bespoke Service</div>
            <div className="studio-exp-text">
              Experience attentive, unhurried service with meticulous attention to every detail of your appearance.
            </div>
          </div>
        </div>
        <div className="studio-exp-feature">
          <div className="studio-exp-num">03</div>
          <div>
            <div className="studio-exp-title">Flexible Scheduling</div>
            <div className="studio-exp-text">
              Enjoy convenient appointment options including private sessions, home visits, and group workshops for bridal parties.
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Right: Studio Image */}
    <div className="studio-exp-image">
      <img
        src={require('../images/studio-interior.jpeg')}
        alt="Luxury Makeup Studio"
      />
    </div>
  </div>
</section>

<section className="behind-scenes">
  <h2>Behind the Scenes: The Artistry Unveiled</h2>
  <p className="behind-scenes-desc">
    Witness the dedication and passion that goes into every transformation. Our 'Behind the Scenes' glimpse reveals the meticulous process, from initial consultation to the final radiant reveal. Experience the precision, premium products, and luxurious atmosphere that define the Charu Gumber experience.
  </p>
  <div className="bts-grid">
    <img src={require('../images/behind1.jpeg')} alt="Makeup Artist at Work" />
    <img src={require('../images/behind2.jpeg')} alt="Makeup Brushes" />
    <img src={require('../images/behind3.jpeg')} alt="Studio Preparation" />
    <img src={require('../images/behind4.jpeg')} alt="Transformation Unveiled" />
  </div>
</section>



      <section className="book-section">
      <h2>Book Your Experience or Enroll Today</h2>
      <div className="book-card-row">
        <div className="card">
          <h3>Makeup Services</h3>
          <p>Reserve your transformation for weddings, special events, or photoshoots...</p>
          <button className="btn-primary">View Services</button>
        </div>
        <div className="card">
          <h3>Academy Enrollment</h3>
          <p>Secure your place in our exclusive professional makeup courses...</p>
          <button className="btn-primary">Explore Courses</button>
        </div>
        <div className="card">
          <h3>Contact Us</h3>
          <p>Luxury Studio Complex, 7/42 Patel Nagar, New Delhi, India</p>
          <p>+91 98765 43210</p>
          <p>info@charugumber.com</p>
          <button className="btn-secondary">Get Directions</button>
        </div>
      </div>
    </section>

      {/* Behind the Scenes */}
      <section className="behind-scenes">
        <h2>Behind the Scenes: The Artistry Unveiled</h2>
        <p>Witness the passion and precision that goes into every transformation...</p>
      </section>
      <section className="legacy-section">
      <h2>Join The Legacy of Beauty & Excellence</h2>
      <div className="legacy-flex">
        <div>
          <p>
            Become part of a community that celebrates artistry, confidence, and transformation.
            At Charu Gumber Studio & Academy, we're not just creating looks—we're crafting experiences and careers.
          </p>
        </div>
        <div>
          <p>
            Follow our journey and latest creations on social media for daily inspiration and behind-the-scenes glimpses.
          </p>
          <div className="legacy-btns">
            <button className="btn-instagram">Instagram</button>
            <button className="btn-youtube">YouTube</button>
          </div>
        </div>
      </div>
      <div className="legacy-cta">
        <h3 className="yellow">Your dream look and career start here — where passion meets perfection.</h3>
      </div>
    </section>
                  <section className="contact-connect">
                    <div className="contact-grid">
                      {/* Reach Out */}
                      <div className="contact-block">
                        <h3>Reach Out</h3>
                        <p>Luxury Studio Complex,<br />7/42 Patel Nagar<br />New Delhi, India</p>
                        <p>Phone: <span className="yellow">+91 98765 43210</span></p>
                        <p>Email: <span className="yellow">info@charugumber.com</span></p>
                      </div>
                      {/* Business Hours */}
                      <div className="contact-block">
                        <h3>Business Hours</h3>
                        <ul>
                          <li><span className="white-bold">Monday - Friday</span>: 10:00 AM – 7:00 PM</li>
                          <li><span className="white-bold">Saturday</span>: 11:00 AM – 5:00 PM</li>
                          <li><span className="white-bold">Sunday</span>: By Appointment Only</li>
                        </ul>
                        <p className="small">Flexible scheduling available upon request.</p>
                      </div>
                      {/* Quick Links */}
                      <div className="contact-block">
                        <h3>Quick Links</h3>
                        <ul>
                          <li className="yellow-link">Our Services</li>
                          <li className="yellow-link">The Academy</li>
                          <li className="yellow-link">Portfolio</li>
                          <li className="yellow-link">About Charu Gumber</li>
                          <li className="yellow-link">Contact Us</li>
                        </ul>
                      </div>
                      {/* Follow Us */}
                      <div className="contact-block">
                        <h3>Follow Us</h3>
                        <p>Stay updated with our latest looks, courses, and behind-the-scenes content. Join our vibrant community!</p>
                        <button className="btn-instagram">Instagram</button>
                      </div>
                    </div>
                    {/* <footer className="footer-bar">
                      <p>© 2024 Charu Gumber Studio & Academy. All rights reserved.</p>
                    </footer> */}
                  </section>
      </div>
      
    );
  }