import {
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "https://ozhean.com.my/" },
  { label: "About", href: "https://ozhean.com.my/about/" },
  { label: "Doctors", href: "https://ozhean.com.my/doctors/" },
  { label: "Treatments", href: "https://ozhean.com.my/treatments/" },
  { label: "Contact", href: "https://ozhean.com.my/contact/" },
  { label: "Outlets", href: "https://ozhean.com.my/outlets/" },
  { label: "Blog", href: "https://ozhean.com.my/blog/" },
];
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <Topbar />
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
    </>
  );
}
