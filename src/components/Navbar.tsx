import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Trang chủ", path: "/#trang-chu" },
  { label: "Dịch vụ", path: "/#dich-vu" },
  { label: "Khách hàng", path: "/#khach-hang" },
  { label: "Đội xe", path: "/#doi-xe" },
  { label: "Quy trình", path: "/#quy-trinh" },
  { label: "Báo giá", path: "/#bao-gia" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Tân Oanh Transport">
          <img src={logo} alt="Tân Oanh Transport" className="h-12 w-auto" />
          <div className="hidden lg:block leading-tight">
            <p className="font-extrabold text-foreground tracking-wide">TÂN OANH</p>
            <p className="text-xs text-muted-foreground">Corporate Transportation</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/" && item.path === "/#trang-chu"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0866600822" className="flex items-center gap-2">
            <Button variant="default" className="cta-shadow gap-2">
              <Phone className="h-4 w-4" />
              08.666.008.22
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
              <a
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a href="tel:0866600822" className="mt-2">
              <Button className="w-full cta-shadow gap-2">
                <Phone className="h-4 w-4" />
                08.666.008.22
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
