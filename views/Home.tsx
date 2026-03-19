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

/* DATA */
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
    <div className="bg-[#4B3A33] flex items-center justify-between px-8 h-[38px] text-[10.5px] tracking-[0.1em] font-light text-[#AC9990]">
      <div className="flex items-center gap-6">
        <a
          href="tel:60126688034"
          className="flex items-center gap-[7px] no-underline text-[#AC9990] hover:text-[#F3EFEE] transition-colors duration-200"
        >
          <Phone size={10} className="text-[#AB8068]" />
          Call / WhatsApp : +6012 6688 034
        </a>
        <span className="flex items-center gap-[7px]">
          <Clock size={10} className="text-[#AC9990]" />
          Mon-Sat 10 am - 7 pm
        </span>
      </div>
      <div className="flex items-center gap-3">
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
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[#AC9990] hover:text-[#F3EFEE] transition-colors duration-200"
          >
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
    <header
      className={`sticky top-0 z-50 bg-[#FAF8F7]/95 backdrop-blur-md border-b border-[#AC9990]/20 transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_24px_rgba(75,58,51,0.10)]" : ""}`}
    >
      <div className="flex items-center justify-between h-[68px] max-w-[1240px] mx-auto px-7">
        <a href="https://ozhean.com.my/">
          <img
            src="https://ozhean.com.my/wp-content/uploads/Ozhean-logo-Grey.png"
            alt="Ozhean"
            className="h-9"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {NAV_ITEMS.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="text-[11px] font-medium tracking-[0.13em] uppercase text-[#4B3A33] no-underline px-3 py-1.5 rounded-full hover:bg-[#F3EFEE] hover:text-[#8C4F58] transition-all duration-200"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://ozhean.com.my/contact/"
          className="hidden lg:inline-flex items-center bg-[#8C4F58] text-[#FAF8F7] text-[11px] tracking-[0.14em] uppercase font-medium px-5 py-2.5 rounded-full no-underline shadow-[0_4px_16px_rgba(140,79,88,0.22)] hover:bg-[#7a4450] hover:-translate-y-px transition-all duration-200"
        >
          Book Now
        </a>
        <button
          className="lg:hidden flex items-center justify-center text-[#4B3A33] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-[380ms] ease-[cubic-bezier(.22,1,.36,1)] bg-[#FAF8F7] border-t border-[#AC9990]/15"
        style={{ maxHeight: open ? 420 : 0 }}
      >
        <ul className="list-none p-0 px-6 pt-3 pb-5 flex flex-col m-0">
          {NAV_ITEMS.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[13px] tracking-[0.1em] uppercase text-[#4B3A33] no-underline border-b border-[#AC9990]/15 hover:text-[#8C4F58] transition-colors duration-200"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="https://ozhean.com.my/contact/"
              onClick={() => setOpen(false)}
              className="inline-block bg-[#8C4F58] text-[#FAF8F7] text-[12px] tracking-widest uppercase font-medium px-6 py-2.5 rounded-full no-underline"
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
    <section
      className="relative overflow-hidden bg-[#4B3A33]"
      style={{ height: "calc(100vh - 106px)", minHeight: 560, maxHeight: 860 }}
    >
      <div className="relative w-full h-full">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              className={`w-full h-full object-cover object-center brightness-[0.62] ${i === current ? "anim-kb" : ""}`}
              key={i === current ? `kb-${kbKey}` : i}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(75,58,51,0.82)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(75,58,51,0.60)] via-transparent to-transparent" />
          </div>
        ))}
        <div className="absolute bottom-[90px] left-0 right-0 px-14 flex flex-col gap-6 max-sm:px-6 max-sm:bottom-[70px]">
          <div key={current} className="anim-fu flex flex-col gap-3">
            <p className="m-0 text-[11px] tracking-[0.24em] uppercase text-[#AB8068] font-light">
              - {HERO_SLIDES[current].tag}
            </p>
            <h1
              className="font-display m-0 text-[#FAF8F7] font-light italic leading-[1.08]"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              {HERO_SLIDES[current].label}
            </h1>
            <div className="w-12 h-px bg-[#AB8068]" />
            <a
              href={HERO_SLIDES[current].href}
              className="anim-fu anim-d1 inline-flex items-center gap-2 border border-[#AC9990]/45 text-[#FAF8F7] text-[11px] tracking-[0.16em] uppercase no-underline px-5 py-2.5 rounded-full w-fit hover:bg-[rgba(172,153,144,0.15)] hover:border-[#AC9990] transition-all duration-200"
            >
              Explore Treatment <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[3px] border-none cursor-pointer rounded-sm p-0 transition-all duration-300 ${i === current ? "bg-[#AB8068]" : "bg-white/25"}`}
                  style={{ width: i === current ? 26 : 10 }}
                />
              ))}
            </div>
            <span className="text-[10px] tracking-[0.18em] text-white/38">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <button
          onClick={doPrev}
          aria-label="Previous"
          className="absolute top-1/2 -translate-y-1/2 left-5 max-sm:hidden w-10 h-10 rounded-full border border-[#AC9990]/30 bg-[rgba(75,58,51,0.40)] text-[#FAF8F7] flex items-center justify-center backdrop-blur-sm hover:bg-[rgba(172,153,144,0.18)] transition-all duration-200 z-10 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={doNext}
          aria-label="Next"
          className="absolute top-1/2 -translate-y-1/2 right-5 max-sm:hidden w-10 h-10 rounded-full border border-[#AC9990]/30 bg-[rgba(75,58,51,0.40)] text-[#FAF8F7] flex items-center justify-center backdrop-blur-sm hover:bg-[rgba(172,153,144,0.18)] transition-all duration-200 z-10 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="absolute bottom-0 right-0 flex max-lg:hidden">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={s.tag}
            className="relative w-[100px] h-[80px] border-none p-0 cursor-pointer overflow-hidden flex-shrink-0 bg-transparent"
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-full object-cover"
              style={{ opacity: i === current ? 0.85 : 0.28 }}
            />
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${i === current ? "bg-[#AB8068]" : "bg-transparent"}`}
            />
            <span
              className="absolute bottom-1.5 left-0 right-0 text-center text-[8px] tracking-[0.12em] uppercase"
              style={{
                color: i === current ? "#AB8068" : "rgba(255,255,255,0.30)",
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
    <div className="bg-[#8C4F58] overflow-hidden h-9 flex items-center">
      <div className="flex whitespace-nowrap anim-ticker">
        {all.map((t, i) => (
          <span
            key={i}
            className="text-[10.5px] tracking-[0.22em] uppercase text-[#FAF8F7]/78 px-7 font-light"
          >
            {t} {String.fromCharCode(10022)}
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
    <section className="py-24 bg-[#FAF8F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-11">
          <div>
            <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium">
              What We Offer
            </p>
            <h2
              className="font-display m-0 font-light text-[#4B3A33] italic"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Popular Services
            </h2>
          </div>
          <a
            href="https://ozhean.com.my/treatments/"
            className="hidden md:flex items-center gap-1.5 text-[10.5px] tracking-[0.2em] uppercase text-[#8C4F58] no-underline font-medium hover:gap-3 transition-all duration-200"
          >
            View All <MoveRight size={13} />
          </a>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-4">
          {POPULAR_SERVICES.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="group relative rounded-2xl overflow-hidden block no-underline shadow-[0_8px_32px_rgba(75,58,51,0.10)]"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(75,58,51,0.78)] via-[rgba(75,58,51,0.10)] to-transparent group-hover:from-[rgba(75,58,51,0.88)] transition-all duration-500" />
              <span className="absolute top-4 right-5 font-display text-[36px] font-light text-white/12 italic">
                {s.index}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-normal text-[#FAF8F7] italic mb-1.5 m-0">
                  {s.title}
                </h3>
                <p className="text-[11px] text-white/58 tracking-wider mb-3 m-0">
                  {s.desc}
                </p>
                <div className="flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-[#AB8068] font-medium opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Discover <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {POPULAR_SERVICES.map((s, i) => (
                <div
                  key={i}
                  className="min-w-full relative"
                  style={{ aspectRatio: "3/4" }}
                >
                  <a href={s.href} className="block w-full h-full no-underline">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(75,58,51,0.80)] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p className="font-display text-[30px] font-light text-[#AB8068] italic leading-none m-0">
                        {s.index}
                      </p>
                      <h3 className="font-display text-xl font-normal text-[#FAF8F7] italic mt-1 m-0">
                        {s.title}
                      </h3>
                      <p className="text-[11px] text-white/58 mt-1 m-0">
                        {s.desc}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3.5 mt-4">
            <button
              onClick={prev}
              className="w-[34px] h-[34px] rounded-full border border-[#AC9990]/30 bg-white text-[#8C4F58] flex items-center justify-center hover:bg-[#F3EFEE] transition-all cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <div className="flex items-center gap-1.5">
              {POPULAR_SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-[3px] border-none cursor-pointer rounded-sm p-0 transition-all duration-300 ${i === current ? "bg-[#8C4F58]" : "bg-[#AC9990]/28"}`}
                  style={{ width: i === current ? 20 : 8 }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-[34px] h-[34px] rounded-full border border-[#AC9990]/30 bg-white text-[#8C4F58] flex items-center justify-center hover:bg-[#F3EFEE] transition-all cursor-pointer"
            >
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
    <section className="relative bg-[#F3EFEE] overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#AC9990]/8 pointer-events-none" />
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: 600 }}
      >
        <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
          <img
            src="/images/interior.png"
            alt="Ozhean Clinic Bangsar"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-8 right-7 bg-[rgba(255,255,255,0.70)] backdrop-blur-md border border-[#AC9990]/28 px-5 py-3.5 rounded-2xl text-center shadow-[0_4px_24px_rgba(75,58,51,0.10)]">
            <p className="font-display text-[2.2rem] font-light text-[#8C4F58] italic leading-none m-0">
              2015
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#AC9990] mt-1 m-0">
              Founded in Seoul
            </p>
          </div>
        </div>
        <div className="px-16 py-[72px] flex flex-col justify-center max-lg:px-8 max-lg:py-12">
          <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium">
            Our Story
          </p>
          <h2
            className="font-display m-0 font-light text-[#4B3A33] italic leading-[1.2] mb-5"
            style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}
          >
            Ozhean, The Finest Aesthetic Clinic in Bangsar, KL.
          </h2>
          <div className="w-12 h-px bg-[#AB8068] mb-6" />
          <div className="flex flex-col gap-4 mb-8 text-[13.5px] text-[#AC9990] leading-[1.82] font-light">
            <p className="m-0">
              Crafted with the enlightened wisdom of Dr. Park Ji Youn, a Korean
              Board Certified dermatologist and the founder of Ozhean Skin and
              Plastic Surgery clinics in Seoul back in 2015.
            </p>
            <p className="m-0">
              We have brought our trademarked FIT program created by a team of
              experienced Korean aesthetic doctors to serve Malaysians who hoped
              to achieve the look they longed for. Furnished with
              top-of-the-line facilities, we offer an extensive range of
              treatments in Malaysia, such as{" "}
              <a
                href="https://ozhean.com.my/treatments/skin/pigmentation/"
                className="text-[#8C4F58] underline underline-offset-2 hover:text-[#4B3A33] transition-colors"
              >
                treatment for pigmentation,
              </a>{" "}
              <a
                href="https://ozhean.com.my/treatments/body/body-contouring/"
                className="text-[#8C4F58] underline underline-offset-2 hover:text-[#4B3A33] transition-colors"
              >
                fat freezing treatments,
              </a>{" "}
              <a
                href="https://ozhean.com.my/treatments/hair/fue-hair-transplant/"
                className="text-[#8C4F58] underline underline-offset-2 hover:text-[#4B3A33] transition-colors"
              >
                FUE hair transplants
              </a>{" "}
              and other services aimed at becoming the most reliable choice
              aesthetic clinic in KL.
            </p>
            <p className="m-0 font-medium text-[#4B3A33]">
              How Our Aesthetic Clinic in Bangsar Can Help You
            </p>
            <p className="m-0">
              In addition to our exceptional services, Ozhean is an aesthetic
              clinic in Kuala Lumpur known for our personalized approach to
              patient care. Our doctors devote time to understanding each
              patient's unique needs and preferences before recommending a
              treatment plan through comprehensive consultations to educate
              patients on the different options available.
            </p>
            <p className="m-0">
              Ozhean's commitment to excellence is reflected in the constant
              drive to stay at the top among the rest of the aesthetic clinics
              in Bangsar, Bukit Jalil and throughout KL. We remain current and
              well-versed with the latest industry advancements and techniques
              without compromising safety protocols ensuring we provide the most
              innovative treatments possible.
            </p>
          </div>
          <a
            href="https://ozhean.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#AB8068]/45 text-[#8C4F58] px-6 py-2.5 rounded-full text-[11px] tracking-[0.16em] uppercase no-underline font-medium w-fit hover:bg-[#F3EFEE] hover:border-[#8C4F58] transition-all duration-200"
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
    <section className="py-14 px-6 text-center bg-[#FAF8F7] border-t border-b border-[#AC9990]/15">
      <p className="m-0 text-[10px] tracking-[0.28em] uppercase text-[#AB8068] font-medium mb-7">
        OZHEAN Skin and Plastic Surgery Clinics Doctors
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        {PARTNER_LOGOS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Partner ${i + 1}`}
            className="w-24 h-24 rounded-full object-cover ring-2 ring-[#AC9990]/18"
          />
        ))}
      </div>
    </section>
  );
}

