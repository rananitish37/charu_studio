import React, { useState, useEffect } from "react";

export default function Home() {
  const heroImages = [
    require("../images/slider1.jpg"),
    require("../images/slider2.jpg"),
    require("../images/slider3.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === offerSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () =>
    setCurrent(current === 0 ? offerSlides.length - 1 : current - 1);
  const goToNext = () =>
    setCurrent(current === offerSlides.length - 1 ? 0 : current + 1);
  const offerSlides = [
    {
      desktopImage: require("../images/offer1-desktop.png"),
      mobileImage: require("../images/offer1-mobile.png"),
      title: "Luxury Makeover Package",
      description: "Experience a full-service, personalized glam session at an exclusive introductory price."
    },
    {
      desktopImage: require("../images/offer2-desktop.png"),
      mobileImage: require("../images/offer2-mobile.png"),
      title: "Academy Early Bird Special",
      description: "First 10 students get 15% off advanced courses. Transform your passion!"
    },
    {
      desktopImage: require("../images/offer3-desktop.png"),
      mobileImage: require("../images/offer3-mobile.png"),
      title: "First-Time Client Welcome",
      description: "Enjoy 25% off your first makeup service. Discover unparalleled beauty."
    }
  ];
  
  return (
    <div className="home">
      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-bg-container">
          <img
            className="hero-bg"
            src={heroImages[currentIndex]}
            alt="Makeup studio background"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="text-hero hero-text-box">
            <h1><span className="hero-text-main">The Premier Luxury <br/></span> <span className="hero-text-sub">Makeup Studio &amp; Academy</span></h1>
            <p>Experience the pinnacle of makeup excellence in India.</p>
            <div className="hero-buttons">
              <button className="btn-primary"><a href="#contact">Book Appointment</a></button>
              {/* <button className="btn-secondary">Explore Academy</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* offers */}
      <section id="offers" className="offers-slider-full">
  <div className="offers-bg-image-container">
    <picture>
      <source srcSet={offerSlides[current].desktopImage} media="(min-width:1024px)" />
      <img
        className="offers-bg-image"
        src={offerSlides[current].mobileImage}
        alt={offerSlides[current].title}
      />
    </picture>
    <div className="offers-bg-overlay"></div>
    <div className="offer-text-box">
      <div className="offer-btn-container">
        <button className="btn-book">
          <a href="#contact">Book Now</a>
        </button>
      </div>
    </div>
    <div className="offers-slider-controls">
      <button className="offers-nav" onClick={goToPrev} aria-label="Previous Offer">◀</button>
      <button className="offers-nav" onClick={goToNext} aria-label="Next Offer">▶</button>
    </div>
  </div>
</section>


      {/* About */}
      <section id="about" className="about">
        <div className="about-bg-container">
          {/* Add your background image here. Use a local image or external URL */}
          <img
            className="about-bg"
            src={require("../images/sec3.jpeg")}
            alt="Studio background"
          />
          <div className="about-overlay"></div>
        </div>
        <h2>Experience Unmatched Elegance & Artistry</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Luxury Transformation</h3>
            <p>
              Step into Charu Gumber's world where beauty meets precision and
              luxury. Our signature techniques enhance your natural features
              with unparalleled attention to detail.
            </p>
          </div>
          <div className="about-card">
            <h3>Tailored Excellence</h3>
            <p>
              Customized makeup journeys for brides, celebrities, and discerning
              clients. We craft looks that reflect your personality while
              maintaining timeless elegance.
            </p>
          </div>
          <div className="about-card">
            <h3>Premium Products</h3>
            <p>
              Exclusive use of high-end cosmetics and cutting-edge techniques.
              We select products that complement Indian skin tones perfectly for
              flawless, long-lasting results.
            </p>
          </div>
          
        </div>
        
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="services-bg-container">
          {/* Optionally add a full background image for the section */}
          <img
            className="services-bg"
            src={require("../images/services-bg.jpg")}
            alt="Studio ambiance"
          />
          <div className="services-overlay"></div>
        </div>
        <h2>Our Signature Services</h2>
        <div className="services-grid">
          {/* Bridal Couture Makeovers Card */}
          <div className="service-card">
            <img
              className="service-image1"
              src={require("../images/service-bride.png")}
              alt="Bridal Couture Makeover"
            />
            <div className="service-content">
              <h3>Bridal Couture Makeovers</h3>
              <p>
                Personalized looks that enhance your unique beauty on your
                special day. We blend traditional elements with contemporary
                techniques for unforgettable bridal glamour.
              </p>
            </div>
          </div>
          {/* Glamour & Party Styling Card */}
          <div className="service-card">
            <img
              className="service-image2"
              src={require("../images/service-party.jpg")}
              alt="Glamour & Party Styling"
            />
            <div className="service-content">
              <h3>Glamour &amp; Party Styling</h3>
              <p>
                From classic elegance to avant-garde fashion statements. Make a
                stunning impression at every social gathering with our
                statement-making looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Charu */}
      <section id="meet-charu" className="meet-charu">
        <div className="meet-charu-row">
          {/* Left: Image Panel */}
          <div className="meet-charu-image">
            <img
              src={require("../images/charu-studio-bg.jpeg")}
              alt="Charu Gumber in studio"
            />
          </div>
          {/* Right: Text Card */}
          <div className="meet-charu-text">
          <div className="meet-charu-text-inner">
          <h2>
              Meet Charu: 
              <span class="subheading">Makeup Artist & Mentor</span>
            </h2>
            <p>
              Renowned makeup artist with over a decade of experience in luxury
              weddings and high-fashion events across India. Charu's signature
              style blends technical precision with artistic vision, earning
              trust from celebrities and elite clientele nationwide.
            </p>
            <p>
              As a passionate educator, Charu dedicates herself to nurturing the
              next generation of makeup professionals through her academy, where
              she shares exclusive techniques and industry insights.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="academy" className="academy">
        <div className="academy-bg-container">
          {/* Main background image */}
          <img
            className="academy-bg"
            src={require("../images/academy-bg.jpeg")}
            alt="Academy background"
          />
          <div className="academy-overlay"></div>
        </div>
        <h2>ACADEMY  <br />Elevate Your Craft</h2>
        <div className="academy-card-grid">
          {/* Card 1: Professional Courses */}
          <div className="academy-card">
            <img
              className="academy-card-image"
              src={require("../images/course-card.jpg")}
              alt="Professional Courses"
            />
            <div className="academy-card-content">
              <h3>Professional Courses</h3>
              <p>
                Comprehensive makeup programs covering bridal, fashion, personal
                grooming, and advanced artistry techniques. Learn the secrets
                behind Charu's distinctive style.
              </p>
            </div>
          </div>
          {/* Card 2: Personalized Mentorship */}
          <div className="academy-card">
            <img
              className="academy-card-image"
              src={require("../images/mentorship-card.jpg")}
              alt="Personalized Mentorship"
            />
            <div className="academy-card-content">
              <h3>Personalized Mentorship</h3>
              <p>
                Hands-on training with individualized guidance and industry
                insights. Small batch sizes ensure personal attention and
                maximum skill development.
              </p>
            </div>
          </div>
          {/* Card 3: Elite Certification */}
          <div className="academy-card">
            <img
              className="academy-card-image"
              src={require("../images/certification-card.png")}
              alt="Elite Certification"
            />
            <div className="academy-card-content">
              <h3>Elite Certification</h3>
              <p>
                Graduate with credentials recognized throughout the beauty
                industry. Alumni work with celebrities, luxury brands, and
                establish their own successful ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio-preview">
        <h2><span className="portfolio-text-main">OUR PORTFOLIO <br/></span><span className="portfolio-text-sub">Artistry in Every Stroke</span></h2>
        <p className="portfolio-desc">
          From breathtaking bridal artistry to striking
          celebrity red carpet looks and avant-garde editorial, our
          portfolio showcases the breadth and precision of Charu Gumber's
          artistry.
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-card">
          <img
              src={require("../images/portfolio1.jpg")}
              alt="Portfolio Transformation 2"
            />
          </div>
          <div className="portfolio-card">
          <video
              src={require("../videos/portfolio1.mp4")}
              alt="Portfolio Transformation 1"
              autoPlay
              loop
              muted
              playsInline
            />
            
          </div>
          <div className="portfolio-card">
            <img
              src={require("../images/portfolio3.jpg")}
              alt="Portfolio Transformation 3"
            />
          </div>
          <div className="portfolio-card">
            <img
              src={require("../images/portfolio4.jpg")}
              alt="Portfolio Transformation 4"
            />
          </div>
          <div className="portfolio-card">
            <img
              src={require("../images/portfolio5.jpg")}
              alt="Portfolio Transformation 5"
            />
          </div>
          <div className="portfolio-card">
            <img
              src={require("../images/portfolio6.jpg")}
              alt="Portfolio Transformation 6"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products">
        {/* Header at the top */}
        <h2>Our Premium Product Philosophy</h2>
        {/* Row of two cards: left is image, right is text */}
        <div className="products-row">
          {/* Left Card: Image */}
          <div className="products-card products-image-card">
            <img
              src={require("../images/products-main.jpeg")}
              alt="Luxury makeup products"
            />
          </div>
          {/* Right Card: Text */}
          <div className="products-card products-text-card">
            <p>
              At Charu Gumber Studio, we believe your skin deserves nothing but
              the finest. Our curated collection features{" "}
              <span className="gold">
                premium and skin-friendly products
              </span>{" "}
              suited for Indian skin tones.
              <br />
              <br />
              We partner exclusively with luxury brands for safety and quality,
              with hypoallergenic and bespoke solutions for stunning,
              personalized glamour.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Experience */}
      <section id="studio-exp" className="studio-exp">
        <div className="studio-exp-container">
          {/* Left: Text/Features Side */}
          <div className="studio-exp-content">
            <h2>Exclusive Studio Experience</h2>
            <div className="studio-exp-features">
              <div className="studio-exp-feature">
                <div>
                  <div className="studio-exp-title">Personal Consultation</div>
                  <div className="studio-exp-text">
                    Begin with an in-depth discussion about your desires,
                    preferences, and the occasion to craft your perfect look.
                  </div>
                </div>
              </div>
              <div className="studio-exp-feature">
                
                <div>
                  <div className="studio-exp-title">Bespoke Service</div>
                  <div className="studio-exp-text">
                    Experience attentive, unhurried service with meticulous
                    attention to every detail of your appearance.
                  </div>
                </div>
              </div>
              <div className="studio-exp-feature">
                
                <div>
                  <div className="studio-exp-title">Flexible Scheduling</div>
                  <div className="studio-exp-text">
                    Enjoy convenient appointment options including private
                    sessions, home visits, and group workshops for bridal
                    parties.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Studio Image */}
          <div className="studio-exp-image">
            <img
              src={require("../images/studio-interior.jpg")}
              alt="Luxury Makeup Studio"
            />
          </div>
        </div>
      </section>

      <section id="behind-scenes" className="behind-scenes">
        <h2><span className="behind-text-main">Behind the Scenes<br/></span><span className="behind-text-sub"> The Artistry Unveiled</span></h2>
        <p className="behind-scenes-desc">
          From initial consultation to the final radiant reveal,
          experience the precision, premium products, and luxurious atmosphere
          that defines the Charu Gumber experience.
        </p>
        <div className="bts-grid">
          <img
            src={require("../images/behind1.jpeg")}
            alt="Makeup Artist at Work"
          />
          <img src={require("../images/behind2.jpeg")} alt="Makeup Brushes" />
          <img
            src={require("../images/behind3.jpeg")}
            alt="Studio Preparation"
          />
          <img
            src={require("../images/behind4.jpeg")}
            alt="Transformation Unveiled"
          />
          {/* <img
            src={require("../images/behind5.jpeg")}
            alt="Studio Preparation"
          />
          <img
            src={require("../images/behind6.jpeg")}
            alt="Transformation Unveiled"
          /> */}
        </div>
      </section>

      {/* <section id="book" className="book-section">
        <h2 className="book-heading">Book Your Experience or Enroll Today</h2>
        <div className="book-card-row">
          <div className="card">
            <h3>Makeup Services</h3>
            <p>
              Reserve your transformation for weddings, special events, or
              photoshoots. Special packages available for bridal parties and
              corporate clients.
            </p>
            <button className="btn-primary">
              <a href="#services">View Services</a>
            </button>
          </div>
          <div className="card">
            <h3>Academy Enrollment</h3>
            <p>
              Secure your place in our exclusive professional makeup courses.
              Limited seats available to ensure personalized attention and
              quality training.
            </p>
            <button className="btn-primary">Explore Courses</button>
          </div>
          <div className="card">
            <h3>Contact Us</h3>
            <p>M- 4/32, Mushedpur, DLF Phase 2, Sector 25, Gurugram</p>
            <p>+91 98765 43210</p>
            <p>info@charugumber.com</p>
            <button className="btn-secondary">
              <a
                href="https://www.google.com/maps/place/Charu+Gumber+Makeup+Studio/@28.4889809,77.0814771,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19304749f129:0xf75561a5ef5c95aa!8m2!3d28.4889809!4d77.084052!16s%2Fg%2F11wv7_spfm?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </button>
          </div>
        </div>
      </section> */}
      {/* <section id="legacy" className="legacy-section">
        <div className="legacy-image-container">
          <img
            className="legacy-image"
            src={require("../images/legecy-image.jpg")}
            alt="Legacy Image"
          />
          <div className="legacy-lowerhalf-overlay">
            <div className="legacy-text-inner">
              <h2>Join The Legacy of Beauty &amp; Excellence</h2>
              <p>
                Become part of a community that celebrates artistry, confidence,
                and transformation. At Charu Gumber Studio &amp; Academy, we're
                not just creating looks—we're crafting experiences and careers.
              </p>
              <div className="legacy-cta">
                Your dream look and career start here - where passion meets
                perfection.
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact" className="contact-connect">
        <div className="contact-connect-width">
        <h2 className="contact-heading">
          Connect with us
        </h2>
        <div className="contact-grid">
          {/* Reach Out */}
          <div className="contact-block">
            <h3>Reach Out</h3>
            <p>
              M- 4/32,
              <br />
              DLF Phase 2
              <br />
              Sector 25, Gurugram
            </p>
            <p>
              Phone: <span className="yellow">+91 92206 55547</span>
            </p>
            <p>
              Email: <span className="yellow">charugumbermua@gmail.com</span>
            </p>
          </div>
          {/* Business Hours */}
          <div className="contact-block">
            <h3>Business Hours</h3>
            <ul>
              <li>
                <span className="white-bold">Mon - Sat</span>: 11:00 AM –
                8:00 PM
              </li>
              
              <li>
                <span className="white-bold">Sunday</span>: By Appointment Only
              </li>
            </ul>
            <p className="small">Flexible scheduling available upon request.</p>
          </div>
          {/* Quick Links */}
          <div className="contact-block">
            <h3>Quick Links</h3>
            <ul>
              <li className="yellow-link"><a href="#services">Our Services</a></li>
              <li className="yellow-link"><a href="#academy">The Academy</a></li>
              <li className="yellow-link"><a href="#portfolio">Portfolio</a></li>
              <li className="yellow-link"><a href="#about">About Charu Gumber</a></li>
              <li className="yellow-link"><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="contact-block">
            <h3>Follow Us</h3>
            <p>
              Stay updated with our latest looks, courses, and behind-the-scenes
              content.
            </p>
            <div className="contact-btn">
              <button className="btn-instagram">
                <a
                  href="https://www.instagram.com/charugumbermakeupartist/?igsh=MTgzZjdkZ2NxcDZxYw%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </button>
              <button className="btn-google">
                <a
                  href="https://share.google/XR5nLQFWHQmqX3GdE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-divider"></div>
          <footer className="footer-bar">
            <p>&copy; 2025 Charu Gumber Studio &amp; Academy.<br /> <span>All rights reserved.</span></p>
          </footer>
      </section>
    </div>
  );
}
