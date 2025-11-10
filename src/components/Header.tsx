import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, MessageCircle, Calendar, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/doctors", label: "Doctors" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
              <svg
                className="h-6 w-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">CarePlus</span>
              <span className="text-xs text-muted-foreground">Medical Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+1234567890">
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/doctors">
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={() => navigate("/profile")}>
                <User className="h-4 w-4" />
                Profile
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4 px-4">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+1234567890">
                  <Phone className="h-4 w-4" />
                  Call Clinic
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link to="/doctors" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              {isLoggedIn ? (
                <Button variant="outline" size="sm" onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }}>
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={() => { navigate("/auth"); setMobileMenuOpen(false); }}>
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
