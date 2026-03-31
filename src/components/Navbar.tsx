import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Xe ghép", path: "/xe-ghep" },
  { label: "Xe du lịch", path: "/xe-du-lich" },
  { label: "Địa điểm", path: "/dia-diem" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  { label: "Liên hệ", path: "/lien-he" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          🚗 XeQuảngTrị
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0905123456" className="flex items-center gap-2">
            <Button variant="default" className="cta-shadow gap-2">
              <Phone className="h-4 w-4" />
              0905.123.456
            </Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card animate-slide-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:0905123456" className="mt-2">
              <Button className="w-full cta-shadow gap-2">
                <Phone className="h-4 w-4" />
                0905.123.456
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
