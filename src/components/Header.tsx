import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, MessageCircle, Calendar, Menu, X, User, Heart } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-background via-primary/5 to-background backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Heart className="h-6 w-6 text-primary-foreground animate-pulse" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">CarePlus</span>
              <span className="text-xs text-muted-foreground">Medical Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="transition-all duration-300 hover:scale-105">
              <a href="tel:+1234567890">
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="transition-all duration-300 hover:scale-105">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-primary to-primary/80">
              <Link to="/doctors">
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={() => navigate("/profile")} className="transition-all duration-300 hover:scale-105">
                <User className="h-4 w-4" />
                Profile
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={() => navigate("/auth")} className="transition-all duration-300 hover:scale-105">
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