function TrustedSection() {
  return (
    <section className="relative py-24 px-6 bg-[#F3EFEE] text-center overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light text-[#AC9990]/8 pointer-events-none select-none italic leading-none"
        style={{ fontSize: "34vw" }}
      >
        O
      </div>
      <div className="relative z-10 max-w-[720px] mx-auto">
        <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium">
          Excellence in Aesthetics
        </p>
        <h2
          className="font-display m-0 font-light text-[#4B3A33] italic leading-[1.2] mb-5"
          style={{ fontSize: "clamp(2rem,4.5vw,3.4rem)" }}
        >
          Your Trusted Aesthetic Clinic
          <br />
          <span className="text-[#8C4F58]">in Kuala Lumpur</span>
        </h2>
        <div className="flex items-center justify-center gap-2.5 mb-7">
          <span className="flex-1 max-w-[72px] h-px bg-gradient-to-r from-transparent to-[#AB8068]" />
          <span className="w-[5px] h-[5px] rounded-full bg-[#AB8068] flex-none" />
          <span className="flex-1 max-w-[72px] h-px bg-gradient-to-l from-transparent to-[#AB8068]" />
        </div>
        <h3 className="font-display m-0 text-[1.2rem] font-light text-[#4B3A33] italic mb-4">
          Top-Notch Pigmentation Treatment in Malaysia
        </h3>
        <p className="m-0 text-[13.5px] text-[#AC9990] leading-[1.85] font-light">
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
    <section className="relative py-24 bg-[#4B3A33] overflow-hidden">
      <div
        className="absolute rounded-full pointer-events-none border border-[#AC9990]/10"
        style={{ top: -50, right: -50, width: 380, height: 380 }}
      />
      <div
        className="absolute rounded-full pointer-events-none border border-[#AB8068]/6"
        style={{ top: 30, right: 20, width: 250, height: 250 }}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="hidden lg:grid gap-16 items-start"
          style={{ gridTemplateColumns: "300px 1fr" }}
        >
          <div>
            <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium">
              Client Stories
            </p>
            <h2
              className="font-display m-0 font-light text-[#FAF8F7] italic mb-4"
              style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}
            >
              Reviews
            </h2>
            <div className="w-10 h-px bg-[#AB8068] mb-6" />
            <div className="flex flex-col gap-1">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`text-left px-3.5 py-3 rounded-xl w-full cursor-pointer border-l-2 transition-all duration-200 bg-transparent
                    ${i === current ? "bg-[rgba(171,128,104,0.10)] border-l-[#AB8068]" : "border-l-transparent hover:bg-white/4"}`}
                >
                  <p className="m-0 text-[13px] font-medium text-[#F3EFEE]/82">
                    {t.name}
                  </p>
                  <p className="m-0 text-[10.5px] text-white/32 tracking-wide">
                    {t.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="relative" style={{ minHeight: 300 }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === current ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "none" : "translateY(12px)",
                  transition: "opacity 0.65s ease, transform 0.65s ease",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <div className="font-display text-[80px] leading-[0.7] text-[#AB8068]/28 italic mb-3">
                  "
                </div>
                <p className="m-0 text-[15px] text-[#F3EFEE]/75 leading-[1.85] font-light italic">
                  "{t.text}"
                </p>
                <div className="mt-7">
                  <div className="flex gap-1 mb-2.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        fill="#AB8068"
                        style={{ color: "#AB8068" }}
                      />
                    ))}
                  </div>
                  <p className="m-0 text-[14px] font-medium text-[#FAF8F7]">
                    {t.name}
                  </p>
                  <p className="m-0 text-[11px] text-white/32 tracking-wide mt-0.5">
                    {t.age} - {t.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2.5 mt-9">
              {[
                { fn: prev, Icon: ChevronLeft },
                { fn: next, Icon: ChevronRight },
              ].map(({ fn, Icon }, idx) => (
                <button
                  key={idx}
                  onClick={fn}
                  className="w-[34px] h-[34px] rounded-full border border-[#AC9990]/18 bg-[rgba(172,153,144,0.06)] text-[#AB8068] flex items-center justify-center hover:bg-[rgba(171,128,104,0.14)] transition-all duration-200 cursor-pointer"
                >
                  <Icon size={15} />
                </button>
              ))}
              <span className="text-[10px] tracking-[0.2em] text-white/25 ml-1.5">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium text-center">
            Client Stories
          </p>
          <h2
            className="font-display m-0 font-light text-[#FAF8F7] italic text-center mb-6"
            style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}
          >
            Reviews
          </h2>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="min-w-full px-1">
                  <div className="bg-white/3 border-t-2 border-[#AB8068] px-6 py-7">
                    <div className="font-display text-[56px] leading-[0.7] text-[#AB8068]/28 italic mb-3">
                      "
                    </div>
                    <p className="m-0 text-[#F3EFEE]/75 leading-[1.85] font-light italic text-[0.95rem]">
                      "{t.text}"
                    </p>
                    <div className="mt-5">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={11}
                            fill="#AB8068"
                            style={{ color: "#AB8068" }}
                          />
                        ))}
                      </div>
                      <p className="m-0 text-[14px] font-medium text-[#FAF8F7]">
                        {t.name}
                      </p>
                      <p className="m-0 text-[11px] text-white/32 tracking-wide mt-0.5">
                        {t.age} - {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3.5 mt-5">
            <button
              onClick={prev}
              className="w-[34px] h-[34px] rounded-full border border-[#AC9990]/22 bg-white/5 text-[#AB8068] flex items-center justify-center hover:bg-[rgba(171,128,104,0.12)] transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-[3px] border-none cursor-pointer rounded-sm p-0 transition-all duration-300 ${i === current ? "bg-[#AB8068]" : "bg-white/18"}`}
                  style={{ width: i === current ? 20 : 8 }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-[34px] h-[34px] rounded-full border border-[#AC9990]/22 bg-white/5 text-[#AB8068] flex items-center justify-center hover:bg-[rgba(171,128,104,0.12)] transition-all duration-200 cursor-pointer"
            >
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
    <section className="py-24 bg-[#FAF8F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-11">
          <div>
            <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-1.5 font-medium">
              From the Journal
            </p>
            <h2
              className="font-display m-0 font-light text-[#4B3A33] italic"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Blog
            </h2>
          </div>
          <a
            href="https://ozhean.com.my/blog/"
            className="hidden md:flex items-center gap-1.5 text-[10.5px] tracking-[0.2em] uppercase text-[#8C4F58] no-underline font-medium hover:gap-3 transition-all duration-200"
          >
            View All Blogs <MoveRight size={13} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
          {BLOG_POSTS.map((p, i) => (
            <a key={i} href={p.href} className="group block no-underline">
              <div
                className="relative rounded-2xl overflow-hidden mb-4"
                style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(75,58,51,0.42)] to-transparent" />
                <span className="absolute bottom-3.5 left-4 bg-[#8C4F58] text-[#FAF8F7] text-[9.5px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium">
                  {p.category}
                </span>
              </div>
              <div className="px-1">
                <h3 className="font-display m-0 text-[1.3rem] font-normal text-[#4B3A33] italic mb-2.5 leading-[1.3] group-hover:text-[#8C4F58] transition-colors duration-200">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[10.5px] tracking-[0.18em] uppercase text-[#8C4F58] font-medium">
                  Read Article <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="md:hidden text-center mt-7">
          <a
            href="https://ozhean.com.my/blog/"
            className="text-[#8C4F58] text-[12px] tracking-[0.14em] uppercase no-underline"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px]">
          <img
            src="/images/timeless-beauty.png"
            alt="Book a treatment at Ozhean"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(75,58,51,0.72)] to-[rgba(140,79,88,0.52)]" />
          <div className="absolute bottom-12 left-12 right-12">
            <p className="m-0 text-[11px] tracking-[0.22em] uppercase text-[#AC9990] mb-2.5">
              Ready to begin?
            </p>
            <h2
              className="font-display m-0 font-light text-[#FAF8F7] italic leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}
            >
              Your journey to radiant skin starts here.
            </h2>
          </div>
        </div>
        <div className="bg-[#F3EFEE] px-14 py-16 flex flex-col justify-center max-lg:px-8 max-lg:py-12">
          <p className="m-0 text-[10.5px] tracking-[0.25em] uppercase text-[#AB8068] mb-2 font-medium">
            Consultation Request
          </p>
          <h3
            className="font-display m-0 font-light text-[#4B3A33] italic leading-[1.2] mb-8"
            style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)" }}
          >
            Book your treatment
            <br />
            with us now
          </h3>
          <form
            className="flex flex-col gap-3.5"
            name="Booking Form"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="px-[18px] py-3 border border-[#AC9990]/28 rounded-2xl bg-white text-[13px] text-[#4B3A33] outline-none placeholder:text-[#AC9990]/55 focus:border-[#AB8068] focus:ring-2 focus:ring-[#AB8068]/10 transition-all font-light"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="px-[18px] py-3 border border-[#AC9990]/28 rounded-2xl bg-white text-[13px] text-[#4B3A33] outline-none placeholder:text-[#AC9990]/55 focus:border-[#AB8068] focus:ring-2 focus:ring-[#AB8068]/10 transition-all font-light"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="px-[18px] py-3 border border-[#AC9990]/28 rounded-2xl bg-white text-[13px] text-[#4B3A33] outline-none placeholder:text-[#AC9990]/55 focus:border-[#AB8068] focus:ring-2 focus:ring-[#AB8068]/10 transition-all font-light"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Message (optional)"
              style={{ resize: "none" }}
              className="px-[18px] py-3 border border-[#AC9990]/28 rounded-2xl bg-white text-[13px] text-[#4B3A33] outline-none placeholder:text-[#AC9990]/55 focus:border-[#AB8068] focus:ring-2 focus:ring-[#AB8068]/10 transition-all font-light"
            />
            <button
              type="submit"
              className="py-3.5 bg-[#8C4F58] text-[#FAF8F7] border-none rounded-full text-[11px] tracking-[0.2em] uppercase font-medium cursor-pointer shadow-[0_4px_18px_rgba(140,79,88,0.22)] hover:bg-[#7a4450] hover:-translate-y-px transition-all duration-200"
            >
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
    <footer className="bg-[#4B3A33] text-[#AC9990]/65">
      <div className="h-[2px] bg-gradient-to-r from-[#8C4F58] via-[#AB8068] to-[#8C4F58]" />
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-14 max-w-[1200px] mx-auto px-7 pt-16 pb-12 max-md:gap-9 max-md:px-6 max-md:pt-12">
        <div>
          <img
            src="https://ozhean.com.my/wp-content/uploads/Ozhean-logo-Grey.png"
            alt="Ozhean Clinic"
            className="h-7 mb-3.5 brightness-0 invert opacity-55"
          />
          <p className="font-display text-[12.5px] text-[#AC9990]/45 leading-[1.7] italic mb-5 m-0">
            Genuine Aesthetic Standard from
            <br />
            Gangnam.
          </p>
          <div className="flex gap-3 mb-5">
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
                className="w-8 h-8 rounded-full border border-[#AC9990]/18 flex items-center justify-center text-[#AC9990]/45 no-underline hover:border-[#AB8068] hover:text-[#AB8068] hover:bg-[rgba(171,128,104,0.10)] transition-all duration-200"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
          <img
            src="https://ozhean.com.my/wp-content/uploads/review.png"
            alt="Google Reviews"
            className="h-11 opacity-45"
          />
        </div>
        <div>
          <h4 className="m-0 text-[10.5px] tracking-[0.22em] uppercase text-[#AC9990]/40 mb-4 font-medium">
            Treatments
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
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
                <a
                  href={h}
                  className="text-[12.5px] text-[#AC9990]/50 no-underline hover:text-[#AB8068] transition-colors duration-200 tracking-wide"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="m-0 text-[10.5px] tracking-[0.22em] uppercase text-[#AC9990]/40 mb-4 font-medium">
            Contact Us
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            <li className="flex gap-2.5 items-start">
              <Phone
                size={12}
                className="text-[#AB8068] mt-0.5 flex-shrink-0"
              />
              <div className="flex flex-col">
                <a
                  href="tel:+60126688034"
                  className="text-[12px] text-[#AC9990]/52 no-underline hover:text-[#AB8068] transition-colors duration-200 leading-relaxed"
                >
                  012-6688034
                </a>
                <a
                  href="tel:+60126663291"
                  className="text-[12px] text-[#AC9990]/52 no-underline hover:text-[#AB8068] transition-colors duration-200 leading-relaxed"
                >
                  012-6663291
                </a>
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <Mail size={12} className="text-[#AB8068] mt-0.5 flex-shrink-0" />
              <a
                href="mailto:appointment@ozhean.com.my"
                className="text-[12px] text-[#AC9990]/52 no-underline hover:text-[#AB8068] transition-colors duration-200 break-all"
              >
                appointment@ozhean.com.my
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <MapPin
                size={12}
                className="text-[#AB8068] mt-0.5 flex-shrink-0"
              />
              <div>
                <p className="m-0 text-[10px] tracking-[0.2em] uppercase text-[#AB8068] mb-0.5">
                  Bangsar
                </p>
                <a
                  href="https://goo.gl/maps/6p5tnjoJwTuhGxmUA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11.5px] text-[#AC9990]/42 no-underline leading-[1.6] hover:text-[#AB8068] transition-colors duration-200"
                >
                  156, Jalan Maarof, Bangsar, 59000 Kuala Lumpur.
                </a>
                <p className="m-0 text-[10px] tracking-[0.2em] uppercase text-[#AB8068] mt-2.5 mb-0.5">
                  Bukit Jalil
                </p>
                <a
                  href="https://goo.gl/maps/xipWiMgGZgqhWbmDA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11.5px] text-[#AC9990]/42 no-underline leading-[1.6] hover:text-[#AB8068] transition-colors duration-200"
                >
                  GF, 1-37, Residensi Park Bukit Jalil, 57000 Bukit Jalil, Kuala
                  Lumpur.
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#AC9990]/10 py-4">
        <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between flex-wrap gap-3">
          <p className="m-0 text-[11px] text-[#AC9990]/28 tracking-wider">
            {String.fromCharCode(169)} {new Date().getFullYear()} Ozhean Clinic.
            All rights reserved.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            {[
              { href: "https://bit.ly/OzheanCS1", label: "WhatsApp" },
              { href: "https://bit.ly/OzheanCS2", label: "WhatsApp (Chinese)" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-green-900/14 border border-green-700/22 text-green-400/65 text-[10.5px] tracking-wider px-3.5 py-1.5 rounded-full no-underline hover:bg-green-900/22 transition-all duration-200"
              >
                {WA_ICON} {label}
              </a>
            ))}
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
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-[200] w-[50px] h-[50px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.32)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.42)] transition-all duration-200 no-underline"
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

export default function OzheanPageLanding() {
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
