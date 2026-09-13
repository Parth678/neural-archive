import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#skills" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/projects") {
      return location.pathname === "/projects";
    }
    const hash = href.split("#")[1];
    if (hash) {
      return location.pathname === "/" && location.hash === `#${hash}`;
    }
    return location.pathname === "/";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-4 py-1.5 rounded-full font-body-sm text-body-sm transition-all ${
                isActive(link.href)
                  ? "bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(160,120,255,0.35)]"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-tertiary text-on-tertiary font-title-sm text-body-sm uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(255,185,95,0.35)] hover:bg-tertiary-container hover:text-on-tertiary-container hover:shadow-[0_0_28px_rgba(202,129,0,0.55)] active:scale-95"
          >
            Let&apos;s Talk
          </Link>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-surface-container px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`block px-4 py-3 rounded-lg font-mono-custom text-sm transition-all ${
                isActive(link.href)
                  ? "bg-primary-container/15 text-primary-soft font-bold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-5 py-3 mt-4 rounded-full bg-tertiary text-on-tertiary font-mono-custom font-semibold text-sm"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;