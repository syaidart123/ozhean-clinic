"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Clock,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Star,
  ArrowUpRight,
  Menu,
  X,
  MoveRight,
} from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/images/ultherapy.png",
    alt: "Ultherapy Prime",
    label: "Ultherapy Prime",
    tag: "Lifting & Tightening",
    href: "https://ozhean.com.my/treatments/face-contouring/lifting-and-tightening/future-of-skin-lifting-ultherapy-prime/",
  },
  {
    src: "/images/hifu.png",
    alt: "V-HIFU",
    label: "Korean V-HIFU",
    tag: "Face Contouring",
    href: "https://ozhean.com.my/treatments/face-contouring/lifting-and-tightening/10therma/",
  },
  {
    src: "/images/anti-aging.png",
    alt: "Aesthetic Excellence",
    label: "Aesthetic Excellence",
    tag: "Anti-Aging",
    href: "#",
  },
  {
    src: "/images/korean-standard.png",
    alt: "Korean Standard",
    label: "Korean Standard",
    tag: "Skin Refinement",
    href: "#",
  },
  {
    src: "/images/timeless-beauty.png",
    alt: "Timeless Beauty",
    label: "Timeless Beauty",
    tag: "Signature Treatments",
    href: "#",
  },
];

const POPULAR_SERVICES = [
  {
    href: "https://ozhean.com.my/treatments/#face-contouring",
    img: "/images/face-contouring.png",
    title: "Face Contouring",
    desc: "Photo ready from any and every angle",
    index: "01",
  },
  {
    href: "https://ozhean.com.my/treatments/#body",
    img: "/images/body.png",
    title: "Body",
    desc: "Be confident in your healthy, toned body",
    index: "02",
  },
  {
    href: "https://ozhean.com.my/treatments/#hair",
    img: "/images/hair.png",
    title: "Hair",
    desc: "Regain your crown that stays on",
    index: "03",
  },
  {
    href: "https://ozhean.com.my/treatments/#wellness",
    img: "/images/wellness.png",
    title: "Wellness",
    desc: "Holistic care for a radiant you",
    index: "04",
  },
];

const TESTIMONIALS = [
  {
    text: "My cheek sagging has worsened these recent years. After getting treatments here, people around me told me that I look much younger and more refreshing than before. Like what doctor said, act early before it's too late!",
    name: "Delia C.",
    age: "Age 52",
    title: "House wife, Bukit Tunku",
  },
  {
    text: "I have been suffering from Alopecia for the past 1 year. I was looking for so many ways to recover, went to a few Doctors, but nothing really recovered. The treatment was professional, relaxing, and painless. Most importantly it was really comforting to know that this treatment will let my hair grow back to normal!",
    name: "Adrian J.",
    age: "Age 35",
    title: "Senior Project Executive, Damansara",
  },
  {
    text: "I always wanted to lose my flabby arms and thick thigh for a long time. At first I was a little doubtful with the treatment because it was painless, but I love the results because even my friends and family were telling me that I lost weight! I would recommend Ozhean A.M to others.",
    name: "Sherry A.",
    age: "Age 37",
    title: "PR Manager, Mont Kiara",
  },
  {
    text: "I was shocked by the result, because the pores on my face getting smaller, less oily and acne breakout reduced significantly after just one session. The doctors here are knowledgeable and attentive. Highly recommended!",
    name: "Rachel T.",
    age: "Age 29",
    title: "Marketing Executive, Bangsar",
  },
  {
    text: "Excellent service and professionalism. The staff made me feel comfortable throughout the entire process. The results speak for themselves — I look and feel years younger.",
    name: "Patricia L.",
    age: "Age 45",
    title: "Business Owner, TTDI",
  },
];

const BLOG_POSTS = [
  {
    href: "https://ozhean.com.my/pigmentation-frequently-asked-question-faq/",
    img: "/images/blog-pigmentation.png",
    category: "Pigmentation",
    title: "Frequently Asked Questions (FAQ)",
  },
  {
    href: "https://ozhean.com.my/hifu-non-invasive-treatment-trend-in-korea/",
    img: "/images/blog-hifu.png",
    category: "HIFU",
    title: "Why is HIFU Trending in Korea?",
  },
];

const PARTNER_LOGOS = [
  "/images/doctors/doctor-l1.png",
  "/images/doctors/doctor-l2.png",
  "/images/doctors/doctor-l3.png",
  "/images/doctors/doctor-w1.png",
  "/images/doctors/doctor-w2.png",
  "/images/doctors/doctor-w3.png",
];

const NAV_ITEMS = [
  { label: "Home", href: "https://ozhean.com.my/" },
  { label: "About", href: "https://ozhean.com.my/about/" },
  { label: "Doctors", href: "https://ozhean.com.my/doctors/" },
  { label: "Treatments", href: "https://ozhean.com.my/treatments/" },
  { label: "Contact", href: "https://ozhean.com.my/contact/" },
  { label: "Outlets", href: "https://ozhean.com.my/outlets/" },
  { label: "Blog", href: "https://ozhean.com.my/blog/" },
];

function useCarousel(length: number, interval = 5000) {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reset = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setCurrent((c) => (c + 1) % length),
      interval,
    );
  }, [length, interval]);
  useEffect(() => {
    reset();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reset]);
  const prev = () => {
    setCurrent((c) => (c - 1 + length) % length);
    reset();
  };
  const next = () => {
    setCurrent((c) => (c + 1) % length);
    reset();
  };
  const goTo = (i: number) => {
    setCurrent(i);
    reset();
  };
  return { current, prev, next, goTo };
}

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a
          href="tel:60126688034"
          style={{ display: "flex", alignItems: "center", gap: 7 }}
        >
          <Phone size={10} style={{ color: "var(--gold)" }} />
          Call / WhatsApp : +6012 6688 034
        </a>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <Clock size={10} style={{ color: "var(--sage)" }} />
          Mon–Sat &nbsp;10 am – 7 pm
        </span>
      </div>
      <div className="topbar-right">
        {[
          { Icon: Facebook, href: "https://www.facebook.com/ozheanclinic.kl/" },
          {
            Icon: Instagram,
            href: "https://www.instagram.com/ozheanclinic.kl/",
          },
          {
            Icon: Youtube,
            href: "https://www.youtube.com/channel/UC2sPghdbo-idrR4YqF4WQ1A",
          },
        ].map(({ Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer">
            <Icon size={13} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="https://ozhean.com.my/">
          <img
            src="https://ozhean.com.my/wp-content/uploads/Ozhean-logo-Grey.png"
            alt="Ozhean"
            className="navbar-logo"
          />
        </a>
        <ul className="navbar-links">
          {NAV_ITEMS.map((n) => (
            <li key={n.label}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
        <a href="https://ozhean.com.my/contact/" className="navbar-cta">
          Book Now
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div className="mobile-menu" style={{ maxHeight: open ? 420 : 0 }}>
        <ul>
          {NAV_ITEMS.map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://ozhean.com.my/contact/"
              className="mobile-cta"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HeroCarousel() {
  const { current, prev, next, goTo } = useCarousel(HERO_SLIDES.length);
  const [kbKey, setKbKey] = useState(0);
  const doPrev = () => {
    prev();
    setKbKey((k) => k + 1);
  };
  const doNext = () => {
    next();
    setKbKey((k) => k + 1);
  };
  return (
    <section className="hero">
      <div className="hero-slides">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? " active" : ""}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              className={i === current ? "kb" : ""}
              key={i === current ? `kb-${kbKey}` : i}
            />
            <div className="hero-grad-side" />
            <div className="hero-grad-bottom" />
          </div>
        ))}
        <div className="hero-content">
          <div key={current} className="fu">
            <p className="hero-tag">— {HERO_SLIDES[current].tag}</p>
            <h1 className="hero-title font-display">
              {HERO_SLIDES[current].label}
            </h1>
            <div className="hero-line" />
            <a href={HERO_SLIDES[current].href} className="hero-cta fu fu-d1">
              Explore Treatment <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-dots">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? " active" : ""}`}
                  style={{ width: i === current ? 26 : 10 }}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="hero-counter">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <button
          className="hero-arrow hero-arrow-prev"
          onClick={doPrev}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="hero-arrow hero-arrow-next"
          onClick={doNext}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      {/* Thumbnail strip */}
      <div className="hero-thumbs">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={i}
            className={`hero-thumb${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={s.tag}
          >
            <img
              src={s.src}
              alt={s.alt}
              style={{ opacity: i === current ? 0.85 : 0.3 }}
            />
            <div className="hero-thumb-border" />
            <span
              className="hero-thumb-label"
              style={{
                color: i === current ? "var(--gold)" : "rgba(255,255,255,0.35)",
              }}
            >
              {s.tag}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Face Contouring",
    "Skin Rejuvenation",
    "Body Sculpting",
    "Hair Regrowth",
    "Anti-Aging",
    "Wellness",
    "Korean Aesthetic",
    "Ultherapy Prime",
    "HIFU Treatment",
    "Pigmentation",
  ];
  const all = [...items, ...items];
  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {all.map((t, i) => (
          <span key={i} className="ticker-item">
            {t} &nbsp;✦
          </span>
        ))}
      </div>
    </div>
  );
}

function PopularServices() {
  const { current, prev, next, goTo } = useCarousel(
    POPULAR_SERVICES.length,
    4000,
  );
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div>
            <p className="section-label">What We Offer</p>
            <h2 className="services-title font-display">Popular Services</h2>
          </div>
          <a
            href="https://ozhean.com.my/treatments/"
            className="services-viewall"
          >
            View All <MoveRight size={13} />
          </a>
        </div>

        {/* Desktop / Tablet grid */}
        <div className="services-grid">
          {POPULAR_SERVICES.map((s, i) => (
            <a key={i} href={s.href} className="svc-card">
              <img src={s.img} alt={s.title} />
              <div className="svc-overlay" />
              <span className="svc-index font-display">{s.index}</span>
              <div className="svc-content">
                <h3 className="svc-title font-display">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-link">
                  Discover <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="services-carousel">
          <div className="svc-mobile-track-wrap">
            <div
              className="svc-mobile-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {POPULAR_SERVICES.map((s, i) => (
                <div key={i} className="svc-mobile-slide">
                  <a href={s.href}>
                    <img src={s.img} alt={s.title} />
                    <div className="svc-mobile-overlay" />
                    <div className="svc-mobile-content">
                      <p
                        style={{
                          color: "var(--gold)",
                          fontFamily: "'Playfair Display',serif",
                          fontSize: 30,
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        {s.index}
                      </p>
                      <h3
                        className="svc-title font-display"
                        style={{ marginTop: 4 }}
                      >
                        {s.title}
                      </h3>
                      <p className="svc-desc" style={{ opacity: 1 }}>
                        {s.desc}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev}>
              <ChevronLeft size={15} />
            </button>
            <div className="carousel-dots">
              {POPULAR_SERVICES.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? " active" : ""}`}
                  style={{ width: i === current ? 20 : 8 }}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next}>
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-accent" />
      <div className="about-grid">
        <div className="about-img-pane">
          <img
            src="/images/interior.png"
            className="bg-center bg-cover"
            alt="Ozhean Clinic Bangsar"
          />
          <div className="about-badge">
            <p className="about-badge-year font-display">2015</p>
            <p className="about-badge-label">Founded in Seoul</p>
          </div>
        </div>
        <div className="about-text-pane">
          <p className="section-label">Our Story</p>
          <h2 className="about-heading font-display">
            Ozhean, The Finest Aesthetic Clinic in Bangsar, KL.
          </h2>
          <div className="about-rule" />
          <div className="about-body">
            <p>
              Crafted with the enlightened wisdom of Dr. Park Ji Youn, a Korean
              Board Certified dermatologist and the founder of Ozhean Skin and
              Plastic Surgery clinics in Seoul back in 2015.
            </p>
            <p>
              We have brought our trademarked FIT program created by a team of
              experienced Korean aesthetic doctors to serve Malaysians who hoped
              to achieve the look they longed for. Furnished with
              top-of-the-line facilities, we offer an extensive range of
              treatments in Malaysia, such as{" "}
              <a href="https://ozhean.com.my/treatments/skin/pigmentation/">
                treatment for pigmentation,
              </a>{" "}
              <a href="https://ozhean.com.my/treatments/body/body-contouring/">
                fat freezing treatments,
              </a>{" "}
              <a href="https://ozhean.com.my/treatments/hair/fue-hair-transplant/">
                FUE hair transplants
              </a>{" "}
              and other services aimed at becoming the most reliable choice
              aesthetic clinic in KL.
            </p>
            <p style={{ fontWeight: 500, color: "var(--obsidian)" }}>
              How Our Aesthetic Clinic in Bangsar Can Help You
            </p>
            <p>
              In addition to our exceptional services, Ozhean is an aesthetic
              clinic in Kuala Lumpur known for our personalized approach to
              patient care. Our doctors devote time to understanding each
              patient's unique needs and preferences before recommending a
              treatment plan through comprehensive consultations to educate
              patients on the different options available.
            </p>
            <p>
              Ozhean's commitment to excellence is reflected in the constant
              drive to stay at the top among the rest of the aesthetic clinics
              in Bangsar, Bukit Jalil and throughout KL. We remain current and
              well-versed with the latest industry advancements and techniques —
              without compromising safety protocols — ensuring we provide the
              most innovative treatments possible.
            </p>
          </div>
          <a
            href="https://ozhean.com/"
            target="_blank"
            rel="noreferrer"
            className="about-btn"
          >
            Visit Ozhean Korea <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="partners-section">
      <p className="partners-label">
        OZHEAN Skin and Plastic Surgery Clinics Doctors
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        {PARTNER_LOGOS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Partner ${i + 1}`}
            className="bg-cover rounded-full w-24 h-24"
          />
        ))}
      </div>
    </section>
  );
}

function TrustedSection() {
  return (
    <section className="trusted-section">
      <div className="trusted-deco font-display" aria-hidden>
        O
      </div>
      <div className="trusted-inner">
        <p className="section-label" style={{ textAlign: "center" }}>
          Excellence in Aesthetics
        </p>
        <h2 className="trusted-heading font-display">
          Your Trusted Aesthetic Clinic
          <br />
          <em>in Kuala Lumpur</em>
        </h2>
        <div className="divider-gold" style={{ justifyContent: "center" }}>
          <span />
          <span />
          <span />
        </div>
        <h3 className="trusted-sub font-display">
          Top-Notch Pigmentation Treatment in Malaysia
        </h3>
        <p className="trusted-body">
          One of the most in-demand aesthetic services in Malaysia is
          pigmentation treatment, in which we utilize only dynamic technological
          advancements to address skin pigmentation issues effectively. This
          pigmentation treatment in Malaysia is a now-famous cosmetic procedure
          that aims to refine the appearance of uneven skin tone and
          pigmentation.
        </p>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { current, prev, next, goTo } = useCarousel(TESTIMONIALS.length, 7000);

  return (
    <section className="reviews-section">
      {/* Deco circles */}
      <div
        className="reviews-deco-circle"
        style={{
          top: -50,
          right: -50,
          width: 380,
          height: 380,
          border: "1px solid rgba(201,169,110,0.07)",
        }}
      />
      <div
        className="reviews-deco-circle"
        style={{
          top: 30,
          right: 20,
          width: 250,
          height: 250,
          border: "1px solid rgba(143,166,138,0.05)",
        }}
      />

      <div className="container">
        {/* Desktop */}
        <div className="reviews-grid reviews-desktop">
          {/* Left nav */}
          <div className="reviews-nav">
            <p className="section-label">Client Stories</p>
            <h2 className="reviews-nav-title font-display">Reviews</h2>
            <div className="reviews-rule" />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  className={`reviews-nav-btn${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <p className="reviews-nav-name">{t.name}</p>
                  <p className="reviews-nav-role">{t.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right quote */}
          <div style={{ position: "relative", minHeight: 300 }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === current ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "none" : "translateY(14px)",
                  transition: "opacity 0.65s ease, transform 0.65s ease",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <div className="reviews-quote-mark font-display">"</div>
                <p className="reviews-text">"{t.text}"</p>
                <div style={{ marginTop: 28 }}>
                  <div className="reviews-stars">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        fill="var(--gold)"
                        style={{ color: "var(--gold)" }}
                      />
                    ))}
                  </div>
                  <p className="reviews-name">{t.name}</p>
                  <p className="reviews-role">
                    {t.age} · {t.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="reviews-controls">
              <button className="reviews-arrow" onClick={prev}>
                <ChevronLeft size={15} />
              </button>
              <button className="reviews-arrow" onClick={next}>
                <ChevronRight size={15} />
              </button>
              <span className="reviews-counter">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile swiper */}
        <div className="reviews-mobile">
          <p className="section-label" style={{ textAlign: "center" }}>
            Client Stories
          </p>
          <h2
            className="reviews-nav-title font-display"
            style={{
              color: "var(--white)",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Reviews
          </h2>
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ minWidth: "100%", padding: "0 4px" }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderTop: "2px solid var(--gold)",
                      padding: "28px 24px",
                    }}
                  >
                    <div
                      className="reviews-quote-mark font-display"
                      style={{ fontSize: 56 }}
                    >
                      "
                    </div>
                    <p className="reviews-text" style={{ fontSize: "0.95rem" }}>
                      "{t.text}"
                    </p>
                    <div style={{ marginTop: 20 }}>
                      <div className="reviews-stars">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={11}
                            fill="var(--gold)"
                            style={{ color: "var(--gold)" }}
                          />
                        ))}
                      </div>
                      <p className="reviews-name">{t.name}</p>
                      <p className="reviews-role">
                        {t.age} · {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls" style={{ marginTop: 20 }}>
            <button className="carousel-btn" onClick={prev}>
              <ChevronLeft size={14} />
            </button>
            <div className="carousel-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? " active" : ""}`}
                  style={{ width: i === current ? 20 : 8 }}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next}>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <div>
            <p className="section-label">From the Journal</p>
            <h2 className="blog-title font-display">Blog</h2>
          </div>
          <a href="https://ozhean.com.my/blog/" className="blog-viewall">
            View All Blogs <MoveRight size={13} />
          </a>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.map((p, i) => (
            <a key={i} href={p.href} className="blog-card">
              <div
                className="blog-img-wrap"
                style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
              >
                <img src={p.img} alt={p.title} />
                <div className="blog-img-overlay" />
                <span className="blog-badge">{p.category}</span>
              </div>
              <div className="blog-body">
                <h3 className="blog-post-title font-display">{p.title}</h3>
                <div className="blog-read">
                  Read Article <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="blog-cta-mobile">
          <a
            href="https://ozhean.com.my/blog/"
            style={{
              color: "var(--obsidian)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            View All Blogs →
          </a>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="booking-section">
      <div className="booking-grid">
        <div className="booking-img-pane">
          <img
            src="/images/timeless-beauty.png"
            alt="Book a treatment at Ozhean"
            className="bg-center bg-cover"
          />
          <div className="booking-img-overlay" />
          <div className="booking-img-text">
            <p className="booking-img-tag">Ready to begin?</p>
            <h2 className="booking-img-headline font-display">
              Your journey to radiant skin starts here.
            </h2>
          </div>
        </div>
        <div className="booking-form-pane">
          <p className="booking-form-label">Consultation Request</p>
          <h3 className="booking-form-title font-display">
            Book your treatment
            <br />
            with us now
          </h3>
          <form className="booking-form" name="Booking Form" method="post">
            <input
              className="booking-input"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              className="booking-input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
            <input
              className="booking-input"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="booking-input"
              name="message"
              rows={3}
              placeholder="Message (optional)"
              style={{ resize: "none" }}
            />
            <button type="submit" className="booking-submit">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const WA_ICON = (
    <svg
      viewBox="0 0 448 512"
      width={10}
      height={10}
      style={{ fill: "currentColor" }}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
    </svg>
  );
  return (
    <footer className="footer">
      <div className="footer-accent" />
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <img
            src="https://ozhean.com.my/wp-content/uploads/Ozhean-logo-Grey.png"
            alt="Ozhean Clinic"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Genuine Aesthetic Standard from
            <br />
            Gangnam.
          </p>
          <div className="footer-socials">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/ozheanclinic.kl/",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/ozheanclinic.kl/",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/channel/UC2sPghdbo-idrR4YqF4WQ1A",
              },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
          <img
            src="https://ozhean.com.my/wp-content/uploads/review.png"
            alt="Google Reviews"
            className="footer-review"
          />
        </div>
        {/* Treatments */}
        <div>
          <h4 className="footer-col-title">Treatments</h4>
          <ul className="footer-links">
            {[
              [
                "Pigmentation",
                "https://ozhean.com.my/treatments/skin/pigmentation/",
              ],
              [
                "Hair Regrowth",
                "https://ozhean.com.my/treatments/hair/hair-regrowth/",
              ],
              [
                "Lifting and Tightening",
                "https://ozhean.com.my/treatments/face-contouring/lifting-and-tightening/",
              ],
              [
                "Body Contouring",
                "https://ozhean.com.my/treatments/body/body-contouring/",
              ],
              [
                "Weight Loss",
                "https://ozhean.com.my/treatments/body/weight-loss/",
              ],
              ["Acne", "https://ozhean.com.my/treatments/skin/acne/"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact">
            <li className="footer-contact-item">
              <Phone
                size={12}
                style={{ color: "var(--sage)", marginTop: 2, flexShrink: 0 }}
              />
              <div>
                <a href="tel:+60126688034">012-6688034</a>
                <a href="tel:+60126663291">012-6663291</a>
              </div>
            </li>
            <li className="footer-contact-item">
              <Mail
                size={12}
                style={{ color: "var(--sage)", marginTop: 2, flexShrink: 0 }}
              />
              <a
                href="mailto:appointment@ozhean.com.my"
                style={{ wordBreak: "break-all" }}
              >
                appointment@ozhean.com.my
              </a>
            </li>
            <li className="footer-contact-item">
              <MapPin
                size={12}
                style={{ color: "var(--sage)", marginTop: 2, flexShrink: 0 }}
              />
              <div>
                <p className="footer-location-label">Bangsar</p>
                <a
                  href="https://goo.gl/maps/6p5tnjoJwTuhGxmUA"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-location-addr"
                >
                  156, Jalan Maarof, Bangsar, 59000 Kuala Lumpur.
                </a>
                <p className="footer-location-label" style={{ marginTop: 10 }}>
                  Bukit Jalil
                </p>
                <a
                  href="https://goo.gl/maps/xipWiMgGZgqhWbmDA"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-location-addr"
                >
                  GF, 1-37, Residensi Park Bukit Jalil, 57000 Bukit Jalil, Kuala
                  Lumpur.
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <div className="footer-bar-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Ozhean Clinic. All rights reserved.
          </p>
          <div className="footer-wa-btns">
            <a
              href="https://bit.ly/OzheanCS1"
              target="_blank"
              rel="noreferrer"
              className="footer-wa-btn"
            >
              {WA_ICON} WhatsApp
            </a>
            <a
              href="https://bit.ly/OzheanCS2"
              target="_blank"
              rel="noreferrer"
              className="footer-wa-btn"
            >
              {WA_ICON} WhatsApp (中文)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://bit.ly/2qCyTm5"
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="WhatsApp"
    >
      <svg
        viewBox="0 0 448 512"
        width={21}
        height={21}
        style={{ fill: "white" }}
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
      </svg>
    </a>
  );
}

export default function OzheanPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroCarousel />
      <Ticker />
      <PopularServices />
      <AboutSection />
      <PartnersSection />
      <TrustedSection />
      <ReviewsSection />
      <BlogSection />
      <BookingSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
